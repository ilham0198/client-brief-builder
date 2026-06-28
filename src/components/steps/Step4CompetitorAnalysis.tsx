'use client'
import { BriefData, FieldErrors } from '@/app/brief/page'
import { Target, ThumbsUp, ThumbsDown, Zap } from 'lucide-react'

export default function Step4CompetitorAnalysis({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber?: number; totalSteps?: number; fieldErrors?: FieldErrors }) {
  return (
    <div className="fade-in">
      <div className="mb-12">
        <div className="text-sm font-medium text-apple-gray-500 mb-3">Langkah 4 dari 20</div>
        <h2 className="text-5xl font-bold tracking-tight mb-4">Analisis Kompetitor</h2>
        <p className="text-xl text-apple-gray-500 font-light">Memahami lanskap persaingan membantu kami memposisikan Anda dengan tepat.</p>
      </div>

      <div className="space-y-10">
        <div className="flex items-start gap-4">
          <Target className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Daftar Kompetitor Utama</label>
            <p className="text-apple-gray-500 mb-4">Sebutkan 3-5 kompetitor langsung atau tidak langsung (URL jika ada).</p>
            <textarea
              value={data.competitors || ''}
              onChange={e => update({ competitors: e.target.value })}
              placeholder="Contoh:
1. competitor1.com - Pemain utama di industri ini
2. competitor2.com - Baru 2 tahun tapi growing cepat
3. competitor3.com - Fokus di segmen premium
4. @competitor_ig - Banyak engagement di Instagram"
              rows={6}
              className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none"
            />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <ThumbsUp className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Kekuatan Kompetitor</label>
            <p className="text-apple-gray-500 mb-4">Apa yang mereka lakukan dengan baik? Fitur, desain, marketing, dll.</p>
            <textarea
              value={data.competitorStrengths || ''}
              onChange={e => update({ competitorStrengths: e.target.value })}
              placeholder="Contoh: Website mereka cepat dan modern, UI/UX sangat intuitif, mereka punya blog yang aktif dengan konten berkualitas, fitur checkout sangat smooth..."
              rows={4}
              className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none"
            />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <ThumbsDown className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Kelemahan Kompetitor</label>
            <p className="text-apple-gray-500 mb-4">Apa yang mereka tidak lakukan dengan baik? Peluang untuk Anda.</p>
            <textarea
              value={data.competitorWeaknesses || ''}
              onChange={e => update({ competitorWeaknesses: e.target.value })}
              placeholder="Contoh: Tidak ada mobile app, customer support lambat, tidak ada bahasa Indonesia, harga terlalu mahal untuk fitur yang ditawarkan, tidak transparan soal harga..."
              rows={4}
              className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none"
            />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Zap className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Diferensiasi Anda</label>
            <p className="text-apple-gray-500 mb-4">Bagaimana Anda ingin menonjol dibanding mereka?</p>
            <textarea
              value={data.differentiation || ''}
              onChange={e => update({ differentiation: e.target.value })}
              placeholder="Contoh: Kami ingin fokus pada kemudahan penggunaan untuk orang awam, harga lebih terjangkau dengan model freemium, customer support 24/7 dalam bahasa Indonesia, integrasi dengan payment gateway lokal..."
              rows={4}
              className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}