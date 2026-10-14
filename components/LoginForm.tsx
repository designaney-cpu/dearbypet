"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";

type LoginFormProps = {
  /** 회원가입 페이지를 만든 뒤 실제 주소를 전달하세요. */
  signupHref?: string;
};

const inputClass =
  "h-[56px] w-full min-w-0 rounded-[8px] border border-[#dbdadd] bg-white px-4 text-[18px] leading-[27px] text-[#5c4b42] outline-none transition-colors focus:border-[#8574ac] focus:ring-2 focus:ring-[#8574ac]/20 motion-reduce:transition-none";

export default function LoginForm({ signupHref }: LoginFormProps) {
  const id = useId();
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // UI 확인용: 인증 API 연결 전에는 입력 정보를 전송하거나 저장하지 않습니다.
    setNotice("로그인 기능을 준비 중입니다.");
  }

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="w-full bg-white px-6 py-16 lg:py-20"
    >
      <form
        onSubmit={handleSubmit}
        className="font-pretendard mx-auto flex w-full max-w-[524px] flex-col gap-[60px] text-[#5c4b42]"
      >
        {/* 심볼과 타이틀 */}
        <div className="flex flex-col items-center gap-[10px] text-center [filter:drop-shadow(0px_2px_3px_rgba(20,18,16,0.05))_drop-shadow(0px_8px_10px_rgba(20,18,16,0.08))]">
          <img
            src="/images/login/login-symbol.svg"
            alt="Dear By Pet"
            width={180}
            height={79.4176}
            className="block h-[79.4176px] w-[180px] object-contain"
          />
          <h1
            id={`${id}-title`}
            className="font-cormorant text-[33px] font-normal italic leading-[49px] tracking-[0.1px] text-[#412826]"
          >
            Login
          </h1>
          <p className="text-[18px] leading-[27px] tracking-[-0.5px]">
            로그인이 필요합니다.
          </p>
        </div>

        {/* 로그인 정보 */}
        <div className="flex flex-col gap-[13px] pt-[3.5px]">
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor={`${id}-username`}
              className="text-[18px] font-bold leading-[27px] tracking-[-0.5px]"
            >
              아이디
            </label>
            <input
              id={`${id}-username`}
              name="username"
              type="text"
              autoComplete="username"
              autoCapitalize="none"
              spellCheck={false}
              required
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor={`${id}-password`}
              className="text-[18px] font-bold leading-[27px] tracking-[-0.5px]"
            >
              비밀번호
            </label>
            <input
              id={`${id}-password`}
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* 버튼과 회원가입 */}
        <div className="flex flex-col items-center gap-6">
          <button
            type="submit"
            className="h-[56px] w-full cursor-pointer rounded-[8px] border border-[#1e1928]/16 bg-[#412826] text-[18px] leading-[21px] text-white transition-colors duration-200 hover:bg-[#7A5C50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8574ac] motion-reduce:transition-none"
          >
            로그인
          </button>
          <a
            href={signupHref ?? "#"}
            onClick={(event) => {
              if (!signupHref) {
                event.preventDefault();
                setNotice("회원가입 기능을 준비 중입니다.");
              }
            }}
            className="rounded-sm text-[18px] leading-[27px] tracking-[-0.5px] underline underline-offset-4 hover:text-[#7A5C50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8574ac]"
          >
            회원가입
          </a>
          <p
            role="status"
            aria-live="polite"
            className={notice ? "text-center text-[14px] leading-6" : "sr-only"}
          >
            {notice}
          </p>
        </div>
      </form>
    </section>
  );
}
