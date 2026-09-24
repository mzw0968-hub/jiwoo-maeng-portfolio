"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { projects } from "@/data/projects";
import { categoryLabel, filterAllLabel, ui } from "@/data/ui";
import type { ProjectCategory } from "@/lib/types";
import { FadeUp } from "@/components/FadeUp";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import type { WorkListProps } from "./WorkList.types";

const filters: { value: ProjectCategory | "all"; href: string }[] = [
  { value: "all", href: "/work" },
  { value: "ui-ai", href: "/work?category=ui-ai" },
  { value: "branding", href: "/work?category=branding" },
];

function isCategory(value: string | undefined): value is ProjectCategory {
  return value === "ui-ai" || value === "branding";
}

/**
 * 필터를 URL에 반영해 공유와 뒤로가기가 동작하게 한다. (PRD 5.2)
 *
 * category는 서버에서 prop으로 받는다. useSearchParams로 읽으면 이
 * 컴포넌트가 서버 렌더에서 통째로 빠져 목록이 HTML에 실리지 않는다 —
 * 실제로 프로덕션 /work가 카드 0개짜리 15KB를 내려주고 있었다.
 */
export function WorkList({ category }: WorkListProps) {
  const { t } = useLocale();

  /** 값이 이상하면 조용히 전체로 떨어뜨린다. */
  const active: ProjectCategory | "all" = isCategory(category) ? category : "all";

  const visible =
    active === "all"
      ? projects
      : projects.filter((project) =>
          active === "ui-ai"
            ? project.category === "ui-ai" || project.category === "ui"
            : project.category === active,
        );

  return (
    <div
      className="container-page"
      style={{
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      <FadeUp>
        <SectionTitle as="h1" title={ui.projectsTitle} />
      </FadeUp>

      <FadeUp>
        <nav aria-label={t(filterAllLabel)} className="mt-10">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {filters.map((filter) => {
              const selected = filter.value === active;
              const label =
                filter.value === "all"
                  ? filterAllLabel
                  : categoryLabel[filter.value];

              return (
                <li key={filter.value}>
                  <Link
                    href={filter.href}
                    scroll={false}
                    aria-current={selected ? "true" : undefined}
                    className={[
                      "text-body transition-colors transition-fast",
                      selected
                        ? "text-ink underline underline-offset-4"
                        : "text-ink-muted hover:text-ink",
                    ].join(" ")}
                  >
                    {t(label)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </FadeUp>

      <div
        className="mt-12 grid gap-x-8 md:grid-cols-2"
        style={{ rowGap: "var(--space-section)" }}
      >
        {visible.map((project, index) => (
          <FadeUp key={project.slug} delay={index * 0.06}>
            <ProjectCard project={project} priority={index < 2} />
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
