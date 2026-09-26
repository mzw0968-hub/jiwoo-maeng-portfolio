import type { LocalizedText } from "@/lib/types";

/**
 * About 페이지 콘텐츠.
 */

/**
 * 프로필 사진.
 *
 * public/profile/ 에 파일을 넣고 경로를 채우면 표시된다.
 * 비어 있으면 회색 플레이스홀더가 자리를 지켜 레이아웃이 흔들리지 않는다.
 * 세로 4:5 비율로 잘리므로 인물이 가운데 오는 사진이 좋다.
 */
export const profileImage = "/profile/jiwoo.png";

/** 사진의 대체 텍스트. 스크린리더가 읽는다. */
export const profileAlt: LocalizedText = {
  ko: "맹지우 프로필 사진",
  en: "Portrait of Jiwoo Maeng",
};

/** 사진 옆에 붙는 한 줄. 이름 아래 직함처럼 쓰인다. */
export const role: LocalizedText = {
  ko: "AX 디자이너",
  en: "AX Designer",
};

export const intro: LocalizedText = {
  ko: "사용자의 문제를 발견하고, AI를 활용해 실제로 작동하는 경험으로 구현하는 신입 디자이너입니다. 서비스의 맥락을 이해한 UI·UX 설계부터 인터랙티브 프로토타입 제작까지 직접 진행해 왔습니다. 현재는 AI가 사용자의 행동과 자연스럽게 연결되는 인터페이스와 워크플로에 관심이 있습니다. 디자인과 기술을 연결해 더 직관적인 경험을 만드는 AX 디자이너로 성장하고 싶습니다.",
  en: "I am a junior designer who finds the problems people run into and uses AI to build them into experiences that actually work. I have carried projects through myself — from UI and UX design grounded in a service's context to interactive prototypes. Right now I am interested in interfaces and workflows where AI connects naturally to what people are already doing. I want to grow into an AX designer who links design and technology to make experiences more intuitive.",
};

/** AX 디자이너 명제와 직결되는 문단이라 별도 블록으로 둔다. (PRD 5.4) */
export const collaboration: {
  title: LocalizedText;
  body: LocalizedText;
} = {
  title: { ko: "협업 방식", en: "How I work with others" },
  body: {
    ko: "협업의 핵심은 커뮤니케이션이라고 생각합니다. 명확한 언어로 의도를 전달하고, 팀원의 강점에 맞게 역할을 나눕니다. 방향은 유연하게 열어 두되, 정한 기준은 엄격하게 지킵니다. 사람에게든 AI에게든 명확한 전달이 팀의 속도를 만든다고 믿습니다.",
    en: "Communication is the core of collaboration. I say what I mean in clear language, and divide roles to match each person's strengths. I keep the direction open, but hold strictly to the standards we set. With people or with AI, I believe clear communication is what sets a team's pace.",
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
      ko: "멘토링 특강",
      en: "Mentoring talk",
    },
    description: {
      ko: "「남들과 다른 디자이너 되기 TIP」",
      en: "“How to become a different kind of designer”",
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
  { name: "Claude Code", level: { ko: "주력", en: "Primary" } },
  { name: "Codex", level: { ko: "주력", en: "Primary" } },
  { name: "Figma Make", level: { ko: "주력", en: "Primary" } },
  { name: "Gemini", level: { ko: "활용", en: "Working" } },
  { name: "Grok", level: { ko: "활용", en: "Working" } },
  { name: "Antigravity", level: { ko: "활용", en: "Working" } },
  { name: "Photoshop", level: { ko: "숙련", en: "Proficient" } },
  { name: "Illustrator", level: { ko: "숙련", en: "Proficient" } },
];
