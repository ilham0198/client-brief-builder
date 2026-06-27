import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default async function Detail({ params }: { params: { id: string } }) {
  const brief = await prisma.brief.findUnique({ where: { id: params.id } })
  if (!brief) return notFound()

  const parse = (v: string | null) => { try { return JSON.parse(v || '[]') } catch { return [] } }

  const Section = ({ title, children }: any) => (
    <div className="bg-white p-6 rounded-xl shadow mb-4">
      <h2 className="font-bold text-lg mb-4 text-brand-700">{title}</h2>
      <div className="space-y-2 text-sm">{children}</div>
    </div>
  )
  const Row = ({ l, v }: any) => v ? (
    <div className="flex gap-3 py-2 border-b border-slate-100">
      <span className="text-slate-500 min-w-[160px]">{l}</span>
      <span className="text-slate-900">{Array.isArray(v) ? v.join(', ') : String(v)}</span>
    </div>
  ) : null

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link href="/admin" className="inline-flex items-center gap-2 text-brand-600 mb-4">
        <ArrowLeft className="w-4 h-4" /> Kembali
      </Link>
      <h1 className="text-3xl font-bold mb-2">Brief: {brief.contactName}</h1>
      <p className="text-slate-600 mb-6">Dikirim: {new Date(brief.createdAt).toLocaleString('id-ID')}</p>

      <Section title="Kontak">
        <Row l="Nama" v={brief.clientName} />
        <Row l="Perusahaan" v={brief.companyName} />
        <Row l="Email" v={brief.email} />
        <Row l="WhatsApp" v={brief.phone} />
        <Row l="Jabatan" v={brief.position} />
      </Section>

      <Section title="Proyek">
        <Row l="Jenis" v={brief.projectType} />
        <Row l="Tujuan" v={parse(brief.goals)} />
        <Row l="Target Audiens" v={brief.targetAudience} />
        <Row l="Masalah" v={brief.problemSolved} />
      </Section>

      <Section title="Fitur">
        <Row l="Fitur" v={parse(brief.features)} />
        <Row l="CMS" v={brief.contentManagement ? 'Ya' : 'Tidak'} />
        <Row l="Multi-bahasa" v={brief.multiLanguage ? 'Ya' : 'Tidak'} />
        <Row l="Auth" v={brief.userAuth ? 'Ya' : 'Tidak'} />
        <Row l="Payment" v={brief.paymentGateway ? 'Ya' : 'Tidak'} />
      </Section>

      <Section title="Desain">
        <Row l="Style" v={brief.designStyle} />
        <Row l="Warna utama" v={brief.primaryColor} />
        <Row l="Referensi" v={brief.referenceWebsites} />
      </Section>

      <Section title="Konten & Teknis">
        <Row l="Halaman" v={parse(brief.pages)} />
        <Row l="Konten siap" v={brief.contentReady} />
        <Row l="Domain" v={brief.domain} />
        <Row l="SEO" v={brief.seoNeeded ? 'Ya' : 'Tidak'} />
        <Row l="Integrasi" v={parse(brief.integrations)} />
      </Section>

      <Section title="Timeline & Budget">
        <Row l="Deadline" v={brief.deadline} />
        <Row l="Budget" v={brief.budget} />
      </Section>

      <Section title="Lainnya">
        <Row l="Kompetitor" v={brief.competitors} />
        <Row l="Catatan" v={brief.additionalNotes} />
      </Section>
    </div>
  )
}
