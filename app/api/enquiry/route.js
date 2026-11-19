import { NextResponse } from "next/server";

// Sends the enquiry by email through Resend (https://resend.com, free tier is enough).
// Set these in .env.local (and in Vercel -> Project -> Settings -> Environment Variables):
//   RESEND_API_KEY=re_xxxxx
//   ENQUIRY_TO=info@discover-himalayas.com
//   ENQUIRY_FROM="Discover Himalayas <enquiries@your-verified-domain.com>"
// Without RESEND_API_KEY this route answers 501 and the form opens the visitor's email app instead.

const esc = (s = "") => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

export async function POST(request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ ok: false, reason: "not-configured" }, { status: 501 });

  let d;
  try {
    d = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (d.website) return NextResponse.json({ ok: true }); // spam trap filled -> pretend success
  if (!d.name || !d.email || !/^\S+@\S+\.\S+$/.test(d.email)) {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const html = `
    <p><b>Name:</b> ${esc(d.name)}<br><b>Email:</b> ${esc(d.email)}<br><b>Journey:</b> ${esc(d.tourName)}<br>
    <b>Preferred departure:</b> ${esc(d.dates) || "-"}<br><b>Riders:</b> ${esc(d.riders)} &nbsp; <b>Pillions:</b> ${esc(d.pillions)}</p>
    <p>${esc(d.msg).replace(/\n/g, "<br>")}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM || "Discover Himalayas <onboarding@resend.dev>",
      to: [process.env.ENQUIRY_TO || "info@discover-himalayas.com"],
      reply_to: d.email,
      subject: `Journey enquiry: ${d.tourName}`,
      html,
    }),
  });

  return NextResponse.json({ ok: res.ok }, { status: res.ok ? 200 : 502 });
}
