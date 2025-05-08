'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  
  // All footer text in both languages
  const text = {
    // Japanese text
    ja: {
      slogan: "100日、100の型、100倍の生産力。",
      navigation: "ナビゲーション",
      home: "トップ",
      curriculum: "カリキュラム",
      pricing: "価格",
      certification: "資格",
      corporate: "企業連携",
      philosophy: "理念",
      contact: "お問い合わせ",
      contactForm: "お問い合わせフォーム",
      faq: "よくある質問",
      community: "コミュニティ",
      copyright: "全著作権所有。",
      privacy: "プライバシーポリシー",
      terms: "利用規約"
    },
    // English text
    en: {
      slogan: "100 days, 100 forms, 100x productivity.",
      navigation: "Navigation",
      home: "Home",
      curriculum: "Curriculum",
      pricing: "Pricing",
      certification: "Certification",
      corporate: "Corporate",
      philosophy: "Philosophy",
      contact: "Contact",
      contactForm: "Contact Form",
      faq: "FAQ",
      community: "Community",
      copyright: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  };
  
  // Get text based on current language (default to English if language is not ja)
  const t = text[language === 'ja' ? 'ja' : 'en'];
  
  return (
    <footer className="bg-black text-white py-10 sm:py-16 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 md:mb-12">
          {/* Logo and Brand Column */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
              <Image src="/images/HyaQShix.png" alt="HyaQShix Logo" width={80} height={80} className="rounded-md" />
              <span className="text-xl font-bold">
                <span className="text-yellow-400">HyaQShix</span>百式
              </span>
            </div>
            <p className="text-gray-400 mt-2 text-sm text-center sm:text-left">
              {t.slogan}
            </p>
          </div>
          
          {/* Navigation Column */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">{t.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-yellow-400 transition-colors">{t.home}</Link></li>
              <li><Link href="/curriculum" className="hover:text-yellow-400 transition-colors">{t.curriculum}</Link></li>
              <li><Link href="/pricing" className="hover:text-yellow-400 transition-colors">{t.pricing}</Link></li>
              <li><Link href="/certification" className="hover:text-yellow-400 transition-colors">{t.certification}</Link></li>
              <li><Link href="/corporate" className="hover:text-yellow-400 transition-colors">{t.corporate}</Link></li>
              <li><Link href="/philosophy" className="hover:text-yellow-400 transition-colors">{t.philosophy}</Link></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">{t.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">{t.contactForm}</Link></li>
              <li><Link href="/faq" className="hover:text-yellow-400 transition-colors">{t.faq}</Link></li>
            </ul>
          </div>
          
          {/* Community Column */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">{t.community}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://discord.gg/hyaqshix" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                  </svg>
                  Discord
                </a>
              </li>
              <li>
                <a href="https://twitter.com/hyaqshix" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} HyaQShix百式. {t.copyright}</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                {t.privacy}
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                {t.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}