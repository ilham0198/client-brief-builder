'use client'
import { BriefData, FieldErrors } from '@/app/brief/page'
import { CheckCircle2, MessageSquare } from 'lucide-react'
import StepHeader from '@/components/StepHeader'
import AppleSelect from '@/components/AppleSelect'

export default function Step25Review({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number; fieldErrors?: FieldErrors }) {
  const Section = ({ title, children }: any) => (
    <div className="mb-8 pb-8 border-b border-apple-gray-200 last:border-0">
      <h3 className="text-2xl font-bold text-black mb-4">{title}</h3>
      <div className="space-y-3 text-base">{children}</div>
    </div>
  )
  const Row = ({ label, value }: any) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return null
    return (
      <div className="flex flex-col md:flex-row md:gap-4 py-2">
        <span className="text-apple-gray-500 md:min-w-[200px] font-medium">{label}:</span>
        <span className="text-black">{Array.isArray(value) ? value.join(', ') : String(value)}</span>
      </div>
    )
  }

  const HOW_HEARD_OPTIONS = [
    { value: 'google', label: 'Google Search' },
    { value: 'social', label: 'Social Media' },
    { value: 'referral', label: 'Rekomendasi Teman/Kolega' },
    { value: 'portfolio', label: 'Melihat Portfolio Kami' },
    { value: 'ads', label: 'Iklan Online' },
    { value: 'other', label: 'Lainnya' },
  ]

  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Review & Kirim" description="Periksa kembali data Anda sebelum dikirim ke tim kami." />

      <div className="bg-apple-gray-50 rounded-3xl p-8 md:p-12 mb-10 max-h-[600px] overflow-y-auto">
        <Section title="Profil & Visi">
          <Row label="Perusahaan" value={data.companyName} />
          <Row label="Industri" value={data.industry} />
          <Row label="Visi" value={data.vision} />
        </Section>
        <Section title="Audiens & Kompetitor">
          <Row label="Target Audiens" value={data.targetAudienceDescription} />
          <Row label="Buying Journey" value={data.audienceBuyingJourneySteps} />
          <Row label="Kompetitor" value={data.competitors} />
        </Section>
        <Section title="Proyek & Fitur">
          <Row label="Jenis Website" value={data.websiteType} />
          <Row label="Tujuan Utama" value={data.primaryGoal} />
          <Row label="Fitur Prioritas" value={data.priorityFeatures} />
        </Section>
        <Section title="Desain & Konten">
          <Row label="Style Desain" value={data.designStyle} />
          <Row label="Tone of Voice" value={data.toneOfVoice} />
          <Row label="Emosi Target" value={data.emotionalResponse} />
        </Section>
        <Section title="Teknis & Growth">
          <Row label="Target Launch" value={data.desiredLaunchDate} />
          <Row label="Budget" value={data.budgetRange} />
          <Row label="Skalabilitas" value={data.scalabilityPlans} />
        </Section>
      </div>

      <div className="space-y-8">
        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2">
            <MessageSquare className="w-6 h-6" /> Catatan Tambahan
          </label>
          <textarea value={data.additionalNotes || ''} onChange={e => update({ additionalNotes: e.target.value })}
            placeholder="Ceritakan apa saja yang belum tercakup..."
            rows={4} className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xl font-semibold mb-2">Dari mana Anda tahu tentang kami?</label>
            <AppleSelect 
              value={data.howHeardAboutUs || ''} 
              onChange={(val) => update({ howHeardAboutUs: val })} 
              options={HOW_HEARD_OPTIONS} 
              placeholder="Pilih sumber..." 
            />
            {data.howHeardAboutUs === 'other' && (
              <input value={data.howHeardAboutUsOther || ''} onChange={e => update({ howHeardAboutUsOther: e.target.value })} placeholder="Sebutkan sumber lainnya..." className="w-full mt-3 px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black" />
            )}
          </div>
          <div>
            <label className="block text-xl font-semibold mb-2">Nama Referral (Jika ada)</label>
            <input value={data.referralName || ''} onChange={e => update({ referralName: e.target.value })}
              placeholder="Siapa yang merekomendasikan kami?"
              className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black" />
          </div>
        </div>

        <div className="flex items-center gap-4 p-6 rounded-2xl bg-black text-white">
          <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
          <div>
            <div className="text-xl font-semibold">Siap untuk dikirim?</div>
            <div className="text-white/70 mt-1">Tim kami akan mereview brief ini dan menghubungi Anda dalam 1x24 jam kerja.</div>
          </div>
        </div>
      </div>
    </div>
  )
}