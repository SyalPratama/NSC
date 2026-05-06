"use client";

import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Search, Plus, Trash2, Edit3, X, Upload, 
  Filter, FileText, ChevronLeft, ChevronRight, Globe
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const INITIAL_NEWS = [
  { id: 1, cat: "Update", title: "NSC Luncurkan Satelit LEO Terbaru", desc: "Jangkauan area blank spot Indonesia Timur.", time: "2026-04-23", img: "/particle7.webp" },
  { id: 2, cat: "Teknologi", title: "Implementasi AI di Jaringan NSC", desc: "Optimasi routing otomatis berbasis beban traffic.", time: "2026-04-22", img: "/particle8.webp" },
  { id: 3, cat: "Bisnis", title: "Ekspansi NSC ke Asia Tenggara", desc: "Kemitraan strategis dengan telco regional.", time: "2026-04-21", img: "/particle9.webp" },
];

const CATEGORIES = ['Semua', 'Teknologi', 'Satelit', 'Bisnis', 'Tutorial', 'Update'];

export default function NewsCMS() {
  const [newsList, setNewsList] = useState(INITIAL_NEWS);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCat, setFilterCat] = useState("Semua");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({ title: "", desc: "", cat: "Teknologi", img: "/particle7.webp" });

  const filteredData = useMemo(() => {
    return newsList.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = filterCat === "Semua" || item.cat === filterCat;
      return matchesSearch && matchesCat;
    });
  }, [newsList, searchQuery, filterCat]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      setNewsList(newsList.map(item => item.id === editingItem.id ? { ...item, ...formData } : item));
    } else {
      setNewsList([{ id: Date.now(), ...formData, time: new Date().toISOString().split('T')[0] }, ...newsList]);
    }
    setIsModalOpen(false);
  };

  return (
    <main className="relative min-h-screen bg-[#1A2B47] text-slate-100 font-sans">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] bg-blue-500/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-cyan-400/10 blur-[100px] rounded-full" />
      </div>

      <Navbar />
      
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 max-w-7xl">
        {/* --- HEADER & ACTIONS --- */}
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-end mb-12 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <Globe size={14} className="animate-spin-slow" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]">Control Panel</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Kelola <span className="text-cyan-400">Berita.</span>
            </h1>
          </div>
          
          <button 
            onClick={() => { setEditingItem(null); setFormData({title:"", desc:"", cat:"Teknologi", img:"/particle7.webp"}); setIsModalOpen(true); }}
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-white text-[#1A2B47] hover:bg-cyan-400 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:scale-95"
          >
            <Plus size={18} strokeWidth={3} /> Tambah Berita
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Cari konten berita..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#243757] border border-white/10 rounded-2xl py-4 pl-14 pr-6 outline-none focus:border-cyan-400 focus:bg-[#2a3f63] transition-all text-sm placeholder:text-slate-500 shadow-inner"
            />
          </div>
          <div className="relative min-w-[200px]">
            <Filter className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <select 
              value={filterCat}
              onChange={(e) => setFilterCat(e.target.value)}
              className="w-full bg-[#243757] border border-white/10 rounded-2xl py-4 pl-14 pr-6 outline-none focus:border-cyan-400 cursor-pointer text-sm font-bold appearance-none shadow-inner"
            >
              {CATEGORIES.map(c => <option key={c} value={c} className="bg-[#1A2B47]">{c}</option>)}
            </select>
          </div>
        </div>

        <div className="bg-[#213352] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  <th className="p-8">Informasi Konten</th>
                  <th className="p-8">Kategori</th>
                  <th className="p-8">Terbit</th>
                  <th className="p-8 text-right">Manajemen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <AnimatePresence mode="popLayout">
                  {filteredData.map((item) => (
                    <motion.tr 
                      key={item.id}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="hover:bg-white/[0.03] transition-colors group"
                    >
                      <td className="p-8">
                        <div className="flex items-center gap-5">
                          <div className="relative h-16 w-24 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
                            <Image src={item.img} alt="thumb" fill className="object-cover" />
                          </div>
                          <div className="max-w-[340px]">
                            <h4 className="font-bold text-white text-lg leading-tight">{item.title}</h4>
                            <p className="text-xs text-slate-400 mt-1.5 line-clamp-1">{item.desc}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-8">
                        <span className="px-4 py-1.5 rounded-xl bg-cyan-400/10 text-cyan-400 text-[9px] font-black uppercase tracking-widest border border-cyan-400/20">
                          {item.cat}
                        </span>
                      </td>
                      <td className="p-8 text-sm text-slate-400 font-semibold">{item.time}</td>
                      
                      {/* --- MANAJEMEN AKSI: SELALU TERLIHAT --- */}
                      <td className="p-8 text-right">
                        <div className="flex justify-end gap-3 items-center">
                          <button 
                            onClick={() => { setEditingItem(item); setFormData({title:item.title, desc:item.desc, cat:item.cat, img:item.img}); setIsModalOpen(true); }} 
                            className="p-3 rounded-xl bg-white/5 text-yellow-400 hover:bg-yellow-400 hover:text-[#1A2B47] transition-all border border-white/5 shadow-lg active:scale-90"
                            title="Edit Artikel"
                          >
                            <Edit3 size={18} />
                          </button>
                          <button 
                            onClick={() => setNewsList(newsList.filter(i => i.id !== item.id))} 
                            className="p-3 rounded-xl bg-white/5 text-red-400 hover:bg-red-400 hover:text-white transition-all border border-white/5 shadow-lg active:scale-90"
                            title="Hapus Artikel"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
          
          <div className="p-8 border-t border-white/5 flex justify-between items-center bg-black/10">
            <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Entry: {filteredData.length} Items</span>
            <div className="flex gap-3">
              <button className="p-3 rounded-xl bg-white/5 text-slate-600 cursor-not-allowed border border-white/5"><ChevronLeft size={20}/></button>
              <button className="p-3 rounded-xl bg-white/5 text-white hover:bg-cyan-400 hover:text-[#1A2B47] transition-all border border-white/5"><ChevronRight size={20}/></button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Tetap Sama Sesuai Tampilan Sebelumnya */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-[#0a1424]/90 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-[#213352] border border-white/10 rounded-[48px] p-10 md:p-14 shadow-3xl overflow-hidden"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-black text-white tracking-tight">{editingItem ? "Edit Artikel" : "Buat Baru"}</h2>
                <button onClick={() => setIsModalOpen(false)} className="p-3 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-all"><X size={24} /></button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div onClick={() => fileInputRef.current?.click()} className="relative h-48 w-full rounded-3xl border-2 border-dashed border-white/10 bg-black/20 flex flex-col items-center justify-center cursor-pointer hover:border-cyan-400/50 transition-all group overflow-hidden shadow-inner">
                  <Image src={formData.img} alt="preview" fill className="object-cover opacity-20 transition-opacity" />
                  <Upload size={32} className="mb-3 text-cyan-400" />
                  <span className="text-[10px] font-black uppercase text-white/40 tracking-[0.3em]">Update Cover Image</span>
                  <input type="file" ref={fileInputRef} onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => setFormData({ ...formData, img: reader.result as string });
                      reader.readAsDataURL(file);
                    }
                  }} className="hidden" accept="image/*" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-cyan-400/60 ml-2 tracking-widest">Judul Artikel</label>
                    <input required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full bg-[#1A2B47] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400 transition-all text-sm font-bold shadow-inner" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-cyan-400/60 ml-2 tracking-widest">Kategori</label>
                    <select value={formData.cat} onChange={(e) => setFormData({...formData, cat: e.target.value})} className="w-full bg-[#1A2B47] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400 appearance-none text-sm font-bold shadow-inner">
                      {CATEGORIES.filter(c => c !== "Semua").map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-cyan-400/60 ml-2 tracking-widest">Konten Ringkasan</label>
                  <textarea required rows={4} value={formData.desc} onChange={(e) => setFormData({...formData, desc: e.target.value})} className="w-full bg-[#1A2B47] border border-white/10 rounded-[32px] px-6 py-5 outline-none focus:border-cyan-400 resize-none text-sm font-medium shadow-inner" />
                </div>

                <button type="submit" className="w-full bg-cyan-400 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] text-[#1A2B47] hover:bg-white transition-all shadow-xl shadow-cyan-400/10 active:scale-95">
                  {editingItem ? "Update Berita" : "Publish Berita"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}