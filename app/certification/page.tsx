'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
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
            <div 
              className="relative z-20 text-center max-w-4xl px-6"
            >
              <h1 
                className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200"
              >
                {t('certification.title')}
              </h1>
              <p 
                className="text-xl md:text-2xl font-light text-yellow-50 mb-6"
              >
                {t('certification.subtitle')}
              </p>
            </div>
          </Parallax>
        </div>

        {/* Certification Overview */}
        <section className="py-24 relative overflow-hidden bg-black">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-bg.png')] opacity-5 bg-repeat"></div>
          <div 
            className="max-w-6xl mx-auto px-6 relative z-10"
          >
            <h2 
              className="text-4xl font-bold text-center mb-4"
            >
              {t('certification.about')}
            </h2>
            <div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-6"
            ></div>
            
            <div 
              className="backdrop-blur-md bg-white/5 rounded-xl p-8 md:p-12 mt-10"
            >
              <p className="text-xl text-center mb-12 leading-relaxed">
                {t('certification.desc')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[1,2].map((idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-6 border-l-4 border-yellow-500">
                    <div className="bg-yellow-500 text-black font-semibold w-8 h-8 rounded-full flex items-center justify-center mb-4">{idx}</div>
                    <h3 className="text-lg font-semibold mb-2">{t(`certification.overview.point${idx}.title`)}</h3>
                    <p className="text-gray-200 leading-relaxed">{t(`certification.overview.point${idx}.desc`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
      <section className="py-24 text-white relative bg-black">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-bg.png')] opacity-5 bg-repeat"></div>
        <div 
          className="max-w-6xl mx-auto px-6 relative z-10"
        >
          <h2 
            className="text-4xl font-bold text-center mb-4"
          >
            {t('home.certifications')}
          </h2>
          <div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-6"
          ></div>
          <p
            className="text-center text-gray-300 max-w-2xl mx-auto mb-16"
          >
            {t('home.certifications.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t('certification.silver.title'), desc: 'certification.silver.desc', passRate: '72%', bg: 'bg-gradient-to-br from-gray-400 to-gray-600', textColor: 'text-white', icon: 'medal' },
              { title: t('certification.gold.title'), desc: 'certification.gold.desc', passRate: '48%', bg: 'bg-gradient-to-br from-yellow-500 to-amber-600', textColor: 'text-white', icon: 'trophy' },
              { title: t('certification.platina.title'), desc: 'certification.platina.desc', passRate: '26%', bg: 'bg-gradient-to-br from-gray-100 to-gray-300', textColor: 'text-gray-900', icon: 'gem' },
              { title: t('certification.black.title'), desc: 'certification.black.desc', passRate: '9%', bg: 'bg-gradient-to-br from-gray-900 to-black', textColor: 'text-white', icon: 'crown' }
            ].map((cert, index) => (
              <div 
                key={index}
                className="group perspective"
              >
                <div 
                  className={`rounded-xl overflow-hidden shadow-lg ${cert.title === t('certification.black.title') ? 'shadow-yellow-500/20' : ''} h-full transform-gpu transition-all duration-500 group-hover:shadow-2xl border border-gray-800`}
                >
                  <div className={`${cert.bg} h-24 relative flex items-center justify-center`}>
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/images/certificate-pattern.png')]"></div>
                    <i className={`fas fa-${cert.icon} text-4xl ${cert.title === t('certification.platina.title') ? 'text-gray-900' : 'text-white'}`}></i>
                    <div className="absolute -bottom-5 right-5 w-20 h-20 rounded-full bg-black/80 backdrop-blur-sm border border-gray-700 shadow-lg flex flex-col items-center justify-center">
                      <span className={`text-sm font-semibold ${cert.title === t('certification.platina.title') ? 'text-gray-200' : 'text-white'}`}>{t('passRate')}</span>
                      <span className={`text-lg font-bold ${cert.title === t('certification.gold.title') ? 'text-yellow-500' : cert.title === t('certification.platina.title') ? 'text-gray-200' : 'text-white'}`}>{cert.passRate}</span>
                    </div>
                  </div>
                  <div className="p-8 bg-black flex-grow flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs font-semibold mb-6 backdrop-blur-sm">CERTIFICATION</span>
                      <h3 className={`text-2xl font-bold mb-4 ${cert.title === t('certification.gold.title') ? 'text-yellow-500' : cert.title === t('certification.platina.title') ? 'text-gray-200' : cert.textColor}`}>{cert.title}</h3>
                      <p className="text-gray-300 opacity-90 mb-6">{t(cert.desc)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Evaluation Process */}
        <section className="py-24 relative overflow-hidden bg-black">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-bg.png')] opacity-5 bg-repeat"></div>
          
          <div 
            className="max-w-6xl mx-auto px-6 relative z-10"
          >
            <h2 
              className="text-4xl font-bold text-center mb-4"
            >
              {t('certification.evaluation.method')}
            </h2>
            <div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-14"
            ></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {['certification.eval.item1','certification.eval.item2','certification.eval.item3'].map((key, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-8 border border-yellow-400 shadow-lg hover:shadow-2xl transition-all duration-300 text-left">
                  <div className="flex justify-center mb-4">
                    <div className="bg-yellow-400 text-black w-14 h-14 flex items-center justify-center rounded-full text-3xl">
                      <i className={`fas ${['fa-file-alt','fa-code','fa-users'][index]}`}></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-400 text-left">
                    {t(key)}
                  </h3>
                  <p className="text-gray-200 text-left leading-relaxed">
                    {t(`${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificate Details */}
        <section className="py-24 relative overflow-hidden bg-black">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-30 blur-3xl"></div>
          
          <div 
            className="max-w-6xl mx-auto px-6 relative z-10"
          >
            <h2 
              className="text-4xl font-bold text-center mb-4"
            >
              {t('certification.certificate.about')}
            </h2>
            <div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-14"
            ></div>
            
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div 
                className="md:w-1/2"
              >
                <div
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
                </div>
              </div>
              
              <div 
                className="md:w-1/2 backdrop-blur-md bg-white/5 rounded-xl p-8 border border-gray-800"
              >
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                  {t('certification.certificate.format')}
                </h3>
                <p className="mb-4 text-gray-200">
                  {t('certification.certificate.desc')}
                </p>
                <ul className="mb-8 space-y-2">
                  {[1,2,3].map((idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-200">
                        {t(`certification.certificate.detail${idx}`)}
                      </span>
                    </li>
                  ))}
                </ul>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {t('certification.certificate.cycle')}
                </h3>
                <p className="mb-4 text-gray-200">
                  {t('certification.certificate.validity')}
                </p>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {t('certification.certificate.renewal')}
                </h3>
                <ul className="mb-4 space-y-2">
                  {[1,2].map((idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-200">
                        {t(`certification.certificate.renewal${idx}`)}
                      </span>
                    </li>
                  ))}
                </ul>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {t('certification.certificate.expiration')}
                </h3>
                <p className="text-gray-200">
                  {t('certification.certificate.expirationInfo')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Fees */}
        <section className="py-24 relative overflow-hidden bg-black">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-bg.png')] opacity-5 bg-repeat"></div>
          
          <div 
            className="max-w-6xl mx-auto px-6 relative z-10"
          >
            <h2 
              className="text-4xl font-bold text-center mb-4"
            >
              {t('certification.exam.fees')}
            </h2>
            <div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-6"
            ></div>
            <p 
              className="text-center mb-14 max-w-3xl mx-auto text-gray-300"
            >
              {certificationFeeSection.description[language]}
            </p>
            
            <div 
              className="overflow-hidden rounded-xl shadow-xl"
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
                        {certificationFeeSection.tableHeaders.renewal[language]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {certificationFees.map((fee, idx) => (
                      <tr key={`fee-${idx}`}
                        className={`border-b border-gray-800 hover:bg-white/5 transition-colors duration-200 ${idx % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                      >
                        <td className="py-4 px-6 font-semibold">{t(`certification.${fee.rank.toLowerCase()}.title`)}</td>
                        <td className="py-4 px-6 text-yellow-400 font-semibold">{fee.fee}</td>
                        <td className="py-4 px-6">{t('certification.certificate.renewal')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-yellow-500 to-yellow-600 text-black">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-400 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-400 rounded-full opacity-30 blur-3xl"></div>
          
          <div 
            className="max-w-4xl mx-auto px-6 text-center relative z-10"
          >
            <h2 
              className="text-4xl font-bold mb-4"
            >
              {t('certification.cta.title')}
            </h2>
            <p 
              className="text-xl mb-10 opacity-90 max-w-3xl mx-auto"
            >
              {t('certification.cta.subtitle')}
            </p>
            <div
            >
              <Link 
                href="/pricing" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-black hover:bg-gray-800 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 transform-gpu touch-manipulation"
              >
                <span>
                  {t('certification.cta.apply')}
                </span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}