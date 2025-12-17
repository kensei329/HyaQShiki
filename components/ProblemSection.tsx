export default function ProblemSection() {
  const problems = [
    {
      icon: (
        <svg
          className="w-16 h-16 mx-auto text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21l4-4m0 0l4-4m-4 4V3"
            className="opacity-50"
          />
        </svg>
      ),
      title: "モチベーションの低下",
      description: "「毎日同じことの繰り返しで、やりがいを感じられない……」単純作業の連続は、仕事への意欲を削ぎます。",
    },
    {
      icon: (
        <svg
          className="w-16 h-16 mx-auto text-orange-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
      title: "離職リスクの増加",
      description: "「もっとスキルが活かせる仕事がしたい」と、優秀な人材ほどルーチンワークを嫌い、離職の原因になります。",
    },
    {
      icon: (
        <svg
          className="w-16 h-16 mx-auto text-amber-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "本来の業務の圧迫",
      description: "顧客対応や企画サポートなど、人間がやるべき「価値ある仕事」をする時間が奪われています。",
    },
  ];

  return (
    <section className="py-20 px-4 bg-lightGray">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          その「単純作業」が、優秀な事務員を疲弊させていませんか？
        </h2>

        <p className="text-center text-gray-700 mb-12 text-lg">
          日々大量に届くFAXやPDFの処理。「ファイル名を変えて、フォルダに入れる」だけの作業に、こんな弊害が起きています。
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 card-hover"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl">
                  {problem.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4 text-center">
                {problem.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-navy text-white p-8 rounded-xl text-center">
          <p className="text-lg md:text-xl leading-relaxed">
            「HyaQShiki」の導入は、業務効率化であると同時に、
            <br className="hidden md:block" />
            社員満足度（ES）向上のための施策です。
          </p>
        </div>
      </div>
    </section>
  );
}

