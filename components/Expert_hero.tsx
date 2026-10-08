export default function ExpertHero() {
  return (
    <section
      aria-labelledby="expert-hero-title"
      className="relative flex min-h-[320px] w-full items-center justify-center overflow-hidden bg-[#5c4b42] px-6 py-16 lg:min-h-[410px]"
    >
      {/* 배경 이미지 */}
      <img
        src="/images/expert/expert_hero.jpg"
        alt=""
        width={1672}
        height={941}
        fetchPriority="high"
        className="pointer-events-none absolute inset-y-0 left-0 h-full w-full max-w-none object-cover object-[100%_53.2%] lg:left-[-6.1%] lg:w-[106.1%]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#412826]/50"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1356px] flex-col items-center gap-[10px] text-center text-white [filter:drop-shadow(0px_2px_3px_rgba(20,18,16,0.05))_drop-shadow(0px_8px_10px_rgba(20,18,16,0.08))]">
        <p className="font-cormorant text-[26px] font-normal italic leading-[36px] tracking-[0.1px] lg:text-[33px] lg:leading-[49px]">
          Expert
        </p>

        <h1
          id="expert-hero-title"
          className="font-gowun break-keep text-[30px] font-normal leading-[1.5] tracking-[-0.75px] [text-shadow:0_0_10px_rgba(0,0,0,0.18)] lg:text-[48px] lg:leading-[64.8px] lg:tracking-[-1.2px]"
        >
          이별의 시간을 함께 돌봐줄
          <br className="lg:hidden" />
          <span className="hidden lg:inline"> </span>
          전문가를 기다립니다.
        </h1>
      </div>
    </section>
  );
}