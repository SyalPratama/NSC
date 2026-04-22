"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";

export default function Mobile() {
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
        const walk = (x - startX2) * 2;
        scrollRef2.current.scrollLeft = scrollLeft2 - walk;
    };

    const scrollRef3 = useRef<HTMLDivElement>(null);
    const [activeIndex3, setActiveIndex3] = useState(0);

    const [isDragging3, setIsDragging3] = useState(false);
    const [startX3, setStartX3] = useState(0);
    const [scrollLeft3, setScrollLeft3] = useState(0);

    const handleMouseDown3 = (e: React.MouseEvent) => {
        if (!scrollRef3.current) return;
        setIsDragging3(true);
        setStartX3(e.pageX - scrollRef3.current.offsetLeft);
        setScrollLeft3(scrollRef3.current.scrollLeft);
    };

    const handleMouseLeave3 = () => setIsDragging3(false);
    const handleMouseUp3 = () => setIsDragging3(false);

    const handleMouseMove3 = (e: React.MouseEvent) => {
        if (!isDragging3 || !scrollRef3.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef3.current.offsetLeft;
        const walk = (x - startX3) * 2;
        scrollRef3.current.scrollLeft = scrollLeft3 - walk;
    };

    const handleScroll3 = () => {
        if (scrollRef3.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef3.current;
            const maxScroll = scrollWidth - clientWidth;
            if (maxScroll <= 0) return;
            const scrollPercentage = scrollLeft / maxScroll;
            // Dikali 2 karena ada 3 item (index 0, 1, 2)
            const newIndex = Math.round(scrollPercentage * 2);
            if (newIndex !== activeIndex3) setActiveIndex3(newIndex);
        }
    };

    const scrollTo3 = (index: number) => {
        if (scrollRef3.current) {
            const { scrollWidth, clientWidth } = scrollRef3.current;
            const maxScroll = scrollWidth - clientWidth;
            const targetLeft = (maxScroll / 2) * index;
            scrollRef3.current.scrollTo({ left: targetLeft, behavior: "smooth" });
            setActiveIndex3(index);
        }
    };
    return (
        <main className="w-full bg-black">

            {/* --- HERO SECTION JELAJAH --- */}
            <section className="relative flex min-h-screen w-full flex-col items-center justify-center pb-20">

                <div className="absolute inset-0 z-0 h-full w-full">
                    <Image
                        src="/mobile-hero.webp"
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
                        NSC MOBILE
                    </h1>
                    <div className="mb-8 max-w-3xl text-base text-white drop-shadow-md md:text-lg leading-relaxed">
                        <p>
                            Dengan 650 satelit di low-Earth orbit saat ini, konstelasi satelit ke seluler terbesar dan satu-satunya di dunia ini mendukung data, suara, video, dan pengiriman pesan di enam benua dan akan dapat diakses oleh lebih dari 1,7 miliar orang.
                        </p>
                    </div>
                    <div className="mb-10 max-w-3xl text-sm text-white drop-shadow-md md:text-lg leading-relaxed">
                        <p>
                            Melalui satelit generasi terbarunya, NSC Mobile kini menghadirkan broadband langsung ke ponsel.
                        </p>
                    </div>
                    <div className="mb-10 max-w-3xl text-sm font-bold text-white drop-shadow-md md:text-lg leading-relaxed">
                        <p>
                            TONTON VIDEO DEMO
                        </p>
                    </div>
                    <button className="rounded-sm bg-white px-12 py-3.5 text-[11px] font-bold uppercase tracking-widest text-black transition-colors hover:bg-gray-200">
                        Hubungi Kami
                    </button>
                </div>
            </section>

            <section className="relative w-full bg-black px-8 py-24 md:px-12 lg:px-24">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

                <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3">

                    {/* Kolom 1: DATA */}
                    <div className="flex flex-col items-center text-center px-4 py-10 md:py-0 md:px-12">
                        <div className="mb-8 flex h-20 w-20 items-center justify-center">
                            <svg className="h-16 w-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="5" r="3"></circle>
                                <circle cx="6" cy="19" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <circle cx="12" cy="12" r="3"></circle>
                                <line x1="15.8" y1="6.8" x2="14.2" y2="10.2"></line>
                                <line x1="8.2" y1="6.8" x2="9.8" y2="10.2"></line>
                                <line x1="15.8" y1="17.2" x2="14.2" y2="13.8"></line>
                                <line x1="8.2" y1="17.2" x2="9.8" y2="13.8"></line>
                                <line x1="6" y1="8" x2="6" y2="16"></line>
                                <line x1="18" y1="8" x2="18" y2="16"></line>
                            </svg>
                        </div>
                        <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-white md:text-[34px]">
                            DATA
                        </h2>
                        <p className="text-[13px] leading-relaxed text-gray-200">
                            Tersedia di 40+ aplikasi dan di 100+ perangkat. Layanan mendatang akan menawarkan panggilan video, streaming, email, dan banyak lagi
                        </p>
                    </div>

                    {/* Kolom 2: SUARA (Dengan Garis Pembatas Kiri & Kanan) */}
                    <div className="flex flex-col items-center text-center border-y border-gray-700/60 md:border-y-0 md:border-x px-4 py-10 md:py-0 md:px-12">
                        <div className="mb-8 flex h-20 w-20 items-center justify-center">
                            <svg className="h-14 w-14 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                <line x1="12" y1="19" x2="12" y2="22"></line>
                                <line x1="8" y1="22" x2="16" y2="22"></line>
                            </svg>
                        </div>
                        <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-white md:text-[34px]">
                            SUARA
                        </h2>
                        <p className="text-[13px] leading-relaxed text-gray-200">
                            Kini tersedia melalui aplikasi. Layanan mendatang akan mengaktifkan panggilan langsung dari ponsel
                        </p>
                    </div>

                    {/* Kolom 3: PENGIRIMAN PESAN */}
                    <div className="flex flex-col items-center text-center px-4 py-10 md:py-0 md:px-12">
                        <div className="mb-8 flex h-20 w-20 items-center justify-center">
                            <svg className="h-16 w-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                        </div>
                        <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-white md:text-[34px]">
                            PENGIRIMAN<br />PESAN
                        </h2>
                        <p className="text-[13px] leading-relaxed text-gray-200">
                            Kini mendukung jutaan pesan. Layanan pengiriman file dan video berukuran besar akan segera tersedia
                        </p>
                    </div>

                </div>
            </section>


            {/* ========================================= */}
            {/* SECTION 2: MITRA GLOBAL                   */}
            {/* ========================================= */}
            <section className="relative flex w-full flex-col items-center bg-black pt-32 pb-10 text-center">

                <div className="mx-auto w-full max-w-6xl px-8">
                    <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-white md:text-[42px]">
                        MITRA GLOBAL DI ENAM BENUA
                    </h2>

                    <p className="mb-16 text-[15px] text-gray-200">
                        Akses global resiprokal tersedia untuk penyedia layanan seluler di semua negara mitra dengan NSC Mobile
                    </p>

                    <div className="flex flex-col space-y-5 text-[13px] font-bold text-white tracking-wide">

                        {/* Baris 1 */}
                        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                            <span>T-Mobile (AS)</span>
                            <span className="text-gray-500 font-normal">|</span>
                            <span>Optus (Australia)</span>
                            <span className="text-gray-500 font-normal">|</span>
                            <span>Telstra (Australia)</span>
                            <span className="text-gray-500 font-normal">|</span>
                            <span>Rogers (Kanada)</span>
                            <span className="text-gray-500 font-normal">|</span>
                            <span>One NZ (Selandia Baru)</span>
                            <span className="text-gray-500 font-normal">|</span>
                            <span>KDDI (Jepang)</span>
                            <span className="text-gray-500 font-normal">|</span>
                            <span>Globe (Filipina)</span>
                        </div>

                        {/* Baris 2 */}
                        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                            <span>Salt (Swiss)</span>
                            <span className="text-gray-500 font-normal">|</span>
                            <span>Entel (Cile)</span>
                            <span className="text-gray-500 font-normal">|</span>
                            <span>Entel (Peru)</span>
                            <span className="text-gray-500 font-normal">|</span>
                            <span>Kyivstar (Ukraina)</span>
                            <span className="text-gray-500 font-normal">|</span>
                            <span>VMO2 (Inggris Raya)</span>
                            <span className="text-gray-500 font-normal">|</span>
                            <span>Airtel Africa (14 Negara)</span>
                            <span className="text-gray-500 font-normal">|</span>
                            <span>MasOrange (Spanyol)</span>
                            <span className="text-gray-500 font-normal">|</span>
                            <span>Beeline (Kazakhstan)</span>
                        </div>

                        {/* Baris 3 */}
                        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                            <span>Deutsche Telekom (10 negara)</span>
                            <span className="text-gray-500 font-normal">|</span>
                            <span>MTN Group (Zambia)</span>
                        </div>

                    </div>

                    <p className="mt-16 text-[13px] font-bold text-white">
                        Dan kemitraan lainnya yang akan segera hadir.
                    </p>
                </div>

                <div className="relative mt-16 w-full max-w-full aspect-[2/1] md:aspect-[6/3]">
                    <Image
                        src="/map.webp"
                        alt="Peta Mitra Global NSC"
                        fill
                        className="object-cover object-top"
                    />
                </div>

            </section>

            {/* ========================================= */}
            {/* SECTION 3: KONEKTIVITAS YANG MENYELAMATKAN NYAWA */}
            {/* ========================================= */}
            <section className="relative flex w-full flex-col items-center overflow-hidden bg-black px-8 py-24 md:px-16 lg:px-24">

                {/* Header Text */}
                <div className="mb-16 w-full max-w-5xl text-center">
                    <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-white md:text-3xl lg:text-4xl">
                        KONEKTIVITAS YANG MENYELAMATKAN NYAWA
                    </h2>
                    <p className="mx-auto max-w-4xl text-[13px] leading-relaxed text-gray-300 md:text-[15px]">
                        NSC Mobile memungkinkan komunikasi penting saat jangkauan sinyal konvensional tidak tersedia untuk tim aksi cepat, tim penanggulangan bencana, dan masyarakat yang terkena dampak bencana alam serta keadaan darurat lainnya.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full max-w-7xl group">

                    <button
                        onClick={() => {
                            if (scrollRef3.current) scrollRef3.current.scrollBy({ left: -400, behavior: "smooth" });
                        }}
                        className="absolute left-4 top-[40%] z-20 -translate-y-1/2 text-white/50 opacity-0 transition-all duration-300 hover:text-white group-hover:opacity-100 hidden md:block"
                    >
                        <svg className="h-8 w-8 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div
                        ref={scrollRef3}
                        onScroll={handleScroll3}
                        onMouseDown={handleMouseDown3}
                        onMouseLeave={handleMouseLeave3}
                        onMouseUp={handleMouseUp3}
                        onMouseMove={handleMouseMove3}
                        className={`flex w-full gap-6 overflow-x-auto pb-8 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isDragging3 ? "cursor-grabbing" : "cursor-grab snap-x snap-mandatory"
                            }`}
                        style={{ scrollBehavior: isDragging3 ? 'auto' : 'smooth' }}
                    >

                        {/* Card 1 */}
                        <div className="flex min-w-[85vw] flex-col snap-start md:min-w-[400px] flex-1 select-none">
                            <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden bg-[#111111] pointer-events-none">
                                <Image src="/dimanasaja.webp" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 hover:scale-105" alt="Konektivitas di mana saja" />
                            </div>
                            <h4 className="text-[15px] font-normal uppercase tracking-wide text-white md:text-base">
                                KONEKTIVITAS DI MANA SAJA ANDA MEMBUTUHKANNYA
                            </h4>
                        </div>

                        {/* Card 2 */}
                        <div className="flex min-w-[85vw] flex-col snap-start md:min-w-[400px] flex-1 select-none">
                            <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden bg-[#111111] pointer-events-none">
                                <Image src="/nirkable.webp" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 hover:scale-105" alt="Peringatan keadaan darurat" />
                            </div>
                            <h4 className="text-[15px] font-normal uppercase tracking-wide text-white md:text-base">
                                PERINGATAN KEADAAN DARURAT NIRKABEL
                            </h4>
                        </div>

                        {/* Card 3 */}
                        <div className="flex min-w-[85vw] flex-col snap-start md:min-w-[400px] flex-1 select-none">
                            <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden bg-[#111111] pointer-events-none">
                                <Image src="/darurat.webp" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 hover:scale-105" alt="Tanggap darurat dan bantuan" />
                            </div>
                            <h4 className="text-[15px] font-normal uppercase tracking-wide text-white md:text-base">
                                TANGGAP DARURAT DAN BANTUAN
                            </h4>
                        </div>

                    </div>

                    {/* Right Navigation Arrow */}
                    <button
                        onClick={() => {
                            if (scrollRef3.current) scrollRef3.current.scrollBy({ left: 400, behavior: "smooth" });
                        }}
                        className="absolute right-4 top-[40%] z-20 -translate-y-1/2 text-white/50 opacity-0 transition-all duration-300 hover:text-white group-hover:opacity-100 hidden md:block"
                    >
                        <svg className="h-8 w-8 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                </div>

                {/* Indikator Titik & Garis (3 item) */}
                <div className="mt-8 flex w-full max-w-7xl items-center justify-start gap-2 pl-2">
                    {[0, 1, 2].map((index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo3(index)}
                            className={`h-1.5 rounded-full ${activeIndex3 === index
                                    ? "w-full max-w-[280px] bg-[#888888]"
                                    : "w-1.5 bg-[#333333]"
                                }`}
                        />
                    ))}
                </div>

            </section>

            {/* ========================================= */}
            {/* SECTION 4: MENARA SELULER DI LUAR ANGKASA */}
            {/* ========================================= */}
            <section className="relative flex w-full items-center justify-center bg-black px-8 py-32 md:px-16 lg:px-24">
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 lg:flex-row lg:gap-24">

                    <div className="flex w-full flex-1 flex-col text-left">
                        <h2 className="mb-6 text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                            MENARA SELULER DI LUAR ANGKASA
                        </h2>
                        <p className="text-[13px] leading-relaxed text-gray-300 md:text-[15px]">
                            Layanan NSC Mobile dapat diakses melalui ponsel LTE milik Anda di semua tempat dengan bidang pandang bebas halangan. Satelit NSC memiliki antena yang berfungsi seperti menara seluler di ruang angkasa, antena phased array paling canggih di dunia yang terhubung dengan mulus melalui laser ke titik mana pun di dunia, memungkinkan integrasi jaringan yang mirip dengan mitra roaming standar.
                        </p>
                    </div>

                    <div className="relative flex w-full flex-1 items-center justify-center">
                        <div className="relative w-full max-w-[600px] aspect-[4/3] lg:aspect-auto lg:h-[600px]">
                            <Image
                                src="/diagram.webp"
                                alt="Diagram Menara Seluler di Luar Angkasa"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain object-center"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* ========================================= */}
            {/* SECTION 5: MASA DEPAN NSC MOBILE     */}
            {/* ========================================= */}
            <section className="relative flex min-h-[80vh] w-full flex-col md:flex-row bg-black">

                <div className="relative h-[50vh] w-full md:h-auto md:flex-1">
                    <Image
                        src="/beam.webp"
                        alt="Satelit V1 dan V2"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center"
                    />
                </div>

                <div className="flex flex-1 flex-col justify-center bg-black px-8 py-16 md:px-16 lg:px-24">
                    <div className="max-w-xl text-left">
                        <h2 className="mb-8 text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                            MASA DEPAN NSC MOBILE
                        </h2>
                        <div className="space-y-6 text-[13px] leading-relaxed text-gray-300 md:text-[15px]">
                            <p>
                                Satelit NSC Mobile generasi berikutnya, V2, akan memberikan jangkauan seluler penuh ke tempat-tempat yang sebelumnya dianggap tidak memungkinkan melalui jaringan satelit ke seluler berperforma tertinggi yang pernah dibuat.
                            </p>
                            <p>
                                Didukung oleh silikon dan antena phased array yang dirancang khusus oleh NSC, satelit akan mendukung ribuan spatial beam dan kemampuan bandwidth yang lebih tinggi, memungkinkan sekitar 20x kemampuan throughput dibandingkan dengan satelit generasi pertama.
                            </p>
                            <p>
                                Dengan konektivitas NSC Mobile V2, operator jaringan seluler dapat mengurangi upaya dalam jaringan terestrial sekaligus membuka layanan tanpa batas di daerah terpencil dan memungkinkan jangkauan total di mana saja untuk pelanggan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================= */}
            {/* SECTION 6: MENINGKATKAN KONEKTIVITAS ANDAL */}
            {/* ========================================= */}
            <section className="relative flex min-h-[80vh] w-full flex-col-reverse md:flex-row bg-black">

                <div className="flex flex-1 flex-col justify-center bg-black px-8 py-16 md:px-16 lg:px-24">
                    <div className="max-w-xl text-left">
                        <h2 className="mb-8 text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                            MENINGKATKAN KONEKTIVITAS YANG ANDAL
                        </h2>
                        <div className="space-y-6 text-[13px] leading-relaxed text-gray-300 md:text-[15px]">
                            <p>
                                Di sebagian besar lingkungan, NSC Mobile V2 akan memungkinkan konektivitas seluler 5G penuh dengan pengalaman yang sebanding dengan layanan terestrial saat ini.
                            </p>
                            <p>
                                Dalam kemitraan dengan Operator Jaringan Seluler, jaringan V2 akan meningkatkan jaringan 5G terestrial berkapasitas tinggi. Pelanggan akan dapat menikmati konektivitas internet berkecepatan tinggi di ponsel mereka, dengan kemampuan untuk, antara lain, streaming film, melakukan panggilan video, mendengarkan podcast, dan bekerja dari jarak jauh—bertransisi secara lancar antara jaringan satelit dan terestrial tanpa gangguan atau penurunan kualitas layanan.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative h-[50vh] w-full md:h-auto md:flex-1">
                    <Image
                        src="/realible.webp"
                        alt="Meningkatkan Konektivitas yang Andal"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center"
                    />
                </div>
            </section>

            {/* --- SECTION 3: ANDAL & TANGGUH --- */}
            <section className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/starship.webp"
                        alt="Andal dan Tangguh"
                        fill
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-bl from-black/80 via-black/20 to-transparent"></div>
                </div>

                <div className="relative z-10 flex h-full flex-col items-end justify-start px-8 pt-32 md:px-16 lg:px-24 md:pt-40">
                    <div className="max-w-lg text-left">
                        <h2 className="mb-6 text-3xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-md md:text-4xl">
                            DIRANCANG OLEH NSC
                        </h2>
                        <p className="text-base leading-relaxed text-gray-200 drop-shadow-md md:text-lg">
                            NSC memanfaatkan pengalamannya dalam pembuatan dan peluncuran roket dan pesawat ruang angkasa tercanggih di dunia untuk menyebarkan satelit NSC dengan kemampuan NSC Mobile dalam skala besar.
                        </p> <br />
                        <p className="text-base leading-relaxed text-gray-200 drop-shadow-md md:text-lg">
                            Satelit NSC Mobile awalnya diluncurkan oleh roket Falcon 9 NSC, dan satelit generasi berikutnya akan disebarkan oleh Starship. Saat mengorbit, satelit akan seketika terhubung melalui backhaul laser ke konstelasi NSC untuk menyediakan konektivitas global.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative z-10 flex min-h-[70vh] w-full flex-col items-center justify-center px-8 py-24 text-center md:px-16 lg:px-24">
                <h2 className="mb-6 text-4xl font-bold uppercase tracking-tight text-white md:text-5xl">
                    Hubungi Kami
                </h2>
                <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">
                    Pelajari cara NSC Mobile dapat memperluas jaringan Anda.
                </p>
                <button className="rounded-sm bg-white px-12 py-3.5 text-[11px] font-bold uppercase tracking-widest text-black transition-colors hover:bg-gray-200">
                    Hubungi Kami
                </button>
            </section>

            <Footer />
        </main>
    );
}