"use client";

import type { ReactNode } from "react";
import type { Counselor } from "@/components/CounselorList";

export type CounselorDetailData = Counselor & {
  certificates: string[];
  careers: string[];
  topics: string[];
  symptoms: string[];
  advice: string[];
};

const asset = "/images/counselors/detail/";

const methods = {
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

const grades = {
  top: {
    label: "최고등급",
    style: "bg-[#eff8ff] text-[#175cd3]",
  },
  sub: {
    label: "서브등급",
    style: "bg-[#fef6ee] text-[#b93815]",
  },
};

const steps = [
  {
    title: "상담사 연결신청",
    description:
      "원하는 상담 방법을 선택하고 결제를 완료하면 예약이 확정됩니다.",
    icon: "connect.svg",
    width: 45.8485,
    height: 20.8476,
  },
  {
    title: "사전 심리검사",
    description:
      "예약일 전, 현재의 상태와 어려움을 미리 살펴볼 수 있도록 간단한 심리검사를 이메일로 보내드립니다.",
    icon: "assessment.svg",
    width: 25.7,
    height: 24.7,
  },
  {
    title: "상담진행",
    description:
      "검사 내용을 바탕으로 현재의 마음과 어려움을 함께 살펴봅니다.",
    icon: "heart.svg",
    width: 31,
    height: 26.9929,
  },
];

/* 제목 + 테두리 박스 */
function InfoSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="break-keep text-[24px] font-bold leading-[34px] lg:text-[28px] lg:leading-[27px]">
        {title}
      </h2>

      <div className="rounded-[12px] border border-[#dbdadd] px-6 py-[30px] lg:px-8">
        {children}
      </div>
    </section>
  );
}

/* 박스 안의 정보 열 */
function InfoColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-5">
      <h3 className="text-[18px] font-bold leading-[27px]">
        {title}
      </h3>

      <div className="break-words text-[15px] leading-[24px]">
        {children}
      </div>
    </div>
  );
}

export default function CounselorDetail({
  counselor,
}: {
  counselor: CounselorDetailData;
}) {
  const grade = counselor.grade ? grades[counselor.grade] : null;

  return (
    <div className="font-pretendard mx-auto max-w-[1456px] px-6 pb-20 pt-8 tracking-[-0.5px] text-[#5c4b42] lg:pb-[90px]">
      {/* 현재 경로 */}
      <nav aria-label="현재 위치" className="mb-[38px]">
        <ol className="flex flex-wrap items-center gap-1 text-[13px] leading-[24px] sm:text-[15px]">
          <li>
            <a
              href="/"
              className="flex items-center gap-1 rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <img
                src={`${asset}home.svg`}
                alt=""
                width={18}
                height={18}
                className="block shrink-0"
              />
              Home
            </a>
          </li>

          <li className="flex items-center gap-1">
            <img
              src={`${asset}chevron.svg`}
              alt=""
              width={18}
              height={18}
              className="block shrink-0"
            />
            <a
              href="/counselors"
              className="rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              전문가 찾기
            </a>
          </li>

          <li className="flex items-center gap-1">
            <img
              src={`${asset}chevron.svg`}
              alt=""
              width={18}
              height={18}
              className="block shrink-0"
            />
            <span
              aria-current="page"
              className="underline underline-offset-4"
            >
              전문가 상세정보
            </span>
          </li>
        </ol>
      </nav>

      <div className="grid items-start gap-[30px] lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[393px_minmax(0,1fr)]">
        {/* 왼쪽: 프로필과 예약 */}
        <aside
          aria-label="상담사 프로필과 예약"
          className="mx-auto flex w-full max-w-[393px] flex-col gap-6 lg:mx-0"
        >
          <div className="relative aspect-[393/580] overflow-hidden rounded-[12px] bg-[#e9e9e9]">
            {counselor.image ? (
              <img
                src={counselor.image}
                alt={`${counselor.name} 상담사 프로필`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <span className="flex h-full items-center justify-center text-[15px]">
                프로필 준비 중
              </span>
            )}
          </div>

          {/* 해당 상담사의 예약 페이지로 이동 */}
          <a
            href={`/counselors/${encodeURIComponent(counselor.id)}/reservation`}
            className="flex h-[56px] w-full cursor-pointer items-center justify-center rounded-[8px] border border-[#1e1928]/16 bg-[#412826] text-[18px] font-bold leading-[21px] text-white transition-colors hover:bg-[#7A5C50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8574ac] motion-reduce:transition-none"
          >
            상담 예약
          </a>
        </aside>

        {/* 오른쪽: 상세 정보 */}
        <div className="flex min-w-0 flex-col gap-10">
          <header className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-gowun break-words text-[32px] font-normal leading-[45px]">
                  {counselor.name}
                </h1>

                {grade && (
                  <span
                    className={`rounded-full px-2 py-[2px] text-[12px] font-medium leading-[18px] ${grade.style}`}
                  >
                    {grade.label}
                  </span>
                )}
              </div>

              <ul
                aria-label="가능한 상담 방식"
                className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] leading-[24px]"
              >
                {counselor.methods.map((method, index) => {
                  const item = methods[method];

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

            <p className="break-words text-[18px] leading-[27px]">
              {counselor.introduction}
            </p>
          </header>

          {/* 자격과 경력 */}
          <InfoSection title="상담사님 공인 자격 및 경력">
            <div className="grid gap-6 xl:grid-cols-2">
              <InfoColumn title="공인 자격">
                <ul className="space-y-1">
                  {counselor.certificates.map((text) => (
                    <li key={text} className="flex items-start gap-1">
                      <img
                        src="/images/counselors/certificate.svg"
                        alt=""
                        width={18}
                        height={18}
                        className="mt-[3px] block shrink-0"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </InfoColumn>

              <InfoColumn title="학력 및 경력">
                <ul className="list-disc space-y-1 pl-[22px]">
                  {counselor.careers.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </InfoColumn>
            </div>
          </InfoSection>

          {/* 상담정보 */}
          <InfoSection title="상담정보">
            <div className="grid gap-6 xl:grid-cols-2">
              <InfoColumn title="상담분야">
                {counselor.topics.join(", ")}
              </InfoColumn>

              <InfoColumn title="상담증상">
                {counselor.symptoms.join(", ")}
              </InfoColumn>
            </div>
          </InfoSection>

          {/* 조언 */}
          <InfoSection title="상담사님의 조언">
            <div className="space-y-[27px] break-words text-[18px] leading-[27px]">
              {counselor.advice.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </InfoSection>

          {/* 상담 절차 */}
          <InfoSection title="상담 절차">
            <ol className="grid gap-[30px] sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex min-w-0 flex-col gap-[50px]"
                >
                  <div className="flex flex-col gap-3">
                    <span className="font-cormorant text-[39px] font-semibold italic leading-[25px] text-[#412826]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="font-gowun break-keep text-[28px] font-normal leading-[40px] text-[#412826] 2xl:text-[32px]">
                      {step.title}
                    </h3>

                    <p className="text-[15px] leading-[24px]">
                      {step.description}
                    </p>
                  </div>

                  <img
                    src={`${asset}${step.icon}`}
                    alt=""
                    width={step.width}
                    height={step.height}
                    className="block shrink-0 self-start"
                  />
                </li>
              ))}
            </ol>
          </InfoSection>
        </div>
      </div>
    </div>
  );
}