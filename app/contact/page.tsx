'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative bg-cover bg-center py-32 text-white text-center" style={{ backgroundImage: 'url(/images/slide5.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-xl">{t('contact.subtitle')}</p>
        </div>
      </section>

      <div className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form Section */}
            <section className="bg-white text-gray-800 rounded-xl shadow-xl p-8 border border-gray-100 transition duration-300 hover:shadow-2xl">
              <h2 className="text-2xl font-bold mb-6 text-center border-b border-gray-200 pb-4 text-gray-900">{t('contact.title')}</h2>

              <form className="space-y-6 mt-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                    {t('contact.form.name')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50 transition duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                    {t('contact.form.email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50 transition duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700">
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50 transition duration-200"
                    placeholder="Your subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                    {t('contact.form.message')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50 transition duration-200"
                    placeholder="Please write your message here..."
                  ></textarea>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-10 rounded-lg shadow-md transition duration-300 transform hover:translate-y-[-2px]"
                  >
                    {t('contact.form.submit')}
                  </button>
                </div>
              </form>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl text-white flex flex-col justify-between transition duration-300 hover:shadow-2xl">
              <div>
                <h2 className="text-2xl font-bold mb-8 text-center border-b border-gray-700 pb-4">{t('contact.info.title')}</h2>
                <div className="space-y-8 mt-8">
                  <div className="flex items-start group">
                    <div className="bg-yellow-500 p-3 rounded-full mr-4 shadow-md group-hover:bg-yellow-400 transition duration-300">
                      <i className="fas fa-map-marker-alt text-gray-900"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow-400 mb-1 text-sm uppercase tracking-wide">{t('contact.info.address.label')}</h3>
                      <p className="text-gray-200">{t('contact.info.address')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="bg-yellow-500 p-3 rounded-full mr-4 shadow-md group-hover:bg-yellow-400 transition duration-300">
                      <i className="fas fa-envelope text-gray-900"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow-400 mb-1 text-sm uppercase tracking-wide">{t('contact.info.email.label')}</h3>
                      <p className="text-gray-200">{t('contact.info.email')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="bg-yellow-500 p-3 rounded-full mr-4 shadow-md group-hover:bg-yellow-400 transition duration-300">
                      <i className="fas fa-phone text-gray-900"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow-400 mb-1 text-sm uppercase tracking-wide">{t('contact.info.phone.label')}</h3>
                      <p className="text-gray-200">{t('contact.info.phone')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-6 border-t border-gray-700">
                <h3 className="text-lg font-semibold mb-4 text-center text-yellow-400">{t('contact.info.hours')}</h3>
                <div className="grid grid-cols-2 gap-y-3 text-sm">
                  <div className="text-gray-300">{t('contact.info.hours.weekdays')}:</div>
                  <div className="text-right text-white font-medium">9:00 AM - 6:00 PM</div>
                  <div className="text-gray-300">{t('contact.info.hours.saturday')}:</div>
                  <div className="text-right text-white font-medium">10:00 AM - 4:00 PM</div>
                  <div className="text-gray-300">{t('contact.info.hours.sunday')}:</div>
                  <div className="text-right text-white font-medium">{t('contact.info.hours.closed')}</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
