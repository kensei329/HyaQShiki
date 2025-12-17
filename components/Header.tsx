"use client";

import Image from "next/image";

export default function Header() {
  const handleContactClick = () => {
    window.open("https://forms.gle/5wU7NEZzGDHpP4W67", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* ロゴ画像とテキスト */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="HyaQShiki Logo"
              width={120}
              height={80}
              className="h-8 md:h-10 w-auto"
              priority
            />
            <div className="text-xl md:text-2xl font-bold text-navy">
              HyaQShiki-百式-
            </div>
          </div>
        </div>
        <button
          onClick={handleContactClick}
          className="px-4 py-2 md:px-6 md:py-2 bg-accent text-white rounded-xl text-sm md:text-base font-medium hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <span className="hidden sm:inline">無料でデモの問い合せ</span>
          <span className="sm:hidden">問い合せ</span>
        </button>
      </div>
    </header>
  );
}

