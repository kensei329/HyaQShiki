'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const currentLangRef = langRef.current as HTMLElement | null;
      if (currentLangRef && !currentLangRef.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image src="/images/HyaQShix.png" alt="HyaQShix百式" width={40} height={40} />
              <span className="text-lg font-bold"><span className="text-yellow-400">HyaQShix</span>百式</span>
            </div>
          </Link>
        </div>

        {/* Navigation + Language */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <Link href="/" className="hover:text-yellow-400 flex items-center gap-1">
              <i className="fas fa-home" /><span>トップ</span>
            </Link>
            <Link href="/curriculum" className="hover:text-yellow-400 flex items-center gap-1">
              <i className="fas fa-book" /><span>カリキュラム</span>
            </Link>
            <Link href="/pricing" className="hover:text-yellow-400 flex items-center gap-1">
              <i className="fas fa-yen-sign" /><span>価格</span>
            </Link>
            <Link href="/certification" className="hover:text-yellow-400 flex items-center gap-1">
              <i className="fas fa-certificate" /><span>資格</span>
            </Link>
            <Link href="/corporate" className="hover:text-yellow-400 flex items-center gap-1">
              <i className="fas fa-building" /><span>企業連携</span>
            </Link>
            <Link href="/philosophy" className="hover:text-yellow-400 flex items-center gap-1">
              <i className="fas fa-lightbulb" /><span>理念</span>
            </Link>
            <Link href="/contact" className="ml-3 px-3 py-1 bg-yellow-400 text-black rounded font-bold hover:bg-yellow-300 transition flex items-center gap-1">
              <i className="fas fa-envelope" /><span>お問い合わせ</span>
            </Link>
          </nav>

          {/* Language Dropdown */}
          <div ref={langRef} className="relative hidden md:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="border border-white text-white px-3 py-1 rounded hover:bg-white hover:text-black transition"
            >
              言語 ▾
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-md z-50">
                <button className="block w-full text-left px-4 py-2 hover:bg-yellow-100">日本語</button>
                <button className="block w-full text-left px-4 py-2 hover:bg-yellow-100">English</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
