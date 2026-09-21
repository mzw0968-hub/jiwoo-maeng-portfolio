import type { LocalizedText } from "@/lib/types";

/**
 * About 페이지 콘텐츠.
 */

export const intro: LocalizedText = {
  ko: "[짧은 자기소개를 3~4문장으로 채워주세요. 어떤 디자이너인지, 무엇을 만들어 왔는지, 지금 무엇에 관심이 있는지.]",
  en: "[A short introduction in three or four sentences: what kind of designer you are, what you've built, and what you're interested in now.]",
};

/** AX 디자이너 명제와 직결되는 문단이라 별도 블록으로 둔다. (PRD 5.4) */
export const collaboration: {
  title: LocalizedText;
  body: LocalizedText;
} = {
  title: { ko: "협업 방식", en: "How I work with others" },
  body: {
    ko: "명확한 언어로 전달하고, 상대의 핵심을 정확히 이해하는 것. 사람에게도 AI에게도 같은 원칙이 적용됩니다. 좋은 프롬프트는 결국 좋은 커뮤니케이션과 같은 문제였습니다.",
    en: "Say things clearly, and understand what the other side actually means. The same principle applies to people and to AI. A good prompt turned out to be the same problem as good communication.",
  },
};

export type TimelineEntry = {
  period: LocalizedText;
  title: LocalizedText;
  description?: LocalizedText;
};

export const timeline: TimelineEntry[] = [
  {
    period: { ko: "중학교", en: "Middle school" },
    title: { ko: "캐나다 어학연수", en: "Studied in Canada" },
    description: {
      ko: "8학년 1학기, 9학년 이수",
      en: "One semester of grade 8, full year of grade 9",
    },
  },
  {
    period: { ko: "[기간]", en: "[Period]" },
    title: {
      ko: "제품 디자인 동아리 팀 리딩",
      en: "Led a product design club",
    },
    description: {
      ko: "약 30명, 6개 부서 · 청소기 디자인, LA 올림픽 굿즈 브랜딩",
      en: "~30 members across 6 teams · Vacuum cleaner design, LA Olympics merchandise branding",
    },
  },
  {
    period: { ko: "[기간]", en: "[Period]" },
    title: { ko: "졸업전시 컨셉팀장", en: "Concept lead, graduation exhibition" },
    description: {
      ko: "6명 팀 · 컨셉, 스토리, 로고, 타이포, 컬러, 굿즈, 도록, 영상, 포스터 총괄",
      en: "Team of 6 · Concept, story, logo, typography, color, merchandise, catalogue, video, posters",
    },
  },
  {
    period: { ko: "[기간]", en: "[Period]" },
    title: {
      ko: "멘토링 특강 「남들과 다른 디자이너 되기 TIP」",
      en: "Mentoring talk: “How to become a different kind of designer”",
    },
  },
];

export type ToolProficiency = {
  name: string;
  level: LocalizedText;
};

/** 사용 도구와 활용 수준. 수준 표현은 지우 님이 조정해주세요. */
export const tools: ToolProficiency[] = [
  { name: "Figma", level: { ko: "주력", en: "Primary" } },
  { name: "Figma Make", level: { ko: "주력", en: "Primary" } },
  { name: "Claude Code", level: { ko: "주력", en: "Primary" } },
  { name: "Codex", level: { ko: "활용", en: "Working" } },
  { name: "Gemini", level: { ko: "활용", en: "Working" } },
  { name: "Grok", level: { ko: "활용", en: "Working" } },
  { name: "Antigravity", level: { ko: "활용", en: "Working" } },
  { name: "Photoshop", level: { ko: "숙련", en: "Proficient" } },
  { name: "Illustrator", level: { ko: "숙련", en: "Proficient" } },
];
