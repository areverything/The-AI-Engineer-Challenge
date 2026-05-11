import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

/**
 * Optimized Google Fonts via next/font.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 */
const display = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mental Coach Chat",
  description: "A supportive mental coach powered by your FastAPI + OpenAI backend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
