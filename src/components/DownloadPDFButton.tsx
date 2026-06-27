'use client'
import { useState, useEffect } from 'react'

export default function DownloadPDFButton({ brief }: { brief: any }) {
  const [isClient, setIsClient] = useState(false)
  const [PDFDownloadLink, setPDFDownloadLink] = useState<any>(null)
  const [BriefPDF, setBriefPDF] = useState<any>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setIsClient(true)
    Promise.all([
      import('@react-pdf/renderer'),
      import('./BriefPDF')
    ]).then(([pdfLib, briefPdfModule]) => {
      setPDFDownloadLink(() => pdfLib.PDFDownloadLink)
      setBriefPDF(() => briefPdfModule.default)
    })
  }, [])

  if (!isClient || !PDFDownloadLink || !BriefPDF) {
    return (
      <button
        disabled
        className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg text-sm font-medium cursor-not-allowed"
      >
        📄 Memuat PDF...
      </button>
    )
  }

  if (!ready) {
    return (
      <button
        onClick={() => setReady(true)}
        className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all text-sm font-medium"
      >
        📄 Export PDF
      </button>
    )
  }

  return (
    <PDFDownloadLink
      document={<BriefPDF brief={brief} />}
      fileName={`brief-${brief.companyName || brief.id}.pdf`}
      className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all text-sm font-medium"
    >
      {({ loading }: { loading: boolean }) => loading ? '⏳ Menyiapkan...' : '⬇️ Download PDF'}
    </PDFDownloadLink>
  )
}