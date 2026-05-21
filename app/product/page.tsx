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
  ShieldCheck,
  Cpu,
  Wifi
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    id: "connectivity-l2",
    name: "Akastar Connectivity: Layer 2",
    price: "5.500.000",
    description: "Solusi interkoneksi privat berbasis satelit LEO (Starlink Enterprise) yang bertindak sebagai virtual leased line aman untuk menghubungkan remote site langsung ke Data Center/HQ tanpa terekspos internet publik.",
    mainFeatures: "Isolasi trafik end-to-end, transparansi protokol jaringan, kompatibel penuh dengan arsitektur SD-WAN korporat, dan dukungan VLAN Stacking (QinQ).",
    targetMarket: "Sektor finansial/perbankan, instansi militer, kantor pemerintahan, dan Industri sensitif data.",
    image: "/orbit.webp",
    features: [
      { icon: <Cpu size={12} />, text: "L2VPN Encapsulation" },
      { icon: <Zap size={12} />, text: "Latensi ultra-rendah <40ms" },
      { icon: <ShieldCheck size={12} />, text: "Bandwidth terkelola & SLA ketersediaan jaringan hingga 99%" }
    ],
    icon: <Satellite className="w-7 h-7" />,
  },
  {
    id: "connectivity-l3",
    name: "Akastar Connectivity: Internet (Layer 3)",
    price: "3.500.000",
    description: "Layanan akses internet publik premium berkecepatan tinggi berbasis satelit LEO untuk operasional bisnis di wilayah blankspot.",
    mainFeatures: "Opsi IP Publik Statis, optimalisasi jalur routing internasional murni, instalasi plug-and-play, dan dashboard monitoring penggunaan bandwidth.",
    targetMarket: "Mess perkebunan, site konstruksi baru, wilayah rural, dan kantor cabang pembantu di pelosok daerah.",
    image: "/global.webp",
    features: [
      { icon: <Globe size={12} />, text: "IPv4/IPv6 Public Routing" },
      { icon: <Zap size={12} />, text: "Broadband download up to 220 Mbps, upload up to 25 Mbps" },
      { icon: <Wifi size={12} />, text: "Interkoneksi langsung ke global internet backbone" }
    ],
    icon: <Globe className="w-7 h-7" />,
  },
  {
    id: "secure",
    name: "Akastar Secure",
    price: "2.200.000",
    description: "Proteksi tambahan berlapis pada jaringan internet satelit Akastar untuk menangkal serangan siber dari lapisan luar hingga dalam.",
    mainFeatures: "Gateway Network Detection, Edge Network Detection, End Point Detection Response (EDR) / Next Generation Anti Virus (AV) berbasis cloud & On Premise, enkripsi trafik ujung-ke-ujung, content filtering, dan sistem pencegahan intrusi (IPS).",
    targetMarket: "Perusahaan skala Enterprise, retail di area terpencil yang memproses transaksi digital, dan infrastruktur kritikal.",
    image: "/hardware.webp",
    features: [
      { icon: <ShieldCheck size={12} />, text: "Cloud-based security gateway" },
      { icon: <MonitorCheck size={12} />, text: "Monitoring keamanan siber proaktif" },
      { icon: <Cpu size={12} />, text: "Enkripsi AES-256 & pelaporan ancaman mingguan otomatis" }
    ],
    icon: <ShieldCheck className="w-7 h-7" />,
  },
  {
    id: "iptv",
    name: "IPTV",
    price: "1.200.000",
    description: "Paket bundling terintegrasi yang menggabungkan konektivitas internet satelit LEO dengan platform hiburan TV interaktif untuk meningkatkan kesejahteraan karyawan atau pelanggan di lapangan.",
    mainFeatures: "Akses ke 60+ channel lokal dan premium internasional, dan optimasi bandwidth lokal.",
    targetMarket: "Kapal maritim (Kapal Transport/Kargo/Tanker), mess karyawan pertambangan, dan Hotel/resor pulau terpencil.",
    image: "/streaming.webp",
    features: [
      { icon: <MonitorCheck size={12} />, text: "Headend kompresi video HD/4K" },
      { icon: <Cpu size={12} />, text: "Set-Top Box (STB) IPTV Android" },
      { icon: <Globe size={12} />, text: "Sistem manajemen konten terpusat" }
    ],
    icon: <MonitorCheck className="w-7 h-7" />,
  },
  {
    id: "private-lte",
    name: "Akastar Bundling Solution: Private LTE",
    price: "12.500.000",
    description: "Penyediaan jaringan seluler privat mandiri (4G/5G) lokal di area terpencil yang dihubungkan ke jaringan pusat via backhaul satelit Akastar.",
    mainFeatures: "Sinyal seluler lokal yang andal, kartu SIM lokal khusus korporasi, panggilan suara (VoLTE), dan transfer data lokal tanpa kuota internet.",
    targetMarket: "Area konsesi pertambangan besar, kilang minyak pedalaman, dan kompleks perkebunan multinasional.",
    image: "/router.webp",
    features: [
      { icon: <Wifi size={12} />, text: "Infrastruktur eNodeB/gNodeB Femtocell kompak" },
      { icon: <Cpu size={12} />, text: "Core Network lokal & interkoneksi backhaul satelit terenkripsi" },
      { icon: <MonitorCheck size={12} />, text: "Kapasitas ratusan user aktif per site" }
    ],
    icon: <Wifi className="w-7 h-7" />,
  },
  {
    id: "iot-agriculture",
    name: "IoT - Agriculture",
    price: "4.500.000",
    description: "Ekosistem pertanian pintar berbasis IoT dengan transmisi data data sensor real-time via jaringan satelit LEO untuk optimalisasi hasil panen di area rural.",
    mainFeatures: "Sensor kelembapan tanah & cuaca mikro, otomatisasi sistem irigasi, dashboard analisis kesuburan, dan notifikasi anomali via aplikasi.",
    targetMarket: "Perusahaan perkebunan kelapa sawit, karet, tebu, dan pertanian skala industri (agribisnis).",
    image: "/sun.webp",
    features: [
      { icon: <Cpu size={12} />, text: "Protokol sensor nirkabel (LoRaWAN/MQTT)" },
      { icon: <ShieldCheck size={12} />, text: "Perangkat bersertifikasi IP67 (tahan cuaca)" },
      { icon: <Globe size={12} />, text: "Visualisasi data berbasis cloud & integrasi API" }
    ],
    icon: <Cpu className="w-7 h-7" />,
  },
  {
    id: "iot-vessel",
    name: "IoT - Vessel Management",
    price: "6.800.000",
    description: "Solusi pelacakan, pemantauan aset, dan efisiensi manajemen operasional kapal laut secara real-time via konektivitas satelit.",
    mainFeatures: "Pelacakan posisi kapal (Vessel Tracking), monitoring konsumsi bahan bakar (fuel level sensor), telemetri mesin kapal, dan alarm darurat siber.",
    targetMarket: "Perusahaan logistik laut, kapal tanker minyak/gas, Industri perikanan komersial, dan kapal tunda (tugboat).",
    image: "/kapal.webp",
    features: [
      { icon: <Satellite size={12} />, text: "Integrasi GPS presisi tinggi" },
      { icon: <Cpu size={12} />, text: "Sensor ultrasonik / aliran bahan bakar (Flow Meter)" },
      { icon: <Globe size={12} />, text: "Transmisi data terjadwal otomatis & dashboard maritim khusus" }
    ],
    icon: <Satellite className="w-7 h-7" />,
  },
  {
    id: "iot-environment",
    name: "IoT Environment",
    price: "5.200.000",
    description: "Solusi otomatisasi pemantauan parameter lingkungan hidup di sekitar wilayah operasional industri untuk pemenuhan regulasi dan pencegahan bencana.",
    mainFeatures: "Sensor kualitas udara (Particulate Matter), deteksi dini kebakaran hutan (wildfire early detection), dan alarm polusi otomatis.",
    targetMarket: "Industri manufaktur hulu, pembangkit listrik (PLTU/PLTA), dan area konservasi kehutanan.",
    image: "/laut.webp",
    features: [
      { icon: <Cpu size={12} />, text: "Sensor emisi gas & tingkat kedalaman air" },
      { icon: <Globe size={12} />, text: "Integrasi platform pelaporan lingkungan hidup" },
      { icon: <Zap size={12} />, text: "Operasi mandiri berbasis tenaga surya (solar panel powered)" }
    ],
    icon: <Globe className="w-7 h-7" />,
  },
  {
    id: "soc",
    name: "Security Operation Center",
    price: "15.000.000",
    description: "Layanan Security Operation Center (SOC) terkelola untuk memantau, mendeteksi, dan memitigasi ancaman siber pada seluruh infrastruktur jaringan bisnis secara real-time 24/7.",
    mainFeatures: "Monitoring keamanan siber 24/7/365, deteksi ancaman, manajemen insiden kilat, dan tim ahli siber (Cybersecurity Analyst) tersertifikasi.",
    targetMarket: "Kantor pusat korporasi, entitas perbankan, penyedia layanan publik, dan operasional industri strategis (B2B/B2G).",
    image: "/malam.webp",
    features: [
      { icon: <ShieldCheck size={12} />, text: "Arsitektur SIEM (Security Information and Event Management)" },
      { icon: <MonitorCheck size={12} />, text: "Koordinasi respons insiden siber cepat" },
      { icon: <Cpu size={12} />, text: "Pelaporan kepatuhan regulasi data & sistem mitigasi otomatis" }
    ],
    icon: <ShieldCheck className="w-7 h-7" />,
  },
  {
    id: "home-ftth",
    name: "Akastar Home: Area Bekasi (FTTH)",
    price: "450.000",
    description: "Layanan internet broadband berbasis kabel serat optik (FTTH) berkecepatan tinggi dan stabil untuk memenuhi kebutuhan digital rumah tangga, profesional, keluarga, dan pekerja Remote / WFH yang berdomisili di Area Bekasi.",
    mainFeatures: "Koneksi internet rumah berkecepatan tinggi, jaringan stabil berbasis fiber optik penuh tanpa terpengaruh cuaca, dan harga langganan bulanan kompetitif.",
    targetMarket: "Segmen konsumen residensial, keluarga, dan pekerja Remote / WFH yang berdomisili di Area Bekasi.",
    image: "/residential.webp",
    features: [
      { icon: <Wifi size={12} />, text: "Infrastruktur jaringan kabel FTTH murni" },
      { icon: <Zap size={12} />, text: "Bandwidth internet unlimited tanpa FUP ketat" },
      { icon: <MonitorCheck size={12} />, text: "Modem Wi-Fi rumah terbundel standar" }
    ],
    icon: <Zap className="w-7 h-7" />,
  }
];

export default function ProductPage() {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Fungsi untuk memecah daftar produk menjadi kelipatan maksimal 4 produk per baris
  const chunkedProducts = products.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index / 4);
    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; 
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, [] as typeof products[]);

  return (
    <main className="relative flex min-h-screen w-full flex-col bg-black text-gray-200 selection:bg-orange-500/30 overflow-x-hidden font-sans">
      <Navbar />

      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <Image src="/earth.webp" alt="bg" fill className="object-cover" />
      </div>

      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-24 pb-8 text-center md:pt-48">
        <h4 className="mb-4 text-[9px] font-black uppercase tracking-[0.5em] text-orange-500 opacity-80">
          Tingkatkan koneksi dengan jangkauan dari orbit, <br />kami menjaga anda tetap terhubung.
        </h4>
        <h1 className="mb-4 text-3xl font-extrabold uppercase tracking-tighter md:text-6xl text-white">
          Akastar <span className="text-orange-500">Series</span>
        </h1>
      </section>

      {/* --- WIDE CONTAINER DENGAN ROW CHUNKING (MAKS 4 PRODUK PER BARIS) --- */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-12 flex flex-col items-center mb-20 w-full">
        {chunkedProducts.map((row, rowIdx) => (
          <div key={rowIdx} className="flex flex-col lg:flex-row gap-6 justify-center items-stretch w-full max-w-[1700px] mb-6">
            
            {row.map((product) => {
              const isOpen = activeId === product.id;

              return (
                <div 
                  key={product.id} 
                  // Memicu buka-tutup otomatis saat di hover (mouse masuk / keluar)
                  onMouseEnter={() => setActiveId(product.id)}
                  onMouseLeave={() => setActiveId(null)}
                  // Fallback untuk perangkat sentuh (HP)
                  onClick={() => setActiveId(isOpen ? null : product.id)}
                  className={`group flex flex-col lg:flex-row items-stretch overflow-hidden rounded-[24px] md:rounded-[32px] border transition-all duration-500 cursor-pointer shadow-2xl
                    ${isOpen 
                      ? 'w-full lg:w-[560px] xl:w-[700px] bg-[#111111] border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.15)]' 
                      : 'w-full lg:w-[220px] xl:w-[260px] bg-[#0a0a0a] border-white/10'}
                  `}
                >
                  
                  {/* --- CARD HEADER --- */}
                  <div className={`flex lg:flex-col items-center justify-between lg:justify-center flex-shrink-0 relative z-30 px-6 lg:px-4 min-h-[80px] lg:h-[450px] transition-all duration-500
                    ${isOpen ? 'w-full lg:w-[220px] xl:w-[260px]' : 'w-full lg:w-full'}
                  `}>
                    <div className={`flex items-center lg:flex-col gap-4 lg:gap-0 transition-all duration-500 w-full lg:text-center
                      ${isOpen ? 'lg:scale-75 lg:-translate-y-12' : ''}
                    `}>
                      <div className={`rounded-xl lg:rounded-2xl p-2 lg:p-5 border transition-all mx-auto
                        ${isOpen 
                          ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' 
                          : 'bg-white/5 text-gray-400 border-white/5'}
                      `}>
                        {product.icon}
                      </div>
                      <h3 className={`text-xs lg:text-sm xl:text-base font-black uppercase tracking-[0.1em] transition-colors leading-tight lg:mt-6 flex-1 lg:flex-none
                        ${isOpen ? 'text-orange-500' : 'text-gray-300'}
                      `}>
                        {product.name}
                      </h3>
                    </div>
                    
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500
                      ${isOpen 
                        ? 'border-orange-500/30 text-orange-500' 
                        : 'border-white/10 text-white/30'}
                    `}>
                      <ChevronDown size={18} className={`lg:hidden transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                      <ChevronRight size={18} className={`hidden lg:block transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {/* --- DETAIL PANEL --- */}
                  <div 
                    className={`w-full lg:h-[450px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col relative z-20 overflow-hidden
                      ${isOpen 
                        ? 'max-h-[1000px] opacity-100 lg:w-[340px] xl:w-[440px]' 
                        : 'max-h-0 opacity-0 lg:w-0 lg:max-h-[450px]'}
                    `}
                  >
                    <div className="flex flex-col py-6 lg:py-10 border-t lg:border-t-0 lg:border-l border-white/10 px-8 h-full">
                      <div className="mb-4 flex-shrink-0">
                        <div className="flex items-baseline gap-1 text-white">
                          <span className="text-2xl font-black tracking-tighter tabular-nums">
                            {product.id === "home-ftth" ? "" : "Rp "}{product.price}
                            {product.id === "home-ftth" ? " / Bulan" : ""}
                          </span>
                        </div>
                      </div>

                      {/* Container Konten Detail */}
                      <div className="overflow-y-auto pr-2 custom-scrollbar flex-1 mb-6">
                        
                        {/* Gambar Produk */}
                        <div className="relative w-full h-32 rounded-xl overflow-hidden mb-5 border border-white/10 shadow-inner flex-shrink-0">
                          <Image 
                            src={product.image} 
                            alt={product.name} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-105" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                        </div>

                        {/* Deskripsi */}
                        <p className="text-[11px] lg:text-[13px] leading-relaxed text-gray-400 font-medium mb-5">
                          {product.description}
                        </p>

                        {/* --- TAMBAHAN BARU: FITUR UTAMA --- */}
                        <div className="mb-5">
                          <p className="text-[9px] font-black uppercase text-orange-500 tracking-[0.2em] mb-1.5">Fitur Utama</p>
                          <p className="text-[10px] lg:text-[11px] leading-relaxed text-gray-300">
                            {product.mainFeatures}
                          </p>
                        </div>

                        {/* --- TAMBAHAN BARU: TARGET PASAR (Dengan Style Box Tipis) --- */}
                        <div className="mb-6 p-3 rounded-xl bg-white/5 border border-white/10">
                          <p className="text-[9px] font-black uppercase text-orange-500 tracking-[0.2em] mb-1">Ideal Untuk</p>
                          <p className="text-[10px] lg:text-[11px] leading-relaxed text-gray-300">
                            {product.targetMarket}
                          </p>
                        </div>

                        {/* Spesifikasi Teknis */}
                        <div className="space-y-4">
                          <p className="text-[9px] font-black uppercase text-orange-500 tracking-[0.2em]">Spesifikasi Teknis</p>
                          {product.features.map((f, i) => (
                            <div key={i} className="flex items-start gap-3 text-[10px] lg:text-[11px] font-bold text-gray-300">
                              <div className="p-1.5 rounded-lg bg-orange-500/10 text-orange-500 mt-0.5 flex-shrink-0 border border-orange-500/10">
                                {f.icon}
                              </div>
                              <span className="leading-snug">{f.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <a 
                        href="/product/checkout" 
                        className="w-full flex-shrink-0 rounded-xl bg-orange-500 py-4 text-[10px] font-black uppercase tracking-widest text-black shadow-[0_0_15px_rgba(249,115,22,0.3)] flex items-center justify-center gap-2 hover:bg-orange-400 transition-all active:scale-95 cursor-pointer"
                      >
                        <ShoppingCart size={14} /> Pesan Sekarang
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        ))}
      </section>

      <Footer />

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(249, 115, 22, 0.3); border-radius: 10px; }
      `}</style>
    </main>
  );
}