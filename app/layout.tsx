import type { Metadata } from "next";
import { Cormorant_Garamond, Gowun_Dodum } from "next/font/google";
import "./globals.css";
import ScrollReveal from "./ScrollReveal";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const gowunDodum = Gowun_Dodum({
  weight: "400",
  variable: "--font-gowun",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Dear By Pet",
  description: "Dear By Pet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${cormorant.variable} ${gowunDodum.variable}`}
    >
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}