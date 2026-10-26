export default function Footer() {
  return (
    <footer className="w-full bg-[#412826] px-6 py-10 text-white">
      <div className="mx-auto max-w-[1356px]">
        {/* 로고 + SNS */}
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="block shrink-0"
            aria-label="Dear By Pet 홈"
          >
            <img
              src="/images/bi_full_logo.svg"
              alt="Dear By Pet"
              width={180}
              height={128}
              className="block h-[128px] w-[180px] object-contain"
            />
          </a>

   <div className="flex items-center gap-6">
  <a
    href="https://www.instagram.com/dearbypet"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="인스타그램 (새 탭에서 열기)"
  >
              <img
                src="/images/sns_instagram.svg"
                alt=""
                width={24}
                height={24}
                className="block h-6 w-6"
              />
            </a>

            <a
              href="mailto:dearbypet@naver.com"
              aria-label="이메일 보내기"
            >
              <img
                src="/images/sns_mail.svg"
                alt=""
                width={24}
                height={24}
                className="block h-6 w-6"
              />
            </a>
          </div>
        </div>

        {/* 개인정보처리방침 + 관리책임자 */}
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] leading-5">
          <a
            href="/privacy"
            className="underline underline-offset-4 hover:text-white/70"
          >
            개인정보처리방침
          </a>

          <span
            aria-hidden="true"
            className="h-3 w-px bg-white/30"
          />

          <span>개인정보관리책임자 : 이화신</span>
        </div>

        {/* 이메일 */}
        <p className="mt-2 text-[12px] leading-5">
          <a
            href="mailto:dearbypet@naver.com"
            className="hover:text-white/70"
          >
            Email : dearbypet@naver.com
          </a>
        </p>

        {/* Copyright */}
        <p className="mt-2 text-[12px] leading-5 text-white/60">
          ©2026 DearBypet. All rights reserved.
        </p>
      </div>
    </footer>
  );
}