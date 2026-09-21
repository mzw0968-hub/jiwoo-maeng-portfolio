import type { LocalizedText } from "@/lib/types";

/**
 * 사이트 전역 정보. Header·Footer·Contact가 공유한다.
 */

export const site = {
  name: { ko: "맹지우", en: "Jiwoo Maeng" } satisfies LocalizedText,

  /** 두 언어 모드 공통으로 영문을 유지한다. (PRD 5.1) */
  headline: "From AI capability to human experience.",

  tagline: {
    ko: "기술의 가능성을 사람 중심의 제품 경험으로 연결합니다.",
    en: "I turn what technology makes possible into product experiences built around people.",
  } satisfies LocalizedText,

  /** 공개 승인됨. (PRD 5.6) */
  email: "mzw0968@gmail.com",
};

/**
 * AI Toolkit — 홈에서 가로 한 줄로 늘어놓는다.
 * 도구 이름은 고유명사라 번역하지 않는다.
 */
export type Tool = {
  name: string;
  /**
   * public/logos/ 에 넣은 SVG 경로. 비워 두면 내장 로고를 찾고,
   * 그것도 없으면 이니셜 플레이스홀더가 표시된다.
   * 넣는 방법은 public/logos/README.md 참고.
   */
  logo?: string;
};

export const toolkit: Tool[] = [
  { name: "Figma" },
  { name: "Figma Make" },
  { name: "Claude Code" },
  { name: "Codex" },
  { name: "Gemini" },
  { name: "Grok Bot" },
  // 유일하게 벡터 원본이 없어 PNG를 마스크로 쓴다. SVG를 구하면 교체할 것.
  { name: "Antigravity", logo: "/logos/antigravity.png" },
  { name: "Photoshop" },
  { name: "Illustrator" },
];

export type Stat = {
  /** 값은 사용자가 채운다. 비어 있으면 — 로 표시된다. */
  value: string;
  label: LocalizedText;
};

export const numbers: Stat[] = [
  {
    value: "",
    label: { ko: "다뤄 본 AI 엔진", en: "AI engines used" },
  },
  {
    value: "",
    label: { ko: "직접 배포한 서비스", en: "Services shipped" },
  },
  {
    value: "",
    label: { ko: "이끈 팀원", en: "People led" },
  },
  {
    value: "",
    label: { ko: "진행한 프로젝트", en: "Projects completed" },
  },
];

/**
 * 이력서 PDF. 파일을 public/ 에 넣고 경로를 채우면 버튼이 자동으로 나타난다.
 * 비어 있으면 Contact 페이지가 버튼 자체를 렌더링하지 않는다. (PRD Q9)
 */
export const resumeUrl = "";

export type SocialLink = {
  label: string;
  url: string;
};

/**
 * 소셜 링크. URL 미확정 상태다. (PRD Q4-b)
 * 빈 배열이면 Footer·Contact가 해당 블록을 렌더링하지 않는다.
 */
export const socials: SocialLink[] = [];
