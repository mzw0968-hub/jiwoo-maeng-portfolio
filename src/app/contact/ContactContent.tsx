"use client";

import { useLocale } from "@/lib/locale-context";
import { resumeUrl, site, socials } from "@/data/site";
import { ui } from "@/data/ui";
import { Button } from "@/components/Button";
import { FadeUp } from "@/components/FadeUp";

export function ContactContent() {
  const { t } = useLocale();

  return (
    <div
      className="container-page"
      style={{
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      <FadeUp>
        <h1 className="text-h1">{t(ui.footerHeadline)}</h1>

        <dl className="mt-12 border-t border-line pt-8">
          <dt className="text-caption text-ink-muted">{t(ui.emailLabel)}</dt>
          <dd className="mt-3">
            <a
              href={`mailto:${site.email}`}
              className="text-h2 text-accent hover:text-accent-hover underline underline-offset-4 transition-colors transition-fast"
            >
              {site.email}
            </a>
          </dd>
        </dl>

        {/* 소셜 URL이 없으면 블록 자체를 렌더링하지 않는다 */}
        {socials.length > 0 && (
          <div className="mt-12 border-t border-line pt-8">
            <h2 className="text-caption text-ink-muted">
              {t(ui.socialGroupLabel)}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {socials.map((social) => (
                <li key={social.url}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-ink-muted hover:text-ink transition-colors transition-fast"
                  >
                    {social.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 이력서 파일이 준비되면 resumeUrl을 채운다. 비어 있으면 버튼을 숨긴다. (PRD Q9) */}
        {resumeUrl && (
          <div className="mt-12">
            <Button href={resumeUrl} size="lg" external>
              {t(ui.resumeDownload)}
            </Button>
          </div>
        )}
      </FadeUp>
    </div>
  );
}
