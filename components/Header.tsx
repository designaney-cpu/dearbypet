"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "디어바이펫 소개", href: "/about" },
  { label: "서비스 소개", href: "/service" },
  { label: "전문가 지원", href: "/expert" },
  // 고객지원 숨김 처리
  // { label: "고객지원", href: "support" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // 모바일 메뉴가 열리면 스크롤 잠금 (html + body 모두 잠가서 iOS 바운스 스크롤 방지)
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (menuOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [menuOpen]);

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
    // capture를 사용하면 내부 요소의 스크롤도 감지할 수 있습니다.
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

  // 메뉴가 열릴 때: 닫기 버튼으로 포커스 이동 + Esc로 닫기 + Tab 포커스 트랩
  useEffect(() => {
    if (!menuOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }

      if (e.key !== "Tab" || !menuRef.current) return;

      const focusables = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    toggleButtonRef.current?.focus();
  };

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full px-4 py-3 transition-[background-color,box-shadow] duration-300 sm:px-6"
        style={{
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.8)" : "transparent",
          boxShadow: isScrolled ? "0 4px 12px rgba(0, 0, 0, 0.2)" : "none",
        }}
      >
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between md:h-[62px]">
          {/* 로고 */}
          <a href="/" className="block shrink-0" aria-label="Dear By Pet 홈">
            <img
              src="/images/bi_logo.svg"
              alt="Dear By Pet"
              width={158}
              height={36}
              className="block h-7 w-[132px] object-contain md:h-9 md:w-[158px]"
            />
          </a>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden items-center gap-12 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}

            <button
              type="button"
              className="cursor-pointer rounded-full bg-[#412826] px-8 py-3 text-white transition-colors duration-200 hover:bg-[#7A5C50]"
            >
              전문가 등록
            </button>
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
          {/* 로고 + 닫기 버튼 */}
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

            {/* 닫기 버튼: 헤더 햄버거 아이콘과 동일한 크기(w-6, 바 두께 2px)로 통일 */}
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

          {/* 메뉴 */}
<nav className="font-gowun flex flex-1 flex-col items-center justify-center gap-8 text-white">
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
              href="#"
              className="mt-4 rounded-full border border-white px-8 py-3"
              onClick={closeMenu}
            >
              전문가 등록
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
