import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HyaQShiki - FAX・紙整理の単純作業を月額1,980円のAIにお任せ",
  description: "届いた資料の「リネーム・フォルダ分け・検索化」を完全自動化。HyaQShikiが、事務員様をルーチンワークから解放し、本来の業務へ戻します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}

