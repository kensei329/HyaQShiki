'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

export default function PricingPage() {
  const { t, language } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
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
  
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  
  
  return (
    <div className="font-['Poppins',sans-serif] bg-black text-white">
      <Header />

      <main>
        {/* Hero */}
        <div className="relative w-full">
          <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage="/images/slide1.jpg"
            bgImageAlt="Pricing Background"
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
            <motion.div 
              className="relative z-20 text-center max-w-4xl px-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200"
                variants={fadeInUp}
              >
                {t('pricing.title')}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl font-light text-yellow-50 mb-6"
                variants={fadeInUp}
              >
                {t('pricing.subtitle')}
              </motion.p>
            </motion.div>
          </Parallax>
        </div>

        {/* Pricing Plans */}
        <section className="py-24 relative overflow-hidden bg-black">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-bg.png')] opacity-5 bg-repeat"></div>
          <motion.div 
            className="max-w-6xl mx-auto px-6 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl font-bold text-center mb-4"
              variants={fadeInUp}
            >
              {t('pricing.plans.title')}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-6"
              variants={fadeInUp}
            ></motion.div>
            <motion.p
              className="text-center text-gray-300 max-w-2xl mx-auto mb-16"
              variants={fadeInUp}
            >
              {t('pricing.plans.desc')}
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-10">
              {/* Basic Plan - Featured */}
              <motion.div 
                className="backdrop-blur-md bg-white/5 border-2 border-yellow-500 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 rounded-bl-lg font-medium">
                  <span className="mr-1">{t('pricing.plans.basic.badge')}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  <span className="block">{t('pricing.plans.basic.title')}</span>
                  <span className="block text-sm mt-1 text-gray-400">
                    {t('pricing.plans.basic.label')}
                  </span>
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-yellow-400">{t('pricing.plans.basic.price')}</span>
                  <span className="text-lg text-yellow-400">{t('pricing.plans.basic.currency')}</span>
                  <p className="text-gray-400">{t('pricing.plans.basic.tax')}</p>
                </div>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.basic.feature1')}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.basic.feature2')}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.basic.feature3')}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.basic.feature4')}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.basic.feature5')}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.basic.feature6')}</span>
                    </div>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-3 px-4 rounded-lg text-center transition-all duration-300 hover:scale-105">
                  <span className="block">{t('pricing.plans.basic.cta')}</span>
                </Link>
              </motion.div>
              
              {/* Monthly Plan */}
              <motion.div 
                className="backdrop-blur-md bg-white/5 border border-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="text-xl font-bold mb-4">
                  <span className="block">{t('pricing.plans.monthly.title')}</span>
                  <span className="block text-sm mt-1 text-gray-400">
                    {t('pricing.plans.monthly.label')}
                  </span>
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-yellow-400">{t('pricing.plans.monthly.price')}</span>
                  <span className="text-lg text-yellow-400">{t('pricing.plans.monthly.currency')}</span>
                  <p className="text-gray-400">{t('pricing.plans.monthly.tax')}</p>
                </div>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.monthly.feature1')}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.monthly.feature2')}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.monthly.feature3')}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.monthly.feature4')}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.monthly.feature5')}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.monthly.feature6')}</span>
                    </div>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full bg-transparent hover:bg-white/10 text-yellow-400 font-bold py-3 px-4 rounded-lg border border-yellow-400 text-center transition-all duration-300 hover:scale-105">
                  <span className="block">{t('pricing.plans.monthly.cta')}</span>
                </Link>
              </motion.div>
              
              {/* Sponsor Plan */}
              <motion.div 
                className="backdrop-blur-md bg-white/5 border border-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="text-xl font-bold mb-4">
                  <span className="block">{t('pricing.plans.sponsor.title')}</span>
                  <span className="block text-sm mt-1 text-gray-400">
                    {t('pricing.plans.sponsor.label')}
                  </span>
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-yellow-400">{t('pricing.plans.sponsor.price')}</span>
                  <p className="text-gray-400">{t('pricing.plans.sponsor.tax')}</p>
                </div>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.sponsor.feature1')}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.sponsor.feature2')}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.sponsor.feature3')}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.sponsor.feature4')}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.sponsor.feature5')}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span className="block text-gray-200">{t('pricing.plans.sponsor.feature6')}</span>
                    </div>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full bg-transparent hover:bg-white/10 text-yellow-400 font-bold py-3 px-4 rounded-lg border border-yellow-400 text-center transition-all duration-300 hover:scale-105">
                  <span className="block">{t('pricing.plans.sponsor.cta')}</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Satisfaction Guarantee */}
        <section className="py-24 relative overflow-hidden bg-black">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-30 blur-3xl"></div>
          
          <motion.div 
            className="max-w-6xl mx-auto px-6 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >

            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-6"
              variants={fadeInUp}
            ></motion.div>
            <motion.h3
              className="text-center text-2xl font-bold text-white mb-14"
              variants={fadeInUp}
            >
              {t('pricing.satisfaction.title')}
            </motion.h3>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div 
                className="md:w-1/3"
                variants={fadeInUp}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                  className="relative"
                >
                  <Image 
                    src="/images/satisfaction-guarantee.png" 
                    alt={t('pricing.satisfaction.alt')} 
                    width={300} 
                    height={300} 
                    className="mx-auto drop-shadow-xl" 
                  />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">✓</span>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="md:w-2/3 backdrop-blur-md bg-white/5 border border-gray-800 rounded-xl p-8 shadow-xl"
                variants={fadeInUp}
              >
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                  {t('pricing.satisfaction.guarantee')}
                </h3>
                <p className="mb-6 text-gray-300 leading-relaxed">
                  {t('pricing.satisfaction.desc')}
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center">
                      <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">1</span>
                      {t('pricing.satisfaction.eligibility')}
                    </h4>
                    <ul className="mb-4 space-y-2 pl-10">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="block text-gray-300">{t('pricing.guarantee.conditions.condition1')}</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="block text-gray-300">{t('pricing.guarantee.conditions.condition2')}</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="block text-gray-300">{t('pricing.guarantee.conditions.condition3')}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center">
                      <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">2</span>
                      {t('pricing.satisfaction.application')}
                    </h4>
                    <p className="mb-4 text-gray-300 pl-10">
                      {t('pricing.satisfaction.application.desc')}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center">
                      <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">3</span>
                      {t('pricing.satisfaction.refund')}
                    </h4>
                    <p className="mb-4 text-gray-300 pl-10">
                      {t('pricing.satisfaction.refund.desc')}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 bg-white/5 p-4 rounded-lg border border-yellow-500/20">
                  <h4 className="text-lg font-bold mb-3 text-yellow-400">
                    {t('pricing.satisfaction.notes')}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                      <span className="block text-gray-300">{t('pricing.guarantee.notes.note1')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                      <span className="block text-gray-300">{t('pricing.guarantee.notes.note2')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                      <span className="block text-gray-300">{t('pricing.guarantee.notes.note3')}</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Payment Options */}
        <section className="py-24 relative overflow-hidden bg-black">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-bg.png')] opacity-5 bg-repeat"></div>
          <motion.div 
            className="max-w-6xl mx-auto px-6 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl font-bold text-center mb-4"
              variants={fadeInUp}
            >
              {t('pricing.payment.title')}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-14"
              variants={fadeInUp}
            ></motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="backdrop-blur-md bg-white/5 border border-gray-800 rounded-xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="text-5xl mb-6 text-yellow-400"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 2, 0, -2, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  💳
                </motion.div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent mb-6"></div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">
                  {t('pricing.payment.method1.title')}
                </h3>
                <p className="text-gray-300">
                  {t('pricing.payment.method1.desc')}
                </p>
              </motion.div>

              <motion.div 
                className="backdrop-blur-md bg-white/5 border border-gray-800 rounded-xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="text-5xl mb-6 text-yellow-400"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 2, 0, -2, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  🏦
                </motion.div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent mb-6"></div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">
                  {t('pricing.payment.method2.title')}
                </h3>
                <p className="text-gray-300">
                  {t('pricing.payment.method2.desc')}
                </p>
              </motion.div>

              <motion.div 
                className="backdrop-blur-md bg-white/5 border border-gray-800 rounded-xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="text-5xl mb-6 text-yellow-400"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 2, 0, -2, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  💸
                </motion.div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent mb-6"></div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">
                  {t('pricing.payment.method3.title')}
                </h3>
                <p className="text-gray-300">
                  {t('pricing.payment.method3.desc')}
                </p>
              </motion.div>
            </div>
            
            <motion.p 
              className="text-center mt-8 text-gray-400 backdrop-blur-md bg-white/5 border border-gray-800 rounded-lg p-4 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              {t('pricing.payment.note')}
            </motion.p>
          </motion.div>
        </section>

        {/* FAQ Preview */}
        <section className="py-24 relative overflow-hidden bg-black">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-30 blur-3xl"></div>
          
          <motion.div 
            className="max-w-4xl mx-auto px-6 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl font-bold text-center mb-4"
              variants={fadeInUp}
            >
              {t('pricing.faq.title')}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-14"
              variants={fadeInUp}
            ></motion.div>
            
            <div className="space-y-4">
              <motion.div 
                key={0} 
                className="backdrop-blur-md bg-white/5 border border-gray-800 rounded-xl overflow-hidden shadow-xl"
                variants={fadeInUp}
              >
                <motion.button 
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none group"
                  onClick={() => toggleFaq(0)}
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors duration-300">
                    <span className="block">{t('pricing.faq.q1')}</span>
                  </h3>
                  <motion.div 
                    className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 ml-4"
                    animate={{ 
                      rotate: openFaqIndex === 0 ? 180 : 0,
                      backgroundColor: openFaqIndex === 0 ? 'rgba(234, 179, 8, 0.4)' : 'rgba(234, 179, 8, 0.2)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg 
                      className="w-5 h-5 text-yellow-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </motion.div>
                </motion.button>
                <motion.div 
                  className="overflow-hidden"
                  animate={{ 
                    height: openFaqIndex === 0 ? 'auto' : 0,
                    opacity: openFaqIndex === 0 ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="p-6 pt-0 text-gray-300 border-t border-gray-800">
                    <span className="block leading-relaxed">{t('pricing.faq.a1')}</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                key={1} 
                className="backdrop-blur-md bg-white/5 border border-gray-800 rounded-xl overflow-hidden shadow-xl"
                variants={fadeInUp}
              >
                <motion.button 
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none group"
                  onClick={() => toggleFaq(1)}
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors duration-300">
                    <span className="block">{t('pricing.faq.q2')}</span>
                  </h3>
                  <motion.div 
                    className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 ml-4"
                    animate={{ 
                      rotate: openFaqIndex === 1 ? 180 : 0,
                      backgroundColor: openFaqIndex === 1 ? 'rgba(234, 179, 8, 0.4)' : 'rgba(234, 179, 8, 0.2)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg 
                      className="w-5 h-5 text-yellow-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </motion.div>
                </motion.button>
                <motion.div 
                  className="overflow-hidden"
                  animate={{ 
                    height: openFaqIndex === 1 ? 'auto' : 0,
                    opacity: openFaqIndex === 1 ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="p-6 pt-0 text-gray-300 border-t border-gray-800">
                    <span className="block leading-relaxed">{t('pricing.faq.a2')}</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                key={2} 
                className="backdrop-blur-md bg-white/5 border border-gray-800 rounded-xl overflow-hidden shadow-xl"
                variants={fadeInUp}
              >
                <motion.button 
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none group"
                  onClick={() => toggleFaq(2)}
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors duration-300">
                    <span className="block">{t('pricing.faq.q3')}</span>
                  </h3>
                  <motion.div 
                    className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 ml-4"
                    animate={{ 
                      rotate: openFaqIndex === 2 ? 180 : 0,
                      backgroundColor: openFaqIndex === 2 ? 'rgba(234, 179, 8, 0.4)' : 'rgba(234, 179, 8, 0.2)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg 
                      className="w-5 h-5 text-yellow-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </motion.div>
                </motion.button>
                <motion.div 
                  className="overflow-hidden"
                  animate={{ 
                    height: openFaqIndex === 2 ? 'auto' : 0,
                    opacity: openFaqIndex === 2 ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="p-6 pt-0 text-gray-300 border-t border-gray-800">
                    <span className="block leading-relaxed">{t('pricing.faq.a3')}</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-yellow-500 to-yellow-600 text-black">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-400 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-400 rounded-full opacity-30 blur-3xl"></div>
          
          <motion.div 
            className="max-w-4xl mx-auto px-6 text-center relative z-10"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('pricing.cta.title')}
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 opacity-90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t('pricing.cta.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-black hover:bg-gray-800 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>{t('pricing.cta.button')}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
