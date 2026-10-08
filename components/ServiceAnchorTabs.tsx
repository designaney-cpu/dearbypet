"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";

const TABS = [
  { id: "pet-loss", label: "펫로스 상담 지원" },
  { id: "expert-connection", label: "펫보험, 장례지도사 연결" },
  { id: "Service_Memorial", label: "메모리얼 제작 & 드림" },
] as const;

type SectionId = (typeof TABS)[number]["id"];

function getScrollOffset() {
  // 현재 헤더: 모바일 80px, PC 86px. 실제 높이를 읽어 여백 24px을 더합니다.
  return (document.querySelector("header")?.getBoundingClientRect().height ?? 0) + 24;
}

export default function ServiceAnchorTabs() {
  const [activeId, setActiveId] = useState<SectionId>(TABS[0].id);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const sections = TABS.flatMap((tab) => {
        const element = document.getElementById(tab.id);
        return element ? [{ id: tab.id, element }] : [];
      });
      if (!sections.length) return;

      const offset = getScrollOffset() + 2;
      let current = sections[0].id;
      for (const section of sections) {
        if (section.element.getBoundingClientRect().top <= offset) {
          current = section.id;
        }
      }

      // 마지막 섹션이 짧아서 화면 위까지 올라오지 못하는 경우도 처리합니다.
      const last = sections[sections.length - 1];
      const atBottom = window.scrollY > 0 &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (atBottom && last.element.getBoundingClientRect().top < window.innerHeight) {
        current = last.id;
      }
      setActiveId(current);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    window.addEventListener("pageshow", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      window.removeEventListener("pageshow", scheduleUpdate);
    };
  }, []);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    // 새 탭 열기 등 브라우저 기본 조작은 유지합니다.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return; // 상세 섹션을 연결하기 전에는 이동하지 않습니다.

    const top = Math.max(0, window.scrollY + target.getBoundingClientRect().top - getScrollOffset());
    if (window.location.hash !== `#${id}`) {
      window.history.pushState(window.history.state, "", `#${id}`);
    }
    target.focus({ preventScroll: true });
    setActiveId(id);
    window.scrollTo({
      top,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  return (
    <nav aria-label="서비스 섹션 바로가기" className="w-full px-6">
      <div className="mx-auto flex max-w-[1356px] gap-3 overflow-x-auto pb-2 pt-1 lg:justify-center lg:gap-5">
        {TABS.map((tab) => {
          const isActive = activeId === tab.id;
          return (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              aria-current={isActive ? "location" : undefined}
              onClick={(event) => handleClick(event, tab.id)}
              className={`font-pretendard flex h-[48px] shrink-0 items-center justify-center whitespace-nowrap rounded-full px-6 text-center text-[16px] leading-[27px] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#412826] motion-reduce:transition-none lg:h-[52px] lg:w-[320px] lg:shrink lg:px-4 lg:text-[18px] ${
                isActive
                  ? "bg-[#8574ac] text-white hover:bg-[#75649c]"
                  : "bg-[#d7d7d7] text-[#4a4a4a] hover:bg-[#c8c1d3]"
              }`}
            >
              {tab.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
