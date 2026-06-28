'use client'
import { BriefData, FieldErrors } from '@/app/brief/page'
import { Building2, User } from 'lucide-react'
import StepHeader from '@/components/StepHeader'
import AppleSelect from '@/components/AppleSelect'

export default function Step1BusinessProfile({ data, update, stepNumber, totalSteps, fieldErrors = {} }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number; fieldErrors?: FieldErrors }) {

  const inputClass = (hasError: boolean) =>
    `w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black ${
      hasError ? 'border-red-400 bg-red-50 hover:bg-red-50' : 'border-apple-gray-200'
    }`

  const FieldError = ({ field }: { field: string }) =>
    fieldErrors[field] ? (
      <p className="mt-2 text-sm text-red-600">{fieldErrors[field]}</p>
    ) : null

  const POSITION_OPTIONS = [
    { value: 'ceo', label: 'CEO / Founder' },
    { value: 'director', label: 'Director' },
    { value: 'manager', label: 'Manager' },
    { value: 'marketing', label: 'Marketing Lead' },
    { value: 'it', label: 'IT / Tech Lead' },
    { value: 'owner', label: 'Business Owner' },
    { value: 'other', label: 'Lainnya' },
  ]

  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Profil Bisnis" description="Ceritakan tentang perusahaan Anda dan orang yang akan kami hubungi." />

      <div className="space-y-6">
        {/* Informasi Perusahaan */}
        <div className="pb-8 border-b border-apple-gray-200">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Building2 className="w-6 h-6" /> Informasi Perusahaan
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-apple-gray-500 mb-3">
                Nama Perusahaan / Brand <span className="text-apple-gray-400 font-normal">(opsional)</span>
              </label>
              <input
                type="text"
                value={data.companyName || ''}
                onChange={e => update({ companyName: e.target.value })}
                placeholder="Contoh: PT Teknologi Nusantara"
                className={inputClass(false)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-apple-gray-500 mb-3">
                Tahun Berdiri <span className="text-apple-gray-400 font-normal">(opsional)</span>
              </label>
              <input
                type="number"
                value={data.companyEstablished || ''}
                onChange={e => update({ companyEstablished: e.target.value })}
                placeholder="Contoh: 2018"
                className={inputClass(false)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-apple-gray-500 mb-3">
                Ukuran Perusahaan <span className="text-apple-gray-400 font-normal">(opsional)</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {['1-5', '6-20', '21-50', '51-200', '200+'].map(size => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => update({ companySize: size })}
                    className={`px-4 py-4 rounded-xl font-medium transition-all ${
                      data.companySize === size
                        ? 'bg-black text-white'
                        : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-apple-gray-500 mb-3">
                Industri / Sektor <span className="text-apple-gray-400 font-normal">(opsional)</span>
              </label>
              <input
                type="text"
                value={data.industry || ''}
                onChange={e => update({ industry: e.target.value })}
                placeholder="Contoh: Fintech, E-commerce, Healthcare"
                className={inputClass(false)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-apple-gray-500 mb-3">
                Deskripsi Singkat Bisnis <span className="text-apple-gray-400 font-normal">(opsional)</span>
              </label>
              <input
                type="text"
                value={data.companyDescription || ''}
                onChange={e => update({ companyDescription: e.target.value })}
                placeholder="Apa yang perusahaan Anda lakukan?"
                className={inputClass(false)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-apple-gray-500 mb-3">
                  Lokasi <span className="text-apple-gray-400 font-normal">(opsional)</span>
                </label>
                <input
                  type="text"
                  value={data.companyLocation || ''}
                  onChange={e => update({ companyLocation: e.target.value })}
                  placeholder="Jakarta, Indonesia"
                  className={inputClass(false)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-apple-gray-500 mb-3">
                  Website Saat Ini <span className="text-apple-gray-400 font-normal">(opsional)</span>
                </label>
                <input
                  type="url"
                  value={data.companyWebsite || ''}
                  onChange={e => update({ companyWebsite: e.target.value })}
                  placeholder="https://"
                  className={inputClass(false)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-apple-gray-500 mb-3">
                Akun Sosial Media <span className="text-apple-gray-400 font-normal">(opsional)</span>
              </label>
              <input
                type="text"
                value={data.companySocialMedia || ''}
                onChange={e => update({ companySocialMedia: e.target.value })}
                placeholder="Instagram: @brand, LinkedIn: /company"
                className={inputClass(false)}
              />
            </div>
          </div>
        </div>

        {/* Kontak Person */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <User className="w-6 h-6" /> Kontak Person
          </h3>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-apple-gray-500 mb-3">Nama Lengkap</label>
                <input
                  type="text"
                  value={data.contactName || ''}
                  onChange={e => update({ contactName: e.target.value })}
                  placeholder="John Doe"
                  className={inputClass(!!fieldErrors.contactName)}
                />
                <FieldError field="contactName" />
              </div>
              <div>
                <label className="block text-sm font-medium text-apple-gray-500 mb-3">
                  Jabatan <span className="text-apple-gray-400 font-normal">(opsional)</span>
                </label>
                <AppleSelect
                  value={data.contactPosition || ''}
                  onChange={(val) => update({ contactPosition: val })}
                  options={POSITION_OPTIONS}
                  placeholder="Pilih jabatan..."
                />
                {data.contactPosition === 'other' && (
                  <input
                    value={data.contactPositionOther || ''}
                    onChange={e => update({ contactPositionOther: e.target.value })}
                    placeholder="Sebutkan jabatan Anda..."
                    className="w-full mt-3 px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black"
                  />
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-apple-gray-500 mb-3">Email</label>
                <input
                  type="email"
                  value={data.contactEmail || ''}
                  onChange={e => update({ contactEmail: e.target.value })}
                  placeholder="john@company.com"
                  className={inputClass(!!fieldErrors.contactEmail)}
                />
                <FieldError field="contactEmail" />
              </div>
              <div>
                <label className="block text-sm font-medium text-apple-gray-500 mb-3">No. Telepon</label>
                <input
                  type="tel"
                  value={data.contactPhone || ''}
                  onChange={e => update({ contactPhone: e.target.value })}
                  placeholder="+62 812 3456 7890"
                  className={inputClass(!!fieldErrors.contactPhone)}
                />
                <FieldError field="contactPhone" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-apple-gray-500 mb-3">
                No. WhatsApp <span className="text-apple-gray-400 font-normal">(opsional)</span>
              </label>
              <input
                type="tel"
                value={data.contactWhatsApp || ''}
                onChange={e => update({ contactWhatsApp: e.target.value })}
                placeholder="+62 812 3456 7890"
                className={inputClass(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}