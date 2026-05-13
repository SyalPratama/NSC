"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  ArrowLeft, 
  Building2, 
  User, 
  Mail, 
  Phone 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function SubscriptionPage() {
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    ktp: null,
    npwp: null,
    nib: null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    if (e.target.files && e.target.files[0]) {
      setFiles({ ...files, [key]: e.target.files[0] });
    }
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col bg-[#273E66] text-white selection:bg-blue-400/30 overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <Image src="/particle7.webp" alt="bg" fill className="object-cover" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 lg:px-12">
        <Link href="/customer" className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Kembali ke Dashboard</span>
        </Link>

        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Pendaftaran Berlangganan</h1>
            <p className="text-blue-100/60 max-w-2xl font-medium">
              Lengkapi formulir di bawah ini dan unggah dokumen legalitas perusahaan Anda untuk memulai proses aktivasi layanan Nusantara Star Connect.
            </p>
          </motion.div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Section 1: Data Informasi */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-[32px] backdrop-blur-md"
            >
              <h3 className="text-lg font-bold flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-300"><User size={20} /></div>
                Informasi Kontak & Bisnis
              </h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-blue-200/50 tracking-widest ml-1">Nama Lengkap PIC</label>
                  <input type="text" placeholder="Nama Lengkap" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-blue-200/50 tracking-widest ml-1">Nama Perusahaan</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input type="text" placeholder="PT. Nama Perusahaan" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-blue-200/50 tracking-widest ml-1">Email Bisnis</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input type="email" placeholder="email@perusahaan.com" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-blue-200/50 tracking-widest ml-1">Nomor Telepon / WA</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input type="tel" placeholder="+62..." className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 2: Upload Dokumen */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-bold flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400"><FileText size={20} /></div>
                Dokumen Legalitas
              </h3>

              <div className="space-y-4">
                {[
                  { label: "KTP PIC", id: "ktp" },
                  { label: "NPWP Perusahaan", id: "npwp" },
                  { label: "NIB (Nomor Induk Berusaha)", id: "nib" }
                ].map((doc) => (
                  <div key={doc.id} className="relative group">
                    <input 
                      type="file" 
                      onChange={(e) => handleFileChange(e, doc.id)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" 
                    />
                    <div className={`p-4 rounded-2xl border-2 border-dashed transition-all ${files[doc.id] ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-white/10 bg-white/5 hover:border-blue-400/50'}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg ${files[doc.id] ? 'text-emerald-400' : 'text-blue-300'}`}>
                            {files[doc.id] ? <CheckCircle2 size={20} /> : <Upload size={20} />}
                          </div>
                          <div>
                            <p className="text-sm font-bold">{doc.label}</p>
                            <p className="text-[10px] text-blue-100/40 font-medium">
                              {files[doc.id] ? (files[doc.id] as File).name : "Pilih file atau drag & drop (PDF/JPG)"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full py-5 bg-white text-[#273E66] text-xs font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-50 transition-all shadow-xl active:scale-[0.98]"
                >
                  Ajukan Berlangganan
                </button>
                <p className="text-center text-[10px] text-blue-100/30 mt-4 font-medium uppercase tracking-widest">
                  Dengan menekan tombol, Anda menyetujui Syarat & Ketentuan Layanan NSC.
                </p>
              </div>
            </motion.div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}