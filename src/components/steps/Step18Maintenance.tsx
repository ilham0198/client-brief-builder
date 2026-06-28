'use client'
import { BriefData, FieldErrors } from '@/app/brief/page'
import { Wrench, GraduationCap, FileText } from 'lucide-react'

export default function Step18Maintenance({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber?: number; totalSteps?: number; fieldErrors?: FieldErrors }) {
  const MAINTENANCE_LEVELS = [
    { id: 'basic', label: 'Basic', desc: 'Update keamanan & backup bulanan' },
    { id: 'standard', label: 'Standard', desc: 'Basic + update konten minor + monitoring' },
    { id: 'premium', label: 'Premium', desc: 'Standard + fitur baru + support prioritas' },
    { id: 'enterprise', label: 'Enterprise', desc: 'Dedicated team + SLA + custom development' },
    { id: 'other', label: 'Lainnya', desc: 'Kebutuhan maintenance custom' },
  ]

  return (
    <div className="fade-in">
      <div className="mb-12">
        <div className="text-sm font-medium text-apple-gray-500 mb-3">Langkah 18 dari 25</div>
        <h2 className="text-5xl font-bold tracking-tight mb-4">Maintenance & Support</h2>
        <p className="text-xl text-apple-gray-500 font-light">Apa yang terjadi setelah website diluncurkan?</p>
      </div>

      <div className="space-y-10">
        <div className="flex items-center gap-4 p-6 rounded-2xl bg-apple-gray-100">
          <input type="checkbox" checked={data.maintenanceNeeded || false} onChange={e => update({ maintenanceNeeded: e.target.checked })} className="w-6 h-6 rounded accent-black" />
          <div><div className="text-xl font-semibold">Butuh Paket Maintenance Bulanan?</div><div className="text-apple-gray-500 mt-1">Kami akan mengupdate, mem-backup, dan menjaga website tetap aman.</div></div>
        </div>

        {data.maintenanceNeeded && (
          <div className="pl-4 border-l-2 border-apple-gray-200">
            <label className="block text-xl font-semibold mb-2 flex items-center gap-2"><Wrench className="w-6 h-6" /> Level Maintenance</label>
            <p className="text-apple-gray-500 mb-6">Pilih paket yang sesuai dengan kebutuhan operasional Anda.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {MAINTENANCE_LEVELS.map(m => (
                <button key={m.id} type="button" onClick={() => update({ maintenanceLevel: m.id })} className={`p-6 rounded-2xl border-2 text-left transition-all ${data.maintenanceLevel === m.id ? 'border-black bg-apple-gray-50' : 'border-apple-gray-200 hover:border-apple-gray-300'}`}>
                  <div className="font-semibold text-lg mb-1">{m.label}</div><div className="text-apple-gray-500 text-sm">{m.desc}</div>
                </button>
              ))}
            </div>
            {data.maintenanceLevel === 'other' && (
              <textarea value={data.maintenanceLevelOther || ''} onChange={e => update({ maintenanceLevelOther: e.target.value })} placeholder="Jelaskan kebutuhan maintenance Anda..." rows={3} className="w-full mt-4 px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-apple-gray-100">
            <GraduationCap className="w-6 h-6 text-apple-gray-500 mt-1" />
            <div className="flex-1">
              <div className="font-semibold text-lg mb-2">Training Tim Internal</div>
              <p className="text-apple-gray-500 text-sm mb-4">Pelatihan cara menggunakan CMS/admin panel.</p>
              <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" checked={data.trainingNeeded || false} onChange={e => update({ trainingNeeded: e.target.checked })} className="w-5 h-5 rounded accent-black" /><span className="font-medium">Ya, kami butuh training</span></label>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-apple-gray-100">
            <FileText className="w-6 h-6 text-apple-gray-500 mt-1" />
            <div className="flex-1">
              <div className="font-semibold text-lg mb-2">Dokumentasi Teknis</div>
              <p className="text-apple-gray-500 text-sm mb-4">Manual book & dokumentasi kode untuk tim IT Anda.</p>
              <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" checked={data.documentationNeeded || false} onChange={e => update({ documentationNeeded: e.target.checked })} className="w-5 h-5 rounded accent-black" /><span className="font-medium">Ya, kami butuh dokumentasi</span></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}