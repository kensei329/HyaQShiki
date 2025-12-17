export default function SolutionSection() {
  const steps = [
    {
      number: "1",
      icon: (
        <svg
          className="w-12 h-12 md:w-16 md:h-16"
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
      ),
      title: "ファイル名を自動変更",
      description: "AIが中身を読んで、ルール通りにリネーム。",
      detail: "人がファイルを開いて確認する必要はありません。AIが内容を読み取り、「日付_取引先_書類名」など、ルール通りに自動で名前を付けます。",
    },
    {
      number: "2",
      icon: (
        <svg
          className="w-12 h-12 md:w-16 md:h-16"
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
      ),
      title: "フォルダに自動振り分け",
      description: "取引先別・部署別へ自動格納。",
      detail: "どのフォルダに入れるか迷う時間もゼロ。取引先別・部署別など、最適な場所へAIが自動で格納・配布します。",
    },
    {
      number: "3",
      icon: (
        <svg
          className="w-12 h-12 md:w-16 md:h-16"
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
      ),
      title: "検索性大幅UP（テキスト化）",
      description: "OCRでテキスト化。キーワード検索可能に。",
      detail: "紙の書類も、テキストデータとして保存・管理。Windows検索などで、必要な時に一瞬で呼び出せるようになります。",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-6">
          HyaQShikiなら、人間がやる手間は「ゼロ」になります。
        </h2>

        <p className="text-center text-gray-700 mb-12 text-lg">
          ご用意いただくのは、複合機（スキャナ）とHyaQShikiだけ。あとはAIが賢く処理します。
        </p>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* ステップアイコン */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-navy to-accent w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-white shadow-lg">
                    {step.icon}
                  </div>
                </div>

                {/* ステップ内容 */}
                <div className="flex-1 bg-gradient-to-br from-lightGray to-white p-5 md:p-6 rounded-2xl w-full shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                    <span className="bg-accent text-white px-3 py-1 rounded-full font-bold text-xs sm:text-sm w-fit">
                      Step {step.number}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-navy">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-2 font-medium text-sm sm:text-base">{step.description}</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{step.detail}</p>
                </div>
              </div>

              {/* 矢印（最後以外） */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4 md:my-0">
                  <div className="text-2xl md:text-3xl text-accent md:rotate-0 rotate-90">
                    ➡ AIが処理 ➡
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

