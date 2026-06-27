interface AppleDateProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function AppleDate({ value, onChange, placeholder = 'Pilih tanggal...' }: AppleDateProps) {
  return (
    <div className="relative">
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-5 py-4 text-base rounded-xl bg-apple-gray-100 border border-apple-gray-200 transition-all hover:bg-apple-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black"
      />
    </div>
  )
}