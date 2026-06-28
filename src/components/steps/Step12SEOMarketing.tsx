'use client'
import { BriefData, FieldErrors } from '@/app/brief/page'
import { Search, BarChart3, Mail, Share2 } from 'lucide-react'
import StepHeader from '@/components/StepHeader'
import LiquidGlassSelect from '@/components/LiquidGlassSelect'

export default function Step12SEOMarketing({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number; fieldErrors?: FieldErrors }) {
  const toggleKeyword = (k: string) => {
    const list: string[] = data.targetKeywords || []
    update({ targetKeywords: list.includes(k) ? list.filter(x => x !== k) : [...list, k] })
  }
  const toggleSocial = (s: string) => {
    const list: string[] = data.socialMediaIntegration || []
    update({ socialMediaIntegration: list.includes(s) ? list.filter(x => x !== s) : [...list, s] })
  }
  const toggleAnalytics = (a: string) => {
    const list: string[] = data.analyticsNeeded || []
    update({ analyticsNeeded: list.includes(a) ? list.filter(x => x !== a) : [...list, a] })
  }

  const SOCIALS = ['Instagram', 'Facebook', 'TikTok', 'Twitter/X', 'LinkedIn', 'YouTube', 'WhatsApp', 'Telegram', 'Lainnya']
  const ANALYTICS = ['Google Analytics 4', 'Google Search Console', 'Meta Pixel', 'TikTok Pixel', 'Hotjar', 'Mixpanel', 'HubSpot', 'Custom Dashboard', 'Lainnya']

  const hasOtherSocial = (data.socialMediaIntegration || []).includes('Lainnya')
  const hasOtherAnalytics = (data.analyticsNeeded || []).includes('Lainnya')

  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="SEO & Marketing" description="Bagaimana website ini akan ditemukan dan dipasarkan?" />

      <div className="space-y-10">
        <div className="flex items-center gap-4 p-6 rounded-2xl bg-apple-gray-100">
          <input type="checkbox" checked={data.seoNeeded || false} onChange={e => update({ seoNeeded: e.target.checked })} className="w-6 h-6 rounded accent-black" />
          <div><div className="text-xl font-semibold">Butuh Optimasi SEO?</div><div className="text-apple-gray-500 mt-1">On-page SEO, technical SEO, dan setup awal untuk ranking di Google.</div></div>
        </div>

        {data.seoNeeded && (
          <div className="pl-4 border-l-2 border-apple-gray-200">
            <label className="block text-xl font-semibold mb-2 flex items-center gap-2"><Search className="w-6 h-6" /> Target Keywords</label>
            <p className="text-apple-gray-500 mb-4">Kata kunci apa yang ingin Anda rank di Google?</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {['Jasa web developer', 'Toko online murah', 'Aplikasi manajemen', 'Konsultasi bisnis', 'Produk organik'].map(k => (
                <button key={k} type="button" onClick={() => toggleKeyword(k)} className={`px-5 py-3 rounded-full font-medium transition-all ${(data.targetKeywords || []).includes(k) ? 'bg-black text-white' : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'}`}>{k}</button>
              ))}
            </div>
            <input value={(data.customKeywords || '')} onChange={e => update({ customKeywords: e.target.value })} placeholder="Tambahkan keyword custom..." className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all" />
          </div>
        )}

        <div className="flex items-center gap-4 p-6 rounded-2xl bg-apple-gray-100">
          <input type="checkbox" checked={data.contentMarketing || false} onChange={e => update({ contentMarketing: e.target.checked })} className="w-6 h-6 rounded accent-black" />
          <div><div className="text-xl font-semibold">Content Marketing</div><div className="text-apple-gray-500 mt-1">Strategi blog, artikel, atau video untuk menarik traffic organik.</div></div>
        </div>

        <div className="flex items-center gap-4 p-6 rounded-2xl bg-apple-gray-100">
          <input type="checkbox" checked={data.emailMarketing || false} onChange={e => update({ emailMarketing: e.target.checked })} className="w-6 h-6 rounded accent-black" />
          <div><div className="text-xl font-semibold flex items-center gap-2"><Mail className="w-5 h-5" /> Email Marketing</div><div className="text-apple-gray-500 mt-1">Newsletter, automated emails, atau drip campaigns.</div></div>
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2"><Share2 className="w-6 h-6" /> Integrasi Social Media</label>
          <p className="text-apple-gray-500 mb-4">Platform mana yang akan diintegrasikan?</p>
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map(s => (
              <button key={s} type="button" onClick={() => toggleSocial(s)} className={`px-5 py-3 rounded-full font-medium transition-all ${(data.socialMediaIntegration || []).includes(s) ? 'bg-black text-white' : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'}`}>{s}</button>
            ))}
          </div>
          {hasOtherSocial && (
            <input value={data.socialMediaOther || ''} onChange={e => update({ socialMediaOther: e.target.value })} placeholder="Sebutkan platform social media lainnya..." className="w-full mt-4 px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all" />
          )}
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2"><BarChart3 className="w-6 h-6" /> Tools Analytics</label>
          <p className="text-apple-gray-500 mb-4">Tools apa yang ingin digunakan untuk tracking?</p>
          <div className="flex flex-wrap gap-3">
            {ANALYTICS.map(a => (
              <button key={a} type="button" onClick={() => toggleAnalytics(a)} className={`px-5 py-3 rounded-full font-medium transition-all ${(data.analyticsNeeded || []).includes(a) ? 'bg-black text-white' : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'}`}>{a}</button>
            ))}
          </div>
          {hasOtherAnalytics && (
            <input value={data.analyticsOther || ''} onChange={e => update({ analyticsOther: e.target.value })} placeholder="Sebutkan tools analytics lainnya..." className="w-full mt-4 px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all" />
          )}
        </div>
      </div>
    </div>
  )
}