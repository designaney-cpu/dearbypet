import { notFound, redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PaymentFlow from "@/components/PaymentFlow";
import { dummyCounselors } from "@/components/CounselorList";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    method?: string | string[];
    date?: string | string[];
    time?: string | string[];
  }>;
};

export default async function PaymentPage({
  params,
  searchParams,
}: Props) {
  const { id } = await params;
  const counselor = dummyCounselors.find((item) => item.id === id);

  if (!counselor) notFound();

  const { method, date, time } = await searchParams;

  const today = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  const parsed =
    typeof date === "string"
      ? new Date(`${date}T00:00:00Z`)
      : new Date(NaN);

  // 예약 정보가 없거나 잘못되면 예약 화면으로 돌아갑니다.
  if (
    (method !== "phone" && method !== "video") ||
    !counselor.methods.includes(method) ||
    typeof date !== "string" ||
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    !Number.isFinite(parsed.getTime()) ||
    parsed.toISOString().slice(0, 10) !== date ||
    date < today ||
    (time !== "11:00" && time !== "12:00")
  ) {
    redirect(`/counselors/${encodeURIComponent(id)}/reservation`);
  }

  return (
    <>
      <Header />

      <main className="bg-white">
        <PaymentFlow
          key={`${id}-${method}-${date}-${time}`}
          counselor={counselor}
          method={method}
          date={date}
          time={time}
        />
      </main>

      <Footer />
    </>
  );
}