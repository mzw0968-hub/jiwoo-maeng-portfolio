"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { ui } from "@/data/ui";
import type { NoteWithBody } from "@/data/notes";
import { FadeUp } from "@/components/FadeUp";

export function NoteDetail({ note }: { note: NoteWithBody }) {
  const { t } = useLocale();

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
          href="/notes"
          className="text-caption text-ink-muted hover:text-ink transition-colors transition-fast"
        >
          ← {t(ui.notesTitle)}
        </Link>

        <p className="text-caption text-ink-muted mt-8">{note.date}</p>
        <h1 className="text-h1 mt-3 max-w-[22ch] text-balance">
          {t(note.title)}
        </h1>

        <div className="mt-10 max-w-[66ch] border-t border-line pt-8">
          <p className="text-body whitespace-pre-line text-pretty">
            {note.body ? t(note.body) : t(note.summary)}
          </p>
        </div>
      </FadeUp>
    </article>
  );
}
