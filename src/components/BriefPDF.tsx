'use client'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#1a1a1a',
  },
  header: {
    marginBottom: 24,
    borderBottom: '2px solid #000',
    paddingBottom: 12,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 11,
    color: '#666',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,
    backgroundColor: '#f5f5f5',
    padding: '6 10',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 6,
    paddingHorizontal: 10,
  },
  label: {
    width: '35%',
    fontFamily: 'Helvetica-Bold',
    color: '#444',
  },
  value: {
    width: '65%',
    color: '#1a1a1a',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    color: '#999',
    fontSize: 9,
    borderTop: '1px solid #eee',
    paddingTop: 8,
  },
})

const Row = ({ label, value }: { label: string; value?: string | null | boolean }) => {
  if (!value && value !== false) return null
  const display = typeof value === 'boolean' ? (value ? 'Ya' : 'Tidak') : value
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{display}</Text>
    </View>
  )
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
)

export default function BriefPDF({ brief }: { brief: any }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Project Brief</Text>
          <Text style={styles.subtitle}>
            {brief.companyName || 'Tanpa Nama'} — {new Date(brief.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
          </Text>
        </View>

        {/* Kontak */}
        <Section title="Informasi Kontak">
          <Row label="Nama" value={brief.contactName} />
          <Row label="Posisi" value={brief.contactPosition} />
          <Row label="Email" value={brief.contactEmail} />
          <Row label="WhatsApp" value={brief.contactWhatsApp} />
          <Row label="Perusahaan" value={brief.companyName} />
          <Row label="Industri" value={brief.industry} />
          <Row label="Ukuran Perusahaan" value={brief.companySize} />
          <Row label="Lokasi" value={brief.companyLocation} />
          <Row label="Website Lama" value={brief.companyWebsite} />
        </Section>

        {/* Visi & Misi */}
        <Section title="Visi, Misi & Brand">
          <Row label="Visi" value={brief.vision} />
          <Row label="Misi" value={brief.mission} />
          <Row label="Nilai Utama" value={brief.coreValues} />
          <Row label="USP" value={brief.uniqueSellingProposition} />
          <Row label="Brand Personality" value={brief.brandPersonality} />
        </Section>

        {/* Target Audiens */}
        <Section title="Target Audiens">
          <Row label="Deskripsi" value={brief.targetAudienceDescription} />
          <Row label="Usia" value={brief.audienceAge} />
          <Row label="Gender" value={brief.audienceGender} />
          <Row label="Lokasi" value={brief.audienceLocation} />
          <Row label="Pendapatan" value={brief.audienceIncome} />
          <Row label="Pain Points" value={brief.audiencePainPoints} />
        </Section>

        {/* Kompetitor */}
        <Section title="Kompetitor">
          <Row label="Kompetitor" value={brief.competitors} />
          <Row label="Kekuatan" value={brief.competitorStrengths} />
          <Row label="Kelemahan" value={brief.competitorWeaknesses} />
          <Row label="Diferensiasi" value={brief.differentiation} />
        </Section>

        {/* Goals */}
        <Section title="Goals & KPI">
          <Row label="Goal Utama" value={brief.primaryGoal} />
          <Row label="Goal Sekunder" value={brief.secondaryGoals} />
          <Row label="KPI" value={brief.kpis} />
          <Row label="Target Launch" value={brief.desiredLaunchDate} />
        </Section>

        {/* Website */}
        <Section title="Website">
          <Row label="Tipe Website" value={brief.websiteType} />
          <Row label="Tujuan" value={brief.websitePurpose} />
          <Row label="Fitur Utama" value={brief.coreFeatures} />
          <Row label="E-commerce" value={brief.hasEcommerce} />
        </Section>

        {/* Desain */}
        <Section title="Desain & Branding">
          <Row label="Gaya Desain" value={brief.designStyle} />
          <Row label="Palet Warna" value={brief.colorPalette} />
          <Row label="Referensi Desain" value={brief.designReferences} />
          <Row label="Yang Dihindari" value={brief.designAvoid} />
          <Row label="Logo Tersedia" value={brief.logoProvided} />
        </Section>

        {/* Konten */}
        <Section title="Konten">
          <Row label="Konten Siap" value={brief.contentReady} />
          <Row label="Butuh Copywriting" value={brief.copywritingNeeded} />
          <Row label="Tone of Voice" value={brief.toneOfVoice} />
          <Row label="Tipe Konten" value={brief.contentTypes} />
        </Section>

        {/* Teknis */}
        <Section title="Teknis & Budget">
          <Row label="Domain" value={brief.domainStatus} />
          <Row label="Hosting" value={brief.hostingPreference} />
          <Row label="SEO" value={brief.seoNeeded} />
          <Row label="Integrasi" value={brief.integrations} />
          <Row label="Budget" value={brief.budgetRange} />
          <Row label="Timeline Fleksibel" value={brief.timelineFlexible} />
        </Section>

        {/* Catatan */}
        <Section title="Catatan Tambahan">
          <Row label="Catatan" value={brief.additionalNotes} />
          <Row label="Dari Mana" value={brief.howHeardAboutUs} />
        </Section>

        {/* Footer */}
        <Text style={styles.footer}>
          Dokumen ini dibuat otomatis — {new Date().toLocaleDateString('id-ID')}
        </Text>
      </Page>
    </Document>
  )
}