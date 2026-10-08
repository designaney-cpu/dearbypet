export default function BrandStoryBanner() {
  return (
    <section className="relative flex min-h-[356px] items-center overflow-hidden bg-zinc-400 px-6">
      {/* 배경 이미지 */}
      <img
        data-reveal
        src="/images/footer_01.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* 갈색 딤 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#412826]/50"
      />

      {/* 콘텐츠 */}
      <div className="relative z-10 mx-auto w-full max-w-[1356px] text-white">
        <h2 className="font-gowun text-[32px] font-normal leading-[45px] text-white">
          오래 머무는 기억,
          <br />
          DearByPet이 함께 만들어갑니다.
        </h2>

        <a
          href="/about"
          data-reveal
          data-reveal-delay="450"
          className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-5 py-2 text-[14px] text-white transition-colors hover:bg-white hover:text-[#412826]"
        >
          브랜드 스토리 보러가기
        </a>
      </div>
    </section>
  );
}