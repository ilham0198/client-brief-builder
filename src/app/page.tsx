import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-32 text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-balance">
            Ceritakan Visi<br />
            <span className="text-apple-gray-500">Digital Anda</span>
          </h1>
          <p className="text-2xl md:text-3xl text-apple-gray-500 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Mulai dengan brief yang komprehensif. Kami akan menerjemahkan ide Anda menjadi pengalaman digital yang luar biasa.
          </p>
          <Link
            href="/brief"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-black text-white font-medium text-lg hover:bg-apple-gray-800 transition-all shadow-apple hover:shadow-apple-hover"
          >
            Mulai Sekarang <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}