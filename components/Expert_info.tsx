import type { ReactNode } from "react";

const qualifications = [
  {
    title: "심리상담 자격 보유",
    description: [
      "상실·애도 상담 관련 전문성을 갖추고",
      "펫로스 상담 경험이 있는 분",
    ],
    icon: "/images/expert/cert.svg",
  },
  {
    title: "애도·펫로스 이해",
    description: [
      "상실과 애도에 대한 이해를 바탕으로",
      "보호자의 마음을 살필 수 있는 분",
    ],
    icon: "/images/expert/grief.svg",
  },
  {
    title: "공감과 경청",
    description: [
      "보호자의 감정을 존중하고 공감하며",
      "차분히 이야기를 들어줄 수 있는 분",
    ],
    icon: "/images/expert/empathy.svg",
  },
];

const funeralQualifications = [
  {
    title: "장례 실무 경험",
    description: [
      "반려동물 장례 현장의 경험을 바탕으로",
      "마지막 배웅을 세심하게 도울 수 있는 분",
    ],
    icon: "flower",
  },
  {
    title: "절차와 준비 안내",
    description: [
      "장례 절차와 필요한 준비 사항을",
      "보호자의 상황에 맞게 안내할 수 있는 분",
    ],
    icon: "guide",
  },
  {
    title: "존중과 배려",
    description: [
      "보호자의 선택과 애도 방식을 존중하며",
      "차분하고 배려 깊게 소통할 수 있는 분",
    ],
    icon: "heart",
  },
] as const;

const guidance = [
  "전문 분야와 활동 형태에 따라 DearByPet 서비스 내 전문가 및 파트너로 함께합니다.",
  "펫로스 상담은 비대면을 중심으로, 장례지도는 보호자의 상황과 지역을 고려해 연결하며 세부 방식은 파트너와 협의합니다.",
  "지원서 확인 후 자격과 경력을 검토하고, 간단한 인터뷰를 거쳐 활동 분야와 조건을 협의합니다.",
];

type FuneralIconType = (typeof funeralQualifications)[number]["icon"];

function FuneralIcon({ type }: { type: FuneralIconType }) {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="block size-[70px] shrink-0 text-[#412826]"
    >
      {type === "flower" && (
        <>
          {/* 장례 실무 경험: 추모의 꽃 */}
          <path d="M35 33C24 31 20 23 23 15C29 16 33 20 35 25" />
          <path d="M35 33C46 31 50 23 47 15C41 16 37 20 35 25" />
          <path d="M35 29C29 24 29 16 35 9C41 16 41 24 35 29Z" />

          <path d="M35 33V59" />
          <path d="M35 47C27 47 22 43 20 37C28 37 33 41 35 47Z" />
          <path d="M35 54C43 54 48 50 50 44C42 44 37 48 35 54Z" />
        </>
      )}

      {type === "guide" && (
        <>
          {/* 절차와 준비 안내: 체크리스트 */}
          <path d="M25 14H21A5 5 0 0 0 16 19V55A5 5 0 0 0 21 60H49A5 5 0 0 0 54 55V19A5 5 0 0 0 49 14H45" />
          <rect x="25" y="9" width="20" height="11" rx="4" />

          <path d="M24 33L28 37L34 30" />
          <path d="M41 34H46" />

          <path d="M24 48L28 52L34 45" />
          <path d="M41 49H46" />
        </>
      )}

      {type === "heart" && (
        <>
          {/* 존중과 배려: 서로 마주하는 두 사람과 마음 */}
          <circle cx="15" cy="22" r="7" />
          <circle cx="55" cy="22" r="7" />

          <path d="M6 57V44A9 9 0 0 1 15 35C19 35 22 37 25 41L29 46" />
          <path d="M64 57V44A9 9 0 0 0 55 35C51 35 48 37 45 41L41 46" />

          <path d="M15 47V59" />
          <path d="M55 47V59" />

          <path d="M35 39L28 32C23 27 30 21 35 27C40 21 47 27 42 32L35 39Z" />
        </>
      )}
    </svg>
  );
}


/* 두 분야에서 공통으로 사용하는 카드 */
function QualificationCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: readonly string[];
  icon: ReactNode;
}) {
  return (
    <li className="flex min-w-0 flex-col items-center gap-5 bg-[#f4f0ed] px-8 py-[30px] text-center tracking-[-0.5px]">
      {icon}

      <div className="flex flex-col items-center gap-1">
        <h4 className="font-gowun break-keep text-[28px] font-normal leading-[45px] xl:text-[32px]">
          {title}
        </h4>

        <p className="font-pretendard break-keep text-[15px] leading-[24px]">
          {description.map((line, index) => (
            <span key={line}>
              {line}

              {index < description.length - 1 && (
                <>
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                </>
              )}
            </span>
          ))}
        </p>
      </div>
    </li>
  );
}

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
          <h2
            id="partner-recruit-title"
            className="font-gowun text-[32px] font-normal leading-[1.5] lg:text-[42px]"
          >
            DearByPet이 찾는 분
          </h2>

          <p className="font-pretendard mt-4 break-keep text-[16px] leading-[27px] lg:text-[18px]">
            DearByPet은 반려동물과 보호자의 이별 과정에 필요한 전문적인
            도움을 연결합니다.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            각 분야의 경험과 전문성을 바탕으로 함께 새로운 이별 케어
            서비스를 만들어갈 파트너를 기다립니다.
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
              <QualificationCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={
                  <img
                    src={item.icon}
                    alt=""
                    width={70}
                    height={70}
                    loading="lazy"
                    className="block size-[70px] shrink-0"
                  />
                }
              />
            ))}
          </ul>
        </div>
      </div>

      {/* 장례지도 */}
      <div className="px-6">
        <div className="mx-auto flex max-w-[1356px] flex-col gap-5 lg:gap-6">
          <h3 className="font-gowun text-[26px] font-normal leading-[40px] tracking-[-0.5px] lg:text-[32px]">
            장례지도
          </h3>

          <ul className="grid gap-5 lg:grid-cols-3 lg:gap-[30px]">
            {funeralQualifications.map((item) => (
              <QualificationCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={<FuneralIcon type={item.icon} />}
              />
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
          <h3
            id="partner-guidance-title"
            className="font-gowun text-[20px] font-normal leading-[29px] tracking-[-0.1px] text-[#412826]"
          >
            함께하는 방식
          </h3>

          <ul className="font-pretendard mt-3 space-y-1 text-[15px] leading-[24px] tracking-[-0.5px]">
            {guidance.map((text) => (
              <li key={text} className="flex gap-1">
                <span aria-hidden="true" className="shrink-0">
                  +
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}