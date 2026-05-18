"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, MapPin, Clock, Star, Users, Coffee, Rocket, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobs = [
  {
    title: "Network Engineer (Satellite Specialist)",
    type: "Full-time",
    location: "Jakarta / Remote",
    category: "Technical",
  },
  {
    title: "Account Executive",
    type: "Full-time",
    location: "Surabaya",
    category: "Sales",
  },
  {
    title: "Customer Success Lead",
    type: "Full-time",
    location: "Jakarta",
    category: "Operations",
  },
];

const benefits = [
  { icon: <Users size={24} />, title: "Kolaborasi Global", desc: "Bekerja dengan ahli telekomunikasi terbaik dunia." },
  { icon: <Coffee size={24} />, title: "Work-Life Balance", desc: "Jam kerja fleksibel dan lingkungan kerja suportif." },
  { icon: <Rocket size={24} />, title: "Inovasi Tanpa Batas", desc: "Akses ke teknologi satelit LEO terbaru." },
  { icon: <Star size={24} />, title: "Pengembangan Karier", desc: "Program pelatihan dan sertifikasi berkala." },
];

export default function CareerPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col bg-black text-gray-200 selection:bg-orange-500/30 overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/career-hero.webp"
          alt="Career at NSC"
          fill
          priority
          className="object-cover brightness-[0.35]"
        />
        {/* Gradient overlay disesuaikan agar menyatu dengan latar hitam */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-[10px] font-black uppercase tracking-[0.5em] text-orange-500 opacity-80"
          >
            Join Our Mission
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold uppercase tracking-tighter md:text-6xl lg:text-7xl text-white"
          >
            Bangun Masa Depan <br /> <span className="text-orange-500">Konektivitas</span> Indonesia
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-gray-400 md:text-lg font-medium"
          >
            Kami mencari talenta berbakat yang berani bermimpi besar untuk menghubungkan seluruh pelosok nusantara melalui teknologi satelit terdepan.
          </motion.p>
        </div>
      </section>

      <div className="relative z-10 flex flex-col items-center px-6 py-24 md:px-12 lg:px-24">
        
        {/* Culture/Benefits Section */}
        <div className="mb-32 grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/10 bg-[#111111] p-8 backdrop-blur-md transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              <div className="mb-4 text-orange-500 group-hover:text-black transition-colors">
                {item.icon}
              </div>
              <h3 className="mb-2 font-black uppercase tracking-wider text-sm text-white group-hover:text-black transition-colors">{item.title}</h3>
              <p className="text-xs leading-relaxed text-gray-500 group-hover:text-black/80 transition-colors font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Open Positions Section */}
        <div className="w-full max-w-5xl">
          <div className="mb-16 flex flex-col items-center text-center">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500/80 mb-2">Opportunities</h4>
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight md:text-4xl text-white">Posisi Terbuka</h2>
            <div className="h-1.5 w-20 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)] rounded-full" />
          </div>

          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 12 }}
                className="group flex flex-col justify-between rounded-2xl border border-white/5 bg-[#111111] p-8 transition-all hover:bg-[#1a1a1a] hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.1)] md:flex-row md:items-center cursor-pointer"
              >
                <div className="mb-6 md:mb-0">
                  <span className="text-[10px] font-black uppercase tracking-widest text-orange-500 group-hover:text-orange-400 transition-colors">{job.category}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors mt-1">{job.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-medium text-gray-500 group-hover:text-gray-400 transition-colors">
                    <span className="flex items-center gap-2"><MapPin size={14}/> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={14}/> {job.type}</span>
                  </div>
                </div>
                <button className="inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 px-8 py-4 text-[11px] font-black uppercase tracking-widest text-white transition-all group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 active:scale-95 shadow-lg">
                  Apply Now <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-40 w-full max-w-4xl rounded-[40px] border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.1)] bg-[#0a0a0a] p-12 text-center backdrop-blur-xl relative overflow-hidden group"
        >
          <div className="relative z-10">
            <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight text-white">Tidak menemukan posisi yang cocok?</h2>
            <p className="mb-10 text-gray-400 text-sm font-medium leading-relaxed">
              Kami selalu mencari talenta hebat. Kirimkan CV dan Portfolio Anda ke <span className="text-orange-500 font-bold">talent@nsc.id</span> untuk peluang di masa depan.
            </p>
            <button className="rounded-xl bg-orange-500 px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-black transition-all hover:bg-orange-400 active:scale-95 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
              Kirim Lamaran Umum
            </button>
          </div>
          {/* Efek pendaran di belakang box CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-orange-500/10 transition-colors duration-700" />
        </motion.div>

      </div>

      <Footer />
    </main>
  );
}