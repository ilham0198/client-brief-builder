'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Eye, Mail, Calendar, DollarSign } from 'lucide-react'

export default function Admin() {
  const [briefs, setBriefs] = useState<any[]>([])
  const [auth, setAuth] = useState(false)
  const [pwd, setPwd] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem('admin') === '1') setAuth(true)
  }, [])

  useEffect(() => {
    if (auth) {
      fetch('/api/briefs')
        .then(r => r.json())
        .then(data => {
          // Pastikan data adalah array
          if (Array.isArray(data)) {
            setBriefs(data)
          } else {
            console.error('API tidak mengembalikan array:', data)
            setBriefs([])
          }
        })
        .catch(err => {
          console.error('Gagal fetch briefs:', err)
          setBriefs([])
        })
    }
  }, [auth])

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full">
          <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
          <input
            type="password"
            value={pwd}
            onChange={e => setPwd(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                if (pwd === process.env.NEXT_PUBLIC_ADMIN_SECRET || pwd === 'admin123') {
                  sessionStorage.setItem('admin', '1'); setAuth(true)
                } else alert('Password salah')
              }
            }}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border mb-4"
          />
          <button
            onClick={() => {
              if (pwd === 'admin123') {
                sessionStorage.setItem('admin', '1'); setAuth(true)
              } else alert('Password salah')
            }}
            className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition-all"
          >
            Masuk
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Brief Masuk</h1>
      <div className="grid gap-4">
        {briefs.map(b => (
          <div key={b.id} className="bg-white p-5 rounded-xl shadow border flex items-center justify-between">
            <div>
              <div className="font-bold text-lg">{b.contactName || '—'} — {b.companyName || 'N/A'}</div>
              <div className="flex gap-4 text-sm text-slate-600 mt-1">
                <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {b.contactEmail || '-'}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(b.createdAt).toLocaleDateString('id-ID')}</span>
                <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" /> {b.budgetRange || '-'}</span>
              </div>
              <div className="text-sm mt-1">Jenis: <b>{b.websiteType || '-'}</b></div>
            </div>
            <Link href={`/admin/${b.id}`} className="px-4 py-2 rounded-lg bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition-all">
              <Eye className="w-4 h-4" /> Detail
            </Link>
          </div>
        ))}
        {briefs.length === 0 && (
          <div className="text-center text-slate-500 py-10">Belum ada brief masuk.</div>
        )}
      </div>
    </div>
  )
}