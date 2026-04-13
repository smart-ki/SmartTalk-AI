import Link from 'next/link'
import KursCard from '@/components/KursCard'
import { kurse } from '@/data/kurse'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-[#F5821F] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#F5821F] rounded-full animate-pulse" />
            Neu: KI-Bildung für Schweizer KMU
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            KI verstehen. KI anwenden.{' '}
            <span className="text-[#F5821F]">KI erfolgreich nutzen.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Praxisnahe KI-Kurse für Berufsleute, KMU und Bildungsinstitutionen in der Zentralschweiz –
            vom ersten Schritt bis zur strategischen Umsetzung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#angebote" className="btn-primary text-base px-8 py-4">
              Alle Kurse entdecken
            </Link>
            <a href="mailto:jeannine.germann@smarttalk.ch" className="btn-outline text-base px-8 py-4">
              Beratungsgespräch anfragen
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Kein Vorwissen nötig · Präsenz und Online · Firmenkurse buchbar
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-gray-100 bg-white py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-medium">
            {[
              { icon: '🎯', text: '6 praxisnahe Kurse' },
              { icon: '🏢', text: 'Firmenkurse auf Anfrage' },
              { icon: '📍', text: 'Zentralschweiz & Online' },
              { icon: '✅', text: 'Kein IT-Vorwissen nötig' },
              { icon: '🤝', text: 'Aus eigener KMU-Erfahrung' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kursangebote */}
      <section id="angebote" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Unsere Kursangebote
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Von den Grundlagen bis zur strategischen KI-Einführung – der passende Kurs für jede Stufe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kurse.map((kurs) => (
              <KursCard key={kurs.slug} kurs={kurs} />
            ))}
          </div>
        </div>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Warum SmartTalk AI?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                SmartTalk AI ist kein Kursanbieter von der Stange. Wir haben KI selbst in unserem Unternehmen
                eingeführt – mit echten Herausforderungen, echten Lösungen und echtem Mehrwert.
                Diese Erfahrung geben wir direkt weiter.
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Praxis statt Theorie: Alle Kurse basieren auf gelebter KI-Erfahrung',
                  'Regional verankert: Wir kennen die Zentralschweizer KMU-Welt',
                  'Verständlich: Kein Fachjargon, dafür sofort anwendbares Wissen',
                  'Massgeschneidert: Firmenkurse angepasst an eure Prozesse',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#F5821F] mt-0.5">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="SmartTalk AI" style={{ width: '100px', height: '100px', objectFit: 'contain', margin: '0 auto 24px' }} />
              <p className="text-lg font-bold text-gray-900 mb-1">SmartTalk AI</p>
              <p className="text-sm text-gray-500 mb-4">Ein Angebot von SmartTalk · Zentralschweiz</p>
              <a
                href="mailto:jeannine.germann@smarttalk.ch"
                className="btn-primary text-sm py-2.5 px-6"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#F5821F] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Firmenkurs für dein Team?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Wir kommen zu euch – massgeschneidert, praxisnah und direkt auf eure Prozesse abgestimmt.
            Gruppen ab 6 Personen.
          </p>
          <a
            href="mailto:jeannine.germann@smarttalk.ch?subject=Anfrage Firmenkurs SmartTalk AI"
            className="bg-white text-[#F5821F] font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors inline-block text-base"
          >
            Firmenkurs anfragen
          </a>
        </div>
      </section>
    </>
  )
}
