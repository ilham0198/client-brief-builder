'use client'
import { BriefData } from '@/app/brief/page'
import { Server, Zap, Eye, Monitor, Smartphone, Tablet } from 'lucide-react'
import StepHeader from '@/components/StepHeader'
import AppleSelect from '@/components/AppleSelect'

export default function Step13Technical({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number }) {
  const toggleBrowser = (b: string) => {
    const list: string[] = data.browserSupport || []
    update({ browserSupport: list.includes(b) ? list.filter(x => x !== b) : [...list, b] })
  }
  const toggleDevice = (d: string) => {
    const list: string[] = data.deviceSupport || []
    update({ deviceSupport: list.includes(d) ? list.filter(x => x !== d) : [...list, d] })
  }

  const HOSTING_OPTIONS = [
    { value: 'shared', label: 'Shared Hosting (Murah, untuk pemula)' },
    { value: 'vps', label: 'VPS / Cloud (Performa menengah)' },
    { value: 'dedicated', label: 'Dedicated Server (Performa tinggi)' },
    { value: 'managed', label: 'Managed Hosting (Kami yang urus)' },
    { value: 'no-idea', label: 'Tidak tahu, butuh rekomendasi' },
    { value: 'other', label: 'Lainnya' },
  ]

  const ACCESSIBILITY_OPTIONS = [
    { v: 'wcag-a', l: 'WCAG Level A (Minimum)' },
    { v: 'wcag-aa', l: 'WCAG Level AA (Standar)' },
    { v: 'wcag-aaa', l: 'WCAG Level AAA (Tinggi)' },
    { v: 'none', l: 'Tidak ada persyaratan khusus' },
    { v: 'other', l: 'Lainnya' },
  ]

  const hasOtherAccessibility = data.accessibilityNeeds === 'other'

  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Aspek Teknis" description="Infrastruktur, performa, dan kompatibilitas website." />

      <div className="space-y-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xl font-semibold mb-2">Status Domain</label>
            <p className="text-apple-gray-500 mb-4">Apakah Anda sudah punya domain?</p>
            <div className="space-y-3">
              {[{ v: 'owned', l: 'Sudah punya domain' }, { v: 'need-buy', l: 'Belum punya, butuh bantuan beli' }, { v: 'subdomain', l: 'Pakai subdomain dulu' }].map(o => (
                <button key={o.v} type="button" onClick={() => update({ domainStatus: o.v })} className={`w-full p-4 rounded-xl border-2 text-left transition-all ${data.domainStatus === o.v ? 'border-black bg-apple-gray-50' : 'border-apple-gray-200 hover:border-apple-gray-300'}`}>
                  <span className="font-medium">{o.l}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xl font-semibold mb-2 flex items-center gap-2"><Server className="w-6 h-6" /> Preferensi Hosting</label>
            <p className="text-apple-gray-500 mb-4">Di mana website akan di-hosting?</p>
            <AppleSelect 
              value={data.hostingPreference || ''} 
              onChange={(val) => update({ hostingPreference: val })} 
              options={HOSTING_OPTIONS} 
              placeholder="Pilih hosting..." 
            />
            {data.hostingPreference === 'other' && (
              <input value={data.hostingPreferenceOther || ''} onChange={e => update({ hostingPreferenceOther: e.target.value })} placeholder="Sebutkan preferensi hosting Anda..." className="w-full mt-3 px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black" />
            )}
          </div>
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2"><Zap className="w-6 h-6" /> Persyaratan Performa</label>
          <p className="text-apple-gray-500 mb-4">Seberapa cepat website harus dimuat dan berapa traffic yang diantisipasi?</p>
          <textarea value={data.performanceRequirements || ''} onChange={e => update({ performanceRequirements: e.target.value })} placeholder="Contoh: Load time di bawah 2 detik, antisipasi 10.000 visitor per hari..." rows={3} className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none" />
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2"><Eye className="w-6 h-6" /> Accessibility (Aksesibilitas)</label>
          <p className="text-apple-gray-500 mb-4">Apakah website harus memenuhi standar aksesibilitas tertentu?</p>
          <div className="grid md:grid-cols-2 gap-4">
            {ACCESSIBILITY_OPTIONS.map(o => (
              <button key={o.v} type="button" onClick={() => update({ accessibilityNeeds: o.v })} className={`p-5 rounded-xl border-2 text-left transition-all ${data.accessibilityNeeds === o.v ? 'border-black bg-apple-gray-50' : 'border-apple-gray-200 hover:border-apple-gray-300'}`}>
                <div className="font-semibold">{o.l}</div>
              </button>
            ))}
          </div>
          {hasOtherAccessibility && (
            <textarea
              value={data.accessibilityNeedsOther || ''}
              onChange={e => update({ accessibilityNeedsOther: e.target.value })}
              placeholder="Jelaskan persyaratan aksesibilitas Anda..."
              rows={3}
              className="w-full mt-4 px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
            />
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xl font-semibold mb-2">Dukungan Browser</label>
            <p className="text-apple-gray-500 mb-4">Browser apa yang harus didukung?</p>
            <div className="flex flex-wrap gap-3">
              {['Chrome', 'Safari', 'Firefox', 'Edge', 'Opera', 'Browser lama (IE11)', 'Lainnya'].map(b => (
                <button key={b} type="button" onClick={() => toggleBrowser(b)} className={`px-5 py-3 rounded-full font-medium transition-all ${(data.browserSupport || []).includes(b) ? 'bg-black text-white' : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'}`}>{b}</button>
              ))}
            </div>
            {(data.browserSupport || []).includes('Lainnya') && (
              <input value={data.browserSupportOther || ''} onChange={e => update({ browserSupportOther: e.target.value })} placeholder="Sebutkan browser lainnya..." className="w-full mt-3 px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black" />
            )}
          </div>

          <div>
            <label className="block text-xl font-semibold mb-2">Dukungan Perangkat</label>
            <p className="text-apple-gray-500 mb-4">Perangkat apa yang harus dioptimalkan?</p>
            <div className="flex flex-wrap gap-3">
              {[{ id: 'mobile', icon: Smartphone, label: 'Mobile' }, { id: 'tablet', icon: Tablet, label: 'Tablet' }, { id: 'desktop', icon: Monitor, label: 'Desktop' }].map(d => (
                <button key={d.id} type="button" onClick={() => toggleDevice(d.id)} className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${(data.deviceSupport || []).includes(d.id) ? 'bg-black text-white' : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'}`}>
                  <d.icon className="w-4 h-4" /> {d.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}