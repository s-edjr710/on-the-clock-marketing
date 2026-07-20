import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

/*
 * Analytics — per Entry 209 / Step MS.10. Marketing-site-only, never
 * added to the app. Vercel Analytics needs no configuration. Google
 * Analytics reads its Measurement ID from NEXT_PUBLIC_GA_MEASUREMENT_ID
 * (set in this project's Vercel env vars and local .env.local) —
 * <GoogleAnalytics> is only rendered when that value is present, so a
 * missing ID degrades to "GA not loaded" rather than a runtime error.
 */

export const metadata: Metadata = {
  title: "On The Clock — Fantasy Football Live Draft",
  description:
    "On The Clock runs your fantasy football live draft — the clock, the board, the setup — so the commissioner gets to draft too.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text pb-16 md:pb-0">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCta />
        <Analytics />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
