export default function AboutPromise() {
  return (
    <section aria-label="디어바이펫의 약속" className="w-full">
      {/* 브랜드 소개 */}
      <div className="flex flex-col items-center justify-center gap-7 bg-[#f4f0ed] px-6 py-14 lg:min-h-[412px] lg:py-20">
        <div
          role="img"
          aria-label="Dear By Pet"
          className="relative h-[60.45px] w-[280px] shrink-0 lg:h-[114px] lg:w-[528px]"
        >
          {/* 원본 SVG 크기를 유지하고 로고 그룹 전체를 비례 축소 */}
          <div className="absolute left-0 top-0 h-[114px] w-[528px] origin-top-left scale-[0.530303] lg:scale-100">
            <img
              src="/images/about/about_wordmark.svg"
              alt=""
              width={359.639}
              height={75.8262}
              loading="lazy"
              className="absolute left-[168.36px] top-[18.96px] block max-w-none"
            />
            <img
              src="/images/about/about_symbol.svg"
              alt=""
              width={238.825}
              height={114}
              loading="lazy"
              className="absolute left-0 top-0 block max-w-none"
            />
          </div>
        </div>

        <p className="font-gowun max-w-[1200px] break-keep text-center text-[24px] font-normal leading-[1.6] tracking-[-0.5px] text-[#5c4b42] lg:text-[36px] lg:leading-[55px] xl:text-[42px]">
          “ DearByPet은 반려동물과 보호자의 마지막 시간을 준비하고,
          <br className="hidden xl:block" />
          <span className="xl:hidden"> </span>
          이별 이후의 마음까지 돌보는 통합 이별 케어 서비스입니다.”
        </p>
      </div>

      {/* 사진과 약속 메시지 */}
      <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-[#412826] px-6 py-20 lg:min-h-[800px]">
        <img
          src="/images/about/about_promise.png"
          alt=""
          width={1672}
          height={941}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1356px] flex-col items-center gap-[10px] text-center text-white [filter:drop-shadow(0px_2px_3px_rgba(20,18,16,0.05))_drop-shadow(0px_8px_10px_rgba(20,18,16,0.08))]">
          <h2 className="font-gowun break-keep text-[26px] font-normal leading-[1.5] tracking-[-0.7px] [text-shadow:0_0_10px_rgba(0,0,0,0.18)] lg:text-[48px] lg:leading-[64px] lg:tracking-[-1.2px]">
            이별의 순간을
            <br className="lg:hidden" />
            <span className="hidden lg:inline"> </span>
            혼자 준비하지 않도록,
            <br />
            DearByPet이 함께하겠습니다.
          </h2>
          <p className="font-pretendard break-keep text-[16px] leading-[27px] lg:text-[18px]">
            소중한 관계를 기억하고 마음을 돌보는 과정까지,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            당신과 반려동물의 곁에서 함께하겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
