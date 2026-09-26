import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

const details = [
  { label: "Phone", value: "(816) 555-0100" },
  { label: "Email", value: "drive@truway.example" },
  { label: "Pickup location", value: "[Street address], Kansas City, MO" },
  { label: "Hours", value: "Mon–Sat, 9am–6pm" },
];

export default function Contact() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6">
      <section className="py-24 text-center sm:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Contact
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Let&apos;s get you on the road.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          Request a car or ask us anything. We usually reply within a few
          hours during business hours.
        </p>
      </section>

      <section className="grid gap-12 pb-24 lg:grid-cols-[1fr_320px]">
        <ContactForm />

        <aside>
          <h2 className="text-lg font-semibold">Reach us directly</h2>
          <dl className="mt-4 space-y-4">
            {details.map((detail) => (
              <div key={detail.label}>
                <dt className="text-sm text-zinc-500">{detail.label}</dt>
                <dd className="mt-1 font-medium">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>
    </main>
  );
}
