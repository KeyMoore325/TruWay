"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./links";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Tru<span className="text-accent">Way</span>
        </Link>
        <ul className="flex gap-4 text-sm font-medium sm:gap-6">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              // The logo already links home, so hide "Home" on narrow screens
              <li key={href} className={href === "/" ? "hidden sm:block" : ""}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "text-foreground underline decoration-accent decoration-2 underline-offset-8"
                      : "text-zinc-500 transition-colors hover:text-foreground"
                  }
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
