'use client'
import { BriefData } from '@/app/brief/page'
import { Sparkles, Target, Heart, Star } from 'lucide-react'
import StepHeader from '@/components/StepHeader'

export default function Step2VisionMission({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number }) {
  const toggleValue = (value: string) => {
    const list: string[] = data.coreValues || []
    update({ coreValues: list.includes(value) ? list.filter(x => x !== value) : [...list, value] })
  }

  const VALUES = [
    'Inovasi', 'Kualitas', 'Kepercayaan', 'Transparansi', 'Kolaborasi',
    'Keberlanjutan', 'Pelayanan', 'Integritas', 'Keunggulan', 'Kreativitas',
    'Profesionalisme', 'Empati', 'Kecepatan', 'Ketepatan', 'Lainnya'
  ]

  const PERSONALITIES = [
    { id: 'professional', label: 'Profesional', desc: 'Formal, berwibawa, terpercaya' },
    { id: 'friendly', label: 'Friendly', desc: 'Ramah, hangat, mudah didekati' },
    { id: 'playful', label: 'Playful', desc: 'Ceria, menyenangkan, fun' },
    { id: 'sophisticated', label: 'Sophisticated', desc: 'Elegan, mewah, premium' },
    { id: 'bold', label: 'Bold', desc: 'Berani, kuat, menonjol' },
    { id: 'minimal', label: 'Minimal', desc: 'Bersih, simpel, esensial' },
    { id: 'other', label: 'Lainnya', desc: 'Kepribadian custom sesuai brand Anda' },
  ]

  const hasOtherValue = (data.coreValues || []).includes('Lainnya')

  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Visi & Misi" description="Apa yang menggerakkan bisnis Anda dan nilai-nilai yang dipegang." />

      <div className="space-y-10">
        <div className="flex items-start gap-4">
          <Sparkles className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Visi Perusahaan</label>
            <p className="text-apple-gray-500 mb-4">Tujuan jangka panjang atau impian besar bisnis Anda.</p>
            <textarea
              value={data.vision || ''}
              onChange={e => update({ vision: e.target.value })}
              placeholder="Contoh: Menjadi platform e-commerce terdepan di Asia Tenggara yang memberdayakan UMKM..."
              rows={4}
              className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
            />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Target className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Misi Perusahaan</label>
            <p className="text-apple-gray-500 mb-4">Langkah-langkah konkret untuk mencapai visi.</p>
            <textarea
              value={data.mission || ''}
              onChange={e => update({ mission: e.target.value })}
              placeholder="Contoh: Menyediakan solusi teknologi yang mudah digunakan, mendukung pertumbuhan UMKM..."
              rows={4}
              className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
            />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Heart className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Nilai Inti (Core Values)</label>
            <p className="text-apple-gray-500 mb-4">Pilih 3-5 nilai yang paling menggambarkan bisnis Anda.</p>
            <div className="flex flex-wrap gap-3">
              {VALUES.map(v => (
                <button
                  key={v}
                  type="button"
                  onClick={() => toggleValue(v)}
                  className={`px-5 py-3 rounded-full font-medium transition-all ${
                    (data.coreValues || []).includes(v)
                      ? 'bg-black text-white'
                      : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
            {hasOtherValue && (
              <textarea
                value={data.coreValuesOther || ''}
                onChange={e => update({ coreValuesOther: e.target.value })}
                placeholder="Sebutkan nilai inti lainnya..."
                rows={2}
                className="w-full mt-4 px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
              />
            )}
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Star className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Unique Selling Proposition (USP)</label>
            <p className="text-apple-gray-500 mb-4">Apa yang membuat bisnis Anda berbeda dari kompetitor?</p>
            <textarea
              value={data.uniqueSellingProposition || ''}
              onChange={e => update({ uniqueSellingProposition: e.target.value })}
              placeholder="Contoh: Satu-satunya platform yang menggabungkan AI dengan konsultan manusia..."
              rows={3}
              className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2">Kepribadian Brand</label>
          <p className="text-apple-gray-500 mb-4">Bagaimana brand Anda seharusnya dipersepsikan?</p>
          <div className="grid md:grid-cols-2 gap-4">
            {PERSONALITIES.map(p => (
              <button
                key={p.id}
                type="button"
                onClick={() => update({ brandPersonality: p.id })}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${
                  data.brandPersonality === p.id
                    ? 'border-black bg-apple-gray-50'
                    : 'border-apple-gray-200 hover:border-apple-gray-300'
                }`}
              >
                <div className="font-semibold text-lg mb-1">{p.label}</div>
                <div className="text-apple-gray-500 text-sm">{p.desc}</div>
              </button>
            ))}
          </div>
          {data.brandPersonality === 'other' && (
            <textarea
              value={data.brandPersonalityOther || ''}
              onChange={e => update({ brandPersonalityOther: e.target.value })}
              placeholder="Jelaskan kepribadian brand Anda secara detail..."
              rows={3}
              className="w-full mt-4 px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
            />
          )}
        </div>
      </div>
    </div>
  )
}