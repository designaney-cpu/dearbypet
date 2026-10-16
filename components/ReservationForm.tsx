"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Counselor } from "@/components/CounselorList";

const PRODUCTS = [
  { id: "phone", title: "스타터 전화 상담", price: "43,000원", icon: "phone.svg", description: "예약 시간에 맞춰 내담자 분 번호로 전화 드립니다. 전문가 상담을 처음 경험해보는 분께 추천드립니다." },
  { id: "video", title: "스타터 화상 상담", price: "40,000원", icon: "video.svg", description: "비대면 상담입니다. 구글 밋(Google Meet) 또는 줌(Zoom)으로 상담하게 됩니다." },
] as const;
const TIMES = ["11:00", "12:00"]; // 화면 테스트용 시간
const dateKey = (year: number, month: number, day: number) =>
  `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

export default function ReservationForm({ counselor, today }: { counselor: Counselor; today: string }) {
  const router = useRouter();
  const products = PRODUCTS.filter((item) => counselor.methods.includes(item.id));
  const [method, setMethod] = useState<string>(products.find((item) => item.id === "video")?.id ?? products[0]?.id ?? "");
  const [month, setMonth] = useState(() => {
    const [year, month] = today.split("-").map(Number);
    return new Date(year, month - 1, 1);
  });
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notice, setNotice] = useState("");
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const days = new Date(year, monthIndex + 1, 0).getDate();
  const monthLabel = new Intl.DateTimeFormat("en-US", { month: "long" }).format(month);
  const canGoBack = dateKey(year, monthIndex, 1).slice(0, 7) > today.slice(0, 7);
  const selectedClass = "border-[#8574ac] bg-[#f5f1ff]";
  const focusClass = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8574ac]";

  return (
    <section className="font-pretendard mx-auto max-w-[836px] px-6 py-12 text-[#5c4b42] lg:py-20">
      <h1 className="border-b border-[#dbdadd] pb-5 text-[28px] font-bold">상담예약</h1>
      <div className="my-10 flex flex-col items-center gap-[30px] sm:flex-row">
        <div className="relative size-[163px] shrink-0 overflow-hidden bg-[#e9e9e9]" style={{ maskImage: "url(/images/reservation/profile-mask.svg)", maskRepeat: "no-repeat" }}>
          {counselor.image ? (
            <img src={counselor.image} alt={`${counselor.name} 상담사`} className="absolute -left-[9px] top-0 h-[267px] w-[181px] max-w-none object-cover" />
          ) : <span className="flex h-full items-center justify-center text-sm">프로필 준비 중</span>}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <h2 className="font-gowun text-[32px] leading-[45px]">{counselor.name}</h2>
            {counselor.grade && <span className="rounded-full bg-[#eff8ff] px-2 py-0.5 text-[12px] text-[#175cd3]">{counselor.grade === "top" ? "탑 엑스퍼트" : "엑스퍼트"}</span>}
          </div>
          <p className="break-keep text-[18px] leading-[27px]">{counselor.introduction}</p>
        </div>
      </div>

      {!products.length ? <p role="status">이 상담사는 현재 온라인 예약 가능한 상담 상품이 없습니다.</p> : (
        <form className="flex flex-col gap-6" onSubmit={(event) => {
          event.preventDefault();
          if (!date || !time) {
            setNotice("상담 날짜와 시간을 선택해 주세요.");
            return;
          }
          const query = new URLSearchParams({ method, date, time });
          router.push(`/counselors/${encodeURIComponent(counselor.id)}/payment?${query.toString()}`);
        }}>
          <fieldset>
            <legend className="mb-3 text-[18px] font-bold">상담 종류 선택</legend>
            <div className="grid gap-6 md:grid-cols-2">
              {products.map((item) => (
                <label key={item.id} className="relative cursor-pointer">
                  <input type="radio" name="method" value={item.id} checked={method === item.id} onChange={() => { setMethod(item.id); setTime(""); setNotice(""); }} className="peer sr-only" />
                  <div className={`flex h-full flex-col gap-5 rounded-xl border px-6 py-[30px] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#8574ac] sm:px-8 ${method === item.id ? selectedClass : "border-[#dbdadd] bg-white"}`}>
                    <span className="flex items-center gap-2 text-[18px] font-bold"><img src={`/images/counselors/${item.icon}`} alt="" className="shrink-0" />{item.title}</span>
                    <div><p className="text-[15px] leading-6 text-[#725b52]">30분 X 1회</p><p className="text-[24px] font-bold">{item.price}</p></div>
                    <p className="flex gap-2 text-[15px] leading-6"><span aria-hidden="true">•</span>{item.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <h3 className="mb-3 text-[18px] font-bold">상담 날짜 선택</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-[#dbdadd] px-4 py-[30px] sm:px-8">
                <div className="mb-6 flex items-center justify-between">
                  <button type="button" aria-label="이전 달" disabled={!canGoBack} onClick={() => setMonth(new Date(year, monthIndex - 1, 1))} className={`flex size-8 items-center justify-center disabled:opacity-25 ${focusClass}`}><img src="/images/reservation/arrow.svg" alt="" /></button>
                  <p aria-live="polite" className="font-bold text-black">{year} {monthLabel}</p>
                  <button type="button" aria-label="다음 달" onClick={() => setMonth(new Date(year, monthIndex + 1, 1))} className={`flex size-8 items-center justify-center ${focusClass}`}><img src="/images/reservation/arrow-next.svg" alt="" className="rotate-180 -scale-y-100" /></button>
                </div>
                <div className="grid grid-cols-7 justify-items-center gap-y-3 text-[14px] text-black">
                  {["일", "월", "화", "수", "목", "금", "토"].map((day) => <span key={day} className="flex size-8 items-center justify-center">{day}</span>)}
                  {Array.from({ length: firstDay }, (_, i) => <span key={`empty-${i}`} />)}
                  {Array.from({ length: days }, (_, i) => {
                    const value = dateKey(year, monthIndex, i + 1);
                    return <button key={value} type="button" disabled={value < today} aria-label={value} aria-pressed={date === value} onClick={() => { setDate(value); setTime(""); setNotice(""); }} className={`size-8 rounded-full disabled:text-[#a8a8a8] ${focusClass} ${date === value ? "bg-[#dfd1ff]" : "enabled:hover:bg-[#f5f1ff]"}`}>{i + 1}</button>;
                  })}
                </div>
              </div>
              <div className="min-h-[200px] rounded-xl border border-[#dbdadd] px-8 py-[30px] md:min-h-[345px]">
                <h4 className="mb-6 font-bold">예약가능 시간대</h4>
                {date ? <div className="flex flex-wrap gap-3">
                  {TIMES.map((value) => <button key={value} type="button" aria-pressed={time === value} onClick={() => { setTime(value); setNotice(""); }} className={`rounded border px-[13px] py-[9px] text-[14px] ${focusClass} ${time === value ? selectedClass : "border-[#dbdadd]"}`}>{value}</button>)}
                </div> : <p className="text-[14px] text-[#725b52]">날짜를 먼저 선택해 주세요.</p>}
                {date && <p className="mt-6 text-[13px] text-[#725b52]">{date} · 테스트용 시간입니다.</p>}
              </div>
            </div>
          </div>
          <button type="submit" className={`mt-4 h-14 w-full cursor-pointer rounded-lg bg-[#412826] text-[18px] font-bold text-white transition-colors hover:bg-[#7A5C50] ${focusClass}`}>다음</button>
          <p role="status" className={notice ? "text-center text-sm leading-6" : "sr-only"}>{notice}</p>
        </form>
      )}
    </section>
  );
}
