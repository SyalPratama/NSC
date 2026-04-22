import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-black">
      
      {/* --- SECTION 1: HERO --- */}
      <section className="z-0 relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.webp" 
            alt="NSC Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 mt-8 flex flex-col items-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-xl md:text-5xl lg:text-6xl">
            Internet Berkecepatan Tinggi<br />
            Sampai<br />
            Pelosok Negeri
          </h1>
          <p className="text-base text-gray-100 drop-shadow-md md:text-lg">
            Layanan konektivitas tanpa batas di seluruh pelosok negeri<br />
            Hingga <span className="font-bold decoration-white">Wilayah Terpencil</span>
          </p>
        </div>

        <div className="relative z-10 mt-[50px] flex w-full max-w-[1500px] flex-col gap-6 px-6 md:flex-row">
          {/* Card 1: Residensial */}
          <div className="flex flex-1 flex-col justify-between rounded-xl border border-gray-500/50 bg-[#111111]/20 p-8 backdrop-blur-md">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-white uppercase">Residensial</h2>
              <p className="mb-4 text-sm text-gray-300">Dengan Akastar di rumah Anda, nikmati internet super cepat tanpa batasan. Streaming video, bermain game, dan bekerja dari rumah akan menjadi lebih lancar daripada sebelumnya. Jadikan rumah Anda pusat konektivitas yang tak tertandingi.</p>
              <p className="mb-8 text-sm font-bold text-white">Mulai di bawah ini untuk melihat paket dan harga</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-gray-200">
                Mulai
              </button>
              <button className="border border-white bg-transparent px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black">
                Pelajari Selengkapnya
              </button>
            </div>
          </div>

          {/* Card 2: Jelajah */}
          <div className="flex flex-1 flex-col justify-between rounded-xl border border-gray-500/50 bg-[#111111]/20 p-8 backdrop-blur-md">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-white uppercase">Mobile (Roam)</h2>
              <p className="mb-4 text-sm text-gray-300">Tidak perlu lagi khawatir tentang koneksi saat bepergian. Akastar membuat Anda tetap terhubung di mana pun Anda berada. Browsing, streaming, dan komunikasi seluler tak pernah semudah ini, bahkan di tempat-tempat terpencil.</p>
              <p className="mb-8 text-sm font-bold text-white">Mulai di bawah ini untuk melihat paket dan harga</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-gray-200">
                Mulai
              </button>
              <button className="border border-white bg-transparent px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black">
                Pelajari Selengkapnya
              </button>
            </div>
          </div>

          {/* Card 3: Jelajah */}
          <div className="flex flex-1 flex-col justify-between rounded-xl border border-gray-500/50 bg-[#111111]/20 p-8 backdrop-blur-md">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-white uppercase">Maritime</h2>
              <p className="mb-4 text-sm text-gray-300">Tingkatkan petualangan di laut dengan Akastar. Dengan koneksi internet yang cepat di kapal atau perahu Anda, Anda dapat tetap terhubung dengan dunia, mengakses navigasi online, berbagi pengalaman dengan teman-teman, dan mengejar hobi favorit Anda tanpa hambatan.</p>
              <p className="mb-8 text-sm font-bold text-white">Mulai di bawah ini untuk melihat paket dan harga</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-gray-200">
                Mulai
              </button>
              <button className="border border-white bg-transparent px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black">
                Pelajari Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: KONEKTIVITAS --- */}
      <section className="flex w-full flex-col items-center justify-center bg-black px-6 py-32 text-center">
        <h2 className="mb-6 max-w-5xl text-3xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-[44px] leading-tight">
          KONEKTIVITAS CEPAT SAMPAI PELOSOK NEGERI, KAPAN SAJA ANDA BUTUHKAN
        </h2>
        
        <p className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.15em] text-gray-300">
          Tersebar di seluruh wilayah indonesia sampai pelosok negeri
        </p>
        
        <button className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-70">
          <span className="border-b border-transparent pb-0.5 group-hover:border-white transition-colors">
            PERIKSA KETERSEDIAAN DAN PAKET DI AREA ANDA
          </span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* --- SECTION 3: ANDAL & TANGGUH --- */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero2.webp"
            alt="Andal dan Tangguh"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 flex h-full flex-col items-end justify-start px-8 pt-32 md:px-16 lg:px-24 md:pt-40">
          <div className="max-w-lg text-left">
            <h2 className="mb-6 text-3xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-md md:text-4xl">
              AKASTAR
            </h2>
            <p className="text-base leading-relaxed text-gray-200 drop-shadow-md md:text-lg">
              NSC telah melahirkan produk bernama Akastar, diambil dari bahasa sansekerta Akasa (artinya ruang), dipadukan dengan "bintang" sebagai simbolisasi menyambutan teknologi maju ke pulau Indonesia. Nikmati "Internet Cepat Sampai Pelosok Negeri bersama kami!.{" "}
              <a href="#" className="font-bold text-white underline decoration-white underline-offset-4 transition-opacity hover:opacity-70">
                Pelajari selengkapnya di sini.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: INTERNET YANG DIRANCANG UNTUK SETIAP KEBUTUHAN --- */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero3.webp"
            alt="Internet untuk setiap kebutuhan"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 flex h-full flex-col justify-start px-8 pt-32 md:px-16 md:pt-40 lg:px-24">
          <div className="max-w-xl text-left">
            <h2 className="mb-6 text-3xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-md md:text-4xl">
              Jangkauan
            </h2>
            <p className="mb-6 text-base leading-relaxed text-gray-200 drop-shadow-md md:text-lg">
              Tersebar di seluruh wilayah Indonesia, kami hadir untuk memberikan solusi internet dengan kecepatan stabil tanpa gangguan hingga di pelosok negeri. Konektivitas yang kami berikan diharapkan dapat mendorong pertumbuhan ekonomi, memberikan kebebasan infrastruktur kepada seluruh masyarakat, sehingga setiap orang mendapat kesempatan yang sama untuk mendapat akses internet yang stabil.
            </p>
            <p className="text-base leading-relaxed text-gray-200 drop-shadow-md md:text-lg">
              Periksa wilayah Anda{" "}
              <a href="#" className="font-bold text-white underline decoration-white underline-offset-4 transition-opacity hover:opacity-70">
                di sini.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* --- WRAPPER SECTION 5 & 6 --- */}
      <div className="relative w-full bg-black [clip-path:inset(0)]">
        
        <div className="fixed left-0 top-0 z-0 h-full w-full md:w-1/2 pointer-events-none">
          <Image
            src="/particle1.webp"
            alt="Particle Effect"
            fill
            className="object-contain object-left"
          />
        </div>

        {/* --- SECTION 5: ONLINE DALAM HITUNGAN MENIT --- */}
        <section className="relative z-10 flex min-h-screen w-full items-center justify-center bg-transparent px-8 py-20 md:px-16 lg:px-24">
          <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">
            
            <div className="relative flex flex-1 justify-center">
              <div className="relative aspect-square w-full max-w-[600px]">
                <Image
                  src="/orbit.webp"
                  alt="NSC Setup"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex-1 text-left">
              <h2 className="mb-6 text-4xl font-bold uppercase leading-tight tracking-tight text-white md:text-5xl">
                Leo Sat<br />Educational<br />Heading
              </h2>
              <p className="mb-12 text-base text-gray-200 md:text-lg">
                Berdedikasi untuk memberikan konektivitas di seluruh wilayah Indonesia, kami memberikan edukasi yang mendalam tentang Orbit satelit. Ada dua kategori orbit yang perlu dipahami, mulai dari GEO (Geostationary Earth Orbit) dan LEO (Low Earth Orbit). Kedua kategori orbit satelit ini memiliki karakteristik serta kegunaan yang unik dan kegunaan yang berbeda. Namun persamaannya adalah keduanya memiliki peran yang penting dalam infrastruktur satelit global untuk dapat memenuhi berbagai kebutuhan komunikasi dan penelitian.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="flex h-12 items-center justify-center rounded-md border border-gray-600 bg-transparent px-6 transition-colors hover:border-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Selengkapnya</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* --- SECTION 6: PAKET LAYANAN FLEKSIBEL --- */}
        <section className="relative z-10 flex min-h-screen w-full items-center justify-center bg-transparent px-8 py-20 md:px-16 lg:px-24">
          <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">
            
            <div className="flex-1 text-left">
              <h2 className="mb-8 text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-5xl lg:text-4xl">
                Paket Layanan Fleksibel
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
                NSC menawarkan paket layanan fleksibel di seluruh wilayah.
              </p>
            </div>

            <div className="relative flex flex-1 justify-center">
              <div className="relative aspect-video w-full max-w-[650px] md:aspect-square">
                <Image
                  src="/image2.webp"
                  alt="NSC Service"
                  fill
                  className="object-contain object-center md:object-right"
                />
              </div>
            </div>

          </div>
        </section>
        
      </div>

      {/* --- SECTION 7: DIRANCANG OLEH NSC --- */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero4.webp"
            alt="Dirancang oleh NSC"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 flex h-full flex-col justify-start pt-32 px-8 md:px-16 lg:px-24">
          <div className="max-w-xl text-left">
            <h2 className="mb-6 text-4xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-md md:text-5xl">
              Menggunakan teknologi VSAT
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-200 drop-shadow-md md:text-lg">
              kami menjadi salah satu penyedia internet berbasis satelit di Indonesia yang mampu menyediakan konektivitas yang handal dan cepat di daerah yang sulit dijangkau oleh infrastruktur.
            </p>
            <button className="border-[1.5px] border-white bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black">
              Pelajari Selengkapnya
            </button>
          </div>
        </div>
      </section>

      {/* --- SECTION 8: UJI COBA 30 HARI (CENTERED FORM + FIXED BG KANAN) --- */}
      <div className="relative w-full bg-black [clip-path:inset(0)]">
        
        <div className="fixed right-0 top-0 z-0 h-full w-full md:w-1/2 pointer-events-none">
          <Image
            src="/particle2.webp"
            alt="Particle Effect 2"
            fill
            className="object-contain object-right"
          />
        </div>

        <section className="relative z-10 flex min-h-[90vh] w-full flex-col items-center justify-center bg-transparent px-8 py-24 text-center md:px-16 lg:px-24">
          <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center">
            
            <h2 className="mb-4 text-4xl font-bold uppercase leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              UJI COBA 30 HARI
            </h2>
            <p className="mb-12 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
              Jika tidak puas, Anda dapat mengembalikan NSC untuk mendapatkan pengembalian dana penuh.
            </p>

            <div className="flex w-full max-w-2xl flex-col gap-2 text-left">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                ALAMAT LAYANAN
              </label>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <input 
                    type="text" 
                    placeholder="KETIK DAN PILIH"
                    className="w-full border border-gray-600 bg-black/60 px-4 py-4 text-sm text-white outline-none transition-colors focus:border-white placeholder:text-gray-500 uppercase"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      <circle cx="12" cy="12" r="6" strokeDasharray="2 2" />
                    </svg>
                  </div>
                </div>

                <button className="w-full bg-white px-10 py-4 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-gray-200 sm:w-auto min-w-[140px]">
                  MULAI
                </button>
              </div>

              <div className="mt-8 flex w-full justify-center">
                <button className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-70">
                  <span className="border-b border-transparent pb-0.5 group-hover:border-white transition-all duration-300">
                    LIHAT PETA KETERSEDIAAN & KECEPATAN
                  </span>
                  <svg className="h-3 w-3 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>

    <Footer />
    </main>
  );
}