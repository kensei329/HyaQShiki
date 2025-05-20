'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function Corporate() {
  const { t, language, corporateTestimonials } = useLanguage();
  const isJapanese = language === 'ja';
  const [currentStep, setCurrentStep] = useState(1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null, null, null]);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionStartRef = useRef<HTMLDivElement | null>(null);
  const sectionEndRef = useRef<HTMLDivElement | null>(null);
  const [isInFlowSection, setIsInFlowSection] = useState(false);
  
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
  
  // Calculate the progress percentage
  const progressPercent = `${(currentStep - 1) * 20}%`;

  // Handler for progress steps
  const handleStepClick = (step: number) => {
    setCurrentStep(step);
    // Smooth scroll to the selected step
    stepRefs.current[step - 1]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Add intersection observer to detect section visibility
  useEffect(() => {
    const progressContainer = document.getElementById('flow-progress-container');
    const headerHeight = 80; // Approximate header height
    
    // Observer for the start of the Flow section
    const sectionStartObserver = new IntersectionObserver(
      ([entry]) => {
        // When we enter the section
        setIsInFlowSection(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setIsSticky(false);
        }
      },
      { 
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0.1
      }
    );
    
    // Observer for the end of the Flow section
    const sectionEndObserver = new IntersectionObserver(
      ([entry]) => {
        // When we reach the end of the section
        if (entry.isIntersecting) {
          setIsInFlowSection(false);
          setIsSticky(false);
        }
      },
      {
        rootMargin: `-${headerHeight}px 0px -100% 0px`,
        threshold: 0.1
      }
    );
    
    // Observer for making the progress bar sticky
    const stickyObserver = new IntersectionObserver(
      ([entry]) => {
        // Only make it sticky if we're within the Flow section
        if (isInFlowSection) {
          setIsSticky(!entry.isIntersecting);
        } else {
          setIsSticky(false);
        }
      },
      { 
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0.1
      }
    );
    
    // Observe the Flow section
    if (sectionRef.current) {
      sectionStartObserver.observe(sectionRef.current);
    }
    
    // Observe the end marker of the Flow section
    if (sectionEndRef.current) {
      sectionEndObserver.observe(sectionEndRef.current);
    }
    
    // Observe the progress container for sticky behavior
    if (progressContainer) {
      stickyObserver.observe(progressContainer);
    }
    
    // Create observers for each step section
    const stepObservers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setCurrentStep(index + 1);
          }
        },
        { 
          rootMargin: `-${headerHeight + 50}px 0px -50% 0px`,
          threshold: 0.1
        }
      );
      
      observer.observe(ref);
      return observer;
    });
    
    return () => {
      stickyObserver.disconnect();
      sectionStartObserver.disconnect();
      sectionEndObserver.disconnect();
      stepObservers.forEach(obs => obs?.disconnect());
    };
  }, [isInFlowSection]);
  
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
            {t('corporate.title')}
          </motion.h1>
          <motion.p 
            className="text-xl text-yellow-50"
            variants={fadeInUp}
          >
            {t('corporate.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Sponsor Overview */}
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
            {t('corporate.sponsor.title')}
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
              {t('corporate.sponsor.subtitle')}
            </h3>
            <div className="grid md:grid-cols-1 gap-6">
              <div>
                <p className="text-lg mb-6 text-gray-300 leading-relaxed font-medium text-center">
                  {t('corporate.sponsor.desc')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <motion.div 
                    className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-400 transition-all"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <span className="text-yellow-400 font-bold text-xl inline-block mb-3">01</span>
                    <p className="text-gray-300">
                      {t('corporate.sponsor.item1')}
                    </p>
                  </motion.div>
                  <motion.div 
                    className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-400 transition-all"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <span className="text-yellow-400 font-bold text-xl inline-block mb-3">02</span>
                    <p className="text-gray-300">
                      {t('corporate.sponsor.item2')}
                    </p>
                  </motion.div>
                </div>
              </div>
        </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits */}
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
            {t('corporate.benefits.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-10"
            variants={fadeInUp}
          ></motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">
                {t('corporate.benefits.b1.title')}
              </h3>
              <p className="text-gray-300">
                {t('corporate.benefits.b1.desc')}
              </p>
            </motion.div>
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">
                {t('corporate.benefits.b2.title')}
              </h3>
              <p className="text-gray-300">
                {t('corporate.benefits.b2.desc')}
              </p>
            </motion.div>
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">
                {t('corporate.benefits.b3.title')}
              </h3>
              <p className="text-gray-300">
                {t('corporate.benefits.b3.desc')}
              </p>
            </motion.div>
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-3">
                {t('corporate.benefits.b3.title')}
              </h3>
              <p className="text-gray-300">
                {t('corporate.benefits.b3.desc')}
              </p>
            </motion.div>
            </div>
        </motion.div>
      </section>

      {/* Education Integration */}
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
            {t('corporate.title')}
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
              {t('corporate.subtitle')}
            </h3>
            <p className="text-lg mb-10 text-gray-300 text-center max-w-3xl mx-auto">
              {t('corporate.sponsor.desc')}
            </p>
            
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 mb-8"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <h4 className="text-yellow-400 mb-4 text-xl">
                {t('corporate.sponsor.subtitle')}
              </h4>
              <div className="flex flex-wrap gap-4">
                <span className="bg-yellow-400 bg-opacity-10 text-white px-4 py-2 rounded-full border border-yellow-400 border-opacity-30 hover:bg-opacity-20 transition-all transform hover:-translate-y-1">
                  {t('corporate.sponsor.item1')}
                </span>
                <span className="bg-yellow-400 bg-opacity-10 text-white px-4 py-2 rounded-full border border-yellow-400 border-opacity-30 hover:bg-opacity-20 transition-all transform hover:-translate-y-1">
                  {t('corporate.sponsor.item2')}
                </span>
                <span className="bg-yellow-400 bg-opacity-10 text-white px-4 py-2 rounded-full border border-yellow-400 border-opacity-30 hover:bg-opacity-20 transition-all transform hover:-translate-y-1">
                  {t('corporate.sponsor.item3')}
                </span>
                <span className="bg-yellow-400 bg-opacity-10 text-white px-4 py-2 rounded-full border border-yellow-400 border-opacity-30 hover:bg-opacity-20 transition-all transform hover:-translate-y-1">
                  {t('corporate.benefits.b1.title')}
                </span>
                <span className="bg-yellow-400 bg-opacity-10 text-white px-4 py-2 rounded-full border border-yellow-400 border-opacity-30 hover:bg-opacity-20 transition-all transform hover:-translate-y-1">
                  {t('corporate.benefits.b2.title')}
                </span>
            </div>
            </motion.div>

            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <h4 className="text-yellow-400 mb-4 text-xl">
                {t('corporate.benefits.title')}
              </h4>
              <p className="text-gray-300">
                {t('corporate.benefits.b3.desc')}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Certified Partner */}
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
            {t('corporate.title')}
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
              {t('corporate.subtitle')}
            </h3>
            <p className="text-lg mb-10 text-gray-300 text-center max-w-3xl mx-auto">
              {t('corporate.sponsor.desc')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h4 className="text-yellow-400 mb-3 text-xl">
                  {t('corporate.benefits.b1.title')}
                </h4>
                <p className="text-gray-300">
                  {t('corporate.benefits.b1.desc')}
                </p>
              </motion.div>
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h4 className="text-yellow-400 mb-3 text-xl">
                  {t('corporate.benefits.b2.title')}
                </h4>
                <p className="text-gray-300">
                  {t('corporate.benefits.b2.desc')}
                </p>
              </motion.div>
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h4 className="text-yellow-400 mb-3 text-xl">
                  {t('corporate.benefits.b3.title')}
                </h4>
                <p className="text-gray-300">
                  {t('corporate.benefits.b3.desc')}
                </p>
              </motion.div>
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h4 className="text-yellow-400 mb-3 text-xl">
                  {t('corporate.benefits.b3.title')}
                </h4>
                <p className="text-gray-300">
                  {t('corporate.benefits.b3.desc')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Partner Testimonials */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
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
            {t('corporate.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-10"
            variants={fadeInUp}
          ></motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {corporateTestimonials.testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-8"
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                  {language === 'ja' ? testimonial.content.ja : testimonial.content.en}
                </p>
                <div className="border-t border-yellow-400 border-opacity-20 pt-4">
                  <h4 className="text-yellow-400 font-bold">
                    {language === 'ja' ? testimonial.name.ja : testimonial.name.en}
                  </h4>
                  <p className="text-gray-400">
                    {language === 'ja' ? testimonial.position.ja : testimonial.position.en}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Project Flow */}
      <section ref={sectionRef} className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <motion.div 
          className="max-w-5xl mx-auto px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div ref={sectionStartRef} className="absolute top-0 w-full" aria-hidden="true"></div>
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            {t('corporate.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-8"
            variants={fadeInUp}
          ></motion.div>
          
          {/* Original Progress Bar Container (for positioning) */}
          <div id="flow-progress-container" className="relative mb-16 hidden md:block">
            {/* Empty container that will be replaced by the sticky progress bar */}
          </div>
          
          {/* Sticky Progress Bar - only visible within the Flow section */}
          <div 
            className={`hidden md:block fixed top-17 left-0 right-0 z-50 bg-black shadow-md transition-all duration-300 transform ${isSticky && isInFlowSection ? 'translate-y-0' : '-translate-y-full'}`}
            style={{ 
              opacity: isInFlowSection ? 1 : 0,
              visibility: isInFlowSection ? 'visible' : 'hidden'
            }}
          >
            <div className="max-w-5xl mx-auto px-4 py-4 relative">
              <h3 className="text-lg font-semibold mb-2">
                {t('corporate.subtitle')}
              </h3>
              
              {/* Horizontal line */}
              <div className="absolute top-16 left-4 right-4 h-1 bg-gray-700"></div>
              
              {/* Progress points */}
              <div className="flex justify-between relative z-10 px-4">
                {[1, 2, 3, 4, 5, 6].map((step) => (
                  <motion.div 
                    key={step} 
                    className="flex flex-col items-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handleStepClick(step)}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold transition-colors ${step <= currentStep ? 'bg-yellow-500' : 'bg-gray-600'}`}>
                      {step}
                    </div>
                    <span className={`mt-2 text-xs font-medium text-center max-w-[80px] truncate ${step === currentStep ? 'text-yellow-400' : 'text-gray-400'}`}>
                      {t('corporate.benefits.b1.title')}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Progress fill */}
              <div 
                className="absolute top-16 left-4 h-1 bg-yellow-500 transition-all duration-500"
                style={{ width: progressPercent, right: '1rem' }}
              ></div>
            </div>
          </div>
          
          {/* In-Page Progress Bar */}
          <motion.div 
            className="relative mb-16 hidden md:block"
            variants={fadeInUp}
          >
            {/* Horizontal line */}
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-700"></div>
            
            {/* Progress points */}
            <div className="flex justify-between relative z-10">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <motion.div 
                  key={step} 
                  className="flex flex-col items-center cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleStepClick(step)}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-colors ${step <= currentStep ? 'bg-yellow-500' : 'bg-gray-600'}`}>
                    {step}
                  </div>
                  <span className={`mt-2 text-sm font-medium text-center ${step === currentStep ? 'text-yellow-400' : 'text-gray-400'}`}>
                    {t('corporate.benefits.b1.title')}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Progress fill */}
            <div 
              className="absolute top-5 left-0 h-1 bg-yellow-500 transition-all duration-500"
              style={{ width: progressPercent }}
            ></div>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
              ref={el => { stepRefs.current[0] = el; }}
              className={`flex items-start gap-6 ${currentStep === 1 ? 'border-l-4 border-yellow-500 pl-2' : ''}`}
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">1</div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {t('corporate.benefits.b1.title')}
                </h3>
                <p className="text-gray-300">
                  {t('corporate.benefits.b1.desc')}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              ref={el => { stepRefs.current[1] = el; }}
              className={`flex items-start gap-6 ${currentStep === 2 ? 'border-l-4 border-yellow-500 pl-2' : ''}`}
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">2</div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {t('corporate.benefits.b2.title')}
                </h3>
                <p className="text-gray-300">
                  {t('corporate.benefits.b2.desc')}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              ref={el => { stepRefs.current[2] = el; }}
              className={`flex items-start gap-6 ${currentStep === 3 ? 'border-l-4 border-yellow-500 pl-2' : ''}`}
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">3</div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {t('corporate.benefits.b3.title')}
                </h3>
                <p className="text-gray-300">
                  {t('corporate.benefits.b3.desc')}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              ref={el => { stepRefs.current[3] = el; }}
              className={`flex items-start gap-6 ${currentStep === 4 ? 'border-l-4 border-yellow-500 pl-2' : ''}`}
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">4</div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {t('corporate.benefits.b1.title')}
                </h3>
                <p className="text-gray-300">
                  {t('corporate.benefits.b1.desc')}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              ref={el => { stepRefs.current[4] = el; }}
              className={`flex items-start gap-6 ${currentStep === 5 ? 'border-l-4 border-yellow-500 pl-2' : ''}`}
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">5</div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {t('corporate.benefits.b2.title')}
                </h3>
                <p className="text-gray-300">
                  {t('corporate.benefits.b2.desc')}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              ref={el => { stepRefs.current[5] = el; }}
              className={`flex items-start gap-6 ${currentStep === 6 ? 'border-l-4 border-yellow-500 pl-2' : ''}`}
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">6</div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {t('corporate.benefits.b3.title')}
                </h3>
                <p className="text-gray-300">
                  {t('corporate.benefits.b3.desc')}
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Section end marker - invisible but used for intersection detection */}
          <div ref={sectionEndRef} className="h-1 w-full mt-24" aria-hidden="true"></div>
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
            {t('corporate.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {t('corporate.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              href="/contact"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg font-bold transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {t('corporate.cta.contact')}
            </motion.a>
            <motion.a 
              href="/corporate#partner" 
              className="bg-transparent hover:bg-gray-800 text-white border-2 border-white px-8 py-3 rounded-lg font-bold transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {t('corporate.cta.partner')}
            </motion.a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
