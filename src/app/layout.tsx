import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "맹지우 Jiwoo Maeng — AX Designer",
    template: "%s — 맹지우 Jiwoo Maeng",
  },
  description:
    "기술의 가능성을 사람 중심의 제품 경험으로 연결합니다. AI로 직접 설계하고 구현하는 디자이너 맹지우의 포트폴리오.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "맹지우 Jiwoo Maeng",
    title: "맹지우 Jiwoo Maeng — AX Designer",
    description:
      "From AI capability to human experience. 기술의 가능성을 사람 중심의 제품 경험으로 연결합니다.",
  },
  // metadataBase와 OG 이미지는 Vercel 배포 URL이 정해지는 5단계에서 채운다.
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full">
      <head>
        {/*
          폰트는 CDN에서 받는다. Switzer는 Fontshare EULA상 폰트 파일을
          public 저장소에 올릴 수 없어(02조) 파운드리가 제공하는 API를 쓴다.
          근거: docs/DESIGN_SYSTEM.md 6장
        */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f%5B%5D=switzer@400,500,600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
