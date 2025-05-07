'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

export default function Corporate() {
  const { t } = useLanguage();
  
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-32 text-white text-center" style={{ backgroundImage: 'url(/images/slide5.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">{t('corporate.title')}</h1>
          <p className="text-xl">{t('corporate.subtitle')}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('corporate.benefits.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{t('corporate.benefits.b1.title')}</h3>
              <p>{t('corporate.benefits.b1.desc')}</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{t('corporate.benefits.b2.title')}</h3>
              <p>{t('corporate.benefits.b2.desc')}</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{t('corporate.benefits.b3.title')}</h3>
              <p>{t('corporate.benefits.b3.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Overview */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('corporate.sponsor.title')}</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t('corporate.sponsor.subtitle')}</h3>
              <p className="text-lg mb-6 leading-relaxed">
                {t('corporate.sponsor.desc')}
              </p>
              <ul className="list-disc pl-5 space-y-3 text-base">
                <li>{t('corporate.sponsor.item1')}</li>
                <li>{t('corporate.sponsor.item2')}</li>
                <li>{t('corporate.sponsor.item3')}</li>
              </ul>
            </div>
            <div>
              <img src="/images/slide2.jpg" alt="Sponsor Program" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-50 text-center text-gray-900">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">{t('corporate.cta.title')}</h2>
          <p className="text-lg mb-6">
            {t('corporate.cta.desc')}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded hover:bg-yellow-300 transition"
          >
            {t('corporate.contact')}
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
