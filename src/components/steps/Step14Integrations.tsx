'use client'
import { BriefData, FieldErrors } from '@/app/brief/page'
import { Plug, Code } from 'lucide-react'
import StepHeader from '@/components/StepHeader'

export default function Step14Integrations({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number; fieldErrors?: FieldErrors }) {
  const toggleIntegration = (i: string) => {
    const list: string[] = data.integrations || []
    update({ integrations: list.includes(i) ? list.filter(x => x !== i) : [...list, i] })
  }

  const INTEGRATIONS = [
    'CRM (HubSpot, Salesforce)', 'ERP (SAP, Oracle)', 'Email Marketing (Mailchimp, SendGrid)',
    'Customer Support (Zendesk, Intercom)', 'Payment Gateway (Midtrans, Xendit)',
    'Shipping (RajaOngkir, Shipper)', 'Accounting (Jurnal, QuickBooks)', 'HRIS (Talenta, Gadjian)',
    'Social Media API', 'Google Workspace', 'Microsoft 365', 'Slack / Teams',
    'Zapier / Make (Automation)', 'Webhook custom', 'REST API publik', 'GraphQL API', 'Lainnya'
  ]

  const hasOtherIntegration = (data.integrations || []).includes('Lainnya')

  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Integrasi" description="Sistem pihak ketiga apa yang perlu terhubung dengan website?" />

      <div className="space-y-10">
        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2">
            <Plug className="w-6 h-6" /> Integrasi Pihak Ketiga
          </label>
          <p className="text-apple-gray-500 mb-6">Pilih semua layanan yang perlu diintegrasikan.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {INTEGRATIONS.map(i => (
              <label
                key={i}
                className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  (data.integrations || []).includes(i)
                    ? 'border-black bg-apple-gray-50'
                    : 'border-apple-gray-200 hover:border-apple-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={(data.integrations || []).includes(i)}
                  onChange={() => toggleIntegration(i)}
                  className="w-5 h-5 rounded accent-black"
                />
                <span className="font-medium">{i}</span>
              </label>
            ))}
          </div>
          {hasOtherIntegration && (
            <textarea
              value={data.integrationsOther || ''}
              onChange={e => update({ integrationsOther: e.target.value })}
              placeholder="Sebutkan integrasi lainnya..."
              rows={2}
              className="w-full mt-4 px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
            />
          )}
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2">
            <Code className="w-6 h-6" /> Kebutuhan API Custom
          </label>
          <p className="text-apple-gray-500 mb-4">Apakah ada sistem internal atau API khusus yang perlu dihubungkan?</p>
          <textarea
            value={data.apiRequirements || ''}
            onChange={e => update({ apiRequirements: e.target.value })}
            placeholder="Contoh: Integrasi dengan sistem inventory internal via REST API..."
            rows={4}
            className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black resize-none"
          />
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2">Integrasi Lainnya</label>
          <p className="text-apple-gray-500 mb-4">Sebutkan integrasi lain yang tidak ada di daftar.</p>
          <input
            value={data.customIntegrations || ''}
            onChange={e => update({ customIntegrations: e.target.value })}
            placeholder="Contoh: Sistem POS lokal, Software akuntansi khusus, dll"
            className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black"
          />
        </div>
      </div>
    </div>
  )
}