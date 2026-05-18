"use client";

import { useState } from "react";
import Image from "next/image";
import { Target, ShieldCheck, Globe, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TentangKami() {
    return (
        <main className="relative flex min-h-screen w-full flex-col bg-black text-gray-200 selection:bg-orange-500/30">
            <Navbar />

            {/* Background Pattern */}
            <div className="fixed inset-0 z-0 h-full w-full pointer-events-none opacity-20">
                <Image
                    src="/particle2.webp"
                    alt="Background Pattern"
                    fill
                    className="object-cover object-center"
                />
                {/* Soft Gradient Overlay dengan aksen oranye redup */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.08),transparent)]" />
            </div>

            <div className="relative z-10 flex flex-1 w-full flex-col items-center px-6 pt-32 pb-24 md:px-12 lg:px-24 md:pt-40">
                
                {/* Hero Section - Identitas Perusahaan */}
                <div className="max-w-4xl text-center mb-20">
                    <h4 className="mb-4 text-[11px] font-black uppercase tracking-[0.4em] text-orange-500 opacity-80">
                        Profil Perusahaan
                    </h4>
                    <h1 className="mb-8 text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-[56px] leading-tight text-white">
                        PT Nusantara Star Connect (NSC)
                    </h1>
                    <div className="h-1.5 w-24 bg-orange-500 mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
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
                        <div key={idx} className="flex flex-col items-center rounded-2xl border border-white/10 bg-[#111111] p-8 text-center backdrop-blur-md transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] group cursor-default">
                            <div className="mb-4 text-orange-500 group-hover:text-black transition-colors">{item.icon}</div>
                            <h3 className="mb-2 text-sm font-black uppercase tracking-wider text-white group-hover:text-black transition-colors">{item.title}</h3>
                            <p className="text-[12px] text-gray-500 leading-relaxed font-medium group-hover:text-black/80 transition-colors">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Visi & Misi Section */}
                <div className="mt-24 grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="flex flex-col rounded-[32px] border border-white/10 bg-[#111111] p-8 shadow-2xl backdrop-blur-md lg:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full pointer-events-none" />
                        <h2 className="mb-6 text-2xl font-black uppercase tracking-tight md:text-3xl text-orange-500 relative z-10">
                            VISI
                        </h2>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium italic relative z-10">
                            "Fokus untuk merevolusi penyedia layanan satelit di Indonesia dengan menyediakan teknologi yang canggih serta solusi inovatif agar kesenjangan digital dapat teratasi."
                        </p>
                    </div>

                    <div className="flex flex-col rounded-[32px] border border-white/10 bg-[#111111] p-8 shadow-2xl backdrop-blur-md lg:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full pointer-events-none" />
                        <h2 className="mb-6 text-2xl font-black uppercase tracking-tight md:text-3xl text-orange-500 relative z-10">
                            MISI
                        </h2>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium relative z-10">
                            Memberikan layanan berkualitas dan solusi yang tepat untuk mengatasi kesenjangan digital di Indonesia melalui infrastruktur satelit generasi terbaru.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-24 text-center">
                    <h3 className="mb-8 text-[11px] font-black uppercase tracking-[0.3em] text-gray-500">
                        Siap Terhubung Dengan Kami?
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="rounded-xl border border-orange-500/50 px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-orange-500 transition-all hover:bg-orange-500/10 hover:border-orange-500 active:scale-95">
                            Lihat Paket
                        </button>
                        <button className="rounded-xl bg-orange-500 px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-black transition-all hover:bg-orange-400 active:scale-95 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                            Hubungi Kami
                        </button>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}