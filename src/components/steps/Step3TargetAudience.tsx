'use client'
import { BriefData, FieldErrors } from '@/app/brief/page'
import { Users, AlertCircle, TrendingUp, Heart, Plus, X, ArrowRight } from 'lucide-react'
import StepHeader from '@/components/StepHeader'

export default function Step3TargetAudience({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number; fieldErrors?: FieldErrors }) {
  const input = (label: string, key: string, placeholder = '') => (
    <div>
      <label className="block text-sm font-medium text-apple-gray-500 mb-3">{label}</label>
      <input
        value={data[key] || ''}
        onChange={e => update({ [key]: e.target.value })}
        placeholder={placeholder}
        className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all"
      />
    </div>
  )

  // Buying Journey handlers
  const addJourneyStep = () => {
    const list: string[] = data.audienceBuyingJourneySteps || []
    update({ audienceBuyingJourneySteps: [...list, ''] })
  }

  const removeJourneyStep = (index: number) => {
    const list: string[] = data.audienceBuyingJourneySteps || []
    update({ audienceBuyingJourneySteps: list.filter((_, i) => i !== index) })
  }

  const updateJourneyStep = (index: number, value: string) => {
    const list: string[] = data.audienceBuyingJourneySteps || []
    const newList = [...list]
    newList[index] = value
    update({ audienceBuyingJourneySteps: newList })
  }

  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Target Audiens" description="Siapa yang akan menggunakan website ini? Semakin detail, semakin tepat desain kami." />

      <div className="space-y-10">
        <div>
          <label className="block text-xl font-semibold mb-2">Deskripsi Target Audiens</label>
          <p className="text-apple-gray-500 mb-4">Ceritakan siapa audiens utama Anda secara umum.</p>
          <textarea
            value={data.targetAudienceDescription || ''}
            onChange={e => update({ targetAudienceDescription: e.target.value })}
            placeholder="Contoh: Profesional muda usia 25-40 tahun di kota besar yang sibuk dan butuh solusi cepat untuk manajemen keuangan pribadi..."
            rows={4}
            className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {input('Rentang Usia', 'audienceAge', 'Contoh: 25-40 tahun')}
          {input('Jenis Kelamin', 'audienceGender', 'Pria / Wanita / Semua')}
          {input('Lokasi Geografis', 'audienceLocation', 'Kota besar / Seluruh Indonesia / Global')}
          {input('Tingkat Pendapatan', 'audienceIncome', 'Menengah ke atas / Semua kalangan')}
          {input('Tingkat Pendidikan', 'audienceEducation', 'S1 / SMA / Tidak spesifik')}
          {input('Pekerjaan / Profesi', 'audienceOccupation', 'Profesional, Entrepreneur, Mahasiswa')}
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2">Minat & Hobi</label>
          <p className="text-apple-gray-500 mb-4">Apa yang mereka sukai? (pisahkan dengan koma)</p>
          <input
            value={data.audienceInterests || ''}
            onChange={e => update({ audienceInterests: e.target.value })}
            placeholder="Contoh: Teknologi, Investasi, Traveling, Fitness"
            className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all"
          />
        </div>

        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Pain Points / Masalah Utama</label>
            <p className="text-apple-gray-500 mb-4">Masalah apa yang mereka hadapi saat ini?</p>
            <textarea
              value={data.audiencePainPoints || ''}
              onChange={e => update({ audiencePainPoints: e.target.value })}
              placeholder="Contoh: Sulit mengatur keuangan karena tidak ada tools yang simple..."
              rows={3}
              className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none"
            />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <TrendingUp className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Perilaku Online</label>
            <p className="text-apple-gray-500 mb-4">Bagaimana mereka berinteraksi dengan internet?</p>
            <textarea
              value={data.audienceBehavior || ''}
              onChange={e => update({ audienceBehavior: e.target.value })}
              placeholder="Contoh: Aktif di Instagram & TikTok, lebih sering browsing dari HP..."
              rows={3}
              className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none"
            />
          </div>
        </div>

        {/* Dynamic Buying Journey */}
        <div className="flex items-start gap-4">
          <Heart className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Buying Journey</label>
            <p className="text-apple-gray-500 mb-4">Bagaimana proses mereka mengambil keputusan membeli? Tambahkan setiap tahap perjalanan mereka.</p>
            
            <div className="space-y-3">
              {(data.audienceBuyingJourneySteps || []).map((step: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1 relative">
                    <textarea
                      value={step}
                      onChange={(e) => updateJourneyStep(index, e.target.value)}
                      placeholder={`Tahap ${index + 1}...`}
                      rows={1}
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = target.scrollHeight + 'px';
                      }}
                      className="w-full px-5 py-3 text-base rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none overflow-hidden"
                      style={{ minHeight: '48px' }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeJourneyStep(index)}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-apple-gray-100 hover:bg-red-100 hover:text-red-600 text-apple-gray-500 transition-all flex items-center justify-center"
                    title="Hapus tahap ini"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addJourneyStep}
              className="mt-4 flex items-center gap-2 px-5 py-3 rounded-full bg-apple-gray-100 hover:bg-apple-gray-200 text-apple-gray-700 font-medium transition-all"
            >
              <Plus className="w-4 h-4" /> Tambah Tahap
            </button>

            {(data.audienceBuyingJourneySteps || []).length === 0 && (
              <div className="mt-4 p-4 rounded-2xl bg-apple-gray-50 border border-dashed border-apple-gray-300 text-center text-apple-gray-500 text-sm">
                Belum ada tahap. Klik "Tambah Tahap" untuk memulai.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}