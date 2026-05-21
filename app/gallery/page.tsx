"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Camera, Maximize2, X, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Data Dummy Galeri menggunakan file gambar yang tersedia
const galleryData = [
  { id: 1, title: "Instalasi Kapal Kargo", location: "Laut Jawa", category: "Maritim", img: "/kapal.webp" },
  { id: 2, title: "Konektivitas Area Pertambangan", location: "Kalimantan", category: "Enterprise", img: "/konstruksi.webp" },
  { id: 3, title: "Akses Internet Posko Ekspedisi", location: "Papua", category: "Remote Area", img: "/kemah.webp" },
  { id: 4, title: "Sistem Komunikasi Pesawat", location: "Bandara Soetta", category: "Aviasi", img: "/aviasi.webp" },
  { id: 5, title: "Offshore Oil Rig", location: "Laut Natuna", category: "Maritim", img: "/laut.webp" },
  { id: 6, title: "Pusat Riset Pegunungan", location: "Puncak Jaya", category: "Remote Area", img: "/salju.webp" },
  { id: 7, title: "Koordinasi Pelabuhan", location: "Tanjung Priok", category: "Enterprise", img: "/pelabuhan.webp" },
  { id: 8, title: "Koneksi Residensial", location: "Sumatera Barat", category: "Residensial", img: "/residential.webp" },
];

const categories = ["Semua", "Maritim", "Enterprise", "Remote Area", "Aviasi", "Residensial"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<any>(null);

  // Filter gambar berdasarkan kategori
  const filteredGallery = activeCategory === "Semua" 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <main className="relative flex min-h-screen w-full flex-col bg-black text-gray-200 selection:bg-orange-500/30 overflow-x-hidden font-sans">
      <Navbar />

      {/* Background Decor (Glow Aksen Oranye) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-amber-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 lg:px-12 max-w-7xl">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-2 text-orange-500 mb-4">
              <Camera size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Our Gallery</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Implementasi <span className="text-orange-500">NSC</span>
            </h1>
            <p className="max-w-2xl text-gray-400 font-medium leading-relaxed">
              Lihat bagaimana teknologi satelit Low Earth Orbit (LEO) kami menghubungkan bisnis dan komunitas di seluruh penjuru Indonesia, bahkan di area paling terpencil sekalipun.
            </p>
          </motion.div>
        </div>

        {/* --- FILTER KATEGORI --- */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all border active:scale-95 ${
                activeCategory === category
                  ? "bg-orange-500 text-black border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                  : "bg-[#111111] text-gray-500 border-white/10 hover:border-orange-500/50 hover:text-orange-500"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* --- GRID GALERI --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-square rounded-[32px] overflow-hidden cursor-pointer bg-[#111111] border border-white/10"
              >
                {/* Gambar Default */}
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Hitam Transparan saat Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Konten Hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="w-fit px-3 py-1 mb-3 rounded-md bg-orange-500 text-black text-[9px] font-black uppercase tracking-widest shadow-[0_0_10px_rgba(249,115,22,0.5)]">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1 leading-tight">{item.title}</h3>
                  <div className="flex items-center gap-1.5 text-gray-300 text-xs font-medium">
                    <MapPin size={12} className="text-orange-500" />
                    {item.location}
                  </div>
                </div>

                {/* Ikon Maximize di Tengah */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-orange-500/20 text-orange-500 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 border border-orange-500/30">
                  <Maximize2 size={24} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pesan jika foto tidak ada di filter */}
        {filteredGallery.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-medium">Belum ada foto untuk kategori ini.</p>
          </div>
        )}

      </div>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* Overlay Background */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedImage(null)} 
              className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-pointer" 
            />
            
            {/* Kontainer Gambar */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-[#111111] border border-white/10 rounded-[32px] md:rounded-[48px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedImage(null)} 
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 rounded-full bg-black/50 text-gray-300 hover:text-orange-500 hover:bg-black transition-all backdrop-blur-md"
              >
                <X size={24} />
              </button>

              <div className="relative w-full aspect-video md:aspect-auto md:w-2/3 md:min-h-[60vh]">
                <Image 
                  src={selectedImage.img} 
                  alt={selectedImage.title} 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="w-full md:w-1/3 p-8 md:p-10 flex flex-col justify-center bg-[#111111] relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full pointer-events-none" />
                
                <span className="w-fit px-3 py-1 mb-4 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-widest">
                  {selectedImage.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight">
                  {selectedImage.title}
                </h2>
                <div className="flex items-center gap-2 text-gray-400 font-medium mb-6">
                  <MapPin size={16} className="text-orange-500" />
                  {selectedImage.location}
                </div>
                
                <div className="h-[1px] w-full bg-white/10 mb-6" />
                
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Implementasi konektivitas satelit Starlink LEO oleh tim Nusantara Star Connect. Memberikan akses internet kecepatan tinggi dan latensi rendah untuk mendukung operasional di lapangan.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}