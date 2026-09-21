"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/locale-context";
import { categoryLabel, statusLabel, ui } from "@/data/ui";
import { Tag } from "@/components/Tag";
import type { ProjectCardProps } from "./ProjectCard.types";

export function ProjectCard({
  project,
  priority = false,
  className = "",
}: ProjectCardProps) {
  const { t } = useLocale();
  const videoRef = useRef<HTMLVideoElement>(null);

  /**
   * 영상은 화면에 보일 때만 재생한다. 목록에 카드가 여러 장 있을 때
   * 전부 동시에 디코딩되면 첫 화면 로딩이 느려진다. (PRD 품질 기준)
   */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {
            // 브라우저가 자동 재생을 막아도 poster가 남으므로 조용히 넘어간다.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <article className={["w-full", className].filter(Boolean).join(" ")}>
      <Link href={`/work/${project.slug}`} className="group block">
        {/* 비율을 고정해 파일이 없어도 레이아웃이 흔들리지 않는다. */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-surface">
          {project.video ? (
            <video
              ref={videoRef}
              src={project.video}
              poster={project.thumbnail}
              muted
              loop
              playsInline
              preload="none"
              className="h-full w-full object-cover transition-transform transition-base group-hover:scale-[1.3]"
            />
          ) : project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={t(project.title)}
              fill
              priority={priority}
              sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform transition-base group-hover:scale-[1.3]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-caption text-ink-muted">
                {t(ui.noImage)}
              </span>
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Tag>{t(categoryLabel[project.category])}</Tag>
          <Tag variant="status" status={project.status}>
            {t(statusLabel[project.status])}
          </Tag>
        </div>

        <h3 className="text-h3 mt-3 group-hover:text-accent transition-colors transition-fast">
          {t(project.title)}
        </h3>
        <p className="text-body text-ink-muted mt-2">{t(project.summary)}</p>
      </Link>
    </article>
  );
}
