'use client'
import { BriefData } from '@/app/brief/page'
import { ShoppingCart, CreditCard, Truck, Package } from 'lucide-react'

export default function Step8Ecommerce({ data, update, stepNumber, totalSteps }: { data: BriefData; update: (p: any) => void; stepNumber?: number; totalSteps?: number }) {
  const PAYMENT_METHODS = [
    'Bank Transfer', 'Credit Card', 'Debit Card', 'E-Wallet (OVO, GoPay, Dana)',
    'QRIS', 'Virtual Account', 'COD (Cash on Delivery)', 'PayLater',
    'Cryptocurrency', 'International Payment (PayPal, Stripe)'
  ]

  const SHIPPING_METHODS = [
    'JNE', 'J&T', 'SiCepat', 'Anteraja', 'POS Indonesia', 'GoSend', 'GrabExpress',
    'Lalamove', 'Same day delivery', 'Instant courier', 'Pickup di toko', 'Free shipping'
  ]

  const togglePayment = (p: string) => {
    const list: string[] = data.paymentMethods || []
    update({ paymentMethods: list.includes(p) ? list.filter(x => x !== p) : [...list, p] })
  }

  const toggleShipping = (s: string) => {
    const list: string[] = data.shippingMethods || []
    update({ shippingMethods: list.includes(s) ? list.filter(x => x !== s) : [...list, s] })
  }

  if (!data.hasEcommerce) {
    return (
      <div className="fade-in">
        <div className="mb-12">
          <div className="text-sm font-medium text-apple-gray-500 mb-3">Langkah 8 dari 20</div>
          <h2 className="text-5xl font-bold tracking-tight mb-4">E-Commerce</h2>
          <p className="text-xl text-apple-gray-500 font-light">Apakah website Anda akan memiliki fitur jual beli online?</p>
        </div>

        <div className="flex items-center gap-4 p-8 rounded-3xl bg-apple-gray-100">
          <input
            type="checkbox"
            checked={data.hasEcommerce || false}
            onChange={e => update({ hasEcommerce: e.target.checked })}
            className="w-6 h-6 rounded accent-black"
          />
          <div>
            <div className="text-xl font-semibold">Ya, website ini akan memiliki fitur e-commerce</div>
            <div className="text-apple-gray-500 mt-1">Klik checkbox jika Anda ingin menjual produk/jasa online</div>
          </div>
        </div>

        <div className="mt-8 text-center text-apple-gray-400">
          Langkah ini akan detail jika Anda mencentang opsi di atas.
        </div>
      </div>
    )
  }

  return (
    <div className="fade-in">
      <div className="mb-12">
        <div className="text-sm font-medium text-apple-gray-500 mb-3">Langkah 8 dari 20</div>
        <h2 className="text-5xl font-bold tracking-tight mb-4">E-Commerce</h2>
        <p className="text-xl text-apple-gray-500 font-light">Detail lengkap untuk toko online Anda.</p>
      </div>

      <div className="space-y-10">
        <div className="flex items-start gap-4">
          <Package className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1 space-y-6">
            <div>
              <label className="block text-xl font-semibold mb-2">Jenis Produk</label>
              <p className="text-apple-gray-500 mb-4">Apa yang akan Anda jual?</p>
              <textarea
                value={data.productTypes || ''}
                onChange={e => update({ productTypes: e.target.value })}
                placeholder="Contoh: Fashion wanita (baju, celana, aksesoris), Elektronik (smartphone, laptop, aksesoris), Makanan & minuman..."
                rows={3}
                className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none"
              />
            </div>

            <div>
              <label className="block text-xl font-semibold mb-2">Jumlah Produk (Estimasi)</label>
              <p className="text-apple-gray-500 mb-4">Berapa banyak produk yang akan dijual?</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {['<50', '50-200', '200-1000', '1000-5000', '5000+'].map(count => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => update({ productCount: count })}
                    className={`px-4 py-4 rounded-2xl font-medium transition-all ${
                      data.productCount === count
                        ? 'bg-black text-white'
                        : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <CreditCard className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Metode Pembayaran</label>
            <p className="text-apple-gray-500 mb-4">Pilih semua metode pembayaran yang ingin Anda sediakan.</p>
            <div className="grid md:grid-cols-2 gap-3">
              {PAYMENT_METHODS.map(p => (
                <label
                  key={p}
                  className={`flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    (data.paymentMethods || []).includes(p)
                      ? 'border-black bg-apple-gray-50'
                      : 'border-apple-gray-200 hover:border-apple-gray-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={(data.paymentMethods || []).includes(p)}
                    onChange={() => togglePayment(p)}
                    className="w-5 h-5 rounded accent-black"
                  />
                  <span className="font-medium">{p}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Truck className="w-6 h-6 text-apple-gray-400 mt-4 flex-shrink-0" />
          <div className="flex-1">
            <label className="block text-xl font-semibold mb-2">Metode Pengiriman</label>
            <p className="text-apple-gray-500 mb-4">Pilih semua opsi pengiriman yang tersedia.</p>
            <div className="grid md:grid-cols-2 gap-3">
              {SHIPPING_METHODS.map(s => (
                <label
                  key={s}
                  className={`flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    (data.shippingMethods || []).includes(s)
                      ? 'border-black bg-apple-gray-50'
                      : 'border-apple-gray-200 hover:border-apple-gray-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={(data.shippingMethods || []).includes(s)}
                    onChange={() => toggleShipping(s)}
                    className="w-5 h-5 rounded accent-black"
                  />
                  <span className="font-medium">{s}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xl font-semibold mb-2">Persyaratan Pajak</label>
            <p className="text-apple-gray-500 mb-4">PPN, PPh, atau pajak lainnya?</p>
            <textarea
              value={data.taxRequirements || ''}
              onChange={e => update({ taxRequirements: e.target.value })}
              placeholder="Contoh: PPN 11% untuk semua produk, PPh 23 untuk jasa..."
              rows={3}
              className="w-full px-6 py-4 text-lg rounded-2xl bg-apple-gray-100 border-2 border-transparent focus:bg-white focus:border-black transition-all resize-none"
            />
          </div>

          <div className="flex items-center gap-4 p-6 rounded-2xl bg-apple-gray-100">
            <input
              type="checkbox"
              checked={data.inventoryManagement || false}
              onChange={e => update({ inventoryManagement: e.target.checked })}
              className="w-6 h-6 rounded accent-black"
            />
            <div>
              <div className="font-semibold">Butuh sistem manajemen inventory?</div>
              <div className="text-apple-gray-500 text-sm mt-1">Tracking stok, low stock alert, dll</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
