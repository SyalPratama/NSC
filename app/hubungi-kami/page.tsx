"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, ShieldCheck, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactInfo = [
  { icon: <Phone size={20} />, title: "Telepon", detail: "+62 8138 9955 512", desc: "Senin - Jumat, 09:00 - 18:00" },
  { icon: <Mail size={20} />, title: "Email", detail: "sales@nsc.id", desc: "Kami balas dalam 24 jam" },
  { icon: <MapPin size={20} />, title: "Kantor Pusat", detail: "Jakarta Selatan, Indonesia", desc: "Grand Fatmawati Mas Blok I No 108, Jl. RS Fatmawati No 20, Cilandak" },
];

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col bg-[#273E66] text-white selection:bg-blue-400/30 font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/career-hero.webp"
          alt="Contact NSC"
          fill
          priority
          className="object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#273E66] via-transparent to-transparent" />
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-[10px] font-black uppercase tracking-[0.5em] text-blue-300 opacity-80"
          >
            Get In Touch
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold uppercase tracking-tighter md:text-6xl"
          >
            Hubungi <span className="text-blue-300">Kami</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-blue-100/60 md:text-lg font-medium"
          >
            Siap untuk transformasi digital? Tim ahli kami siap membantu solusi konektivitas satelit untuk bisnis Anda.
          </motion.p>
        </div>
      </section>

      <div className="relative z-10 flex flex-col items-center px-6 py-12 md:px-12 lg:px-24">
        
        <div className="grid w-full max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold uppercase tracking-tight">Informasi Kontak</h2>
              <p className="text-blue-100/50 text-sm leading-relaxed font-medium">
                Punya pertanyaan spesifik tentang layanan Starlink atau integrasi infrastruktur? Jangan ragu untuk menghubungi kami melalui saluran berikut.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:bg-white/[0.08]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-200/50 mb-1">{info.title}</h4>
                    <p className="text-lg font-bold text-white leading-tight mb-1">{info.detail}</p>
                    <p className="text-[11px] text-blue-100/40 font-medium">{info.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="p-6 rounded-2xl border border-blue-400/10 bg-blue-400/5 flex items-center gap-4">
              <ShieldCheck className="text-blue-300" size={32} />
              <p className="text-[11px] text-blue-100/40 leading-tight font-medium">
                Data Anda aman bersama kami. Kami mematuhi standar privasi data global untuk memastikan kerahasiaan informasi Anda.
              </p>
            </div>
          </div>

          {/* Right Side: Advanced Contact Form */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative rounded-[32px] border border-white/10 bg-[#1E3050] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 bg-white/5 blur-[100px] rounded-full" />

              <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-200/40 ml-1">Nama Depan*</label>
                    <input 
                      type="text" 
                      placeholder="Masukkan Nama Depan..."
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] py-4 px-5 text-sm text-white outline-none transition-all focus:border-blue-400/50 focus:bg-white/[0.1] placeholder:text-blue-100/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-200/40 ml-1">Nama Belakang*</label>
                    <input 
                      type="text" 
                      placeholder="Masukkan Nama Belakang..."
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] py-4 px-5 text-sm text-white outline-none transition-all focus:border-blue-400/50 focus:bg-white/[0.1] placeholder:text-blue-100/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-200/40 ml-1">Email*</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/40" size={16} />
                      <input 
                        type="email" 
                        placeholder="Masukkan Email..."
                        className="w-full rounded-xl border border-white/10 bg-white/[0.05] py-4 pl-12 pr-5 text-sm text-white outline-none transition-all focus:border-blue-400/50 focus:bg-white/[0.1] placeholder:text-blue-100/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-200/40 ml-1">Nomor Handphone*</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/40" size={16} />
                      <input 
                        type="text" 
                        placeholder="+62..."
                        className="w-full rounded-xl border border-white/10 bg-white/[0.05] py-4 pl-12 pr-5 text-sm text-white outline-none transition-all focus:border-blue-400/50 focus:bg-white/[0.1] placeholder:text-blue-100/20"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-blue-200/40 ml-1">Alamat Lengkap*</label>
                  <textarea 
                    rows={3}
                    placeholder="Masukkan Alamat Lengkap..."
                    className="w-full rounded-xl border border-white/10 bg-white/[0.05] py-4 px-5 text-sm text-white outline-none transition-all focus:border-blue-400/50 focus:bg-white/[0.1] placeholder:text-blue-100/20 resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-200/40 ml-1">Provinsi</label>
                    <select className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.05] py-4 px-5 text-sm text-white outline-none transition-all focus:border-blue-400/50 focus:bg-white/[0.1] cursor-pointer">
                      <option className="bg-[#1E3050]">Pilih Provinsi...</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-200/40 ml-1">Kabupaten/Kota</label>
                    <select className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.05] py-4 px-5 text-sm text-white outline-none transition-all focus:border-blue-400/50 focus:bg-white/[0.1] cursor-pointer">
                      <option className="bg-[#1E3050]">Pilih Kabupaten/Kota...</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-200/40 ml-1">Kecamatan</label>
                    <select className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.05] py-4 px-5 text-sm text-white outline-none transition-all focus:border-blue-400/50 focus:bg-white/[0.1] cursor-pointer">
                      <option className="bg-[#1E3050]">Kecamatan...</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-200/40 ml-1">Kelurahan/Desa</label>
                    <select className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.05] py-4 px-5 text-sm text-white outline-none transition-all focus:border-blue-400/50 focus:bg-white/[0.1] cursor-pointer">
                      <option className="bg-[#1E3050]">Kelurahan...</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-200/40 ml-1">Kode Pos*</label>
                    <input 
                      type="text" 
                      placeholder="Kode Pos..."
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] py-4 px-5 text-sm text-white outline-none transition-all focus:border-blue-400/50 focus:bg-white/[0.1] placeholder:text-blue-100/20"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3 py-2">
                  <input type="checkbox" id="agree" className="mt-1 h-4 w-4 rounded border-blue-400/20 bg-transparent text-blue-500 focus:ring-blue-500/50" />
                  <label htmlFor="agree" className="text-xs text-blue-100/40 leading-normal font-medium">
                    Dengan menyetujui artinya Anda bersedia untuk mendapatkan informasi terbaru tentang NSC dan kebijakan privasi kami.
                  </label>
                </div>

                <button className="group relative w-full overflow-hidden rounded-xl bg-white py-4 text-[11px] font-black uppercase tracking-[0.2em] text-[#273E66] transition-all hover:bg-blue-50 active:scale-[0.98] shadow-xl">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Kirim Pesan Sekarang <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Global Presence */}
      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="w-full rounded-[40px] border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-md">
          <Globe className="mx-auto mb-6 text-blue-300 opacity-50" size={48} />
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight text-white">Konektivitas Tanpa Batas</h2>
          <p className="mx-auto max-w-2xl text-blue-100/50 text-sm font-medium leading-relaxed">
            NSC menghadirkan solusi satelit Starlink ke seluruh wilayah Indonesia. Di mana pun bisnis Anda berada, kami punya cara untuk menghubungkannya.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}