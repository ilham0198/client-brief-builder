'use client'
import { BriefData, FieldErrors } from '@/app/brief/page'
import { Scale, ShieldCheck } from 'lucide-react'
import StepHeader from '@/components/StepHeader'

export default function Step19Legal({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number; fieldErrors?: FieldErrors }) {
  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Legal & Compliance" description="Dokumen hukum dan kebijakan privasi untuk melindungi bisnis Anda." />

      <div className="space-y-10">
        <div className="flex items-start gap-4">
          <Scale className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1 space-y-4">
            <label className="block text-xl font-semibold mb-2">Dokumen Legal yang Dibutuhkan</label>
            <p className="text-apple-gray-500 mb-4">Kami bisa buatkan draft atau mengintegrasikan dokumen dari tim legal Anda.</p>
            
            {[
              { key: 'privacyPolicyNeeded', label: 'Privacy Policy (Kebijakan Privasi)', desc: 'Wajib jika website mengumpulkan data user' },
              { key: 'termsOfServiceNeeded', label: 'Terms of Service (Syarat & Ketentuan)', desc: 'Aturan penggunaan website Anda' },
              { key: 'cookiePolicyNeeded', label: 'Cookie Policy', desc: 'Pemberitahuan penggunaan cookie' },
              { key: 'gdprCompliance', label: 'GDPR / UU PDP Compliance', desc: 'Kepatuhan terhadap regulasi perlindungan data' }
            ].map(item => (
              <div key={item.key} className="flex items-center gap-4 p-5 rounded-2xl bg-apple-gray-100">
                <input
                  type="checkbox"
                  checked={data[item.key] || false}
                  onChange={e => update({ [item.key]: e.target.checked })}
                  className="w-5 h-5 rounded accent-black"
                />
                <div>
                  <div className="font-semibold">{item.label}</div>
                  <div className="text-apple-gray-500 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Persyaratan Legal Lainnya</label>
            <p className="text-apple-gray-500 mb-4">Ada catatan khusus dari tim legal atau regulasi industri Anda?</p>
            <textarea
              value={data.legalRequirements || ''}
              onChange={e => update({ legalRequirements: e.target.value })}
              placeholder="Contoh: Website harus mematuhi regulasi OJK untuk fintech..."
              rows={4}
              className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}