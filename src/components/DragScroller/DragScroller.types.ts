import type { CSSProperties, ReactNode } from "react";

export type DragScrollerProps = {
  children: ReactNode;
  /** 스크롤 영역임을 알리는 이름. 스크린리더가 읽는다. */
  label: string;
  className?: string;
  style?: CSSProperties;
};
