import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const { name, email, phone, message } = await request.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "FAB Site Web <onboarding@resend.dev>",
    to: "fab.itertiaire@gmail.com",
    replyTo: email,
    subject: `Nouveau message de ${name}`,
    text: [
      `Nom: ${name}`,
      `Email: ${email}`,
      `Téléphone: ${phone || "Non renseigné"}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Échec envoi" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
