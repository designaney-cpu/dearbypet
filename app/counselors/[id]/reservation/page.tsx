import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReservationForm from "@/components/ReservationForm";
import { dummyCounselors } from "@/components/CounselorList";

export const dynamic = "force-dynamic";

export default async function ReservationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const counselor = dummyCounselors.find((item) => item.id === id);

  if (!counselor) notFound();

  const today = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  return (
    <>
      <Header />

      <main className="bg-white">
        <ReservationForm
          key={counselor.id}
          counselor={counselor}
          today={today}
        />
      </main>

      <Footer />
    </>
  );
}