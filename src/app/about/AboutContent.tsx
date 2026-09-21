"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import {
  collaboration,
  intro,
  profileAlt,
  profileImage,
  role,
  timeline,
  tools,
} from "@/data/about";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { FadeUp } from "@/components/FadeUp";

export function AboutContent() {
  const { t } = useLocale();

  return (
    <div
      className="container-page"
      style={{
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      {/* 프로필 — 사진과 자기소개 */}
      <FadeUp>
        <section className="md:grid md:grid-cols-12 md:gap-12">
          {/* 사진이 없으면 회색 플레이스홀더가 비율을 지킨다 */}
          <div className="md:col-span-4">
            <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-md bg-surface md:max-w-none">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt={t(profileAlt)}
                  fill
                  priority
                  sizes="(min-width: 768px) 33vw, 100vw"
                  /* 배경이 투명한 컷아웃 사진이라 잘라내지 않고 전체를 담는다.
                     남는 자리는 surface 색이 채워 판 위에 인물이 올라간 형태가 된다.
                     배경이 있는 일반 사진으로 바꾸면 object-cover가 더 낫다. */
                  className="object-contain"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-caption text-ink-muted">
                    {t(ui.noImage)}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-10 md:col-span-8 md:mt-0">
            <h1 className="text-h1">{t(site.name)}</h1>
            <p className="text-body text-ink-muted mt-2">{t(role)}</p>
            <p className="text-body mt-8 max-w-[58ch] whitespace-pre-line text-pretty">
              {t(intro)}
            </p>
          </div>
        </section>
      </FadeUp>

      {/* 협업 방식 — AX 디자이너 명제와 직결되는 문단이라 따로 세운다 */}
      <FadeUp>
        <section
          className="border-t border-line pt-8 md:grid md:grid-cols-12 md:gap-8"
          style={{ marginTop: "var(--space-section)" }}
        >
          <h2 className="text-caption text-ink-muted md:col-span-3">
            {t(collaboration.title)}
          </h2>
          <p className="text-h3 mt-4 max-w-[46ch] break-keep text-pretty md:col-span-9 md:mt-0">
            {t(collaboration.body)}
          </p>
        </section>
      </FadeUp>

      {/* 경험 타임라인 */}
      <section style={{ marginTop: "var(--space-section)" }}>
        <FadeUp>
          <h2 className="text-caption text-ink-muted border-t border-line pt-8">
            Experience
          </h2>
        </FadeUp>

        <ul className="mt-8">
          {timeline.map((entry, index) => (
            <li
              key={`${t(entry.title)}-${index}`}
              className="border-b border-line py-8 md:grid md:grid-cols-12 md:gap-8"
            >
              <FadeUp delay={index * 0.04}>
                <div className="md:grid md:grid-cols-12 md:gap-8">
                  <p className="text-caption text-ink-muted md:col-span-3">
                    {t(entry.period)}
                  </p>
                  <div className="mt-2 md:col-span-9 md:mt-0">
                    {/* break-keep: 한국어는 기본적으로 글자 사이 아무 데서나
                        줄이 끊긴다. 띄어쓰기 단위로만 끊어 어절이 쪼개지지
                        않게 한다. 공간이 있으면 자연히 한 줄로 들어간다. */}
                    <h3 className="text-h3 break-keep text-balance">
                      {t(entry.title)}
                    </h3>
                    {entry.description && (
                      <p className="text-body text-ink-muted mt-2 break-keep text-pretty">
                        {t(entry.description)}
                      </p>
                    )}
                  </div>
                </div>
              </FadeUp>
            </li>
          ))}
        </ul>
      </section>

      {/* 사용 도구와 활용 수준 */}
      <section style={{ marginTop: "var(--space-section)" }}>
        <FadeUp>
          <h2 className="text-caption text-ink-muted border-t border-line pt-8">
            Tools
          </h2>
        </FadeUp>

        <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3">
          {tools.map((tool, index) => (
            <FadeUp key={tool.name} delay={index * 0.03}>
              <div>
                <dt className="text-body">{tool.name}</dt>
                <dd className="text-caption text-ink-muted mt-1">
                  {t(tool.level)}
                </dd>
              </div>
            </FadeUp>
          ))}
        </dl>
      </section>
    </div>
  );
}
