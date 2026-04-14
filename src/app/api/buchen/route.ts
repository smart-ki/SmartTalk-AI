import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const BOOKING_EMAIL = process.env.BOOKING_EMAIL ?? 'jeannine.germann@smarttalk.ch'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, telefon, firma, format, personen, nachricht, kursTitel, kursSlug } = body

  if (!name || !email) {
    return NextResponse.json({ error: 'Name und E-Mail sind erforderlich.' }, { status: 400 })
  }

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; color: #1a1a1a;">
      <div style="background: #F5821F; padding: 20px 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">Neue Buchungsanfrage – SmartTalk AI</h1>
      </div>
      <div style="background: #f8f8f8; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #6B6B6B;">Kurs</td><td>${kursTitel}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #6B6B6B;">Name</td><td>${name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #6B6B6B;">E-Mail</td><td><a href="mailto:${email}">${email}</a></td></tr>
          ${telefon ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #6B6B6B;">Telefon</td><td>${telefon}</td></tr>` : ''}
          ${firma ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #6B6B6B;">Firma</td><td>${firma}</td></tr>` : ''}
          <tr><td style="padding: 8px 0; font-weight: bold; color: #6B6B6B;">Format</td><td>${format}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #6B6B6B;">Personen</td><td>${personen}</td></tr>
          ${nachricht ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #6B6B6B; vertical-align: top;">Nachricht</td><td style="white-space: pre-wrap;">${nachricht}</td></tr>` : ''}
        </table>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e5e5;" />
        <p style="font-size: 12px; color: #999; margin: 0;">
          Gesendet über smarttalk-ai.ch · Kurs: ${kursSlug}
        </p>
      </div>
    </div>
  `

  try {
    await resend.emails.send({
      from: 'SmartTalk AI <onboarding@resend.dev>',
      to: BOOKING_EMAIL,
      replyTo: email,
      subject: `Buchungsanfrage: ${kursTitel} – ${name}`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Email send error:', err)
    return NextResponse.json({ error: 'Email konnte nicht gesendet werden.' }, { status: 500 })
  }
}
