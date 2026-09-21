"use client";

import { useRef, type PointerEvent, type MouseEvent } from "react";
import type { DragScrollerProps } from "./DragScroller.types";

/** 이 거리를 넘겨야 드래그로 친다. 손떨림으로 링크가 막히면 안 된다. */
const DRAG_THRESHOLD = 4;

/**
 * 마우스로 잡아끌어 가로 스크롤하는 영역.
 *
 * 스크롤바를 숨겼기 때문에 끌어서 움직인다는 것이 유일한 마우스 조작
 * 수단이다. 그래서 키보드 접근(tabIndex + role)을 반드시 함께 둔다 —
 * 없으면 마우스가 없는 사용자는 뒤쪽 카드에 닿을 방법이 사라진다.
 *
 * 터치와 펜은 브라우저 기본 스크롤이 더 자연스러우므로 건드리지 않는다.
 */
export function DragScroller({
  children,
  label,
  className = "",
  style,
}: DragScrollerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;

    drag.current = {
      active: true,
      startX: event.clientX,
      startLeft: el.scrollLeft,
      moved: false,
    };
    el.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!drag.current.active || !el) return;

    const dx = event.clientX - drag.current.startX;
    if (Math.abs(dx) > DRAG_THRESHOLD) drag.current.moved = true;
    el.scrollLeft = drag.current.startLeft - dx;
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!drag.current.active || !el) return;

    drag.current.active = false;
    if (el.hasPointerCapture(event.pointerId)) {
      el.releasePointerCapture(event.pointerId);
    }
  };

  /** 끌고 나서 손을 뗄 때 카드 링크가 열리면 안 된다. */
  const onClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!drag.current.moved) return;
    event.preventDefault();
    event.stopPropagation();
    drag.current.moved = false;
  };

  return (
    <div
      ref={ref}
      role="region"
      aria-label={label}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onClickCapture={onClickCapture}
      className={[
        "no-scrollbar cursor-grab select-none overflow-x-auto active:cursor-grabbing",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}
