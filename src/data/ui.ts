import type { LocalizedText, ProjectCategory, ProjectStatus } from "@/lib/types";

/**
 * UI 라벨 사전. 컴포넌트에 문자열을 직접 쓰지 않고 전부 여기서 가져온다.
 * 번역 누락은 LocalizedText 타입이 컴파일 시점에 잡아준다.
 */

export const nav: { href: string; label: LocalizedText }[] = [
  { href: "/work", label: { ko: "Work", en: "Work" } },
  { href: "/about", label: { ko: "About", en: "About" } },
  { href: "/notes", label: { ko: "Notes", en: "Notes" } },
  { href: "/contact", label: { ko: "Contact", en: "Contact" } },
];

export const ui = {
  skipToContent: { ko: "본문으로 건너뛰기", en: "Skip to content" },
  openMenu: { ko: "메뉴 열기", en: "Open menu" },
  closeMenu: { ko: "메뉴 닫기", en: "Close menu" },
  switchLanguage: { ko: "언어 전환", en: "Switch language" },
  viewProject: { ko: "프로젝트 보기", en: "View project" },
  viewAllWork: { ko: "전체 보기", en: "View all" },
  noImage: { ko: "이미지 준비 중", en: "Image coming soon" },
  backToWork: { ko: "Work로 돌아가기", en: "Back to Work" },
  previousProject: { ko: "이전 프로젝트", en: "Previous project" },
  nextProject: { ko: "다음 프로젝트", en: "Next project" },
  footerHeadline: { ko: "Contact", en: "Contact" },
  emailLabel: { ko: "이메일", en: "Email" },
  copyright: { ko: "맹지우", en: "Jiwoo Maeng" },
  navGroupLabel: { ko: "메뉴", en: "Menu" },
  socialGroupLabel: { ko: "소셜", en: "Social" },
  resumeDownload: { ko: "이력서 내려받기", en: "Download résumé" },
  toolkitTitle: { ko: "Design Skills", en: "Design Skills" },
  selectedWorkTitle: { ko: "Projects", en: "Projects" },
  numbersTitle: { ko: "Numbers", en: "Numbers" },
  notesTitle: { ko: "Notes", en: "Notes" },
  readMore: { ko: "읽기", en: "Read" },
  notFoundTitle: { ko: "페이지를 찾을 수 없습니다", en: "Page not found" },
  notFoundBody: {
    ko: "주소가 바뀌었거나 삭제된 페이지입니다.",
    en: "This page may have moved or no longer exists.",
  },
  backHome: { ko: "홈으로", en: "Back home" },
  roleLabel: { ko: "역할", en: "Role" },
  periodLabel: { ko: "기간", en: "Period" },
  toolsLabel: { ko: "사용 도구", en: "Tools" },
  problemLabel: { ko: "Problem", en: "Problem" },
  processLabel: { ko: "Process", en: "Process" },
  aiWorkflowLabel: { ko: "AI Workflow", en: "AI Workflow" },
  resultLabel: { ko: "Result", en: "Result" },
  learningsLabel: { ko: "Learnings", en: "Learnings" },
} satisfies Record<string, LocalizedText>;

export const categoryLabel: Record<ProjectCategory, LocalizedText> = {
  "ui-ai": { ko: "UI·AI 구현", en: "UI & AI" },
  branding: { ko: "브랜딩·그래픽", en: "Branding & Graphics" },
};

export const statusLabel: Record<ProjectStatus, LocalizedText> = {
  done: { ko: "완성", en: "Completed" },
  wip: { ko: "진행 중", en: "In progress" },
};

/** Work 목록 필터. "전체"는 카테고리가 아니라 필터 전용 값이다. */
export const filterAllLabel: LocalizedText = { ko: "전체", en: "All" };
