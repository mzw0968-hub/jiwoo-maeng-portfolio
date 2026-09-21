import type { ProjectStatus } from "@/lib/types";

export type TagVariant = "category" | "status";

export type TagProps = {
  children: string;
  variant?: TagVariant;
  /** variant가 status일 때만 의미가 있다. 진행 중 상태에 포인트 컬러를 쓴다. */
  status?: ProjectStatus;
  className?: string;
};
