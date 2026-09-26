import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
};

const groups = [
  {
    title: "Getting started",
    faqs: [
      {
        question: "What do I need to rent?",
        answer:
          "You'll need to be at least 21, have a valid U.S. driver's license held for at least one year, and pass a quick background and driving-record check.",
      },
      {
        question: "Do I need to be approved by Uber or Lyft first?",
        answer:
          "No. You can apply with us first. Once your rental is approved, we'll help you add the car to your Uber or Lyft account.",
      },
      {
        question: "How fast can I start driving?",
        answer:
          "Most drivers are approved within one business day and pick up their car within 48 hours.",
      },
    ],
  },
  {
    title: "Payments & deposits",
    faqs: [
      {
        question: "How does payment work?",
        answer:
          "Your weekly rate is charged automatically every week. You can pay by debit or credit card.",
      },
      {
        question: "Is there a deposit?",
        answer:
          "Yes, a $250 refundable deposit is due at pickup. It's returned when you bring the car back in good condition.",
      },
      {
        question: "Is there a minimum rental period?",
        answer:
          "The minimum is one week. After that, you can return the car any time with 7 days' notice.",
      },
    ],
  },
  {
    title: "Driving & coverage",
    faqs: [
      {
        question: "Can I drive for more than one app?",
        answer:
          "Yes. Drive for Uber, Lyft, DoorDash, Instacart, or any combination. Many drivers switch between apps to stay busy.",
      },
      {
        question: "What does the insurance cover?",
        answer:
          "Your rental includes rideshare-ready coverage while you're online with the apps and while driving personally. We'll walk you through the details at pickup.",
      },
      {
        question: "What happens if the car needs repairs?",
        answer:
          "Maintenance and repairs are on us. If the car will be in the shop for more than a day, we'll provide a replacement so you keep earning.",
      },
      {
        question: "Can I use the car for personal trips?",
        answer:
          "Absolutely. It's your car for the week, with unlimited miles for work and personal use.",
      },
    ],
  },
];

export default function Faq() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6">
      <section className="py-24 text-center sm:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          FAQ
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Questions, answered.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          Everything you need to know before you get behind the wheel.
        </p>
      </section>

      {groups.map((group) => (
        <section key={group.title} className="pb-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            {group.title}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {group.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-black/10 p-6 dark:border-white/10"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="pb-24 pt-8 text-center">
        <p className="text-zinc-600 dark:text-zinc-400">
          Still have a question?
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex h-12 items-center rounded-full bg-accent px-6 font-medium text-accent-foreground transition-opacity hover:opacity-80"
        >
          Contact us
        </Link>
      </section>
    </main>
  );
}
