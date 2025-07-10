'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const langRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileLangRef = useRef(null);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const currentLangRef = langRef.current as HTMLElement | null;
      const currentMobileMenuRef = mobileMenuRef.current as HTMLElement | null;
      const currentMobileLangRef = mobileLangRef.current as HTMLElement | null;
      
      if (currentLangRef && !currentLangRef.contains(event.target as Node)) {
        setLangOpen(false);
      }
      
      if (currentMobileMenuRef && !currentMobileMenuRef.contains(event.target as Node) && 
          !((event.target as HTMLElement).closest('[data-mobile-trigger]'))) {
        setMobileMenuOpen(false);
      }

      if (currentMobileLangRef && !currentMobileLangRef.contains(event.target as Node) && 
          !((event.target as HTMLElement).closest('[data-lang-trigger]'))) {
        setMobileLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case page loads scrolled
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        if (mobileMenuOpen) setMobileMenuOpen(false);
        if (mobileLangOpen) setMobileLangOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen, mobileLangOpen]);

  const handleLanguageChange = (lang: 'ja' | 'en') => {
    setLanguage(lang);
    setLangOpen(false);
    setMobileLangOpen(false);
  };

  // Define navigation items with their paths to reuse in both desktop and mobile navigation
  const navItems = [
    { path: '/', label: t('nav.home'), icon: 'fas fa-home' },
    { path: '/curriculum', label: t('nav.curriculum'), icon: 'fas fa-book' },
    { path: '/pricing', label: t('nav.pricing'), icon: 'fas fa-yen-sign' },
    { path: '/certification', label: t('nav.certification'), icon: 'fas fa-certificate' },
    { path: '/testimonials', label: t('nav.testimonials'), icon: 'fas fa-user-graduate' },
    { path: '/corporate', label: t('nav.corporate'), icon: 'fas fa-building' },
    { path: '/philosophy', label: t('nav.philosophy'), icon: 'fas fa-lightbulb' },
    { path: '/contact', label: t('nav.contact'), icon: 'fas fa-envelope', isButton: true },
  ];

  // Check if a path is active
  const isActive = (path: string) => pathname === path;

  return (
    <header className={`fixed bottom-0 left-0 w-full z-[9999] lg:top-0 lg:bottom-auto ${scrolled ? 'bg-black shadow-lg' : 'bg-black bg-opacity-70'} backdrop-blur transition-all duration-300 text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0 max-w-[40px] h-[40px]">
          <Link href="/">
            <div className="flex items-center gap-2 max-w-[40px] h-[40px]">
              <Image src="/images/HyaQShiki.png" alt="HyaQShiki-百式-" width={40} height={40} className="max-w-[40px] h-auto object-contain" />
              <span className="text-lg font-bold"><span className="text-yellow-400">HyaQShiki</span>百式</span>
            </div>
          </Link>
        </div>

        {/* Mobile Controls: Language + Menu */}
        <div className="flex items-center lg:hidden">
          {/* Mobile Language Button */}
          <div className="relative mr-2" ref={mobileLangRef}>
            <button 
              data-lang-trigger
              onClick={() => setMobileLangOpen(!mobileLangOpen)}
              className="text-white p-2 focus:outline-none" 
              aria-label="Change language"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span className="absolute top-0 right-0 bg-yellow-400 text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {language === 'ja' ? 'J' : 'E'}
              </span>
            </button>
            
            {mobileLangOpen && (
              <div className="absolute right-0 bottom-full mb-2 w-40 bg-black border border-gray-700 rounded shadow-lg z-50">
                <button 
                  className={`flex items-center w-full px-4 py-2 text-left hover:bg-gray-800 ${language === 'ja' ? 'text-yellow-400' : 'text-white'}`}
                  onClick={() => handleLanguageChange('ja')}
                >
                  <span className="mr-2">🇯🇵</span> 日本語
                </button>
                <button 
                  className={`flex items-center w-full px-4 py-2 text-left hover:bg-gray-800 ${language === 'en' ? 'text-yellow-400' : 'text-white'}`}
                  onClick={() => handleLanguageChange('en')}
                >
                  <span className="mr-2">🇬🇧</span> English
                </button>
              </div>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            data-mobile-trigger
            className="text-white p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                // X icon when menu is open
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger icon when menu is closed
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation + Language */}
        <div className="hidden lg:flex items-center gap-4 ml-10">
          <nav className="flex gap-1 xl:gap-3 items-center text-xs xl:text-sm">
            {navItems.map((item) => (
              item.isButton ? (
                <Link 
                  key={item.path}
                  href={item.path} 
                  className={`ml-1 px-3 py-1.5 rounded font-bold flex items-center gap-1 transition-colors ${
                    isActive(item.path) 
                      ? 'bg-yellow-500 text-black hover:bg-yellow-400' 
                      : 'bg-yellow-400 text-black hover:bg-yellow-300'
                  }`}
                >
                  <i className={item.icon} /><span>{item.label}</span>
                </Link>
              ) : (
                <Link 
                  key={item.path}
                  href={item.path} 
                  className={`px-2 flex items-center gap-1 whitespace-nowrap relative ${
                    isActive(item.path) 
                      ? 'text-yellow-400 font-medium' 
                      : 'text-white hover:text-yellow-400'
                  }`}
                >
                  <i className={item.icon} /><span>{item.label}</span>
                  {isActive(item.path) && (
                    <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
                  )}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop Language Dropdown */}
          <div ref={langRef} className="relative ml-2">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="border border-white text-white px-3 py-1.5 rounded hover:bg-white hover:text-black transition text-xs"
            >
              {t('nav.language')} {language.toUpperCase()} ▾
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white text-black rounded shadow-md z-50">
                <button 
                  className={`block w-full text-left px-4 py-2 hover:bg-yellow-100 ${language === 'ja' ? 'bg-yellow-200' : ''}`}
                  onClick={() => handleLanguageChange('ja')}
                >
                  日本語
                </button>
                <button 
                  className={`block w-full text-left px-4 py-2 hover:bg-yellow-100 ${language === 'en' ? 'bg-yellow-200' : ''}`}
                  onClick={() => handleLanguageChange('en')}
                >
                  English
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="absolute bottom-full left-0 w-full bg-black border-t border-gray-800 shadow-lg z-40 lg:hidden"
          >
            <nav className="flex flex-col py-3">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  href={item.path} 
                  className={`px-5 py-3 hover:bg-gray-900 flex items-center gap-2 ${
                    isActive(item.path) ? 'text-yellow-400 bg-gray-900/50 border-b border-yellow-400' : 'text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <i className={`${item.icon} w-5`} /><span>{item.label}</span>
                  {isActive(item.path) && (
                    <span className="ml-auto bg-yellow-400 w-1.5 h-6 rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
