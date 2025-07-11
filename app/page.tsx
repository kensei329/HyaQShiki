'use client';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useLanguage } from './context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax } from 'react-parallax';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Slideshow data with 3 slides
  const slides = [
    {
      image: "/images/slide1.jpg",
      title: t('home.title'),
      subtitle: t('home.subtitle')
    },
    {
      image: "/images/slide2.jpg",
      title: t('home.slideshow.title2'),
      subtitle: t('home.slideshow.subtitle2')
    },
    {
      image: "/images/slide3.jpg",
      title: t('home.slideshow.title3'),
      subtitle: t('home.slideshow.subtitle3')
    }
  ];

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Slideshow auto-rotation
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000); // Change slide every 5 seconds
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
      clearInterval(interval);
    };
  }, [slides.length, isTransitioning]);

  // Slideshow navigation
  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 1000); // Transition duration
    }
  };

  return (
    <div className="font-['Poppins',sans-serif] bg-black text-white">
      <Header />

      {/* Hero Section with Slideshow */}
      <div className="relative w-full">
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="relative w-full"
            >
              <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={slides[currentSlide].image}
                bgImageAlt={`Slide ${currentSlide + 1} Background`}
                strength={400}
                className="min-h-[80vh] md:min-h-screen flex items-center justify-center"
                bgImageStyle={{
                  opacity: 0.5,
                  objectFit: 'cover',
                  objectPosition: 'center',
                  height: '100%',
                  width: '100%'
                }}
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
                  className="relative z-20 text-center max-w-4xl px-4 sm:px-6 py-8 md:py-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200 leading-tight"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94] // ふわふわとしたイージング
                    }}
                  >
                    {slides[currentSlide].title.split('\n').map((line, lineIdx, arr) => (
                      <motion.span
                        key={lineIdx}
                        initial={{ opacity: 0, y: 30, scale: 0.9, rotateX: -15 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                        transition={{ 
                          duration: 1.0, 
                          delay: 0.6 + lineIdx * 0.15,
                          ease: [0.34, 1.56, 0.64, 1] // バウンス効果付きのふわふわアニメーション
                        }}
                        style={{ display: 'inline-block' }}
                      >
                        {line.split('').map((char, charIdx) => (
                          <motion.span
                            key={charIdx}
                            initial={{ opacity: 0, y: 20, scale: 0.8, rotateY: -10 }}
                            animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                            transition={{ 
                              duration: 0.8, 
                              delay: 0.8 + lineIdx * 0.15 + charIdx * 0.05,
                              ease: [0.34, 1.56, 0.64, 1] // バウンス効果付きのふわふわアニメーション
                            }}
                            style={{ display: 'inline-block' }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </motion.span>
                        ))}
                        {lineIdx < arr.length - 1 && <br />}
                      </motion.span>
                    ))}
                  </motion.h1>
                  <motion.p 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-yellow-50 leading-relaxed mb-6 sm:mb-8 md:mb-10 text-left whitespace-pre-line"
                    initial={{ opacity: 0, y: 25, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 1.0, 
                      delay: 1.0,
                      ease: [0.25, 0.46, 0.45, 0.94] // ふわふわとしたイージング
                    }}
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 25, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 1.0, 
                      delay: 1.4,
                      ease: [0.34, 1.56, 0.64, 1] // バウンス効果付きのふわふわアニメーション
                    }}
                  >
                    <a 
                      href="#features" 
                      className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 text-sm sm:text-base transform-gpu touch-manipulation"
                    >
                      {t('learnMore')}
                    </a>
                  </motion.div>
                </motion.div>
              </Parallax>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Slideshow navigation dots */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 z-30 flex justify-center space-x-2 sm:space-x-3">
          {Array.from({ length: slides.length }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-6 h-6 mx-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 transform-gpu touch-manipulation ${
                currentSlide === index 
                  ? 'bg-yellow-400 scale-110' 
                  : 'bg-gray-400 bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>
      </div>

      {/* Features */}
      <section id="features" className="py-24 relative overflow-hidden bg-black">
        <div 
          className="max-w-6xl mx-auto px-6"
        >
          <h2 
            className="text-4xl font-bold text-center mb-4 text-white"
          >
            {t('home.reasons')}
          </h2>
          <div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-16"
          ></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                icon: 'fas fa-message', 
                title: 'home.communication', 
                desc: 'home.communication.desc',
                color: 'from-blue-400 to-blue-600'
              },
              { 
                icon: 'fas fa-code', 
                title: 'home.code', 
                desc: 'home.code.desc',
                color: 'from-purple-400 to-purple-600'
              },
              { 
                icon: 'crown', 
                title: 'home.certification', 
                desc: 'home.certification.desc',
                color: 'from-green-400 to-green-600'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-black rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group backdrop-blur-sm border border-gray-800"
              >
                <div 
                  className={`w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform rotate-3`}
                >
                  <i className={`fas fa-${feature.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">{t(feature.title)}</h3>
                <p className="text-gray-300 text-left whitespace-pre-line">{t(feature.desc)}</p>
                <div 
                  className="mt-6 w-10 h-1 bg-gray-800 mx-auto"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Quotes Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10 bg-repeat"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div
            className="text-center mb-16"
          >
            <div className="text-center w-full">
              <span
                className="text-yellow-400 font-bold text-2xl sm:text-3xl md:text-4xl leading-tight max-w-full w-full inline-block mb-4 break-words whitespace-normal px-4"
                style={{ wordBreak: 'break-word', lineHeight: '1.2' }}
              >
                {t('promo.section.title')}
              </span>
            </div>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <div className="flex justify-center w-full">
              <span className="text-lg text-gray-300 max-w-lg w-full text-left inline-block">
              {t('promo.section.subtitle')}
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-16">
            {[
              { label: t('promo.title1'), icon: 'comments' },
              { label: t('promo.title2'), icon: 'keyboard' },
              { label: t('promo.title3'), icon: 'lightbulb' }
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center px-8 py-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 shadow-xl min-w-[260px]"
              >
                <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <i className={`fas fa-${item.icon} text-4xl text-gray-900`}></i>
                </div>
                <div className="text-yellow-400 text-2xl md:text-3xl font-extrabold mb-2 tracking-wide whitespace-pre-line">
                  {item.label}
                </div>
              </div>
            ))}
          </div>


        </div>
        <div className="text-center mt-8">
          <Link 
            href="/curriculum" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[48px] min-w-[200px] bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 transform-gpu touch-manipulation"
          >
            {t('home.methodology.viewCurriculum')}
            <i className="fas fa-arrow-right"></i>
          </Link>
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
              { title: 'Silver', desc: 'home.silver', passRate: '72%', bg: 'bg-gradient-to-br from-gray-400 to-gray-600', textColor: 'text-white', icon: 'medal' },
              { title: 'Gold', desc: 'home.gold', passRate: '48%', bg: 'bg-gradient-to-br from-yellow-500 to-amber-600', textColor: 'text-white', icon: 'trophy' },
              { title: 'Platina', desc: 'home.platina', passRate: '26%', bg: 'bg-gradient-to-br from-gray-100 to-gray-300', textColor: 'text-gray-900', icon: 'gem' },
              { title: 'Black', desc: 'home.black', passRate: '9%', bg: 'bg-gradient-to-br from-gray-900 to-black', textColor: 'text-white', icon: 'crown' }
            ].map((cert, index) => (
              <div 
                key={index}
                className="group perspective"
              >
                <div 
                  className={`rounded-xl overflow-hidden shadow-lg ${cert.title === 'Black' ? 'shadow-yellow-500/20' : ''} h-full transform-gpu transition-all duration-500 group-hover:shadow-2xl border border-gray-800`}
                >
                  <div className={`${cert.bg} h-24 relative flex items-center justify-center`}>
                    <i className={`fas fa-${cert.icon} text-4xl ${cert.title === 'Platina' ? 'text-gray-900' : 'text-white'}`}></i>
                    <div className="absolute -bottom-5 right-5 w-20 h-20 rounded-full bg-black/80 backdrop-blur-sm border border-gray-700 shadow-lg flex flex-col items-center justify-center">
                      <span className={`text-sm font-semibold ${cert.title === 'Platina' ? 'text-gray-200' : 'text-white'}`}>{t('passRate')}</span>
                      <span className={`text-lg font-bold ${cert.title === 'Gold' ? 'text-yellow-500' : cert.title === 'Platina' ? 'text-gray-200' : 'text-white'}`}>{cert.passRate}</span>
                    </div>
                  </div>
                  <div className="p-8 bg-black flex-grow flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs font-semibold mb-6 backdrop-blur-sm">CERTIFICATION</span>
                      <h3 className={`text-2xl font-bold mb-4 ${cert.title === 'Gold' ? 'text-yellow-500' : cert.title === 'Platina' ? 'text-gray-200' : cert.textColor}`}>{cert.title}</h3>
                      <p className="text-gray-300 opacity-90 mb-6">{t(cert.desc)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <Link href="/certification" className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] min-w-[120px] bg-white/10 rounded-lg text-white backdrop-blur-sm hover:bg-yellow-500 transition-all duration-300 hover:scale-105 active:scale-95 transform-gpu touch-manipulation">
                        {t('learnMore')}
                      </Link>
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                      >
                        <i className="fas fa-arrow-right text-yellow-400"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-24 relative overflow-hidden bg-black">
        <div className="absolute -top-40 -left-40 w-96 h-96  rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96  rounded-full opacity-30 blur-3xl"></div>
        
        <div 
          className="max-w-3xl mx-auto px-6 text-center relative z-10"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-700 text-yellow-100 text-xs font-semibold mb-6">
            {t('home.satisfaction.badge')}
          </span>
          <h2 className="text-4xl font-bold mb-6 text-white">{t('home.guarantee')}</h2>
          <p className="text-xl mb-10 text-gray-300 leading-relaxed">{t('home.guarantee.desc')}</p>
          
          <div className="relative inline-block max-w-xs w-full mx-auto">
              <img 
                src="/images/satisfaction-guarantee.png" 
                alt="Guarantee" 
              className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto drop-shadow-xl"
              />
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">✓</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
            <Link 
              href="/pricing" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[48px] min-w-[200px] bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 transform-gpu touch-manipulation"
            >
              {t('curriculum.cta.pricing')}
              <i className="fas fa-arrow-right"></i>
            </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}