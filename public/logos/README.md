# 도구 로고

Design Skills 섹션에 쓰는 로고입니다.

## 현재 상태

9종 모두 적용되어 있습니다.

| 도구 | 방식 |
|---|---|
| Figma, Claude Code, Gemini | 인라인 SVG (path 내장) |
| Figma Make, Codex, Grok Bot | 인라인 SVG (제공받은 원본에서 추출) |
| Photoshop, Illustrator | 인라인 SVG (박스 + 글자 knockout) |
| Antigravity | `antigravity.png` — **유일한 래스터** |

path 데이터는 `src/components/ToolLogo/logos.ts` 에 있습니다.

## Antigravity만 PNG입니다

벡터 원본을 구하지 못해 512×512 PNG를 CSS mask로 쓰고 있습니다.
24px로 축소되니 당장 눈에 띄지는 않지만, SVG를 구하면 교체하는 편이 좋습니다.

교체 방법:
1. `logos.ts` 의 `logoRegistry` 에 항목 추가
2. `src/data/site.ts` 에서 `logo: "/logos/antigravity.png"` 줄 삭제
3. 이 PNG 파일 삭제

## 새 도구를 추가할 때

**벡터가 있으면** — `logos.ts` 의 `logoRegistry` 에 path를 넣습니다.
원본이 "검은 박스 + 흰 글자" 구조면 글자 path에 `knockout: true` 를 붙입니다.

**벡터가 없으면** — 이 폴더에 파일을 넣고 `site.ts` 에 경로를 씁니다.

```ts
{ name: "새 도구", logo: "/logos/new-tool.svg" },
```

원본 색은 신경 쓰지 않아도 됩니다. 어느 쪽이든 단색으로 렌더링됩니다.
둘 다 없으면 이니셜 플레이스홀더가 표시되어 레이아웃은 유지됩니다.
