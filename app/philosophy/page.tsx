'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import { RocketLaunchIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';

export default function PhilosophyPage() {
  const { t } = useLanguage();

  return (
    <div className="font-['Poppins',sans-serif] bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-32" style={{ backgroundImage: 'url(/images/slide5.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200">
            {t('philosophy.title')}
          </h1>
          <p className="text-xl text-yellow-50">
            {t('philosophy.subtitle')}
          </p>
        </div>
      </section>

      {/* Philosophy Overview */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('philosophy.mission.title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400 text-center">
              {t('philosophy.mission.desc')}
            </h3>
            <p className="text-lg mb-6 text-gray-300 leading-relaxed font-medium text-center">
              {t('philosophy.vision.desc')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-yellow-400 transition-all" style={{ transform: 'translateY(0)' }}>
                <div className="text-4xl mb-4 flex justify-center"><RocketLaunchIcon className="w-10 h-10 text-yellow-400" /></div>
                <h4 className="text-xl font-semibold mb-3 text-yellow-400">
                  {t('philosophy.values.v1')}
                </h4>
                <p className="text-gray-300">
                  {t('philosophy.values.v1')}
                </p>
              </div>
              
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-yellow-400 transition-all" style={{ transform: 'translateY(0)' }}>
                <div className="text-4xl mb-4 flex justify-center"><AcademicCapIcon className="w-10 h-10 text-yellow-400" /></div>
                <h4 className="text-xl font-semibold mb-3 text-yellow-400">
                  {t('philosophy.values.v2')}
                </h4>
                <p className="text-gray-300">
                  {t('philosophy.values.v2')}
                </p>
              </div>
              
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-yellow-400 transition-all" style={{ transform: 'translateY(0)' }}>
                <div className="text-4xl mb-4 flex justify-center"><HandThumbUpIcon className="w-10 h-10 text-yellow-400" /></div>
                <h4 className="text-xl font-semibold mb-3 text-yellow-400">
                  {t('philosophy.values.v3')}
                </h4>
                <p className="text-gray-300">
                  {t('philosophy.values.v3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('philosophy.mission.title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-10"></div>
          
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400 text-center">
              {t('philosophy.mission.desc')}
            </h3>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                {t('philosophy.mission.desc')}
              </p>
              <p className="text-lg mb-10 text-gray-300 leading-relaxed">
                {t('philosophy.vision.desc')}
              </p>
              <div className="text-right mt-10">
                <p className="text-gray-300">
                  {t('philosophy.founder.role')}
                </p>
                <p className="text-yellow-400 font-bold text-xl mt-1">
                  {t('philosophy.founder.name')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {t('contact.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 transition-transform duration-300 hover:scale-105">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg font-bold inline-block"
              >
                {t('contact.form.submit')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}