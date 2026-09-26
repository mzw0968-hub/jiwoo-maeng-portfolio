"use client";

import { motion, useReducedMotion } from "motion/react";
import type { FadeUpProps } from "./FadeUp.types";

/**
 * 스크롤 페이드업. 디자인 시스템이 허용하는 세 가지 모션 중 하나다.
 *
 * - 요소당 1회만 실행한다 (once: true)
 * - prefers-reduced-motion이 켜져 있으면 애니메이션 없이 바로 보여준다
 */
export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const reduceMotion = useReducedMotion();

  /*
    reduced-motion일 때 다른 엘리먼트를 반환하면 안 된다.

    서버는 이 설정을 알 수 없어 언제나 motion.div를 그리고, 인라인
    opacity:0 을 HTML에 박아 보낸다. 클라이언트가 트리를 맨 div로 바꾸면
    React가 그 인라인 스타일을 걷어내지 못해 콘텐츠가 숨은 채로 남는다.
    첫 진입에서 홈이 비어 보이다가 다른 탭에 갔다 오면 나타나던 증상이
    이것이다 (클라이언트 내비게이션은 서버 HTML을 다시 받지 않는다).

    그래서 트리는 항상 같게 두고 값만 바꾼다. 움직임을 줄이라고 했으면
    y 이동 없이 즉시 드러낸다.
  */
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.32, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
