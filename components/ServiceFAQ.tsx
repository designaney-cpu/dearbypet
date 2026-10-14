"use client";

import { useId, useState } from "react";

// 답변이 정해지면 각 answer의 문구만 바꿔주세요.
const FAQ_ITEMS = [
  {
    id: "counselor",
    question: "펫로스 상담은 어떻게 진행되나요?",
    answer: "펫로스 상담 서비스는 상담 예약, 결제 그리고 상담 진행까지 온라인으로 진행됩니다.디어바이펫 사이트에서 전화상담 또는 화상 상담을 선택 후 상담사와 예약시간을 정합니다. 결제를 하면 선택한 상담사로부터 전화 또는 줌(ZOOM) 링크가 발송됩니다.전화 또는 받은 링크로 줌 어플로 접속하여 예약한 시간에 상담을 받으시면 됩니다.",
  },
  {
    id: "application",
    question: "서비스 신청 방법은 어떻게 되나요?",
    answer: "답변 준비 중",
  },
  {
    id: "memorial-kit",
    question: "장례지도 및 펫보험은 사이트에서 바로 신청 및 가입할 수 있나요?",
    answer: "답변 준비 중",
  },
  {
    id: "insurance",
    question: "메모리얼 키트는 어떻게 구매할 수 있나요?",
    answer: "답변 준비 중",
  },
];

export default function ServiceFAQ() {
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
