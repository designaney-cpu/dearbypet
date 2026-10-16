import Header from "@/components/Header";
import Signup from "@/components/Signup";
import Footer from "@/components/Footer";

export default function SignupPage() {
  return (
    <>
      <Header />

      <main className="min-h-[60vh] bg-white">
        <Signup />
      </main>

      <Footer />
    </>
  );
}