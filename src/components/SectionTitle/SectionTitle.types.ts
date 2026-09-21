import type { LocalizedText } from "@/lib/types";

export type SectionTitleProps = {
  title: LocalizedText;
  /** 제목 위에 붙는 작은 라벨. 없으면 렌더링하지 않는다. */
  eyebrow?: LocalizedText;
  /** 우측 정렬 링크. 예: "전체 보기" */
  action?: {
    label: LocalizedText;
    href: string;
  };
  /** h2가 기본. 페이지 최상단 제목이면 h1로 올린다. */
  as?: "h1" | "h2";
  className?: string;
};
