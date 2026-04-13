import Link from 'next/link'
import type { Kurs } from '@/data/kurse'

export default function KursCard({ kurs }: { kurs: Kurs }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden group">
      {/* Top accent bar */}
      <div className="h-1.5 bg-[#F5821F]" />

      <div className="p-6 flex flex-col flex-1">
        {/* Level badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${kurs.levelFarbe}`}>
            {kurs.level}
          </span>
          <span className="text-xs text-gray-400 font-medium">Kurs {kurs.nummer}</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-gray-900 leading-snug mb-2 group-hover:text-[#F5821F] transition-colors">
          {kurs.titel}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-[#6B6B6B] italic mb-4">{kurs.untertitel}</p>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">
          {kurs.kurzbeschreibung}
        </p>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-5 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#F5821F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {kurs.dauer}
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#F5821F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {kurs.zielgruppe}
          </div>
          <div className="flex items-center gap-1.5 col-span-2">
            <svg className="w-3.5 h-3.5 text-[#F5821F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {kurs.format}
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-wide">ab</span>
            <span className="block text-xl font-bold text-gray-900">{kurs.preisAb}</span>
          </div>
          <Link
            href={`/kurse/${kurs.slug}`}
            className="btn-primary text-sm py-2.5 px-5"
          >
            Mehr & Buchen
          </Link>
        </div>
      </div>
    </div>
  )
}
