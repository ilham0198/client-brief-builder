export default function StepHeader({ stepNumber, totalSteps, title, description, icon: Icon }: any) {
  return (
    <div className="mb-12">
      <div className="text-sm font-medium text-apple-gray-500 mb-3">Langkah {stepNumber} dari {totalSteps}</div>
      <h2 className="text-5xl font-bold tracking-tight mb-4">{title}</h2>
      {description && <p className="text-xl text-apple-gray-500 font-light">{description}</p>}
    </div>
  )
}