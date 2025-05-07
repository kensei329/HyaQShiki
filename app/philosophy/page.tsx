'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export default function PhilosophyPage() {
  const { t } = useLanguage();
  
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative bg-cover bg-center py-32 text-white text-center" style={{ backgroundImage: 'url(/images/slide4.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">{t('philosophy.title')}</h1>
          <p className="text-xl">{t('philosophy.subtitle')}</p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 bg-gray-100 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">{t('philosophy.mission.title')}</h2>
              <p className="text-lg">{t('philosophy.mission.desc')}</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">{t('philosophy.vision.title')}</h2>
              <p className="text-lg">{t('philosophy.vision.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('philosophy.values.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition">
              <div className="text-yellow-500 text-3xl mb-4">
                <i className="fas fa-rocket"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">{t('philosophy.values.v1')}</h4>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition">
              <div className="text-yellow-500 text-3xl mb-4">
                <i className="fas fa-layer-group"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">{t('philosophy.values.v2')}</h4>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition">
              <div className="text-yellow-500 text-3xl mb-4">
                <i className="fas fa-seedling"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">{t('philosophy.values.v3')}</h4>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}