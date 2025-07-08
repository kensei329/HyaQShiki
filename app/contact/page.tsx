'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  const { t } = useLanguage();
  
  return (
    <div className="font-['Poppins',sans-serif] bg-black text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative bg-cover bg-center pt-28 pb-20 sm:pt-32 sm:pb-24" style={{ backgroundImage: 'url(/images/slide5.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200">
            {t('contact.title')}
          </h1>
          <p className="text-lg sm:text-xl text-yellow-50">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <div className="py-16 sm:py-20 md:py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Promotional Banner */}
            <div className="md:col-span-2 mb-8 bg-gradient-to-r from-gray-900 to-yellow-900/20 rounded-xl p-6 border border-yellow-500/20 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="bg-yellow-500 p-3 rounded-full shadow-xl shadow-yellow-500/20">
                  <i className="fas fa-comments text-gray-900 text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white text-center sm:text-left">
                    {t('promo.line1')}
                  </h3>
                  <p className="text-gray-300 text-center sm:text-left">
                    {t('promo.contact.subtitle')}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-5 sm:p-8 rounded-xl shadow-xl text-white flex flex-col justify-between transition duration-300 hover:shadow-2xl order-2 md:order-1">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center border-b border-gray-700 pb-4">{t('contact.info.title')}</h2>
                <div className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
                  <div className="flex items-start group">
                    <div className="bg-yellow-500 p-2.5 sm:p-3 rounded-full mr-4 shadow-md group-hover:bg-yellow-400 transition duration-300">
                      <i className="fas fa-envelope text-gray-900"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow-400 mb-1 text-sm uppercase tracking-wide">{t('contact.info.email.label')}</h3>
                      <p className="text-gray-200">{t('contact.info.email')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="bg-yellow-500 p-2.5 sm:p-3 rounded-full mr-4 shadow-md group-hover:bg-yellow-400 transition duration-300 flex items-center justify-center">
                      {/* X（旧Twitter）アイコン */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" width="24" height="24" fill="currentColor" className="text-gray-900">
                        <path d="M1200 24.6l-393.6 579.6L1197.6 1202H960.6L684.6 813.6 360 1202H0l414-610.8L6 24.6h237.6l252 357.6L732 24.6H1200zm-180 105.6h-144l-276 393.6-276-393.6H60l354 522-354 522h144l276-393.6 276 393.6h144l-354-522 354-522z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow-400 mb-1 text-sm uppercase tracking-wide">X（旧Twitter）</h3>
                      <a href="https://x.com/HyaQShiki" target="_blank" rel="noopener noreferrer" className="text-gray-200 underline hover:text-yellow-300 transition">
                        @HyaQShiki
                      </a>
                      <div className="text-xs text-gray-400 mt-1">DMを受け付けています</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 sm:mt-12 pt-6 border-t border-gray-700">
                <h3 className="text-base sm:text-lg font-semibold mb-4 text-center text-yellow-400">{t('contact.info.hours')}</h3>
                <div className="grid grid-cols-2 gap-y-2 sm:gap-y-3 text-sm">
                  <div className="text-gray-300">{t('contact.info.hours.weekdays')}:</div>
                  <div className="text-right text-white font-medium">9:00 AM - 6:00 PM</div>
                  <div className="text-gray-300">{t('contact.info.hours.saturday')}:</div>
                  <div className="text-right text-white font-medium">10:00 AM - 4:00 PM</div>
                  <div className="text-gray-300">{t('contact.info.hours.sunday')}:</div>
                  <div className="text-right text-white font-medium">{t('contact.info.hours.closed')}</div>
                </div>
              </div>
            </div>
            
            {/* Form Section */}
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl shadow-xl p-5 sm:p-8 transition duration-300 hover:shadow-2xl order-1 md:order-2">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center border-b border-gray-700 pb-4 text-white">{t('contact.title')}</h2>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
