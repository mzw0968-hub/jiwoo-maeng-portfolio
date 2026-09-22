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

export type ProjectCategory = "ui-ai" | "ui" | "branding";

export type ProjectStatus = "done" | "wip";

export type ProjectImage = {
  /** public/ 기준 경로 */
  src: string;
  /** 원본 픽셀 크기. 비율을 계산해 자리를 미리 잡는 데 쓴다. */
  width: number;
  height: number;
};

export type ProjectVideo = {
  src: string;
  /** 원본 픽셀 크기. 비율대로 자리를 잡아 레이아웃이 밀리지 않게 한다. */
  width: number;
  height: number;
  /** 재생 전에 보여줄 정지 이미지 (선택) */
  poster?: string;
};

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
  /**
   * 목록·홈 카드에 쓰는 썸네일. **클릭 전 영역에만** 쓴다.
   * 상세 페이지 상단은 cover를 쓰므로 둘은 다른 이미지다.
   * 없으면 회색 플레이스홀더를 렌더링한다.
   */
  thumbnail?: string;
  /**
   * 상세 페이지 본문 이미지. 적은 순서대로 세로로 쌓인다.
   * 없으면 회색 플레이스홀더를 렌더링한다.
   *
   * 비율을 자르지 않고 원본 그대로 보여준다 — 케이스 스터디처럼
   * 세로로 긴 이미지를 16:9로 잘라버리면 내용이 사라진다.
   * 그래서 크기를 함께 적는다. 미리 알아야 레이아웃이 밀리지 않는다.
   *
   * 장마다 비율이 달라도 된다. 좌우 폭만 컨테이너에 맞춘다.
   */
  covers?: ProjectImage[];
  /**
   * 시연 영상. 상세 페이지에서 cover 이미지 **아래에** 붙는다.
   * 카드에서는 썸네일이 없을 때만 쓰인다.
   */
  video?: ProjectVideo;
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
