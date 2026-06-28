'use client'
import { BriefData, FieldErrors } from '@/app/brief/page'
import { Trophy, Target, TrendingUp, Calendar } from 'lucide-react'
import StepHeader from '@/components/StepHeader'

export default function Step5GoalsKPI({ data, update, stepNumber, totalSteps, fieldErrors = {} }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number; fieldErrors?: FieldErrors }) {
  const PRIMARY_GOALS = [
    { id: 'leads', label: 'Generate Leads', desc: 'Mendapatkan kontak calon klien' },
    { id: 'sales', label: 'Penjualan Online', desc: 'Transaksi langsung dari website' },
    { id: 'awareness', label: 'Brand Awareness', desc: 'Meningkatkan visibilitas brand' },
    { id: 'info', label: 'Informasi Produk', desc: 'Edukasi pengunjung tentang produk/jasa' },
    { id: 'community', label: 'Bangun Komunitas', desc: 'Wadah interaksi pengguna' },
    { id: 'credibility', label: 'Kredibilitas', desc: 'Membangun kepercayaan pasar' },
    { id: 'support', label: 'Customer Support', desc: 'Layanan pelanggan online' },
    { id: 'automation', label: 'Automasi Proses', desc: 'Mempercepat operasional bisnis' },
    { id: 'other', label: 'Lainnya', desc: 'Tujuan custom sesuai bisnis Anda' },
  ]

  const SECONDARY_GOALS = [
    'Pendidikan pasar', 'Rekrutmen talenta', 'Menarik investor', 'Partnership',
    'Event registration', 'Newsletter subscription', 'Booking / reservasi', 'Donasi / crowdfunding', 'Lainnya'
  ]

  const toggleSecondary = (g: string) => {
    const list: string[] = data.secondaryGoals || []
    update({ secondaryGoals: list.includes(g) ? list.filter(x => x !== g) : [...list, g] })
  }

  const toggleKPI = (k: string) => {
    const list: string[] = data.kpis || []
    update({ kpis: list.includes(k) ? list.filter(x => x !== k) : [...list, k] })
  }

  const KPIS = [
    'Traffic bulanan', 'Conversion rate', 'Bounce rate', 'Time on site',
    'Jumlah leads per bulan', 'Revenue online', 'Email subscribers', 'Social shares',
    'Customer satisfaction (CSAT)', 'Net Promoter Score (NPS)', 'Retention rate',
    'Average order value', 'Cart abandonment rate', 'SEO ranking', 'Lainnya'
  ]

  const hasOtherSecondary = (data.secondaryGoals || []).includes('Lainnya')
  const hasOtherKPI = (data.kpis || []).includes('Lainnya')

  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Tujuan & KPI" description="Apa yang ingin dicapai website ini dan bagaimana mengukur keberhasilannya?" />

      <div className="space-y-10">
        <div className="flex items-start gap-4">
          <Trophy className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Tujuan Utama (Pilih 1)</label>
            <p className="text-apple-gray-500 mb-4">Apa fokus utama website ini?</p>
            <div className="grid md:grid-cols-2 gap-4">
              {PRIMARY_GOALS.map(g => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => update({ primaryGoal: g.id })}
                  className={`p-6 rounded-2xl border-2 text-left transition-all ${
                    data.primaryGoal === g.id
                      ? 'border-black bg-apple-gray-50'
                      : fieldErrors.primaryGoal
                      ? 'border-red-300 hover:border-red-400'
                      : 'border-apple-gray-200 hover:border-apple-gray-300'
                  }`}
                >
                  <div className="font-semibold text-lg mb-1">{g.label}</div>
                  <div className="text-apple-gray-500 text-sm">{g.desc}</div>
                </button>
              ))}
            </div>
            {fieldErrors.primaryGoal && (
              <p className="mt-3 text-sm text-red-600">{fieldErrors.primaryGoal}</p>
            )}
            {data.primaryGoal === 'other' && (
              <textarea
                value={data.primaryGoalOther || ''}
                onChange={e => update({ primaryGoalOther: e.target.value })}
                placeholder="Jelaskan tujuan utama website Anda..."
                rows={3}
                className="w-full mt-4 px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none"
              />
            )}
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Target className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">
              Tujuan Sekunder <span className="text-base font-normal text-apple-gray-400">(opsional)</span>
            </label>
            <p className="text-apple-gray-500 mb-4">Tujuan pendukung lainnya.</p>
            <div className="flex flex-wrap gap-3">
              {SECONDARY_GOALS.map(g => (
                <button key={g} type="button" onClick={() => toggleSecondary(g)}
                  className={`px-5 py-3 rounded-full font-medium transition-all ${(data.secondaryGoals || []).includes(g) ? 'bg-black text-white' : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'}`}>
                  {g}
                </button>
              ))}
            </div>
            {hasOtherSecondary && (
              <textarea value={data.secondaryGoalsOther || ''} onChange={e => update({ secondaryGoalsOther: e.target.value })}
                placeholder="Sebutkan tujuan sekunder lainnya..." rows={2}
                className="w-full mt-4 px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
            )}
          </div>
        </div>

        <div className="flex items-start gap-4">
          <TrendingUp className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">
              KPI <span className="text-base font-normal text-apple-gray-400">(opsional)</span>
            </label>
            <p className="text-apple-gray-500 mb-4">Metrik apa yang akan Anda pantau untuk mengukur kesuksesan?</p>
            <div className="flex flex-wrap gap-3">
              {KPIS.map(k => (
                <button key={k} type="button" onClick={() => toggleKPI(k)}
                  className={`px-5 py-3 rounded-full font-medium transition-all ${(data.kpis || []).includes(k) ? 'bg-black text-white' : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'}`}>
                  {k}
                </button>
              ))}
            </div>
            {hasOtherKPI && (
              <textarea value={data.kpisOther || ''} onChange={e => update({ kpisOther: e.target.value })}
                placeholder="Sebutkan KPI lainnya..." rows={2}
                className="w-full mt-4 px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
            )}
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Target className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">
              Target Angka Spesifik <span className="text-base font-normal text-apple-gray-400">(opsional)</span>
            </label>
            <p className="text-apple-gray-500 mb-4">Berapa target konkret yang ingin dicapai?</p>
            <textarea value={data.successMetrics || ''} onChange={e => update({ successMetrics: e.target.value })}
              placeholder="Contoh: 10.000 visitor/bulan dalam 6 bulan pertama, 5% conversion rate..." rows={3}
              className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Calendar className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">
              Timeline untuk Goal <span className="text-base font-normal text-apple-gray-400">(opsional)</span>
            </label>
            <p className="text-apple-gray-500 mb-4">Kapan Anda ingin mulai melihat hasil?</p>
            <input value={data.timelineGoal || ''} onChange={e => update({ timelineGoal: e.target.value })}
              placeholder="Contoh: Dalam 3 bulan setelah launch, dalam 6 bulan, atau target tahunan?"
              className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all" />
          </div>
        </div>
      </div>
    </div>
  )
}