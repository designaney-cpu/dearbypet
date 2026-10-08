export default function Footer() {
  return (
    <footer className="w-full">
      {/* 아래쪽 Footer */}
      <section className="bg-[#412826] px-6 py-16 text-white">

        <div className="mx-auto max-w-[1356px]">

          {/* 로고 + SNS */}
          <div className="flex items-center justify-between">

<a href="/" className="block shrink-0" aria-label="Dear By Pet 홈">
  <img
    src="/images/bi_full_logo.svg"
    alt="Dear By Pet"
    width={180}
    height={128}
    className="block h-[128px] w-[180px] object-contain"
  />
</a>

<div className="flex items-center gap-6">
  <a href="#" aria-label="인스타그램">
    <img
      src="/images/sns_instagram.svg"
      alt=""
      width={24}
      height={24}
      className="block h-6 w-6"
    />
  </a>

  <a href="mailto:master@dearbypet.com" aria-label="이메일 보내기">
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

          {/* 약관 */}
          <div className="mt-10 flex gap-4 text-[12px]">

            <a href="#">
              이용약관
            </a>

            <span className="opacity-40">
              |
            </span>

            <a href="#">
              개인정보처리방침
            </a>

          </div>

          {/* 회사 정보 */}
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[12px]">

            <span>
              서울특별시 @@구 @@동 123-45
            </span>

            <span>
              Email : master@dearbypet.com
            </span>

            <span>
              개인정보관리책임자 : 관리자
            </span>

          </div>

          {/* Copyright */}
          <p className="mt-6 text-[12px] text-white/60">
            ©2026 dearbypet. All rights reserved.
          </p>

        </div>

      </section>

    </footer>
  );
}