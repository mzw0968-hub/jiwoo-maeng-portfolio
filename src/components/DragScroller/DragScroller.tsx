"use client";

import {
  useEffect,
  useRef,
  type PointerEvent,
  type MouseEvent,
} from "react";
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
  centerIndex,
  className = "",
  style,
}: DragScrollerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });

  /**
   * 지정한 항목을 화면 정중앙에 놓고 시작한다.
   *
   * offsetLeft 대신 화면상의 실제 위치를 재서 계산한다 — offsetLeft는
   * 기준이 되는 조상 요소에 따라 값이 달라져 어긋날 수 있다.
   */
  useEffect(() => {
    if (centerIndex === undefined) return;
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>("[data-scroll-item]");
    const target = items[centerIndex];
    if (!target) return;

    const box = el.getBoundingClientRect();
    const item = target.getBoundingClientRect();
    el.scrollLeft += item.left + item.width / 2 - (box.left + box.width / 2);
  }, [centerIndex]);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;

    /* 여기서 setPointerCapture를 부르면 안 된다. 캡처가 걸리는 순간
       pointerup·mouseup이 이 컨테이너로 재타겟되고, click의 타깃은
       mousedown·mouseup 타깃의 공통 조상으로 정해지므로 컨테이너가
       된다. 그러면 카드 안의 <a>는 click을 아예 못 받아 링크가 죽는다.
       캡처는 실제로 끌기 시작한 뒤에 건다. */
    drag.current = {
      active: true,
      startX: event.clientX,
      startLeft: el.scrollLeft,
      moved: false,
    };
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!drag.current.active || !el) return;

    const dx = event.clientX - drag.current.startX;
    if (Math.abs(dx) > DRAG_THRESHOLD && !drag.current.moved) {
      drag.current.moved = true;
      /* 이제부터는 진짜 드래그다. 포인터가 영역 밖으로 나가도 계속
         따라오도록 이 시점에 캡처를 건다. 링크는 이미 포기된 상태라
         재타겟돼도 잃을 것이 없다. */
      el.setPointerCapture(event.pointerId);
    }
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
      /* 카드 안의 이미지·링크는 브라우저 기본 끌어놓기 대상이다. 그게
         발동하면 dragstart 직후 pointercancel이 날아와 포인터 스트림이
         끊기고 스크롤이 첫 한 칸에서 멈춘다. 예전에는 pointerdown에서
         건 캡처가 이걸 억눌러 주고 있었다. */
      onDragStart={(event) => event.preventDefault()}
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
