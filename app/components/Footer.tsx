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
    </footer>
  );
}