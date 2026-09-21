import type { Project } from "@/lib/types";

/**
 * 프로젝트 데이터. 이 파일만 고치면 프로젝트가 추가·수정된다.
 * 컴포넌트 코드는 건드릴 필요가 없다. (PRD 성공 기준 S6)
 *
 * 대괄호로 시작하는 문장은 채워야 할 플레이스홀더다.
 * 이미지·영상은 public/projects/[slug]/ 에 넣으면 자동으로 잡힌다.
 */

export const projects: Project[] = [
  {
    slug: "todo-tool",
    title: {
      ko: "업무 생산성 To-do 툴",
      en: "Productivity To-do Tool",
    },
    summary: {
      ko: "[한 줄 요약을 채워주세요. 이 툴이 무엇을 해결하는지 한 문장으로.]",
      en: "[Add a one-line summary: what this tool solves, in a single sentence.]",
    },
    category: "ui-ai",
    status: "done",
    role: {
      ko: "기획 · 디자인 · 구현 · 배포",
      en: "Product · Design · Development · Deployment",
    },
    period: "[기간]",
    tools: ["Figma", "Codex"],
    body: {
      problem: {
        ko: "[무엇이 불편했고 왜 직접 만들기로 했는지 2~3문장으로 적어주세요.]",
        en: "[What was broken, and why you decided to build it yourself. 2-3 sentences.]",
      },
      process: {
        ko: "[PRD → 디자인 시스템 → 와이어프레임 → Figma와 AI를 오가며 다듬기 → 구현 순서로, 실제로 거친 과정을 적어주세요.]",
        en: "[Walk through the actual process: PRD, design system, wireframes, iterating between Figma and AI, then implementation.]",
      },
      aiWorkflow: {
        ko: "[Codex를 어떤 작업에 썼는지, 프롬프트를 어떻게 설계했는지 적어주세요. 사용자 데이터 서버 구축과 앱 배포 경험이 여기 들어가면 좋습니다.]",
        en: "[Which tasks you used Codex for and how you designed the prompts. The user-data server and app deployment work belongs here.]",
      },
      result: {
        ko: "[최종 결과물과 실제 사용 경험을 적어주세요.]",
        en: "[The final product and how it actually gets used.]",
      },
      learnings: {
        ko: "[배운 점 2~3줄.]",
        en: "[Two or three lines on what you learned.]",
      },
    },
    // links: [{ label: { ko: "서비스 열기", en: "Open the app" }, url: "[실제 링크]" }],
  },

  {
    slug: "google-maps",
    title: {
      ko: "Google Maps 개선",
      en: "Google Maps Redesign",
    },
    summary: {
      ko: "[한 줄 요약을 채워주세요.]",
      en: "[Add a one-line summary.]",
    },
    category: "ui-ai",
    status: "done",
    role: {
      ko: "UX 리서치 · 인터랙션 디자인 · 구현",
      en: "UX Research · Interaction Design · Development",
    },
    period: "[기간]",
    tools: ["Figma"],
    // 카드에 영상을 쓰는 프로젝트. 파일을 넣으면 자동 재생된다.
    // video: "/projects/google-maps/preview.mp4",
    // thumbnail: "/projects/google-maps/poster.jpg",
    body: {
      problem: {
        ko: "[기존 Google Maps의 어떤 지점이 불편했는지 적어주세요.]",
        en: "[Which part of the existing Google Maps experience felt broken.]",
      },
      process: {
        ko: "[MCP로 실제 서비스 화면을 참고한 과정과 와이어프레임 단계를 적어주세요.]",
        en: "[How you referenced the real product through MCP, and the wireframing stage.]",
      },
      aiWorkflow: {
        ko: "[인터랙티브 애니메이션을 구현하고 영상으로 인코딩하기까지 어떤 엔진을 썼는지 적어주세요.]",
        en: "[Which engines you used to build the interactive animation and encode it to video.]",
      },
      result: {
        ko: "[최종 인터랙션 결과를 적어주세요. 영상이 여기 들어갑니다.]",
        en: "[The final interaction. The video goes here.]",
      },
      learnings: {
        ko: "[배운 점 2~3줄.]",
        en: "[Two or three lines on what you learned.]",
      },
    },
  },

  {
    slug: "co-us",
    title: {
      ko: "CO-US",
      en: "CO-US",
    },
    summary: {
      ko: "[한 줄 요약을 채워주세요. 진행 중인 프로젝트이므로 과정 중심으로.]",
      en: "[One-line summary. This one is in progress, so lead with the process.]",
    },
    category: "ui-ai",
    status: "wip",
    role: {
      ko: "기획 · 디자인 · 구현",
      en: "Product · Design · Development",
    },
    period: "[기간] - 진행 중",
    tools: ["Figma", "Claude Code"],
    body: {
      problem: {
        ko: "[어떤 문제에서 출발했는지 적어주세요.]",
        en: "[The problem this started from.]",
      },
      process: {
        ko: "[지금까지의 과정을 적어주세요. 완성작이 아니어도 과정 자체가 보여줄 것이 많습니다.]",
        en: "[The process so far. An unfinished project can still show a lot.]",
      },
      aiWorkflow: {
        ko: "[어떤 엔진을 왜 썼는지, 프롬프트 설계에서 신경 쓴 점을 적어주세요.]",
        en: "[Which engines and why, and what you paid attention to when designing prompts.]",
      },
      result: {
        ko: "[현재까지의 산출물을 적어주세요.]",
        en: "[What exists so far.]",
      },
      learnings: {
        ko: "[진행하면서 배운 점 2~3줄.]",
        en: "[Two or three lines on what you've learned so far.]",
      },
    },
  },

  {
    slug: "year3-project",
    title: {
      ko: "[3학년 과제 제목]",
      en: "[Year 3 Project Title]",
    },
    summary: {
      ko: "[한 줄 요약을 채워주세요.]",
      en: "[Add a one-line summary.]",
    },
    category: "ui-ai",
    status: "done",
    role: {
      ko: "[역할]",
      en: "[Role]",
    },
    period: "[기간]",
    tools: ["Figma"],
    body: {
      problem: {
        ko: "[무엇이 불편했고 왜 시작했는지.]",
        en: "[What was broken, and why you started.]",
      },
      process: {
        ko: "[과정을 적어주세요.]",
        en: "[The process.]",
      },
      result: {
        ko: "[결과물을 적어주세요.]",
        en: "[The outcome.]",
      },
      learnings: {
        ko: "[배운 점 2~3줄.]",
        en: "[Two or three lines on what you learned.]",
      },
    },
  },

  {
    slug: "grad-exhibition",
    title: {
      ko: "졸업전시 브랜딩",
      en: "Graduation Exhibition Branding",
    },
    summary: {
      ko: "[한 줄 요약을 채워주세요. 6명 팀의 컨셉팀장으로서 무엇을 총괄했는지.]",
      en: "[One-line summary: what you led as concept lead of a six-person team.]",
    },
    category: "branding",
    status: "done",
    role: {
      ko: "컨셉팀장 · 로고 · 타이포 · 컬러 · 굿즈 · 도록 · 영상 · 포스터 총괄",
      en: "Concept Lead — logo, type, color, merchandise, catalogue, video, posters",
    },
    period: "[기간]",
    tools: ["Illustrator", "Photoshop"],
    body: {
      problem: {
        ko: "[전시의 컨셉을 어떻게 정의했는지, 어떤 과제가 있었는지 적어주세요.]",
        en: "[How you defined the exhibition concept, and what the challenge was.]",
      },
      process: {
        ko: "[컨셉 → 스토리 → 비주얼 시스템으로 이어진 과정과 6명 팀을 어떻게 이끌었는지 적어주세요.]",
        en: "[From concept to story to visual system, and how you led a team of six.]",
      },
      result: {
        ko: "[로고, 타이포, 포스터, 굿즈, 도록 결과물을 적어주세요.]",
        en: "[The logo, typography, posters, merchandise, and catalogue.]",
      },
      learnings: {
        ko: "[배운 점 2~3줄.]",
        en: "[Two or three lines on what you learned.]",
      },
    },
  },

];

/** 홈 Projects 섹션에 노출할 프로젝트. 순서도 이 배열을 따른다. */
export const featuredSlugs = ["todo-tool", "google-maps", "co-us"];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** 이전/다음 이동용. 배열 순서를 그대로 쓰고 순환하지 않는다. */
export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
