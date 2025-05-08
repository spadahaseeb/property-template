import type { Viewport } from "next";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
// components
import "@/assets/globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata: Metadata = {
  title: "Home - 1",
  description: "UI/UX study - spadasoft",
  keywords: "UI/UX study, spadasoft, nextjs, react",
  creator: "haseeb.arshad@spadasoftinc.com",
  publisher: "spadasoftinc.com",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico fatherjs",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const RobotoFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
  style: ["normal", "italic"],
  fallback: ["sans-serif"],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${RobotoFont.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
