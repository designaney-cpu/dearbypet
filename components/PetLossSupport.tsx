const steps = [
  {
    number: "01",
    title: "상담사 연결신청",
    description: "원하는 상담 방법을 선택하고 결제를 완료하면 예약이 확정됩니다.",
    icon: "/images/service/care_connect.svg",
    iconWidth: 46.0976,
    iconHeight: 20.0976,
    iconOffset: -1.0488,
  },
  {
    number: "02",
    title: "사전 심리검사",
    description: "예약일 전, 현재의 상태와 어려움을 미리 살펴볼 수 있도록 간단한 심리검사를 이메일로 보내드립니다.",
    icon: "/images/service/care_assessment.svg",
    iconWidth: 29.7,
    iconHeight: 18.7,
    iconOffset: -0.35,
  },
  {
    number: "03",
    title: "상담진행",
    description: "검사 내용을 바탕으로 세심히 현재의 마음과 어려움을 함께 살펴봅니다.",
    icon: "/images/service/care_counseling.svg",
    iconWidth: 21.7,
    iconHeight: 18.7,
    iconOffset: -0.35,
  },
];

const guidance = [
  "전문 분야와 활동 형태에 따라 DearByPet 서비스 내 전문가 및 파트너로 함께합니다.",
  "비대면 상담을 중심으로 진행하며, 세부 방식은 파트너와 논의 후 결정합니다.",
  "지원서 확인 후 자격과 경력을 검토하고, 간단한 인터뷰를 거쳐 활동 분야와 조건을 협의합니다.",
];

export default function PetLossSupport() {
  return (
    <section
      id="pet-loss"
      tabIndex={-1}
      aria-labelledby="pet-loss-title"
      className="flex w-full scroll-mt-[104px] flex-col gap-10 bg-white pb-16 text-[#5c4b42] md:scroll-mt-[110px] lg:gap-[60px] lg:pb-20"
    >
      {/* 상담 지원 소개 */}
      <div className="px-6 text-center tracking-[-0.5px]">
        <div className="mx-auto max-w-[1356px]">
          <p className="font-gowun text-[24px] leading-[1.5] lg:text-[32px]">
            Care - 마음돌봄
          </p>
          <h2 id="pet-loss-title" className="font-gowun text-[32px] font-normal leading-[1.5] lg:text-[42px]">
            펫로스 상담 지원
          </h2>
          <p className="font-pretendard mt-4 break-keep text-[16px] leading-[27px] lg:text-[18px]">
            이별을 앞두고 느끼는 불안과 이별 이후의 상실까지,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            보호자가 자신의 마음을 천천히 바라보고 돌볼 수 있도록 돕습니다.
          </p>
        </div>
      </div>

      {/* 전체 폭 사진 배너 */}
      <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#412826] px-6 py-16 lg:min-h-[356px]">
        <img
          src="/images/service/pet_loss_banner.png"
          alt=""
          width={900}
          height={600}
          loading="lazy"
          className="absolute inset-y-0 left-0 h-full w-full max-w-none object-cover object-[100%_62.8%] lg:left-[-20.1042%] lg:w-[120.0521%]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#412826]/50" />
        <p className="font-gowun relative z-10 mx-auto max-w-[1356px] break-keep text-center text-[24px] leading-[36px] tracking-[-0.5px] text-white lg:text-[29.8px] lg:leading-[43px]">
          혼자 감당하기 어려운 마음을 나누고,
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          펫로스 상담사와 함께 회복의 시간을 이어갈 수 있도록 돕습니다.
        </p>
      </div>

      {/* 상담사 안내 */}
      <div className="px-6 text-center tracking-[-0.5px]">
        <div className="mx-auto max-w-[1356px]">
          <h3 className="font-gowun break-keep text-[30px] font-normal leading-[1.5] lg:text-[42px]">
            신뢰할 수 있는 상담사와 함께합니다.
          </h3>
          <p className="font-pretendard mt-4 break-keep text-[16px] leading-[27px] lg:text-[18px]">
            관련 자격과 상담 경험을 갖춘 심리상담가를 확인하고,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            보호자가 안심하고 상담을 시작할 수 있도록 연결합니다.
          </p>
        </div>
      </div>

      {/* 상담 진행 순서 */}
      <div className="px-6">
        <ol aria-label="상담 진행 순서" className="mx-auto grid max-w-[1356px] items-end gap-5 lg:grid-cols-3 lg:gap-[30px]">
          {steps.map((step) => (
            <li key={step.number} className="flex min-w-0 flex-col gap-[18px] bg-[#8574ac] p-7 text-white lg:p-10">
              <div className="flex flex-col gap-3 tracking-[-0.5px]">
                <p className="font-cormorant text-[39px] font-semibold italic leading-[25px]">
                  {step.number}
                </p>
                <h4 className="font-gowun text-[28px] font-normal leading-[40px] xl:text-[32px]">
                  {step.title}
                </h4>
                <p className="font-pretendard text-[15px] leading-[24px]">
                  {step.description}
                </p>
              </div>
              <div className="relative h-[18px]">
                <img
                  src={step.icon}
                  alt=""
                  width={step.iconWidth}
                  height={step.iconHeight}
                  loading="lazy"
                  className="absolute block max-w-none"
                  style={{ left: step.iconOffset, top: step.iconOffset }}
                />
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* 함께하는 방식: 피그마 원문 */}
      <div className="px-6">
        <aside aria-labelledby="care-guidance-title" className="mx-auto max-w-[1356px] rounded-[4px] bg-white px-6 py-6 shadow-[inset_0_0_0_1px_#e5e9ee] lg:px-10">
          <h3 id="care-guidance-title" className="font-gowun text-[20px] font-normal leading-[29px] tracking-[-0.1px] text-[#412826]">
            함께하는 방식
          </h3>
          <ul className="font-pretendard mt-3 space-y-1 text-[15px] leading-[24px] tracking-[-0.5px]">
            {guidance.map((text) => (
              <li key={text} className="flex gap-1">
                <span aria-hidden="true" className="shrink-0">+</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
