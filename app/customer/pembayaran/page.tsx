"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CreditCard, ArrowLeft, Download, CheckCircle2, Clock, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BillingPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col bg-[#273E66] text-white selection:bg-blue-400/30 overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <Image src="/particle7.webp" alt="bg" fill className="object-cover" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 lg:px-12">
        
        {/* Navigation & Header */}
        <div className="mb-12">
          <Link href="/customer" className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={16} /> Kembali ke Dashboard
          </Link>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h4 className="text-blue-300 text-[10px] font-black uppercase tracking-[0.5em] mb-3 opacity-80">Finance Center</h4>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Billing & Pembayaran</h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Current Bill Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#1E3050] p-8 shadow-2xl shadow-black/30"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 bg-white rounded-2xl text-[#273E66]">
                  <CreditCard size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Tagihan Bulan Ini</h2>
                  <p className="text-blue-300/80 text-[10px] font-black uppercase tracking-widest mt-1">Jatuh Tempo: 12 Mei 2026</p>
                </div>
              </div>
              <h3 className="text-5xl font-black text-white mb-6">Rp 1.450.000</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-[#273E66] text-[11px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-blue-50 transition-all shadow-lg active:scale-95">
                  Bayar Sekarang
                </button>
                <button className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white/10 transition-all active:scale-95">
                  <Download size={14} /> Unduh Invoice
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 -mt-24 -mr-24 h-64 w-64 bg-white/5 blur-[80px] rounded-full" />
          </motion.div>

          {/* Transaction History */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 bg-white/[0.03] border border-white/5 rounded-[32px] p-8"
          >
            <h3 className="text-lg font-bold text-white mb-6">Riwayat Transaksi</h3>
            <div className="space-y-4">
              {[
                { date: "12 Apr 2026", amount: "Rp 1.450.000", status: "Lunas", icon: <CheckCircle2 size={18} className="text-emerald-400" /> },
                { date: "12 Mar 2026", amount: "Rp 1.450.000", status: "Lunas", icon: <CheckCircle2 size={18} className="text-emerald-400" /> },
                { date: "12 Feb 2026", amount: "Rp 1.450.000", status: "Lunas", icon: <CheckCircle2 size={18} className="text-emerald-400" /> }
              ].map((tx, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-white/5 text-blue-300">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{tx.date}</p>
                      <p className="text-[11px] text-blue-200/60 font-medium">{tx.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-bold text-white">{tx.amount}</p>
                    {tx.icon}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}