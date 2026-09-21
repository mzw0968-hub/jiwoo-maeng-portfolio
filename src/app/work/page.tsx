import { Suspense } from "react";
import type { Metadata } from "next";
import { WorkList } from "./WorkList";

export const metadata: Metadata = {
  title: "Work",
  description:
    "AI로 설계하고 직접 구현한 프로젝트와 브랜딩 작업을 모았습니다.",
};

export default function WorkPage() {
  // useSearchParams를 쓰는 컴포넌트는 Suspense 경계가 필요하다.
  return (
    <Suspense>
      <WorkList />
    </Suspense>
  );
}
