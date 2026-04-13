'use client'

import { useState } from 'react'

interface Props {
  kursTitel: string
  kursSlug: string
}

export default function BuchungsFormular({ kursTitel, kursSlug }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    telefon: '',
    firma: '',
    format: 'Präsenzkurs',
    personen: '1',
    nachricht: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/buchen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, kursTitel, kursSlug }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', telefon: '', firma: '', format: 'Präsenzkurs', personen: '1', nachricht: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Anfrage gesendet!</h3>
        <p className="text-gray-600">
          Vielen Dank für deine Buchungsanfrage. Wir melden uns innerhalb von 1–2 Arbeitstagen.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Name <span className="text-[#F5821F]">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Vorname Nachname"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            E-Mail <span className="text-[#F5821F]">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="name@beispiel.ch"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Telefon <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="tel"
            name="telefon"
            value={form.telefon}
            onChange={handleChange}
            placeholder="+41 79 000 00 00"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Firma / Organisation <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            name="firma"
            value={form.firma}
            onChange={handleChange}
            placeholder="Firmenname"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Format</label>
          <select
            name="format"
            value={form.format}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent bg-white"
          >
            <option>Präsenzkurs</option>
            <option>Online</option>
            <option>Firmenkurs (Inhouse)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Anzahl Personen</label>
          <select
            name="personen"
            value={form.personen}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent bg-white"
          >
            {['1', '2', '3', '4', '5', '6–10', '11–20', '20+'].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Nachricht / Fragen <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          name="nachricht"
          value={form.nachricht}
          onChange={handleChange}
          rows={4}
          placeholder="Bevorzugte Termine, Fragen zum Kurs, spezielle Wünsche..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Beim Senden ist ein Fehler aufgetreten. Bitte schreib uns direkt an{' '}
          <a href="mailto:jeannine.germann@smarttalk.ch" className="underline">
            jeannine.germann@smarttalk.ch
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Wird gesendet…' : 'Buchungsanfrage senden'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Wir melden uns innerhalb von 1–2 Arbeitstagen. Keine Verpflichtung.
      </p>
    </form>
  )
}
