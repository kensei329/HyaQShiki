'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CurriculumPage() {
  const { t } = useLanguage();
  const [currentPhase, setCurrentPhase] = useState(1);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionStartRef = useRef<HTMLDivElement | null>(null);
  const sectionEndRef = useRef<HTMLDivElement | null>(null);
  const [isInLearningFlowSection, setIsInLearningFlowSection] = useState(false);
  
  // Calculate the progress percentage
  const progressPercent = `${(currentPhase - 1) * 25}%`;

  // Handler for progress steps
  const handlePhaseClick = (phase: number) => {
    setCurrentPhase(phase);
    // Smooth scroll to the selected phase
    phaseRefs.current[phase - 1]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Add intersection observer to detect section visibility
  useEffect(() => {
    const progressContainer = document.getElementById('progress-container');
    const headerHeight = 80; // Approximate header height
    
    // Observer for the start of the Learning Flow section
    const sectionStartObserver = new IntersectionObserver(
      ([entry]) => {
        // When we enter the section
        setIsInLearningFlowSection(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setIsSticky(false);
        }
      },
      { 
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0.1
      }
    );
    
    // Observer for the end of the Learning Flow section
    const sectionEndObserver = new IntersectionObserver(
      ([entry]) => {
        // When we reach the end of the section
        if (entry.isIntersecting) {
          setIsInLearningFlowSection(false);
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
        // Only make it sticky if we're within the Learning Flow section
        if (isInLearningFlowSection) {
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
    
    // Observe the Learning Flow section
    if (sectionRef.current) {
      sectionStartObserver.observe(sectionRef.current);
    }
    
    // Observe the end marker of the Learning Flow section
    if (sectionEndRef.current) {
      sectionEndObserver.observe(sectionEndRef.current);
    }
    
    // Observe the progress container for sticky behavior
    if (progressContainer) {
      stickyObserver.observe(progressContainer);
    }
    
    // Create observers for each phase section
    const phaseObservers = phaseRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setCurrentPhase(index + 1);
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
      phaseObservers.forEach(obs => obs?.disconnect());
    };
  }, [isInLearningFlowSection]);

  return (
    <div className="font-['Poppins',sans-serif] bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-cover bg-center py-32" style={{ backgroundImage: 'url(/images/slide3.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200">
            {t('curriculum.title')}
          </h1>
          <p className="text-xl text-yellow-50 whitespace-pre-line">
            {t('curriculum.subtitle')}
          </p>
        </div>
      </section>

      {/* Curriculum Explanation */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('curriculum.explanation.title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <div className="space-y-5 text-base text-gray-300 leading-relaxed">
            <p>{t('curriculum.explanation.p1')}</p>
            <p>{t('curriculum.explanation.p2')}</p>
            <p>{t('curriculum.explanation.p3')}</p>
          </div>
        </div>
      </section>


      {/* Learning Flow Timeline */}
      <section ref={sectionRef} className="py-16 bg-black text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div ref={sectionStartRef} className="absolute top-0 w-full" aria-hidden="true"></div>
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('curriculum.flow.title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-10"></div>
          
          {/* Original Progress Bar Container (for positioning) */}
          <div id="progress-container" className="relative mb-20 hidden md:block">
            {/* Empty container that will be replaced by the sticky progress bar */}
          </div>
          
          {/* Sticky Progress Bar - only visible within the Learning Flow section */}
          <div 
            className={`hidden md:block fixed top-16 left-0 right-0 z-50 bg-black shadow-md transition-all duration-300 transform ${isSticky && isInLearningFlowSection ? 'translate-y-0' : '-translate-y-full'}`}
            style={{ 
              opacity: isInLearningFlowSection ? 1 : 0,
              visibility: isInLearningFlowSection ? 'visible' : 'hidden'
            }}
          >
            <div className="max-w-5xl mx-auto px-4 py-4 relative">
              <h3 className="text-lg font-semibold mb-2">{t('curriculum.flow.title')}</h3>
              
              {/* Horizontal line */}
              <div className="absolute top-17 left-4 right-4 h-1 bg-gray-700"></div>
              
              {/* Progress points */}
              <div className="flex justify-between relative z-10 px-4">
                {[1, 2, 3, 4, 5].map((phase) => (
                  <div 
                    key={phase} 
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold transition-colors ${phase <= currentPhase ? 'bg-yellow-500' : 'bg-gray-600'}`}>
                      {phase}
                    </div>
                    <span className={`mt-2 text-xs font-medium text-center max-w-[80px] truncate ${phase === currentPhase ? 'text-yellow-400' : 'text-gray-400'}`}>
                      {t(`curriculum.flow.phase${phase}.title`)}
                    </span>
                  </div>
                ))}
        </div>
              
              {/* Progress fill */}
              <div 
                className="absolute top-17 left-4 h-1 bg-yellow-500 transition-all duration-500"
                style={{ width: progressPercent, right: '1rem' }}
              ></div>
            </div>
          </div>
          
          {/* In-Page Progress Bar */}
          <div className="relative mb-20 hidden md:block">
            {/* Horizontal line */}
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-700"></div>
            
            {/* Progress points */}
            <div className="flex justify-between relative z-10">
              {[1, 2, 3, 4, 5].map((phase) => (
                <div 
                  key={phase} 
                  className="flex flex-col items-center cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-colors ${phase <= currentPhase ? 'bg-yellow-500' : 'bg-gray-600'}`}>
                    {phase}
                  </div>
                  <span className={`mt-2 text-sm font-medium text-center ${phase === currentPhase ? 'text-yellow-400' : 'text-gray-400'}`}>
                    {t(`curriculum.flow.phase${phase}.title`)}
                  </span>
                  <span className="text-xs text-gray-500">
                    {t(`curriculum.flow.phase${phase}.period`)}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Progress fill */}
            <div 
              className="absolute top-5 left-0 h-1 bg-yellow-500 transition-all duration-500"
              style={{ width: progressPercent }}
            ></div>
          </div>
          
          <div className="space-y-8">
            {/* Phase 1 */}
            <div 
              ref={el => { phaseRefs.current[0] = el; }}
              className={`backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 relative overflow-hidden transition-all duration-300 ${currentPhase === 1 ? 'border-l-4 border-yellow-500' : ''}`}
            >
              <div className="absolute left-6 top-6 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white md:hidden">1</div>
              <div className="ml-12 md:ml-0">
                <h3 className="text-xl font-bold mb-2">
                  {t('curriculum.flow.phase1.title')}
                  <span className="text-sm text-yellow-500 ml-2">{t('curriculum.flow.phase1.period')}</span>
                </h3>
                <p className="mb-4 text-gray-300">{t('curriculum.flow.phase1.desc')}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>{t('curriculum.flow.phase1.point1')}</li>
                  <li>{t('curriculum.flow.phase1.point2')}</li>
                  <li>{t('curriculum.flow.phase1.point3')}</li>
                  <li>{t('curriculum.flow.phase1.point4')}</li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div 
              ref={el => { phaseRefs.current[1] = el; }}
              className={`backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 relative overflow-hidden transition-all duration-300 ${currentPhase === 2 ? 'border-l-4 border-yellow-500' : ''}`}
            >
              <div className="absolute left-6 top-6 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white md:hidden">2</div>
              <div className="ml-12 md:ml-0">
                <h3 className="text-xl font-bold mb-2">
                  {t('curriculum.flow.phase2.title')}
                  <span className="text-sm text-yellow-500 ml-2">{t('curriculum.flow.phase2.period')}</span>
                </h3>
                <p className="mb-4 text-gray-300">{t('curriculum.flow.phase2.desc')}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>{t('curriculum.flow.phase2.point1')}</li>
                  <li>{t('curriculum.flow.phase2.point2')}</li>
                  <li>{t('curriculum.flow.phase2.point3')}</li>
                  <li>{t('curriculum.flow.phase2.point4')}</li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div 
              ref={el => { phaseRefs.current[2] = el; }}
              className={`backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 relative overflow-hidden transition-all duration-300 ${currentPhase === 3 ? 'border-l-4 border-yellow-500' : ''}`}
            >
              <div className="absolute left-6 top-6 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white md:hidden">3</div>
              <div className="ml-12 md:ml-0">
                <h3 className="text-xl font-bold mb-2">
                  {t('curriculum.flow.phase3.title')}
                  <span className="text-sm text-yellow-500 ml-2">{t('curriculum.flow.phase3.period')}</span>
                </h3>
                <p className="mb-4 text-gray-300">{t('curriculum.flow.phase3.desc')}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>{t('curriculum.flow.phase3.point1')}</li>
                  <li>{t('curriculum.flow.phase3.point2')}</li>
                  <li>{t('curriculum.flow.phase3.point3')}</li>
                  <li>{t('curriculum.flow.phase3.point4')}</li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div 
              ref={el => { phaseRefs.current[3] = el; }}
              className={`backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 relative overflow-hidden transition-all duration-300 ${currentPhase === 4 ? 'border-l-4 border-yellow-500' : ''}`}
            >
              <div className="absolute left-6 top-6 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white md:hidden">4</div>
              <div className="ml-12 md:ml-0">
                <h3 className="text-xl font-bold mb-2">
                  {t('curriculum.flow.phase4.title')}
                  <span className="text-sm text-yellow-500 ml-2">{t('curriculum.flow.phase4.period')}</span>
                </h3>
                <p className="mb-4 text-gray-300">{t('curriculum.flow.phase4.desc')}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>{t('curriculum.flow.phase4.point1')}</li>
                  <li>{t('curriculum.flow.phase4.point2')}</li>
                  <li>{t('curriculum.flow.phase4.point3')}</li>
                  <li>{t('curriculum.flow.phase4.point4')}</li>
                </ul>
              </div>
            </div>

            {/* Phase 5 */}
            <div 
              ref={el => { phaseRefs.current[4] = el; }}
              className={`backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 relative overflow-hidden transition-all duration-300 ${currentPhase === 5 ? 'border-l-4 border-yellow-500' : ''}`}
            >
              <div className="absolute left-6 top-6 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white md:hidden">5</div>
              <div className="ml-12 md:ml-0">
                <h3 className="text-xl font-bold mb-2">
                  {t('curriculum.flow.phase5.title')}
                  <span className="text-sm text-yellow-500 ml-2">{t('curriculum.flow.phase5.period')}</span>
                </h3>
                <p className="mb-4 text-gray-300">{t('curriculum.flow.phase5.desc')}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>{t('curriculum.flow.phase5.point1')}</li>
                  <li>{t('curriculum.flow.phase5.point2')}</li>
                  <li>{t('curriculum.flow.phase5.point3')}</li>
                  <li>{t('curriculum.flow.phase5.point4')}</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Section end marker - invisible but used for intersection detection */}
          <div ref={sectionEndRef} className="h-1 w-full mt-24" aria-hidden="true"></div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('curriculum.approach.title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-10"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Approach Card 1 */}
            <div 
              className="bg-black/80 border-l-4 border-yellow-500 rounded-xl p-6 flex items-start gap-4 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 mr-4 mt-1">
                <i className="fas fa-rocket text-2xl text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-yellow-400 text-left">{t('curriculum.approach.output.title')}</h3>
                <p className="text-gray-300 text-left">{t('curriculum.approach.output.desc')}</p>
              </div>
            </div>

            {/* Approach Card 2 */}
            <div 
              className="bg-black/80 border-l-4 border-yellow-500 rounded-xl p-6 flex items-start gap-4 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 mr-4 mt-1">
                <i className="fas fa-sync-alt text-2xl text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-yellow-400 text-left">{t('curriculum.approach.iteration.title')}</h3>
                <p className="text-gray-300 text-left">{t('curriculum.approach.iteration.desc')}</p>
              </div>
            </div>

            {/* Approach Card 3 */}
            <div 
              className="bg-black/80 border-l-4 border-yellow-500 rounded-xl p-6 flex items-start gap-4 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 mr-4 mt-1">
                <i className="fas fa-brain text-2xl text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-yellow-400 text-left">{t('curriculum.approach.mentoring.title')}</h3>
                <p className="text-gray-300 text-left">{t('curriculum.approach.mentoring.desc')}</p>
              </div>
            </div>

            {/* Approach Card 4 */}
            <div 
              className="bg-black/80 border-l-4 border-yellow-500 rounded-xl p-6 flex items-start gap-4 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 mr-4 mt-1">
                <i className="fas fa-users text-2xl text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-yellow-400 text-left">{t('curriculum.approach.community.title')}</h3>
                <p className="text-gray-300 text-left">{t('curriculum.approach.community.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools and Techniques */}
      <section className="py-16 bg-black text-white relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('curriculum.stack.title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-10"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 要件定義・設計支援ツール */}
            <div 
              className="bg-black/90 rounded-xl shadow-lg p-0 flex flex-col border border-yellow-500"
            >
              <div className="bg-yellow-400 rounded-t-xl px-6 py-3">
                <span className="text-lg font-bold text-black">{t('curriculum.stack.requirements.title')}</span>
              </div>
              <div className="p-6">
                <div className="text-yellow-300 font-bold mb-2">{t('curriculum.stack.requirements.head')}</div>
                <ul className="text-gray-200 text-sm space-y-1 mb-2">
                  <li>▶ {t('curriculum.stack.requirements.list1')}</li>
                  <li>▶ {t('curriculum.stack.requirements.list2')}</li>
                </ul>
              </div>
            </div>

            {/* 開発環境・コードエディタ */}
            <div 
              className="bg-black/90 rounded-xl shadow-lg p-0 flex flex-col border border-yellow-500"
            >
              <div className="bg-yellow-400 rounded-t-xl px-6 py-3">
                <span className="text-lg font-bold text-black">{t('curriculum.stack.env.title')}</span>
              </div>
              <div className="p-6">
                <div className="text-yellow-300 font-bold mb-2">{t('curriculum.stack.env.head1')}</div>
                <ul className="text-gray-200 text-sm space-y-1 mb-2">
                  <li>▶ {t('curriculum.stack.env.env1')}</li>
                  <li>▶ {t('curriculum.stack.env.env2')}</li>
                </ul>
                <div className="text-yellow-300 font-bold mb-2">{t('curriculum.stack.env.head2')}</div>
                <ul className="text-gray-200 text-sm space-y-1 mb-2">
                  <li>▶ {t('curriculum.stack.env.env3')}</li>
                  <li>▶ {t('curriculum.stack.env.env4')}</li>
                </ul>
              </div>
            </div>

            {/* フロントエンド開発 */}
            <div 
              className="bg-black/90 rounded-xl shadow-lg p-0 flex flex-col border border-yellow-500"
            >
              <div className="bg-yellow-400 rounded-t-xl px-6 py-3">
                <span className="text-lg font-bold text-black">{t('curriculum.stack.frontend.title')}</span>
              </div>
              <div className="p-6">
                <div className="text-yellow-300 font-bold mb-2">{t('curriculum.stack.frontend.head')}</div>
                <ul className="text-gray-200 text-sm space-y-1 mb-2">
                  <li>▶ {t('curriculum.stack.frontend.list1')}</li>
                  <li>▶ {t('curriculum.stack.frontend.list2')}</li>
                  <li>▶ {t('curriculum.stack.frontend.list3')}</li>
                </ul>
              </div>
            </div>

            {/* バックエンド・API開発 */}
            <div 
              className="bg-black/90 rounded-xl shadow-lg p-0 flex flex-col border border-yellow-500"
            >
              <div className="bg-yellow-400 rounded-t-xl px-6 py-3">
                <span className="text-lg font-bold text-black">{t('curriculum.stack.backend.title')}</span>
              </div>
              <div className="p-6">
                <div className="text-yellow-300 font-bold mb-2">{t('curriculum.stack.backend.head')}</div>
                <ul className="text-gray-200 text-sm space-y-1 mb-2">
                  <li>▶ {t('curriculum.stack.backend.list1')}</li>
                  <li>▶ {t('curriculum.stack.backend.list2')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('curriculum.metrics.title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-10"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Metric 1 */}
            <div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center text-center shadow-md"
            >
              <div className="text-5xl font-bold text-yellow-500 mb-4">100</div>
              <h3 className="text-xl font-bold mb-2">{t('curriculum.metrics.apps.title')}</h3>
              <p className="text-gray-300">{t('curriculum.metrics.apps.desc')}</p>
            </div>

            {/* Metric 2 */}
            <div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center text-center shadow-md"
            >
              <div className="text-5xl font-bold text-yellow-500 mb-4">10+</div>
              <h3 className="text-xl font-bold mb-2">{t('curriculum.metrics.monetize.title')}</h3>
              <p className="text-gray-300">{t('curriculum.metrics.monetize.desc')}</p>
            </div>

            {/* Metric 3 */}
            <div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center text-center shadow-md"
            >
              <div className="text-5xl font-bold text-yellow-500 mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">{t('curriculum.metrics.main.title')}</h3>
              <p className="text-gray-300">{t('curriculum.metrics.main.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">{t('curriculum.cta.title')}</h2>
          <p className="text-xl mb-8 text-gray-300">{t('curriculum.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 transform-gpu touch-manipulation"
            >
              {t('curriculum.cta.free_trial')}
            </Link>
            <Link 
              href="/pricing" 
              className="bg-transparent hover:bg-gray-800 text-white border-2 border-white px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95 transform-gpu touch-manipulation"
            >
              {t('curriculum.cta.pricing')}
            </Link>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
