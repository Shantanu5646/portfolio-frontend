export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO_EMAIL as string | undefined;
    const fromEmail =
      process.env.FROM_EMAIL || process.env.SMTP_USER || "no-reply@example.com";

    if (!to) {
      console.error("CONTACT_TO_EMAIL is not set in environment variables.");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const textBody = `
New message from your portfolio contact form:

Name: ${name}
Email: ${email}

Message:
${message}
`;

    const htmlBody = `
      <h2>New portfolio contact form message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    console.log("Sending email via Brevo for:", name, email);

    await transporter.sendMail({
      from: `"Portfolio Contact" <${fromEmail}>`,
      to,
      subject: `New contact form message from ${name}`,
      text: textBody,
      html: htmlBody,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
