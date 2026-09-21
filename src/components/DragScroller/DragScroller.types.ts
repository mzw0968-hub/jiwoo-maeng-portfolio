import type { CSSProperties, ReactNode } from "react";

export type DragScrollerProps = {
  children: ReactNode;
  /** 스크롤 영역임을 알리는 이름. 스크린리더가 읽는다. */
  label: string;
  /**
   * 처음 보일 때 화면 정중앙에 놓을 항목의 순번 (0부터).
   * 대상에는 data-scroll-item 속성이 있어야 한다.
   */
  centerIndex?: number;
  className?: string;
  style?: CSSProperties;
};
