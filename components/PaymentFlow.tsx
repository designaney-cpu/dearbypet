"use client";

import { useEffect, useRef, useState } from "react";
import type { Counselor } from "@/components/CounselorList";

type Props = {
  counselor: Counselor;
  method: "phone" | "video";
  date: string;
  time: string;
};

const products = {
  phone: {
    title: "스타터 전화 상담",
    price: "43,000원",
    icon: "phone.svg",
  },
  video: {
    title: "스타터 화상 상담",
    price: "40,000원",
    icon: "video.svg",
  },
};

const inputClass =
  "mt-1 block h-14 w-full rounded-lg border border-[#dbdadd] bg-white px-4 outline-none focus:border-[#8574ac] focus:ring-2 focus:ring-[#8574ac]/20";

const buttonClass =
  "flex h-14 w-full items-center justify-center rounded-lg bg-[#412826] text-[18px] text-white transition-colors hover:bg-[#7A5C50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8574ac]";

export default function PaymentFlow({
  counselor,
  method,
  date,
  time,
}: Props) {
  const [complete, setComplete] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);

  const product = products[method];
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);

  const schedule =
    `${year}년 ${month}월 ${day}일 ` +
    `${hour < 12 ? "오전" : "오후"} ${hour % 12 || 12}:` +
    String(minute).padStart(2, "0");

  useEffect(() => {
    if (complete) heading.current?.focus();
  }, [complete]);

  // 결제 화면과 완료 화면에서 공통으로 사용하는 예약 정보
  const summary = (
    <div className="rounded-xl border border-[#dbdadd] px-6 py-[30px] sm:px-8">
      <div className="flex flex-wrap items-center gap-2 text-[16px] leading-[27px] sm:text-[18px]">
        <span className="flex items-center gap-2 font-bold">
          <img
            src={`/images/counselors/${product.icon}`}
            alt=""
          />
          {product.title}
        </span>

        <span
          aria-hidden="true"
          className="h-[18px] w-px bg-[#d9d9d9]"
        />

        <span>30분 X 1회</span>

        <span
          aria-hidden="true"
          className="hidden h-[18px] w-px bg-[#d9d9d9] sm:block"
        />

        <span className="w-full sm:w-auto">{schedule}</span>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-[#d9d9d9] pt-5 font-bold">
        <span className="text-[18px]">결제금액</span>
        <span className="text-[24px]">{product.price}</span>
      </div>
    </div>
  );

  // 완료 화면
  if (complete) {
    return (
      <section className="font-pretendard mx-auto flex max-w-[836px] flex-col gap-[60px] px-6 py-20 text-[#5c4b42]">
        <div className="text-center">
          <p className="font-cormorant text-[33px] italic leading-[49px] text-[#412826]">
            Complete
          </p>

          <h1
            ref={heading}
            tabIndex={-1}
            className="font-gowun mt-2.5 break-keep text-[32px] leading-[1.4] tracking-[-1.2px] text-[#412826] outline-none sm:text-[48px] sm:leading-[64px]"
          >
            예약 신청이 완료되었습니다.
          </h1>

          <p className="mt-2.5 text-[16px] leading-[27px] sm:text-[18px]">
            테스트 예약번호 : DEMO-2000200000
            <br />
            시연용 완료 화면입니다. 실제 결제·예약·알림 발송은
            이루어지지 않습니다.
          </p>
        </div>

        {summary}

        <a
          href="/"
          className={`${buttonClass} mx-auto max-w-[455px]`}
        >
          홈으로 이동
        </a>
      </section>
    );
  }

  // 결제 화면
  return (
    <section className="font-pretendard mx-auto max-w-[836px] px-6 py-12 tracking-[-0.5px] text-[#5c4b42] lg:py-20">
      <h1 className="text-[28px] font-bold">결제하기</h1>

      {/* 상담사 정보 */}
      <div className="my-10 flex flex-col items-center gap-[30px] sm:flex-row">
        <div
          className="relative size-[163px] shrink-0 overflow-hidden bg-[#e9e9e9]"
          style={{
            maskImage: "url(/images/reservation/profile-mask.svg)",
            maskRepeat: "no-repeat",
          }}
        >
          {counselor.image ? (
            <img
              src={counselor.image}
              alt={`${counselor.name} 상담사`}
              className="absolute -left-[9px] top-0 h-[267px] w-[181px] max-w-none object-cover"
            />
          ) : (
            <span className="flex h-full items-center justify-center text-sm">
              프로필 준비 중
            </span>
          )}
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-gowun text-[32px] leading-[45px]">
              {counselor.name}
            </h2>

            {counselor.grade && (
              <span
                className={`rounded-full px-2 py-0.5 text-[12px] ${
                  counselor.grade === "top"
                    ? "bg-[#eff8ff] text-[#175cd3]"
                    : "bg-[#fef6ee] text-[#b93815]"
                }`}
              >
                {counselor.grade === "top" ? "최고등급" : "서브등급"}
              </span>
            )}
          </div>

          <p className="mt-3 break-keep text-[18px] leading-[27px]">
            {counselor.introduction}
          </p>
        </div>
      </div>

      <h2 className="mb-3 text-[18px] font-bold">상담 종류</h2>
      {summary}

      <form
        className="mt-6 flex flex-col gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          setComplete(true);
        }}
      >
        <h2 className="text-[18px] font-bold">내담자 정보</h2>

        <p className="text-sm text-[#725b52]">
          화면 테스트용입니다. 임의의 정보를 입력해 주세요.
          입력 내용은 저장·전송되지 않습니다.
        </p>

        <div className="grid gap-[13px] sm:grid-cols-2">
          <label className="text-[18px]">
            이름 *
            <input
              name="name"
              required
              maxLength={50}
              autoComplete="off"
              className={inputClass}
            />
          </label>

          <label className="text-[18px]">
            연락처 *
            <input
              name="phone"
              type="tel"
              required
              maxLength={20}
              autoComplete="off"
              className={inputClass}
            />
          </label>
        </div>

        <label className="text-[18px]">
          이메일 주소 *
          <input
            name="email"
            type="email"
            required
            autoComplete="off"
            className={inputClass}
          />
        </label>

        <label className="text-[18px]">
          상담요청사항
          <textarea
            name="message"
            maxLength={2000}
            className={`${inputClass} h-[112px] resize-y py-3`}
          />
        </label>

        <hr className="border-[#d9d9d9]" />

        {/* 결제수단 */}
        <div>
          <label
            htmlFor="payment-method"
            className="mb-3 block text-[18px] font-bold"
          >
            결제
          </label>

          <div className="rounded-xl border border-[#dbdadd] px-6 py-[30px] sm:px-8">
            <div className="relative">
              <select
                id="payment-method"
                name="paymentMethod"
                required
                defaultValue=""
                className={`${inputClass} mt-0 appearance-none pr-12 text-[18px]`}
              >
                <option value="" disabled>
                  결제수단 선택
                </option>
                <option value="card">신용·체크카드 (테스트)</option>
                <option value="transfer">계좌이체 (테스트)</option>
              </select>

              <img
                src="/images/payment/select-arrow.svg"
                alt=""
                className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>

        {/* 동의 체크 */}
        <label className="relative flex cursor-pointer items-center gap-3 text-[16px] font-semibold leading-[27px] sm:text-[18px]">
          <input
            type="checkbox"
            name="consent"
            required
            className="peer sr-only"
          />

          <span
            aria-hidden="true"
            className="h-[25px] w-[26px] shrink-0 rounded-full border border-[#dbdadd] peer-checked:invisible"
          />

          <img
            src="/images/payment/check.svg"
            alt=""
            className="pointer-events-none absolute left-0 hidden peer-checked:block"
          />

          <span className="rounded peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#8574ac]">
            개인정보 수집 및 이용에 대한 안내에 동의합니다.* (필수)
          </span>
        </label>

        <button
          type="submit"
          className={`${buttonClass} mt-4 cursor-pointer font-bold`}
        >
          결제하기
        </button>
      </form>
    </section>
  );
}