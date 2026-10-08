import type { Metadata } from "next";
import Header from "@/components/Header";
import ExpertHero from "@/components/Expert_hero";
import ExpertInfo from "@/components/Expert_info";
import ExpertRecruitment from "@/components/ExpertRecruitment";
import ExpertFAQ from "@/components/ExpertFAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "디어바이펫 전문가 모집 | Dear By Pet",
  description: "이별의 순간부터, 그 이후의 시간까지 함께하는 서비스",
};

export default function ExpertPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <ExpertHero />
        <ExpertInfo />
        <ExpertRecruitment />
         <ExpertFAQ />
      </main>

      <Footer />
    </>
  );
}