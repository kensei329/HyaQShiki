"use client";

export default function Footer() {
  const handleContactClick = () => {
    // デモ問い合わせの処理（後で実装）
    alert("お問い合わせフォームへのリンクを設定してください");
  };

  return (
    <footer id="contact" className="py-20 px-4 bg-navy text-white">
      <div className="container mx-auto max-w-4xl text-center space-y-12">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            まずは、その精度をご自身の目でお確かめください。
          </h2>
          <p className="text-white/90 mb-8 text-base sm:text-lg">
            実際の書類がどのように自動処理されるのか、デモをご覧いただけます。
            <br className="hidden sm:block" />
            現状の業務フローのご相談だけでも構いません。お気軽にお問い合わせください。
          </p>
          <button
            onClick={handleContactClick}
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-accent text-white text-lg sm:text-xl font-bold rounded-lg hover:bg-opacity-90 transition-all hover:shadow-xl hover:-translate-y-1 transform"
          >
            無料でデモの問い合せ ＞
          </button>
        </div>

        <div className="pt-12 border-t border-white/20 space-y-4 text-sm text-white/80">
          <div>
            <div className="font-bold text-white mb-2">A1nnovation株式会社</div>
            <div>代表取締役 白石憲正</div>
          </div>
          <div>
            〒822-1406
            <br />
            福岡県田川郡香春町大字香春1845
          </div>
          <div className="pt-4 text-white/60">
            Copyright © HyaQShiki All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

