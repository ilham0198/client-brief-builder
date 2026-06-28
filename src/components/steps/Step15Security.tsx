'use client'
import { BriefData, FieldErrors } from '@/app/brief/page'
import { Scale, ShieldCheck } from 'lucide-react'
import StepHeader from '@/components/StepHeader'

export default function Step15Security({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number; fieldErrors?: FieldErrors }) {
  const toggleSecurity = (s: string) => {
    const list: string[] = data.securityRequirements || []
    update({ securityRequirements: list.includes(s) ? list.filter(x => x !== s) : [...list, s] })
  }

  const toggleCompliance = (c: string) => {
    const list: string[] = data.complianceNeeds || []
    update({ complianceNeeds: list.includes(c) ? list.filter(x => x !== c) : [...list, c] })
  }

  const SECURITY_REQS = [
    'SSL / HTTPS Certificate', 'Two-Factor Authentication (2FA)', 'Rate limiting',
    'DDoS Protection', 'Web Application Firewall (WAF)', 'Regular security audits',
    'Encrypted database', 'Secure payment processing (PCI DSS)', 'CAPTCHA / Anti-bot',
    'Session management', 'Password hashing (bcrypt/argon2)', 'Audit logs', 'Lainnya'
  ]

  const COMPLIANCE = [
    'GDPR (Uni Eropa)', 'PDPA / UU PDP (Indonesia)', 'CCPA (California)',
    'HIPAA (Kesehatan)', 'PCI DSS (Pembayaran)', 'ISO 27001', 'SOC 2', 'Tidak ada', 'Lainnya'
  ]

  const hasOtherSecurity = (data.securityRequirements || []).includes('Lainnya')
  const hasOtherCompliance = (data.complianceNeeds || []).includes('Lainnya')

  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Keamanan & Compliance" description="Melindungi data pengguna dan mematuhi regulasi." />

      <div className="space-y-10">
        <div className="flex items-center gap-4 p-6 rounded-2xl bg-apple-gray-100">
          <input
            type="checkbox"
            checked={data.sslNeeded !== false}
            onChange={e => update({ sslNeeded: e.target.checked })}
            className="w-6 h-6 rounded accent-black"
          />
          <div>
            <div className="text-xl font-semibold">SSL / HTTPS Certificate</div>
            <div className="text-apple-gray-500 mt-1">Wajib untuk semua website modern. Enkripsi data antara user dan server.</div>
          </div>
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" /> Persyaratan Keamanan
          </label>
          <p className="text-apple-gray-500 mb-6">Pilih semua fitur keamanan yang dibutuhkan.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {SECURITY_REQS.map(s => (
              <label
                key={s}
                className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  (data.securityRequirements || []).includes(s)
                    ? 'border-black bg-apple-gray-50'
                    : 'border-apple-gray-200 hover:border-apple-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={(data.securityRequirements || []).includes(s)}
                  onChange={() => toggleSecurity(s)}
                  className="w-5 h-5 rounded accent-black"
                />
                <span className="font-medium">{s}</span>
              </label>
            ))}
          </div>
          {hasOtherSecurity && (
            <textarea
              value={data.securityRequirementsOther || ''}
              onChange={e => update({ securityRequirementsOther: e.target.value })}
              placeholder="Sebutkan persyaratan keamanan lainnya..."
              rows={2}
              className="w-full mt-4 px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
            />
          )}
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2">Perlindungan Data</label>
          <p className="text-apple-gray-500 mb-4">Jelaskan bagaimana data sensitif harus ditangani.</p>
          <textarea
            value={data.dataProtection || ''}
            onChange={e => update({ dataProtection: e.target.value })}
            placeholder="Contoh: Data kartu kredit tidak boleh disimpan di server kami..."
            rows={3}
            className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
          />
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2">
            <Scale className="w-6 h-6" /> Kepatuhan Regulasi (Compliance)
          </label>
          <p className="text-apple-gray-500 mb-6">Standar regulasi apa yang harus dipatuhi?</p>
          <div className="flex flex-wrap gap-3">
            {COMPLIANCE.map(c => (
              <button
                key={c}
                type="button"
                onClick={() => toggleCompliance(c)}
                className={`px-5 py-3 rounded-full font-medium transition-all ${
                  (data.complianceNeeds || []).includes(c)
                    ? 'bg-black text-white'
                    : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          {hasOtherCompliance && (
            <textarea
              value={data.complianceNeedsOther || ''}
              onChange={e => update({ complianceNeedsOther: e.target.value })}
              placeholder="Sebutkan compliance lainnya..."
              rows={2}
              className="w-full mt-4 px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
            />
          )}
        </div>
      </div>
    </div>
  )
}