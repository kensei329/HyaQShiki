'use client';

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Corporate() {
  return (
    <>
      <Head>
        <title>企業連携 - HyaQShix百式</title>
        <meta name="description" content="HyaQShix百式の企業スポンサー制度。実務プロジェクトと教育プログラムを融合し、次世代のAI人材育成に貢献しませんか？" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-32 text-white text-center" style={{ backgroundImage: 'url(/images/slide5.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">企業連携</h1>
          <p className="text-xl">次世代のAI人材と共に、新たな価値を創造する</p>
        </div>
      </section>

      {/* Sponsor Overview */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">スポンサー制度の概要</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">HyaQShixスポンサー制度とは？</h3>
              <p className="text-lg mb-6 leading-relaxed">
                生成AI時代に100倍の生産力を発揮する次世代開発人材を育成するHyaQShix百式では、企業からの実務プロジェクトを教育プログラムと融合し、学習と実践を同時に実現します。
              </p>
              <ul className="list-disc pl-5 space-y-3 text-base">
                <li>貴社課題に取り組む実務型プロジェクト</li>
                <li>学生の実力・成長を可視化できる評価レポート</li>
                <li>採用候補人材への早期接点</li>
              </ul>
            </div>
            <div>
              <img src="/images/slide2.jpg" alt="Sponsor Program" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-50 text-center text-gray-900">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">次世代の教育×社会実装を、共に。</h2>
          <p className="text-lg mb-6">
            HyaQShix百式は、教育機関を超えた「実務学習フィールド」です。
            AIによるアプリ開発を軸にした100日カリキュラムの中で、企業の実課題を扱うことで学びと価値創造が両立します。
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded hover:bg-yellow-300 transition"
          >
            無料相談する
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
