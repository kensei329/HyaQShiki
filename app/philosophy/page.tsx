'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PhilosophyPage() {
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
    <div className="font-['Poppins',sans-serif] bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-32" style={{ backgroundImage: 'url(/images/slide5.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200"
            variants={fadeInUp}
          >
            {t('philosophy.title')}
          </motion.h1>
          <motion.p 
            className="text-xl text-yellow-50"
            variants={fadeInUp}
          >
            {t('philosophy.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Philosophy Overview */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <motion.div 
          className="max-w-4xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            {t('philosophy.mission.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-8"
            variants={fadeInUp}
          ></motion.div>
          
          <motion.div 
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8 shadow-xl"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400 text-center">
              {t('philosophy.mission.desc')}
            </h3>
            <p className="text-lg mb-6 text-gray-300 leading-relaxed font-medium text-center">
              {t('philosophy.vision.desc')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-yellow-400 transition-all"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-semibold mb-3 text-yellow-400">
                  {t('philosophy.values.v1')}
                </h4>
                <p className="text-gray-300">
                  {t('philosophy.values.v1')}
                </p>
              </motion.div>
              
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-yellow-400 transition-all"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-semibold mb-3 text-yellow-400">
                  {t('philosophy.values.v2')}
                </h4>
                <p className="text-gray-300">
                  {t('philosophy.values.v2')}
                </p>
              </motion.div>
              
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-yellow-400 transition-all"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl font-semibold mb-3 text-yellow-400">
                  {t('philosophy.values.v3')}
                </h4>
                <p className="text-gray-300">
                  {t('philosophy.values.v3')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-black text-white">
        <motion.div 
          className="max-w-5xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            {t('philosophy.values.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-10"
            variants={fadeInUp}
          ></motion.div>
          
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 font-bold text-xl mr-3">01</span>
                  <h3 className="text-yellow-400 text-xl font-bold">
                    {t('philosophy.values.v1')}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {t('philosophy.values.v1')}
                </p>
              </motion.div>
              
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 font-bold text-xl mr-3">02</span>
                  <h3 className="text-yellow-400 text-xl font-bold">
                    {t('philosophy.values.v2')}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {t('philosophy.values.v2')}
                </p>
              </motion.div>
              
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 font-bold text-xl mr-3">03</span>
                  <h3 className="text-yellow-400 text-xl font-bold">
                    {t('philosophy.values.v3')}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {t('philosophy.values.v3')}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Founder Message */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <motion.div 
          className="max-w-5xl mx-auto px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            {t('philosophy.mission.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-10"
            variants={fadeInUp}
          ></motion.div>
          
          <motion.div 
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8 shadow-xl"
            variants={fadeInUp}
          >
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
                  CEO
                </p>
                <p className="text-yellow-400 font-bold text-xl mt-1">
                  田中 太郎
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-black text-white">
        <motion.div 
          className="max-w-5xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            {t('philosophy.vision.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-10"
            variants={fadeInUp}
          ></motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-yellow-400 transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                {t('philosophy.values.v1')}
              </h3>
              <p className="text-gray-300">
                {t('philosophy.values.v1')}
              </p>
            </motion.div>
            
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-yellow-400 transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                {t('philosophy.values.v2')}
              </h3>
              <p className="text-gray-300">
                {t('philosophy.values.v2')}
              </p>
            </motion.div>
            
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-yellow-400 transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                {t('philosophy.values.v3')}
              </h3>
              <p className="text-gray-300">
                {t('philosophy.values.v3')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <motion.div 
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {t('contact.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg font-bold inline-block transition-transform duration-300"
              >
                {t('contact.form.submit')}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}