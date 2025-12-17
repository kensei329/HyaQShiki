"use client";

export default function Header() {
  const handleContactClick = () => {
    // デモ問い合わせの処理（後で実装）
    window.location.href = "#contact";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold text-navy">HyaQShiki</div>
        <button
          onClick={handleContactClick}
          className="px-4 py-2 md:px-6 md:py-2 bg-accent text-white rounded-lg text-sm md:text-base font-medium hover:bg-opacity-90 transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          <span className="hidden sm:inline">無料でデモの問い合せ</span>
          <span className="sm:hidden">問い合せ</span>
        </button>
      </div>
    </header>
  );
}

