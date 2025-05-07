import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HyaQShix百式 - 生成AIと100日100アプリで未来を創る教育プログラム",
  description: "100日、100の型、100倍の生産力。HyaQShix百式は、AIで効率的にアプリ開発する手法を学び、毎日ひとつアプリを創る教育プログラムです。",
  openGraph: {
    title: "HyaQShix百式 - 生成AIと100日100アプリで未来を創る教育プログラム",
    description: "100日、100の型、100倍の生産力。そして無限の未来へ。AIを使いこなす武器に変えるための学び。",
    images: ['/images/HyaQShix.jpg'],
    url: 'https://hyaqshix.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" type="image/png" href="/images/top-icon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
