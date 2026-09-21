"use client";

import { useLocale } from "@/lib/locale-context";
import { numbers, site, toolkit } from "@/data/site";
import { featuredSlugs, projects } from "@/data/projects";
import { ui } from "@/data/ui";
import { DragScroller } from "@/components/DragScroller";
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
      <section style={{ paddingTop: "var(--space-section)" }}>
        <div className="container-page">
          <FadeUp>
            <SectionTitle
              title={ui.selectedWorkTitle}
              action={{ label: ui.viewAllWork, href: "/work" }}
            />
          </FadeUp>
        </div>

        {/*
          카드 크기를 줄이지 않고 한 줄로 나열한다. 컨테이너 안에 가두지
          않고 화면 끝까지 흘려보내되, 시작점만 본문과 줄을 맞춘다.
          넘치는 만큼은 마우스로 끌어서 본다.
        */}
        <DragScroller
          label={t(ui.selectedWorkTitle)}
          /* 두 번째 카드를 화면 정중앙에 놓고 시작한다. */
          centerIndex={1}
          className="bleed-row mt-12"
        >
          {/*
            w-max + mx-auto: 카드가 화면에 다 들어가면 가운데로 모이고,
            넘치면 자동 여백이 0이 되어 정상적으로 스크롤된다.

            justify-center를 쓰면 안 된다 — 넘칠 때 왼쪽으로 삐져나간
            부분에 스크롤로 닿을 수 없게 된다.
          */}
          <div
            className="mx-auto flex w-max"
            style={{ gap: "var(--space-block)" }}
          >
            {featured.map((project, index) => (
              <FadeUp
                key={project.slug}
                delay={index * 0.06}
                className="shrink-0"
              >
                <div
                  data-scroll-item
                  style={{ width: "var(--card-featured)" }}
                >
                  <ProjectCard
                    project={project}
                    priority={index === 0}
                    /* --card-featured와 같은 식. 카드 폭이 유동적이므로
                       고정값을 주면 필요보다 크거나 작은 이미지를 받는다. */
                    sizes="(min-width: 640px) calc(20rem + 12.5vw), 85vw"
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </DragScroller>
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
