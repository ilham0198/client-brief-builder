'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import Link from 'next/link'
import { CheckCircle2, Home, Mail } from 'lucide-react'
import DownloadPDFButton from '@/components/DownloadPDFButton'

function SuccessContent() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [brief, setBrief] = useState<any>(null)

  useEffect(() => {
    if (id) {
      fetch(`/api/briefs/${id}`)
        .then(res => res.json())
        .then(data => setBrief(data))
        .catch(() => {})
    }
  }, [id])

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white">
      <div className="max-w-2xl text-center fade-in">
        <div className="w-24 h-24 mx-auto rounded-full bg-black flex items-center justify-center mb-8">
          <CheckCircle2 className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Brief Anda Telah Diterima.</h1>
        
        <p className="text-xl text-apple-gray-500 mb-8 font-light leading-relaxed">
          Terima kasih telah mempercayakan visi digital Anda kepada kami. Tim kami telah menerima brief Anda dan akan melakukan review menyeluruh.
        </p>
        
        <div className="bg-apple-gray-50 rounded-3xl p-8 mb-10 text-left">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5" /> Langkah Selanjutnya:
          </h3>
          <ul className="space-y-3 text-apple-gray-600">
            <li className="flex gap-3">
              <span className="font-bold text-black">1.</span>
              <span>Tim kami akan menganalisis kebutuhan andasecepatnya.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-black">2.</span>
              <span>Kami akan menghubungi Anda untuk menjadwalkan konsultasi awal.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-black">3.</span>
              <span>Setelah konsultasi, kami akan mengirimkan proposal & penawaran resmi.</span>
            </li>
          </ul>
        </div>

        <p className="text-sm text-apple-gray-400 mb-8">
          Jika Anda memiliki pertanyaan mendesak, silakan hubungi kami di <span className="text-black font-medium">angeldust0992@gmail.com</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-medium hover:bg-apple-gray-800 transition-all">
            <Home className="w-4 h-4" /> Kembali ke Beranda
          </Link>
          {brief && <DownloadPDFButton brief={brief} />}
        </div>
      </div>
    </div>
  )
}

export default function Success() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  )
}