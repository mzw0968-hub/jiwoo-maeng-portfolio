import type { ToolLogoProps } from "./ToolLogo.types";

/**
 * 도구 로고를 단색 실루엣으로 렌더링한다.
 *
 * 로고는 세 단계로 해결한다.
 *   1. src가 주어지면 그 SVG를 CSS mask로 그린다 — 원본이 컬러여도 단색이 된다
 *   2. 내장 path가 있으면 인라인 SVG로 그린다
 *   3. 둘 다 없으면 이니셜 플레이스홀더를 그려 줄 높이를 지킨다
 *
 * 색은 부모의 currentColor를 따른다. 회색은 text-ink-muted로 지정한다.
 */

/** 24×24 viewBox 기준 path 데이터. */
const builtinPaths: Record<string, string> = {
  Figma:
    "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z",
  "Claude Code":
    "M21 10.5h3v3h-3v3h-1.5v3H18v-3h-1.5v3H15v-3H9v3H7.5v-3H6v3H4.5v-3H3v-3H0v-3h3v-6h18Zm-15 0h1.5v-3H6Zm10.5 0H18v-3h-1.5z",
  Gemini:
    "M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81",
};

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

export function ToolLogo({ name, src, className = "" }: ToolLogoProps) {
  const size = "h-6 w-6";
  const classes = [size, className].filter(Boolean).join(" ");

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

  const path = builtinPaths[name];

  if (path) {
    return (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={name}
        fill="currentColor"
        className={classes}
      >
        <path d={path} />
      </svg>
    );
  }

  // 로고 파일이 아직 없는 도구. 줄 높이를 지켜 레이아웃이 흔들리지 않게 한다.
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
