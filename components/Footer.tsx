import Link from "next/link";
import { MapPin } from "lucide-react"; // Import ikon untuk mempercantik alamat

export default function Footer() {
  return (
    <footer className="w-full bg-black px-8 py-12 md:px-16 lg:px-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        
        {/* Top Section: Links & Newsletter */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          
          <div className="flex flex-wrap items-center gap-6 text-[13px] font-bold text-white">
            <Link href="/career" className="transition-opacity hover:opacity-70">Karir</Link>
            <Link href="#" className="transition-opacity hover:opacity-70">Operator Satelit</Link>
            <Link href="/reseller" className="transition-opacity hover:opacity-70">Reseller Resmi</Link>
            <Link href="#" className="transition-opacity hover:opacity-70">Privasi & Hukum</Link>
            <Link href="#" className="transition-opacity hover:opacity-70">Preferensi Privasi</Link>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
            <span className="text-[13px] font-bold text-white">
              Ingin terus menerima informasi terbaru NSC?
            </span>
            <div className="flex items-end gap-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full border-b border-gray-500 bg-transparent pb-1 pt-2 text-[13px] text-white outline-none transition-colors focus:border-white lg:w-48"
              />
              <button className="group flex items-center gap-1 text-[12px] font-bold text-white transition-opacity hover:opacity-70">
                DAFTAR
                <svg className="h-3 w-3 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Address */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex items-start gap-3 text-gray-400">
            <MapPin size={16} className="mt-1 flex-shrink-0 text-blue-500" />
            <div className="flex flex-col text-[12px] leading-relaxed">
              <span className="font-bold text-white mb-1">Kantor Pusat</span>
              <p className="max-w-xl">
                Grand Fatmawati Mas Blok I Nomor 108, Jl. RS Fatmawati Nomor 20, 
                Kelurahan Cilandak Barat, Kecamatan Cilandak, Kota Jakarta Selatan, 
                Provinsi Daerah Khusus Ibukota Jakarta 12430
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-gray-800 pt-8 lg:flex-row lg:items-center">

          <div className="flex flex-wrap items-center gap-4 text-[12px] text-gray-300">
            <span>© 2026 PT Nusantara Star Connect (NSC)</span>
            <span className="hidden lg:block text-gray-700">|</span>
            <span>
              Internet Cepat Sampai Pelosok Negeri
            </span>
          </div>

          <div className="text-[12px] text-gray-300">
            Dengan mengeklik Daftar, Anda menyetujui{" "}
            <a href="#" className="font-bold text-white transition-opacity hover:opacity-70">
              Kebijakan Privasi
            </a>{" "}
            kami
          </div>

        </div>
      </div>
    </footer>
  );
}