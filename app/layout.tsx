import type { Metadata } from "next";
import { Space_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "Midnight Shelter",
  description: "MIDNIGHT SHELTER — A companion app for late-night study sessions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${spaceMono.variable} ${notoSansKR.variable} bg-[#080b14]`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
