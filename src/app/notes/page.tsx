import type { Metadata } from "next";
import { NotesList } from "./NotesList";

export const metadata: Metadata = {
  title: "Notes",
  description: "AI 워크플로를 설계하며 남긴 기록.",
};

export default function NotesPage() {
  return <NotesList />;
}
