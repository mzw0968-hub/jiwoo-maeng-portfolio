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

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.32,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
