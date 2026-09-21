import { logoRegistry } from "./logos";
import type { ToolLogoProps } from "./ToolLogo.types";

/**
 * 도구 로고를 단색으로 렌더링한다.
 *
 * 로고는 세 단계로 해결한다.
 *   1. 레지스트리에 path가 있으면 인라인 SVG로 그린다 (대부분)
 *   2. src가 주어지면 그 파일을 CSS mask로 그린다 — 원본이 컬러여도 단색이 된다
 *   3. 둘 다 없으면 이니셜 플레이스홀더를 그려 줄 높이를 지킨다
 *
 * 색은 부모의 currentColor를 따른다. 회색은 text-ink-muted로 지정한다.
 */

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

export function ToolLogo({ name, src, className = "" }: ToolLogoProps) {
  const classes = ["h-6 w-6", className].filter(Boolean).join(" ");
  const logo = logoRegistry[name];

  if (logo) {
    return (
      <svg
        viewBox={logo.viewBox}
        role="img"
        aria-label={name}
        fill="currentColor"
        fillRule={logo.fillRule}
        className={classes}
      >
        {logo.shapes.map((shape, index) => (
          <path
            key={index}
            d={shape.d}
            /* 흰 글자처럼 파여 보여야 하는 면은 배경색으로 칠한다.
               원본이 검은 박스 + 흰 글자인 Adobe 로고가 여기 해당한다. */
            fill={shape.knockout ? "var(--color-bg)" : undefined}
          />
        ))}
      </svg>
    );
  }

  if (src) {
    return (
      <span
        role="img"
        aria-label={name}
        className={classes}
        style={{
          display: "inline-block",
          backgroundColor: "currentColor",
          WebkitMaskImage: `url(${src})`,
          maskImage: `url(${src})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />
    );
  }

  // 로고가 아직 없는 도구. 줄 높이를 지켜 레이아웃이 흔들리지 않게 한다.
  return (
    <span
      aria-hidden="true"
      className={`${classes} flex items-center justify-center rounded-sm border border-current opacity-50`}
      style={{ fontSize: "0.625rem", letterSpacing: "0.02em" }}
    >
      {initials(name)}
    </span>
  );
}
