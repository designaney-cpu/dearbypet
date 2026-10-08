const qualifications = [
  {
    title: "심리상담 자격 보유",
    description: ["상실·애도 상담 관련 전문성을 갖추고", "펫로스 상담 경험이 있는 분"],
    icon: "/images/expert/cert.svg",
  },
  {
    title: "애도·펫로스 이해",
    description: ["상실과 애도 영역의 상담 경험과 관련 지식과", "자격을 갖춘 분"],
    icon: "/images/expert/grief.svg",
  },
  {
    title: "공감과 경청",
    description: ["보호자의 감정을 존중하고 공감하며", "차분히 이야기를 들어줄 수 있는 분"],
    icon: "/images/expert/empathy.svg",
  },
];

const guidance = [
  "전문 분야와 활동 형태에 따라 DearByPet 서비스 내 전문가 및 파트너로 함께합니다.",
  "비대면 상담을 중심으로 진행하며, 세부 방식은 파트너와 논의 후 결정합니다.",
  "지원서 확인 후 자격과 경력을 검토하고, 간단한 인터뷰를 거쳐 활동 분야와 조건을 협의합니다.",
];

export default function PartnerRecruit() {
  return (
    <section
      id="partner-recruit"
      aria-labelledby="partner-recruit-title"
      className="flex w-full flex-col gap-10 bg-white py-16 text-[#5c4b42] lg:gap-[60px] lg:py-20"
    >
      {/* 소개 */}
      <div className="px-6 text-center tracking-[-0.5px]">
        <div className="mx-auto max-w-[1356px]">
          <h2 id="partner-recruit-title" className="font-gowun text-[32px] font-normal leading-[1.5] lg:text-[42px]">
            DearByPet이 찾는 분
          </h2>
          <p className="font-pretendard mt-4 break-keep text-[16px] leading-[27px] lg:text-[18px]">
            DearByPet은 반려동물과 보호자의 이별 과정에 필요한 전문적인 도움을 연결합니다.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            각 분야의 경험과 전문성을 바탕으로 함께 새로운 이별 케어 서비스를 만들어갈 파트너를 기다립니다.
          </p>
        </div>
      </div>

      {/* 펫로스 상담분야 */}
      <div className="px-6">
        <div className="mx-auto flex max-w-[1356px] flex-col gap-5 lg:gap-6">
          <h3 className="font-gowun text-[26px] font-normal leading-[40px] tracking-[-0.5px] lg:text-[32px]">
            펫로스 상담분야
          </h3>
          <ul className="grid gap-5 lg:grid-cols-3 lg:gap-[30px]">
            {qualifications.map((item) => (
              <li
                key={item.title}
                className="flex min-w-0 flex-col items-center gap-5 bg-[#f4f0ed] px-8 py-[30px] text-center tracking-[-0.5px]"
              >
                <img
                  src={item.icon}
                  alt=""
                  width={70}
                  height={70}
                  loading="lazy"
                  className="block size-[70px] shrink-0"
                />
                <div className="flex flex-col items-center gap-1">
                  <h4 className="font-gowun text-[28px] font-normal leading-[45px] xl:text-[32px]">
                    {item.title}
                  </h4>
                  <p className="font-pretendard break-keep text-[15px] leading-[24px]">
                    {item.description.map((line, i) => (
                      <span key={line}>
                        {line}
                        {i < item.description.length - 1 && <br className="hidden sm:block" />}
                        {i < item.description.length - 1 && <span className="sm:hidden"> </span>}
                      </span>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 함께하는 방식 */}
      <div className="px-6">
        <aside
          aria-labelledby="partner-guidance-title"
          className="mx-auto max-w-[1356px] rounded-[4px] bg-white px-6 py-6 shadow-[inset_0_0_0_1px_#e5e9ee] lg:px-10"
        >
          <h3 id="partner-guidance-title" className="font-gowun text-[20px] font-normal leading-[29px] tracking-[-0.1px] text-[#412826]">
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
