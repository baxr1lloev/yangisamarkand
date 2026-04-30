import type { Metadata } from "next";
import { Playfair_Display, Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import BackToTop from "@/components/ui/BackToTop";
import SmoothScroll from "@/components/ui/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yangi Samarqand - Center for Entrepreneurship Development",
  description:
    "Fostering economic growth and innovation in Samarkand through strategic partnerships and projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} ${roboto.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="font-display antialiased bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-300">
        <LanguageProvider>
          <SmoothScroll>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <BackToTop />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
