import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "함께 일할 기회를 찾고 있습니다. 편하게 연락 주세요.",
};

export default function ContactPage() {
  return <ContactContent />;
}
