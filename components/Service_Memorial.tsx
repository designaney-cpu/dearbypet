export default function Advice() {
  return (
<section
  id="Service_Memorial"
  tabIndex={-1}
  className="w-full scroll-mt-[104px] bg-[#ffffff] px-6 py-24 md:scroll-mt-[110px]"
>
      <div className="mx-auto flex max-w-[1356px] flex-col items-center gap-16">
        {/* 타이틀 */}
        <div className="flex flex-col items-center gap-4 text-center text-[#5c4b42]">
          <div data-reveal className="font-gowun">
            <p className="text-[24px] leading-normal sm:text-[32px]">
              Memorial - 기억하기
            </p>
            <p className="text-[32px] leading-normal sm:text-[42px]">
              메모리얼 제작 전문가 연결
            </p>
          </div>

          <p
            data-reveal
            data-reveal-delay="150"
            className="font-pretendard text-[16px] leading-[24px] tracking-[-0.5px] sm:text-[18px] sm:leading-[27px]"
          >
          함께했던 소중한 순간을 오래도록 기억할 수 있도록 돕습니다.
          </p>
        </div>
        {/* 첫째 줄: 이미지 + 설명 */}
        <div className="grid items-center gap-7 lg:grid-cols-[809fr_487fr] lg:gap-[60px]">
          <div data-reveal className="overflow-hidden rounded-[20px]">
            <img
              src="/images/service/service_memorial02.jpg"
              alt="연보라색 다이어리가 보이는 탑뷰의 책상"
              width={810}
              height={608}
              loading="lazy"
              className="block aspect-[810/608] w-full object-cover"
            />
          </div>

          <div className="min-w-0 text-[#5c4b42] tracking-[-0.5px]">
            <h2
              id="about-story-title"
              className="font-gowun text-[30px] font-normal leading-[1.5] lg:text-[32px] xl:text-[42px]"
            >
              함께했던 시간은 기억속에.
              <br />
              Dearbypet의 메모리얼
            </h2>
            <p className="font-pretendard mt-4 text-[16px] leading-[27px] lg:text-[18px]">
              소중한 추억을 기록하고 남기며, 오래도록 곁에 간직할 수 있는 메모리얼 서비스를 준비합니다.
              <br />
              오래도록 곁에 간직할 수 있는 메모리얼 서비스를 준비합니다.
              이야기를 담아, 언제든 다시 꺼내볼 수 있는 기억의 형태로 남겨드립니다.
            </p>
          </div>
        </div>  
      </div>
      
    </section>
  );
}