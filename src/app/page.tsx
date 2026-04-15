import Link from 'next/link'
import KursCard from '@/components/KursCard'
import KontaktFormular from '@/components/KontaktFormular'
import { kurse } from '@/data/kurse'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-[#F5821F] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#F5821F] rounded-full animate-pulse" />
            KI-Bildung für Menschen in der Zentralschweiz
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Nicht die KI macht den Unterschied.{' '}
            <span className="text-[#F5821F]">Du machst den Unterschied.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4 max-w-2xl mx-auto">
            KI ist unser Werkzeug – du bleibst der Mensch dahinter.
            Wir helfen dir, KI selbstbestimmt, sicher und wirkungsvoll einzusetzen:
            im Job, im Team und im Alltag.
          </p>
          <p className="text-base text-gray-500 mb-8 max-w-xl mx-auto">
            Für Privatpersonen, Berufsleute und Unternehmen in der Zentralschweiz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#angebote" className="btn-primary text-base px-8 py-4">
              Kurs für mich finden
            </Link>
            <Link href="#kontakt" className="btn-outline text-base px-8 py-4">
              Persönliche Beratung anfragen
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Kein Vorwissen nötig · Offen für alle · Firmenkurse buchbar
          </p>
        </div>
      </section>

      {/* Manifest-Banner */}
      <section className="bg-gray-900 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl sm:text-2xl font-semibold text-white leading-relaxed">
            «KI ersetzt dich nicht – sie{' '}
            <span className="text-[#F5821F]">verstärkt</span> dich.
            Wir zeigen dir wie.»
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-gray-100 bg-white py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-medium">
            {[
              { icon: '🙋', text: 'Offen für Privatpersonen' },
              { icon: '🏢', text: 'Firmenkurse auf Anfrage' },
              { icon: '📍', text: 'Zentralschweiz & Online' },
              { icon: '✅', text: 'Kein Vorwissen nötig' },
              { icon: '💡', text: 'Mensch im Mittelpunkt' },
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
              Dein nächster Schritt mit KI
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Vom ersten Kennenlernen bis zur strategischen Umsetzung –
              wir begleiten dich auf deinem ganz persönlichen KI-Weg.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kurse.map((kurs) => (
              <KursCard key={kurs.slug} kurs={kurs} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section id="ueber-uns" className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Der Mensch im Mittelpunkt
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bei SmartTalk AI glauben wir: KI ist ein mächtiges Werkzeug –
                aber ein Werkzeug braucht einen Menschen, der es versteht und einsetzt.
                Unsere Kurse machen dich nicht zum Techniker. Sie machen dich
                zu jemandem, der KI souverän nutzt, um besser zu werden.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Wir haben KI selbst in unserem Unternehmen eingeführt – mit
                echten Herausforderungen, Fehlern und Erfolgen. Diese Erfahrung
                geben wir direkt weiter. Kein Fachjargon, keine Theorie ohne
                Praxis, kein Angstmachen – dafür echtes Handwerkszeug für deinen Alltag.
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Du bestimmst, wie viel KI in deinem Leben Platz hat',
                  'Wir stärken deine Kompetenz – nicht deine Abhängigkeit',
                  'Praxisnah: Übungen mit deinen eigenen Aufgaben',
                  'Regional verankert: Wir kennen die Zentralschweizer Arbeitswelt',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#F5821F] mt-0.5 shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              {[
                {
                  emoji: '🙋',
                  titel: 'Für Privatpersonen',
                  text: 'Du möchtest KI für dich persönlich nutzen – im Job, im Alltag oder für deine Weiterentwicklung. Unsere offenen Kurse sind genau dafür gemacht.',
                },
                {
                  emoji: '🏢',
                  titel: 'Für Unternehmen & Teams',
                  text: 'Ihr wollt KI gemeinsam im Team einführen? Wir kommen zu euch – massgeschneidert auf eure Prozesse und Bedürfnisse.',
                },
                {
                  emoji: '🎓',
                  titel: 'Für Bildungsinstitutionen',
                  text: 'KI verändert die Bildungslandschaft. Wir helfen Schulen und Weiterbildungsanbietern, diesen Wandel aktiv zu gestalten.',
                },
              ].map(({ emoji, titel, text }) => (
                <div key={titel} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{emoji}</span>
                    <h3 className="font-bold text-gray-900">{titel}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#F5821F] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            KI-Kurs für dein Team?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Wir bringen den Kurs direkt zu euch –
            abgestimmt auf eure Aufgaben, eure Tools und eure Menschen.
            Teams ab 6 Personen.
          </p>
          <Link
            href="#kontakt"
            className="bg-white text-[#F5821F] font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors inline-block text-base"
          >
            Firmenkurs anfragen
          </Link>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Persönlich beraten lassen</h2>
            <p className="text-gray-600">
              Du weisst noch nicht welcher Kurs der richtige ist? Kein Problem –
              wir finden gemeinsam deinen Einstieg.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <KontaktFormular />
          </div>
        </div>
      </section>
    </>
  )
}
