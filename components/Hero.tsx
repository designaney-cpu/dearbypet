"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // 자동재생이 차단된 경우 콘솔에서 확인 가능
      });
    }
  }, []);

  return (
    <section className="relative flex min-h-[666px] items-center justify-center overflow-hidden bg-zinc-300">
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src="/videos/hero_dbp_01.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-[#412826]/50" />

      <div className="relative z-10 flex flex-col items-center gap-[54px] px-6 text-center text-white">
        <div>
          <p className="text-[48px] italic leading-[50px]">Dear By Pet</p>

          <h1 className="font-gowun mt-[10px] text-[48px] font-normal leading-[64px]">
            이별의 순간에도, 곁에 있겠습니다.
          </h1>

          <p className="mt-[10px] text-[18px] leading-[27px]">
            DearByPet은 반려동물과 보호자의 이별을
            <br />
            더 세심하게 돌볼 케어 서비스를 준비하고 있습니다.
          </p>
        </div>

        <button className="cursor-pointer rounded-full border-2 border-white bg-transparent px-8 py-3 text-white transition-colors duration-200 hover:bg-white hover:text-[#412826]">
          서비스 자세히 보기
        </button>
      </div>
    </section>
  );
}