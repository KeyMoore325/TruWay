import Link from "next/link";

const features = [
  {
    title: "Rideshare-approved cars",
    description:
      "Every vehicle meets Uber and Lyft requirements in Kansas City, so you can start driving right away.",
  },
  {
    title: "Insurance included",
    description:
      "Rideshare-ready coverage is built into your weekly rate. No separate policy to shop for.",
  },
  {
    title: "Unlimited miles",
    description:
      "Drive as much as you want. Your earnings shouldn't be capped by a mileage limit.",
  },
  {
    title: "Maintenance covered",
    description:
      "Oil changes, tires, and repairs are on us. If your car is in the shop, we'll get you a replacement.",
  },
  {
    title: "Simple weekly rates",
    description:
      "One flat weekly price with no long-term contract. Keep it as long as it works for you.",
  },
  {
    title: "Local and fast",
    description:
      "Based right here in Kansas City. Most drivers are approved and on the road within 48 hours.",
  },
];

const steps = [
  {
    title: "Apply online",
    description: "Tell us about yourself and upload your driver's license.",
  },
  {
    title: "Get approved",
    description: "Most applications are reviewed within one business day.",
  },
  {
    title: "Pick up and drive",
    description:
      "Grab your keys, link the car to your Uber or Lyft account, and start earning.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6">
      <section className="py-24 text-center sm:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Kansas City Rideshare Rentals
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Drive for Uber &amp; Lyft.{" "}
          <span className="block text-accent">No car needed.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          Rideshare-ready rentals with insurance, maintenance, and unlimited
          miles included, all for one simple weekly rate.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center rounded-full bg-accent px-6 font-medium text-accent-foreground transition-opacity hover:opacity-80"
          >
            Reserve a car
          </Link>
          <Link
            href="/pricing"
            className="inline-flex h-12 items-center rounded-full border border-black/10 px-6 font-medium transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
          >
            See weekly rates
          </Link>
        </div>
      </section>

      <section className="pb-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          Why drivers choose TruWay
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-black/10 p-6 dark:border-white/10"
            >
              <span aria-hidden className="block h-1 w-8 rounded-full bg-accent" />
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border border-black/10 p-6 dark:border-white/10"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
