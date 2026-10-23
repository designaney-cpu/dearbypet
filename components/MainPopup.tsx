"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

const STORAGE_KEY = "dearbypet-main-popup-hidden-date";

function getToday() {
  const now = new Date();

  return [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");
}

export default function MainPopup() {
  const id = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [hideToday, setHideToday] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === getToday()) return;
    } catch {
      // 저장소를 사용할 수 없으면 팝업을 표시합니다.
    }

    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow = document.body.style.overflow;

    dialog.showModal();
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;

      if (previousFocus?.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [isOpen]);

  function handleClose() {
    if (hideToday) {
      try {
        localStorage.setItem(STORAGE_KEY, getToday());
      } catch {
        // 저장 실패 시에도 닫기는 가능합니다.
      }
    }

    setIsOpen(false);
  }

  if (!isOpen) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-description`}
      onCancel={(event) => {
        event.preventDefault();
        handleClose();
      }}
      className="fixed inset-0 m-auto max-h-[calc(100dvh-48px)] w-[calc(100%-48px)] max-w-[560px] overflow-y-auto rounded-[24px] border-0 bg-white p-0 text-[#5c4b42] shadow-[0_12px_48px_rgba(0,0,0,0.2)] backdrop:bg-black/50"
    >
      {/* 제목 + 본문 */}
      <div className="px-6 pb-10 pt-10 sm:px-10 sm:pb-12 sm:pt-12">
        <h2
          id={`${id}-title`}
          className="font-gowun break-keep text-[28px] font-normal leading-[40px] tracking-[-0.5px] text-[#412826] sm:text-[36px] sm:leading-[48px]"
        >
          DearBypet을 찾아주셔서 감사합니다.
        </h2>

        <p
          id={`${id}-description`}
          className="font-pretendard mt-5 whitespace-pre-line break-keep text-[16px] leading-[27px] tracking-[-0.5px] sm:text-[18px] sm:leading-[30px]"
        >
          {`DearByPet은 반려동물과 보호자를 위한 다양한 전문 서비스를 준비하고 있습니다.
          현재는 서비스 소개와 전문가 및 파트너 모집을 중심으로 운영하고 있으며, 상담 예약과 서비스 신청은 정식 서비스 오픈 이후 순차적으로 제공될 예정입니다.

   더욱 신뢰할 수 있고 따뜻한 서비스를 제공하기 위해 정성껏 준비하겠습니다.
   감사합니다.`}
        </p>
      </div>

      {/* 오늘 다시 보지 않음 + 닫기 */}
      <div className="font-pretendard flex flex-wrap items-center justify-between gap-4 border-t border-[#e5ded8] bg-[#f4f0ed] px-6 py-4 sm:px-10">
        <label className="flex cursor-pointer items-center gap-2 text-[14px] leading-6">
          <input
            type="checkbox"
            checked={hideToday}
            onChange={(event) => setHideToday(event.target.checked)}
            className="h-[18px] w-[18px] cursor-pointer accent-[#412826] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8574ac]"
          />
          오늘 다시 보지 않음
        </label>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={handleClose}
          className="cursor-pointer rounded-full bg-[#412826] px-5 py-2 text-[14px] text-white transition-colors hover:bg-[#7A5C50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8574ac]"
        >
          닫기
        </button>
      </div>
    </dialog>,
    document.body,
  );
}