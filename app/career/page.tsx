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
    <main className="relative flex min-h-screen w-full flex-col bg-[#273E66] text-white selection:bg-blue-400/30 overflow-x-hidden font-sans">
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
        {/* Gradient overlay disesuaikan agar menyatu dengan latar #273E66 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#273E66] via-transparent to-transparent" />
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-[10px] font-black uppercase tracking-[0.5em] text-blue-300 opacity-80"
          >
            Join Our Mission
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold uppercase tracking-tighter md:text-6xl lg:text-7xl"
          >
            Bangun Masa Depan <br /> <span className="text-blue-300">Konektivitas</span> Indonesia
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-blue-100/60 md:text-lg font-medium"
          >
            Kami mencari talenta berbakat yang berani bermimpi besar untuk menghubungkan seluruh pelosok nusantara melalui teknologi satelit terdepan.
          </motion.p>
        </div>
      </section>

      <div className="relative z-10 flex flex-col items-center px-6 py-24 md:px-12 lg:px-24">
        
        {/* Culture/Benefits Section */}
        <div className="mb-32 grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all hover:bg-white hover:shadow-2xl">
              <div className="mb-4 text-blue-300 group-hover:text-[#273E66] transition-colors">
                {item.icon}
              </div>
              <h3 className="mb-2 font-black uppercase tracking-wider text-sm group-hover:text-[#273E66] transition-colors">{item.title}</h3>
              <p className="text-xs leading-relaxed text-blue-100/40 group-hover:text-[#273E66]/70 transition-colors font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Open Positions Section */}
        <div className="w-full max-w-5xl">
          <div className="mb-16 flex flex-col items-center text-center">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300/50 mb-2">Opportunities</h4>
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight md:text-4xl">Posisi Terbuka</h2>
            <div className="h-1.5 w-20 bg-blue-300 rounded-full" />
          </div>

          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 12 }}
                className="group flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-8 transition-all hover:bg-white hover:shadow-xl md:flex-row md:items-center"
              >
                <div className="mb-6 md:mb-0">
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 group-hover:text-blue-600 transition-colors">{job.category}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#273E66] transition-colors mt-1">{job.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-medium text-blue-100/40 group-hover:text-[#273E66]/50 transition-colors">
                    <span className="flex items-center gap-2"><MapPin size={14}/> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={14}/> {job.type}</span>
                  </div>
                </div>
                <button className="inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 px-8 py-4 text-[11px] font-black uppercase tracking-widest text-white transition-all group-hover:bg-[#273E66] group-hover:text-white group-hover:border-[#273E66] active:scale-95 shadow-lg">
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
          className="mt-40 w-full max-w-4xl rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-12 text-center backdrop-blur-xl"
        >
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight">Tidak menemukan posisi yang cocok?</h2>
          <p className="mb-10 text-blue-100/50 text-sm font-medium leading-relaxed">
            Kami selalu mencari talenta hebat. Kirimkan CV dan Portfolio Anda ke <span className="text-blue-300 font-bold">talent@nsc.id</span> untuk peluang di masa depan.
          </p>
          <button className="rounded-xl bg-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-[#273E66] transition-all hover:bg-blue-50 active:scale-95 shadow-xl">
            Kirim Lamaran Umum
          </button>
        </motion.div>

      </div>

      <Footer />
    </main>
  );
}