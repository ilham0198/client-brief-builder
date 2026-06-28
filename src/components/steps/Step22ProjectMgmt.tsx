'use client'
import { BriefData, FieldErrors } from '@/app/brief/page'
import { FolderCheck, AlertTriangle, GraduationCap, MessageCircle } from 'lucide-react'
import StepHeader from '@/components/StepHeader'
import AppleSelect from '@/components/AppleSelect'

export default function Step22ProjectMgmt({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number; fieldErrors?: FieldErrors }) {
  const toggleAssets = (a: string) => {
    const list: string[] = data.existingAssets || []
    update({ existingAssets: list.includes(a) ? list.filter(x => x !== a) : [...list, a] })
  }

  const COMM_OPTIONS = [
    { value: 'daily', label: 'Daily Update (Slack/Email)' },
    { value: 'weekly', label: 'Weekly Meeting (Zoom)' },
    { value: 'biweekly', label: 'Bi-weekly Report' },
    { value: 'milestone', label: 'Hanya saat Milestone selesai' },
  ]

  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Manajemen Proyek & Aset" description="Aset apa yang sudah dimiliki dan preferensi komunikasi." />

      <div className="space-y-10">
        <div className="flex items-start gap-4">
          <FolderCheck className="w-6 h-6 text-apple-gray-400 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Existing Assets Inventory</label>
            <p className="text-apple-gray-500 mb-4">Aset apa saja yang sudah Anda miliki dan bisa digunakan?</p>
            <div className="flex flex-wrap gap-3">
              {['Logo (Vector)', 'Brand Guidelines', 'Foto Produk', 'Foto Tim/Office', 'Video Profil', 'Dokumen Legal', 'Konten Blog', 'Database User', 'Domain', 'Akun Hosting'].map(a => (
                <button key={a} type="button" onClick={() => toggleAssets(a)} className={`px-5 py-3 rounded-full font-medium transition-all ${(data.existingAssets || []).includes(a) ? 'bg-black text-white' : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'}`}>{a}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-apple-gray-400 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Pain Points Website Lama (Jika Ada)</label>
            <p className="text-apple-gray-500 mb-4">Apa yang TIDAK Anda sukai dari website saat ini? Apa yang ingin diperbaiki?</p>
            <textarea value={data.oldSitePainPoints || ''} onChange={e => update({ oldSitePainPoints: e.target.value })} placeholder="Contoh: Loading sangat lambat, tidak mobile-friendly, CMS sulit digunakan..." rows={3} className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-apple-gray-100">
            <GraduationCap className="w-6 h-6 text-apple-gray-500 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <div className="font-semibold text-lg mb-2">Target Audience Training</div>
              <p className="text-apple-gray-500 text-sm mb-4">Siapa yang akan dilatih saat handover?</p>
              <input value={data.trainingAudience || ''} onChange={e => update({ trainingAudience: e.target.value })} placeholder="Contoh: Tim Marketing (3 orang)..." className="w-full px-5 py-4 text-base rounded-xl bg-white border border-apple-gray-200 transition-all hover:bg-apple-gray-50 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black" />
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-apple-gray-100">
            <MessageCircle className="w-6 h-6 text-apple-gray-500 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <div className="font-semibold text-lg mb-2">Communication Preferences</div>
              <p className="text-apple-gray-500 text-sm mb-4">Seberapa sering Anda ingin update progress?</p>
              <AppleSelect 
                value={data.communicationPrefs || ''} 
                onChange={(val) => update({ communicationPrefs: val })} 
                options={COMM_OPTIONS} 
                placeholder="Pilih frekuensi update..." 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}