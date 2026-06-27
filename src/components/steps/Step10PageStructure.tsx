'use client'
import { BriefData } from '@/app/brief/page'
import { Layout, Menu } from 'lucide-react'
import StepHeader from '@/components/StepHeader'
import AppleSelect from '@/components/AppleSelect'

export default function Step10PageStructure({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number }) {
  const togglePage = (p: string) => {
    const list: string[] = data.pages || []
    update({ pages: list.includes(p) ? list.filter(x => x !== p) : [...list, p] })
  }

  const PAGES = [
    'Home', 'About Us', 'Services', 'Products', 'Portfolio', 'Blog', 'Contact',
    'Pricing', 'FAQ', 'Team', 'Testimonials', 'Careers', 'Press/Media',
    'Events', 'Gallery', 'Downloads', 'Partners', 'Case Studies',
    'Login', 'Register', 'Dashboard', 'Profile', 'Settings', 'Checkout',
    'Cart', 'Order History', 'Wishlist', 'Search Results', '404 Error', 'Lainnya'
  ]

  const NAV_STRUCTURES = [
    { id: 'simple', label: 'Simple Top Navigation', desc: 'Menu horizontal di atas, 5-7 item utama' },
    { id: 'mega', label: 'Mega Menu', desc: 'Dropdown besar dengan kategori & sub-kategori' },
    { id: 'sidebar', label: 'Sidebar Navigation', desc: 'Menu vertikal di samping (cocok untuk dashboard)' },
    { id: 'hamburger', label: 'Hamburger Menu', desc: 'Menu tersembunyi, klik untuk expand (mobile-first)' },
    { id: 'sticky', label: 'Sticky Header', desc: 'Header tetap terlihat saat scroll' },
    { id: 'minimal', label: 'Minimal Navigation', desc: 'Sangat simpel, hanya logo & menu utama' },
    { id: 'other', label: 'Lainnya', desc: 'Struktur navigasi custom' },
  ]

  const hasOtherPage = (data.pages || []).includes('Lainnya')

  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Struktur Halaman" description="Halaman apa saja yang dibutuhkan dan bagaimana navigasinya?" />

      <div className="space-y-10">
        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2">
            <Layout className="w-6 h-6" /> Halaman Website
          </label>
          <p className="text-apple-gray-500 mb-6">Pilih semua halaman yang Anda butuhkan.</p>
          <div className="flex flex-wrap gap-3">
            {PAGES.map(p => (
              <button
                key={p}
                type="button"
                onClick={() => togglePage(p)}
                className={`px-5 py-3 rounded-full font-medium transition-all ${
                  (data.pages || []).includes(p)
                    ? 'bg-black text-white'
                    : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          {hasOtherPage && (
            <textarea
              value={data.customPages || ''}
              onChange={e => update({ customPages: e.target.value })}
              placeholder="Sebutkan halaman lainnya..."
              rows={2}
              className="w-full mt-4 px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
            />
          )}
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2">Halaman Custom Lainnya</label>
          <p className="text-apple-gray-500 mb-4">Sebutkan halaman lain yang tidak ada di daftar (pisahkan dengan koma).</p>
          <input
            value={data.customPages || ''}
            onChange={e => update({ customPages: e.target.value })}
            placeholder="Contoh: Booking, Kalkulator, Komunitas, Forum"
            className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black"
          />
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2">
            <Menu className="w-6 h-6" /> Struktur Navigasi
          </label>
          <p className="text-apple-gray-500 mb-6">Bagaimana menu navigasi website Anda?</p>
          <div className="grid md:grid-cols-2 gap-4">
            {NAV_STRUCTURES.map(n => (
              <button
                key={n.id}
                type="button"
                onClick={() => update({ navigationStructure: n.id })}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${
                  data.navigationStructure === n.id
                    ? 'border-black bg-apple-gray-50'
                    : 'border-apple-gray-200 hover:border-apple-gray-300'
                }`}
              >
                <div className="font-semibold text-lg mb-1">{n.label}</div>
                <div className="text-apple-gray-500 text-sm">{n.desc}</div>
              </button>
            ))}
          </div>
          {data.navigationStructure === 'other' && (
            <textarea
              value={data.navigationStructureOther || ''}
              onChange={e => update({ navigationStructureOther: e.target.value })}
              placeholder="Jelaskan struktur navigasi yang Anda inginkan..."
              rows={3}
              className="w-full mt-4 px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
            />
          )}
        </div>
      </div>
    </div>
  )
}