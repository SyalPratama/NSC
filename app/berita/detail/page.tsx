"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Clock, 
  ChevronLeft, 
  Share2, 
  Bookmark, 
  MessageCircle, 
  User,
  Calendar
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Data Dummy Artikel Detail
const article = {
  category: "Teknologi",
  title: "Teknologi Beamforming: Masa Depan Internet Tanpa Lag di Indonesia",
  author: "Syal Pratama",
  date: "23 April 2026",
  readTime: "8 Menit",
  image: "/particle9.webp",
  content: [
    "Pernahkah Anda membayangkan koneksi internet satelit yang memiliki kecepatan setara fiber optik dengan latensi yang sangat rendah? Jawabannya terletak pada teknologi Beamforming. Sebagai inovasi terbaru dalam industri komunikasi satelit LEO (Low Earth Orbit), beamforming memungkinkan transmisi sinyal yang lebih fokus dan efisien.",
    "Berbeda dengan antena tradisional yang memancarkan sinyal ke segala arah, beamforming menggunakan algoritma canggih untuk mengarahkan energi sinyal tepat ke perangkat pengguna. Hal ini meminimalisir gangguan (interference) dan memastikan bandwidth maksimal tersalurkan tanpa hambatan fisik seperti cuaca ekstrem.",
    "Nusantara Star Connect (NSC) telah mulai mengimplementasikan teknologi ini pada perangkat Starlink Enterprise mereka, memberikan pengalaman gaming dan video conference yang mulus bahkan di wilayah terpencil di Indonesia."
  ]
};

const relatedNews = [
  { id: 1, title: "Cara Optimalkan Latensi Satelit", cat: "Tech" },
  { id: 2, title: "Update Firmware Antena NSC V2", cat: "Hardware" },
  { id: 3, title: "Jangkauan Satelit LEO di Papua", cat: "Update" },
];

export default function NewsDetail() {
  return (
    <main className="relative min-h-screen bg-[#1A2B47] text-white font-sans overflow-hidden">
      
      {/* Background Glows (Konsisten dengan halaman list) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full" />
      </div>

      <Navbar />
      
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 max-w-6xl">
        
        {/* Tombol Kembali */}
        <Link href="/berita" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors mb-8 group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Kembali ke Berita</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- KOLOM KIRI: KONTEN ARTIKEL --- */}
          <div className="lg:col-span-2">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Header Artikel */}
              <div className="space-y-4">
                <span className="bg-blue-500 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">
                  {article.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tighter">
                  {article.title}
                </h1>
                
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 py-4 border-y border-white/5 text-white/40">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center text-blue-400">
                      <User size={14} />
                    </div>
                    <span className="text-xs font-bold text-white/70">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Clock size={14} />
                    <span>{article.readTime} Baca</span>
                  </div>
                </div>
              </div>

              {/* Gambar Utama */}
              <div className="relative aspect-video rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src={article.image} 
                  alt="Headline" 
                  fill 
                  className="object-cover"
                />
              </div>

              {/* Konten Teks */}
              {/* --- KONTEN ARTIKEL DENGAN WRAPPER CARD --- */}
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative p-8 md:p-12 rounded-[40px] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl"
                >
                {/* Aksen dekoratif di pojok kartu agar tidak flat */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -mr-10 -mt-10" />

                <div className="prose prose-invert max-w-none relative z-10">
                    {article.content.map((p, index) => (
                    <div key={index}>
                        <p className="text-lg leading-relaxed text-white/80 mb-8 font-medium">
                        {p}
                        </p>
                    </div>
                    ))}
                </div>
                </motion.div>

              {/* Action Buttons (Share/Save) */}
              <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl transition-all border border-white/5">
                  <Share2 size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest">Share</span>
                </button>
                <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl transition-all border border-white/5">
                  <Bookmark size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest">Save</span>
                </button>
              </div>
            </motion.article>
          </div>

          {/* --- KOLOM KANAN: SIDEBAR --- */}
          <div className="space-y-10">
            
            {/* Widget Populer */}
            <section className="bg-white/[0.03] p-6 rounded-[32px] border border-white/[0.05] backdrop-blur-md">
              <h3 className="text-lg font-bold border-b border-white/10 pb-4 mb-6">Berita Terkait</h3>
              <div className="space-y-6">
                {relatedNews.map((news) => (
                  <div key={news.id} className="group cursor-pointer">
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block mb-1">
                      {news.cat}
                    </span>
                    <h4 className="text-sm font-bold leading-snug group-hover:text-blue-300 transition-colors">
                      {news.title}
                    </h4>
                  </div>
                ))}
              </div>
            </section>

            {/* Newsletter atau Promo (Minimalis) */}
            <section className="relative overflow-hidden p-8 rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-900 border border-white/10 group cursor-pointer">
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-bold leading-tight">Butuh Internet Cepat?</h3>
                <p className="text-sm text-white/70">Dapatkan layanan Starlink Enterprise dengan instalasi prioritas sekarang.</p>
                <button className="w-full bg-white text-blue-900 font-black text-[10px] uppercase py-3 rounded-xl hover:bg-blue-50 transition-colors tracking-[0.2em]">
                  Hubungi Kami
                </button>
              </div>
              {/* Dekorasi BG */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />
            </section>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}