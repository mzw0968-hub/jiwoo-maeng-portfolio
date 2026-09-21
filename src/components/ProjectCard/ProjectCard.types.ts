import type { Project } from "@/lib/types";

export type ProjectCardProps = {
  project: Project;
  /** 첫 화면에 보이는 카드는 이미지를 우선 로드한다 (LCP). */
  priority?: boolean;
  className?: string;
};
