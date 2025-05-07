'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export default function CurriculumPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative bg-cover bg-center py-32 text-white text-center" style={{ backgroundImage: 'url(/images/slide3.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">{t('curriculum.title')}</h1>
          <p className="text-xl">{t('curriculum.subtitle')}</p>
        </div>
      </section>

      {/* Curriculum Explanation */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{t('curriculum.explanation.title')}</h2>
          <div className="space-y-5 text-base leading-relaxed">
            <p>{t('curriculum.explanation.p1')}</p>
            <p>{t('curriculum.explanation.p2')}</p>
            <p>{t('curriculum.explanation.p3')}</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-100 text-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-10">{t('curriculum.timeline.title')}</h3>
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">{t('curriculum.timeline.days1.title')}</h4>
              <p className="text-base leading-relaxed">{t('curriculum.timeline.days1.desc')}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">{t('curriculum.timeline.days2.title')}</h4>
              <p className="text-base leading-relaxed">{t('curriculum.timeline.days2.desc')}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">{t('curriculum.timeline.days3.title')}</h4>
              <p className="text-base leading-relaxed">{t('curriculum.timeline.days3.desc')}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">{t('curriculum.timeline.days4.title')}</h4>
              <p className="text-base leading-relaxed">{t('curriculum.timeline.days4.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
