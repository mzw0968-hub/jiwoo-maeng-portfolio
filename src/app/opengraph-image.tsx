import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt =
  "Jiwoo Maeng — AX Designer. From AI capability to human experience.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage();
}
