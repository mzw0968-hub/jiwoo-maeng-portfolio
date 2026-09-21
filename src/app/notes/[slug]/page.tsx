import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getNote, notes } from "@/data/notes";
import { NoteDetail } from "./NoteDetail";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/notes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);

  if (!note) return {};

  return {
    title: note.title.ko,
    description: note.summary.ko,
  };
}

export default async function NotePage({ params }: PageProps<"/notes/[slug]">) {
  const { slug } = await params;
  const note = getNote(slug);

  if (!note) notFound();

  return <NoteDetail note={note} />;
}
