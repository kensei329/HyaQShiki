"use client";

import Logo from "./Logo";

export default function Header() {
  const handleContactClick = () => {
    window.open("https://forms.gle/5wU7NEZzGDHpP4W67", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* コンパクトなロゴ（ヘッダー用） */}
          <div className="flex items-center gap-2">
            <svg
              width="40"
              height="28"
              viewBox="0 0 120 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-7"
            >
              <path
                d="M10 15C10 12.7909 11.7909 11 14 11H50C51.1046 11 52 11.8954 52 13V45C52 46.1046 51.1046 47 50 47H14C11.7909 47 10 45.2091 10 43V15Z"
                fill="#0B2545"
              />
              <path d="M50 11L50 25L64 25L50 11Z" fill="#E6A915" />
              <line x1="16" y1="18" x2="44" y2="18" stroke="#E6A915" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="16" y1="22" x2="40" y2="22" stroke="#E6A915" strokeWidth="1.2" strokeLinecap="round" />
              <rect x="16" y="30" width="4" height="4" fill="#0B2545" />
              <rect x="22" y="30" width="4" height="4" fill="#E6A915" />
              <circle cx="12" cy="30" r="1.5" fill="#E6A915" />
              <g transform="translate(60, 20)">
                <path
                  d="M20 8C20 5.79086 21.7909 4 24 4H40C42.2091 4 44 5.79086 44 8V24C44 26.2091 42.2091 28 40 28H24C21.7909 28 20 26.2091 20 24V8Z"
                  fill="#E6A915"
                />
                <path
                  d="M24 8L25.5 5L26.5 5L28 8L30 8L31.5 11L32.5 11L31 14L33 14L34.5 17L35.5 17L34 20L32 20L30.5 23L29.5 23L28 20L26 20L24.5 23L23.5 23L22 20L20 20L18.5 17L19.5 17L21 14L19 14L17.5 11L18.5 11L20 8L24 8Z"
                  fill="#E6A915"
                  stroke="#0B2545"
                  strokeWidth="0.5"
                />
                <circle cx="27" cy="14" r="6" fill="#0B2545" />
                <circle cx="27" cy="14" r="4" fill="#E6A915" />
              </g>
            </svg>
            <div className="flex flex-col">
              <div className="text-lg md:text-xl font-bold leading-tight">
                <span className="text-navy">Hya</span>
                <span className="text-accent">Q</span>
                <span className="text-navy">Shiki</span>
              </div>
              <div className="text-[10px] md:text-xs text-navy font-medium leading-tight">
                百式
              </div>
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

