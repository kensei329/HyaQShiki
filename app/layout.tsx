'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const RootLayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { language, metadata } = useLanguage();
  
  return (
    <html lang={language}>
      <head>
        <title>{metadata.title[language]}</title>
        <meta name="description" content={metadata.description[language]} />
        <meta property="og:title" content={metadata.openGraph.title[language]} />
        <meta property="og:description" content={metadata.openGraph.description[language]} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <link rel="icon" type="image/png" href="/images/top-icon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <RootLayoutContent>{children}</RootLayoutContent>
    </LanguageProvider>
  );
}
