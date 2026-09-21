"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { notes } from "@/data/notes";
import { ui } from "@/data/ui";
import { FadeUp } from "@/components/FadeUp";
import { SectionTitle } from "@/components/SectionTitle";

export function NotesList() {
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
        <SectionTitle as="h1" title={ui.notesTitle} />
      </FadeUp>

      <ul style={{ marginTop: "var(--space-block)" }}>
        {notes.map((note, index) => (
          <li key={note.slug} className="border-t border-line">
            <FadeUp delay={index * 0.04}>
              <Link
                href={`/notes/${note.slug}`}
                className="group block py-8 md:grid md:grid-cols-12 md:gap-8"
              >
                <p className="text-caption text-ink-muted md:col-span-3">
                  {note.date}
                </p>
                <div className="mt-3 md:col-span-9 md:mt-0">
                  <h2 className="text-h3 group-hover:text-accent transition-colors transition-fast text-balance">
                    {t(note.title)}
                  </h2>
                  <p className="text-body text-ink-muted mt-3 max-w-[60ch] text-pretty">
                    {t(note.summary)}
                  </p>
                </div>
              </Link>
            </FadeUp>
          </li>
        ))}
      </ul>
    </div>
  );
}
