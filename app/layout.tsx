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
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={metadata.openGraph.title[language]} />
        <meta property="og:description" content={metadata.openGraph.description[language]} />
        <meta property="og:image" content="https://hyaqshiki.com/images/ogp.png" />
        <meta property="og:url" content="https://hyaqshiki.com/"/>
        <meta property="og:type" content={metadata.openGraph.type} />

        <meta name="twitter:title" content={metadata.openGraph.title[language]} />
        <meta name="twitter:description" content={metadata.openGraph.description[language]} />
        <meta name="twitter:image" content="https://hyaqshiki.com/images/ogp.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HyaQShiki" />

        <link rel="icon" type="image/png" href="/images/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/images/site.webmanifest" />
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap" />

        <link rel="canonical" href={`https://hyaqshiki.com${typeof window !== 'undefined' ? window.location.pathname : ''}`} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning={true}>
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
