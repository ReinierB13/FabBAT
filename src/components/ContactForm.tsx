"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputClass =
    "w-full px-4 py-3 text-sm text-navy border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-bold text-navy mb-2">
          Message envoyé !
        </h3>
        <p className="text-navy/70 text-sm">
          Votre message a bien été envoyé. Fabien vous contactera sous 24–48h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            className={inputClass}
            placeholder="Votre nom"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            className={inputClass}
            placeholder="votre@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">
          Téléphone
        </label>
        <input
          type="tel"
          className={inputClass}
          placeholder="06 XX XX XX XX"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          rows={5}
          className={inputClass}
          placeholder="Décrivez votre projet..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      {state === "error" && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.
        </p>
      )}
      <button
        type="submit"
        disabled={state === "loading"}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "loading" ? "Envoi en cours..." : "Envoyer le message"}
      </button>
    </form>
  );
}
