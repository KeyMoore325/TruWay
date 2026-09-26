import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
};

const plans = [
  {
    name: "Economy Sedan",
    example: "Toyota Corolla or similar",
    price: "$249",
    description: "Great on gas and perfect for UberX and Lyft Standard.",
    features: [
      "Uber X, Lyft Standard, and delivery apps",
      "Seats 4 passengers",
      "~35 MPG",
    ],
    featured: false,
  },
  {
    name: "Hybrid",
    example: "Toyota Camry Hybrid or similar",
    price: "$299",
    description: "Our most popular pick. Spend less on gas and keep more of every fare.",
    features: [
      "Uber X, Uber Comfort, and Lyft",
      "Seats 4 passengers",
      "~50 MPG",
    ],
    featured: true,
  },
  {
    name: "SUV / XL",
    example: "Toyota Highlander or similar",
    price: "$379",
    description: "Qualify for higher-paying XL rides and airport trips.",
    features: [
      "Uber XL, Lyft XL, and all standard rides",
      "Seats 6–7 passengers",
      "Extra cargo space",
    ],
    featured: false,
  },
];

const included = [
  "Rideshare insurance",
  "Unlimited miles",
  "Routine maintenance",
  "Roadside assistance",
  "Replacement car if yours is in the shop",
  "No long-term contract",
];

export default function Pricing() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6">
      <section className="py-24 text-center sm:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Pricing
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          One weekly rate. Everything included.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          No hidden fees and no long-term commitment. Just pick a car and start
          earning.
        </p>
      </section>

      <section className="pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.featured
                  ? "border-accent"
                  : "border-black/10 dark:border-white/10"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-6 whitespace-nowrap rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  Most popular
                </span>
              )}
              <h2 className="text-lg font-semibold">{plan.name}</h2>
              <p className="mt-1 text-sm text-zinc-500">{plan.example}</p>
              <p className="mt-4 text-4xl font-bold tracking-tight">
                {plan.price}
              </p>
              <p className="mt-1 text-sm text-zinc-500">per week</p>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                {plan.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span aria-hidden className="text-accent">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 inline-flex h-12 items-center justify-center rounded-full px-6 font-medium transition-opacity hover:opacity-80 ${
                  plan.featured
                    ? "bg-accent text-accent-foreground"
                    : "border border-black/10 dark:border-white/10"
                }`}
              >
                Reserve this car
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-zinc-500">
          A refundable $250 deposit is due at pickup. Rates shown before tax.
        </p>
      </section>

      <section className="pb-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          Included with every rental
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-black/10 p-5 dark:border-white/10"
            >
              <span aria-hidden className="text-accent">
                ✓
              </span>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-center text-zinc-600 dark:text-zinc-400">
          Questions about deposits, insurance, or requirements?{" "}
          <Link
            href="/faq"
            className="font-medium text-foreground underline decoration-accent underline-offset-4"
          >
            Read the FAQ
          </Link>
        </p>
      </section>
    </main>
  );
}
