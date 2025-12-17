export default function BenefitsSection() {
  const benefits = [
    {
      icon: "😊",
      title: "社員の笑顔が増える",
      description: "面倒な作業から解放され、心理的な負担が激減。「楽になった」「ありがとう」という声が現場から上がります。",
    },
    {
      icon: "💡",
      title: "クリエイティブな業務へ",
      description: "空いた時間で、丁寧な顧客対応や、社内環境の改善など、人にしかできない付加価値の高い業務に集中できます。",
    },
    {
      icon: "⏱️",
      title: "残業ゼロの実現",
      description: "夕方に届いたFAX整理のために残る必要はもうありません。定時退社を促進し、ホワイトな職場環境を作ります。",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-navy via-navy to-accent relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          「事務作業」を減らし、「仕事」をしよう。
        </h2>

        <p className="text-center text-white/90 mb-12 text-lg">
          HyaQShikiを導入することで、現場はこう変わります。
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="text-5xl mb-4 text-center">{benefit.icon}</div>
              <div className="flex items-center gap-2 mb-4 justify-center">
                <span className="text-2xl text-white">✅</span>
                <h3 className="text-xl font-bold text-white text-center">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-white/90 leading-relaxed text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

