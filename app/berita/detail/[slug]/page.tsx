export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="p-20 text-white bg-[#1A2B47] min-h-screen">
      <h1 className="text-2xl font-bold">Detail Berita: {params.slug}</h1>
      <p className="mt-4">Halaman ini berhasil dimuat!</p>
    </div>
  );
}