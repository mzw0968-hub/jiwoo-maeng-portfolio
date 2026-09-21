/**
 * 프로젝트 전역 타입.
 *
 * 사용자에게 노출되는 모든 문자열은 LocalizedText를 쓴다.
 * 한쪽 언어를 빠뜨리면 컴파일 에러가 나므로 번역 누락이 빌드에서 잡힌다.
 * (PRD 성공 기준 M9)
 */

export type Locale = "ko" | "en";

export type LocalizedText = {
  ko: string;
  en: string;
};

/** 고유명사(도구 이름), URL, 이메일은 번역하지 않으므로 그냥 string을 쓴다. */

export type ProjectCategory = "ui-ai" | "branding";

export type ProjectStatus = "done" | "wip";

export type ProjectLink = {
  label: LocalizedText;
  url: string;
};

export type ProjectBody = {
  problem: LocalizedText;
  process: LocalizedText;
  /** 브랜딩·그래픽 프로젝트는 AI 워크플로가 없을 수 있다. 없으면 렌더링하지 않는다. */
  aiWorkflow?: LocalizedText;
  result: LocalizedText;
  learnings: LocalizedText;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  category: ProjectCategory;
  status: ProjectStatus;
  role: LocalizedText;
  /** 언어 무관 동일 표기. 예: "2026.03 - 2026.06" */
  period: string;
  /** 도구 이름은 고유명사라 번역하지 않는다. */
  tools: string[];
  /** public/projects/[slug]/ 기준 경로. 없으면 회색 플레이스홀더를 렌더링한다. */
  thumbnail?: string;
  /** 카드·상세에서 자동 재생할 영상. 뷰포트에 들어올 때만 재생한다. */
  video?: string;
  links?: ProjectLink[];
  body: ProjectBody;
};

export type Note = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  /** ISO 날짜. 예: "2026-09-15" */
  date: string;
};
