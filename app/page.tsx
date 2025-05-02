'use client';

import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>HyaQShix百式 - 生成AIと100日100アプリで未来を創る教育プログラム</title>
        <meta name="description" content="100日、100の型、100倍の生産力。HyaQShix百式は、AIで効率的にアプリ開発する手法を学び、毎日ひとつアプリを創る教育プログラムです。" />
        <meta property="og:title" content="HyaQShix百式 - 生成AIと100日100アプリで未来を創る教育プログラム" />
        <meta property="og:description" content="100日、100の型、100倍の生産力。そして無限の未来へ。AIを使いこなす武器に変えるための学び。" />
        <meta property="og:image" content="/images/HyaQShix.jpg" />
        <meta property="og:url" content="https://hyaqshix.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/png" href="/images/top-icon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap" />
      </Head>

      <Header />


      {/* Hero */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4 text-white"
        style={{ backgroundImage: 'url(/images/slide1.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0" />
        <div className="relative z-10 text-center font-[\'Noto Sans JP\']">
          <h1 className="main-title mt-10 text-[1.8em] md:text-[2.4em] leading-[1.4] font-bold mb-4">
            100日、100の型、100倍の生産力。
          </h1>
          <p className="subtitle text-[1.1em] md:text-[1.4em] leading-[1.5]">
            AIと共に創る、未来のアプリ開発スキルを最速で。
          </p>
        </div>
      </section>

      {/* Curriculum Visual */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <img src="/images/slide2.jpg" alt="Curriculum" className="rounded-xl shadow-xl w-full" />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">選ばれる理由</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <i className="fas fa-bolt text-3xl text-yellow-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">即戦力の育成</h3>
              <p>実務型プロジェクトを通じて、即戦力人材を育てます。</p>
            </div>
            <div className="text-center">
              <i className="fas fa-brain text-3xl text-yellow-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">AI実装スキル</h3>
              <p>生成AIを活用した開発力を身につけます。</p>
            </div>
            <div className="text-center">
              <i className="fas fa-certificate text-3xl text-yellow-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">4段階資格制度</h3>
              <p>Silver〜Blackの資格認定で能力を証明。</p>
            </div>
            <div className="text-center">
              <i className="fas fa-users text-3xl text-yellow-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">仲間と学ぶ</h3>
              <p>志ある仲間と共に学び、高め合う環境。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 text-white" style={{ background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.9), rgba(10, 10, 10, 0.8))' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">認定資格制度</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl p-6 text-center transition transform hover:-translate-y-1" style={{ backgroundColor: 'rgba(128, 128, 128, 0.95)' }}>
              <h3 className="text-xl font-bold mb-2 text-white">Silver</h3>
              <p className="text-white">基本的な開発力を有する証明。</p>
            </div>
            <div className="rounded-xl p-6 text-center transition transform hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.95), rgba(255, 215, 0, 0.95))' }}>
              <h3 className="text-xl font-bold mb-2 text-white">Gold</h3>
              <p className="text-white">毎日の開発実践を積んだ実力者。</p>
            </div>
            <div className="rounded-xl p-6 text-center transition transform hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(192, 192, 192, 0.95), rgba(230, 230, 230, 0.95))' }}>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Platina</h3>
              <p className="text-gray-900">戦略設計とAI統合が可能な上級者。</p>
            </div>
            <div className="rounded-xl p-6 text-center transition transform hover:-translate-y-1" style={{ backgroundColor: 'rgba(20, 20, 20, 0.95)' }}>
              <h3 className="text-xl font-bold mb-2 text-white">Black</h3>
              <p className="text-white">自立して価値創造できる最高レベル。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-yellow-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">満足保証制度</h2>
          <p className="text-lg mb-6 text-gray-800">30日以内の返金対応で安心してご参加いただけます。</p>
          <img src="/images/satisfaction-guarantee.png" alt="Guarantee" className="h-24 mx-auto" />
        </div>
      </section>

      <Footer />
    </>
  );
}