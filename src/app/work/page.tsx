import type { Metadata } from "next";
import { WorkList } from "./WorkList";

export const metadata: Metadata = {
  title: "Work",
  description:
    "AI로 설계하고 직접 구현한 프로젝트와 브랜딩 작업을 모았습니다.",
};

/**
 * searchParams를 여기서 읽어 넘긴다. WorkList가 useSearchParams를 쓰면
 * Suspense 경계가 필요해지고 목록이 서버 HTML에서 빠지므로, 서버가 읽어
 * prop으로 주고 목록은 처음부터 HTML에 실리게 한다.
 */
export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  return <WorkList category={category} />;
}
