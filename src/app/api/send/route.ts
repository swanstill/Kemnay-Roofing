import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type } = body;

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Email not configured. Set RESEND_API_KEY." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const adminEmails = (process.env.ADMIN_EMAIL || "kemnayroofing@gmail.com")
      .split(",")
      .map((e) => e.trim());

    let subject: string;
    let html: string;
    let text: string;

    const row = (label: string, value: string) =>
      `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#555;font-weight:600;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#222">${value}</td></tr>`;

    switch (type) {
      case "contact": {
        const { name, email, phone, subject: subjectField, message } = body;
        subject = subjectField || "Contact Form - Kemnay Roofing";
        text = [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          ``,
          `Message:`,
          message,
        ].join("\n");
        html = `<table style="width:100%;border-collapse:collapse;font-family:sans-serif;font-size:14px">
          ${row("Name", name)}
          ${row("Email", email)}
          ${row("Phone", phone || "—")}
        </table>
        <h3 style="font-family:sans-serif;color:#333;margin-top:20px">Message</h3>
        <p style="font-family:sans-serif;font-size:14px;color:#222;background:#f9f9f9;padding:12px;border-radius:6px">${message.replace(/\n/g, "<br>")}</p>`;
        break;
      }

      case "quote": {
        const { firstName, lastName, email, phone, postcode, propertyType, services, urgency, propertySize, description } = body;
        subject = "Quote Request - Kemnay Roofing";
        text = [
          `Quote Request`,
          `Name: ${firstName} ${lastName}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Postcode: ${postcode}`,
          `Property Type: ${propertyType}`,
          `Services: ${(services || []).join(", ")}`,
          `Urgency: ${urgency}`,
          `Property Size: ${propertySize}`,
          `Description: ${description}`,
        ].join("\n");
        html = `<table style="width:100%;border-collapse:collapse;font-family:sans-serif;font-size:14px">
          ${row("Name", `${firstName} ${lastName}`)}
          ${row("Email", email)}
          ${row("Phone", phone)}
          ${row("Postcode", postcode)}
          ${row("Property Type", propertyType)}
          ${row("Services", (services || []).join(", "))}
          ${row("Urgency", urgency)}
          ${row("Property Size", propertySize || "—")}
        </table>
        <h3 style="font-family:sans-serif;color:#333;margin-top:20px">Description</h3>
        <p style="font-family:sans-serif;font-size:14px;color:#222;background:#f9f9f9;padding:12px;border-radius:6px">${(description || "—").replace(/\n/g, "<br>")}</p>`;
        break;
      }

      case "multi-step-quote": {
        const { fullName, phone, postcode, propertyType, service, timeline } = body;
        subject = "Quote Request - Kemnay Roofing (Multi-Step)";
        text = [
          `Quote Request (Multi-Step)`,
          `Name: ${fullName}`,
          `Phone: ${phone}`,
          `Postcode: ${postcode}`,
          `Property Type: ${propertyType}`,
          `Service: ${service}`,
          `Timeline: ${timeline}`,
        ].join("\n");
        html = `<table style="width:100%;border-collapse:collapse;font-family:sans-serif;font-size:14px">
          ${row("Name", fullName)}
          ${row("Phone", phone)}
          ${row("Postcode", postcode)}
          ${row("Property Type", propertyType)}
          ${row("Service", service)}
          ${row("Timeline", timeline)}
        </table>`;
        break;
      }

      default:
        return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Kemnay Roofing <onboarding@resend.dev>",
      to: adminEmails,
      subject,
      text,
      html: `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="margin:0;padding:0;background:#f5f5f5">
        <div style="max-width:600px;margin:0 auto;padding:20px">
          <div style="background:#111;padding:20px;border-radius:8px 8px 0 0;text-align:center">
            <h1 style="color:#F2B100;font-family:sans-serif;margin:0;font-size:20px">Kemnay Roofing</h1>
          </div>
          <div style="background:#fff;padding:24px;border-radius:0 0 8px 8px;box-shadow:0 2px 8px rgba(0,0,0,0.08)">
            <h2 style="font-family:sans-serif;color:#333;margin:0 0 16px;font-size:18px">${subject}</h2>
            ${html}
          </div>
        </div></body></html>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
