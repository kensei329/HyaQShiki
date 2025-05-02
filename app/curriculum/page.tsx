'use client';

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CurriculumPage() {
  return (
    <>
      <Head>
        <title>カリキュラム - HyaQShix百式</title>
        <meta name="description" content={'HyaQShix百式の「100日x100アプリ」プログラム詳細。AIを"使いこなす武器"に変えるための学び方法を解説します。'} />
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative bg-cover bg-center py-32 text-white text-center" style={{ backgroundImage: 'url(/images/slide3.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">カリキュラム</h1>
          <p className="text-xl">「100日x100アプリ」プログラム</p>
        </div>
      </section>

      {/* Curriculum Explanation */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">学習の流れ</h2>
          <div className="space-y-5 text-base leading-relaxed">
            <p>本学習の流れは、受講生一人ひとりの習熟度や進捗に応じて柔軟に最適化されます。</p>
            <p>以下に示す内容は、あくまで平均的なカリキュラムモデルとなります。</p>
            <p>実際の進行は個々の理解度・得意分野・目標に応じて調整されますので、安心してご参加ください。</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-100 text-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-10">タイムライン（例）</h3>
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">Day1〜Day10：基礎固め</h4>
              <p className="text-base leading-relaxed">HTML/CSS/JavaScriptの基礎 + AIアシストによる初期アウトプット体験</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">Day11〜Day40：毎日アプリ制作</h4>
              <p className="text-base leading-relaxed">毎日1つの実用的アプリを生成AIで開発・リリース</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">Day41〜Day70：テーマ別深堀</h4>
              <p className="text-base leading-relaxed">業界特化・応用設計・UI/UX・セキュリティ・API連携など</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">Day71〜Day100：最終制作と公開</h4>
              <p className="text-base leading-relaxed">集大成アプリを複数制作し、公開・共有・審査・資格認定へ</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
