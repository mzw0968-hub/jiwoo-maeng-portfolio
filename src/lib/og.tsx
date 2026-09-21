import { ImageResponse } from "next/og";

/**
 * 링크 공유 시 보이는 미리보기 이미지. (PRD 성공 기준 M7)
 *
 * 사이트 디자인 토큰과 같은 값을 쓰되, 여기서는 CSS 변수를 쓸 수 없어
 * 리터럴로 적는다. 토큰이 바뀌면 이 파일도 같이 바꿔야 한다.
 *
 * 텍스트를 영문으로만 구성한 이유: 기본 폰트에 한글 글리프가 없어
 * 한글을 넣으면 네모로 깨진다. 폰트를 따로 실어 나르는 대신,
 * 어차피 영문인 브랜드 스테이트먼트만 쓴다.
 */

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const INK = "#111111";
const INK_MUTED = "#6B6B6B";
const ACCENT = "#0F7A5A";
const BG = "#FFFFFF";

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: BG,
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "64px",
              height: "4px",
              backgroundColor: ACCENT,
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "76px",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: INK,
              fontWeight: 600,
              maxWidth: "940px",
            }}
          >
            From AI capability to human experience.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: `1px solid #E5E5E5`,
            paddingTop: "32px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: "30px", color: INK }}>
              Jiwoo Maeng
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "24px",
                color: INK_MUTED,
                marginTop: "8px",
              }}
            >
              AX Designer
            </div>
          </div>

          <div style={{ display: "flex", fontSize: "22px", color: INK_MUTED }}>
            Portfolio
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
