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
      ko: "적절한 시점에 업무를 시작해 마감까지 안정적으로 완수하도록 도와주는 생산성 도구",
      en: "A productivity tool that helps you start work at the right moment and carry it through to the deadline.",
    },
    category: "ui-ai",
    status: "done",
    role: {
      ko: "기획 · 디자인 · 구현 · 배포",
      en: "Product · Design · Development · Deployment",
    },
    period: "2 Days",
    tools: ["Codex"],
    thumbnail: "/projects/todo-tool/thumbnail.png",
    /* 원본 cover.png(3124x32768)를 흰 여백 띠 한가운데에서 3분할한 것이다.
       한 장으로 두면 세로가 WebP 한계(16,383px)를 넘어 최적화가 통째로
       실패하고 6.8MB PNG 원본이 그대로 나간다. 원본은 지우지 않았다. */
    covers: [
      { src: "/projects/todo-tool/cover-1.png", width: 3124, height: 11061 },
      { src: "/projects/todo-tool/cover-2.png", width: 3124, height: 11059 },
      { src: "/projects/todo-tool/cover-3.png", width: 3124, height: 10648 },
    ],
    body: {
      problem: {
        ko: "대학생은 수업, 과제, 시험과 개인 일정이 동시에 쌓이지만, 실제로 사용할 수 있는 시간과 업무 소요 시간을 정확히 계산하기 어렵습니다. 기존 To-Do 서비스는 해야 할 일과 마감일을 기록하는 데 집중되어 있어, “완성도를 유지하려면 언제부터 시작해야 하는가”를 직접 판단해야 한다는 불편함이 있었습니다. 이를 해결하기 위해 가용시간과 고정 일정을 반영해 실행 시점을 제안하는 To-Do Tools를 만들었습니다.",
        en: "University students juggle classes, assignments, exams and personal commitments all at once, yet it is hard to work out how much time is actually free and how long each task will take. Existing to-do services concentrate on recording what needs doing and when it is due, leaving you to judge for yourself when you have to start in order to keep the quality up. To-Do Tools answers that question: it reads your available time and fixed commitments and suggests when to begin.",
      },
      process: {
        ko: "사용자의 가용시간과 고정 일정을 반영하는 PRD를 작성한 뒤, 오픈소스 디자인 시스템을 선택했습니다. 이후 AI와 대화하며 화면 구조와 기능을 구체화하고, React와 Electron으로 구현한 뒤 직접 사용하며 발견한 문제를 반복적으로 개선했습니다.",
        en: "I wrote a PRD around the user's available time and fixed commitments, then picked an open-source design system. From there I worked out the screen structure and features in conversation with AI, built it in React and Electron, and kept refining it against the problems I ran into using it myself.",
      },
      aiWorkflow: {
        ko: "Codex는 초기 아이디어를 PRD로 구조화하는 작업부터 디자인 시스템 조사, React·Electron 화면 구현, 오류 분석, 테스트와 Windows 설치 파일 패키징까지 개발 전반에 활용했습니다. 프롬프트는 한 번에 완성된 결과를 요구하기보다 “가용시간 설정”, “고정 일정”, “로컬 알림”처럼 기능을 작은 단위로 나누고, 직접 사용한 뒤 구체적인 피드백을 다시 전달하는 방식으로 설계했습니다. 또한 선택적으로 동의한 사용자의 익명 사용 통계와 피드백을 확인할 수 있도록 Cloudflare Workers와 D1 기반 서버, 관리자 대시보드를 구축했으며, 데이터베이스 연결, 서버 배포, 비밀번호 관리와 실제 HTTPS 요청 검증까지 Codex와 함께 진행했습니다.",
        en: "Codex ran through the whole build — from structuring the initial idea into a PRD to researching the design system, building the React and Electron screens, debugging, testing, and packaging the Windows installer. Rather than asking for a finished result in one shot, I designed prompts around small units of functionality — “available time settings”, “fixed commitments”, “local notifications” — then used each one myself and fed specific feedback back in. I also built a Cloudflare Workers and D1 server with an admin dashboard so I could review anonymous usage statistics and feedback from users who opted in, working through the database connection, server deployment, password handling and real HTTPS request verification with Codex.",
      },
      result: {
        ko: "주간 상세 계획, 마감 기반 시작 시점 안내, 고정 일정, 가용시간 설정, 작업 시간 기록, 로컬 알림, 시스템 트레이 실행과 3개월 캘린더를 갖춘 Windows 데스크톱 앱을 완성했습니다. 업무와 일정은 사용자의 컴퓨터에 저장되며, 익명 사용 통계와 피드백은 별도의 선택 동의가 있을 때만 서버로 전송됩니다. 최종 결과물은 README가 포함된 Windows 설치 파일로 배포할 수 있도록 구성했고, 앱을 종료하거나 다시 실행해도 데이터가 유지되는 실제 사용 환경까지 검증했습니다.",
        en: "The result is a Windows desktop app with detailed weekly planning, deadline-based start-time guidance, fixed commitments, available-time settings, time tracking, local notifications, system tray operation and a three-month calendar. Tasks and schedules live on the user's own computer; anonymous usage statistics and feedback reach the server only with separate, explicit consent. It ships as a Windows installer with a README, and I verified in real use that data survives quitting and relaunching the app.",
      },
      learnings: {
        ko: "AI를 활용한 개발에서는 한 번에 많은 기능을 요구하는 것보다 문제와 제약조건을 먼저 정의하고, 작은 단위로 구현과 검증을 반복하는 방식이 훨씬 효과적이라는 점을 배웠습니다. 또한 화면을 만드는 것만큼 데이터 저장, 개인정보 동의, 서버 운영과 배포 경험까지 함께 설계해야 하나의 서비스가 완성된다는 것을 경험했습니다. 무엇보다 제가 필요했던 서비스를 정말 빠르고 쉽게 만들 수 있다는 점에서 AI 워크플로우를 적극 활용하는 방법을 배웠습니다.",
        en: "Building with AI, defining the problem and its constraints first and then implementing and verifying in small increments proved far more effective than asking for many features at once. I also learned that a service is not finished when the screens are — data storage, privacy consent, running a server and shipping a release all have to be designed alongside. Above all, seeing how quickly and easily I could build the very service I needed taught me to lean on an AI workflow in earnest.",
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
      // 초안입니다. 원문 문장에서 뽑았으니 마음에 들지 않으면 바꿔주세요.
      ko: "앱을 벗어나지 않고 지금 보고 있는 장소를 바로 AI에게 물어볼 수 있게 한 Google Maps 개선 제안",
      en: "A Google Maps concept that lets you ask AI about the place you are looking at, without ever leaving the app.",
    },
    category: "ui-ai",
    status: "done",
    role: {
      ko: "UX 리서치 · 인터랙션 디자인 · 구현",
      en: "UX Research · Interaction Design · Development",
    },
    period: "7 Days",
    tools: ["Figma", "Codex"],
    thumbnail: "/projects/google-maps/thumbnail.png",
    // 세로로 아주 긴 케이스 스터디 이미지. 비율을 자르지 않고 그대로 보여준다.
    covers: [
      { src: "/projects/google-maps/cover.jpg", width: 1920, height: 12100 },
    ],
    // 시연 영상. 상세에서 cover 이미지 아래 200px 간격을 두고 붙는다.
    video: {
      src: "/projects/google-maps/demo.mp4",
      width: 2048,
      height: 1536,
    },
    body: {
      problem: {
        ko: "일본 여행 중 Google Maps에서 길을 찾다가, 지도에 이름이 표시되지 않은 건물의 정보를 확인하기 위해 앱을 나와 별도로 GPT를 실행해야 했습니다. 장소를 보고 있던 맥락이 끊기고 추가 탐색이 발생하는 문제를 발견해, 선택한 장소에서 바로 AI에게 질문할 수 있는 경험을 제안했습니다.",
        en: "While finding my way with Google Maps on a trip to Japan, I wanted to know about a building the map did not name — which meant leaving the app and opening GPT separately. The context I had been looking at broke, and the search started over. So I proposed an experience where you can ask AI about a place directly from the place itself.",
      },
      process: {
        ko: "MCP를 활용해 Mobbin의 Google Maps iOS 화면과 실제 Google Maps에서 Flatiron Building을 선택한 화면을 참고했습니다. 검색창, 핀, 장소 정보 Bottom Sheet, 액션 버튼, 사진 타일 등 기존 디자인 시스템의 구조와 간격을 분석했습니다.\n\n이후 393×852px 모바일 화면을 기준으로 장소 선택 → 정보 시트 확장 → Ask Maps 실행 → 질문 입력 → 답변 확인 순서의 와이어프레임을 제작했습니다. Figma MCP로 각 화면의 레이아웃과 에셋을 가져와 HTML 프로토타입과 비교하며 디테일을 보정했습니다.",
        en: "Through MCP I referenced Mobbin's Google Maps iOS screens and the real Google Maps view with the Flatiron Building selected, analysing the structure and spacing of the existing design system — the search field, pins, the place information bottom sheet, action buttons and photo tiles.\n\nI then built wireframes on a 393×852px mobile frame following the sequence: select a place → expand the information sheet → trigger Ask Maps → type a question → read the answer. Figma MCP brought each screen's layout and assets across, and I corrected the details against the HTML prototype.",
      },
      aiWorkflow: {
        ko: "React·TypeScript와 CSS Transition을 사용해 Bottom Sheet 드래그, 버튼 Pressed 상태, 순차 등장, 키보드 전환, 로딩, 답변 스크롤 애니메이션을 전부 Codex로 구현했습니다.\n\nPlaywright로 전체 인터랙션을 자동 실행하고 녹화했으며, FFmpeg의 H.264 엔진으로 4:3 비율의 2K 및 2880×2160 고화질 영상으로 인코딩했습니다. 타이핑 속도와 버튼 누름 시간, 드래그 가속도까지 스크립트로 조정해 실제 사용 흐름처럼 연출했습니다.",
        en: "Codex built the bottom sheet drag, button pressed states, staggered entrances, keyboard transitions, loading and answer-scroll animations — all of it in React and TypeScript with CSS transitions.\n\nPlaywright drove and recorded the whole interaction automatically, and FFmpeg's H.264 encoder produced 4:3 video at 2K and 2880×2160. Typing speed, button press duration and drag acceleration were all tuned in the script so the recording reads like real use.",
      },
      result: {
        ko: "Flatiron Building의 장소 정보 시트를 올리고 Ask Maps 버튼을 누르면 Gemini Bottom Sheet가 나타납니다. 사용자가 질문을 입력하면 Searching the web 로딩을 거쳐 장소 맥락에 맞는 답변이 표시되며, 긴 답변은 고정된 입력 영역 안에서 끝까지 스크롤할 수 있습니다.\n\n기존 Google Maps의 디자인 언어를 유지하면서, 앱을 벗어나지 않고 현재 보고 있는 장소를 탐색할 수 있는 인터랙티브 프로토타입과 시연 영상을 완성했습니다.",
        en: "Pulling up the Flatiron Building's place sheet and pressing Ask Maps brings up a Gemini bottom sheet. Type a question and it runs a “Searching the web” loading state before showing an answer grounded in that place; long answers scroll all the way through inside a fixed input area.\n\nThe result is an interactive prototype and a demo video that hold on to Google Maps' existing design language while letting you explore the place in front of you without leaving the app.",
      },
      learnings: {
        ko: "기존 서비스를 개선할 때는 새로운 UI를 만드는 것보다 익숙한 디자인 시스템과 사용 맥락을 유지하는 것이 중요하다는 점을 배웠습니다. 또한 정적인 화면만으로는 전달하기 어려운 경험도 모션의 순서와 속도를 세밀하게 설계하면 훨씬 명확하게 설명할 수 있었습니다.",
        en: "Improving an existing service taught me that holding on to a familiar design system and usage context matters more than inventing new UI. I also found that an experience static screens struggle to convey becomes far clearer once the order and speed of the motion are designed carefully.",
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
      ko: "대화로 탄소 발자국을 기록하고, 혼자서는 작은 감축을 모두의 총량으로 보여주는 AI 앱",
      en: "An AI app that logs your carbon footprint through conversation, and makes reductions that are tiny alone add up to something visible together.",
    },
    category: "ui-ai",
    status: "wip",
    role: {
      ko: "기획 · 디자인 · 구현",
      en: "Product · Design · Development",
    },
    /* 진행 중 여부는 상태 배지가 양 언어로 표시한다. 이 필드는
       LocalizedText가 아니므로 한글을 넣으면 영문 모드에서도 한글이 뜬다. */
    period: "2026.06 ~",
    tools: ["Figma", "Claude Code"],
    body: {
      problem: {
        ko: "기후 위기에 대한 관심은 어느 때보다 높지만 개인의 행동은 세 개의 벽에 막혀 있습니다. 자기 하루가 얼마나 배출하는지 아는 사람이 거의 없고, “지구를 위해”라는 말은 너무 추상적이라 습관을 지탱하지 못하며, 한 사람의 감축량은 정직하게 보여줄수록 무의미해 보입니다. 기존 앱은 입력이 번거로운 대시보드이거나, 실제 효과와 무관한 포인트를 주는 챌린지이거나, 죄책감에 기대는 캠페인이었습니다.",
        en: "Public concern about the climate has never been higher, yet individual action runs into three walls. Almost nobody knows how much their own day emits, “for the planet” is too abstract to sustain a habit, and one person's reductions look more pointless the more honestly you show them. Existing apps were either dashboards that were tedious to fill in, challenges handing out points detached from any real effect, or campaigns leaning on guilt.",
      },
      process: {
        ko: "세 개의 벽을 각각 대화형 기록, 애착 기반 동기, 정직한 집계로 넘기로 하고 앱을 홈(대화) · 내 데이터(장부) · 우리(소속감) 세 존으로 나눴습니다. 가장 많은 시간을 쓴 것은 기능을 더하는 일이 아니라 하지 않을 일의 목록을 쓰는 일이었습니다. 마이너스 부호는 쓰지 않고, 배출 기록은 숫자를 만들지 않으며, 내 감축량을 전체로 나눈 값은 어떤 화면에도 그리지 않습니다. 정직함이 흔들리면 소속감이 가장 먼저 무너진다고 봤기 때문입니다.",
        en: "I set out to cross those three walls with conversational logging, affection-based motivation and honest aggregation, and split the app into three zones — Home for conversation, My Data as a ledger, and Us for belonging. What took the most time was not adding features but writing the list of things the product may not do. No minus sign; an emission log produces no figure at all; and no screen ever draws the user's reduction divided by the collective. If the honesty gives way, the sense of belonging is the first thing to collapse.",
      },
      aiWorkflow: {
        ko: "Claude Code로 기획 문서를 쓰고, 같은 문서를 기준으로 Figma MCP로 디자인 파일을 직접 조작하고, 인터랙티브 프로토타입까지 하나의 흐름으로 만들었습니다. 프롬프트는 화면을 통째로 요구하는 대신, 이 지표를 이렇게 그리면 내가 세운 어떤 규칙을 어기는지 먼저 확인시키는 방식으로 설계했습니다. AI가 관성적으로 제안한 차트를 제 규칙에 맞게 되돌린 적이 여러 번 있었고, 색 대비도 눈짐작 대신 실측해서 쓸 수 없는 색을 걸러냈습니다.",
        en: "I wrote the product document in Claude Code, drove the Figma file directly through Figma MCP against that same document, and built an interactive prototype in one continuous pass. Rather than asking for a whole screen at once, I designed prompts to make the model check first which of my own rules a given treatment would break. Several times that turned back charts it had reached for out of habit, and I measured colour contrast rather than eyeballing it to rule out the shades that could not be used.",
      },
      result: {
        ko: "기획 문서와 브랜드 · 화면 구조 설계, 그리고 Us 존에 집중한 인터랙티브 프로토타입이 나와 있습니다. 대화 엔진은 실제 AI가 아니라 규칙 기반 더미이고 집단 수치는 가상값입니다 — 서버 이전 단계에서 없는 사용자를 지어내지 않기 위한 선택이고, 화면에도 추정치임을 밝혔습니다. 현재는 Expo로 실제 앱 구현을 시작한 단계입니다.",
        en: "There is a product document, a brand and screen-structure system, and an interactive prototype focused on the Us zone. The conversation engine is a rule-based stand-in rather than real AI and the collective figures are simulated — a deliberate choice, since before there is a server the alternative is inventing users who do not exist, and the screens say the figures are estimates. I have now started building the real app in Expo.",
      },
      learnings: {
        ko: "제품을 정의하는 일이 무엇을 넣을지 고르는 일보다 무엇을 그리지 않을지 정하는 일에 가깝다는 것을 배웠습니다. 마이너스 부호 하나를 금지하자 데이터 모델에서 뺄셈이 사라졌고, 그 덕분에 “벌점은 없다”가 약속이 아니라 구조가 됐습니다. 또 AI에게 기능을 시키는 것보다 제약을 검증시키는 편이 훨씬 정확하다는 것 — 판단 기준을 먼저 세워두면 AI가 그 기준으로 제 결정을 되짚어 줍니다.",
        en: "I learned that defining a product is less about choosing what to put in than about deciding what never to draw. Banning a single minus sign removed subtraction from the data model, which turned “there is no penalty” from a promise into a structure. I also learned that asking AI to verify constraints is far more reliable than asking it to produce features — once the criteria are set down first, AI will use them to check my own decisions back at me.",
      },
    },
  },

  {
    slug: "picon",
    title: {
      ko: "Picon",
      en: "Picon",
    },
    summary: {
      ko: "청각장애인을 위한 오프라인 소통 앱",
      en: "An offline communication app for people with hearing impairments.",
    },
    category: "ui",
    status: "done",
    role: {
      ko: "기획 · 디자인 · 프로토타이핑",
      en: "Product · Design · Prototyping",
    },
    period: "2025.09 ~ 2025.12",
    tools: ["Figma"],
    thumbnail: "/projects/picon/thumbnail.jpg",
    // 케이스 스터디 18장. 7번은 원본에 없다.
    covers: [
      { src: "/projects/picon/01.png", width: 1920, height: 1080 },
      { src: "/projects/picon/02.png", width: 1920, height: 1440 },
      { src: "/projects/picon/03.png", width: 1920, height: 1440 },
      { src: "/projects/picon/04.png", width: 1920, height: 1440 },
      { src: "/projects/picon/05.png", width: 1920, height: 1440 },
      { src: "/projects/picon/06.png", width: 1920, height: 1440 },
      { src: "/projects/picon/08.png", width: 1920, height: 1440 },
      { src: "/projects/picon/09.png", width: 1920, height: 1440 },
      { src: "/projects/picon/10.png", width: 1920, height: 1080 },
      { src: "/projects/picon/11.png", width: 1920, height: 1080 },
      { src: "/projects/picon/12.png", width: 1920, height: 1080 },
      { src: "/projects/picon/13.png", width: 1920, height: 1080 },
      { src: "/projects/picon/14.png", width: 1920, height: 1080 },
      { src: "/projects/picon/15.png", width: 1920, height: 1080 },
      { src: "/projects/picon/16.png", width: 1920, height: 1440 },
      { src: "/projects/picon/17.png", width: 1920, height: 1080 },
      { src: "/projects/picon/18.png", width: 1920, height: 1080 },
      { src: "/projects/picon/19.png", width: 1920, height: 1440 },
    ],
    body: {
      problem: {
        ko: "청각장애인은 오프라인 대화에서 상대의 입모양을 보고 말을 유추합니다. 화자가 여러 명이 되면 시선을 옮기는 사이 맥락이 끊기고, 입모양만으로 대화를 따라가기 어려워집니다. 이런 경험이 반복되면 대화에 참여하는 것 자체가 부담이 되고, 결국 여럿이 모이는 오프라인 만남을 피하게 됩니다. 저희는 이 문제를 “듣지 못해서”가 아니라 “대화의 흐름을 따라갈 수단이 없어서” 생기는 문제로 정의했습니다.",
        en: "People with hearing impairments follow an in-person conversation by reading the speaker's lips. Once several people are talking, the thread breaks while their eyes move between speakers, and lip-reading alone stops being enough to keep up. When that happens often enough, taking part in a conversation becomes a burden in itself, and group gatherings are the first thing to go. We defined this not as a problem of “not being able to hear”, but of “having no way to follow the flow of a conversation”.",
      },
      process: {
        ko: "팀원 3명과 함께 3개월 동안 리서치부터 프로토타이핑까지 진행했습니다.\n\n사용자 조사: 청각장애인 3명을 대상으로 인터뷰를 진행해, 다자간 대화에서 가장 어려운 순간과 현재 사용하는 대처 방법을 파악했습니다.\n\n컨셉 설계: Picon AI가 목소리로 연락처를 저장하고 텍스트를 구분하여 대화 로그를 보여주도록 하였습니다.\n\nUI 디자인: 대화 중 시선 이동을 최소화하는 것을 기준으로 화면 구조와 정보 위계를 설계했습니다.\n\n프로토타이핑: 실제 대화 상황을 가정한 프로토타입으로 핵심 플로우를 검증했습니다.",
        en: "I worked on this with three teammates over three months, from research through to prototyping.\n\nUser research: We interviewed three people with hearing impairments to find the hardest moments in a group conversation and the workarounds they already rely on.\n\nConcept: Picon AI saves contacts by voice and separates each speaker's text, so the conversation can be read back as a log.\n\nUI design: We designed the screen structure and information hierarchy around a single criterion — minimising eye movement during a conversation.\n\nPrototyping: We validated the core flow with a prototype built around a real conversation scenario.",
      },
      result: {
        ko: "Picon은 다자간 대화에서 청각장애인이 흐름을 놓치지 않고, 자신의 목소리로 대화에 참여할 수 있도록 돕는 앱입니다.\n\n나만의 캐릭터와 목소리: Picon 캐릭터와 AI 음성을 내 성격에 맞게 커스터마이징해, 대화 속에서 나를 표현하는 목소리를 만듭니다.\n\n화자 구분 자막: AI로 대화 상대의 목소리를 저장해 여러 명의 화자를 구분하고, 누가 한 말인지와 함께 텍스트로 보여줍니다. 시선을 옮기지 않아도 대화의 흐름을 따라갈 수 있습니다.\n\n새로운 목소리 알림: 주변에서 새로운 목소리가 감지되면 알림으로 알려, 누군가 말을 걸어오는 순간을 놓치지 않게 합니다.",
        en: "Picon helps people with hearing impairments keep up with a group conversation and take part in it in a voice of their own.\n\nYour own character and voice: Customise the Picon character and its AI voice to match your personality, so you have a voice that represents you in the conversation.\n\nSpeaker-labelled captions: AI stores the voices of the people you are talking with, tells several speakers apart, and shows what was said as text along with who said it — so you can follow the conversation without moving your eyes.\n\nNew voice alerts: When a new voice is picked up nearby, Picon lets you know, so you never miss the moment someone starts talking to you.",
      },
      learnings: {
        ko: "불편을 겪는 사용자를 직접 만나기 전까지는 문제를 절반만 이해하고 있었다는 것을 깨달았습니다. 조사를 통해 문제의 본질이 “소리”가 아니라 “대화의 흐름”에 있다는 것을 발견했고, 이 정의가 이후 모든 디자인 결정의 기준이 되었습니다. 소수의 사용자를 위한 디자인이 결국 모두에게 더 명확한 경험을 만든다는 것을 배웠습니다.",
        en: "Until I sat down with the people actually living with the problem, I only understood half of it. The research showed that the heart of it is not “sound” but “the flow of a conversation”, and that definition became the standard for every design decision that followed. I learned that designing for a small group of users ends up making the experience clearer for everyone.",
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
    status: "wip",
    role: {
      ko: "컨셉팀장 · 로고 · 타이포 · 컬러 · 굿즈 · 도록 · 영상 · 포스터 총괄",
      en: "Concept Lead — logo, type, color, merchandise, catalogue, video, posters",
    },
    period: "2025.10 ~ 2026.12",
    tools: ["Figma", "Photoshop", "Illustrator"],
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
export const featuredSlugs = ["picon", "co-us", "google-maps"];

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
