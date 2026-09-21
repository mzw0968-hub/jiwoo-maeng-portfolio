import type { TagProps } from "./Tag.types";

/**
 * 카테고리 태그와 상태 배지를 겸한다.
 *
 * 상태를 색으로만 구분하지 않는다 — 배지는 항상 텍스트("진행 중" / "완성")를
 * 함께 노출하므로 색각 이상 사용자도 구분할 수 있다.
 */
export function Tag({
  children,
  variant = "category",
  status,
  className = "",
}: TagProps) {
  const base =
    "inline-flex items-center rounded-full text-caption whitespace-nowrap";

  const styles =
    variant === "status"
      ? status === "wip"
        ? "border border-accent text-accent px-3 py-1"
        : "border border-line text-ink-muted px-3 py-1"
      : "text-ink-muted";

  return (
    <span className={[base, styles, className].filter(Boolean).join(" ")}>
      {children}
    </span>
  );
}
