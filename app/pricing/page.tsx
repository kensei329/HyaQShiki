'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export default function PricingPage() {
  const { t } = useLanguage();
  
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative bg-cover bg-center py-32 text-white text-center" style={{ backgroundImage: 'url(/images/slide1.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">{t('pricing.title')}</h1>
          <p className="text-xl">{t('pricing.subtitle')}</p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('pricing.plans.title')}</h2>
          <p className="text-lg mb-12">{t('pricing.description')}</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-300 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">{t('pricing.standard.title')}</h3>
              <p className="text-2xl font-bold text-yellow-500 mb-4">{t('pricing.standard.price')}</p>
              <p className="mb-4">{t('pricing.standard.desc')}</p>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded">{t('pricing.contact')}</button>
            </div>
            <div className="border border-yellow-500 rounded-lg p-6 shadow-md bg-yellow-50">
              <h3 className="text-xl font-bold mb-2">{t('pricing.premium.title')} <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded ml-2">人気</span></h3>
              <p className="text-2xl font-bold text-yellow-500 mb-4">{t('pricing.premium.price')}</p>
              <p className="mb-4">{t('pricing.premium.desc')}</p>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded">{t('pricing.contact')}</button>
            </div>
            <div className="border border-gray-300 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">{t('pricing.enterprise.title')}</h3>
              <p className="text-2xl font-bold text-yellow-500 mb-4">{t('pricing.enterprise.price')}</p>
              <p className="mb-4">{t('pricing.enterprise.desc')}</p>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded">{t('pricing.contact')}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-yellow-100 text-center text-gray-900">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">{t('home.guarantee')}</h2>
          <p className="text-lg mb-6">{t('pricing.guarantee')}</p>
          <img src="/images/satisfaction-guarantee.png" alt="Guarantee" className="h-24 mx-auto" />
        </div>
      </section>

      <Footer />
    </>
  );
}
