"use client";

import { useId, useState } from "react";

// 답변이 정해지면 각 answer의 문구만 바꿔주세요.
const FAQ_ITEMS = [
  {
    id: "counselor",
    question: "펫로스 상담은 어떻게 진행되나요?",
    answer: `DearByPet 홈페이지에서 전화 상담 또는 화상 상담을 선택하고, 상담사와 원하는 예약 일정을 정해 주세요.
결제가 완료되면 예약한 상담 방식에 따라 전화 안내 또는 Zoom 접속 링크를 보내드립니다.
예약한 시간에 전화를 받거나 안내받은 Zoom 링크로 접속하시면 편안하게 상담을 받으실 수 있습니다.`,
  },
  {
    id: "application",
    question: "서비스 신청 방법은 어떻게 되나요?",
    answer: `DearByPet 홈페이지에서 원하시는 서비스를 선택한 후, 안내에 따라 신청해 주세요.
서비스 종류에 따라 필요한 정보를 입력하고 상담 또는 서비스 일정을 선택하시면 신청이 완료됩니다.
신청이 접수되면 서비스별 진행 절차와 필요한 사항을 안내해 드립니다.
궁금한 점이 있으시면 대표메일(dearbypet@naver.com)로 편하게 문의해 주세요.`,
  },
  {
    id: "memorial-kit",
    question: "장례지도 및 펫보험은 사이트에서 바로 신청 및 가입할 수 있나요?",
    answer: `장례지도 및 펫보험 서비스는 현재 홈페이지에서 직접 신청하거나 가입하는 방식이 아닌, 관련 서비스와 전문가를 안내하고 연결해 드리는 방식으로 운영됩니다.
원하시는 서비스를 신청해 주시면 관련 절차와 이용 방법을 문자로 안내해 드리고, 전문가가 전화로 세부사항을 설명해 드립니다.
펫보험의 경우 실제 가입은 해당 보험사의 가입 절차에 따라 진행됩니다.`,
  },
  {
    id: "insurance",
    question: "메모리얼 키트는 어떻게 구매할 수 있나요?",
    answer: `메모리얼 키트는 반려동물과 함께한 소중한 추억을 오래도록 간직할 수 있도록 제작하는 추모 상품입니다.
DearByPet 홈페이지에서 메모리얼 키트 소개를 확인하신 후, 구매 또는 제작을 원하시면 문의해 주세요.
제작 가능한 상품과 주문 방법, 비용 및 소요 기간을 안내해 드립니다.
상품에 따라 전문 제작자와 연결해 드릴 수 있습니다.`,
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
