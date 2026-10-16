export type CounselingMethod = "phone" | "video" | "inPerson";

export type Counselor = {
  id: string;
  name: string;
  introduction: string;
  qualification: string;
  image: string | null;
  grade?: "top" | "sub";
  methods: CounselingMethod[];
};

// 화면 확인용 더미 데이터입니다.
// 나중에 API에서 받은 데이터로 교체하면 됩니다.
export const dummyCounselors: Counselor[] = [
  {
    id: "demo-01",
    name: "홍길동",
    grade: "top",
    introduction:
      "다정한 대화의 시간을 통해 내면의 힘과 빛을 발견하고 치유로 나아가길 바랍니다.",
    qualification: "상담심리사 1급",
    image: "/images/counselors/profile-01.png",
    methods: ["phone", "video"],
  },
  {
    id: "demo-02",
    name: "홍길동",
    introduction:
      "저는 당신을 자극과 반응 사이의 간격에서 행복을 선택, 성취하도록 돕는 행복 상담사입니다.",
    qualification: "펫로스 상담 전문",
    image: "/images/counselors/profile-02.png",
    methods: ["phone", "inPerson"],
  },
  {
    id: "demo-03",
    name: "홍길동",
    grade: "top",
    introduction:
      "정교한 해석과 임상적 통찰을 바탕으로, 개인의 심리적 기능을 신중하고 책임감 있게 평가합니다.",
    qualification: "상담심리사 1급",
    image: "/images/counselors/profile-03.png",
    methods: ["phone", "video"],
  },
  {
    id: "demo-04",
    name: "홍길동",
    grade: "sub",
    introduction:
      "상처, 틈이 있는 곳을 바라보고, 그 틈 사이로 빛이 들어오고 있는 걸 알아차릴 수 있게 함께하겠습니다.",
    qualification: "펫로스 상담 전문",
    image: "/images/counselors/profile-04.png",
    methods: ["inPerson"],
  },
  {
    id: "demo-05",
    name: "홍길동",
    grade: "sub",
    introduction:
      "정교한 해석과 임상적 통찰을 바탕으로, 개인의 심리적 기능을 신중하고 책임감 있게 평가합니다.",
    qualification: "상담심리사 1급",
    image: "/images/counselors/profile-05.png",
    methods: ["phone", "video"],
  },
  {
    id: "demo-06",
    name: "홍길동",
    introduction:
      "상처, 틈이 있는 곳을 바라보고, 그 틈 사이로 빛이 들어오고 있는 걸 알아차릴 수 있게 함께하겠습니다.",
    qualification: "펫로스 상담 전문",
    image: "/images/counselors/profile-06.png",
    methods: ["phone", "inPerson"],
  },
];

const methodInfo = {
  phone: {
    label: "전화상담",
    icon: "phone.svg",
    width: 24,
    height: 22,
  },
  video: {
    label: "화상상담",
    icon: "video.svg",
    width: 24,
    height: 16,
  },
  inPerson: {
    label: "대면상담",
    icon: "location.svg",
    width: 17,
    height: 22,
  },
};

const gradeInfo = {
  top: {
    label: "최고등급",
    style: "bg-[#f0f9ff] text-[#026aa2]",
  },
  sub: {
    label: "서브등급",
    style: "bg-[#fef6ee] text-[#b93815]",
  },
};

/* 상단 배너 */
export function CounselorHero() {
  return (
    <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#5c4b42] px-6 py-16 lg:min-h-[410px]">
      <img
        src="/images/counselors/hero.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_46%]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#412826]/50"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1356px] flex-col items-center gap-[10px] text-center text-white [filter:drop-shadow(0px_2px_3px_rgba(20,18,16,0.05))_drop-shadow(0px_8px_10px_rgba(20,18,16,0.08))]">
        <p className="font-cormorant text-[26px] italic leading-[36px] tracking-[0.1px] lg:text-[33px] lg:leading-[49px]">
          Counselors
        </p>

        <h1 className="font-gowun break-keep text-[30px] font-normal leading-[45px] tracking-[-0.75px] lg:text-[48px] lg:leading-[64px] lg:tracking-[-1.2px]">
          전문성과 경험을 갖춘 상담사를 소개합니다
        </h1>
      </div>
    </section>
  );
}

/* 상담사 카드 */
function CounselorCard({ counselor }: { counselor: Counselor }) {
  const grade = counselor.grade
    ? gradeInfo[counselor.grade]
    : null;

  return (
    <li className="min-w-0">
      <a
        href={`/counselors/${encodeURIComponent(counselor.id)}`}
        aria-label={`${counselor.name} 상담사 상세 보기`}
        className="block h-full rounded-[12px] text-inherit no-underline transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(65,40,38,0.1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8574ac] motion-reduce:transition-none"
      >
        <article className="flex h-full flex-col gap-6 rounded-[12px] border border-[#dbdadd] bg-white px-6 py-[30px] sm:flex-row lg:px-8">
          {/* 프로필 사진 */}
          <div className="relative mx-auto h-[286px] w-[197px] shrink-0 overflow-hidden rounded-[12px] bg-[#e9e9e9] sm:mx-0 xl:w-[160px] 2xl:w-[197px]">
            {counselor.image ? (
              <img
                src={counselor.image}
                alt={`${counselor.name} 상담사 프로필`}
                loading="lazy"
                className="absolute left-0 top-0 h-[290px] w-full object-cover"
              />
            ) : (
              <span className="font-pretendard flex h-full items-center justify-center text-[14px] text-[#5c4b42]">
                프로필 준비 중
              </span>
            )}
          </div>

          {/* 상담사 정보 */}
          <div className="flex min-w-0 flex-1 flex-col justify-between gap-8 sm:min-h-[286px]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-gowun break-words text-[32px] font-normal leading-[45px] tracking-[-0.5px]">
                  {counselor.name}
                </h3>

                {grade && (
                  <span
                    className={`font-pretendard rounded-full px-2 py-[2px] text-[12px] font-medium leading-[18px] ${grade.style}`}
                  >
                    {grade.label}
                  </span>
                )}
              </div>

              <p className="font-pretendard break-words text-[15px] leading-[24px] tracking-[-0.5px]">
                {counselor.introduction}
              </p>

              <p className="font-pretendard flex items-start gap-1 text-[15px] leading-[24px] tracking-[-0.5px]">
                <img
                  src="/images/counselors/certificate.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="mt-[3px] block shrink-0"
                />
                <span className="break-words">
                  {counselor.qualification}
                </span>
              </p>
            </div>

            {/* 가능한 상담 방식 */}
            <ul
              aria-label="가능한 상담 방식"
              className="font-pretendard flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] leading-[24px] tracking-[-0.5px]"
            >
              {counselor.methods.map((method, index) => {
                const item = methodInfo[method];

                return (
                  <li key={method} className="flex items-center gap-3">
                    {index > 0 && (
                      <span
                        aria-hidden="true"
                        className="h-4 w-px bg-[#d9d9d9]"
                      />
                    )}

                    <span className="flex items-center gap-2 whitespace-nowrap">
                      <img
                        src={`/images/counselors/${item.icon}`}
                        alt=""
                        width={item.width}
                        height={item.height}
                        className="block shrink-0"
                      />
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
      </a>
    </li>
  );
}

/* 상담사 리스트 */
export default function CounselorList({
  counselors = dummyCounselors,
}: {
  counselors?: Counselor[];
}) {
  return (
    <section
      aria-label="상담사 목록"
      className="w-full bg-white px-6 py-14 text-[#5c4b42] lg:py-20"
    >
      <div className="mx-auto max-w-[1356px]">
        <h2 className="font-gowun mb-[30px] text-[20px] font-normal leading-[29px] tracking-[-0.1px] text-[#412826]">
          검색 결과{" "}
          <span className="underline underline-offset-4">
            {counselors.length}
          </span>
          건
        </h2>

        {counselors.length > 0 ? (
          <ul className="grid grid-cols-1 gap-[30px] xl:grid-cols-2">
            {counselors.map((counselor) => (
              <CounselorCard
                key={counselor.id}
                counselor={counselor}
              />
            ))}
          </ul>
        ) : (
          <p className="font-pretendard py-20 text-center text-[16px]">
            등록된 상담사가 없습니다.
          </p>
        )}
      </div>
    </section>
  );
}