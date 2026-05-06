"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  CreditCard, 
  Activity, 
  LifeBuoy, 
  Settings, 
  ChevronRight, 
  CheckCircle2, 
  ArrowUpRight,
  Wifi,
  Calendar,
  User as UserIcon
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const userData = {
  name: "Syal Pratama",
  email: "syal@nsc.id",
  memberSince: "Oktober 2025",
  activePlan: {
    name: "Starlink Enterprise LEO",
    speed: "Up to 350 Mbps",
    status: "Active",
    expiryDate: "12 Mei 2026",
  }
};

const customerServices = [
  { 
    icon: <CreditCard className="w-6 h-6" />, 
    title: "Billing & Pembayaran", 
    desc: "Cek tagihan, riwayat transaksi, dan bayar aman.",
    href: "/customer/pembayaran" 
  },
  { 
    icon: <Settings className="w-6 h-6" />, 
    title: "Kelola Layanan", 
    desc: "Upgrade paket dan konfigurasi perangkat Anda.",
    href: "/customer/layanan"
  },
  { 
    icon: <LifeBuoy className="w-6 h-6" />, 
    title: "Pusat Bantuan", 
    desc: "Buka tiket keluhan atau hubungi teknisi 24/7.",
    href: "/customer/bantuan"
  },
];

export default function CustomerPortal() {
  return (
    // Menggunakan warna request anda #273E66 sebagai latar belakang utama
    <main className="relative flex min-h-screen w-full flex-col bg-[#273E66] text-white selection:bg-blue-400/30 overflow-hidden font-sans">
      
      
      {/* Background Decor - Menggunakan partikel putih dengan opacity rendah */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <Image src="/particle7.webp" alt="bg" fill className="object-cover" />
        {/* Soft radial gradient untuk dimensi agar tidak flat */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 lg:px-12">
        
        {/* --- WELCOME HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h4 className="text-blue-300 text-[10px] font-black uppercase tracking-[0.5em] mb-3 opacity-80">Workspace Portal</h4>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Hello, {userData.name}!</h1>
            <p className="text-blue-100/60 mt-3 font-medium">Selamat datang kembali di pusat kendali Nusantara Star Connect.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md shadow-xl"
          >
            <div className="h-12 w-12 rounded-full bg-blue-400/10 flex items-center justify-center text-blue-300 border border-blue-400/20">
              <UserIcon size={24} />
            </div>
            <div>
              <p className="text-[9px] uppercase font-black text-blue-200/50 tracking-widest leading-none mb-1.5">Status Akun</p>
              <p className="text-sm font-bold text-white tracking-wide">Verified Member</p>
            </div>
          </motion.div>
        </div>

        {/* --- MAIN DASHBOARD CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: Active Subscription Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#1E3050] p-8 md:p-10 shadow-2xl shadow-black/30"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 bg-white rounded-2xl text-[#273E66] shadow-xl">
                    <Wifi size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-white">{userData.activePlan.name}</h2>
                    <p className="text-blue-300/80 text-[10px] font-black uppercase tracking-widest mt-1">Active Subscription</p>
                  </div>
                </div>
                <div className="hidden md:block px-4 py-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full">
                  <span className="text-emerald-400 text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> {userData.activePlan.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-white/5">
                <div className="space-y-1">
                  <p className="text-blue-200/40 text-[10px] uppercase font-black tracking-widest">Bandwidth Speed</p>
                  <p className="text-xl font-bold text-white leading-none">{userData.activePlan.speed}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-blue-200/40 text-[10px] uppercase font-black tracking-widest">Expiry Date</p>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-blue-300/60" />
                    <p className="text-xl font-bold text-white leading-none">{userData.activePlan.expiryDate}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-[#273E66] text-[11px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-blue-50 transition-all shadow-lg active:scale-95">
                  Upgrade Plan
                </button>
                <button className="px-8 py-4 bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white/10 transition-all active:scale-95">
                  Billing Details
                </button>
              </div>
            </div>
            
            {/* Background Decorative Glow */}
            <div className="absolute top-0 right-0 -mt-24 -mr-24 h-64 w-64 bg-white/5 blur-[80px] rounded-full" />
          </motion.div>

          {/* RIGHT: Quick Action Services */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-4">
            {customerServices.map((service, idx) => (
              <Link href={service.href || "#"} key={idx} className="block">
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="group flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white hover:shadow-xl hover:shadow-black/20 transition-all cursor-pointer active:scale-[0.98]"
                >
                  <div className="p-3 rounded-xl bg-white/5 text-blue-200 group-hover:bg-[#273E66] group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm font-bold text-white group-hover:text-[#273E66] transition-colors">{service.title}</h3>
                    <p className="text-[11px] text-blue-100/40 group-hover:text-[#273E66]/60 transition-colors leading-tight mt-1.5 font-medium">{service.desc}</p>
                  </div>
                  <ChevronRight size={16} className="text-white/20 group-hover:text-[#273E66] transition-colors flex-shrink-0" />
                </motion.div>
              </Link>
            ))}
          </div>

        </div>

        {/* --- INFO SECTION --- */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-28 grid grid-cols-1 lg:grid-cols-2 items-center gap-20"
        >
          <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
            <Image src="/particle9.webp" alt="Satellite" fill className="object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#273E66] via-transparent to-transparent opacity-60" />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold uppercase text-white mb-8 tracking-tighter leading-none">Optimalkan <br /> Konektivitas <span className="text-blue-300">NSC</span></h2>
            <div className="space-y-6">
              {[
                "Pantau Latensi Dibawah 50ms",
                "Update Firmware Perangkat Otomatis",
                "Layanan Support Prioritas 24/7",
                "Jaminan Uptime 99.9%"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-6 w-6 rounded-full bg-blue-300/10 flex items-center justify-center text-blue-300 border border-blue-300/20">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-blue-100/70 font-semibold tracking-wide text-sm">{item}</span>
                </div>
              ))}
            </div>
            <button className="mt-14 group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] border-b-2 border-blue-300 pb-3 hover:text-blue-300 transition-all">
              Lihat Analisis Mendalam <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.section>

      </div>

      <Footer />
    </main>
  );
}