import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CounselorList, {
  CounselorHero,
} from "@/components/CounselorList";

export default function CounselorsPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <CounselorHero />
        <CounselorList />
      </main>

      <Footer />
    </>
  );
}