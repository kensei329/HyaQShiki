'use client';

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PhilosophyPage() {
  return (
    <>
      <Head>
        <title>理念 - HyaQShix百式</title>
        <meta name="description" content="HyaQShix百式の教育理念と目指す未来。生産力のレバレッジ、学びと実績の両立、起業・VC支援までつながる設計など、私たちの考え方をご紹介します。" />
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative bg-cover bg-center py-32 text-white text-center" style={{ backgroundImage: 'url(/images/slide4.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">理念</h1>
          <p className="text-xl">世界で活躍する自走型人材の育成</p>
        </div>
      </section>

      {/* Education Philosophy */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">教育理念</h2>
          <h3 className="text-xl font-semibold text-center mb-6">「100日、100の型、100倍の生産力」</h3>
          <p className="text-lg text-center mb-10 leading-relaxed">
            HyaQShix百式は、生成AI時代の次世代開発人材を育成する教育プログラムです。実践的なカリキュラムと独自のメソッドで、短期間で即戦力となるスキルを身につけます。
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition">
              <div className="text-yellow-500 text-3xl mb-4">
                <i className="fas fa-rocket"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">実践重視</h4>
              <p className="text-base">毎日アプリを創る実行型カリキュラム。習うより慣れる。</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition">
              <div className="text-yellow-500 text-3xl mb-4">
                <i className="fas fa-layer-group"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">学びと実績の融合</h4>
              <p className="text-base">開発したアプリをポートフォリオとして蓄積。すぐに実績として活用可能。</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition">
              <div className="text-yellow-500 text-3xl mb-4">
                <i className="fas fa-seedling"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">キャリア支援</h4>
              <p className="text-base">起業・VC支援・インターン・採用マッチングなど出口設計まで網羅。</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}