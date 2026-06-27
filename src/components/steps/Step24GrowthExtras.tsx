'use client'
import { BriefData } from '@/app/brief/page'
import { TrendingUp, FlaskConical, Printer, Handshake, Bell, Rocket } from 'lucide-react'

export default function Step24GrowthExtras({ data, update }: { data: BriefData; update: (p: any) => void }) {
  const toggleNotif = (n: string) => {
    const list: string[] = data.notificationPrefs || []
    update({ notificationPrefs: list.includes(n) ? list.filter(x => x !== n) : [...list, n] })
  }

  return (
    <div className="fade-in">
      <div className="mb-12">
        <div className="text-sm font-medium text-apple-gray-500 mb-3">Langkah 24 dari 25</div>
        <h2 className="text-5xl font-bold tracking-tight mb-4">Growth, Skalabilitas & Extras</h2>
        <p className="text-xl text-apple-gray-500 font-light">Rencana masa depan dan hal-hal tambahan.</p>
      </div>

      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-semibold mb-2 flex items-center gap-2"><TrendingUp className="w-5 h-5" /> Future Roadmap</label>
            <p className="text-apple-gray-500 text-sm mb-2">Rencana fitur fase 2 & 3 setelah launch.</p>
            <textarea value={data.futureRoadmap || ''} onChange={e => update({ futureRoadmap: e.target.value })}
              placeholder="Contoh: Fase 2 (Bulan 3): Mobile App. Fase 3 (Bulan 6): AI Recommendation..."
              rows={3} className="w-full px-4 py-3 rounded-xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2 flex items-center gap-2"><Rocket className="w-5 h-5" /> Scalability Plans</label>
            <p className="text-apple-gray-500 text-sm mb-2">Proyeksi growth 1-3 tahun ke depan.</p>
            <textarea value={data.scalabilityPlans || ''} onChange={e => update({ scalabilityPlans: e.target.value })}
              placeholder="Contoh: Target 100k user di tahun 1, ekspansi ke 3 negara ASEAN di tahun 2..."
              rows={3} className="w-full px-4 py-3 rounded-xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-semibold mb-2 flex items-center gap-2"><FlaskConical className="w-5 h-5" /> A/B Testing Needs</label>
            <p className="text-apple-gray-500 text-sm mb-2">Perlu setup untuk testing variasi?</p>
            <textarea value={data.abTesting || ''} onChange={e => update({ abTesting: e.target.value })}
              placeholder="Contoh: Perlu integrasi Google Optimize untuk A/B test landing page..."
              rows={3} className="w-full px-4 py-3 rounded-xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2 flex items-center gap-2"><Printer className="w-5 h-5" /> Print Materials Consistency</label>
            <p className="text-apple-gray-500 text-sm mb-2">Brosur, kartu nama, packaging yang harus match.</p>
            <textarea value={data.printConsistency || ''} onChange={e => update({ printConsistency: e.target.value })}
              placeholder="Contoh: Warna website harus match dengan packaging produk (Pantone 2945 C)..."
              rows={3} className="w-full px-4 py-3 rounded-xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
          </div>
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2 flex items-center gap-2"><Handshake className="w-5 h-5" /> Partnership / Sponsorship</label>
          <p className="text-apple-gray-500 text-sm mb-4">Kolaborasi dengan brand lain atau program afiliasi?</p>
          <textarea value={data.partnership || ''} onChange={e => update({ partnership: e.target.value })}
            placeholder="Contoh: Ada halaman khusus untuk mitra, sistem afiliasi dengan tracking link..."
            rows={3} className="w-full px-4 py-3 rounded-xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2 flex items-center gap-2"><Bell className="w-5 h-5" /> Notification Preferences (Untuk User)</label>
          <p className="text-apple-gray-500 text-sm mb-4">Jenis notifikasi apa yang akan diterima user?</p>
          <div className="flex flex-wrap gap-3">
            {['Email Transaksional', 'Email Marketing', 'SMS OTP/Alert', 'Push Notification Browser', 'Push Notification Mobile', 'WhatsApp Bot'].map(n => (
              <button key={n} type="button" onClick={() => toggleNotif(n)}
                className={`px-5 py-3 rounded-full font-medium transition-all ${(data.notificationPrefs || []).includes(n) ? 'bg-black text-white' : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'}`}>
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}