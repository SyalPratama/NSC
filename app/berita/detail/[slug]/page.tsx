export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-gray-200 selection:bg-orange-500/30 p-6 overflow-hidden font-sans">
      
      {/* Efek Pendaran Cahaya (Glow) di Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Box Konten */}
      <div className="relative z-10 text-center space-y-6 p-8 md:p-12 bg-[#111111] border border-white/10 rounded-[32px] shadow-2xl backdrop-blur-md max-w-2xl w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
          Detail Berita: <br/>
          <span className="text-orange-500 block mt-2">{params.slug}</span>
        </h1>
        
        {/* Garis Aksen Oranye */}
        <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
        
        <p className="text-gray-400 font-medium text-sm md:text-base">
          Halaman parameter ini berhasil dimuat!
        </p>
      </div>
      
    </div>
  );
}