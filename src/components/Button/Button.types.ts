import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export type ButtonSize = "md" | "lg";

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** 주어지면 링크로 렌더링한다. 없으면 button 엘리먼트. */
  href?: string;
  /** 외부 링크면 새 탭으로 연다. */
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  /** 부모가 폭을 통제한다. 컴포넌트가 자기 폭을 고정하지 않는다. */
  className?: string;
  "aria-label"?: string;
};
