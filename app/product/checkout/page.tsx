"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  User, 
  MapPin, 
  CreditCard, 
  ShieldCheck, 
  Wallet, 
  Building2,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("transfer");

  return (
    <main className="relative flex min-h-screen w-full flex-col bg-[#273E66] text-white selection:bg-blue-400/30 overflow-x-hidden font-sans">
      <Navbar />

      {/* Background Decor */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <Image src="/earth.webp" alt="bg" fill className="object-cover" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 lg:px-12">
        
        {/* Navigation & Header */}
        <div className="mb-12">
          <Link href="/product" className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={16} /> Kembali ke Pilihan Produk
          </Link>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h4 className="text-blue-300 text-[10px] font-black uppercase tracking-[0.5em] mb-3 opacity-80">Secure Checkout</h4>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Selesaikan Pesanan</h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* LEFT: Formulir Checkout */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Form Informasi Pribadi */}
            <div className="bg-[#1E3050] border border-white/10 rounded-[24px] p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-400/10 rounded-lg text-blue-300">
                  <User size={20} />
                </div>
                <h2 className="text-xl font-bold text-white">Informasi Pelanggan</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-blue-200/60">Nama Lengkap</label>
                  <input type="text" placeholder="Masukkan nama Anda" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-blue-100/30 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-blue-200/60">Nomor Telepon / WA</label>
                  <input type="tel" placeholder="0812xxxxxx" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-blue-100/30 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-blue-200/60">Email Address</label>
                  <input type="email" placeholder="email@contoh.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-blue-100/30 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all" />
                </div>
              </div>
            </div>

            {/* Form Alamat Pemasangan */}
            <div className="bg-[#1E3050] border border-white/10 rounded-[24px] p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-400/10 rounded-lg text-blue-300">
                  <MapPin size={20} />
                </div>
                <h2 className="text-xl font-bold text-white">Alamat Pemasangan</h2>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-blue-200/60">Alamat Lengkap</label>
                  <textarea rows={3} placeholder="Nama jalan, gedung, nomor rumah..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-blue-100/30 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all resize-none"></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-blue-200/60">Kota / Kabupaten</label>
                    <input type="text" placeholder="Pilih Kota" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-blue-100/30 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-blue-200/60">Kode Pos</label>
                    <input type="text" placeholder="12345" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-blue-100/30 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all" />
                  </div>
                </div>
              </div>
            </div>

            {/* Metode Pembayaran */}
            <div className="bg-[#1E3050] border border-white/10 rounded-[24px] p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-400/10 rounded-lg text-blue-300">
                  <ShieldCheck size={20} />
                </div>
                <h2 className="text-xl font-bold text-white">Metode Pembayaran</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={() => setPaymentMethod('transfer')}
                  className={`flex flex-col items-center justify-center gap-3 p-4 rounded-xl border transition-all ${paymentMethod === 'transfer' ? 'bg-white/10 border-blue-400' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                >
                  <Building2 size={24} className={paymentMethod === 'transfer' ? 'text-blue-300' : 'text-blue-200/50'} />
                  <span className="text-[11px] font-bold uppercase tracking-widest">Bank Transfer</span>
                </button>
                <button 
                  onClick={() => setPaymentMethod('card')}
                  className={`flex flex-col items-center justify-center gap-3 p-4 rounded-xl border transition-all ${paymentMethod === 'card' ? 'bg-white/10 border-blue-400' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                >
                  <CreditCard size={24} className={paymentMethod === 'card' ? 'text-blue-300' : 'text-blue-200/50'} />
                  <span className="text-[11px] font-bold uppercase tracking-widest">Kartu Kredit</span>
                </button>
                <button 
                  onClick={() => setPaymentMethod('ewallet')}
                  className={`flex flex-col items-center justify-center gap-3 p-4 rounded-xl border transition-all ${paymentMethod === 'ewallet' ? 'bg-white/10 border-blue-400' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                >
                  <Wallet size={24} className={paymentMethod === 'ewallet' ? 'text-blue-300' : 'text-blue-200/50'} />
                  <span className="text-[11px] font-bold uppercase tracking-widest">E-Wallet</span>
                </button>
              </div>
            </div>

          </motion.div>

          {/* RIGHT: Ringkasan Pesanan */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-32 bg-white/[0.03] border border-white/10 rounded-[32px] p-8 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-6">Ringkasan Pesanan</h3>
              
              {/* Product Card Selected */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <div className="p-3 bg-blue-400/20 rounded-xl text-blue-300">
                   {/* Ikon dummy, menyesuaikan produk */}
                   <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Akastar Net</h4>
                  <p className="text-[11px] text-blue-200/60 font-medium">Paket Internet Satelit LEO</p>
                </div>
              </div>

              <div className="space-y-4 mb-6 border-b border-white/10 pb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200/70">Harga Paket (Bulan Pertama)</span>
                  <span className="font-bold">Rp 3.500.000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200/70">Biaya Perangkat & Instalasi</span>
                  <span className="font-bold">Rp 1.000.000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200/70">Pajak (PPN 11%)</span>
                  <span className="font-bold">Rp 495.000</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-200/60 mb-1">Total Pembayaran</p>
                  <p className="text-3xl font-black text-white">Rp 4.995.000</p>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-4 bg-white text-[#273E66] text-[11px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-blue-50 transition-all shadow-xl active:scale-95">
                <CheckCircle2 size={16} /> Bayar Sekarang
              </button>

              <p className="text-center text-[10px] text-blue-200/40 mt-6 mt-4 flex items-center justify-center gap-1">
                <ShieldCheck size={12} /> Transaksi Anda dilindungi enkripsi SSL 256-bit
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </main>
  );
}