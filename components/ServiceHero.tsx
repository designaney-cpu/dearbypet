export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative flex min-h-[320px] w-full items-center justify-center overflow-hidden bg-[#5c4b42] px-6 py-16 lg:min-h-[410px]"
    >
      {/* 배경 이미지 */}
      <img
        src="/images/service/service_hero.png"
        alt=""
        width={1672}
        height={941}
        fetchPriority="high"
        className="pointer-events-none absolute inset-y-0 left-0 h-full w-full max-w-none object-cover object-[100%_53.2%] lg:left-[-6.1%] lg:w-[106.1%]"
      />

      {/* 갈색 딤 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#412826]/50"
      />

      {/* 제목 */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1356px] flex-col items-center gap-[10px] text-center text-white [filter:drop-shadow(0px_2px_3px_rgba(20,18,16,0.05))_drop-shadow(0px_8px_10px_rgba(20,18,16,0.08))]">
        <p className="font-cormorant text-[26px] font-normal italic leading-[36px] tracking-[0.1px] lg:text-[33px] lg:leading-[49px]">
          About DearByPet
        </p>

        <h1
          id="about-hero-title"
          className="font-gowun break-keep text-[30px] font-normal leading-[1.5] tracking-[-0.75px] [text-shadow:0_0_10px_rgba(0,0,0,0.18)] lg:text-[48px] lg:leading-[64.8px] lg:tracking-[-1.2px]"
        >
          이별의 순간부터,
          <br className="lg:hidden" />
          <span className="hidden lg:inline"> </span>
          그 이후의 시간까지 함께합니다.
        </h1>
      </div>
    </section>
  );
}