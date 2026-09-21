"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { site, socials } from "@/data/site";
import { nav, ui } from "@/data/ui";
import type { FooterProps } from "./Footer.types";

export function Footer({ className = "" }: FooterProps) {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer
      className={["border-t border-line", className].filter(Boolean).join(" ")}
      style={{ marginTop: "var(--space-section)" }}
    >
      <div
        className="container-page"
        style={{
          paddingTop: "var(--space-section)",
          paddingBottom: "var(--space-block)",
        }}
      >
        <div className="grid gap-12 md:grid-cols-12">
          {/* 연락처 — 푸터의 주인공 */}
          <div className="md:col-span-7">
            <h2 className="text-h1">{t(ui.footerHeadline)}</h2>
            <a
              href={`mailto:${site.email}`}
              className="text-h3 text-accent hover:text-accent-hover mt-6 inline-block underline underline-offset-4 transition-colors transition-fast"
            >
              {site.email}
            </a>
          </div>

          {/* 메뉴 */}
          <nav aria-label="Footer" className="md:col-span-3">
            <h3 className="text-caption text-ink-muted">
              {t(ui.navGroupLabel)}
            </h3>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body text-ink-muted hover:text-ink transition-colors transition-fast"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 소셜 — URL이 없으면 블록 자체를 렌더링하지 않는다 */}
          {socials.length > 0 && (
            <div className="md:col-span-2">
              <h3 className="text-caption text-ink-muted">
                {t(ui.socialGroupLabel)}
              </h3>
              <ul className="mt-4 space-y-3">
                {socials.map((social) => (
                  <li key={social.url}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body text-ink-muted hover:text-ink transition-colors transition-fast"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <p
          className="text-caption text-ink-muted border-t border-line pt-6"
          style={{ marginTop: "var(--space-section)" }}
        >
          © {year} {t(ui.copyright)}
        </p>
      </div>
    </footer>
  );
}
