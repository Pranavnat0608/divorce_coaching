import type { Metadata } from "next";
import { DM_Sans, Lexend, Montserrat, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Insightful Divorce Coaching™",
    template: "%s · Insightful Divorce Coaching™",
  },
  description:
    "Certified Divorce Coach® offering executive-caliber, trauma-informed decision support for clients and the attorneys who represent them. Structured. Steady. Attorney-Aligned.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} ${dmSans.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-body text-ink">
        <ScrollToTop />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
