"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Locale, LocalizedText } from "./types";

const STORAGE_KEY = "portfolio-locale";
const DEFAULT_LOCALE: Locale = "ko";

/** 텍스트가 흐려진 상태에서 교체되기까지의 시간. --duration-fast와 맞춘다. */
const SWAP_DELAY_MS = 180;

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** LocalizedText에서 현재 언어의 문자열을 꺼낸다. */
  t: (text: LocalizedText) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function isLocale(value: unknown): value is Locale {
  return value === "ko" || value === "en";
}

/* --------------------------------------------------------------------------
   언어 선택은 localStorage에 산다. React state로 복제하지 않고
   외부 스토어로 구독한다 — 다른 탭에서 바꾼 언어도 따라오고,
   effect 안에서 setState 하는 패턴을 피할 수 있다.
   -------------------------------------------------------------------------- */

const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

/** localStorage 접근이 막힌 환경(프라이빗 모드 등)에서 쓰는 세션 한정 폴백. */
let memoryLocale: Locale | null = null;

function getSnapshot(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // 접근 실패 시 아래 메모리 폴백으로 넘어간다.
  }
  return memoryLocale ?? DEFAULT_LOCALE;
}

/**
 * 서버에는 저장된 언어가 없으므로 항상 기본값(한국어)으로 그린다.
 * 하이드레이션 후 클라이언트 스냅샷으로 교체된다 — URL을 분리하지 않는
 * 클라이언트 토글 방식의 알려진 한계다. (PRD 9장)
 */
function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  // 스크린리더가 올바른 발음으로 읽도록 문서 언어를 실제 상태와 맞춘다.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  /**
   * 언어를 바꾸면 화면이 한 번에 툭 바뀌지 않도록 짧게 디졸브시킨다.
   *
   * DOM을 통째로 리마운트하면 스크롤 페이드업이 전부 다시 실행되어
   * 화면이 요란해진다. 그래서 마운트는 유지한 채 투명도만 낮췄다가,
   * 가장 흐려진 순간에 텍스트를 교체하고 다시 선명하게 되돌린다.
   */
  const [fading, setFading] = useState(false);
  const pendingSwap = useRef<number | null>(null);

  const commit = useCallback((next: Locale) => {
    // 저장에 실패해도 이번 세션의 전환은 동작해야 하므로 메모리에 먼저 둔다.
    memoryLocale = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // 저장 실패는 무시한다. 새로고침하면 기본값으로 돌아갈 뿐이다.
    }
    emit();
  }, []);

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;

      // 모션을 줄이기로 한 사용자에게는 디졸브 없이 즉시 바꾼다.
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        commit(next);
        return;
      }

      // 연타하면 앞선 예약을 취소하고 마지막 것만 반영한다.
      if (pendingSwap.current !== null) {
        window.clearTimeout(pendingSwap.current);
      }

      setFading(true);
      pendingSwap.current = window.setTimeout(() => {
        commit(next);
        setFading(false);
        pendingSwap.current = null;
      }, SWAP_DELAY_MS);
    },
    [commit, locale],
  );

  // 전환 도중에 페이지를 떠나면 예약을 정리한다.
  useEffect(() => {
    return () => {
      if (pendingSwap.current !== null) {
        window.clearTimeout(pendingSwap.current);
      }
    };
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t: (text: LocalizedText) => text[locale],
    }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>
      <div
        className="flex min-h-full flex-1 flex-col"
        style={{
          opacity: fading ? 0.25 : 1,
          transition: `opacity ${SWAP_DELAY_MS}ms var(--ease-out-soft)`,
        }}
      >
        {children}
      </div>
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale은 LocaleProvider 안에서만 사용할 수 있습니다.");
  }
  return context;
}
