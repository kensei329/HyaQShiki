'use client';

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CertificationPage() {
  return (
    <>
      <Head>
        <title>資格制度 - HyaQShix百式</title>
        <meta name="description" content="HyaQShix百式の認定資格制度の詳細。Silver、Gold、Platina、Blackの各ランクと取得方法について。" />
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative bg-cover bg-center py-32 text-white text-center" style={{ backgroundImage: 'url(/images/slide3.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">資格制度</h1>
          <p className="text-xl">HyaQShix 認定資格制度</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">HyaQShix資格とは</h2>
          <p className="text-lg text-center leading-relaxed mb-6">
            HyaQShixでは、生成AI時代に求められる高速開発力・実装力・構築力・起業力を評価・認定する
            <span className="text-yellow-500 font-bold">4段階の資格制度</span>を設けています。
          </p>
          <ul className="space-y-4 text-base leading-relaxed list-disc pl-5">
            <li>アプリ完成度、設計力、AI活用度、実装力などで総合評価</li>
            <li>合格者はPDF証明書発行 + 認定者リストに掲載（URL共有可）</li>
            <li>上位資格ほど難易度が高く、採用やVC評価にも有効</li>
          </ul>
        </div>
      </section>

      {/* Levels */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-12">4つの認定ランク</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl p-6 text-center shadow-md bg-gray-200 border border-gray-300">
              <h4 className="text-xl font-bold mb-2">Silver</h4>
              <p className="text-sm leading-relaxed">基本的な開発工程を理解し、ChatGPTを活用したアプリ作成経験がある。</p>
            </div>
            <div className="rounded-xl p-6 text-center shadow-md bg-yellow-300 border border-yellow-400">
              <h4 className="text-xl font-bold mb-2">Gold</h4>
              <p className="text-sm leading-relaxed">複数のアプリを独力で開発し、構造設計・UI実装・API接続ができる。</p>
            </div>
            <div className="rounded-xl p-6 text-center shadow-md bg-gray-300 border border-gray-400">
              <h4 className="text-xl font-bold mb-2">Platina</h4>
              <p className="text-sm leading-relaxed">抽象思考と設計構造を通じて、複雑なサービス構築が可能な上級開発者。</p>
            </div>
            <div className="rounded-xl p-6 text-center shadow-md bg-black text-white border border-white">
              <h4 className="text-xl font-bold mb-2">Black</h4>
              <p className="text-sm leading-relaxed">自立してゼロイチで価値創出できる最高位。起業・独立・VC提案力までカバー。</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}