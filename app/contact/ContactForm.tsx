"use client";

import { useState } from "react";

const fieldClass =
  "mt-2 w-full rounded-lg border border-black/10 bg-transparent px-4 py-3 text-base outline-none transition-colors focus:border-accent dark:border-white/10";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-black/10 p-8 text-center dark:border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">
          Thanks, we got your request!
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          This form is a preview and doesn&apos;t send messages yet.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium underline decoration-accent underline-offset-4"
        >
          Back to the form
        </button>
      </div>
    );
  }

  return (
    <form
      // Preview only: not connected to an email service yet
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6 rounded-2xl border border-black/10 p-6 sm:p-8 dark:border-white/10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Full name
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Jordan Smith"
            className={fieldClass}
          />
        </label>
        <label className="block text-sm font-medium">
          Phone
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            placeholder="(816) 555-0123"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="block text-sm font-medium">
        Email
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="jordan@email.com"
          className={fieldClass}
        />
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Which car?
          <select name="vehicle" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            <option>Economy Sedan</option>
            <option>Hybrid</option>
            <option>SUV / XL</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="block text-sm font-medium">
          When do you want to start?
          <select name="startDate" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            <option>As soon as possible</option>
            <option>Within 2 weeks</option>
            <option>Within a month</option>
            <option>Just looking</option>
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium">
        Anything else we should know?
        <textarea
          name="message"
          rows={4}
          placeholder="Which apps do you drive for, or plan to?"
          className={fieldClass}
        />
      </label>

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-6 font-medium text-accent-foreground transition-opacity hover:opacity-80 sm:w-auto"
      >
        Request a car
      </button>
    </form>
  );
}
