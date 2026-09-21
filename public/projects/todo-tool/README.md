# todo-tool 에셋

| 파일 | 쓰이는 곳 | 필드 |
|---|---|---|
| `thumbnail.png` | 홈·Work 목록 **카드 (클릭 전)** | `thumbnail` |
| `cover.png` | **상세 페이지 상단 (클릭 후)** | `cover` |
| `preview.mp4` | 상세 상단 영상 (있으면 cover 대신) | `video` |

**썸네일과 상세 이미지는 다른 그림을 쓴다.** 카드에서 본 장면을
상세에서 또 보여줄 이유가 없다.

경로는 `src/data/projects.ts` 에서 연결한다.

```ts
thumbnail: "/projects/todo-tool/thumbnail.png",
cover:     "/projects/todo-tool/cover.png",
```

파일이 없으면 회색 플레이스홀더가 비율을 지킨다.
비율은 카드·상세 모두 가로가 긴 쪽이 자연스럽다 (카드 4:3, 상세 16:9).
