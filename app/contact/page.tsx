'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const { t } = useLanguage();
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <div className="font-['Poppins',sans-serif] bg-black text-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative bg-cover bg-center pt-28 pb-20 sm:pt-32 sm:pb-24" style={{ backgroundImage: 'url(/images/slide5.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <motion.div 
          className="relative z-10 max-w-3xl mx-auto px-4 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200"
            variants={fadeInUp}
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-yellow-50"
            variants={fadeInUp}
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      <div className="py-16 sm:py-20 md:py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Promotional Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 mb-8 bg-gradient-to-r from-gray-900 to-yellow-900/20 rounded-xl p-6 border border-yellow-500/20 shadow-lg"
            >
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
            </motion.div>
            
            {/* Contact Information */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-5 sm:p-8 rounded-xl shadow-xl text-white flex flex-col justify-between transition duration-300 hover:shadow-2xl order-2 md:order-1"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center border-b border-gray-700 pb-4">{t('contact.info.title')}</h2>
                <div className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
                  <motion.div 
                    className="flex items-start group"
                    whileHover={{ x: 8 }}
                  >
                    <div className="bg-yellow-500 p-2.5 sm:p-3 rounded-full mr-4 shadow-md group-hover:bg-yellow-400 transition duration-300">
                      <i className="fas fa-map-marker-alt text-gray-900"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow-400 mb-1 text-sm uppercase tracking-wide">{t('contact.info.address.label')}</h3>
                      <p className="text-gray-200">{t('contact.info.address')}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start group"
                    whileHover={{ x: 8 }}
                  >
                    <div className="bg-yellow-500 p-2.5 sm:p-3 rounded-full mr-4 shadow-md group-hover:bg-yellow-400 transition duration-300">
                      <i className="fas fa-envelope text-gray-900"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow-400 mb-1 text-sm uppercase tracking-wide">{t('contact.info.email.label')}</h3>
                      <p className="text-gray-200">{t('contact.info.email')}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start group"
                    whileHover={{ x: 8 }}
                  >
                    <div className="bg-yellow-500 p-2.5 sm:p-3 rounded-full mr-4 shadow-md group-hover:bg-yellow-400 transition duration-300">
                      <i className="fas fa-phone text-gray-900"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow-400 mb-1 text-sm uppercase tracking-wide">{t('contact.info.phone.label')}</h3>
                      <p className="text-gray-200">{t('contact.info.phone')}</p>
                    </div>
                  </motion.div>
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
            </motion.section>

            {/* Form Section */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl shadow-xl p-5 sm:p-8 transition duration-300 hover:shadow-2xl order-1 md:order-2"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center border-b border-gray-700 pb-4 text-white">{t('contact.title')}</h2>

              <form className="space-y-5 sm:space-y-6 mt-6 sm:mt-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    {t('contact.form.name')} <span className="text-yellow-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-gray-800/50 text-white transition duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    {t('contact.form.email')} <span className="text-yellow-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-gray-800/50 text-white transition duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-gray-800/50 text-white transition duration-200"
                    placeholder="Your subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    {t('contact.form.message')} <span className="text-yellow-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-gray-800/50 text-white transition duration-200"
                    placeholder="Please write your message here..."
                  ></textarea>
                </div>

                <div className="text-center pt-2 sm:pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#eab308' }}
                    type="submit"
                    className="bg-yellow-500 text-gray-900 font-bold py-2.5 sm:py-3 px-8 sm:px-10 rounded-lg shadow-md transition duration-300 transform hover:translate-y-[-2px]"
                  >
                    {t('contact.form.submit')}
                  </motion.button>
                </div>
              </form>
            </motion.section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
