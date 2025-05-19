'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

export default function CertificationPage() {
  const { 
    t, 
    language, 
    certificationLevels, 
    evaluationProcesses, 
    guaranteeConditions, 
    certificateDetails, 
    getCertificationFees,
    certificationHero,
    certificationOverview,
    certificationEvaluation,
    certificationCertificate,
    certificationCTA,
    certificationFeeSection
  } = useLanguage();
  
  useEffect(() => {
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
  
  // Get certification fees with proper language handling
  const certificationFees = getCertificationFees(language);
  
  return (
    <div className="font-['Poppins',sans-serif] bg-black text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <div className="relative w-full">
          <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage="/images/slide3.jpg"
            bgImageAlt="Certification Background"
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
                {certificationHero.title[language]}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl font-light text-yellow-50 mb-6"
                variants={fadeInUp}
              >
                {certificationHero.subtitle[language]}
              </motion.p>
            </motion.div>
          </Parallax>
        </div>

        {/* Certification Overview */}
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
              {certificationOverview.title[language]}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-6"
              variants={fadeInUp}
            ></motion.div>
            
            <motion.div 
              className="backdrop-blur-md bg-white/5 rounded-xl p-8 md:p-12 mt-10"
              variants={fadeInUp}
            >
              <p className="text-xl text-center mb-12 leading-relaxed">
                {certificationOverview.description[language]}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {certificationOverview.points.slice(0, 2).map((point, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-6 border-l-4 border-yellow-500">
                    <div className="bg-yellow-500 text-black font-semibold w-8 h-8 rounded-full flex items-center justify-center mb-4">{index + 1}</div>
                    <h3 className="text-lg font-semibold mb-2">{point.title[language]}</h3>
                    <p className="text-gray-200 leading-relaxed">{point.description[language]}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Certification Levels */}
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
            <motion.h2 
              className="text-4xl font-bold text-center mb-4"
              variants={fadeInUp}
            >
              {t('certification.ranks')}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-14"
              variants={fadeInUp}
            ></motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certificationLevels.map((level, index) => (
                <motion.div 
                  key={index} 
                  className={`rounded-xl border ${level.borderClass} overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${level.bgClass} ${level.textClass || 'text-white'}`}
                  variants={fadeInUp}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">
                      {level.title[language]}
                    </h3>
                    <p className="text-sm font-semibold mb-4">
                      {level.passRate[language]}
                    </p>
                    <p className="mb-4 text-sm">
                      {level.description[language]}
                    </p>
                    <h4 className="font-semibold text-left mb-2">
                      {t('certification.evaluation.criteria')}
                    </h4>
                    <ul className="text-left text-sm space-y-1">
                      {level.criteria.map((criterion, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>
                            {criterion[language]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Evaluation Process */}
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
              {certificationEvaluation.title[language]}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-14"
              variants={fadeInUp}
            ></motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {certificationEvaluation.processes.map((process, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white/5 rounded-xl p-8 border border-yellow-400 shadow-lg hover:shadow-2xl transition-all duration-300 text-left"
                  variants={fadeInUp}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-yellow-400 text-black w-14 h-14 flex items-center justify-center rounded-full text-3xl">
                      <i className={`fas ${process.icon}`}></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-400 text-left">
                    {process.title[language]}
                  </h3>
                  <p className="text-gray-200 text-left leading-relaxed">
                    {process.description[language]}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Certificate Details */}
        <section className="py-24 relative overflow-hidden bg-black">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-30 blur-3xl"></div>
          
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
              {certificationCertificate.title[language]}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-14"
              variants={fadeInUp}
            ></motion.div>
            
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                className="md:w-1/2"
                variants={fadeInUp}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl shadow-xl border border-yellow-500/20"
                >
                  <Image 
                    src={certificationCertificate.sampleImage.src}
                    alt={certificationCertificate.sampleImage.alt[language]}
                    width={certificationCertificate.sampleImage.width}
                    height={certificationCertificate.sampleImage.height}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2 backdrop-blur-md bg-white/5 rounded-xl p-8 border border-gray-800"
                variants={fadeInUp}
              >
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                  {t('certification.certificate.format')}
                </h3>
                <p className="mb-4 text-gray-200">
                  {certificationCertificate.description[language]}
                </p>
                <ul className="mb-8 space-y-2">
                  {certificationCertificate.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-200">
                        {detail[language]}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {t('certification.certificate.cycle')}
                </h3>
                <p className="mb-4 text-gray-200">
                  {certificationCertificate.validityPeriod[language]}
                </p>
                
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {t('certification.certificate.renewal')}
                </h3>
                <ul className="mb-4 space-y-2">
                  {certificationCertificate.renewalInfo.map((info, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-200">
                        {info[language]}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {t('certification.certificate.expiration')}
                </h3>
                <p className="text-gray-200">
                  {certificationCertificate.expirationInfo[language]}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Certification Fees */}
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
              {certificationFeeSection.title[language]}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-6"
              variants={fadeInUp}
            ></motion.div>
            <motion.p 
              className="text-center mb-14 max-w-3xl mx-auto text-gray-300"
              variants={fadeInUp}
            >
              {certificationFeeSection.description[language]}
            </motion.p>
            
            <motion.div 
              className="overflow-hidden rounded-xl shadow-xl"
              variants={fadeInUp}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-900 to-gray-800">
                      <th className="py-4 px-6 text-left text-yellow-400 font-bold">
                        {certificationFeeSection.tableHeaders.rank[language]}
                      </th>
                      <th className="py-4 px-6 text-left text-yellow-400 font-bold">
                        {certificationFeeSection.tableHeaders.fee[language]}
                      </th>
                      <th className="py-4 px-6 text-left text-yellow-400 font-bold">
                        {certificationFeeSection.tableHeaders.passRate[language]}
                      </th>
                      <th className="py-4 px-6 text-left text-yellow-400 font-bold">
                        {certificationFeeSection.tableHeaders.renewal[language]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {certificationFees.map((fee, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-gray-800 hover:bg-white/5 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                      >
                        <td className="py-4 px-6">{fee.rank}</td>
                        <td className="py-4 px-6">{fee.fee}</td>
                        <td className="py-4 px-6">{fee.passRate}</td>
                        <td className="py-4 px-6">{fee.renewal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
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
              {certificationCTA.title[language]}
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 opacity-90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {certificationCTA.subtitle[language]}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/pricing" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-black hover:bg-gray-800 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>
                  {certificationCTA.buttonText[language]}
                </span>
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