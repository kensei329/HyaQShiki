'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
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
            <li><Link href="/" className="hover:text-yellow-400">トップ</Link></li>
            <li><Link href="/curriculum" className="hover:text-yellow-400">カリキュラム</Link></li>
            <li><Link href="/pricing" className="hover:text-yellow-400">価格</Link></li>
            <li><Link href="/certification" className="hover:text-yellow-400">資格</Link></li>
            <li><Link href="/corporate" className="hover:text-yellow-400">企業連携</Link></li>
            <li><Link href="/philosophy" className="hover:text-yellow-400">理念</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">お問い合わせ</Link></li>
          </ul>
        </div>
        <p className="text-center text-xs text-gray-400">&copy; {new Date().getFullYear()} HyaQShix百式. All rights reserved.</p>
      </div>
    </footer>
  );
}