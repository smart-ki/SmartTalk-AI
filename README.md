# SmartTalk AI – Website

Website für die KI-Bildungsangebote von SmartTalk AI. Gebaut mit Next.js 15, Tailwind CSS und Vercel.

## Inhalt

6 Kursangebote mit je einer Detailseite und Buchungsformular:

| # | Kurs | Preis ab |
|---|------|----------|
| 1 | KI-Einstieg: Grundlagen & erste Anwendung | CHF 290 |
| 2 | KI im Arbeitsalltag: Tools, Prompts & Praxis | CHF 290 |
| 3 | Prompting Profi: Fortgeschrittenes Prompt Engineering | CHF 350 |
| 4 | KI, Datenschutz & Ethik | CHF 190 |
| 5 | KI in Geschäftsprozessen implementieren | CHF 490 |
| 6 | KI & Lernen: KI in der Bildung | CHF 490 |

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **E-Mail:** Resend
- **Hosting:** Vercel
- **Sprache:** TypeScript

## Lokale Entwicklung

### Voraussetzungen
- Node.js 18+
- npm

### Setup

```bash
# Repository klonen
git clone git@github.com:smart-ki/SmartTalk-AI.git
cd SmartTalk-AI

# Abhängigkeiten installieren
npm install

# Umgebungsvariablen einrichten
cp .env.local.example .env.local
# .env.local öffnen und Werte eintragen
```

### Umgebungsvariablen (`.env.local`)

```
RESEND_API_KEY=re_...          # API Key von resend.com
BOOKING_EMAIL=...@smarttalk.ch # Ziel-E-Mail für Buchungsanfragen
```

### Entwicklungsserver starten

```bash
npm run dev
```

Website läuft unter [http://localhost:3000](http://localhost:3000)

## Deployment

Jeder Push auf `main` löst automatisch ein neues Deployment auf Vercel aus.

### Umgebungsvariablen auf Vercel

Unter **Vercel → Projekt → Settings → Environment Variables** eintragen:

| Key | Beschreibung |
|-----|-------------|
| `RESEND_API_KEY` | API Key von [resend.com](https://resend.com) |
| `BOOKING_EMAIL` | E-Mail-Adresse für Buchungsanfragen |

## Projektstruktur

```
src/
├── app/
│   ├── page.tsx              # Startseite
│   ├── layout.tsx            # Grundlayout
│   ├── globals.css           # Globale Styles
│   ├── kurse/[slug]/         # Kurs-Detailseiten
│   └── api/buchen/           # Buchungsformular API
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── KursCard.tsx
│   └── BuchungsFormular.tsx
└── data/
    └── kurse.ts              # Kursinhalte & SEO-Daten
```

## Inhalte anpassen

Alle Kursinhalte (Titel, Beschreibungen, Preise, SEO-Texte) befinden sich in:

```
src/data/kurse.ts
```

## Kontakt

Jeannine Germann – [jeannine.germann@smarttalk.ch](mailto:jeannine.germann@smarttalk.ch)
