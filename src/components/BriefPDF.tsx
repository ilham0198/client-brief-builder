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

// Parse JSON array menjadi string yang readable
const parseArr = (val: any): string => {
  if (!val) return '-'
  try {
    const parsed = typeof val === 'string' ? JSON.parse(val) : val
    if (Array.isArray(parsed)) return parsed.length > 0 ? parsed.join(', ') : '-'
    return String(parsed)
  } catch {
    return String(val)
  }
}

const Row = ({ label, value }: { label: string; value?: string | null | boolean }) => {
  let display: string
  if (value === null || value === undefined || value === '' || value === '[]') {
    display = '-'
  } else if (typeof value === 'boolean') {
    display = value ? 'Ya' : 'Tidak'
  } else {
    const parsed = parseArr(value)
    display = (parsed === '' || parsed === '-') ? '-' : parsed
  }
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

        {/* 1. Informasi Kontak */}
        <Section title="1. Informasi Kontak">
          <Row label="Nama" value={brief.contactName} />
          <Row label="Posisi" value={brief.contactPosition} />
          <Row label="Posisi Lainnya" value={brief.contactPositionOther} />
          <Row label="Email" value={brief.contactEmail} />
          <Row label="No. Telepon" value={brief.contactPhone} />
          <Row label="WhatsApp" value={brief.contactWhatsApp} />
          <Row label="Perusahaan" value={brief.companyName} />
          <Row label="Tahun Berdiri" value={brief.companyEstablished} />
          <Row label="Ukuran Perusahaan" value={brief.companySize} />
          <Row label="Industri" value={brief.industry} />
          <Row label="Industri Lainnya" value={brief.industryOther} />
          <Row label="Deskripsi Perusahaan" value={brief.companyDescription} />
          <Row label="Lokasi" value={brief.companyLocation} />
          <Row label="Website Lama" value={brief.companyWebsite} />
          <Row label="Social Media" value={brief.companySocialMedia} />
        </Section>

        {/* 2. Visi, Misi & Brand */}
        <Section title="2. Visi, Misi & Brand">
          <Row label="Visi" value={brief.vision} />
          <Row label="Misi" value={brief.mission} />
          <Row label="Nilai Inti" value={brief.coreValues} />
          <Row label="Nilai Inti Lainnya" value={brief.coreValuesOther} />
          <Row label="USP" value={brief.uniqueSellingProposition} />
          <Row label="Brand Personality" value={brief.brandPersonality} />
          <Row label="Brand Personality Lainnya" value={brief.brandPersonalityOther} />
        </Section>

        {/* 3. Target Audiens */}
        <Section title="3. Target Audiens">
          <Row label="Deskripsi" value={brief.targetAudienceDescription} />
          <Row label="Usia" value={brief.audienceAge} />
          <Row label="Gender" value={brief.audienceGender} />
          <Row label="Lokasi" value={brief.audienceLocation} />
          <Row label="Pendapatan" value={brief.audienceIncome} />
          <Row label="Pendidikan" value={brief.audienceEducation} />
          <Row label="Pekerjaan" value={brief.audienceOccupation} />
          <Row label="Minat" value={brief.audienceInterests} />
          <Row label="Pain Points" value={brief.audiencePainPoints} />
          <Row label="Perilaku" value={brief.audienceBehavior} />
          <Row label="Buying Journey" value={brief.audienceBuyingJourney} />
          <Row label="Tahapan Buying Journey" value={brief.audienceBuyingJourneySteps} />
        </Section>

        {/* 4. Kompetitor */}
        <Section title="4. Analisis Kompetitor">
          <Row label="Kompetitor Utama" value={brief.competitors} />
          <Row label="Kekuatan Kompetitor" value={brief.competitorStrengths} />
          <Row label="Kelemahan Kompetitor" value={brief.competitorWeaknesses} />
          <Row label="Diferensiasi" value={brief.differentiation} />
        </Section>

        {/* 5. Goals & KPI */}
        <Section title="5. Goals & KPI">
          <Row label="Goal Utama" value={brief.primaryGoal} />
          <Row label="Goal Utama Lainnya" value={brief.primaryGoalOther} />
          <Row label="Goal Sekunder" value={brief.secondaryGoals} />
          <Row label="Goal Sekunder Lainnya" value={brief.secondaryGoalsOther} />
          <Row label="KPI" value={brief.kpis} />
          <Row label="KPI Lainnya" value={brief.kpisOther} />
          <Row label="Metrik Sukses" value={brief.successMetrics} />
          <Row label="Timeline Goal" value={brief.timelineGoal} />
        </Section>

        {/* 6. Tipe Website */}
        <Section title="6. Tipe Website">
          <Row label="Tipe Website" value={brief.websiteType} />
          <Row label="Tipe Lainnya" value={brief.websiteTypeOther} />
          <Row label="Tujuan Website" value={brief.websitePurpose} />
          <Row label="Tujuan Lainnya" value={brief.websitePurposeOther} />
        </Section>

        {/* 7. Fitur */}
        <Section title="7. Fitur Website">
          <Row label="Fitur Utama" value={brief.coreFeatures} />
          <Row label="Fitur Custom" value={brief.customFeatures} />
          <Row label="Fitur Prioritas" value={brief.priorityFeatures} />
        </Section>

        {/* 8. E-Commerce */}
        <Section title="8. E-Commerce">
          <Row label="Ada E-Commerce" value={brief.hasEcommerce} />
          <Row label="Tipe Produk" value={brief.productTypes} />
          <Row label="Jumlah Produk" value={brief.productCount} />
          <Row label="Metode Pembayaran" value={brief.paymentMethods} />
          <Row label="Metode Pengiriman" value={brief.shippingMethods} />
          <Row label="Kebutuhan Pajak" value={brief.taxRequirements} />
          <Row label="Manajemen Inventori" value={brief.inventoryManagement} />
        </Section>

        {/* 9. Desain & Branding */}
        <Section title="9. Desain & Branding">
          <Row label="Gaya Desain" value={brief.designStyle} />
          <Row label="Gaya Lainnya" value={brief.designStyleOther} />
          <Row label="Palet Warna" value={brief.colorPalette} />
          <Row label="Warna Custom (Hex)" value={brief.customColorHex} />
          <Row label="Brand Guidelines" value={brief.existingBrandGuidelines} />
          <Row label="Logo Tersedia" value={brief.logoProvided} />
          <Row label="Nama File Logo" value={brief.logoFileName} />
          <Row label="Link Logo" value={brief.logoLink} />
          <Row label="Referensi Desain" value={brief.designReferences} />
          <Row label="Yang Dihindari" value={brief.designAvoid} />
        </Section>

        {/* 10. Struktur Halaman */}
        <Section title="10. Struktur Halaman">
          <Row label="Halaman" value={brief.pages} />
          <Row label="Halaman Custom" value={brief.customPages} />
          <Row label="Struktur Navigasi" value={brief.navigationStructure} />
          <Row label="Navigasi Lainnya" value={brief.navigationStructureOther} />
        </Section>

        {/* 11. Konten & Copywriting */}
        <Section title="11. Konten & Copywriting">
          <Row label="Konten Siap" value={brief.contentReady} />
          <Row label="Butuh Copywriting" value={brief.copywritingNeeded} />
          <Row label="Tone of Voice" value={brief.toneOfVoice} />
          <Row label="Tone Lainnya" value={brief.toneOfVoiceOther} />
          <Row label="Tipe Konten" value={brief.contentTypes} />
          <Row label="Konten Lainnya" value={brief.contentTypesOther} />
          <Row label="Kebutuhan Multimedia" value={brief.multimediaNeeds} />
          <Row label="Multimedia Lainnya" value={brief.multimediaNeedsOther} />
          <Row label="Butuh Fotografi" value={brief.photographyNeeded} />
          <Row label="Butuh Videografi" value={brief.videographyNeeded} />
        </Section>

        {/* 12. SEO & Marketing */}
        <Section title="12. SEO & Marketing">
          <Row label="SEO Dibutuhkan" value={brief.seoNeeded} />
          <Row label="Target Keywords" value={brief.targetKeywords} />
          <Row label="Keywords Custom" value={brief.customKeywords} />
          <Row label="Content Marketing" value={brief.contentMarketing} />
          <Row label="Email Marketing" value={brief.emailMarketing} />
          <Row label="Integrasi Social Media" value={brief.socialMediaIntegration} />
          <Row label="Social Media Lainnya" value={brief.socialMediaOther} />
          <Row label="Analytics" value={brief.analyticsNeeded} />
          <Row label="Analytics Lainnya" value={brief.analyticsOther} />
        </Section>

        {/* 13. Teknis */}
        <Section title="13. Kebutuhan Teknis">
          <Row label="Status Domain" value={brief.domainStatus} />
          <Row label="Preferensi Hosting" value={brief.hostingPreference} />
          <Row label="Hosting Lainnya" value={brief.hostingPreferenceOther} />
          <Row label="Kebutuhan Performa" value={brief.performanceRequirements} />
          <Row label="Aksesibilitas" value={brief.accessibilityNeeds} />
          <Row label="Aksesibilitas Lainnya" value={brief.accessibilityNeedsOther} />
          <Row label="Browser Support" value={brief.browserSupport} />
          <Row label="Browser Lainnya" value={brief.browserSupportOther} />
          <Row label="Device Support" value={brief.deviceSupport} />
        </Section>

        {/* 14. Integrasi */}
        <Section title="14. Integrasi">
          <Row label="Integrasi" value={brief.integrations} />
          <Row label="Integrasi Lainnya" value={brief.integrationsOther} />
          <Row label="Integrasi Custom" value={brief.customIntegrations} />
          <Row label="Kebutuhan API" value={brief.apiRequirements} />
        </Section>

        {/* 15. Keamanan */}
        <Section title="15. Keamanan & Compliance">
          <Row label="Kebutuhan Keamanan" value={brief.securityRequirements} />
          <Row label="Keamanan Lainnya" value={brief.securityRequirementsOther} />
          <Row label="Proteksi Data" value={brief.dataProtection} />
          <Row label="Compliance" value={brief.complianceNeeds} />
          <Row label="Compliance Lainnya" value={brief.complianceNeedsOther} />
          <Row label="SSL Dibutuhkan" value={brief.sslNeeded} />
        </Section>

        {/* 16. Timeline */}
        <Section title="16. Timeline">
          <Row label="Target Launch" value={brief.desiredLaunchDate} />
          <Row label="Timeline Fleksibel" value={brief.timelineFlexible} />
          <Row label="Milestones" value={brief.milestones} />
          <Row label="Rush Project" value={brief.rushProject} />
        </Section>

        {/* 17. Budget */}
        <Section title="17. Budget">
          <Row label="Range Budget" value={brief.budgetRange} />
          <Row label="Budget Fleksibel" value={brief.budgetFlexible} />
          <Row label="Terms Pembayaran" value={brief.paymentTerms} />
          <Row label="Terms Lainnya" value={brief.paymentTermsOther} />
          <Row label="Budget Tambahan" value={brief.additionalBudget} />
        </Section>

        {/* 18. Maintenance */}
        <Section title="18. Maintenance & Support">
          <Row label="Butuh Maintenance" value={brief.maintenanceNeeded} />
          <Row label="Level Maintenance" value={brief.maintenanceLevel} />
          <Row label="Maintenance Lainnya" value={brief.maintenanceLevelOther} />
          <Row label="Butuh Training" value={brief.trainingNeeded} />
          <Row label="Butuh Dokumentasi" value={brief.documentationNeeded} />
        </Section>

        {/* 19. Legal */}
        <Section title="19. Legal & Compliance">
          <Row label="Kebutuhan Legal" value={brief.legalRequirements} />
          <Row label="Privacy Policy" value={brief.privacyPolicyNeeded} />
          <Row label="Terms of Service" value={brief.termsOfServiceNeeded} />
          <Row label="Cookie Policy" value={brief.cookiePolicyNeeded} />
          <Row label="GDPR Compliance" value={brief.gdprCompliance} />
        </Section>

        {/* 20. Content UX */}
        <Section title="20. Content & UX Strategy">
          <Row label="Hierarki Konten" value={brief.contentHierarchy} />
          <Row label="CTA Strategy" value={brief.ctaStrategy} />
          <Row label="User Flow" value={brief.userFlow} />
          <Row label="Emotional Response" value={brief.emotionalResponse} />
          <Row label="Emotional Lainnya" value={brief.emotionalResponseOther} />
          <Row label="Success Stories" value={brief.successStories} />
        </Section>

        {/* 21. Project Management */}
        <Section title="21. Project Management">
          <Row label="Aset yang Ada" value={brief.existingAssets} />
          <Row label="Pain Points Website Lama" value={brief.oldSitePainPoints} />
          <Row label="Target Training" value={brief.trainingAudience} />
          <Row label="Preferensi Komunikasi" value={brief.communicationPrefs} />
        </Section>

        {/* 22. Tech Ops */}
        <Section title="22. Technical Operations">
          <Row label="Multi-Role Users" value={brief.multiRoleUsers} />
          <Row label="Lokalisasi" value={brief.localization} />
          <Row label="Offline Integration" value={brief.offlineIntegration} />
          <Row label="Migrasi Data" value={brief.dataMigration} />
          <Row label="Backup Strategy" value={brief.backupStrategy} />
          <Row label="Performance Benchmarks" value={brief.performanceBenchmarks} />
          <Row label="Aksesibilitas Spesifik" value={brief.accessibilitySpecifics} />
        </Section>

        {/* 23. Growth */}
        <Section title="23. Growth & Extras">
          <Row label="Future Roadmap" value={brief.futureRoadmap} />
          <Row label="Rencana Skalabilitas" value={brief.scalabilityPlans} />
          <Row label="A/B Testing" value={brief.abTesting} />
          <Row label="Print Consistency" value={brief.printConsistency} />
          <Row label="Partnership" value={brief.partnership} />
          <Row label="Notifikasi" value={brief.notificationPrefs} />
        </Section>

        {/* 24. Catatan Tambahan */}
        <Section title="24. Catatan Tambahan">
          <Row label="Catatan" value={brief.additionalNotes} />
          <Row label="Dari Mana Tahu" value={brief.howHeardAboutUs} />
          <Row label="Dari Mana Lainnya" value={brief.howHeardAboutUsOther} />
          <Row label="Nama Referral" value={brief.referralName} />
        </Section>

        {/* Footer */}
        <Text style={styles.footer}>
          Dokumen ini dibuat otomatis — {new Date().toLocaleDateString('id-ID')}
        </Text>
      </Page>
    </Document>
  )
}