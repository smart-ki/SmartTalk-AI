import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="SmartTalk AI" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
              <span className="font-bold text-white text-lg">
                SmartTalk <span className="text-[#F5821F]">AI</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Praxisnahe KI-Bildung für Berufsleute und KMU in der Zentralschweiz. Ein Angebot von SmartTalk.
            </p>
          </div>

          {/* Kurse */}
          <div>
            <h3 className="font-semibold text-white mb-4">Unsere Kurse</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kurse/ki-einstieg" className="hover:text-[#F5821F] transition-colors">KI-Einstieg</Link></li>
              <li><Link href="/kurse/ki-im-arbeitsalltag" className="hover:text-[#F5821F] transition-colors">KI im Arbeitsalltag</Link></li>
              <li><Link href="/kurse/prompting-profi" className="hover:text-[#F5821F] transition-colors">Prompting Profi</Link></li>
              <li><Link href="/kurse/datenschutz-ethik" className="hover:text-[#F5821F] transition-colors">Datenschutz & Ethik</Link></li>
              <li><Link href="/kurse/ki-strategie" className="hover:text-[#F5821F] transition-colors">KI-Strategie</Link></li>
              <li><Link href="/kurse/ki-bildung" className="hover:text-[#F5821F] transition-colors">KI in der Bildung</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div id="kontakt">
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:jeannine.germann@smarttalk.ch" className="hover:text-[#F5821F] transition-colors">
                  jeannine.germann@smarttalk.ch
                </a>
              </li>
              <li className="text-gray-400">SmartTalk AI</li>
              <li className="text-gray-400">Zentralschweiz</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SmartTalk AI. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/datenschutz" className="hover:text-[#F5821F] transition-colors">Datenschutz</Link>
            <Link href="/impressum" className="hover:text-[#F5821F] transition-colors">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
