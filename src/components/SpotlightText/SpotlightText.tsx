"use client";

import { useRef, type MouseEvent } from "react";
import type { SpotlightTextProps } from "./SpotlightText.types";

/**
 * 커서를 따라다니는 스포트라이트. 커서 주변만 포인트 컬러가 되고
 * 바깥으로 갈수록 본문 컬러로 번진다.
 *
 * 좌표는 React state가 아니라 CSS 변수에 직접 쓴다. mousemove마다
 * 리렌더를 돌리면 헤드라인처럼 큰 텍스트에서 프레임이 떨어진다.
 *
 * 스타일은 globals.css 의 .spotlight-text 에 있다.
 * 호버하지 않은 상태에서는 아무 것도 걸지 않아, 효과가 동작하지 않는
 * 환경에서도 평범한 텍스트로 읽힌다.
 */
export function SpotlightText({ children, className = "" }: SpotlightTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const track = (event: MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  };

  return (
    <span
      ref={ref}
      className={["spotlight-text block", className].filter(Boolean).join(" ")}
      onMouseEnter={(event) => {
        track(event);
        ref.current?.setAttribute("data-active", "true");
      }}
      onMouseMove={track}
      onMouseLeave={() => {
        ref.current?.removeAttribute("data-active");
      }}
    >
      {children}
    </span>
  );
}
