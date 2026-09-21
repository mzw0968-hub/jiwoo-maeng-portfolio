"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { getAdjacentProjects } from "@/data/projects";
import { categoryLabel, statusLabel, ui } from "@/data/ui";
import type { LocalizedText, Project } from "@/lib/types";
import { FadeUp } from "@/components/FadeUp";
import { Tag } from "@/components/Tag";

function Block({
  label,
  text,
}: {
  label: LocalizedText;
  text: LocalizedText;
}) {
  const { t } = useLocale();

  return (
    <FadeUp>
      <section className="border-t border-line pt-6 md:grid md:grid-cols-12 md:gap-8">
        <h2 className="text-caption text-ink-muted md:col-span-3">
          {t(label)}
        </h2>
        <p className="text-body mt-3 whitespace-pre-line text-pretty md:col-span-9 md:mt-0">
          {t(text)}
        </p>
      </section>
    </FadeUp>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  const { t } = useLocale();
  const { previous, next } = getAdjacentProjects(project.slug);

  const meta: { label: LocalizedText; value: string }[] = [
    { label: ui.roleLabel, value: t(project.role) },
    { label: ui.periodLabel, value: project.period },
    { label: ui.toolsLabel, value: project.tools.join(", ") },
  ];

  return (
    <article
      className="container-page"
      style={{
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      <FadeUp>
        <Link
          href="/work"
          className="text-caption text-ink-muted hover:text-ink transition-colors transition-fast"
        >
          ← {t(ui.backToWork)}
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Tag>{t(categoryLabel[project.category])}</Tag>
          <Tag variant="status" status={project.status}>
            {t(statusLabel[project.status])}
          </Tag>
        </div>

        <h1 className="text-h1 mt-4 text-balance">{t(project.title)}</h1>
        <p className="text-body text-ink-muted mt-5 max-w-[60ch] text-pretty">
          {t(project.summary)}
        </p>

        <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-3">
          {meta.map((item) => (
            <div key={t(item.label)}>
              <dt className="text-caption text-ink-muted">{t(item.label)}</dt>
              <dd className="text-body mt-2">{item.value || "—"}</dd>
            </div>
          ))}
        </dl>
      </FadeUp>

      {/* 상세 상단 이미지·영상. 썸네일과는 다른 이미지를 쓴다 —
          카드에서 본 장면을 상세에서 또 보여줄 이유가 없다.
          파일이 없으면 회색 플레이스홀더가 자리를 지킨다. */}
      <FadeUp>
        <div
          className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-surface"
          style={{ marginTop: "var(--space-block)" }}
        >
          {project.video ? (
            <video
              src={project.video}
              poster={project.cover}
              controls
              muted
              loop
              playsInline
              preload="none"
              className="h-full w-full object-cover"
            />
          ) : project.cover ? (
            <Image
              src={project.cover}
              alt={t(project.title)}
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-caption text-ink-muted">
                {t(ui.noImage)}
              </span>
            </div>
          )}
        </div>
      </FadeUp>

      <div
        className="flex flex-col"
        style={{
          marginTop: "var(--space-section)",
          gap: "var(--space-block)",
        }}
      >
        <Block label={ui.problemLabel} text={project.body.problem} />
        <Block label={ui.processLabel} text={project.body.process} />
        {/* 브랜딩 프로젝트는 AI Workflow가 없다. 빈 블록은 렌더링하지 않는다. */}
        {project.body.aiWorkflow && (
          <Block label={ui.aiWorkflowLabel} text={project.body.aiWorkflow} />
        )}
        <Block label={ui.resultLabel} text={project.body.result} />
        <Block label={ui.learningsLabel} text={project.body.learnings} />
      </div>

      {project.links && project.links.length > 0 && (
        <FadeUp>
          <ul
            className="flex flex-wrap gap-6"
            style={{ marginTop: "var(--space-block)" }}
          >
            {project.links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-accent hover:text-accent-hover underline underline-offset-4 transition-colors transition-fast"
                >
                  {t(link.label)} ↗
                </a>
              </li>
            ))}
          </ul>
        </FadeUp>
      )}

      {/* 이전 / 다음 프로젝트 */}
      <nav
        aria-label={t(ui.viewAllWork)}
        className="flex justify-between gap-6 border-t border-line pt-8"
        style={{ marginTop: "var(--space-section)" }}
      >
        {previous ? (
          <Link href={`/work/${previous.slug}`} className="group max-w-[45%]">
            <span className="text-caption text-ink-muted">
              ← {t(ui.previousProject)}
            </span>
            <span className="text-h3 group-hover:text-accent transition-colors transition-fast mt-2 block text-balance">
              {t(previous.title)}
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next && (
          <Link
            href={`/work/${next.slug}`}
            className="group ml-auto max-w-[45%] text-right"
          >
            <span className="text-caption text-ink-muted">
              {t(ui.nextProject)} →
            </span>
            <span className="text-h3 group-hover:text-accent transition-colors transition-fast mt-2 block text-balance">
              {t(next.title)}
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}
