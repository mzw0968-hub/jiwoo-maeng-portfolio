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

export type SocialLink = {
  label: string;
  url: string;
};

/**
 * 소셜 링크. URL 미확정 상태다. (PRD Q4-b)
 * 빈 배열이면 Footer·Contact가 해당 블록을 렌더링하지 않는다.
 */
export const socials: SocialLink[] = [];
