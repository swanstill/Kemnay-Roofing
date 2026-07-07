"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      if (!res.ok) {
        // Fall back to mailto if server-side email isn't configured yet
        fallbackToMailto();
      }
    } catch {
      fallbackToMailto();
    }
    setSending(false);
    setSubmitted(true);
  };

  const fallbackToMailto = () => {
    const subject = encodeURIComponent(formData.subject || "Contact Form - Kemnay Roofing");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${COMPANY.email}?subject=${subject}&body=${body}`);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 bg-kemnay-dark rounded-xl border border-white/5">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-kemnay-gold/20 flex items-center justify-center">
          <Check className="w-10 h-10 text-kemnay-gold" />
        </div>
        <h3 className="font-heading text-3xl tracking-wider text-kemnay-white mb-3">
          MESSAGE SENT!
        </h3>
        <p className="text-kemnay-white/60 max-w-md mx-auto">
          Thank you for getting in touch. We&apos;ll respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-kemnay-dark rounded-xl border border-white/5 p-6 sm:p-8 space-y-5">
      <h3 className="font-heading text-3xl tracking-wider text-kemnay-white mb-2">
        SEND US A MESSAGE
      </h3>
      <p className="text-kemnay-white/40 text-sm mb-6">
        Fill in the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="text-kemnay-white/60 text-xs mb-1 block">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-kemnay-black/50 border border-white/10 rounded-lg px-4 py-3 text-kemnay-white text-sm focus:outline-none focus:border-kemnay-gold transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-kemnay-white/60 text-xs mb-1 block">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-kemnay-black/50 border border-white/10 rounded-lg px-4 py-3 text-kemnay-white text-sm focus:outline-none focus:border-kemnay-gold transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="text-kemnay-white/60 text-xs mb-1 block">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-kemnay-black/50 border border-white/10 rounded-lg px-4 py-3 text-kemnay-white text-sm focus:outline-none focus:border-kemnay-gold transition-colors"
            placeholder="07XXX XXXXXX"
          />
        </div>
        <div>
          <label className="text-kemnay-white/60 text-xs mb-1 block">Subject *</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full bg-kemnay-black/50 border border-white/10 rounded-lg px-4 py-3 text-kemnay-white text-sm focus:outline-none focus:border-kemnay-gold transition-colors appearance-none"
          >
            <option value="">Select a subject</option>
            <option value="Roof Repairs">Roof Repairs</option>
            <option value="New Roofs">New Roofs</option>
            <option value="Flat Roofing">Flat Roofing</option>
            <option value="Guttering">Guttering</option>
            <option value="Gutter Cleaning">Gutter Cleaning</option>
            <option value="Exterior Painting">Exterior Painting</option>
            <option value="Chimney Work">Chimney Work</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-kemnay-white/60 text-xs mb-1 block">Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-kemnay-black/50 border border-white/10 rounded-lg px-4 py-3 text-kemnay-white placeholder-kemnay-white/30 text-sm focus:outline-none focus:border-kemnay-gold transition-colors resize-none"
          placeholder="Tell us about your project or enquiry..."
        />
      </div>

      <button
        type="submit"
        className="flex items-center gap-2 px-6 py-3.5 bg-kemnay-gold text-kemnay-black font-semibold text-sm rounded hover:bg-kemnay-gold-hover transition-all hover:scale-105"
      >
        {sending ? "Sending..." : "Send Message"}
        <Send className={`w-4 h-4 ${sending ? "opacity-50" : ""}`} />
      </button>
    </form>
  );
}
