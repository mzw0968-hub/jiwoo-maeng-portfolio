"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import type { SectionTitleProps } from "./SectionTitle.types";

export function SectionTitle({
  title,
  eyebrow,
  action,
  as = "h2",
  className = "",
}: SectionTitleProps) {
  const { t } = useLocale();
  const Heading = as;

  return (
    <div
      className={[
        "flex flex-wrap items-end justify-between gap-4",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div>
        {eyebrow && (
          <p className="text-caption text-ink-muted mb-3">{t(eyebrow)}</p>
        )}
        <Heading className={as === "h1" ? "text-h1" : "text-h2"}>
          {t(title)}
        </Heading>
      </div>

      {action && (
        <Link
          href={action.href}
          className="text-body text-accent hover:text-accent-hover underline underline-offset-4 transition-colors transition-fast"
        >
          {t(action.label)}
        </Link>
      )}
    </div>
  );
}
