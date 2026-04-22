"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Globe, 
  Zap, 
  Satellite, 
  ChevronRight, 
  ChevronDown,
  MonitorCheck, 
  ShoppingCart, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  Wifi
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    id: "lite",
    name: "Akastar Lite",
    price: "1.500.000",
    description: "Solusi hemat untuk kebutuhan rumah tangga dan operasional personal.",
    features: [{ icon: <Zap size={12} />, text: "Up to 25 Mbps" }, { icon: <ShieldCheck size={12} />, text: "Unlimited Data" }],
    icon: <Zap className="w-7 h-7" />,
  },
  {
    id: "net",
    name: "Akastar Net",
    price: "3.500.000",
    description: "Akastar Net adalah layanan akses internet terdedikasi tanpa batas yang menggunakan teknologi satelit orbit rendah dengan laten rendah dan ditujukan untuk UMKM, perusahaan, ritel/konsumen, komunitas Wi-Fi, pemerintah, dan juga mendukung komunikasi seluler untuk industri maritim. Menawarkan solusi internet yang handal bagi pelanggan yang tidak memiliki koneksi melalui kabel atau serat optik.",
    features: [{ icon: <MonitorCheck size={12} />, text: "Sistem Pemantauan Jaringan 24/7 (NMS)" }, { icon: <Cpu size={12} />, text: "Jaminan Throughput hingga 550 Mbps (agregat) dibagi menjadi downstream hingga 500 Mbps dan upstream hingga 50 Mbps per terminal pengguna" }],
    icon: <Globe className="w-7 h-7" />,
  },
  {
    id: "link",
    name: "Akastar Link",
    price: "7.200.000",
    description: "Akastar Link adalah layanan akses L2 terdedikasi tanpa batas yang sejati untuk menghubungkan jaringan akses ke jaringan inti menggunakan satelit LEO. Ditujukan untuk ISP, korporasi, dan pemerintah, mendukung komunikasi seluler industri maritim serta solusi intranet handal tanpa fiber optik.",
    features: [{ icon: <ShieldCheck size={12} />, text: "Sistem Pemantauan Jaringan 24/7 (NMS)" }, { icon: <Wifi size={12} />, text: "Jaminan Throughput hingga 550 Mbps (agregat) dibagi menjadi downstream hingga 500 Mbps dan upstream hingga 50 Mbps per terminal pengguna" }],
    icon: <Satellite className="w-7 h-7" />,
  },
  {
    id: "pro",
    name: "Akastar Pro",
    price: "15.000.000",
    description: "Kapasitas maksimal untuk kebutuhan data industri skala besar dengan dukungan teknis prioritas dan infrastruktur satelit tercanggih.",
    features: [{ icon: <MonitorCheck size={12} />, text: "Priority Support" }, { icon: <Cpu size={12} />, text: "Gigabit Capability" }],
    icon: <ShieldCheck className="w-7 h-7" />,
  }
];

export default function ProductPage() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col bg-[#273E66] text-white selection:bg-blue-400/30 overflow-x-hidden font-sans">
      <Navbar />

      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <Image src="/earth.webp" alt="bg" fill className="object-cover" />
      </div>

      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-24 pb-8 text-center md:pt-48">
        <h4 className="mb-4 text-[9px] font-black uppercase tracking-[0.5em] text-blue-300 opacity-80">
          Tingkatkan koneksi dengan jangkauan dari orbit, <br />kami menjaga anda tetap terhubung.
        </h4>
        <h1 className="mb-4 text-3xl font-extrabold uppercase tracking-tighter md:text-6xl">
          Akastar <span className="text-blue-300">Series</span>
        </h1>
      </section>

      {/* --- RESPONSIVE GRID --- */}
      <section className="relative z-10 px-4 py-12 flex justify-center mb-20">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:justify-center w-full max-w-7xl">
          
          {products.map((product) => {
            const isOpen = activeId === product.id;

            return (
              <div 
                key={product.id} 
                onClick={() => toggleCard(product.id)}
                className={`group flex flex-col lg:flex-row items-stretch overflow-hidden rounded-[24px] md:rounded-[32px] border transition-all duration-500 w-full lg:w-auto cursor-pointer shadow-2xl
                  ${isOpen ? 'bg-white border-white' : 'bg-[#1E3050] border-white/10 lg:hover:bg-white lg:hover:border-white'}
                `}
              >
                
                {/* --- CARD HEADER --- */}
                <div className="w-full lg:w-[220px] xl:w-[240px] min-h-[80px] lg:h-[450px] flex lg:flex-col items-center justify-between lg:justify-center flex-shrink-0 relative z-30 px-6 lg:px-4">
                  <div className={`flex items-center lg:flex-col gap-4 lg:gap-0 transition-all duration-500 
                    ${isOpen ? 'lg:scale-75 lg:-translate-y-12' : 'lg:group-hover:scale-75 lg:group-hover:-translate-y-12'}
                  `}>
                    <div className={`rounded-xl lg:rounded-2xl p-2 lg:p-5 border transition-all 
                      ${isOpen 
                        ? 'bg-[#273E66]/10 text-[#273E66] border-[#273E66]/10' 
                        : 'bg-white/5 text-blue-300 border-white/5 group-hover:bg-[#273E66]/10 group-hover:text-[#273E66]'}
                    `}>
                      {product.icon}
                    </div>
                    <h3 className={`text-sm lg:text-base xl:text-lg font-black uppercase tracking-[0.1em] transition-colors leading-tight lg:mt-6
                      ${isOpen ? 'text-[#273E66]' : 'text-white group-hover:text-[#273E66]'}
                    `}>
                      {product.name}
                    </h3>
                  </div>
                  
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500
                    ${isOpen 
                      ? 'border-[#273E66]/20 text-[#273E66]' 
                      : 'border-white/10 text-white/20 group-hover:border-[#273E66]/20 group-hover:text-[#273E66]'}
                  `}>
                    <ChevronDown size={18} className={`lg:hidden transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                    <ChevronRight size={18} className={`hidden lg:block transition-transform duration-500 ${isOpen ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                  </div>
                </div>

                {/* --- DETAIL PANEL (DIPERBAIKI) --- */}
                <div 
                  className={`w-full lg:h-[450px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col relative z-20 overflow-hidden
                    ${isOpen 
                      ? 'max-h-[1000px] opacity-100 lg:w-[350px] xl:w-[450px]' 
                      : 'max-h-0 opacity-0 lg:w-0 lg:max-h-[450px] lg:group-hover:w-[350px] xl:group-hover:w-[450px] lg:group-hover:opacity-100'}
                  `}
                >
                  <div className="flex flex-col py-6 lg:py-10 border-t lg:border-t-0 lg:border-l border-[#273E66]/10 px-8 h-full">
                    <div className="mb-4 flex-shrink-0">
                      <div className="flex items-baseline gap-1 text-[#273E66]">
                        <span className="text-2xl font-black tracking-tighter tabular-nums">Rp {product.price}</span>
                      </div>
                    </div>

                    {/* Container Teks yang bisa scroll jika kepanjangan */}
                    <div className="overflow-y-auto pr-2 custom-scrollbar flex-1 mb-6">
                      <p className="text-[11px] lg:text-[13px] leading-relaxed text-[#273E66]/70 font-medium mb-6">
                        {product.description}
                      </p>

                      <div className="space-y-4">
                        <p className="text-[9px] font-black uppercase tracking-widest text-blue-600 tracking-[0.2em]">Core Features</p>
                        {product.features.map((f, i) => (
                          <div key={i} className="flex items-start gap-3 text-[10px] lg:text-[11px] font-bold text-[#273E66]/80">
                            <div className="p-1.5 rounded-lg bg-[#273E66]/5 text-[#273E66] mt-0.5 flex-shrink-0">
                              {f.icon}
                            </div>
                            <span className="leading-snug">{f.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a 
                    href="/hubungi-kami" 
                    className="w-full flex-shrink-0 rounded-xl bg-[#273E66] py-4 text-[10px] font-black uppercase tracking-widest text-white shadow-lg flex items-center justify-center gap-2 hover:bg-[#1a2b47] transition-all active:scale-95 cursor-pointer"
                    >
                    <ShoppingCart size={14} /> Pesan Sekarang
                    </a>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #273e6640; border-radius: 10px; }
      `}</style>
    </main>
  );
}