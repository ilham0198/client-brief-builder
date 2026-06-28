'use client'
import { BriefData, FieldErrors } from '@/app/brief/page'
import { Layers, MousePointerClick, Route, Heart, Quote } from 'lucide-react'
import StepHeader from '@/components/StepHeader'

export default function Step21ContentUX({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number; fieldErrors?: FieldErrors }) {
  const toggleEmotion = (e: string) => {
    const list: string[] = data.emotionalResponse || []
    update({ emotionalResponse: list.includes(e) ? list.filter(x => x !== e) : [...list, e] })
  }

  const EMOTIONS = [
    'Terpercaya', 'Excited/Antusias', 'Tenang/Calm', 'Terinspirasi',
    'Merasa Premium', 'Aman', 'Termotivasi', 'Berpengalaman Modern', 'Lainnya'
  ]

  const hasOtherEmotion = (data.emotionalResponse || []).includes('Lainnya')

  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Konten & User Experience" description="Strategi konten, alur pengguna, dan emosi yang ingin dibangun." />

      <div className="space-y-10">
        <div className="flex items-start gap-4">
          <Layers className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Content Hierarchy (Prioritas Homepage)</label>
            <p className="text-apple-gray-500 mb-4">Apa yang paling penting dilihat pengunjung saat pertama kali mendarat di homepage?</p>
            <textarea value={data.contentHierarchy || ''} onChange={e => update({ contentHierarchy: e.target.value })}
              placeholder="Contoh: 1. Hero section dengan value proposition utama, 2. Social proof (logo klien)..."
              rows={3} className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none" />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MousePointerClick className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Call-to-Action (CTA) Strategy</label>
            <p className="text-apple-gray-500 mb-4">Apa action utama yang Anda inginkan dari pengunjung?</p>
            <textarea value={data.ctaStrategy || ''} onChange={e => update({ ctaStrategy: e.target.value })}
              placeholder="Contoh: CTA utama 'Jadwalkan Demo', CTA sekunder 'Download Brosur'..."
              rows={3} className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none" />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Route className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">User Flow / Customer Journey</label>
            <p className="text-apple-gray-500 mb-4">Bagaimana alur ideal pengunjung dari masuk sampai konversi?</p>
            <textarea value={data.userFlow || ''} onChange={e => update({ userFlow: e.target.value })}
              placeholder="Contoh: Landing di blog → Baca artikel → Klik CTA → Lihat Pricing → Daftar Trial..."
              rows={3} className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none" />
          </div>
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2">
            <Heart className="w-6 h-6" /> Emotional Response
          </label>
          <p className="text-apple-gray-500 mb-4">Emosi apa yang harus dirasakan pengunjung saat menggunakan website?</p>
          <div className="flex flex-wrap gap-3">
            {EMOTIONS.map(e => (
              <button key={e} type="button" onClick={() => toggleEmotion(e)}
                className={`px-5 py-3 rounded-full font-medium transition-all ${(data.emotionalResponse || []).includes(e) ? 'bg-black text-white' : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'}`}>
                {e}
              </button>
            ))}
          </div>
          {hasOtherEmotion && (
            <textarea
              value={data.emotionalResponseOther || ''}
              onChange={e => update({ emotionalResponseOther: e.target.value })}
              placeholder="Sebutkan emosi lainnya..."
              rows={2}
              className="w-full mt-4 px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
            />
          )}
        </div>

        <div className="flex items-start gap-4">
          <Quote className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Success Stories & Testimoni</label>
            <p className="text-apple-gray-500 mb-4">Apakah Anda punya studi kasus atau testimoni yang ingin ditampilkan?</p>
            <textarea value={data.successStories || ''} onChange={e => update({ successStories: e.target.value })}
              placeholder="Contoh: Kami punya 3 video testimoni dari klien enterprise..."
              rows={3} className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none" />
          </div>
        </div>
      </div>
    </div>
  )
}