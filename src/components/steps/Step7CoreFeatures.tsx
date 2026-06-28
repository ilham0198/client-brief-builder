'use client'
import { BriefData, FieldErrors } from '@/app/brief/page'
import { CheckCircle, Star, Zap } from 'lucide-react'

export default function Step7CoreFeatures({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber?: number; totalSteps?: number; fieldErrors?: FieldErrors }) {
  const toggleFeature = (f: string) => {
    const list: string[] = data.coreFeatures || []
    update({ coreFeatures: list.includes(f) ? list.filter(x => x !== f) : [...list, f] })
  }

  const togglePriority = (f: string) => {
    const list: string[] = data.priorityFeatures || []
    update({ priorityFeatures: list.includes(f) ? list.filter(x => x !== f) : [...list, f] })
  }

  // Parse custom features from textarea (Req 1)
  const customFeaturesList = (data.customFeatures || '')
    .split(/[\n,]+/)
    .map((f: string) => f.trim())
    .filter((f: string) => f.length > 0);

  const FEATURES = [
    'User registration & login', 'User dashboard', 'Search functionality', 'Filter & sorting',
    'Shopping cart', 'Wishlist', 'Product reviews', 'Rating system',
    'Booking system', 'Appointment scheduling', 'Calendar integration', 'Payment gateway',
    'Multi-language support', 'Currency converter', 'Live chat', 'Chatbot',
    'Email notifications', 'SMS notifications', 'Push notifications', 'Social media login',
    'Content management system (CMS)', 'Blog system', 'Forum / discussion', 'Q&A section',
    'File upload', 'Image gallery', 'Video player', 'Document viewer',
    'Map integration', 'Location finder', 'Distance calculator', 'Route planner',
    'Form builder', 'Survey / poll', 'Quiz system', 'Feedback system',
    'Analytics dashboard', 'Report generation', 'Data export', 'API access',
    'Admin panel', 'Role-based access', 'Audit log', 'Backup system'
  ]

  return (
    <div className="fade-in">
      <div className="mb-12">
        <div className="text-sm font-medium text-apple-gray-500 mb-3">Langkah 7 dari 25</div>
        <h2 className="text-5xl font-bold tracking-tight mb-4">Fitur Utama</h2>
        <p className="text-xl text-apple-gray-500 font-light">Pilih fitur-fitur yang dibutuhkan untuk website Anda.</p>
      </div>

      <div className="space-y-10">
        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2">
            <CheckCircle className="w-6 h-6" /> Fitur yang Diinginkan
          </label>
          <p className="text-apple-gray-500 mb-6">Pilih semua fitur yang Anda butuhkan.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {FEATURES.map(f => (
              <label key={f} className={`flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${(data.coreFeatures || []).includes(f) ? 'border-black bg-apple-gray-50' : 'border-apple-gray-200 hover:border-apple-gray-300'}`}>
                <input type="checkbox" checked={(data.coreFeatures || []).includes(f)} onChange={() => toggleFeature(f)} className="w-5 h-5 rounded accent-black" />
                <span className="font-medium">{f}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2">
            <Zap className="w-6 h-6" /> Fitur Custom Lainnya
          </label>
          <p className="text-apple-gray-500 mb-4">Ada fitur khusus yang tidak ada di daftar? (Pisahkan dengan koma atau baris baru)</p>
          <textarea value={data.customFeatures || ''} onChange={e => update({ customFeatures: e.target.value })}
            placeholder="Contoh: Integrasi sistem inventory, Virtual try-on, AI Recommendation..."
            rows={4} className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2">
            <Star className="w-6 h-6" /> Fitur Prioritas (Must-Have)
          </label>
          <p className="text-apple-gray-500 mb-4">Dari fitur yang dipilih di atas (termasuk custom), mana yang WAJIB ada di launch pertama?</p>
          
          <div className="mb-4">
            <div className="text-sm font-medium text-apple-gray-500 mb-2">Fitur Standar:</div>
            <div className="flex flex-wrap gap-3">
              {(data.coreFeatures || []).map((f: string) => (
                <button key={f} type="button" onClick={() => togglePriority(f)}
                  className={`px-5 py-3 rounded-full font-medium transition-all ${(data.priorityFeatures || []).includes(f) ? 'bg-black text-white' : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Req 1: Custom features appear here */}
          {customFeaturesList.length > 0 && (
            <div>
              <div className="text-sm font-medium text-apple-gray-500 mb-2">Fitur Custom Anda:</div>
              <div className="flex flex-wrap gap-3">
                {customFeaturesList.map((f: string, i: number) => (
                  <button key={`custom-${i}`} type="button" onClick={() => togglePriority(f)}
                    className={`px-5 py-3 rounded-full font-medium transition-all ${(data.priorityFeatures || []).includes(f) ? 'bg-black text-white' : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'}`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}