"use client";

import { useId, useRef, useState } from "react";
import type { FormEvent } from "react";

const FORMINIT_URL = "https://forminit.com/f/s6sq5ur2whg";

const MAX_ATTACHMENT_BYTES = 10_000_000; // 10MB

const fieldClass =
  "h-[56px] w-full min-w-0 rounded-[8px] border border-[#dbdadd] bg-white px-4 text-[18px] leading-[27px] tracking-[-0.5px] text-[#5c4b42] outline-none transition-colors focus:border-[#8574ac] focus:ring-2 focus:ring-[#8574ac]/20";

const labelClass = "block text-[18px] font-normal leading-[27px]";

export default function PartnerRecruitment() {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const submittingRef = useRef(false);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setSubmitError("");
    setSubmitted(false);

    const data = new FormData(form);
    if (data.get("_gotcha")) return;

    const attachment = data.get("fi-file-attachment");
    if (attachment instanceof File && attachment.size > MAX_ATTACHMENT_BYTES) {
      setFileError("첨부파일은 10MB 이하로 선택해주세요.");
      return;
    }
    if (attachment instanceof File && !attachment.name) {
      data.delete("fi-file-attachment");
    }

    submittingRef.current = true;
    setSubmitting(true);
    try {
      const response = await fetch(FORMINIT_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        // 파일을 전송하므로 Content-Type은 브라우저가 지정하도록 둡니다.
        body: data,
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success !== true) {
        if (response.status === 429) {
          throw new Error("요청이 너무 빠릅니다. 30초 정도 기다린 후 다시 제출해주세요.");
        }
        if (result?.error === "MISSING_API_KEY") {
          throw new Error("Forminit의 Authentication mode를 Public으로 설정해주세요.");
        }
        const message = typeof result?.message === "string"
          ? result.message
          : "접수 결과를 확인하지 못했습니다. Forminit의 제출 목록을 확인해주세요.";
        throw new Error(`${message} (HTTP ${response.status})`);
      }

      // 단순 HTTP 200이 아닌 실제 접수 응답과 접수 번호까지 확인합니다.
      if (typeof result.submission?.hashId !== "string" || !result.submission.hashId) {
        throw new Error("접수 번호를 확인하지 못했습니다. 다시 보내기 전에 Forminit의 제출 목록을 확인해주세요.");
      }

      form.reset();
      setFileName("");
      setFileError("");
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof TypeError
          ? "서버 응답을 받지 못했습니다. 다시 보내기 전에 Forminit의 제출 목록을 확인해주세요."
          : error instanceof Error
            ? error.message
            : "전송 결과를 확인하지 못했습니다. Forminit의 제출 목록을 확인해주세요."
      );
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="relative w-full bg-white px-6 py-20">
        {/* 상단 절반만 연보라 배경 */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1/2 bg-[#8574ac]"
        />

        {/* 기존 콘텐츠 */}
        <div className="relative z-10 mx-auto grid max-w-[1356px] items-start gap-12 lg:grid-cols-2">
          {/* 왼쪽 설명: 기존 문구와 스크롤 효과 유지 */}
          <div className="min-w-0 text-white">
            <p data-reveal className="mb-2 text-[26px] font-bold uppercase">
              Partner Recruitment
            </p>

            <h2
              data-reveal
              data-reveal-delay="150"
              className="font-gowun text-[32px] font-normal leading-[45px] text-[#ffffff]"
            >
              함께 만들어갈 전문가를
              <br />
              찾고 있습니다.
            </h2>

            <p
              data-reveal
              data-reveal-delay="300"
              className="mt-4 text-[18px] leading-[27px]"
            >
              경험과 전문성을 바탕으로 보호자의 이별 여정을 세심하게 지원하고,
              <br />
              DearByPet과 함께 새로운 이별 케어 서비스를 만들어갈 분을 기다립니다.
            </p>

            <a
              href="/expert"
              data-reveal
              data-reveal-delay="450"
              className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-5 py-2 text-[14px] text-white hover:bg-white hover:text-[#412826]"
            >
              전문가 모집 자세히 보기
            </a>
          </div>

          <div
            data-reveal
            data-reveal-delay="150"
            className="font-pretendard min-w-0 rounded-[25.3px] bg-white p-6 text-[#5c4b42] shadow-[0_0_10.751px_rgba(0,0,0,0.09)] sm:p-[50px]"
          >
            <form
              ref={formRef}
              className="flex flex-col gap-3 tracking-[-0.5px]"
              method="POST"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              aria-busy={submitting}
            >
              <input
                type="hidden"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: "none" }}
              />

              <fieldset className="m-0 min-w-0 border-0 p-0 pb-[10px]">
                <legend className="mb-3 px-0 pt-[3.5px] text-[18px] leading-[27px]">
                  구분 *
                </legend>

                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {["개인", "단체", "기타"].map((type) => (
                    <label
                      key={type}
                      className="relative flex cursor-pointer items-center gap-3 text-[18px] leading-[27px]"
                    >
                      <input
                        type="radio"
                        name="fi-radio-applicantType"
                        value={type}
                        defaultChecked={type === "개인"}
                        required
                        className="peer sr-only"
                      />
                      <img
                        src="/images/partner/check-unselected.svg"
                        alt=""
                        width={26}
                        height={26}
                        className="block h-[26px] w-[26px] shrink-0 rounded-full peer-checked:hidden peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#8574ac]"
                      />
                      <img
                        src="/images/partner/check-selected.svg"
                        alt=""
                        width={26}
                        height={26}
                        className="hidden h-[26px] w-[26px] shrink-0 rounded-full peer-checked:block peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#8574ac]"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="flex flex-col gap-[4.5px] pt-[3.5px]">
                <label htmlFor={`${id}-name`} className={labelClass}>
                  단체명(성명) *
                </label>
                <input
                  id={`${id}-name`}
                  name="fi-sender-fullName"
                  type="text"
                  required
                  className={fieldClass}
                />
              </div>

              <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex min-w-0 flex-col gap-[4.5px] pt-[11.5px]">
                  <label htmlFor={`${id}-specialty`} className={labelClass}>
                    분야 *
                  </label>
                  <div className="relative">
                    <select
                      id={`${id}-specialty`}
                      name="fi-select-specialty"
                      defaultValue=""
                      required
                      className={`${fieldClass} cursor-pointer appearance-none pr-12 invalid:text-[#939393]`}
                    >
                      <option value="" disabled>분야 선택</option>
                      <option value="펫로스 상담" className="text-[#5c4b42]">펫로스 상담</option>
                      <option value="장례 지도" className="text-[#5c4b42]">장례 지도</option>
                      <option value="펫보험" className="text-[#5c4b42]">펫보험</option>
                    </select>
                    <img
                      src="/images/partner/select-arrow.svg"
                      alt=""
                      width={14}
                      height={8}
                      className="pointer-events-none absolute right-5 top-1/2 h-[8px] w-[14px] -translate-y-1/2"
                    />
                  </div>
                </div>

                <div className="flex min-w-0 flex-col gap-[4.5px] pt-[11.5px]">
                  <label htmlFor={`${id}-phone`} className={labelClass}>
                    휴대폰 번호 *
                  </label>
                  <input
                    id={`${id}-phone`}
                    name="fi-text-phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[4.5px] pt-[3.5px]">
                <label htmlFor={`${id}-email`} className={labelClass}>
                  답변받으실 이메일 주소 *
                </label>
                <input
                  id={`${id}-email`}
                  name="fi-sender-email"
                  type="email"
                  autoComplete="email"
                  required
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-col gap-[4.5px] pt-[3.5px]">
                <label htmlFor={`${id}-file`} className={labelClass}>
                  파일 첨부
                </label>
                <div className="relative flex min-w-0 gap-3">
                  <input
                    id={`${id}-file`}
                    name="fi-file-attachment"
                    type="file"
                    className="peer sr-only"
                    aria-describedby={`${id}-file-help ${id}-file-error`}
                    aria-invalid={Boolean(fileError)}
                    onChange={(event) => {
                      const input = event.currentTarget;
                      const file = input.files?.[0];
                      const error = file && file.size > MAX_ATTACHMENT_BYTES
                        ? "첨부파일은 10MB 이하로 선택해주세요."
                        : "";
                      input.setCustomValidity(error);
                      setFileName(file?.name ?? "");
                      setFileError(error);
                    }}
                  />
                  <div
                    aria-hidden="true"
                    title={fileName}
                    className="flex h-[56px] min-w-0 flex-1 items-center rounded-[8px] border border-[#dbdadd] px-4 text-[18px]"
                  >
                    <span className="truncate">{fileName}</span>
                  </div>
                  <label
                    htmlFor={`${id}-file`}
                    className="flex h-[56px] w-[87px] shrink-0 cursor-pointer items-center justify-center rounded-[8px] border border-[#412826] text-[18px] transition-colors hover:bg-[#f4f0ed] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#8574ac]"
                  >
                    찾기
                  </label>
                </div>
                <p id={`${id}-file-help`} className="text-[14px] leading-[22px] text-[#8574ac]">
                  파일 1개, 최대 10MB까지 첨부할 수 있습니다.
                </p>
                <p id={`${id}-file-error`} role="alert" className="text-[14px] leading-[22px] text-red-700">
                  {fileError}
                </p>
              </div>

              <div className="flex flex-col gap-[4.5px] pt-[11.5px]">
                <label htmlFor={`${id}-message`} className={labelClass}>
                  내용
                </label>
                <textarea
                  id={`${id}-message`}
                  name="fi-text-message"
                  className="h-[112px] w-full resize-none rounded-[8px] border border-[#dbdadd] bg-white p-4 text-[18px] leading-[27px] outline-none focus:border-[#8574ac] focus:ring-2 focus:ring-[#8574ac]/20"
                />
              </div>

              <label className="relative flex cursor-pointer items-start gap-3 text-[18px] font-semibold leading-[27px]">
                <input
                  type="checkbox"
                  name="fi-checkbox-privacyConsent"
                  value="agreed"
                  required
                  aria-describedby={`${id}-privacy`}
                  className="peer sr-only"
                />
                <img
                  src="/images/partner/check-unselected.svg"
                  alt=""
                  width={26}
                  height={26}
                  className="mt-px block h-[26px] w-[26px] shrink-0 rounded-full peer-checked:hidden peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#8574ac]"
                />
                <img
                  src="/images/partner/consent-selected.svg"
                  alt=""
                  width={26}
                  height={25}
                  className="mt-px hidden h-[25px] w-[26px] shrink-0 rounded-full peer-checked:block peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#8574ac]"
                />
                <span>
                  개인정보 수집 및 이용에 대한 안내에 동의합니다.* (필수)
                </span>
              </label>

              <ol
                id={`${id}-privacy`}
                className="list-decimal pl-6 text-[16px] leading-[24px]"
              >
                <li>
                  디어바이펫은 사업 제휴 문의 처리를 위해 이름, 전화번호, 이메일 주소를 수집합니다.
                </li>
                <li>
                  수집한 개인정보는 이외의 목적으로는 사용하지 않으며, 문의처리 종료시 파기합니다.
                </li>
              </ol>

              <div className="flex justify-center pt-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="h-[44px] w-[204px] max-w-full cursor-pointer rounded-full bg-[#412826] px-6 text-[14px] leading-[21px] tracking-normal text-white transition-colors duration-200 hover:bg-[#7A5C50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8574ac] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "제출 중..." : "제출하기"}
                </button>
              </div>
              <p
                role="alert"
                aria-live="polite"
                className="text-center text-[14px] leading-[22px] text-red-700"
              >
                {submitError}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* 제출 완료 모달 */}
      {submitted && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
          onClick={() => setSubmitted(false)}
        >
          <div
            className="font-pretendard flex flex-col items-center justify-center rounded-[25.3px] bg-white px-[50px] py-[50px] text-center text-[#5c4b42]"
            style={{
              width: "min(672px, 100%)",
              boxShadow: "0 0 21.502px 5.059px rgba(0,0,0,0.09)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 제목 */}
            <p
              id="modal-title"
              className="text-[28px] font-bold leading-[27px] tracking-[-0.5px] text-[#5c4b42]"
            >
              지원해 주셔서 감사합니다!
            </p>

            {/* 본문 */}
            <p className="mt-4 text-[16px] font-normal leading-[24px] tracking-[-0.5px] text-[#5c4b42]">
              지원 내용이 접수되었습니다.
              <br />
              검토 후 순차적으로 안내드리겠습니다.
            </p>

            {/* 버튼 영역 */}
            <div className="flex items-center justify-center self-stretch pt-[12px]">
              <button
                onClick={() => setSubmitted(false)}
                className="flex h-[44px] w-[204px] min-w-[200px] cursor-pointer items-center justify-center rounded-full bg-[#412826] px-[76px] py-[10px] text-[14px] leading-[21px] text-white transition-colors hover:bg-[#7A5C50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8574ac]"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}