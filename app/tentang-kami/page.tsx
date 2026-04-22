"use client";

import { useState } from "react";
import Image from "next/image";
import { Target, ShieldCheck, Globe, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TentangKami() {
    return (
        <main className="relative flex min-h-screen w-full flex-col bg-[#273E66] text-white selection:bg-blue-400/30">
            <Navbar />

            {/* Background Pattern */}
            <div className="fixed inset-0 z-0 h-full w-full pointer-events-none opacity-20">
                <Image
                    src="/particle2.webp"
                    alt="Background Pattern"
                    fill
                    className="object-cover object-center"
                />
                {/* Soft Gradient Overlay untuk kedalaman visual */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />
            </div>

            <div className="relative z-10 flex flex-1 w-full flex-col items-center px-6 pt-32 pb-24 md:px-12 lg:px-24 md:pt-40">
                
                {/* Hero Section - Identitas Perusahaan */}
                <div className="max-w-4xl text-center mb-20">
                    <h4 className="mb-4 text-[11px] font-black uppercase tracking-[0.4em] text-blue-300 opacity-80">
                        Profil Perusahaan
                    </h4>
                    <h1 className="mb-8 text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-[56px] leading-tight">
                        PT Nusantara Star Connect (NSC)
                    </h1>
                    <div className="h-1.5 w-24 bg-white/20 mx-auto mb-8 rounded-full"></div>
                    <p className="text-lg md:text-xl text-blue-50/80 leading-relaxed font-medium">
                        PT Nusantara Star Connect (NSC) adalah perusahaan telekomunikasi swasta berbasis-satelit 
                        yang memiliki cakupan hingga ke pelosok Indonesia. Kami memulai perjalanan dengan 
                        menyediakan layanan konektivitas melalui sistem komunikasi satelit <b className="text-white">Low Earth Orbit (LEO)</b>. 
                        Sehingga dapat memberikan kecepatan komunikasi yang lebih tinggi dan memungkinkan 
                        transfer data yang lebih cepat.
                    </p>
                </div>

                {/* Nilai Utama / Core Values */}
                <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        { 
                            icon: <Globe className="w-6 h-6" />, 
                            title: "Cakupan Luas", 
                            desc: "Menjangkau daerah terpencil (3T) di seluruh nusantara." 
                        },
                        { 
                            icon: <Zap className="w-6 h-6" />, 
                            title: "LEO Technology", 
                            desc: "Latensi rendah untuk pengalaman internet yang lebih responsif." 
                        },
                        { 
                            icon: <ShieldCheck className="w-6 h-6" />, 
                            title: "Koneksi Stabil", 
                            desc: "Infrastruktur handal yang tahan terhadap berbagai kondisi cuaca." 
                        },
                        { 
                            icon: <Target className="w-6 h-6" />, 
                            title: "Misi Utama", 
                            desc: "Mempercepat transformasi digital inklusif di Indonesia." 
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center rounded-2xl border border-white/10 bg-[#1E3050]/50 p-8 text-center backdrop-blur-md transition-all hover:bg-white hover:shadow-2xl group">
                            <div className="mb-4 text-blue-300 group-hover:text-[#273E66] transition-colors">{item.icon}</div>
                            <h3 className="mb-2 text-sm font-black uppercase tracking-wider group-hover:text-[#273E66] transition-colors">{item.title}</h3>
                            <p className="text-[12px] text-blue-100/60 leading-relaxed font-medium group-hover:text-[#273E66]/70 transition-colors">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Visi & Misi Section */}
                <div className="mt-24 grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="flex flex-col rounded-[32px] border border-white/10 bg-[#1E3050]/50 p-8 shadow-2xl backdrop-blur-md lg:p-12">
                        <h2 className="mb-6 text-2xl font-black uppercase tracking-tight md:text-3xl text-blue-300">
                            VISI
                        </h2>
                        <p className="text-blue-50/80 text-sm md:text-base leading-relaxed font-medium italic">
                            "Fokus untuk merevolusi penyedia layanan satelit di Indonesia dengan menyediakan teknologi yang canggih serta solusi inovatif agar kesenjangan digital dapat teratasi."
                        </p>
                    </div>

                    <div className="flex flex-col rounded-[32px] border border-white/10 bg-[#1E3050]/50 p-8 shadow-2xl backdrop-blur-md lg:p-12">
                        <h2 className="mb-6 text-2xl font-black uppercase tracking-tight md:text-3xl text-blue-300">
                            MISI
                        </h2>
                        <p className="text-blue-50/80 text-sm md:text-base leading-relaxed font-medium">
                            Memberikan layanan berkualitas dan solusi yang tepat untuk mengatasi kesenjangan digital di Indonesia melalui infrastruktur satelit generasi terbaru.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-24 text-center">
                    <h3 className="mb-8 text-[11px] font-black uppercase tracking-[0.3em] text-blue-200/50">
                        Siap Terhubung Dengan Kami?
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="rounded-xl border border-white/20 px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10 active:scale-95">
                            Lihat Paket
                        </button>
                        <button className="rounded-xl bg-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-[#273E66] transition-all hover:bg-blue-50 active:scale-95 shadow-xl">
                            Hubungi Kami
                        </button>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}