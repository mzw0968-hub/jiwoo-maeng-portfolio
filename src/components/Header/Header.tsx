"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { nav, ui } from "@/data/ui";
import { site } from "@/data/site";
import type { Locale } from "@/lib/types";
import type { HeaderProps } from "./Header.types";

const locales: Locale[] = ["ko", "en"];
const localeShortLabel: Record<Locale, string> = { ko: "KOR", en: "EN" };

function LocaleToggle() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t(ui.switchLanguage)}
      className="flex items-center gap-1 text-caption"
    >
      {locales.map((value, index) => (
        <span key={value} className="flex items-center gap-1">
          {index > 0 && <span className="text-line">/</span>}
          <button
            type="button"
            onClick={() => setLocale(value)}
            aria-pressed={locale === value}
            className={[
              "transition-colors transition-fast",
              locale === value
                ? "text-ink font-medium"
                : "text-ink-muted hover:text-ink",
            ].join(" ")}
          >
            {localeShortLabel[value]}
          </button>
        </span>
      ))}
    </div>
  );
}

export function Header({ className = "" }: HeaderProps) {
  const { t } = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-bg focus:px-4 focus:py-2"
      >
        {t(ui.skipToContent)}
      </a>

      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="text-body font-medium tracking-tight">
          {t(site.wordmark)}
        </Link>

        <div className="flex items-center gap-6">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "text-body transition-colors transition-fast",
                        active ? "text-ink" : "text-ink-muted hover:text-ink",
                      ].join(" ")}
                    >
                      {t(item.label)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <LocaleToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={t(menuOpen ? ui.closeMenu : ui.openMenu)}
            className="md:hidden"
          >
            <span aria-hidden="true" className="text-body">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!menuOpen}
        className="border-t border-line md:hidden"
      >
        <ul className="container-page flex flex-col py-2">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-body text-ink-muted hover:text-ink transition-colors transition-fast"
              >
                {t(item.label)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
