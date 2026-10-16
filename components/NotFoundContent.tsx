export default function NotFoundContent() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="flex w-full items-center justify-center px-6 py-20 lg:py-[120px]"
    >
      <div className="flex w-full max-w-[724px] flex-col items-center gap-[60px]">
        <div className="flex w-full flex-col items-center gap-[10px] text-center [filter:drop-shadow(0px_2px_3px_rgba(20,18,16,0.05))_drop-shadow(0px_8px_10px_rgba(20,18,16,0.08))]">
          <p className="font-cormorant text-[28px] font-normal italic leading-[49px] tracking-[0.1px] text-[#412826] sm:text-[33px]">
            404 not be found.
          </p>

          <h1
            id="not-found-title"
            className="font-gowun break-keep text-[32px] font-normal leading-[45px] tracking-[-0.8px] text-[#412826] sm:text-[48px] sm:leading-[64px] sm:tracking-[-1.2px]"
          >
            페이지를 찾을 수 없습니다.
          </h1>

          <p className="font-pretendard break-keep text-[16px] leading-[27px] tracking-[-0.5px] text-[#5c4b42] sm:text-[18px]">
            길을 잃으셨나요?
            <br />
            요청하신 페이지가 사라졌거나 잘못된 주소입니다
          </p>
        </div>

        <a
          href="/"
          className="font-pretendard flex h-[56px] w-full max-w-[455px] items-center justify-center rounded-[8px] border border-[#412826] bg-transparent px-6 text-[18px] leading-[21px] text-[#412826] transition-colors duration-200 hover:bg-[#412826] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8574ac] motion-reduce:transition-none"
        >
          홈으로 이동
        </a>
      </div>
    </section>
  );
}
