'use client'
import { BriefData } from '@/app/brief/page'
import { UserCog, Globe, QrCode, Database, ShieldAlert, Gauge, Eye } from 'lucide-react'

export default function Step23TechOps({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber?: number; totalSteps?: number }) {
  return (
    <div className="fade-in">
      <div className="mb-12">
        <div className="text-sm font-medium text-apple-gray-500 mb-3">Langkah 23 dari 25</div>
        <h2 className="text-5xl font-bold tracking-tight mb-4">Teknis, Operasional & Data</h2>
        <p className="text-xl text-apple-gray-500 font-light">Detail teknis mendalam, migrasi data, dan standar performa.</p>
      </div>

      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-semibold mb-2 flex items-center gap-2"><UserCog className="w-5 h-5" /> Multi-Role Users</label>
            <p className="text-apple-gray-500 text-sm mb-2">Jenis user & permission yang dibutuhkan.</p>
            <textarea value={data.multiRoleUsers || ''} onChange={e => update({ multiRoleUsers: e.target.value })}
              placeholder="Contoh: Super Admin, Editor (hanya bisa post blog), Customer (lihat history order)..."
              rows={3} className="w-full px-4 py-3 rounded-xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2 flex items-center gap-2"><Globe className="w-5 h-5" /> Localization</label>
            <p className="text-apple-gray-500 text-sm mb-2">Bahasa, mata uang, timezone (jika global).</p>
            <textarea value={data.localization || ''} onChange={e => update({ localization: e.target.value })}
              placeholder="Contoh: Bahasa Indonesia & Inggris, Mata uang IDR & USD, Timezone WIB..."
              rows={3} className="w-full px-4 py-3 rounded-xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-semibold mb-2 flex items-center gap-2"><QrCode className="w-5 h-5" /> Offline Integration</label>
            <p className="text-apple-gray-500 text-sm mb-2">QR code, barcode, cetak brosur yang harus konsisten.</p>
            <textarea value={data.offlineIntegration || ''} onChange={e => update({ offlineIntegration: e.target.value })}
              placeholder="Contoh: QR code di packaging harus redirect ke halaman registrasi garansi..."
              rows={3} className="w-full px-4 py-3 rounded-xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2 flex items-center gap-2"><Database className="w-5 h-5" /> Data Migration</label>
            <p className="text-apple-gray-500 text-sm mb-2">Pindah data dari website/sistem lama.</p>
            <textarea value={data.dataMigration || ''} onChange={e => update({ dataMigration: e.target.value })}
              placeholder="Contoh: Migrasi 500 produk dari Shopify, 10.000 user dari database MySQL lama..."
              rows={3} className="w-full px-4 py-3 rounded-xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-semibold mb-2 flex items-center gap-2"><ShieldAlert className="w-5 h-5" /> Backup & Disaster Recovery</label>
            <p className="text-apple-gray-500 text-sm mb-2">Strategi backup dan recovery jika ada masalah.</p>
            <textarea value={data.backupStrategy || ''} onChange={e => update({ backupStrategy: e.target.value })}
              placeholder="Contoh: Backup harian otomatis ke AWS S3, RTO 4 jam, RPO 24 jam..."
              rows={3} className="w-full px-4 py-3 rounded-xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2 flex items-center gap-2"><Gauge className="w-5 h-5" /> Performance Benchmarks</label>
            <p className="text-apple-gray-500 text-sm mb-2">Target Core Web Vitals spesifik.</p>
            <textarea value={data.performanceBenchmarks || ''} onChange={e => update({ performanceBenchmarks: e.target.value })}
              placeholder="Contoh: LCP < 2.5s, FID < 100ms, CLS < 0.1, Google PageSpeed score > 90..."
              rows={3} className="w-full px-4 py-3 rounded-xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
          </div>
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2 flex items-center gap-2"><Eye className="w-5 h-5" /> Accessibility Specifics</label>
          <p className="text-apple-gray-500 text-sm mb-4">Detail aksesibilitas (WCAG).</p>
          <textarea value={data.accessibilitySpecifics || ''} onChange={e => update({ accessibilitySpecifics: e.target.value })}
            placeholder="Contoh: Contrast ratio minimal 4.5:1, full keyboard navigation, screen reader compatible (NVDA/JAWS)..."
            rows={3} className="w-full px-4 py-3 rounded-xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
        </div>
      </div>
    </div>
  )
}
