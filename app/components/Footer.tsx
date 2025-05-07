'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-neutral-900 text-white py-12 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 mb-6">
          <div className="flex items-center gap-3">
            <Image src="/images/HyaQShix.png" alt="HyaQShix Logo" width={40} height={40} />
            <span className="text-lg font-bold">
              <span className="text-yellow-400">HyaQShix</span>百式
            </span>
          </div>
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li><Link href="/" className="hover:text-yellow-400">{t('nav.home')}</Link></li>
            <li><Link href="/curriculum" className="hover:text-yellow-400">{t('nav.curriculum')}</Link></li>
            <li><Link href="/pricing" className="hover:text-yellow-400">{t('nav.pricing')}</Link></li>
            <li><Link href="/certification" className="hover:text-yellow-400">{t('nav.certification')}</Link></li>
            <li><Link href="/corporate" className="hover:text-yellow-400">{t('nav.corporate')}</Link></li>
            <li><Link href="/philosophy" className="hover:text-yellow-400">{t('nav.philosophy')}</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">{t('nav.contact')}</Link></li>
          </ul>
        </div>
        <p className="text-center text-xs text-gray-400">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}