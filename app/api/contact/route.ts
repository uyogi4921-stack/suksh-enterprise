import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, message } = body;

    if (!name || !phone || !projectType || !message) {
      return NextResponse.json({ message: "Required fields missing" }, { status: 400 });
    }

    // Log inquiry (always works, even without email config)
    console.log("New inquiry:", { name, email, phone, projectType, message, timestamp: new Date().toISOString() });

    // Send email only if credentials are configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      });

      await transporter.sendMail({
        from: `"Suksh Enterprise Website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        replyTo: email || undefined,
        subject: `New Inquiry: ${projectType} — ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#1A365D;color:white;padding:24px;border-radius:8px 8px 0 0">
              <h2 style="margin:0">New Project Inquiry</h2>
              <p style="margin:4px 0 0;opacity:0.8;font-size:14px">Suksh Enterprise Website</p>
            </div>
            <div style="background:#f8fafc;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e2e8f0">
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px 0;color:#64748b;font-size:14px;width:140px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
                <tr><td style="padding:8px 0;color:#64748b;font-size:14px">Phone</td><td style="padding:8px 0;font-weight:600">${phone}</td></tr>
                <tr><td style="padding:8px 0;color:#64748b;font-size:14px">Email</td><td style="padding:8px 0;font-weight:600">${email || "—"}</td></tr>
                <tr><td style="padding:8px 0;color:#64748b;font-size:14px">Project Type</td><td style="padding:8px 0;font-weight:600">${projectType}</td></tr>
              </table>
              <div style="margin-top:16px;padding:16px;background:white;border-radius:8px;border:1px solid #e2e8f0">
                <p style="margin:0 0 8px;color:#64748b;font-size:14px">Message</p>
                <p style="margin:0">${message.replace(/\n/g, "<br>")}</p>
              </div>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ message: "Inquiry received successfully" }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
