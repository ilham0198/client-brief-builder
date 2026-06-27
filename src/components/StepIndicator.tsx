import { Check } from 'lucide-react'

const STEP_LABELS = [
  'Profil Bisnis', 'Visi & Misi', 'Target Audiens', 'Analisis Kompetitor',
  'Tujuan & KPI', 'Jenis Website', 'Fitur Utama', 'E-Commerce',
  'Desain & Branding', 'Struktur Halaman', 'Konten & Copy', 'SEO & Marketing',
  'Aspek Teknis', 'Integrasi', 'Keamanan', 'Timeline',
  'Budget', 'Maintenance', 'Legal', 'Konten & UX',
  'Manajemen Proyek', 'Teknis & Ops', 'Growth & Extras', 'Review'
]

export default function StepIndicator({ current }: { current: number }) {
  const progress = ((current + 1) / STEP_LABELS.length) * 100
  return (
    <div className="mb-16">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-apple-gray-500">Progress</span>
          <span className="text-sm font-medium text-black">{Math.round(progress)}%</span>
        </div>
        <div className="h-1 bg-apple-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-black transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className="text-center">
        <span className="text-sm text-apple-gray-500">Langkah {current + 1} dari {STEP_LABELS.length}</span>
        <div className="text-lg font-semibold mt-1">{STEP_LABELS[current]}</div>
      </div>
    </div>
  )
}