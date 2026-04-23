"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, Clock, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const latestNews = [
  { id: 1, cat: "Update", title: "NSC Luncurkan Satelit LEO Terbaru di Orbit Indonesia", time: "2 Jam", img: "/particle7.webp" },
  { id: 2, cat: "Tech", title: "Cara Optimalkan Latensi Internet Satelit untuk Gaming", time: "5 Jam", img: "/particle8.webp" },
  { id: 3, cat: "Event", title: "Rekap Workshop Digitalisasi Desa Bersama NSC", time: "1 Hari", img: "/particle9.webp" },
];

const categoryNews = [
  { id: 10, cat: "Teknologi", title: "Implementasi AI dalam Monitoring Jaringan Satelit", time: "2 Hari" },
  { id: 11, cat: "Satelit", title: "Peluncuran Terminal Flat-Panel Generasi Kedua", time: "3 Hari" },
  { id: 12, cat: "Bisnis", title: "NSC Jalin Kerja Sama Strategis dengan Provider Lokal", time: "4 Hari" },
  { id: 13, cat: "Tutorial", title: "Cara Setting Router NSC untuk Kecepatan Maksimal", time: "5 Hari" },
];

const categories = ['Teknologi', 'Satelit', 'Bisnis', 'Tutorial'];

export default function SimpleNews() {
  const [activeCategory, setActiveCategory] = useState('Teknologi');
  const filteredNews = categoryNews.filter(item => item.cat === activeCategory);

  return (
    // Penambahan Gradasi pada Background Utama
    <main className="relative min-h-screen bg-[#1A2B47] text-white font-sans overflow-hidden">
      
      {/* Efek Pendaran Cahaya (Glow Effects) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full" />
        <div className="absolute top-[40%] left-[30%] w-[600px] h-[600px] bg-blue-400/5 blur-[150px] rounded-full" />
      </div>

      <Navbar />
      
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h1 className="text-4xl font-bold tracking-tight">Berita <span className="text-blue-400">Terbaru</span></h1>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
            <input 
              type="text" 
              placeholder="Cari berita..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* KOLOM KIRI */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/berita/detail" className="block">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
                  <Image 
                    src="/particle9.webp" 
                    alt="Main" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B47]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-blue-500 px-3 py-1 rounded-md text-[10px] font-bold uppercase mb-3 inline-block shadow-lg">
                      Sorotan
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                      Teknologi Beamforming: Masa Depan Internet Tanpa Lag
                    </h2>
                  </div>
                </div>
              </motion.div>
            </Link>

            <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-white/30 border-b border-white/5 pb-2">Update Terkini</h3>
              {latestNews.map((item) => (
              <Link 
                key={item.id} 
                href={`/berita/detail/${item.title.toLowerCase().replace(/ /g, "-")}`}
                className="block"
              >
                <div className="flex gap-5 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.07] hover:border-blue-500/30 transition-all cursor-pointer group items-center backdrop-blur-sm">
                  <div className="relative h-20 w-20 md:h-24 md:w-32 flex-shrink-0 overflow-hidden rounded-xl border border-white/10">
                    <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-blue-400 text-[10px] font-bold uppercase tracking-wider">{item.cat}</span>
                      <span className="text-white/30 text-[10px] flex items-center gap-1"><Clock size={10}/> {item.time}</span>
                    </div>
                    <h3 className="font-bold text-base md:text-lg leading-tight group-hover:text-blue-200 transition-colors">{item.title}</h3>
                  </div>
                  <ChevronRight className="hidden md:block text-white/10 group-hover:text-white transition-colors mr-2" />
                </div>
              </Link>
            ))}
            </div>
          </div>

          {/* KOLOM KANAN */}
          <div className="space-y-12">
            
            <section className="bg-white/[0.03] p-6 rounded-[32px] border border-white/[0.05] backdrop-blur-md">
              <h3 className="text-lg font-bold border-b border-white/10 pb-4 mb-6">Paling Populer</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 cursor-pointer group">
                    <span className="text-2xl font-black text-white/10 group-hover:text-blue-400 transition-colors">0{i}</span>
                    <p className="text-sm font-medium leading-snug group-hover:text-blue-200">Bagaimana satelit LEO bekerja di cuaca ekstrem?</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/[0.03] p-6 rounded-[32px] border border-white/[0.05] backdrop-blur-md">
              <h3 className="text-lg font-bold mb-6">Kategori</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((c) => (
                  <button 
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                      activeCategory === c 
                      ? "bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/30" 
                      : "bg-white/5 text-white/40 border-white/5 hover:bg-white/10"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {filteredNews.map((item) => (
                      <div key={item.id} className="group cursor-pointer pb-3 border-b border-white/5 last:border-0 hover:pl-1 transition-all">
                        <p className="text-white/30 text-[10px] mb-1">{item.time} lalu</p>
                        <h4 className="text-sm font-bold leading-tight group-hover:text-blue-300 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </section>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}