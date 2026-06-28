'use client'
import { BriefData, FieldErrors } from '@/app/brief/page'
import { FileText, Mic } from 'lucide-react'
import StepHeader from '@/components/StepHeader'

export default function Step11ContentCopy({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number; fieldErrors?: FieldErrors }) {
  const TONES = [
    { id: 'professional', label: 'Profesional', desc: 'Formal, berwibawa, terpercaya' },
    { id: 'friendly', label: 'Friendly', desc: 'Santai, ramah, seperti teman' },
    { id: 'authoritative', label: 'Authoritative', desc: 'Ahli, meyakinkan, edukatif' },
    { id: 'playful', label: 'Playful', desc: 'Humoris, ceria, menyenangkan' },
    { id: 'luxury', label: 'Luxury', desc: 'Eksklusif, elegan, premium' },
    { id: 'inspirational', label: 'Inspirational', desc: 'Memotivasi, membangkitkan emosi' },
    { id: 'other', label: 'Lainnya', desc: 'Tone custom sesuai brand Anda' },
  ]

  const CONTENT_TYPES = ['Artikel blog', 'Halaman landing', 'Deskripsi produk', 'Profil perusahaan', 'FAQ', 'Testimoni', 'Studi kasus', 'Whitepaper / E-book', 'Newsletter', 'Social media copy', 'Video script', 'Podcast script', 'Lainnya']
  const MULTIMEDIA = ['Ilustrasi custom', 'Ikon custom', 'Animasi 2D', 'Animasi 3D', 'Infografis', 'Stock photo', 'Stock video', 'Audio/Musik', 'Lainnya']

  const toggleContentType = (c: string) => {
    const list: string[] = data.contentTypes || []
    update({ contentTypes: list.includes(c) ? list.filter(x => x !== c) : [...list, c] })
  }
  const toggleMultimedia = (m: string) => {
    const list: string[] = data.multimediaNeeds || []
    update({ multimediaNeeds: list.includes(m) ? list.filter(x => x !== m) : [...list, m] })
  }

  const hasOtherContent = (data.contentTypes || []).includes('Lainnya')
  const hasOtherMultimedia = (data.multimediaNeeds || []).includes('Lainnya')

  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Konten & Copywriting" description="Bagaimana suara brand Anda dan apa yang perlu disiapkan?" />

      <div className="space-y-10">
        <div>
          <label className="block text-xl font-semibold mb-2">Kesiapan Konten</label>
          <p className="text-apple-gray-500 mb-4">Seberapa siap materi konten Anda saat ini?</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[{ v: 'ready', l: 'Sudah Siap Semua', d: 'Teks, gambar, dan video sudah ada' }, { v: 'partial', l: 'Sebagian Siap', d: 'Ada beberapa, butuh tambahan' }, { v: 'need-help', l: 'Butuh Bantuan Penuh', d: 'Belum ada, butuh dibuatkan' }].map(o => (
              <button key={o.v} type="button" onClick={() => update({ contentReady: o.v })} className={`p-6 rounded-2xl border-2 text-left transition-all ${data.contentReady === o.v ? 'border-black bg-apple-gray-50' : 'border-apple-gray-200 hover:border-apple-gray-300'}`}>
                <div className="font-semibold text-lg mb-1">{o.l}</div><div className="text-apple-gray-500 text-sm">{o.d}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2"><Mic className="w-6 h-6" /> Tone of Voice</label>
          <p className="text-apple-gray-500 mb-4">Bagaimana cara brand Anda "berbicara"?</p>
          <div className="grid md:grid-cols-2 gap-4">
            {TONES.map(t => (
              <button key={t.id} type="button" onClick={() => update({ toneOfVoice: t.id })} className={`p-6 rounded-2xl border-2 text-left transition-all ${data.toneOfVoice === t.id ? 'border-black bg-apple-gray-50' : 'border-apple-gray-200 hover:border-apple-gray-300'}`}>
                <div className="font-semibold text-lg mb-1">{t.label}</div><div className="text-apple-gray-500 text-sm">{t.desc}</div>
              </button>
            ))}
          </div>
          {data.toneOfVoice === 'other' && (
            <textarea value={data.toneOfVoiceOther || ''} onChange={e => update({ toneOfVoiceOther: e.target.value })} placeholder="Jelaskan tone of voice brand Anda..." rows={3} className="w-full mt-4 px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
          )}
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2"><FileText className="w-6 h-6" /> Jenis Konten yang Dibutuhkan</label>
          <p className="text-apple-gray-500 mb-4">Pilih semua jenis konten yang akan ada di website.</p>
          <div className="flex flex-wrap gap-3">
            {CONTENT_TYPES.map(c => (
              <button key={c} type="button" onClick={() => toggleContentType(c)} className={`px-5 py-3 rounded-full font-medium transition-all ${(data.contentTypes || []).includes(c) ? 'bg-black text-white' : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'}`}>{c}</button>
            ))}
          </div>
          {hasOtherContent && (
            <textarea value={data.contentTypesOther || ''} onChange={e => update({ contentTypesOther: e.target.value })} placeholder="Sebutkan jenis konten lainnya..." rows={2} className="w-full mt-4 px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
          )}
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2">Kebutuhan Multimedia Lainnya</label>
          <p className="text-apple-gray-500 mb-4">Aset visual apa saja yang dibutuhkan?</p>
          <div className="flex flex-wrap gap-3">
            {MULTIMEDIA.map(m => (
              <button key={m} type="button" onClick={() => toggleMultimedia(m)} className={`px-5 py-3 rounded-full font-medium transition-all ${(data.multimediaNeeds || []).includes(m) ? 'bg-black text-white' : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'}`}>{m}</button>
            ))}
          </div>
          {hasOtherMultimedia && (
            <textarea value={data.multimediaNeedsOther || ''} onChange={e => update({ multimediaNeedsOther: e.target.value })} placeholder="Sebutkan kebutuhan multimedia lainnya..." rows={2} className="w-full mt-4 px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
          )}
        </div>
      </div>
    </div>
  )
}