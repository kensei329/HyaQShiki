export default function ProblemSection() {
  const problems = [
    {
      icon: "😔",
      title: "モチベーションの低下",
      description: "「毎日同じことの繰り返しで、やりがいを感じられない……」単純作業の連続は、仕事への意欲を削ぎます。",
    },
    {
      icon: "🚪",
      title: "離職リスクの増加",
      description: "「もっとスキルが活かせる仕事がしたい」と、優秀な人材ほどルーチンワークを嫌い、離職の原因になります。",
    },
    {
      icon: "⏳",
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
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4 text-center">{problem.icon}</div>
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

