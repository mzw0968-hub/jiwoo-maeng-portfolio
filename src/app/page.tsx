"use client";

import { useLocale } from "@/lib/locale-context";
import { numbers, site, toolkit } from "@/data/site";
import { featuredSlugs, projects } from "@/data/projects";
import { ui } from "@/data/ui";
import { FadeUp } from "@/components/FadeUp";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ToolLogo } from "@/components/ToolLogo";

const featured = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project) => project !== undefined);

export default function HomePage() {
  const { t } = useLocale();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="container-page text-center"
        style={{
          paddingTop: "var(--space-section)",
          paddingBottom: "var(--space-section)",
        }}
      >
        <FadeUp>
          {/* 헤드라인은 두 언어 모드 공통으로 영문을 유지한다 (PRD 5.1) */}
          <h1 className="text-display mx-auto max-w-[16ch] text-balance">
            {site.headline}
          </h1>
          <p className="text-body text-ink-muted mx-auto mt-8 max-w-[52ch] text-pretty">
            {t(site.tagline)}
          </p>
        </FadeUp>
      </section>

      {/* ── AI Toolkit ───────────────────────────────────────────────────── */}
      <section className="container-page">
        <FadeUp>
          <h2 className="text-caption text-ink-muted text-center">
            {t(ui.toolkitTitle)}
          </h2>
          <ul className="text-ink-muted mt-8 flex flex-wrap items-start justify-center gap-x-10 gap-y-8">
            {toolkit.map((tool) => (
              <li
                key={tool.name}
                className="flex flex-col items-center gap-3"
              >
                <ToolLogo name={tool.name} src={tool.logo} />
                {/* 도구 이름은 줄바꿈하지 않는다. "Claude Code"가 두 줄로 쪼개지면 읽기 나쁘다. */}
                <span className="text-caption whitespace-nowrap">
                  {tool.name}
                </span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </section>

      {/* ── Selected Work ────────────────────────────────────────────────── */}
      <section
        className="container-page"
        style={{ paddingTop: "var(--space-section)" }}
      >
        <FadeUp>
          <SectionTitle
            title={ui.selectedWorkTitle}
            action={{ label: ui.viewAllWork, href: "/work" }}
          />
        </FadeUp>

        <div
          className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2"
          style={{ rowGap: "var(--space-section)" }}
        >
          {featured.map((project, index) => (
            <FadeUp key={project.slug} delay={index * 0.06}>
              <ProjectCard project={project} priority={index === 0} />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── Numbers ──────────────────────────────────────────────────────── */}
      <section
        className="container-page"
        style={{ paddingTop: "var(--space-section)" }}
      >
        <FadeUp>
          <SectionTitle title={ui.numbersTitle} />
        </FadeUp>

        <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {numbers.map((stat, index) => (
            <FadeUp key={t(stat.label)} delay={index * 0.06}>
              <div className="border-t border-line pt-5">
                {/* 값이 비어 있으면 자리만 지킨다. 나중에 채우면 그대로 나온다. */}
                <dd className="text-h1">{stat.value || "—"}</dd>
                <dt className="text-caption text-ink-muted mt-3">
                  {t(stat.label)}
                </dt>
              </div>
            </FadeUp>
          ))}
        </dl>
      </section>

      {/* Notes 미리보기 섹션은 글이 준비될 때까지 내려둔다.
          되살리려면 git 이력에서 이 자리의 섹션을 되돌리고,
          data/ui.ts 의 nav 항목과 src/app/notes/ 라우트를 함께 복구한다. */}
    </>
  );
}
