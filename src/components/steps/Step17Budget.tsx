'use client'
import { BriefData } from '@/app/brief/page'
import { DollarSign, CreditCard } from 'lucide-react'
import StepHeader from '@/components/StepHeader'

export default function Step17Budget({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number }) {
  const BUDGET_RANGES = [
    { id: '<1jt', label: '< Rp 1 Juta', desc: 'Landing page template / Sangat sederhana' },
    { id: '1-3jt', label: 'Rp 1 - 3 Juta', desc: 'Website UMKM basic' },
    { id: '3-7jt', label: 'Rp 3 - 7 Juta', desc: 'Company profile standar' },
    { id: '7-15jt', label: 'Rp 7 - 15 Juta', desc: 'Website bisnis menengah' },
    { id: '15-30jt', label: 'Rp 15 - 30 Juta', desc: 'E-commerce / Web app custom' },
    { id: '30-50jt', label: 'Rp 30 - 50 Juta', desc: 'Platform kompleks' },
    { id: '>50jt', label: '> Rp 50 Juta', desc: 'Enterprise / Custom besar' },
    { id: 'undisclosed', label: 'Diskusikan Nanti', desc: 'Saya ingin diskusi budget setelah konsultasi' },
  ]

  const PAYMENT_TERMS = [
    { id: '50-50', label: '50% DP - 50% Selesai', desc: 'Standar industri' },
    { id: '40-30-30', label: '40% - 30% - 30%', desc: 'Bertahap per milestone' },
    { id: 'milestone', label: 'Berbasis Milestone', desc: 'Bayar sesuai progress yang disepakati' },
    { id: 'monthly', label: 'Bulanan / Retainer', desc: 'Cocok untuk maintenance jangka panjang' },
    { id: 'other', label: 'Lainnya', desc: 'Skema pembayaran custom' },
  ]

  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Budget" description="Investasi yang Anda siapkan untuk proyek ini." />

      <div className="space-y-10">
        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2"><DollarSign className="w-6 h-6" /> Rentang Budget</label>
          <p className="text-apple-gray-500 mb-6">Pilih range yang paling sesuai dengan alokasi Anda.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {BUDGET_RANGES.map(b => (
              <button key={b.id} type="button" onClick={() => update({ budgetRange: b.id })}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${data.budgetRange === b.id ? 'border-black bg-apple-gray-50' : 'border-apple-gray-200 hover:border-apple-gray-300'}`}>
                <div className="font-semibold text-lg mb-1">{b.label}</div><div className="text-apple-gray-500 text-sm">{b.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 p-6 rounded-2xl bg-apple-gray-100">
          <input type="checkbox" checked={data.budgetFlexible || false} onChange={e => update({ budgetFlexible: e.target.checked })} className="w-6 h-6 rounded accent-black" />
          <div><div className="text-xl font-semibold">Budget Fleksibel</div><div className="text-apple-gray-500 mt-1">Angka di atas bisa dinegosiasikan jika scope proyek bertambah.</div></div>
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2"><CreditCard className="w-6 h-6" /> Skema Pembayaran</label>
          <p className="text-apple-gray-500 mb-6">Bagaimana Anda lebih nyaman melakukan pembayaran?</p>
          <div className="grid md:grid-cols-2 gap-4">
            {PAYMENT_TERMS.map(p => (
              <button key={p.id} type="button" onClick={() => update({ paymentTerms: p.id })}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${data.paymentTerms === p.id ? 'border-black bg-apple-gray-50' : 'border-apple-gray-200 hover:border-apple-gray-300'}`}>
                <div className="font-semibold text-lg mb-1">{p.label}</div><div className="text-apple-gray-500 text-sm">{p.desc}</div>
              </button>
            ))}
          </div>
          {data.paymentTerms === 'other' && (
            <textarea value={data.paymentTermsOther || ''} onChange={e => update({ paymentTermsOther: e.target.value })}
              placeholder="Jelaskan skema pembayaran yang Anda inginkan..." rows={3}
              className="w-full mt-4 px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
          )}
        </div>
      </div>
    </div>
  )
}