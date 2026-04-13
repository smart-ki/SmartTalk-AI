import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'SmartTalk AI – KI-Bildung für Schweizer KMU',
    template: '%s | SmartTalk AI',
  },
  description:
    'Praxisnahe KI-Kurse für Berufsleute, KMU und Bildungsinstitutionen in der Zentralschweiz. Vom Einstieg bis zur Strategie.',
  keywords: ['KI Kurs Schweiz', 'KI Weiterbildung Luzern', 'ChatGPT Kurs', 'SmartTalk AI'],
  openGraph: {
    siteName: 'SmartTalk AI',
    locale: 'de_CH',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
