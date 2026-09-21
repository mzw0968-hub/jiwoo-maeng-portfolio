import type { ReactNode } from "react";

export type FadeUpProps = {
  children: ReactNode;
  /** 같은 그룹 안에서 순차 등장시킬 때 쓴다. 전체 합이 0.5초를 넘지 않게 한다. */
  delay?: number;
  className?: string;
};
