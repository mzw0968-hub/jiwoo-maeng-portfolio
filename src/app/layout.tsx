import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/locale-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

/**
 * Vercel이 주입하는 프로덕션 도메인을 쓴다. 배포 주소를 코드에 박지 않으므로
 * 도메인이 바뀌어도 고칠 곳이 없다. 로컬에서는 localhost로 떨어진다.
 */
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "맹지우 Jiwoo Maeng — AX Designer",
    template: "%s — 맹지우 Jiwoo Maeng",
  },
  description:
    "기술의 가능성을 사람 중심의 제품 경험으로 연결합니다. AI로 직접 설계하고 구현하는 디자이너 맹지우의 포트폴리오.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "맹지우 Jiwoo Maeng",
    title: "맹지우 Jiwoo Maeng — AX Designer",
    description:
      "From AI capability to human experience. 기술의 가능성을 사람 중심의 제품 경험으로 연결합니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: "맹지우 Jiwoo Maeng — AX Designer",
    description:
      "From AI capability to human experience. 기술의 가능성을 사람 중심의 제품 경험으로 연결합니다.",
  },
  // OG 이미지는 app/opengraph-image.tsx 가 자동으로 붙인다.
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
      <body className="min-h-full flex flex-col antialiased">
        <LocaleProvider>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
