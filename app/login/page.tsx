import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <>
      <Header />

      <main className="min-h-[60vh] bg-white">
        <LoginForm />
      </main>

      <Footer />
    </>
  );
}