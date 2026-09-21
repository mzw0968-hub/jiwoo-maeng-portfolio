"use client";

import { useLocale } from "@/lib/locale-context";
import { site, socials } from "@/data/site";
import { ui } from "@/data/ui";
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
        {/* 줄바꿈을 사전에서 관리하므로 whitespace-pre-line으로 살린다. */}
        <h2 className="text-h1 whitespace-pre-line text-balance">
          {t(ui.footerHeadline)}
        </h2>

        <a
          href={`mailto:${site.email}`}
          className="text-h3 text-accent hover:text-accent-hover mt-8 inline-block underline underline-offset-4 transition-colors transition-fast"
        >
          {site.email}
        </a>

        {socials.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-6">
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
        )}

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
