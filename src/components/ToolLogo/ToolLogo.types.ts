export type ToolLogoProps = {
  /** 도구 이름. 내장 로고를 찾는 키로도 쓰인다. */
  name: string;
  /**
   * public/logos/ 에 넣은 SVG 경로. 주어지면 내장 로고보다 우선한다.
   * 원본 색과 무관하게 CSS mask로 단색 실루엣으로 렌더링된다.
   */
  src?: string;
  className?: string;
};
