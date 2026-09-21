import type { Project } from "@/lib/types";

export type ProjectCardProps = {
  project: Project;
  /** 첫 화면에 보이는 카드는 이미지를 우선 로드한다 (LCP). */
  priority?: boolean;
  /**
   * 카드가 실제로 차지하는 폭. 레이아웃마다 다르므로 쓰는 쪽에서 알려준다.
   * 기본값은 2열 그리드 기준이다. 틀리면 필요보다 큰 이미지를 받게 된다.
   */
  sizes?: string;
  className?: string;
};
