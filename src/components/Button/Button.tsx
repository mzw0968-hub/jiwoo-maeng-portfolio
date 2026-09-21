import Link from "next/link";
import type { ButtonProps, ButtonSize, ButtonVariant } from "./Button.types";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors transition-fast disabled:cursor-not-allowed disabled:opacity-40";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-bg hover:bg-accent-hover",
  secondary: "border border-line text-ink hover:border-ink",
  ghost: "text-accent hover:text-accent-hover underline underline-offset-4",
};

const sizes: Record<ButtonSize, string> = {
  md: "text-caption px-5 py-2.5",
  lg: "text-body px-7 py-3.5",
};

/**
 * variant마다 컴포넌트를 나누지 않는다. 단일 컴포넌트 + props로 처리한다.
 * ghost는 인라인 링크용이라 패딩을 쓰지 않는다.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const styles = [
    base,
    variants[variant],
    variant === "ghost" ? "" : sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href && !disabled) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
