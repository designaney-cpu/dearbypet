"use client";

import { useId, useState } from "react";

// 답변이 정해지면 각 answer의 문구만 바꿔주세요.
const FAQ_ITEMS = [
  {
    id: "counselor",
    question: "DearByPet 상담사로 지원하려면 어떤 자격과 서류가 필요한가요?",
    answer: "DearByPet 상담사로 지원하시려면 해당 분야의 상담 경험이나 관련 자격을 갖추고 계시면 좋습니다. 반려동물과 보호자 모두에게 공감하며 상담할 수 있는 분이라면 누구든 지원하실 수 있으며 전문 상담 경력이나 관련 자격증을 보유하신 분은 우대해 드립니다.",
  },
  {
    id: "application",
    question: "수입정산방식은 어떤식으로 진행되나요?",
    answer: "답변 준비 중",
  },
  {
    id: "memorial-kit",
    question: "어떤 자격이 필요한가요??",
    answer: "답변 준비 중",
  },
  {
    id: "insurance",
    question: "지원 후에는 어떤 절차로 진행되나요?",
    answer: "답변 준비 중",
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
