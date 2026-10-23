"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "디어바이펫 소개", href: "/about" },
  { label: "서비스 소개", href: "/service" },
  { label: "전문가 모집 안내", href: "/expert" },
];

const EXPERT_APPLY_URL = "/expert#expert-apply";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    toggleButtonRef.current?.focus({ preventScroll: true });
  }, []);

  // 모바일 메뉴가 열려 있는 동안 스크롤 잠금
  useEffect(() => {
    if (!menuOpen) return;

    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [menuOpen]);

  // 스크롤 위치에 따라 헤더 배경 변경
  useEffect(() => {
    const handleScroll = () => {
      let scrolled =
        window.scrollY > 0 ||
        (document.scrollingElement?.scrollTop ?? 0) > 0;

      let parent = headerRef.current?.parentElement ?? null;

      while (parent && !scrolled) {
        scrolled = parent.scrollTop > 0;
        parent = parent.parentElement;
      }

      setIsScrolled(scrolled);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: true,
    });

    window.addEventListener("pageshow", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("pageshow", handleScroll);
    };
  }, []);

  // 데스크톱 화면으로 전환되면 모바일 메뉴 닫기
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      if (media.matches) setMenuOpen(false);
    };

    media.addEventListener("change", handleResize);

    return () => {
      media.removeEventListener("change", handleResize);
    };
  }, []);

  // 메뉴 포커스 관리 및 Escape로 닫기
  useEffect(() => {
    if (!menuOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusables =
        menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full px-4 py-3 transition-[background-color,box-shadow] duration-300 sm:px-6"
        style={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.8)"
            : "transparent",
          boxShadow: isScrolled
            ? "0 4px 12px rgba(0, 0, 0, 0.2)"
            : "none",
        }}
      >
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between md:h-[62px]">
          {/* 로고 */}
          <a
            href="/"
            className="block shrink-0"
            aria-label="Dear By Pet 홈"
          >
            <img
              src="/images/bi_logo.svg"
              alt="Dear By Pet"
              width={158}
              height={36}
              className="block h-7 w-[132px] object-contain md:h-9 md:w-[158px]"
            />
          </a>

          {/* 데스크톱 메뉴 */}
          <nav
            aria-label="주 메뉴"
            className="hidden items-center gap-12 lg:flex"
          >
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}

            <a
              href={EXPERT_APPLY_URL}
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#412826] px-8 py-3 text-white transition-colors duration-200 hover:bg-[#7A5C50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8574ac]"
            >
              전문가 지원하기
            </a>
          </nav>

          {/* 모바일 햄버거 */}
          <button
            ref={toggleButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1.5 lg:hidden"
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="block h-[2px] w-6 bg-black" />
            <span className="block h-[2px] w-6 bg-black" />
            <span className="block h-[2px] w-6 bg-black" />
          </button>
        </div>
      </header>

      {/* 모바일 전체 메뉴 */}
      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="모바일 메뉴"
          className="fixed inset-0 z-[100] flex flex-col overscroll-contain bg-[#412826]/80 backdrop-blur-md lg:hidden"
        >
          {/* 로고 + 닫기 */}
          <div className="mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 md:h-[62px]">
            <a
              href="/"
              onClick={closeMenu}
              className="block shrink-0"
              aria-label="Dear By Pet 홈"
            >
              <img
                src="/images/bi_logo.svg"
                alt="Dear By Pet"
                width={158}
                height={36}
                className="block h-7 w-[132px] object-contain brightness-0 invert md:h-9 md:w-[158px]"
              />
            </a>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              className="relative flex h-6 w-6 items-center justify-center"
              aria-label="메뉴 닫기"
            >
              <span className="absolute h-[2px] w-6 rotate-45 bg-white" />
              <span className="absolute h-[2px] w-6 -rotate-45 bg-white" />
            </button>
          </div>

          {/* 모바일 메뉴 링크 */}
          <nav
            aria-label="모바일 주 메뉴"
            className="font-gowun flex flex-1 flex-col items-center justify-center gap-8 text-white"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}

            <a
              href={EXPERT_APPLY_URL}
              onClick={closeMenu}
              className="mt-4 rounded-full border border-white px-8 py-3 transition-colors hover:bg-white hover:text-[#412826]"
            >
              전문가 등록
            </a>
          </nav>
        </div>
      )}
    </>
  );
}