# 도구 로고

Design Skills 섹션에 쓰는 로고입니다.

## 넣는 법

1. 이 폴더에 SVG 파일을 넣습니다. 예: `photoshop.svg`
2. `src/data/site.ts` 의 `toolkit` 배열에서 해당 도구에 경로를 씁니다.

```ts
{ name: "Photoshop", logo: "/logos/photoshop.svg" },
```

## 색은 신경 쓰지 않아도 됩니다

원본이 컬러여도 CSS mask로 단색 실루엣으로 렌더링됩니다.
**단색 실루엣 형태로 알아볼 수 있는 SVG**면 됩니다.
여러 색 면으로 형태가 구분되는 로고는 실루엣이 뭉개질 수 있으니,
그런 경우 단색 버전을 따로 받아서 넣으세요.

## 현재 상태

| 도구 | 로고 |
|---|---|
| Figma | 내장 |
| Claude Code | 내장 |
| Gemini | 내장 |
| Figma Make | **파일 필요** |
| Codex | **파일 필요** |
| Grok Bot | **파일 필요** |
| Antigravity | **파일 필요** |
| Photoshop | **파일 필요** |
| Illustrator | **파일 필요** |

파일이 없는 도구는 이니셜 플레이스홀더가 대신 표시됩니다.
