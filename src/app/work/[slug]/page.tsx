import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "@/data/projects";
import { ProjectDetail } from "./ProjectDetail";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  // 메타데이터는 서버에서 만들어지므로 기본 언어(한국어)로 고정한다.
  return {
    title: project.title.ko,
    description: project.summary.ko,
    openGraph: {
      title: project.title.ko,
      description: project.summary.ko,
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
