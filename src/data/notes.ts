import type { LocalizedText, Note } from "@/lib/types";

/**
 * Notes — AI 워크플로 인사이트 글.
 * 초기 3건은 제목과 요약만 있다. 본문은 채워지면 body에 추가한다.
 */

export type NoteWithBody = Note & {
  /** 본문이 없으면 상세 페이지가 "준비 중"으로 표시된다. */
  body?: LocalizedText;
};

export const notes: NoteWithBody[] = [
  {
    slug: "ai-engines-have-personalities",
    title: {
      ko: "AI 엔진마다 성격이 다르다: Claude Code, Codex, Gemini, Grok 비교",
      en: "Every AI engine has a personality: Claude Code, Codex, Gemini, Grok",
    },
    summary: {
      ko: "[같은 프롬프트를 네 엔진에 넣었을 때 무엇이 달랐는지, 어떤 작업에 무엇을 쓰게 됐는지 정리할 예정입니다.]",
      en: "[What changed when the same prompt went into four engines, and which one ended up doing what.]",
    },
    date: "[날짜]",
  },
  {
    slug: "building-an-ai-team-with-grok-bot",
    title: {
      ko: "Grok Bot으로 AI 팀원 꾸리기",
      en: "Building an AI teammate with Grok Bot",
    },
    summary: {
      ko: "[역할을 나눠 맡긴 봇들이 실제로 어떻게 일했는지 정리할 예정입니다.]",
      en: "[How bots with assigned roles actually performed as teammates.]",
    },
    date: "[날짜]",
  },
  {
    slug: "vibe-coding-workflow",
    title: {
      ko: "PRD부터 배포까지, 디자이너의 바이브 코딩 워크플로",
      en: "PRD to deployment: a designer's vibe coding workflow",
    },
    summary: {
      ko: "[기획서 한 장에서 배포된 URL까지 가는 과정을 단계별로 정리할 예정입니다.]",
      en: "[From a one-page brief to a deployed URL, step by step.]",
    },
    date: "[날짜]",
  },
];

export function getNote(slug: string): NoteWithBody | undefined {
  return notes.find((note) => note.slug === slug);
}
