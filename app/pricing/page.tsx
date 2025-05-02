'use client';

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>価格＆保証 - HyaQShix百式</title>
        <meta name="description" content="HyaQShix百式の受講プランと価格詳細。一括払い・月額プラン、そして満足保証制度についてご案内します。" />
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative bg-cover bg-center py-32 text-white text-center" style={{ backgroundImage: 'url(/images/slide1.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">価格＆保証</h1>
          <p className="text-xl">HyaQShixは、未来への最高の投資です</p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">受講プラン</h2>
          <p className="text-lg mb-12">学びのスタイルに合わせて選べる2つのプランをご用意しています。</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-300 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">一括払いプラン</h3>
              <p className="text-2xl font-bold text-yellow-500 mb-4">¥198,000</p>
              <p className="mb-4">全100日分を一括でご提供。サポート・教材すべて込み。</p>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded">申し込む</button>
            </div>
            <div className="border border-yellow-500 rounded-lg p-6 shadow-md bg-yellow-50">
              <h3 className="text-xl font-bold mb-2">月額プラン <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded ml-2">人気</span></h3>
              <p className="text-2xl font-bold text-yellow-500 mb-4">¥19,800/月</p>
              <p className="mb-4">サブスクリプション形式。継続的に受講可能でコスパ重視の方に最適。</p>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded">申し込む</button>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-yellow-100 text-center text-gray-900">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">満足保証制度</h2>
          <p className="text-lg mb-6">受講後14日以内であれば、理由を問わず全額返金いたします。</p>
          <img src="/images/satisfaction-guarantee.png" alt="Guarantee" className="h-24 mx-auto" />
        </div>
      </section>

      <Footer />
    </>
  );
}
