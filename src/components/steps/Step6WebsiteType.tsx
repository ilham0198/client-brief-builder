'use client'
import { BriefData } from '@/app/brief/page'
import { Globe, ShoppingCart, Rocket, Code, BookOpen, Users, Puzzle, Briefcase } from 'lucide-react'
import StepHeader from '@/components/StepHeader'

export default function Step6WebsiteType({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number }) {
  const TYPES = [
    { id: 'company-profile', icon: Briefcase, label: 'Company Profile', desc: 'Profil perusahaan profesional dengan informasi lengkap' },
    { id: 'ecommerce', icon: ShoppingCart, label: 'E-Commerce', desc: 'Toko online dengan katalog produk dan pembayaran' },
    { id: 'landing-page', icon: Rocket, label: 'Landing Page', desc: 'Halaman promosi fokus untuk konversi tinggi' },
    { id: 'web-app', icon: Code, label: 'Web Application', desc: 'Aplikasi web interaktif dengan fungsionalitas kompleks' },
    { id: 'blog-portal', icon: BookOpen, label: 'Blog / Portal', desc: 'Platform konten dengan artikel dan kategori' },
    { id: 'membership', icon: Users, label: 'Membership Portal', desc: 'Area eksklusif dengan login dan konten terbatas' },
    { id: 'marketplace', icon: Globe, label: 'Marketplace', desc: 'Platform multi-vendor untuk jual beli' },
    { id: 'custom', icon: Puzzle, label: 'Custom / Lainnya', desc: 'Jenis website khusus sesuai kebutuhan unik' },
  ]

  const PURPOSES = [
    'Menjual produk/jasa', 'Mendapatkan leads', 'Brand awareness', 'Edukasi pasar',
    'Customer support', 'Community building', 'Portfolio showcase', 'Event promotion',
    'Recruitment', 'Investor relations', 'Internal tools', 'Data collection', 'Lainnya'
  ]

  const togglePurpose = (p: string) => {
    const list: string[] = data.websitePurpose || []
    update({ websitePurpose: list.includes(p) ? list.filter(x => x !== p) : [...list, p] })
  }

  const hasOtherPurpose = (data.websitePurpose || []).includes('Lainnya')

  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Jenis Website" description="Tentukan jenis website yang paling sesuai dengan kebutuhan bisnis Anda." />

      <div className="space-y-10">
        <div>
          <label className="block text-xl font-semibold mb-2">Pilih Jenis Website</label>
          <p className="text-apple-gray-500 mb-6">Klik salah satu yang paling mendekati kebutuhan Anda.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {TYPES.map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => update({ websiteType: t.id })}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${
                  data.websiteType === t.id
                    ? 'border-black bg-apple-gray-50'
                    : 'border-apple-gray-200 hover:border-apple-gray-300'
                }`}
              >
                <t.icon className={`w-8 h-8 mb-3 ${data.websiteType === t.id ? 'text-black' : 'text-apple-gray-400'}`} />
                <div className="font-semibold text-lg mb-1">{t.label}</div>
                <div className="text-apple-gray-500 text-sm">{t.desc}</div>
              </button>
            ))}
          </div>
          {data.websiteType === 'custom' && (
            <div className="mt-6">
              <label className="block text-sm font-medium text-apple-gray-500 mb-3">Jelaskan jenis website custom Anda</label>
              <textarea
                value={data.websiteTypeOther || ''}
                onChange={e => update({ websiteTypeOther: e.target.value })}
                placeholder="Ceritakan detail jenis website yang Anda inginkan..."
                rows={3}
                className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2">Tujuan Website (Pilih beberapa)</label>
          <p className="text-apple-gray-500 mb-4">Apa fungsi utama website ini?</p>
          <div className="flex flex-wrap gap-3">
            {PURPOSES.map(p => (
              <button
                key={p}
                type="button"
                onClick={() => togglePurpose(p)}
                className={`px-5 py-3 rounded-full font-medium transition-all ${
                  (data.websitePurpose || []).includes(p)
                    ? 'bg-black text-white'
                    : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          {hasOtherPurpose && (
            <textarea
              value={data.websitePurposeOther || ''}
              onChange={e => update({ websitePurposeOther: e.target.value })}
              placeholder="Sebutkan tujuan website lainnya..."
              rows={2}
              className="w-full mt-4 px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
            />
          )}
        </div>
      </div>
    </div>
  )
}