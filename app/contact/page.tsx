'use client';

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>お問い合わせ - HyaQShix百式</title>
        <meta name="description" content="HyaQShix百式へのお問い合わせ。受講についての質問、企業連携、資格取得についてなど、お気軽にご連絡ください。" />
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative bg-cover bg-center py-32 text-white text-center" style={{ backgroundImage: 'url(/images/slide5.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-xl">あなたの未来について、一緒に考えましょう</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">お問い合わせフォーム</h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-1">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded shadow"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
