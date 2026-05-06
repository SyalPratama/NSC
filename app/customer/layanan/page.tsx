"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Settings, ArrowLeft, Zap, Shield, Server, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col bg-[#273E66] text-white selection:bg-blue-400/30 overflow-hidden font-sans">
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <Image src="/particle7.webp" alt="bg" fill className="object-cover" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 lg:px-12">
        
        <div className="mb-12">
          <Link href="/customer" className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={16} /> Kembali ke Dashboard
          </Link>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h4 className="text-blue-300 text-[10px] font-black uppercase tracking-[0.5em] mb-3 opacity-80">Configuration</h4>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Kelola Layanan</h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Upgrade Plan Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-1 rounded-[32px] border border-white/10 bg-[#1E3050] p-8 shadow-2xl relative overflow-hidden"
          >
             <div className="relative z-10">
               <div className="p-3.5 bg-white inline-block rounded-2xl text-[#273E66] mb-6">
                 <Zap size={24} strokeWidth={2.5} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Upgrade Speed</h3>
               <p className="text-sm text-blue-100/60 mb-6 leading-relaxed">Tingkatkan kecepatan Anda hingga 1 Gbps untuk kebutuhan enterprise dan latensi yang lebih rendah.</p>
               <button className="w-full py-4 bg-white text-[#273E66] text-[11px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-blue-50 transition-all active:scale-95">
                  Lihat Paket Tersedia
               </button>
             </div>
             <div className="absolute bottom-0 right-0 h-40 w-40 bg-white/5 blur-[50px] rounded-full" />
          </motion.div>

          {/* Device Management List */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: <Server size={20}/>, title: "Konfigurasi Router NSC-X1", desc: "Ubah nama WiFi (SSID), password, dan port forwarding." },
              { icon: <Shield size={20}/>, title: "Keamanan & Firewall", desc: "Kelola filter MAC Address dan proteksi jaringan dari serangan DDoS." },
              { icon: <Settings size={20}/>, title: "Kalibrasi Antena Satelit", desc: "Sesuaikan sudut penerimaan satelit LEO untuk sinyal optimal." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="group flex items-center gap-5 p-6 rounded-[24px] border border-white/5 bg-white/[0.03] hover:bg-white hover:shadow-xl hover:shadow-black/20 transition-all cursor-pointer active:scale-[0.98]"
              >
                <div className="p-4 rounded-2xl bg-white/5 text-blue-200 group-hover:bg-[#273E66] group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#273E66] transition-colors">{service.title}</h3>
                  <p className="text-sm text-blue-100/40 group-hover:text-[#273E66]/60 transition-colors mt-1 font-medium">{service.desc}</p>
                </div>
                <ArrowUpRight size={20} className="text-white/20 group-hover:text-[#273E66] transition-colors" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}