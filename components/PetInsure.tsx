import Image from "next/image";

export default function Advice() {
  return (
<section
  id="expert-connection"
  tabIndex={-1}
  className="w-full scroll-mt-[104px] bg-[#f4f0ed] px-6 py-24 md:scroll-mt-[110px]"
>
      <div className="mx-auto flex max-w-[1356px] flex-col items-center gap-16">
        {/* 타이틀 */}
        <div className="flex flex-col items-center gap-4 text-center text-[#5c4b42]">
          <div data-reveal className="font-gowun">
            <p className="text-[24px] leading-normal sm:text-[32px]">
              Farewall - 이별준비
            </p>
            <p className="text-[32px] leading-normal sm:text-[42px]">
              펫보험, 장례지도사 연결
            </p>
          </div>
          <p
            data-reveal
            data-reveal-delay="150"
            className="font-pretendard text-[16px] leading-[24px] tracking-[-0.5px] sm:text-[18px] sm:leading-[27px]"
          >
            펫보험과 장례 절차 등 필요한 정보를 제공하여,
            <br />
            이별의 순간을 보다 차분히 준비할 수 있도록 돕습니다.
          </p>
        </div>

        {/* 카드 2개 */}
<div className="flex w-full flex-col gap-10 lg:flex-row lg:gap-[30px]">
  {/* 카드 1: 장례지도사 연결 */}
  <div className="relative min-w-0 flex-1">
    <div className="relative aspect-[663/378] overflow-hidden bg-[#c6c6c6]">
      <Image
        src="/images/service/funeral-connect.jpg"
        alt="원목 테이블 위, 반려동물 문양이 새겨진 나무 유골함을 정리하는 손"
        fill
        sizes="(max-width: 1023px) calc(100vw - 48px), (max-width: 1403px) calc((100vw - 78px) / 2), 663px"
        className="object-cover"
      />
    </div>

    <div
      data-reveal
      className="relative z-10 flex flex-col items-start gap-6 bg-white p-6 sm:p-10"
    >
      <h3 className="font-gowun text-[24px] tracking-[-0.5px] text-[#5c4b42] sm:text-[32px]">
        장례지도사 연결
      </h3>

      <p className="font-pretendard text-[15px] leading-[22px] tracking-[-0.5px] text-[#5c4b42] sm:text-[17px] sm:leading-[25px]">
        장례 절차와 준비 사항을 혼자 알아보지 않도록, 반려동물
        장례 전문가와 연결해 드립니다. 장례
        방식, 필요한 절차, 준비물 등 이별 전후에 필요한 내용을
        차분히 확인할 수 있도록 안내합니다.
      </p>

      <p className="font-cormorant text-[19px] italic tracking-[-0.5px] text-[#c8ab91]">
        Coming Soon
      </p>
    </div>
  </div>

  {/* 카드 2: 펫보험 안내&연결 */}
  <div className="relative min-w-0 flex-1">
    <div className="relative aspect-[663/378] overflow-hidden bg-[#c6c6c6]">
      <Image
        src="/images/service/pet-insurance.jpg"
        alt="태블릿에 펜으로 반려동물 그림을 그리고 있는 손"
        fill
        sizes="(max-width: 1023px) calc(100vw - 48px), (max-width: 1403px) calc((100vw - 78px) / 2), 663px"
        className="object-cover"
      />
    </div>

    <div
      data-reveal
      data-reveal-delay="150"
      className="relative z-10 flex flex-col items-start gap-6 bg-white p-6 sm:p-10"
    >
      <h3 className="font-gowun text-[24px] tracking-[-0.5px] text-[#5c4b42] sm:text-[32px]">
        펫보험 안내&amp;연결
      </h3>

      <p className="font-pretendard text-[15px] leading-[22px] tracking-[-0.5px] text-[#5c4b42] sm:text-[17px] sm:leading-[25px]">
        반려동물의 치료·장례와 관련된 비용을 미리 대비할 수 있도록, 보장 범위와 주요 조건, 가입 전 확인할 정보를 알기
        쉽게 안내합니다. 상황에 맞는 보험을 비교하고 준비할 수
        있도록 필요한 정보를 제공합니다.
      </p>

      <p className="font-cormorant text-[19px] italic tracking-[-0.5px] text-[#c8ab91]">
        Coming Soon
      </p>
    </div>
          </div>
        </div>
      </div>
    </section>
  );
}