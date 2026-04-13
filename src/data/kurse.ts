export interface Kurs {
  slug: string
  nummer: number
  level: string
  levelFarbe: string
  titel: string
  untertitel: string
  kurzbeschreibung: string
  ausfuehrlicheBeschreibung: string
  lernziele: string[]
  zielgruppe: string
  format: string
  dauer: string
  preisAb: string
  preisDetail?: string
  seoTitel: string
  metaBeschreibung: string
  keywords: string[]
}

export const kurse: Kurs[] = [
  {
    slug: 'ki-einstieg',
    nummer: 1,
    level: 'EINSTIEG',
    levelFarbe: 'bg-green-100 text-green-800',
    titel: 'KI-Einstieg: Grundlagen & erste Anwendung',
    untertitel: 'Verstehen, was KI ist – und direkt selbst ausprobieren.',
    kurzbeschreibung:
      'Du weisst, dass KI den Arbeitsalltag verändert – aber wie fängst du an? In diesem Einsteigerkurs erfährst du, was KI wirklich kann, welche Tools es gibt und wie du sie sofort für deine Arbeit nutzt. Kein technisches Vorwissen nötig.',
    ausfuehrlicheBeschreibung:
      'KI ist kein Zukunftsthema mehr – sie ist längst im Büro angekommen. Trotzdem fühlen sich viele Berufsleute unsicher: Was kann ich damit machen? Was nicht? Und wo fange ich überhaupt an? Dieser Kurs gibt dir eine solide Grundlage: Du lernst die wichtigsten KI-Tools kennen, verstehst wie Sprachmodelle funktionieren und übst direkt mit eigenen Aufgaben. Am Ende des Tages hast du deinen ersten persönlichen KI-Aktionsplan und weisst genau, wie du morgen früh mit KI starten kannst.',
    lernziele: [
      'Erklären, was KI ist – und was sie nicht ist (keine Black Box mehr)',
      'Die wichtigsten Tools 2025/26 kennen: ChatGPT, Claude, Copilot, Gemini',
      'Erste eigene Prompts formulieren und Ergebnisse kritisch beurteilen',
      'KI-Anwendungen für den eigenen Berufsalltag identifizieren',
      'Mit einem persönlichen KI-Aktionsplan nach Hause gehen',
    ],
    zielgruppe: 'Alle Berufsleute, Quereinsteiger:innen',
    format: 'Präsenzkurs oder Online',
    dauer: '1 Tag (ca. 6 h)',
    preisAb: 'CHF 290',
    preisDetail: 'CHF 290 / Person',
    seoTitel: 'KI-Einstiegskurs Schweiz – Grundlagen für Berufsleute | SmartTalk AI',
    metaBeschreibung:
      'KI-Grundlagenkurs in der Zentralschweiz: 1 Tag, praxisnah, kein Vorwissen nötig. Lerne ChatGPT, Claude & Co. kennen und nutze KI ab morgen in deinem Job.',
    keywords: ['KI Kurs Schweiz', 'ChatGPT Grundlagen', 'KI für Anfänger', 'KI Einstieg', 'KI Weiterbildung Luzern', 'Sprachmodelle erklärt'],
  },
  {
    slug: 'ki-im-arbeitsalltag',
    nummer: 2,
    level: 'KOMPETENZ',
    levelFarbe: 'bg-blue-100 text-blue-800',
    titel: 'KI im Arbeitsalltag: Tools, Prompts & Praxis',
    untertitel: 'Die richtigen KI-Tools kennen – und gezielt einsetzen.',
    kurzbeschreibung:
      'ChatGPT, Claude, Copilot – welches Tool passt wofür? In diesem Kurs vergleichst du die wichtigsten KI-Anwendungen, lernst ihre Stärken und Schwächen kennen und übst, wie du mit gezielten Prompts wirklich gute Ergebnisse bekommst.',
    ausfuehrlicheBeschreibung:
      'Es gibt Dutzende KI-Tools – aber welches soll ich nutzen, und wie? Dieser Kurs gibt Orientierung. Du lernst die führenden Sprachmodelle (ChatGPT, Claude, Microsoft Copilot, Gemini u.a.) direkt im Vergleich kennen: Was können sie besonders gut, wo sind ihre Grenzen, und was kosten sie? Im zweiten Teil dreht sich alles ums Prompting: Du übst, wie du KI gezielt anweist, um für E-Mails, Berichte, Recherchen und Präsentationen echte Zeitgewinne zu erzielen. Alle Übungen basieren auf deinen eigenen Berufsaufgaben.',
    lernziele: [
      'Die wichtigsten KI-Tools 2025/26 vergleichen und das passende wählen',
      'Stärken und Schwächen von ChatGPT, Claude, Copilot & Co. kennen',
      'Effektive Prompts für typische Berufsaufgaben formulieren',
      'E-Mails, Berichte und Texte mit KI schneller und besser erstellen',
      'KI-Ergebnisse kritisch prüfen und verbessern',
    ],
    zielgruppe: 'Mitarbeitende KMU, Berufsleute mit Grundkenntnissen',
    format: 'Präsenzkurs oder Hybrid',
    dauer: '1 Tag oder 2 Halbtage',
    preisAb: 'CHF 290',
    preisDetail: 'CHF 290 / Person | ab CHF 2\'200 Firmenkurs',
    seoTitel: 'KI im Arbeitsalltag – Tools & Prompting Kurs Schweiz | SmartTalk AI',
    metaBeschreibung:
      'ChatGPT vs. Claude vs. Copilot: Welches KI-Tool passt für was? Praxiskurs für Berufsleute in der Zentralschweiz. Firmenkurs buchbar.',
    keywords: ['KI Tools Vergleich', 'ChatGPT Kurs', 'Prompting Kurs Schweiz', 'KI Arbeitsplatz', 'KI Firmenkurs', 'Microsoft Copilot Kurs'],
  },
  {
    slug: 'prompting-profi',
    nummer: 3,
    level: 'VERTIEFUNG',
    levelFarbe: 'bg-purple-100 text-purple-800',
    titel: 'Prompting Profi: Fortgeschrittenes Prompt Engineering',
    untertitel: 'Aus KI das Maximum herausholen – mit Präzision und System.',
    kurzbeschreibung:
      'Du nutzt KI bereits – aber deine Ergebnisse könnten besser sein. In diesem Intensivkurs lernst du fortgeschrittene Prompting-Techniken, die den Unterschied machen: System-Prompts, Rollen-Prompting, mehrstufige Workflows und mehr.',
    ausfuehrlicheBeschreibung:
      'Wer KI wirklich beherrscht, weiss: Der Prompt entscheidet über alles. Dieser Kurs richtet sich an alle, die bereits erste Erfahrungen mit KI-Tools haben und nun auf das nächste Level wollen. Du lernst, wie du System-Prompts aufbaust, mit Rollen arbeitest, komplexe Aufgaben in Schritten führst (Chain-of-Thought) und wiederkehrende Aufgaben mit Prompt-Vorlagen automatisierst. Der Kurs ist hands-on: Du entwickelst Prompt-Vorlagen für deinen eigenen Arbeitsbereich und nimmst sie direkt mit nach Hause.',
    lernziele: [
      'System-Prompts und Rollen-Prompting gezielt einsetzen',
      'Komplexe Aufgaben mit mehrstufigen Prompts (Chain-of-Thought) bearbeiten',
      'Eigene Prompt-Vorlagen für wiederkehrende Aufgaben entwickeln',
      'KI für Analyse, Strukturierung und kreative Aufgaben nutzen',
      'Erste Automatisierungsideen für den eigenen Bereich definieren',
    ],
    zielgruppe: 'KI-Nutzende mit Grundkenntnissen, Tech-Affine, Power User',
    format: 'Präsenzkurs',
    dauer: '1 Tag (intensiv)',
    preisAb: 'CHF 350',
    preisDetail: 'CHF 350 / Person | ab CHF 2\'500 Firmenkurs',
    seoTitel: 'Prompt Engineering Kurs Schweiz – Fortgeschrittenes Prompting | SmartTalk AI',
    metaBeschreibung:
      'Prompting Profi werden: System-Prompts, Chain-of-Thought und Automatisierung. Intensivkurs für KI-Nutzende mit Grundkenntnissen. Zentralschweiz.',
    keywords: ['Prompt Engineering Kurs', 'Fortgeschrittenes Prompting', 'System Prompts', 'ChatGPT Profi', 'KI Automatisierung', 'Prompt Vorlage'],
  },
  {
    slug: 'datenschutz-ethik',
    nummer: 4,
    level: 'SICHERHEIT',
    levelFarbe: 'bg-red-100 text-red-800',
    titel: 'KI, Datenschutz & Ethik: Verantwortungsvoll handeln',
    untertitel: 'KI nutzen – aber richtig. Sicher, rechtskonform und fair.',
    kurzbeschreibung:
      'Welche Daten darf ich einer KI weitergeben? Was sagt das Schweizer Datenschutzgesetz? Und was bedeutet KI-Bias für meine Arbeit? Dieser Kurs gibt praxisnahe Antworten – ohne juristischen Fachjargon.',
    ausfuehrlicheBeschreibung:
      'KI-Tools sind mächtig – und mit Macht kommt Verantwortung. Viele Unternehmen setzen KI ein, ohne sich über die rechtlichen und ethischen Implikationen im Klaren zu sein. In diesem Kurs lernst du, was das Schweizer Datenschutzgesetz (DSG) und die DSGVO für deinen KI-Einsatz bedeuten, welche Daten du keiner KI anvertrauen darfst und wie du Bias und Diskriminierung durch KI erkennst und vermeidest. Du entwickelst eine einfache KI-Richtlinie für dein Team und weisst, wie du KI verantwortungsvoll und rechtskonform einsetzt.',
    lernziele: [
      'Rechtliche Grundlagen für KI-Einsatz in der Schweiz kennen (DSG, DSGVO, EU AI Act)',
      'Wissen, welche Daten sicher an KI-Tools übermittelt werden dürfen',
      'KI-Bias und Diskriminierung erkennen und vermeiden',
      'Eine einfache KI-Nutzungsrichtlinie für das eigene Team entwickeln',
      'Ethische Fragen zum KI-Einsatz im Berufsalltag beurteilen',
    ],
    zielgruppe: 'Alle KI-Nutzenden, HR, Führungskräfte, Compliance',
    format: 'Präsenzkurs, Halbtag',
    dauer: 'Halbtag (3 h)',
    preisAb: 'CHF 190',
    preisDetail: 'CHF 190 / Person | ab CHF 1\'200 Firmenkurs',
    seoTitel: 'KI Datenschutz & Ethik Kurs Schweiz – DSG, DSGVO, KI-Richtlinien | SmartTalk AI',
    metaBeschreibung:
      'KI sicher und rechtskonform einsetzen: DSG, DSGVO, EU AI Act und Ethik. Praxiskurs für Unternehmen und Mitarbeitende. Firmenkurs buchbar.',
    keywords: ['KI Datenschutz Kurs', 'DSGVO KI Schweiz', 'KI Ethik', 'DSG KI', 'KI Richtlinien Unternehmen', 'Verantwortungsvoller KI-Einsatz'],
  },
  {
    slug: 'ki-strategie',
    nummer: 5,
    level: 'STRATEGIE',
    levelFarbe: 'bg-orange-100 text-orange-800',
    titel: 'KI in Geschäftsprozessen implementieren',
    untertitel: 'KI strategisch einführen – nachhaltig, strukturiert und wirksam.',
    kurzbeschreibung:
      'KI-Tools kennen ist gut – sie wirkungsvoll in Geschäftsprozesse einzubinden ist besser. Dieser Strategiekurs zeigt, wie du KI in deinem Unternehmen systematisch einführst, Prozesse automatisierst und dein Team für die Transformation mitnimmst.',
    ausfuehrlicheBeschreibung:
      'Viele Unternehmen haben einzelne Mitarbeitende, die KI nutzen – aber kaum eines hat eine Strategie dafür. Dieser Kurs schliesst diese Lücke. Du analysierst, welche Geschäftsprozesse in deinem Unternehmen KI-Potenzial haben, entwickelst eine priorisierte KI-Roadmap und lernst, wie du die Einführung organisatorisch und kulturell begleitest. Mit echten Schweizer KMU-Praxisbeispielen – direkt aus der Erfahrung von SmartTalk. Ob automatisierte Kundenkorrespondenz, KI-gestützte Recherche oder intelligente Wissensdatenbank: Du gehst mit einem konkreten Massnahmenplan nach Hause.',
    lernziele: [
      'KI-Potenziale in den eigenen Geschäftsprozessen systematisch identifizieren',
      'Eine priorisierte KI-Roadmap für das Unternehmen entwickeln',
      'Change Management: Team für KI-Transformation begeistern und mitnehmen',
      'Passende Tools und Partner für die Umsetzung evaluieren',
      'Risiken, Kosten und ROI eines KI-Projekts realistisch einschätzen',
    ],
    zielgruppe: 'Führungskräfte, GL, Projektleiter:innen, KMU-Inhaber:innen',
    format: 'Präsenzkurs oder Workshop',
    dauer: '1 Tag (intensiv) oder Begleitung',
    preisAb: 'CHF 490',
    preisDetail: 'CHF 490 / Person | ab CHF 3\'500 Firmenkurs',
    seoTitel: 'KI Implementierung KMU Schweiz – Strategie & Geschäftsprozesse | SmartTalk AI',
    metaBeschreibung:
      'KI strategisch in KMU einführen: Prozesse automatisieren, Roadmap entwickeln, Team mitnehmen. Strategiekurs und Beratung für Führungskräfte. Zentralschweiz.',
    keywords: ['KI Implementierung KMU', 'KI Strategie Schweiz', 'Geschäftsprozesse automatisieren', 'KI Roadmap', 'KI Transformation', 'KI Beratung Luzern'],
  },
  {
    slug: 'ki-bildung',
    nummer: 6,
    level: 'BILDUNG',
    levelFarbe: 'bg-teal-100 text-teal-800',
    titel: 'KI & Lernen: KI in der Bildung verantwortungsbewusst einsetzen',
    untertitel: 'KI verändert die Bildung – gestalte diesen Wandel aktiv mit.',
    kurzbeschreibung:
      'KI im Klassenzimmer und in der Bildungsinstitution: Wie setzt du sie sinnvoll, sicher und pädagogisch verantwortungsbewusst ein? Dieser Kurs verbindet KI-Kompetenz mit bildungspraktischem Know-how – speziell für Bildungsanbieter in der Zentralschweiz.',
    ausfuehrlicheBeschreibung:
      'KI verändert die Bildungslandschaft grundlegend: Schüler:innen nutzen ChatGPT für Hausaufgaben, Verwaltungen automatisieren Prozesse, und Lehrpersonen fragen sich, wie sie reagieren sollen. Dieser Kurs gibt Bildungsverantwortlichen das Handwerkszeug: Du lernst, wie KI in Unterricht, Kursplanung, Verwaltung und Kommunikation eingesetzt werden kann, welche Chancen und Risiken für Bildungsinstitutionen bestehen und wie du eine KI-Strategie für deine Institution entwickelst. Datenschutz, Ethik und Lernkultur stehen dabei genauso im Fokus wie praktische Anwendungsbeispiele.',
    lernziele: [
      'KI-Chancen und -Risiken speziell für Bildungsinstitutionen einschätzen',
      'KI in Unterricht, Kursplanung, Verwaltung und Kommunikation einsetzen',
      'Datenschutz, Ethik und pädagogische Verantwortung im KI-Einsatz wahren',
      'Change Management: Lehrpersonen und Team für KI begeistern und begleiten',
      'Eine KI-Roadmap für die eigene Bildungsinstitution entwickeln',
    ],
    zielgruppe: 'Schulleitungen, Lehrpersonen, Bildungsmanager:innen',
    format: 'Präsenzkurs oder Inhouse-Workshop',
    dauer: '1 Tag',
    preisAb: 'CHF 490',
    preisDetail: 'CHF 490 / Person | ab CHF 3\'200 Firmenkurs',
    seoTitel: 'KI in der Bildung – Kurs für Schulen & Weiterbildungsanbieter Schweiz | SmartTalk AI',
    metaBeschreibung:
      'KI verantwortungsbewusst in Bildungsinstitutionen einsetzen: Unterricht, Verwaltung, Ethik. Spezialkurs für Schulleitungen und Bildungsanbieter. Zentralschweiz.',
    keywords: ['KI Bildung Schweiz', 'KI Schule', 'KI Weiterbildung', 'KI Unterricht', 'Bildungsdigitalisierung', 'KI Datenschutz Schule'],
  },
]

export function getKursBySlug(slug: string): Kurs | undefined {
  return kurse.find((k) => k.slug === slug)
}
