"use client";

import { useId, useState } from "react";
import type { FormEvent, InputHTMLAttributes } from "react";

const inputClass =
  "h-[56px] w-full min-w-0 rounded-[8px] border border-[#dbdadd] bg-white px-4 text-[18px] leading-[27px] text-[#5c4b42] outline-none transition-colors focus:border-[#8574ac] focus:ring-2 focus:ring-[#8574ac]/20 motion-reduce:transition-none";

const labelClass =
  "text-[18px] font-bold leading-[27px] tracking-[-0.5px]";

function SignupField({
  label,
  id,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; id: string }) {
  return (
    <div className="flex min-w-0 flex-col gap-[5px]">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input {...props} id={id} className={inputClass} />
    </div>
  );
}

export default function Signup() {
  const id = useId();
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // 화면 확인용입니다. 백엔드 연결 전에는 정보를 전송하거나 저장하지 않습니다.
    setNotice("회원가입 기능을 준비 중입니다.");
  }

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="w-full bg-white px-6 py-16 lg:py-20"
    >
      <form
        onSubmit={handleSubmit}
        onChange={() => setNotice("")}
        className="font-pretendard mx-auto flex w-full max-w-[724px] flex-col gap-[60px] text-[#5c4b42]"
      >
        {/* 브랜드 심볼과 타이틀 */}
        <div className="flex flex-col items-center gap-[10px] text-center [filter:drop-shadow(0px_2px_3px_rgba(20,18,16,0.05))_drop-shadow(0px_8px_10px_rgba(20,18,16,0.08))]">
          <img
            src="/images/signup/signup-symbol.svg"
            alt="Dear By Pet"
            width={180}
            height={79.4176}
            className="block shrink-0"
          />
          <h1
            id={`${id}-title`}
            className="font-cormorant text-[33px] font-normal italic leading-[49px] tracking-[0.1px] text-[#412826]"
          >
            Sign up
          </h1>
          <p className="text-[18px] leading-[27px] tracking-[-0.5px]">
            회원가입
          </p>
        </div>

        {/* 회원 정보 */}
        <div className="flex flex-col gap-[13px] pt-[3.5px]">
          <div className="grid gap-[13px] sm:grid-cols-2">
            <SignupField
              id={`${id}-username`}
              label="아이디"
              name="username"
              type="text"
              autoComplete="username"
              autoCapitalize="none"
              spellCheck={false}
              required
            />
            <SignupField
              id={`${id}-password`}
              label="비밀번호"
              name="password"
              type="password"
              autoComplete="new-password"
              required
            />
          </div>

          <div className="grid gap-[13px] sm:grid-cols-2">
            <SignupField
              id={`${id}-name`}
              label="이름"
              name="name"
              type="text"
              autoComplete="name"
              required
            />
            <SignupField
              id={`${id}-phone`}
              label="연락처"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
            />
          </div>

          <SignupField
            id={`${id}-email`}
            label="이메일"
            name="email"
            type="email"
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
            required
          />

          <div className="flex flex-col gap-[5px]">
            <label htmlFor={`${id}-member-type`} className={labelClass}>
              회원 유형
            </label>
            <div className="relative">
              <select
                id={`${id}-member-type`}
                name="memberType"
                defaultValue="expert"
                required
                className="h-[59px] w-full cursor-pointer appearance-none rounded-[8px] border border-[#dbdadd] bg-white pl-6 pr-14 text-[18px] leading-[27px] tracking-[-0.5px] text-[#412826] outline-none focus:border-[#8574ac] focus:ring-2 focus:ring-[#8574ac]/20"
              >
                <option value="general">일반회원</option>
                <option value="expert">전문가</option>
              </select>
              <img
                src="/images/signup/select-arrow.svg"
                alt=""
                width={14}
                height={8}
                className="pointer-events-none absolute right-[23px] top-1/2 block -translate-y-1/2"
              />
            </div>
          </div>

          {/* 동의는 기본 해제 상태입니다. */}
          <label className="flex cursor-pointer items-center gap-3">
            <span className="relative block h-[25px] w-[26px] shrink-0">
              <input
                name="termsConsent"
                type="checkbox"
                value="agreed"
                required
                className="peer absolute inset-0 z-10 m-0 h-full w-full cursor-pointer opacity-0"
              />
              <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-[#dbdadd] bg-white peer-checked:invisible peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#8574ac]" />
              <img
                src="/images/signup/consent-selected.svg"
                alt=""
                width={26}
                height={25}
                className="pointer-events-none absolute inset-0 hidden rounded-full peer-checked:block peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#8574ac]"
              />
            </span>
            <span className="text-[16px] font-semibold leading-[27px] tracking-[-0.5px] sm:text-[18px]">
              회원가입 약관에 동의합니다.
            </span>
          </label>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            type="submit"
            className="h-[56px] w-full cursor-pointer rounded-[8px] border border-[#1e1928]/16 bg-[#412826] text-[18px] leading-[21px] text-white transition-colors duration-200 hover:bg-[#7A5C50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8574ac] motion-reduce:transition-none"
          >
            회원가입
          </button>
          <p role="status" className={notice ? "text-center text-[14px] leading-6" : "sr-only"}>
            {notice}
          </p>
        </div>
      </form>
    </section>
  );
}
