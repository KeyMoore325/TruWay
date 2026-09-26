import Link from "next/link";
import { links } from "./links";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link href="/" className="text-lg font-bold tracking-tight">
            Tru<span className="text-accent">Way</span>
          </Link>
          <p className="mt-2 max-w-xs text-sm text-zinc-500">
            Rideshare-ready rental cars for drivers across the Kansas City
            metro.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-zinc-500 transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto max-w-5xl px-6 pb-10 text-xs text-zinc-500">
        © {new Date().getFullYear()} TruWay. All rights reserved.
      </p>
    </footer>
  );
}
