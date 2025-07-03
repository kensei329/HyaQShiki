'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-black text-white py-10 sm:py-16 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} HyaQShiki-百式-</p>
          </div>
      </div>
    </footer>
  );
}