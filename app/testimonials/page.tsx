'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import Image from 'next/image';

export default function TestimonialsPage() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
  return (
    <div className="font-['Poppins',sans-serif] bg-black text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <div className="relative w-full">
          <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage="/images/slide2.jpg"
            bgImageAlt="Testimonials Background"
            strength={400}
            className="py-32 flex items-center justify-center"
            bgImageStyle={{opacity: 0.5}}
            renderLayer={percentage => (
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'black',
                  opacity: 0.6
                }}
              />
            )}
          >
            <div 
              className="relative z-20 text-center max-w-4xl px-6"
            >
              <h1 
                className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200"
              >
                {t('testimonials.title')}
              </h1>
              <p 
                className="text-xl md:text-2xl font-light text-yellow-50 mb-6"
              >
                {t('testimonials.subtitle')}
              </p>
            </div>
          </Parallax>
        </div>

        {/* Student Testimonial */}
        <section className="py-24 relative overflow-hidden bg-black">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-bg.png')] opacity-5 bg-repeat"></div>
          <div 
            className="max-w-6xl mx-auto px-6 relative z-10"
          >
            <div 
              className="backdrop-blur-md bg-white/5 rounded-2xl p-8 md:p-12 border border-gray-800 shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0 mx-auto lg:mx-0">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl">
                    <Image 
                      src="/images/student-oda.jpg"
                      alt={t('testimonials.student1.name')}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                      {t('testimonials.student1.name')}
                    </h3>
                    <div className="px-4 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full inline-block">
                      {t('testimonials.badge')}
                    </div>
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className="flex-1">
                  <div className="mb-8">
                    <div className="text-6xl text-yellow-400 opacity-30 mb-4 leading-none">"</div>
                    <p className="text-lg leading-relaxed text-gray-200 whitespace-pre-line">
                      {t('testimonials.student1.feedback')}
                    </p>
                    <div className="text-6xl text-yellow-400 opacity-30 mt-4 leading-none text-right">"</div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-xl p-6 border border-yellow-500/20">
                    <h4 className="text-xl font-bold text-yellow-400 mb-4">
                      {t('testimonials.student1.achievements.title')}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'testimonials.student1.achievements.item1',
                        'testimonials.student1.achievements.item2',
                        'testimonials.student1.achievements.item3',
                        'testimonials.student1.achievements.item4'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-gray-200 leading-relaxed">{t(item)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
          
          <div 
            className="max-w-4xl mx-auto px-6 text-center relative z-10"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              {t('testimonials.more.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('testimonials.more.desc')}
            </p>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
              <div className="text-yellow-400 text-6xl mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <p className="text-gray-300">
                {t('testimonials.comingsoon')}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-yellow-500 to-yellow-600 text-black">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-400 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-400 rounded-full opacity-30 blur-3xl"></div>
          
          <div 
            className="max-w-4xl mx-auto px-6 text-center relative z-10"
          >
            <h2 
              className="text-4xl font-bold mb-4"
            >
              {t('testimonials.cta.title')}
            </h2>
            <p 
              className="text-xl mb-10 opacity-90 max-w-3xl mx-auto"
            >
              {t('testimonials.cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[48px] bg-black hover:bg-gray-800 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg touch-manipulation"
              >
                <span>
                  {t('testimonials.cta.free_trial')}
                </span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              <a 
                href="/pricing" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[48px] bg-transparent hover:bg-black/10 text-black border-2 border-black font-bold rounded-full transition-all duration-300 hover:scale-105 touch-manipulation"
              >
                {t('testimonials.cta.pricing')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 