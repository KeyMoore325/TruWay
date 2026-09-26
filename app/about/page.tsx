import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

const values = [
  {
    title: "Drivers first",
    description:
      "We built TruWay around what rideshare drivers actually need: reliable cars, fair prices, and no runaround.",
  },
  {
    title: "Straight talk",
    description:
      "One weekly rate, clearly explained. No surprise fees, no fine print, no pressure.",
  },
  {
    title: "Kansas City proud",
    description:
      "We're a local business serving drivers from Overland Park to North KC and everywhere in between.",
  },
];

const stats = [
  { value: "[##]", label: "Cars in our fleet" },
  { value: "[###]", label: "Drivers served" },
  { value: "48 hrs", label: "Average time to get on the road" },
];

export default function About() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6">
      <section className="py-24 text-center sm:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          About TruWay
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Built for the drivers who keep KC moving.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          [Story placeholder] TruWay started with a simple idea: anyone who
          wants to earn with rideshare should be able to, whether or not they
          own a car that qualifies. We offer dependable, app-approved vehicles
          at a fair weekly price, backed by a local team that picks up the
          phone.
        </p>
      </section>

      <section className="pb-24">
        <dl className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-black/10 p-6 text-center dark:border-white/10"
            >
              <dt className="text-sm text-zinc-500">{stat.label}</dt>
              <dd className="mt-2 text-4xl font-bold tracking-tight text-accent">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="pb-24">
        <h2 className="text-2xl font-semibold tracking-tight">What we stand for</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-black/10 p-6 dark:border-white/10"
            >
              <span aria-hidden className="block h-1 w-8 rounded-full bg-accent" />
              <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-24 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Ready to start driving?
        </h2>
        <Link
          href="/contact"
          className="mt-6 inline-flex h-12 items-center rounded-full bg-accent px-6 font-medium text-accent-foreground transition-opacity hover:opacity-80"
        >
          Reserve a car
        </Link>
      </section>
    </main>
  );
}
