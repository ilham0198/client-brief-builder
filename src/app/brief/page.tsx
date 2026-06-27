'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, Send } from 'lucide-react'
import StepIndicator from '@/components/StepIndicator'
import Step1BusinessProfile from '@/components/steps/Step1BusinessProfile'
import Step2VisionMission from '@/components/steps/Step2VisionMission'
import Step3TargetAudience from '@/components/steps/Step3TargetAudience'
import Step4CompetitorAnalysis from '@/components/steps/Step4CompetitorAnalysis'
import Step5GoalsKPI from '@/components/steps/Step5GoalsKPI'
import Step6WebsiteType from '@/components/steps/Step6WebsiteType'
import Step7CoreFeatures from '@/components/steps/Step7CoreFeatures'
import Step8Ecommerce from '@/components/steps/Step8Ecommerce'
import Step9DesignBranding from '@/components/steps/Step9DesignBranding'
import Step10PageStructure from '@/components/steps/Step10PageStructure'
import Step11ContentCopy from '@/components/steps/Step11ContentCopy'
import Step12SEOMarketing from '@/components/steps/Step12SEOMarketing'
import Step13Technical from '@/components/steps/Step13Technical'
import Step14Integrations from '@/components/steps/Step14Integrations'
import Step15Security from '@/components/steps/Step15Security'
import Step16Timeline from '@/components/steps/Step16Timeline'
import Step17Budget from '@/components/steps/Step17Budget'
import Step18Maintenance from '@/components/steps/Step18Maintenance'
import Step19Legal from '@/components/steps/Step19Legal'
import Step21ContentUX from '@/components/steps/Step21ContentUX'
import Step22ProjectMgmt from '@/components/steps/Step22ProjectMgmt'
import Step23TechOps from '@/components/steps/Step23TechOps'
import Step24GrowthExtras from '@/components/steps/Step24GrowthExtras'
import Step25Review from '@/components/steps/Step25Review'

export type BriefData = Record<string, any>

const TOTAL_STEPS = 24

const INITIAL: BriefData = {
  companyName: '', companyEstablished: '', companySize: '', industry: '', industryOther: '',
  companyDescription: '', companyLocation: '', companyWebsite: '', companySocialMedia: '',
  contactName: '', contactPosition: '', contactPositionOther: '', contactEmail: '', contactPhone: '', contactWhatsApp: '',
  vision: '', mission: '', coreValues: [], uniqueSellingProposition: '', brandPersonality: '', brandPersonalityOther: '',
  targetAudienceDescription: '', audienceAge: '', audienceGender: '', audienceLocation: '',
  audienceIncome: '', audienceEducation: '', audienceOccupation: '', audienceInterests: '',
  audiencePainPoints: '', audienceBehavior: '', audienceBuyingJourney: '', audienceBuyingJourneySteps: [],
  competitors: '', competitorStrengths: '', competitorWeaknesses: '', differentiation: '',
  primaryGoal: '', primaryGoalOther: '', secondaryGoals: [], secondaryGoalsOther: '', kpis: [], kpisOther: '', successMetrics: '', timelineGoal: '',
  websiteType: '', websiteTypeOther: '', websitePurpose: [], websitePurposeOther: '',
  coreFeatures: [], customFeatures: '', priorityFeatures: [],
  hasEcommerce: false, productTypes: '', productCount: '', paymentMethods: [],
  shippingMethods: [], taxRequirements: '', inventoryManagement: false,
  designStyle: '', designStyleOther: '', colorPalette: [], customColorHex: '', customColorPicker: '#000000', existingBrandGuidelines: '', logoProvided: false, logoFileName: '', logoLink: '',
  designReferences: [], designAvoid: '',
  pages: [], customPages: '', navigationStructure: '',
  contentReady: '', copywritingNeeded: false, toneOfVoice: '', toneOfVoiceOther: '',
  contentTypes: [], contentTypesOther: '', multimediaNeeds: [], multimediaNeedsOther: '', photographyNeeded: false, videographyNeeded: false,
  seoNeeded: false, targetKeywords: [], customKeywords: '', contentMarketing: false,
  emailMarketing: false, socialMediaIntegration: [], socialMediaOther: '', analyticsNeeded: [], analyticsOther: '',
  domainStatus: '', hostingPreference: '', hostingPreferenceOther: '', performanceRequirements: '', accessibilityNeeds: '',
  browserSupport: [], deviceSupport: [],
  integrations: [], customIntegrations: '', apiRequirements: '',
  securityRequirements: [], dataProtection: '', complianceNeeds: [], sslNeeded: true,
  desiredLaunchDate: '', timelineFlexible: false, milestones: '', rushProject: false,
  budgetRange: '', budgetFlexible: false, paymentTerms: '', paymentTermsOther: '', additionalBudget: '',
  maintenanceNeeded: false, maintenanceLevel: '', maintenanceLevelOther: '', trainingNeeded: false, documentationNeeded: false,
  legalRequirements: '', privacyPolicyNeeded: false, termsOfServiceNeeded: false,
  cookiePolicyNeeded: false, gdprCompliance: false,
  contentHierarchy: '', ctaStrategy: '', userFlow: '', emotionalResponse: [], successStories: '',
  existingAssets: [], oldSitePainPoints: '', trainingAudience: '', communicationPrefs: '',
  multiRoleUsers: '', localization: '', offlineIntegration: '', dataMigration: '',
  backupStrategy: '', performanceBenchmarks: '', accessibilitySpecifics: '',
  futureRoadmap: '', scalabilityPlans: '', abTesting: '', printConsistency: '',
  partnership: '', notificationPrefs: [],
  additionalNotes: '', howHeardAboutUs: '', howHeardAboutUsOther: '', referralName: '',
}

export default function BriefPage() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<BriefData>(INITIAL)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const update = (patch: Partial<BriefData>) => setData(d => ({ ...d, ...patch }))

  const steps = [
    <Step1BusinessProfile key={0} data={data} update={update} stepNumber={1} totalSteps={TOTAL_STEPS} />,
    <Step2VisionMission key={1} data={data} update={update} stepNumber={2} totalSteps={TOTAL_STEPS} />,
    <Step3TargetAudience key={2} data={data} update={update} stepNumber={3} totalSteps={TOTAL_STEPS} />,
    <Step4CompetitorAnalysis key={3} data={data} update={update} stepNumber={4} totalSteps={TOTAL_STEPS} />,
    <Step5GoalsKPI key={4} data={data} update={update} stepNumber={5} totalSteps={TOTAL_STEPS} />,
    <Step6WebsiteType key={5} data={data} update={update} stepNumber={6} totalSteps={TOTAL_STEPS} />,
    <Step7CoreFeatures key={6} data={data} update={update} stepNumber={7} totalSteps={TOTAL_STEPS} />,
    <Step8Ecommerce key={7} data={data} update={update} stepNumber={8} totalSteps={TOTAL_STEPS} />,
    <Step9DesignBranding key={8} data={data} update={update} stepNumber={9} totalSteps={TOTAL_STEPS} />,
    <Step10PageStructure key={9} data={data} update={update} stepNumber={10} totalSteps={TOTAL_STEPS} />,
    <Step11ContentCopy key={10} data={data} update={update} stepNumber={11} totalSteps={TOTAL_STEPS} />,
    <Step12SEOMarketing key={11} data={data} update={update} stepNumber={12} totalSteps={TOTAL_STEPS} />,
    <Step13Technical key={12} data={data} update={update} stepNumber={13} totalSteps={TOTAL_STEPS} />,
    <Step14Integrations key={13} data={data} update={update} stepNumber={14} totalSteps={TOTAL_STEPS} />,
    <Step15Security key={14} data={data} update={update} stepNumber={15} totalSteps={TOTAL_STEPS} />,
    <Step16Timeline key={15} data={data} update={update} stepNumber={16} totalSteps={TOTAL_STEPS} />,
    <Step17Budget key={16} data={data} update={update} stepNumber={17} totalSteps={TOTAL_STEPS} />,
    <Step18Maintenance key={17} data={data} update={update} stepNumber={18} totalSteps={TOTAL_STEPS} />,
    <Step19Legal key={18} data={data} update={update} stepNumber={19} totalSteps={TOTAL_STEPS} />,
    <Step21ContentUX key={19} data={data} update={update} stepNumber={20} totalSteps={TOTAL_STEPS} />,
    <Step22ProjectMgmt key={20} data={data} update={update} stepNumber={21} totalSteps={TOTAL_STEPS} />,
    <Step23TechOps key={21} data={data} update={update} stepNumber={22} totalSteps={TOTAL_STEPS} />,
    <Step24GrowthExtras key={22} data={data} update={update} stepNumber={23} totalSteps={TOTAL_STEPS} />,
    <Step25Review key={23} data={data} update={update} stepNumber={24} totalSteps={TOTAL_STEPS} />,
  ]

  const next = () => { setError(''); setStep(s => Math.min(s + 1, TOTAL_STEPS - 1)) }
  const prev = () => { setError(''); setStep(s => Math.max(s - 1, 0)) }

  const submit = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/briefs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (!res.ok) throw new Error(result.error || 'Gagal mengirim brief')
      router.push(`/success?id=${result.id}`)
    } catch (e: any) {
      console.error('Submit error:', e)
      setError(e.message || 'Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-apple-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <StepIndicator current={step} />
        <div className="bg-white rounded-3xl shadow-apple p-12 md:p-16 fade-in">
          {steps[step]}
          {error && (
            <div className="mt-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700">
              <div className="font-semibold mb-1">Terjadi kesalahan:</div>
              <div className="text-sm">{error}</div>
            </div>
          )}
          <div className="flex justify-between mt-16 pt-8 border-t border-apple-gray-200">
            <button onClick={prev} disabled={step === 0} className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-apple-gray-500 hover:bg-apple-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              <ArrowLeft className="w-4 h-4" /> Kembali
            </button>
            {step < TOTAL_STEPS - 1 ? (
              <button onClick={next} className="flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-apple-gray-800 transition-all shadow-apple">
                Lanjut <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button onClick={submit} disabled={loading} className="flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-apple-gray-800 transition-all shadow-apple disabled:opacity-50">
                <Send className="w-4 h-4" /> {loading ? 'Mengirim...' : 'Kirim Brief'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}