export default function AboutStory() {
  return (
    <section
      aria-labelledby="about-story-title"
      className="w-full bg-white px-6 py-16 lg:py-20"
    >
      <div className="mx-auto flex max-w-[1356px] flex-col gap-12 lg:gap-[60px]">
        {/* 첫째 줄: 이미지 + 설명 */}
        <div className="grid items-center gap-7 lg:grid-cols-[809fr_487fr] lg:gap-[60px]">
          <div data-reveal className="overflow-hidden rounded-[20px]">
            <img
              src="/images/about/about_v01.png"
              alt="꽃이 핀 풀밭을 함께 달리는 고양이와 개"
              width={809}
              height={436}
              loading="lazy"
              className="block aspect-[809/436] w-full object-cover"
            />
          </div>

          <div className="min-w-0 text-[#5c4b42] tracking-[-0.5px]">
            <h2
              id="about-story-title"
              className="font-gowun text-[30px] font-normal leading-[1.5] lg:text-[32px] xl:text-[42px]"
            >
              사랑한 순간부터,
              <br />
              마지막 이별까지 함께.
            </h2>
            <p className="font-pretendard mt-4 text-[16px] leading-[27px] lg:text-[18px]">
              함께한 시간을 소중히 기억하고, 마지막을 차분히 준비할 수 있도록.
              <br />
              DearByPet은 이별의 순간부터 그 이후의 시간까지 함께합니다.
            </p>
          </div>
        </div>

        {/* 둘째 줄: 모바일에서는 이미지가 먼저 표시됩니다. */}
        <div className="grid items-center gap-7 lg:grid-cols-[487fr_809fr] lg:gap-[60px]">
          <div className="font-pretendard order-2 min-w-0 space-y-[27px] text-[16px] leading-[27px] tracking-[-0.5px] text-[#5c4b42] lg:order-1 lg:text-[18px]">
            <p>
              반려동물과의 이별 앞에서 무엇을 준비하고,
              <br className="hidden xl:block" />
              <span className="xl:hidden"> </span>
              어디에서 도움을 받아야 할지 막막해지는 순간이 있습니다.
            </p>
            <p>
              DearByPet은 바로 이 지점에서 시작합니다.
              <br />
              이별의 전과 후에 필요한 도움을 연결하며,
              <br className="hidden xl:block" />
              <span className="xl:hidden"> </span>
              함께한 관계의 마지막까지 존중받을 수 있는 경험을 만들어갑니다.
            </p>
          </div>

          <div
            data-reveal
            className="relative order-1 aspect-[809/436] overflow-hidden rounded-[20px] lg:order-2"
          >
            <img
              src="/images/about/about_story_02.png"
              alt="반려견의 앞발을 따뜻하게 감싸 쥔 보호자의 손"
              width={4096}
              height={2731}
              loading="lazy"
              className="absolute left-[-9.8888%] top-[-25.6881%] h-[138.9908%] w-[109.8888%] max-w-none object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
