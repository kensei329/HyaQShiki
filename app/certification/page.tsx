'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export default function CertificationPage() {
  const { t } = useLanguage();
  
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative bg-cover bg-center py-32 text-white text-center" style={{ backgroundImage: 'url(/images/slide3.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">{t('certification.title')}</h1>
          <p className="text-xl">{t('certification.subtitle')}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">{t('certification.title')}</h2>
          <p className="text-lg text-center leading-relaxed mb-6">{t('certification.desc')}</p>
          <ul className="space-y-4 text-base leading-relaxed list-disc pl-5">
            <li>{t('certification.eval.item1')}</li>
            <li>{t('certification.eval.item2')}</li>
            <li>{t('certification.eval.item3')}</li>
          </ul>
        </div>
      </section>

      {/* Levels */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-12">{t('certification.levels.title')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl p-6 text-center shadow-md bg-gray-200 border border-gray-300">
              <h4 className="text-xl font-bold mb-2">{t('certification.silver.title')}</h4>
              <p className="text-sm leading-relaxed">{t('certification.silver.desc')}</p>
            </div>
            <div className="rounded-xl p-6 text-center shadow-md bg-yellow-300 border border-yellow-400">
              <h4 className="text-xl font-bold mb-2">{t('certification.gold.title')}</h4>
              <p className="text-sm leading-relaxed">{t('certification.gold.desc')}</p>
            </div>
            <div className="rounded-xl p-6 text-center shadow-md bg-gray-300 border border-gray-400">
              <h4 className="text-xl font-bold mb-2">{t('certification.platina.title')}</h4>
              <p className="text-sm leading-relaxed">{t('certification.platina.desc')}</p>
            </div>
            <div className="rounded-xl p-6 text-center shadow-md bg-black text-white border border-white">
              <h4 className="text-xl font-bold mb-2">{t('certification.black.title')}</h4>
              <p className="text-sm leading-relaxed">{t('certification.black.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}