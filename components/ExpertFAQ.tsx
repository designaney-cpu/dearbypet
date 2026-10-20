"use client";

import { useId, useState } from "react";

const FAQ_ITEMS = [
  {
    id: "counselor",
    question: "DearByPet 상담사로 지원하려면 어떤 자격과 서류가 필요한가요?",
    answer: `DearByPet 상담사로 지원하시려면 해당 분야의 상담 경험이나 관련 자격이 필요합니다.
반려동물과 보호자의 마음에 공감하며 따뜻한 상담을 제공할 수 있는 분을 기다립니다.
전문 상담 경력이나 관련 자격증을 보유하신 분은 우대하며, 지원 시 이력서와 자격 및 경력을 확인할 수 있는 관련 서류를 제출해 주시기 바랍니다.`,
  },
  {
    id: "application",
    question: "지원 후에는 어떤 절차로 진행되나요?",
    answer: `지원이 접수되면 제출해 주신 서류를 바탕으로 1차 심사를 진행합니다.
서류 심사 통과자에 한해 인터뷰를 진행하며, 상담 경험과 전문성, DearByPet의 서비스 방향과의 적합성 등을 종합적으로 검토합니다.
각 단계의 진행 결과와 이후 일정은 개별적으로 안내해 드립니다.`,
  },
  {
    id: "memorial-kit",
    question: "전문가로 선정되면 어떤 방식으로 활동하나요?",
    answer: `DearByPet 전문가는 기본적으로 전화상담 또는 Zoom을 활용한 온라인 상담 방식으로 활동하게 됩니다.
내담자는 시간과 장소의 제약 없이 전문가와 상담할 수 있으며, 전문가는 각자의 전문 분야에 맞춰 비대면 상담을 진행합니다.
구체적인 상담 일정과 진행 방식은 전문가와의 협의를 통해 안내해 드립니다.`,
  },
  {
    id: "insurance",
    question: "전문가 활동에 따른 수익과 정산은 어떻게 이루어지나요?",
    answer: `전문가 활동을 통해 발생한 상담 수익은 DearByPet과 전문가가 사전에 협의한 수수료 기준에 따라 배분 및 정산됩니다.
수수료 비율과 정산 주기, 지급 방식 등 구체적인 조건은 협업 계약 시 안내해 드리며, 상호 협의를 통해 투명하고 원활하게 정산이 이루어질 수 있도록 운영합니다.`,
  },
];

export default function ExpertFAQ() {
  const instanceId = useId();
  const [openId, setOpenId] = useState<string | null>(null);
  const titleId = `${instanceId}-title`;

  return (
    <section
      aria-labelledby={titleId}
      className="w-full bg-[#f4f0ed] px-6 py-14 text-[#5c4b42] lg:py-[90px]"
    >
      <div className="mx-auto flex max-w-[1356px] flex-col gap-10 lg:gap-[60px]">
        <div className="text-center tracking-[-0.5px]">
          <h2 id={titleId} className="font-gowun text-[32px] font-normal leading-[44px] lg:text-[42px] lg:leading-[45px]">
            Q&amp;A
          </h2>
          <p className="font-pretendard mt-4 text-[16px] leading-[27px] lg:text-[18px]">
            가장 많이 묻는 질문을 모았습니다.
          </p>
        </div>

        <div className="flex flex-col gap-[15px]">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const buttonId = `${instanceId}-${item.id}-button`;
            const panelId = `${instanceId}-${item.id}-panel`;

            return (
              <div key={item.id} className="rounded-[8px] bg-white">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId((current) => current === item.id ? null : item.id)}
                    className="font-pretendard flex w-full cursor-pointer items-center gap-3 rounded-[8px] p-5 text-left text-[18px] font-medium leading-[28px] tracking-[-0.5px] text-[#5c4b42] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8574ac] lg:p-6 lg:text-[24px] lg:leading-[45px]"
                  >
                    <img
                      src="/images/service/faq_plus.svg"
                      alt=""
                      width={12}
                      height={12}
                      className={`block shrink-0 max-w-none transition-transform duration-200 motion-reduce:transition-none ${isOpen ? "rotate-45" : "rotate-0"}`}
                    />
                    <span className="min-w-0 break-keep">{item.question}</span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5 pl-11 pr-5 lg:pb-6 lg:pl-12 lg:pr-6"
                >
                  <p className="font-pretendard whitespace-pre-line break-words text-[16px] leading-[27px] tracking-[-0.5px] lg:text-[18px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
