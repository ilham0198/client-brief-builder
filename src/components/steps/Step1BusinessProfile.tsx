'use client'
import { BriefData } from '@/app/brief/page'
import { Building2, User } from 'lucide-react'
import StepHeader from '@/components/StepHeader'
import AppleSelect from '@/components/AppleSelect'

export default function Step1BusinessProfile({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number }) {
  const input = (label: string, key: string, placeholder = '', type = 'text') => (
    <div>
      <label className="block text-sm font-medium text-apple-gray-500 mb-3">{label}</label>
      <input
        type={type}
        value={data[key] || ''}
        onChange={e => update({ [key]: e.target.value })}
        placeholder={placeholder}
        className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black"
      />
    </div>
  )

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
        <div className="pb-8 border-b border-apple-gray-200">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Building2 className="w-6 h-6" /> Informasi Perusahaan
          </h3>
          <div className="space-y-6">
            {input('Nama Perusahaan / Brand', 'companyName', 'Contoh: PT Teknologi Nusantara')}
            {input('Tahun Berdiri', 'companyEstablished', 'Contoh: 2018', 'number')}
            
            <div>
              <label className="block text-sm font-medium text-apple-gray-500 mb-3">Ukuran Perusahaan</label>
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

            {input('Industri / Sektor', 'industry', 'Contoh: Fintech, E-commerce, Healthcare')}
            {input('Deskripsi Singkat Bisnis (2-3 kalimat)', 'companyDescription', 'Apa yang perusahaan Anda lakukan?')}
            <div className="grid md:grid-cols-2 gap-6">
              {input('Lokasi', 'companyLocation', 'Jakarta, Indonesia')}
              {input('Website Saat Ini', 'companyWebsite', 'https://', 'url')}
            </div>
            {input('Akun Sosial Media (pisahkan dengan koma)', 'companySocialMedia', 'Instagram: @brand, LinkedIn: /company')}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <User className="w-6 h-6" /> Kontak Person
          </h3>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {input('Nama Lengkap', 'contactName', 'John Doe')}
              <div>
                <label className="block text-sm font-medium text-apple-gray-500 mb-3">Jabatan</label>
                <AppleSelect 
                  value={data.contactPosition || ''} 
                  onChange={(val) => update({ contactPosition: val })} 
                  options={POSITION_OPTIONS} 
                  placeholder="Pilih jabatan..." 
                />
                {data.contactPosition === 'other' && (
                  <input value={data.contactPositionOther || ''} onChange={e => update({ contactPositionOther: e.target.value })} placeholder="Sebutkan jabatan Anda..." className="w-full mt-3 px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black" />
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {input('Email', 'contactEmail', 'john@company.com', 'email')}
              {input('No. Telepon', 'contactPhone', '+62 812 3456 7890', 'tel')}
            </div>
            {input('No. WhatsApp', 'contactWhatsApp', '+62 812 3456 7890', 'tel')}
          </div>
        </div>
      </div>
    </div>
  )
}