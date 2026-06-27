'use client'
import { BriefData } from '@/app/brief/page'
import { Palette, Image, Link as LinkIcon, Upload } from 'lucide-react'
import StepHeader from '@/components/StepHeader'

export default function Step9DesignBranding({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber: number; totalSteps: number }) {
  const STYLES = [
    { id: 'minimalist', label: 'Minimalist', desc: 'Clean, simple, banyak white space' },
    { id: 'modern', label: 'Modern', desc: 'Contemporary, fresh, kekinian' },
    { id: 'corporate', label: 'Corporate', desc: 'Formal, professional, trustworthy' },
    { id: 'playful', label: 'Playful', desc: 'Colorful, fun, energetic' },
    { id: 'luxury', label: 'Luxury', desc: 'Elegant, premium, sophisticated' },
    { id: 'tech', label: 'Tech/Futuristic', desc: 'Dark mode, neon, cutting-edge' },
    { id: 'organic', label: 'Organic/Natural', desc: 'Earth tones, natural, warm' },
    { id: 'bold', label: 'Bold/Brutalist', desc: 'Strong typography, high contrast' },
    { id: 'other', label: 'Lainnya', desc: 'Style custom sesuai visi Anda' },
  ]

  const COLORS = [
    { name: 'Black', hex: '#000000' }, { name: 'White', hex: '#FFFFFF' }, { name: 'Gray', hex: '#6B7280' },
    { name: 'Red', hex: '#EF4444' }, { name: 'Blue', hex: '#3B82F6' }, { name: 'Green', hex: '#10B981' },
    { name: 'Yellow', hex: '#F59E0B' }, { name: 'Purple', hex: '#8B5CF6' }, { name: 'Pink', hex: '#EC4899' },
    { name: 'Orange', hex: '#F97316' }, { name: 'Teal', hex: '#14B8A6' }, { name: 'Indigo', hex: '#6366F1' },
  ]

  const toggleColor = (color: string) => {
    const list: string[] = data.colorPalette || []
    update({ colorPalette: list.includes(color) ? list.filter(x => x !== color) : [...list, color] })
  }

  const removeColor = (color: string) => {
    update({ colorPalette: (data.colorPalette || []).filter((c: string) => c !== color) })
  }

  const addReference = (url: string) => {
    const list: string[] = data.designReferences || []
    if (url && !list.includes(url)) update({ designReferences: [...list, url] })
  }
  const removeReference = (url: string) => {
    update({ designReferences: (data.designReferences || []).filter((u: string) => u !== url) })
  }

  return (
    <div className="fade-in">
      <StepHeader stepNumber={stepNumber} totalSteps={totalSteps} title="Desain & Branding" description="Bagaimana tampilan visual website yang Anda inginkan?" />

      <div className="space-y-10">
        <div>
          <label className="block text-xl font-semibold mb-2">Style Desain</label>
          <p className="text-apple-gray-500 mb-6">Pilih style yang paling sesuai dengan brand Anda.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {STYLES.map(s => (
              <button key={s.id} type="button" onClick={() => update({ designStyle: s.id })}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${data.designStyle === s.id ? 'border-black bg-apple-gray-50' : 'border-apple-gray-200 hover:border-apple-gray-300'}`}>
                <div className="font-semibold text-lg mb-1">{s.label}</div>
                <div className="text-apple-gray-500 text-sm">{s.desc}</div>
              </button>
            ))}
          </div>
          {data.designStyle === 'other' && (
            <textarea value={data.designStyleOther || ''} onChange={e => update({ designStyleOther: e.target.value })}
              placeholder="Jelaskan style desain yang Anda inginkan secara detail..." rows={3}
              className="w-full mt-4 px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
          )}
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2"><Palette className="w-6 h-6" /> Color Palette</label>
          <p className="text-apple-gray-500 mb-6">Pilih 3-5 warna yang akan menjadi identitas visual website.</p>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
            {COLORS.map(c => (
              <button key={c.hex} type="button" onClick={() => toggleColor(c.hex)}
                className={`aspect-square rounded-2xl border-2 transition-all relative ${(data.colorPalette || []).includes(c.hex) ? 'border-black scale-105' : 'border-apple-gray-200 hover:border-apple-gray-400'}`}
                style={{ backgroundColor: c.hex }}>
                {(data.colorPalette || []).includes(c.hex) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-2 left-0 right-0 text-center"><span className="text-xs font-medium px-2 py-1 rounded bg-white/80 backdrop-blur">{c.name}</span></div>
              </button>
            ))}
          </div>

          <div className="bg-apple-gray-100 rounded-2xl p-4 mb-4">
            <div className="text-sm font-medium mb-3">Tambahkan Warna Custom:</div>
            <div className="flex gap-3">
              <input type="color" value={data.customColorPicker || '#000000'} onChange={e => update({ customColorPicker: e.target.value })} className="h-12 w-16 rounded-xl cursor-pointer border-0" />
              <input type="text" placeholder="Atau ketik kode HEX (contoh: #AABBCC)" value={data.customColorHex || ''} onChange={e => update({ customColorHex: e.target.value })} className="flex-1 px-4 rounded-xl bg-white border border-apple-gray-200" />
              <button type="button" onClick={() => {
                const color = data.customColorHex || data.customColorPicker;
                if(color && !(data.colorPalette || []).includes(color)) {
                  update({ colorPalette: [...(data.colorPalette || []), color] });
                  update({ customColorHex: '' });
                }
              }} className="px-6 rounded-xl bg-black text-white font-medium hover:bg-apple-gray-800 transition-all">Tambah</button>
            </div>
          </div>

          {(data.colorPalette || []).filter((c: string) => !COLORS.find(x => x.hex === c)).length > 0 && (
            <div className="flex flex-wrap gap-3 mb-4">
              {(data.colorPalette || []).filter((c: string) => !COLORS.find(x => x.hex === c)).map((c: string) => (
                <div key={c} className="flex items-center gap-2 px-3 py-2 rounded-full bg-apple-gray-100 border border-apple-gray-200">
                  <div className="w-6 h-6 rounded-full border border-apple-gray-300" style={{ backgroundColor: c }}></div>
                  <span className="text-sm font-mono">{c}</span>
                  <button type="button" onClick={() => removeColor(c)} className="text-apple-gray-400 hover:text-red-500 ml-2">×</button>
                </div>
              ))}
            </div>
          )}
          <div className="text-sm text-apple-gray-500">Total warna terpilih: {(data.colorPalette || []).length}</div>
        </div>

        <div className="flex items-center gap-4 p-6 rounded-2xl bg-apple-gray-100">
          <input type="checkbox" checked={data.logoProvided || false} onChange={e => update({ logoProvided: e.target.checked })} className="w-6 h-6 rounded accent-black" />
          <div>
            <div className="font-semibold">Logo sudah tersedia</div>
            <div className="text-apple-gray-500 text-sm mt-1">Anda akan menyediakan logo dalam format vector (AI, SVG, EPS) atau PNG resolusi tinggi.</div>
          </div>
        </div>

        {data.logoProvided && (
          <div className="pl-4 border-l-2 border-apple-gray-200 space-y-4 fade-in">
            <div>
              <label className="block text-lg font-semibold mb-2 flex items-center gap-2"><Upload className="w-5 h-5" /> Upload File Logo</label>
              <input type="file" accept="image/*,.ai,.eps,.svg,.pdf" onChange={(e) => {
                const file = e.target.files?.[0];
                if(file) update({ logoFileName: file.name });
              }} className="w-full px-4 py-3 rounded-xl bg-white border border-apple-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-apple-gray-800" />
              {data.logoFileName && <div className="text-sm text-green-600 mt-2 font-medium"> Logo Berhasil Diupload!</div>}
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Atau Paste Link Cloud Storage</label>
              <input type="text" value={data.logoLink || ''} onChange={e => update({ logoLink: e.target.value })}
                placeholder="https://drive.google.com/... atau https://dropbox.com/..."
                className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all" />
            </div>
          </div>
        )}

        <div>
          <label className="block text-xl font-semibold mb-2">Brand Guidelines</label>
          <p className="text-apple-gray-500 mb-4">Link ke brand guidelines, font, atau dokumen brand lainnya (jika ada).</p>
          <textarea value={data.existingBrandGuidelines || ''} onChange={e => update({ existingBrandGuidelines: e.target.value })}
            placeholder="Contoh: https://drive.google.com/brand-guidelines.pdf" rows={3}
            className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2"><LinkIcon className="w-6 h-6" /> Website Referensi</label>
          <p className="text-apple-gray-500 mb-4">Website mana yang Anda sukai desainnya?</p>
          <div className="space-y-3">
            {(data.designReferences || []).map((url: string, i: number) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-apple-gray-100">
                <span className="flex-1 text-sm truncate">{url}</span>
                <button type="button" onClick={() => removeReference(url)} className="text-apple-gray-400 hover:text-red-500 transition-colors">×</button>
              </div>
            ))}
            <div className="flex gap-3">
              <input type="url" placeholder="https://example.com" onKeyPress={(e) => {
                if (e.key === 'Enter' && e.currentTarget.value) { addReference(e.currentTarget.value); e.currentTarget.value = '' }
              }} className="flex-1 px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all" />
              <button type="button" onClick={(e) => {
                const input = e.currentTarget.previousElementSibling as HTMLInputElement
                if (input.value) { addReference(input.value); input.value = '' }
              }} className="px-8 py-4 rounded-2xl bg-black text-white font-medium hover:bg-apple-gray-800 transition-all">Tambah</button>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xl font-semibold mb-2 flex items-center gap-2"><Image className="w-6 h-6" /> Hal yang Harus Dihindari</label>
          <p className="text-apple-gray-500 mb-4">Style, warna, atau elemen desain yang TIDAK Anda inginkan.</p>
          <textarea value={data.designAvoid || ''} onChange={e => update({ designAvoid: e.target.value })}
            placeholder="Contoh: Hindari warna merah, jangan terlalu banyak animasi..." rows={3}
            className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none" />
        </div>
      </div>
    </div>
  )
}