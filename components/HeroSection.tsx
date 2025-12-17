"use client";

export default function HeroSection() {
  const handleContactClick = () => {
    window.open("https://forms.gle/5wU7NEZzGDHpP4W67", "_blank");
  };

  return (
    <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 bg-gradient-to-br from-white via-lightGray to-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左側：テキスト */}
          <div className="space-y-6 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              FAX・紙整理の単純作業は、
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">月額1,980円のAI</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 md:h-4 bg-accent/30 -z-0"></span>
              </span>
              にお任せ。
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              届いた資料の「リネーム・フォルダ分け・検索化」を完全自動化。
              <br className="hidden sm:block" />
              HyaQShiki（ひゃくしき）が、事務員様をルーチンワークから解放し、本来の業務へ戻します。
            </p>

            <button
              onClick={handleContactClick}
              className="w-full sm:w-auto px-8 py-4 bg-accent text-white text-base sm:text-lg font-bold rounded-xl hover:bg-opacity-90 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 transform hover:scale-105"
            >
              無料でデモの問い合せ ＞
            </button>
          </div>

          {/* 右側：メインビジュアル */}
          <div className="relative z-10">
            <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="space-y-6">
                {/* FAX受信と紙の書類（並列） */}
                <div className="grid grid-cols-2 gap-4">
                  {/* FAX受信 */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                    <svg
                      className="w-16 h-16 mx-auto mb-3 text-navy"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-700">FAX受信</div>
                  </div>

                  {/* 紙の書類 */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                    <svg
                      className="w-16 h-16 mx-auto mb-3 text-navy"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-700">紙の書類</div>
                  </div>
                </div>

                {/* 矢印（2つからAIへ - 斜め）とAI処理を一緒に配置 */}
                <div className="relative">
                  {/* 矢印エリア（AIボックスも含む） */}
                  <div className="relative" style={{ minHeight: '200px' }}>
                    <svg
                      className="absolute inset-0 w-full h-full"
                      style={{ overflow: 'visible', pointerEvents: 'none' }}
                    >
                      {/* 左側（FAX受信）からAI中央への斜め線 */}
                      <line
                        x1="25%"
                        y1="0"
                        x2="50%"
                        y2="70%"
                        stroke="#E6A915"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* 右側（紙の書類）からAI中央への斜め線 */}
                      <line
                        x1="75%"
                        y1="0"
                        x2="50%"
                        y2="70%"
                        stroke="#E6A915"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    
                    {/* AI処理 */}
                    <div className="flex items-center justify-center pt-16">
                      <div className="bg-gradient-to-br from-navy to-accent px-12 py-6 rounded-2xl text-white shadow-2xl relative z-10 hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-6">
                        <svg
                          className="w-16 h-16 text-white flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                        <div className="text-center">
                          <div className="font-bold text-2xl mb-1">AI</div>
                          <div className="text-base">月額1,980円</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 矢印 */}
                <div className="flex justify-center">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>

                {/* 3つのステップ */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-lightGray to-white p-4 rounded-xl text-center hover:shadow-md transition-all duration-300">
                    <svg
                      className="w-12 h-12 mx-auto mb-2 text-navy"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <div className="text-xs font-medium">1. ファイル名を<br />自動変更</div>
                  </div>
                  <div className="bg-gradient-to-br from-lightGray to-white p-4 rounded-xl text-center hover:shadow-md transition-all duration-300">
                    <svg
                      className="w-12 h-12 mx-auto mb-2 text-navy"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                    <div className="text-xs font-medium">2. フォルダに<br />自動振り分け</div>
                  </div>
                  <div className="bg-gradient-to-br from-lightGray to-white p-4 rounded-xl text-center hover:shadow-md transition-all duration-300">
                    <svg
                      className="w-12 h-12 mx-auto mb-2 text-navy"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <div className="text-xs font-medium">3. 検索性<br />大幅UP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

