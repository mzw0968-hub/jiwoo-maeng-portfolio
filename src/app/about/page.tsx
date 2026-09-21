import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "명확한 언어로 전달하고 상대의 핵심을 정확히 이해하는 것. 사람에게도 AI에게도 같은 원칙이 적용됩니다.",
};

export default function AboutPage() {
  return <AboutContent />;
}
