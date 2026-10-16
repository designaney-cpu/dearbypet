import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFoundContent from "@/components/NotFoundContent";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] items-center bg-white">
        <NotFoundContent />
      </main>
      <Footer />
    </>
  );
}
