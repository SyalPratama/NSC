"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";

export default function Maritim() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const maxScroll = scrollWidth - clientWidth;
            if (maxScroll <= 0) return;
            const scrollPercentage = scrollLeft / maxScroll;
            const newIndex = Math.round(scrollPercentage * 3);
            if (newIndex !== activeIndex) setActiveIndex(newIndex);
        }
    };

    const scrollTo = (index: number) => {
        if (scrollRef.current) {
            const { scrollWidth, clientWidth } = scrollRef.current;
            const maxScroll = scrollWidth - clientWidth;
            const targetLeft = (maxScroll / 3) * index;
            scrollRef.current.scrollTo({ left: targetLeft, behavior: "auto" });
            setActiveIndex(index);
        }
    };

    const scrollRef2 = useRef<HTMLDivElement>(null);
    const [isDragging2, setIsDragging2] = useState(false);
    const [startX2, setStartX2] = useState(0);
    const [scrollLeft2, setScrollLeft2] = useState(0);

    const handleMouseDown2 = (e: React.MouseEvent) => {
        if (!scrollRef2.current) return;
        setIsDragging2(true);
        setStartX2(e.pageX - scrollRef2.current.offsetLeft);
        setScrollLeft2(scrollRef2.current.scrollLeft);
    };

    const handleMouseLeave2 = () => setIsDragging2(false);
    const handleMouseUp2 = () => setIsDragging2(false);

    const handleMouseMove2 = (e: React.MouseEvent) => {
        if (!isDragging2 || !scrollRef2.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef2.current.offsetLeft;
        const walk = (x - startX2) * 2; // Kecepatan geser
        scrollRef2.current.scrollLeft = scrollLeft2 - walk;
    };

    return (
        <main className="w-full bg-black">

            {/* --- HERO SECTION JELAJAH --- */}
            <section className="relative flex min-h-screen w-full flex-col items-center justify-center pb-20">
                <div className="absolute inset-0 z-0 h-full w-full">
                    <Image
                        src="/maritim-hero.webp"
                        alt="Menjelajah Bersama NSC"
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                </div>

                <div className="relative z-10 flex w-full flex-col items-center px-4 text-center mt-10">
                    <h1 className="mb-6 text-4xl font-bold uppercase tracking-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
                        NSC UNTUK MARITIM
                    </h1>
                    <div className="mb-8 text-base text-white drop-shadow-md md:text-lg leading-relaxed">
                        <p className="mb-6 max-w-3xl text-lg text-white drop-shadow-md md:text-xl">
                            Internet berkecepatan tinggi di seluruh benua.
                        </p>
                        <p className="mb-6 max-w-3xl text-lg text-white drop-shadow-md md:text-xl">
                            Mulai Rp4.477.000/bln, dengan biaya perangkat keras sebesar Rp24.419.925.
                        </p>
                        <p className="text-base text-white drop-shadow-md">
                            <a href="#" className="font-bold underline underline-offset-4 transition-opacity hover:opacity-80">Hubungi tim kami</a> atau lihat <a href="#" className="font-bold underline underline-offset-4 transition-opacity hover:opacity-80">panduan pembeli kami</a>.
                        </p>
                    </div>
                    <button className="rounded-sm bg-white px-12 py-3.5 text-[11px] font-bold uppercase tracking-widest text-black transition-colors hover:bg-gray-200">
                        MULAI
                    </button>
                </div>
            </section>

            {/* --- WRAPPER SECTION 2 --- */}
            <div className="relative w-full bg-black [clip-path:inset(0)]">

                <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-40">
                    <Image
                        src="/particle2.webp"
                        alt="Background Pattern"
                        fill
                        className="object-cover object-center"
                    />
                </div>

                <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 py-24 md:px-12 lg:px-24">

                    <h2 className="mb-16 text-center text-3xl font-bold uppercase tracking-tight text-white md:text-[32px] lg:text-[40px]">
                        INTERNET BERKECEPATAN TINGGI YANG DIRANCANG UNTUK BISNIS
                    </h2>

                    {/* Grid 4 Kartu Layanan Lokasi Tetap */}
                    <div className="mb-12 flex w-full max-w-7xl flex-col items-center justify-center gap-4 lg:flex-row lg:items-stretch">

                        {/* Card 1: 50 GB */}
                        <div className="flex w-full flex-col items-center rounded-xl border border-gray-700 bg-black/20 p-8 text-center backdrop-blur-sm lg:flex-1">
                            <h3 className="mb-2 text-xl font-bold uppercase text-white">LOKAL PRIORITAS<br />50 GB</h3>
                            <p className="mb-8 min-h-[60px] text-[13px] leading-relaxed text-gray-300">
                                Cocok untuk konektivitas cadangan dan bisnis kecil
                            </p>

                            <div className="mt-auto mb-4 flex items-baseline justify-center gap-1">
                                <span className="text-3xl font-bold text-white md:text-[38px] tracking-tight">RP647.000</span>
                                <span className="text-[13px] text-gray-400 uppercase tracking-widest">/ BLN</span>
                            </div>
                        </div>

                        {/* Card 2: 500 GB */}
                        <div className="flex w-full flex-col items-center rounded-xl border border-gray-700 bg-black/20 p-8 text-center backdrop-blur-sm lg:flex-1">
                            <h3 className="mb-2 text-xl font-bold uppercase text-white">LOKAL PRIORITAS<br />500 GB</h3>
                            <p className="mb-8 min-h-[60px] text-[13px] leading-relaxed text-gray-300">
                                Cocok untuk usaha kecil dengan kebutuhan bandwidth di bawah rata-rata, mis., 2-4 pengguna
                            </p>

                            <div className="mt-auto mb-4 flex items-baseline justify-center gap-1">
                                <span className="text-3xl font-bold text-white md:text-[38px] tracking-tight">RP1.643.000</span>
                                <span className="text-[13px] text-gray-400 uppercase tracking-widest">/ BLN</span>
                            </div>
                        </div>

                        {/* Card 3: 1 TB */}
                        <div className="flex w-full flex-col items-center rounded-xl border border-gray-700 bg-black/20 p-8 text-center backdrop-blur-sm lg:flex-1">
                            <h3 className="mb-2 text-xl font-bold uppercase text-white">LOKAL PRIORITAS<br />1 TB</h3>
                            <p className="mb-8 min-h-[60px] text-[13px] leading-relaxed text-gray-300">
                                Cocok untuk usaha kecil dan menengah dengan kebutuhan bandwidth rata-rata, mis., 5-10 pengguna
                            </p>

                            <div className="mt-auto mb-4 flex items-baseline justify-center gap-1">
                                <span className="text-3xl font-bold text-white md:text-[38px] tracking-tight">RP2.888.000</span>
                                <span className="text-[13px] text-gray-400 uppercase tracking-widest">/ BLN</span>
                            </div>
                        </div>

                        {/* Card 4: 2 TB */}
                        <div className="flex w-full flex-col items-center rounded-xl border border-gray-700 bg-black/20 p-8 text-center backdrop-blur-sm lg:flex-1">
                            <h3 className="mb-2 text-xl font-bold uppercase text-white">LOKAL PRIORITAS<br />2 TB</h3>
                            <p className="mb-8 min-h-[60px] text-[13px] leading-relaxed text-gray-300">
                                Cocok untuk usaha menengah dengan kebutuhan bandwidth di atas rata-rata, mis., 10-20 pengguna
                            </p>

                            <div className="mt-auto mb-4 flex items-baseline justify-center gap-1">
                                <span className="text-3xl font-bold text-white md:text-[38px] tracking-tight">RP5.378.000</span>
                                <span className="text-[13px] text-gray-400 uppercase tracking-widest">/ BLN</span>
                            </div>
                        </div>

                    </div>

                    {/* Fitur Checklist */}
                    <div className="mb-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] font-medium text-white max-w-4xl">
                        <div className="flex items-center gap-2">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            <span>Penggunaan Darat di Satu Negara dan Perjalanan Regional</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            <span>Prioritas Jaringan</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            <span className="underline cursor-pointer hover:text-gray-300">IP Publik & Dasbor</span>
                        </div>
                    </div>

                    {/* Tombol Aksi */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="/service-plans" className="rounded-sm border border-gray-400 bg-transparent px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white hover:text-black">
                            LIHAT SEMUA PAKET
                        </a>
                        <a href="#" className="rounded-sm bg-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-black transition-colors hover:bg-gray-200">
                            HUBUNGI KAMI
                        </a>
                    </div>
                </div>
            </div>

            {/* ========================================================================= */}
            {/* MEGA WRAPPER UNTUK STICKY NAVBAR AGAR MENEMPEL SAMPAI AKHIR HALAMAN */}
            {/* ========================================================================= */}
            <div className="relative w-full">

                <div className="sticky top-0 z-[60] flex w-full items-center justify-between bg-[#111111]/80 backdrop-blur-md py-4 shadow-xl md:px-16 lg:px-24">
                    <div className="text-xl font-bold uppercase tracking-widest text-white">
                        Maritim
                    </div>
                    <div className="hidden items-center gap-8 md:flex">
                        <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-70">
                            Pertanyaan Umum
                        </a>
                        <button className="rounded-sm bg-white px-8 py-2.5 text-[10px] font-bold uppercase tracking-widest text-black transition-colors hover:bg-gray-200">
                            HUBUNGI KAMI
                        </button>
                    </div>
                </div>

                {/* --- SECTION 4 --- */}
                <section className="relative flex h-screen w-full items-start justify-start overflow-hidden px-8 py-24 md:px-16 lg:px-24">
                    <div className="absolute inset-0 z-0 h-full w-full">
                        <Image
                            src="/roket.webp"
                            alt="Bekerja dan Bermain di Lokasi Terpencil"
                            fill
                            sizes="100vw"
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 right-0 ml-auto w-full bg-gradient-to-l from-black/90 via-black/40 to-transparent md:w-3/4"></div>
                    </div>
                    <div className="relative z-10 flex w-full max-w-[60vh] flex-col items-start text-left">
                        <h2 className="mb-6 text-4xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-md md:text-5xl lg:text-[42px]">
                            Dirancang untuk Lingkungan Ekstrem
                        </h2>
                        <p className="mb-6 text-sm leading-relaxed text-gray-200 drop-shadow-md md:text-[15px]">
                            NSC dirancang untuk pemasangan permanen di kapal Anda dan tahan dingin serta panas ekstrem, hujan es, hujan lebat, dan angin topan.
                        </p>
                        <p className="mb-6 text-sm leading-relaxed text-gray-200 drop-shadow-md md:text-[15px]">
                            NSC saat ini digunakan untuk mendapatkan video berkualitas tinggi dari pendaratan roket NSC di laut, menghasilkan liputan tanpa terputus kendati mesin roket ini mampu menghasilkan gaya berkekuatan hingga 190.000 pon.
                        </p>
                    </div>
                </section>


                {/* ========================================= */}
                {/* SECTION SLIDER AVIASI                     */}
                {/* ========================================= */}
                <div className="relative z-10 flex w-full flex-col items-center justify-center bg-black pt-10 pb-24 md:px-12 lg:px-24">

                    <div className="relative mt-16 w-full max-w-[1400px] group">

                        <div
                            ref={scrollRef}
                            onScroll={handleScroll}
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            className={`flex w-full gap-6 overflow-x-auto px-4 pb-10 md:gap-8 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isDragging ? "cursor-grabbing" : "cursor-grab snap-x snap-mandatory"
                                }`}
                            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
                        >
                            {[
                                { id: 1, title: "PRODUSEN PESAWAT", img: "/aviasi1.webp", desc: "Dari pesawat supersonik hingga helikopter dan VTOL, NSC memiliki perangkat keras..." },
                                { id: 2, title: "MASKAPAI PENERBANGAN", img: "/aviasi2.webp", desc: "Dengan lebih dari 30.000 penerbangan di Terminal Aero kami yang memiliki keandalan tinggi..." },
                                { id: 3, title: "OPERATOR PESAWAT CHARTER", img: "/aviasi3.webp", desc: "Hubungi kami untuk mempelajari cara kami mentransformasi pengalaman Pesawat charter..." },
                                { id: 4, title: "PUSAT LAYANAN & DEALER", img: "/aviasi4.webp", desc: "Bermitralah dengan NSC dalam Jaringan Dealer NSC untuk mendapatkan manfaat..." }
                            ].map((card) => (
                                <div key={card.id} className="flex min-w-[85vw] flex-col snap-start md:min-w-[380px] lg:min-w-[420px] flex-1 select-none">
                                    <div className="relative mb-6 aspect-video w-full overflow-hidden bg-[#111111] pointer-events-none">
                                        <Image src={card.img} alt={card.title} fill className="object-cover" />
                                    </div>
                                    <h4 className="mb-4 text-[17px] uppercase tracking-wide text-white font-normal">{card.title}</h4>
                                    <p className="text-[14px] leading-relaxed text-gray-300 pr-4">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Indikator Tanpa Animasi (Instan) dan Tanpa Titik Ekstra */}
                    <div className="mt-8 flex w-full max-w-[1400px] items-center gap-2 px-4 md:px-0">
                        {[0, 1, 2, 3].map((index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`h-1.5 rounded-full ${activeIndex === index
                                    ? "w-full max-w-[280px] bg-[#888888]"
                                    : "w-1.5 bg-[#333333]"
                                    }`}
                            />
                        ))}
                    </div>

                </div>

                {/* --- SECTION 4 --- */}
                <section className="relative flex h-screen w-full items-end justify-end overflow-hidden px-8 py-24 md:px-16 lg:px-24">
                    <div className="absolute inset-0 z-0 h-full w-full">
                        <Image
                            src="/laut.webp"
                            alt="Bekerja dan Bermain di Lokasi Terpencil"
                            fill
                            sizes="100vw"
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 right-0 ml-auto w-full bg-gradient-to-l from-black/90 via-black/40 to-transparent md:w-3/4"></div>
                    </div>

                    {/* Teks Kontainer */}
                    <div className="relative z-10 flex w-full max-w-xl flex-col text-left">
                        <h2 className="mb-6 text-4xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-md md:text-5xl lg:text-[42px]">
                            JANGKAUAN MARITIM GLOBAL
                        </h2>
                        <p className="mb-6 text-sm leading-relaxed text-gray-200 drop-shadow-md md:text-[15px]">
                            Dengan konstelasi satelit terbesar di dunia, NSC menyediakan konektivitas di samudra dan perairan di darat di seluruh benua, termasuk jangkauan di perairan internasional. Lihat <span className="font-bold text-white cursor-pointer hover:underline">PERTANYAAN UMUM</span> kami untuk mempelajari selengkapnya.
                        </p>
                    </div>
                </section>

                {/* --- WRAPPER SECTION 5 & 6 --- */}
                <div className="relative w-full bg-black [clip-path:inset(0)]">

                    <div className="fixed right-30 top-70 z-0 h-full w-full scale-[1.5] md:w-1/2 pointer-events-none">
                        <Image
                            src="/particle4.webp"
                            alt="Particle Effect"
                            fill
                            className="object-contain object-right"
                        />
                    </div>

                    {/* --- SECTION 6: PAKET LAYANAN FLEKSIBEL --- */}
                    <section className="relative z-10 flex min-h-screen w-full items-center justify-center bg-transparent px-8 py-20 md:px-16 lg:px-24">
                        <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">

                            <div className="flex-1 text-left">
                                <h2 className="mb-8 text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-5xl lg:text-4xl">
                                    AKSES JARINGAN PRIORITAS DI PERAIRAN
                                </h2>
                                <p className="max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
                                    Gunakan kuota Global Prioritas saat di laut. Sekarang mencakup kecepatan unduhan hingga 1 Mbps dan kecepatan unggahan hingga 0,5 Mbps setelah alokasi Kuota Prioritas Anda habis.
                                </p>
                            </div>

                            <div className="relative flex flex-1 justify-center">
                                <div className="relative aspect-video w-full max-w-[650px] md:aspect-square">
                                    <Image
                                        src="/kapal.webp"
                                        alt="NSC Service"
                                        fill
                                        className="object-contain object-center md:object-right"
                                    />
                                </div>
                            </div>

                        </div>
                    </section>

                </div>

                {/* --- SECTION 4 --- */}
                <section className="relative flex h-screen w-full items-end justify-end overflow-hidden px-8 py-24 md:px-16 lg:px-24">
                    <div className="absolute inset-0 z-0 h-full w-full">
                        <Image
                            src="/statis2.webp"
                            alt="Bekerja dan Bermain di Lokasi Terpencil"
                            fill
                            sizes="100vw"
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 right-0 ml-auto w-full bg-gradient-to-l from-black/90 via-black/40 to-transparent md:w-3/4"></div>
                    </div>

                    {/* Teks Kontainer */}
                    <div className="relative z-10 flex h-full flex-col justify-end pt-32 px-8">
                        <div className="max-w-xl text-left">
                            <h2 className="mb-6 text-3xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-md md:text-4xl">
                                PENGELOLAAN ARMADA YANG AMAN, PEMANTAUAN JARAK JAUH
                            </h2>
                            <p className="mb-8 text-base leading-relaxed text-gray-200 drop-shadow-md md:text-lg">
                                Pantau dan kelola armada NSC Anda dari jarak jauh melalui satu portal, dengan kemampuan untuk menunda boot ulang pembaruan perangkat lunak agar terhindar dari gangguan operasional.
                            </p>
                            <p className="mb-8 text-base leading-relaxed text-gray-200 drop-shadow-md md:text-lg">
                                NSC menerapkan enkripsi end-to-end untuk melindungi data Anda dan kerahasiaan traffic pengguna.
                            </p>
                            <button className="border-[1.5px] border-white bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black">
                                Lihat Panduan Pembeli Bisnis
                            </button>
                        </div>
                    </div>
                </section>

                {/* --- WRAPPER SECTION 5 & 6 --- */}
                <div className="relative w-full bg-black [clip-path:inset(0)]">

                    <div className="fixed right-30 top-70 z-0 h-full w-full scale-[1.5] md:w-1/2 pointer-events-none">
                        <Image
                            src="/particle4.webp"
                            alt="Particle Effect"
                            fill
                            className="object-contain object-right"
                        />
                    </div>

                    {/* --- SECTION 6: PAKET LAYANAN FLEKSIBEL --- */}
                    <section className="relative z-10 flex min-h-screen w-full items-center justify-center bg-transparent px-8 py-20 md:px-16 lg:px-24">
                        <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">

                            <div className="relative flex flex-1 justify-center">
                                <div className="relative aspect-video w-full max-w-[650px] md:aspect-square">
                                    <Image
                                        src="/pelabuhan.webp"
                                        alt="NSC Service"
                                        fill
                                        className="object-contain object-center md:object-right"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 text-left">
                                <h2 className="mb-8 text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-5xl lg:text-[42px]">
                                    ONLINE DENGAN MUDAH
                                </h2>
                                <div className="space-y-6 text-[15px] leading-relaxed text-gray-200">
                                    <p>
                                        Dengan menyediakan konektivitas berkelanjutan, NSC dapat membantu meningkatkan keselamatan di daerah terpencil dan mengurangi bahaya di tempat kerja.
                                    </p>
                                    <p>
                                        Kru jarak jauh juga dapat berkomunikasi dengan kru darat untuk meningkatkan kepuasan karyawan selama periode berlayar jangka panjang.
                                    </p>
                                    <p>
                                        Unduh aplikasi NSC untuk menentukan lokasi pemasangan terbaik di kapal Anda.
                                    </p>
                                </div>

                                {/* Tombol Unduhan */}
                                <div className="mt-10 flex flex-wrap items-center gap-8">
                                    {/* Link Android */}
                                    <a
                                        href="#"
                                        className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-70"
                                    >
                                        UNDUH UNTUK ANDROID
                                        <svg className="h-3 w-3 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>

                                    {/* Link iOS */}
                                    <a
                                        href="#"
                                        className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-70"
                                    >
                                        UNDUH UNTUK IOS
                                        <svg className="h-3 w-3 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </section>

                </div>

                {/* ========================================= */}
                {/* SECTION ISI KOTAK (MARITIM)               */}
                {/* ========================================= */}
                <section className="relative w-full overflow-hidden bg-black py-24 md:py-32">

                    <div className="relative z-20 mx-auto mb-16 w-full max-w-7xl px-8 text-left md:px-16 lg:px-24">
                        <h2 className="mb-4 text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-[56px]">
                            ISI KOTAK
                        </h2>
                        <button className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-70">
                            <span className="border-b border-transparent pb-0.5 transition-all duration-300 group-hover:border-white">
                                LIHAT SPESIFIKASI
                            </span>
                            <svg className="h-3 w-3 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Container Utama (Gambar Background + Slider) */}
                    <div className="relative mx-auto w-full max-w-[1100px] py-10">

                        <div className="absolute inset-0 z-0 bottom-40 flex items-center justify-center pointer-events-none opacity-80 mt-10 md:mt-0">
                            <div className="relative w-full max-w-full aspect-[21/18] md:aspect-[21/15]">
                                <Image
                                    src="/hardware.webp"
                                    alt="NSC Maritim Dish"
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                        </div>

                        {/* Wrapper Slider Wireframe */}
                        <div className="relative z-10 w-full group">

                            {/* Tombol Panah Kiri */}
                            <button
                                onClick={() => {
                                    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
                                }}
                                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-white/50 transition-colors hover:text-white md:left-12"
                            >
                                <svg className="h-8 w-8 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Area Scroll Drag Manual */}
                            <div
                                ref={scrollRef}
                                onMouseDown={handleMouseDown}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseUp}
                                onMouseMove={handleMouseMove}
                                className={`flex w-full items-end gap-12 overflow-x-auto px-16 pb-8 pt-20 md:gap-16 md:px-32 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isDragging ? "cursor-grabbing" : "cursor-grab"
                                    }`}
                            >
                                {/* Item 1 */}
                                <div className="flex min-w-[200px] flex-col items-center justify-end md:min-w-[260px] select-none">
                                    <div className="relative mb-8 h-48 w-full md:h-64 pointer-events-none">
                                        <Image src="/NSC1.webp" alt="NSC" fill className="object-contain object-bottom" />
                                    </div>
                                    <h4 className="text-center text-[15px] font-normal uppercase tracking-wider text-white">
                                        NSC
                                    </h4>
                                </div>

                                {/* Item 2 */}
                                <div className="flex min-w-[200px] flex-col items-center justify-end md:min-w-[260px] select-none">
                                    <div className="relative mb-8 h-48 w-full md:h-64 pointer-events-none">
                                        <Image src="/dudukan.webp" alt="Kit Dudukan Wedge" fill className="object-contain object-bottom" />
                                    </div>
                                    <h4 className="text-center text-[15px] font-normal uppercase tracking-wider text-white">
                                        KIT DUDUKAN WEDGE
                                    </h4>
                                </div>

                                {/* Item 3 */}
                                <div className="flex min-w-[200px] flex-col items-center justify-end md:min-w-[260px] select-none">
                                    <div className="relative mb-8 h-48 w-full md:h-64 pointer-events-none">
                                        <Image src="/catu-daya.webp" alt="Catu Daya" fill className="object-contain object-bottom" />
                                    </div>
                                    <h4 className="text-center text-[15px] font-normal uppercase tracking-wider text-white">
                                        CATU DAYA
                                    </h4>
                                </div>

                                {/* Item 4 */}
                                <div className="flex min-w-[200px] flex-col items-center justify-end md:min-w-[260px] select-none">
                                    <div className="relative mb-8 h-48 w-full md:h-64 pointer-events-none">
                                        <Image src="/dudukancatudaya.webp" alt="Dudukan Catu Daya" fill className="object-contain object-bottom" />
                                    </div>
                                    <h4 className="text-center text-[15px] font-normal uppercase tracking-wider text-white">
                                        DUDUKAN CATU DAYA
                                    </h4>
                                </div>

                                {/* Item 5 */}
                                <div className="flex min-w-[200px] flex-col items-center justify-end md:min-w-[260px] select-none">
                                    <div className="relative mb-8 h-48 w-full md:h-64 pointer-events-none">
                                        <Image src="/kabelstar.webp" alt="Kabel NSC" fill className="object-contain object-bottom" />
                                    </div>
                                    <h4 className="text-center text-[15px] font-normal uppercase tracking-wider text-white">
                                        KABEL NSC
                                    </h4>
                                </div>

                                {/* Item 6 */}
                                <div className="flex min-w-[200px] flex-col items-center justify-end md:min-w-[260px] select-none">
                                    <div className="relative mb-8 h-48 w-full md:h-64 pointer-events-none">
                                        <Image src="/kabelcatudaya.webp" alt="Kabel AC" fill className="object-contain object-bottom" />
                                    </div>
                                    <h4 className="text-center text-[15px] font-normal uppercase tracking-wider text-white">
                                        KABEL AC
                                    </h4>
                                </div>

                                <div className="flex min-w-[200px] flex-col items-center justify-end md:min-w-[260px] select-none">
                                    <div className="relative mb-8 h-48 w-full md:h-64 pointer-events-none">
                                        <Image src="/kabelethernet.webp" alt="Kabel AC" fill className="object-contain object-bottom" />
                                    </div>
                                    <h4 className="text-center text-[15px] font-normal uppercase tracking-wider text-white">
                                        KABEL ETHERNET
                                    </h4>
                                </div>
                            </div>

                            {/* Tombol Panah Kanan */}
                            <button
                                onClick={() => {
                                    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
                                }}
                                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-white/50 transition-colors hover:text-white md:right-12"
                            >
                                <svg className="h-8 w-8 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </section>

                {/* --- WRAPPER SECTION 5 & 6 --- */}
                <div className="relative w-full bg-black [clip-path:inset(0)]">

                    <div className="fixed right-30 top-70 z-0 h-full w-full scale-[1.5] md:w-1/2 pointer-events-none">
                        <Image
                            src="/particle4.webp"
                            alt="Particle Effect"
                            fill
                            className="object-contain object-right"
                        />
                    </div>

                    {/* ========================================= */}
                    {/* SECTION AKSESORI & DUDUKAN                */}
                    {/* ========================================= */}
                    <section className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col overflow-hidden px-8 py-24 md:px-16 lg:px-24">

                        {/* Header */}
                        <div className="mb-12 text-left">
                            <h2 className="mb-3 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
                                AKSESORI & DUDUKAN
                            </h2>
                            <p className="text-[13px] font-medium text-gray-500">
                                Tersedia di NSC Shop setelah pembelian
                            </p>
                        </div>

                        {/* Carousel/Slider Wrapper */}
                        <div className="relative w-full group">

                            {/* Tombol Panah Kiri */}
                            <button
                                onClick={() => {
                                    if (scrollRef2.current) scrollRef2.current.scrollBy({ left: -350, behavior: "smooth" });
                                }}
                                className="absolute left-4 top-[40%] z-20 -translate-y-1/2 text-white/50 opacity-0 transition-all duration-300 hover:text-white group-hover:opacity-100 hidden md:block"
                            >
                                <svg className="h-8 w-8 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <div
                                ref={scrollRef2}
                                onMouseDown={handleMouseDown2}
                                onMouseLeave={handleMouseLeave2}
                                onMouseUp={handleMouseUp2}
                                onMouseMove={handleMouseMove2}
                                className={`flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-8 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isDragging2 ? "cursor-grabbing" : "cursor-grab"
                                    }`}
                                style={{ scrollBehavior: isDragging2 ? 'auto' : 'smooth' }}
                            >

                                {/* Card 1 */}
                                <div className="flex min-w-[280px] flex-col snap-start items-center md:min-w-[320px] flex-1 select-none">
                                    <div className="relative mb-6 aspect-square w-full overflow-hidden bg-[#1a1a1a] pointer-events-none">
                                        <Image src="/gen2.webp" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-700 hover:scale-105" alt="Pipe Adapter Performance" />
                                    </div>
                                    <h4 className="text-center text-[14px] font-normal uppercase tracking-wide text-white">
                                        PIPE ADAPTER PERFORMANCE (GEN 2)
                                    </h4>
                                </div>

                                {/* Card 2 */}
                                <div className="flex min-w-[280px] flex-col snap-start items-center md:min-w-[320px] flex-1 select-none">
                                    <div className="relative mb-6 aspect-square w-full overflow-hidden bg-[#1a1a1a] pointer-events-none">
                                        <Image src="/r3.webp" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-700 hover:scale-105" alt="Router 3" />
                                    </div>
                                    <h4 className="text-center text-[14px] font-normal uppercase tracking-wide text-white">
                                        ROUTER 3
                                    </h4>
                                </div>

                                {/* Card 3 */}
                                <div className="flex min-w-[280px] flex-col snap-start items-center md:min-w-[320px] flex-1 select-none">
                                    <div className="relative mb-6 aspect-square w-full overflow-hidden bg-[#1a1a1a] pointer-events-none">
                                        <Image src="/dudukanr3.webp" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-700 hover:scale-105" alt="Dudukan Router 3" />
                                    </div>
                                    <h4 className="text-center text-[14px] font-normal uppercase tracking-wide text-white">
                                        DUDUKAN ROUTER 3
                                    </h4>
                                </div>

                                {/* Card 4 */}
                                <div className="flex min-w-[280px] flex-col snap-start items-center md:min-w-[320px] flex-1 select-none">
                                    <div className="relative mb-6 aspect-square w-full overflow-hidden bg-[#1a1a1a] pointer-events-none">
                                        <div className="absolute left-4 top-4 z-10 text-[13px] text-gray-400">8m</div>
                                        <Image src="/kabel8.webp" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-700 hover:scale-105" alt="Kabel NSC 8m" />
                                    </div>
                                    <h4 className="text-center text-[14px] font-normal uppercase tracking-wide text-white">
                                        KABEL NSC 8 M<br />PERFORMANCE (GEN 2)
                                    </h4>
                                </div>

                            </div>

                            {/* Tombol Panah Kanan */}
                            <button
                                onClick={() => {
                                    if (scrollRef2.current) scrollRef2.current.scrollBy({ left: 350, behavior: "smooth" });
                                }}
                                className="absolute right-4 top-[40%] z-20 -translate-y-1/2 text-white/50 opacity-0 transition-all duration-300 hover:text-white group-hover:opacity-100 hidden md:block"
                            >
                                <svg className="h-8 w-8 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                        </div>
                    </section>


                    {/* ========================================= */}
                    {/* SECTION KATA PELANGGAN KAMI               */}
                    {/* ========================================= */}
                    <section className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col px-8 py-24 md:px-16 lg:px-24">
                        <h3 className="mb-16 text-[15px] font-medium tracking-wide text-white">
                            KATA PELANGGAN KAMI
                        </h3>

                        <div className="flex flex-col gap-16 md:flex-row md:gap-12 lg:gap-20">
                            {/* Quote 1 */}
                            <div className="flex flex-1 flex-col border-l-[3px] border-white pl-6 md:pl-8">
                                <h4 className="mb-6 text-2xl font-bold uppercase tracking-tight text-white md:text-[28px]">
                                    KONEKTIVITAS TAMU
                                </h4>
                                <p className="mb-8 text-[13px] leading-relaxed text-gray-300 md:text-[15px]">
                                    "[NSC] memungkinkan kru kami untuk terus berkomunikasi dengan teman, keluarga, dan orang-orang tercinta, serta memudahkan tamu kami untuk membagikan semua momen dan kenangan indah mereka ... Selain itu, bandwidth tambahan dengan latensi rendah memberikan kemampuan dan fleksibilitas kepada sembilan perusahaan kapal pesiar kelas dunia kami untuk memperkenalkan layanan tamu dan fitur baru, serta membantu meningkatkan fungsi operasional, seperti pemantauan peralatan di kapal dan komunikasi real-time antara kru kapal dan darat."
                                </p>
                                <p className="text-[13px] font-medium leading-relaxed text-gray-400 md:text-[14px]">
                                    - John Harshaw, Wakil Presiden Konektivitas TI, Pelabuhan, dan Destinasi di Carnival Cruise Line
                                </p>
                            </div>

                            {/* Quote 2 */}
                            <div className="flex flex-1 flex-col border-l-[3px] border-white pl-6 md:pl-8">
                                <h4 className="mb-6 text-2xl font-bold uppercase tracking-tight text-white md:text-[28px]">
                                    SOLUSI BARU
                                </h4>
                                <p className="mb-8 text-[13px] leading-relaxed text-gray-300 md:text-[15px]">
                                    "Menggunakan layanan Low Earth Orbit, latensi rendah, dan bandwidth tinggi NSC NSC di seluruh armada kami adalah pencapaian besar dalam mengatasi tantangan konektivitas di industri dengan tenaga kerja yang global dan mobil. Dengan layanan ini, armada kami tak ubahnya menjadi kantor jarak jauh kami yang mendukung keselamatan dan kesejahteraan awak - dan membuat kami dapat mengembangkan solusi baru yang secara teknis dan finansial tidak dapat diwujudkan beberapa tahun lalu."
                                </p>
                                <p className="text-[13px] font-medium leading-relaxed text-gray-400 md:text-[14px]">
                                    - Torsten Pedersen, Chief Operating Officer, Seaspan Corporation
                                </p>
                            </div>
                        </div>
                    </section>


                    {/* ========================================= */}
                    {/* SECTION LIHAT PAKET LAYANAN LAINNYA       */}
                    {/* ========================================= */}
                    <section className="relative z-10 mx-auto w-full max-w-[1400px] px-8 py-24 md:px-16 lg:px-24">
                        <h3 className="mb-10 text-[15px] font-medium tracking-wide text-white">
                            LIHAT PAKET LAYANAN NSC LAINNYA
                        </h3>

                        <div className="flex flex-col gap-6 md:flex-row">

                            {/* Card Lokasi Tetap */}
                            <div className="group relative flex h-[350px] flex-1 cursor-pointer flex-col justify-start overflow-hidden bg-[#111] p-8 md:h-[450px] lg:p-12">
                                <Image
                                    src="/lokasi-tetap.webp"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    alt="Lokasi Tetap"
                                />
                                <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/10"></div>
                                <div className="relative z-10">
                                    <h4 className="mb-2 text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
                                        LOKASI TETAP
                                    </h4>
                                    <p className="text-[15px] text-white/90 md:text-[17px]">
                                        Konektivitas untuk bisnis
                                    </p>
                                </div>
                            </div>

                            {/* Card Mobile Darat */}
                            <div className="group relative flex h-[350px] flex-1 cursor-pointer flex-col justify-start overflow-hidden bg-[#111] p-8 md:h-[450px] lg:p-12">
                                <Image
                                    src="/mobile-darat.webp"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover grayscale opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
                                    alt="Mobile Darat"
                                />
                                <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/20"></div>
                                <div className="relative z-10">
                                    <h4 className="mb-2 text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
                                        MOBILE DARAT
                                    </h4>
                                    <p className="text-[15px] text-white/80 md:text-[17px]">
                                        Layanan tidak tersedia
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>


                    {/* ========================================= */}
                    {/* SECTION UJI COBA 30 HARI                  */}
                    {/* ========================================= */}
                    <section className="relative z-10 flex min-h-[60vh] w-full flex-col items-center justify-center px-8 py-32 text-center md:px-16 lg:px-24">
                        <h2 className="mb-6 text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
                            UJI COBA 30 HARI
                        </h2>
                        <p className="mb-10 max-w-xl text-[15px] leading-relaxed text-gray-300 md:text-[17px]">
                            Coba NSC selama 30 hari. Jika tidak puas, Anda bisa mendapatkan pengembalian dana penuh.
                        </p>
                        <button className="rounded-sm bg-white px-14 py-4 text-[11px] font-bold uppercase tracking-widest text-black transition-colors hover:bg-gray-200">
                            MULAI
                        </button>
                    </section>

                </div>

            </div>

            <Footer />
        </main>
    );
}