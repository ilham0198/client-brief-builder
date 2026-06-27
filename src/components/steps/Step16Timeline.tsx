'use client'
import { BriefData } from '@/app/brief/page'
import { Calendar, Clock, Zap } from 'lucide-react'
import StepHeader from '@/components/StepHeader'
import AppleDate from '@/components/AppleDate'

export default function Step16Timeline({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number }) {
  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Timeline" description="Kapan website ini harus siap diluncurkan?" />

      <div className="space-y-10">
        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2"><Calendar className="w-6 h-6" /> Tanggal Launching yang Diinginkan</label>
          <p className="text-apple-gray-500 mb-4">Kapan target website live dan bisa diakses publik?</p>
          <AppleDate 
            value={data.desiredLaunchDate || ''} 
            onChange={(val) => update({ desiredLaunchDate: val })} 
            placeholder="Pilih tanggal launch..."
          />
        </div>

        <div className="flex items-center gap-4 p-6 rounded-2xl bg-apple-gray-100">
          <input type="checkbox" checked={data.timelineFlexible || false} onChange={e => update({ timelineFlexible: e.target.checked })} className="w-6 h-6 rounded accent-black" />
          <div><div className="text-xl font-semibold">Timeline Fleksibel</div><div className="text-apple-gray-500 mt-1">Tanggal di atas adalah estimasi, kami bisa menyesuaikan dengan kualitas hasil akhir.</div></div>
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2"><Clock className="w-6 h-6" /> Milestone Penting</label>
          <p className="text-apple-gray-500 mb-4">Apakah ada tenggat waktu atau event penting yang harus dicapai sebelum launch?</p>
          <textarea value={data.milestones || ''} onChange={e => update({ milestones: e.target.value })} placeholder="Contoh: Harus live sebelum pameran dagang..." rows={3} className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none" />
        </div>

        <div className="flex items-start gap-4 p-6 rounded-2xl bg-red-50 border border-red-100">
          <Zap className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <div className="text-xl font-semibold text-red-900">Proyek Mendesak (Rush Project)</div>
            <p className="text-red-700/80 mt-1 mb-4">Apakah Anda membutuhkan timeline yang singkat?</p>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={data.rushProject || false} onChange={e => update({ rushProject: e.target.checked })} className="w-5 h-5 rounded accent-black" />
              <span className="font-medium text-red-900">Ya, ini adalah proyek mendesak</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}