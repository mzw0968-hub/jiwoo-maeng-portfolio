"use client";

import { useLocale } from "@/lib/locale-context";
import { collaboration, intro, timeline, tools } from "@/data/about";
import { site } from "@/data/site";
import { FadeUp } from "@/components/FadeUp";

export function AboutContent() {
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
        <h1 className="text-h1">{t(site.name)}</h1>
        <p className="text-body text-ink-muted mt-8 max-w-[58ch] text-pretty">
          {t(intro)}
        </p>
      </FadeUp>

      {/* 협업 방식 — AX 디자이너 명제와 직결되는 문단이라 따로 세운다 */}
      <FadeUp>
        <section
          className="border-t border-line pt-8 md:grid md:grid-cols-12 md:gap-8"
          style={{ marginTop: "var(--space-section)" }}
        >
          <h2 className="text-caption text-ink-muted md:col-span-3">
            {t(collaboration.title)}
          </h2>
          <p className="text-h3 mt-4 max-w-[46ch] text-pretty md:col-span-9 md:mt-0">
            {t(collaboration.body)}
          </p>
        </section>
      </FadeUp>

      {/* 경험 타임라인 */}
      <section style={{ marginTop: "var(--space-section)" }}>
        <FadeUp>
          <h2 className="text-caption text-ink-muted border-t border-line pt-8">
            Experience
          </h2>
        </FadeUp>

        <ul className="mt-8">
          {timeline.map((entry, index) => (
            <li
              key={`${t(entry.title)}-${index}`}
              className="border-b border-line py-8 md:grid md:grid-cols-12 md:gap-8"
            >
              <FadeUp delay={index * 0.04}>
                <div className="md:grid md:grid-cols-12 md:gap-8">
                  <p className="text-caption text-ink-muted md:col-span-3">
                    {t(entry.period)}
                  </p>
                  <div className="mt-2 md:col-span-9 md:mt-0">
                    <h3 className="text-h3 text-balance">{t(entry.title)}</h3>
                    {entry.description && (
                      <p className="text-body text-ink-muted mt-2 text-pretty">
                        {t(entry.description)}
                      </p>
                    )}
                  </div>
                </div>
              </FadeUp>
            </li>
          ))}
        </ul>
      </section>

      {/* 사용 도구와 활용 수준 */}
      <section style={{ marginTop: "var(--space-section)" }}>
        <FadeUp>
          <h2 className="text-caption text-ink-muted border-t border-line pt-8">
            Tools
          </h2>
        </FadeUp>

        <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3">
          {tools.map((tool, index) => (
            <FadeUp key={tool.name} delay={index * 0.03}>
              <div>
                <dt className="text-body">{tool.name}</dt>
                <dd className="text-caption text-ink-muted mt-1">
                  {t(tool.level)}
                </dd>
              </div>
            </FadeUp>
          ))}
        </dl>
      </section>
    </div>
  );
}
