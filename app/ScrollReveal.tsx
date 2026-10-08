"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // 기기에서 동작 줄이기를 설정한 경우 바로 표시
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const elements = new Set<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      {
  threshold: 0.15,
  rootMargin: "0px 0px -160px 0px",
      }
    );

    const registerElements = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element) => {
          if (elements.has(element)) return;

          elements.add(element);

          const delay = Number(element.dataset.revealDelay) || 0;

          element.style.setProperty(
            "--reveal-delay",
            `${Math.max(0, delay)}ms`
          );

          element.classList.add("reveal-ready");
          observer.observe(element);
        });
    };

    registerElements();

    // 페이지 이동 등으로 새로 추가된 요소도 연결
    const mutationObserver = new MutationObserver(registerElements);

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();

      elements.forEach((element) => {
        element.classList.remove("reveal-ready", "reveal-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}