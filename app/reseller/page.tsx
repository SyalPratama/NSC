"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  TrendingUp, 
  Handshake, 
  BarChart3, 
  ChevronRight, 
  Copy, 
  Share2, 
  Users, 
  Wallet,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock Data Reseller
const resellerData = {
  name: "Syal Pratama",
  company: "PT Contoh",
  tier: "Gold Partner",
  referralCode: "NSC-BTT-2026",
  stats: {
    totalSales: "Rp 145.000.000",
    activeClients: 24,
    commission: "Rp 12.500.000"
  }
};

export default function ResellerPortal() {
  const [copied, setCopied] = useState(false);
  const referralLink = `https://nsc.id/register?ref=${resellerData.referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col bg-[#273E66] text-white selection:bg-blue-400/30 overflow-hidden font-sans">
      <Navbar />
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <Image src="/particle7.webp" alt="bg" fill className="object-cover" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 lg:px-12">
        
        {/* --- PARTNER HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h4 className="text-blue-300 text-[10px] font-black uppercase tracking-[0.5em] mb-3 opacity-80">Reseller Dashboard</h4>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Welcome, {resellerData.name}!</h1>
            <p className="text-blue-100/60 mt-3 font-medium">{resellerData.company} — <span className="text-blue-300">{resellerData.tier}</span></p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md"
          >
            <div className="h-12 w-12 rounded-full bg-emerald-400/10 flex items-center justify-center text-emerald-400 border border-emerald-400/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-[9px] uppercase font-black text-blue-200/50 tracking-widest leading-none mb-1.5">Earnings Today</p>
              <p className="text-sm font-bold text-white tracking-wide">Rp 1.250.000</p>
            </div>
          </motion.div>
        </div>

        {/* --- KEY STATS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "Total Penjualan", val: resellerData.stats.totalSales, icon: <BarChart3 size={20}/> },
            { label: "Klien Aktif", val: resellerData.stats.activeClients, icon: <Users size={20}/> },
            { label: "Komisi Tersedia", val: resellerData.stats.commission, icon: <Wallet size={20}/> },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm"
            >
              <div className="text-blue-300/50 mb-3">{stat.icon}</div>
              <p className="text-blue-200/40 text-[10px] uppercase font-black tracking-widest">{stat.label}</p>
              <p className="text-xl font-bold mt-1">{stat.val}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- LEFT: REFERRAL SECTION --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 p-8 md:p-10 rounded-[32px] border border-white/10 bg-[#1E3050] relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500 rounded-xl shadow-lg">
                  <Share2 size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-white">Bagikan Link Referral</h2>
                  <p className="text-blue-300/60 text-xs font-medium">Dapatkan komisi dari setiap klien yang mendaftar melalui link Anda.</p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-[10px] uppercase font-black text-blue-200/40 tracking-widest ml-1">Your Unique Link</p>
                <div className="flex items-center gap-2 p-2 rounded-2xl bg-black/20 border border-white/5">
                  <input 
                    readOnly 
                    value={referralLink}
                    className="flex-grow bg-transparent px-4 py-2 text-sm font-mono text-blue-200 outline-none overflow-hidden text-ellipsis"
                  />
                  <button 
                    onClick={copyToClipboard}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                      copied ? "bg-emerald-500 text-white" : "bg-white text-[#273E66] hover:bg-blue-50"
                    }`}
                  >
                    {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-[10px] text-blue-200/40 font-bold uppercase mb-1">Click Rate</p>
                  <p className="text-lg font-bold">1,240 <span className="text-[10px] text-emerald-400 font-normal ml-1">↑ 12%</span></p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-[10px] text-blue-200/40 font-bold uppercase mb-1">Conversion</p>
                  <p className="text-lg font-bold">8.4% <span className="text-[10px] text-emerald-400 font-normal ml-1">↑ 2%</span></p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 bg-white/5 blur-[80px] rounded-full" />
          </motion.div>

          {/* --- RIGHT: RECENT ACTIVITY / TOOLS --- */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-300/50 ml-2 mb-2">Partner Quick Tools</h3>
            
            {[
              { title: "Manajemen Klien", desc: "Lihat daftar & status layanan klien Anda", icon: <Users size={20}/> },
              { title: "Aset Pemasaran", desc: "Download brosur & banner promosi", icon: <Share2 size={20}/> },
              { title: "Request Pencairan", desc: "Tarik komisi ke rekening bank Anda", icon: <Wallet size={20}/> },
            ].map((tool, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10 }}
                className="group flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white transition-all cursor-pointer shadow-lg"
              >
                <div className="p-3 rounded-xl bg-white/5 text-blue-200 group-hover:bg-[#273E66] group-hover:text-white transition-all">
                  {tool.icon}
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#273E66] transition-colors">{tool.title}</h4>
                  <p className="text-[11px] text-blue-100/40 group-hover:text-[#273E66]/60 transition-colors mt-1 font-medium">{tool.desc}</p>
                </div>
                <ChevronRight size={16} className="text-white/20 group-hover:text-[#273E66] transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- BANNER: BECOME EXPERT --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-12 rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent text-center"
        >
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-tighter">Butuh Bantuan Strategi Penjualan?</h2>
          <p className="text-blue-100/50 max-w-2xl mx-auto mb-10 text-sm leading-relaxed">
            Ikuti webinar eksklusif mitra setiap minggu untuk mendapatkan tips terbaru cara menjual teknologi satelit LEO di area remote Indonesia.
          </p>
          <button className="px-10 py-4 bg-transparent border-2 border-blue-300 text-blue-300 text-[11px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-blue-300 hover:text-[#273E66] transition-all flex items-center gap-3 mx-auto">
            Daftar Webinar Partner <ArrowUpRight size={16} />
          </button>
        </motion.div>

      </div>

      <Footer />
    </main>
  );
}