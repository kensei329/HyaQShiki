'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import { useLanguage } from './context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />

      {/* Hero */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4 text-white"
        style={{ backgroundImage: 'url(/images/slide1.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0" />
        <div className="relative z-10 text-center font-[\'Noto Sans JP\']">
          <h1 className="main-title mt-10 text-[1.8em] md:text-[2.4em] leading-[1.4] font-bold mb-4">
            {t('home.title')}
          </h1>
          <p className="subtitle text-[1.1em] md:text-[1.4em] leading-[1.5]">
            {t('home.subtitle')}
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
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.reasons')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <i className="fas fa-bolt text-3xl text-yellow-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">{t('home.instant')}</h3>
              <p>{t('home.instant.desc')}</p>
            </div>
            <div className="text-center">
              <i className="fas fa-brain text-3xl text-yellow-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">{t('home.ai')}</h3>
              <p>{t('home.ai.desc')}</p>
            </div>
            <div className="text-center">
              <i className="fas fa-certificate text-3xl text-yellow-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">{t('home.certification')}</h3>
              <p>{t('home.certification.desc')}</p>
            </div>
            <div className="text-center">
              <i className="fas fa-users text-3xl text-yellow-500 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">{t('home.community')}</h3>
              <p>{t('home.community.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 text-white" style={{ background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.9), rgba(10, 10, 10, 0.8))' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.certifications')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl p-6 text-center transition transform hover:-translate-y-1" style={{ backgroundColor: 'rgba(128, 128, 128, 0.95)' }}>
              <h3 className="text-xl font-bold mb-2 text-white">Silver</h3>
              <p className="text-white">{t('home.silver')}</p>
            </div>
            <div className="rounded-xl p-6 text-center transition transform hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.95), rgba(255, 215, 0, 0.95))' }}>
              <h3 className="text-xl font-bold mb-2 text-white">Gold</h3>
              <p className="text-white">{t('home.gold')}</p>
            </div>
            <div className="rounded-xl p-6 text-center transition transform hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(192, 192, 192, 0.95), rgba(230, 230, 230, 0.95))' }}>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Platina</h3>
              <p className="text-gray-900">{t('home.platina')}</p>
            </div>
            <div className="rounded-xl p-6 text-center transition transform hover:-translate-y-1" style={{ backgroundColor: 'rgba(20, 20, 20, 0.95)' }}>
              <h3 className="text-xl font-bold mb-2 text-white">Black</h3>
              <p className="text-white">{t('home.black')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-yellow-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('home.guarantee')}</h2>
          <p className="text-lg mb-6 text-gray-800">{t('home.guarantee.desc')}</p>
          <img src="/images/satisfaction-guarantee.png" alt="Guarantee" className="h-24 mx-auto" />
        </div>
      </section>

      <Footer />
    </>
  );
}