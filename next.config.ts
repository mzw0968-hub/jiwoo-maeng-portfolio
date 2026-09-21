import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16부터 허용 품질값을 명시해야 한다. 기본은 75뿐이다.
    // 90은 케이스 스터디처럼 작은 글씨가 많은 이미지에 쓴다 —
    // 75에서는 텍스트 가장자리에 압축 잡티가 보인다.
    qualities: [75, 90],
  },
};

export default nextConfig;
