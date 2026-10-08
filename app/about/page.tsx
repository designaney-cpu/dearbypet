import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutPromise from "@/components/AboutPromise";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "디어바이펫 소개 | Dear By Pet",
  description: "반려동물과 보호자의 이별 여정을 함께하는 Dear By Pet",
};

export default function AboutPage() {
  return (
    <>
      <Header />

<main className="bg-white">
  <AboutHero />
  <AboutStory />
  <AboutPromise />
</main>

      <Footer />
    </>
  );
}