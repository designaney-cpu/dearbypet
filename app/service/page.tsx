import type { Metadata } from "next";
import Header from "@/components/Header";
import ServiceHero from "@/components/ServiceHero";
import ServiceAnchorTabs from "@/components/ServiceAnchorTabs";
import PetLossSupport from "@/components/PetLossSupport";
import PetInsure from "@/components/PetInsure";
import Service_Memorial from "@/components/Service_Memorial";
import ServiceFAQ from "@/components/ServiceFAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "디어바이펫 서비스 소개 | Dear By Pet",
  description: "이별의 순간부터, 그 이후의 시간까지 함께하는 서비스",
};

export default function ServicePage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <ServiceHero />

        <div className="py-10 lg:py-[60px]">
          <ServiceAnchorTabs />
        </div>

  <PetLossSupport />
  <PetInsure />
  <Service_Memorial />
  <ServiceFAQ />

      </main>

      <Footer />
    </>
  );
}