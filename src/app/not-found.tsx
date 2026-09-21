"use client";

import { useLocale } from "@/lib/locale-context";
import { ui } from "@/data/ui";
import { Button } from "@/components/Button";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <div
      className="container-page text-center"
      style={{
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      <p className="text-caption text-ink-muted">404</p>
      <h1 className="text-h1 mt-4">{t(ui.notFoundTitle)}</h1>
      <p className="text-body text-ink-muted mt-5">{t(ui.notFoundBody)}</p>
      <div className="mt-10">
        <Button href="/" size="lg">
          {t(ui.backHome)}
        </Button>
      </div>
    </div>
  );
}
