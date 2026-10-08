import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Service from "@/components/Service_home";
import PartnerRecruitment from "@/components/PartnerRecruitment";
import Bottombanner from "@/components/Bottombanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <Service />
      <PartnerRecruitment />
      <Bottombanner />
      <Footer />
    </>
  );
}