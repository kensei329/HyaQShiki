'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200">
            {t('corporate.title')}
          </h1>
          <p className="text-xl text-yellow-50">
            {t('corporate.subtitle')}
          </p>
        </div>
      </section>

      {/* Certified Partner */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
          {t('corporate.benefits.title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-10"></div>
          
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400 text-center">
              {t('corporate.subtitle')}
            </h3>
            <p className="text-lg mb-10 text-gray-300 text-center max-w-3xl mx-auto">
              {t('corporate.sponsor.desc')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400">
                <h4 className="text-yellow-400 mb-3 text-xl">
                  {t('corporate.benefits.b1.title')}
                </h4>
                <p className="text-gray-300">
                  {t('corporate.benefits.b1.desc')}
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400">
                <h4 className="text-yellow-400 mb-3 text-xl">
                  {t('corporate.benefits.b2.title')}
                </h4>
                <p className="text-gray-300">
                  {t('corporate.benefits.b2.desc')}
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400">
                <h4 className="text-yellow-400 mb-3 text-xl">
                  {t('corporate.benefits.b3.title')}
                </h4>
                <p className="text-gray-300">
                  {t('corporate.benefits.b3.desc')}
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400">
                <h4 className="text-yellow-400 mb-3 text-xl">
                  {t('corporate.benefits.b4.title')}
                </h4>
                <p className="text-gray-300">
                  {t('corporate.benefits.b4.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('partner.testimonials.title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-10"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {corporateTestimonials.testimonials.map((testimonial, index) => (
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-8">
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
              </div>
            ))}
            </div>
          </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-black text-white relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">
            {t('corporate.cta.title')}
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg font-bold transition-transform duration-300"
            >
              {t('corporate.cta.contact')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
