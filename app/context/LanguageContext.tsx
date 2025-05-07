'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ja' | 'en';

type TranslationKeys = 
  // Navigation
  | 'nav.home' | 'nav.curriculum' | 'nav.pricing' | 'nav.certification' 
  | 'nav.corporate' | 'nav.philosophy' | 'nav.contact' | 'nav.language'
  
  // HomePage
  | 'home.title' | 'home.subtitle' | 'home.reasons' | 'home.instant' 
  | 'home.instant.desc' | 'home.ai' | 'home.ai.desc' | 'home.certification' 
  | 'home.certification.desc' | 'home.community' | 'home.community.desc' 
  | 'home.certifications' | 'home.silver' | 'home.gold' | 'home.platina' 
  | 'home.black' | 'home.guarantee' | 'home.guarantee.desc' 
  
  // Footer
  | 'footer.copyright'
  
  // Curriculum Page
  | 'curriculum.title' | 'curriculum.subtitle' | 'curriculum.explanation.title'
  | 'curriculum.explanation.p1' | 'curriculum.explanation.p2' | 'curriculum.explanation.p3'
  | 'curriculum.timeline.title' | 'curriculum.timeline.days1.title' | 'curriculum.timeline.days1.desc'
  | 'curriculum.timeline.days2.title' | 'curriculum.timeline.days2.desc'
  | 'curriculum.timeline.days3.title' | 'curriculum.timeline.days3.desc'
  | 'curriculum.timeline.days4.title' | 'curriculum.timeline.days4.desc'
  
  // Pricing Page
  | 'pricing.title' | 'pricing.subtitle' | 'pricing.plans.title' | 'pricing.description'
  | 'pricing.standard.title' | 'pricing.standard.price' | 'pricing.standard.desc'
  | 'pricing.premium.title' | 'pricing.premium.price' | 'pricing.premium.desc'
  | 'pricing.enterprise.title' | 'pricing.enterprise.price' | 'pricing.enterprise.desc'
  | 'pricing.contact' | 'pricing.guarantee'
  
  // Certification Page
  | 'certification.title' | 'certification.subtitle' | 'certification.desc'
  | 'certification.silver.title' | 'certification.silver.desc'
  | 'certification.gold.title' | 'certification.gold.desc'
  | 'certification.platina.title' | 'certification.platina.desc'
  | 'certification.black.title' | 'certification.black.desc'
  | 'certification.levels.title' | 'certification.eval.item1' | 'certification.eval.item2'
  | 'certification.eval.item3'
  
  // Corporate Page
  | 'corporate.title' | 'corporate.subtitle' | 'corporate.benefits.title'
  | 'corporate.benefits.b1.title' | 'corporate.benefits.b1.desc'
  | 'corporate.benefits.b2.title' | 'corporate.benefits.b2.desc'
  | 'corporate.benefits.b3.title' | 'corporate.benefits.b3.desc'
  | 'corporate.contact' | 'corporate.sponsor.title' | 'corporate.sponsor.subtitle'
  | 'corporate.sponsor.desc' | 'corporate.sponsor.item1' | 'corporate.sponsor.item2'
  | 'corporate.sponsor.item3' | 'corporate.cta.title' | 'corporate.cta.desc'
  
  // Philosophy Page
  | 'philosophy.title' | 'philosophy.subtitle' | 'philosophy.mission.title'
  | 'philosophy.mission.desc' | 'philosophy.vision.title' | 'philosophy.vision.desc'
  | 'philosophy.values.title' | 'philosophy.values.v1' | 'philosophy.values.v2'
  | 'philosophy.values.v3'
  
  // Contact Page
  | 'contact.title' | 'contact.subtitle' | 'contact.form.name'
  | 'contact.form.email' | 'contact.form.subject' | 'contact.form.message'
  | 'contact.form.submit' | 'contact.info.title' | 'contact.info.address'
  | 'contact.info.email' | 'contact.info.phone' | 'contact.info.address.label'
  | 'contact.info.email.label' | 'contact.info.phone.label' | 'contact.info.hours'
  | 'contact.info.hours.weekdays' | 'contact.info.hours.saturday' | 'contact.info.hours.sunday'
  | 'contact.info.hours.closed';

type TranslationsType = {
  [key in TranslationKeys]: string;
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys | string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Japanese translations
const ja: TranslationsType = {
  // Navigation
  'nav.home': 'トップ',
  'nav.curriculum': 'カリキュラム',
  'nav.pricing': '価格',
  'nav.certification': '資格',
  'nav.corporate': '企業連携',
  'nav.philosophy': '理念',
  'nav.contact': 'お問い合わせ',
  'nav.language': '言語',

  // HomePage
  'home.title': '100日、100の型、100倍の生産力。',
  'home.subtitle': 'AIと共に創る、未来のアプリ開発スキルを最速で。',
  'home.reasons': '選ばれる理由',
  'home.instant': '即戦力の育成',
  'home.instant.desc': '実務型プロジェクトを通じて、即戦力人材を育てます。',
  'home.ai': 'AI実装スキル',
  'home.ai.desc': '生成AIを活用した開発力を身につけます。',
  'home.certification': '4段階資格制度',
  'home.certification.desc': 'Silver〜Blackの資格認定で能力を証明。',
  'home.community': '仲間と学ぶ',
  'home.community.desc': '志ある仲間と共に学び、高め合う環境。',
  'home.certifications': '認定資格制度',
  'home.silver': '基本的な開発力を有する証明。',
  'home.gold': '毎日の開発実践を積んだ実力者。',
  'home.platina': '戦略設計とAI統合が可能な上級者。',
  'home.black': '自立して価値創造できる最高レベル。',
  'home.guarantee': '満足保証制度',
  'home.guarantee.desc': '30日以内の返金対応で安心してご参加いただけます。',

  // Footer
  'footer.copyright': '© 2024 HyaQShix百式. All rights reserved.',
  
  // Curriculum Page
  'curriculum.title': 'カリキュラム',
  'curriculum.subtitle': '「100日x100アプリ」プログラム',
  'curriculum.explanation.title': '学習の流れ',
  'curriculum.explanation.p1': '本学習の流れは、受講生一人ひとりの習熟度や進捗に応じて柔軟に最適化されます。',
  'curriculum.explanation.p2': '以下に示す内容は、あくまで平均的なカリキュラムモデルとなります。',
  'curriculum.explanation.p3': '実際の進行は個々の理解度・得意分野・目標に応じて調整されますので、安心してご参加ください。',
  'curriculum.timeline.title': 'タイムライン（例）',
  'curriculum.timeline.days1.title': 'Day1〜Day10：基礎固め',
  'curriculum.timeline.days1.desc': 'HTML/CSS/JavaScriptの基礎 + AIアシストによる初期アウトプット体験',
  'curriculum.timeline.days2.title': 'Day11〜Day40：毎日アプリ制作',
  'curriculum.timeline.days2.desc': '毎日1つの実用的アプリを生成AIで開発・リリース',
  'curriculum.timeline.days3.title': 'Day41〜Day70：テーマ別深堀',
  'curriculum.timeline.days3.desc': '業界特化・応用設計・UI/UX・セキュリティ・API連携など',
  'curriculum.timeline.days4.title': 'Day71〜Day100：最終制作と公開',
  'curriculum.timeline.days4.desc': '集大成アプリを複数制作し、公開・共有・審査・資格認定へ',
  
  // Pricing Page
  'pricing.title': '価格プラン',
  'pricing.subtitle': 'あなたの目標に最適なプランを選択できます',
  'pricing.plans.title': 'プラン一覧',
  'pricing.description': '学びのスタイルに合わせて選べるプランをご用意しています。',
  'pricing.standard.title': 'スタンダード',
  'pricing.standard.price': '¥49,800',
  'pricing.standard.desc': '基本的な学習内容とサポートが含まれたプラン',
  'pricing.premium.title': 'プレミアム',
  'pricing.premium.price': '¥89,800',
  'pricing.premium.desc': 'パーソナルメンタリングと優先サポート付き',
  'pricing.enterprise.title': '法人向け',
  'pricing.enterprise.price': 'お問い合わせ',
  'pricing.enterprise.desc': '複数アカウント・カスタマイズ対応',
  'pricing.contact': 'お問い合わせはこちら',
  'pricing.guarantee': '30日間の返金保証付き',
  
  // Certification Page
  'certification.title': '資格認定',
  'certification.subtitle': '能力を証明する4段階の認定制度',
  'certification.desc': '当プログラムでは、学習の成果を客観的に証明できる4段階の資格制度を設けています。',
  'certification.silver.title': 'Silver認定',
  'certification.silver.desc': 'AIを活用した基本的な開発スキルを有することを証明',
  'certification.gold.title': 'Gold認定',
  'certification.gold.desc': '実践的なアプリ開発ができるレベルに到達したことを証明',
  'certification.platina.title': 'Platina認定',
  'certification.platina.desc': '高度なAI統合と応用設計ができる上級者レベルの証明',
  'certification.black.title': 'Black認定',
  'certification.black.desc': '自立してイノベーションを起こせる最高レベルの証明',
  'certification.levels.title': '4つの認定ランク',
  'certification.eval.item1': 'アプリ完成度、設計力、AI活用度、実装力などで総合評価',
  'certification.eval.item2': '合格者はPDF証明書発行 + 認定者リストに掲載（URL共有可）',
  'certification.eval.item3': '上位資格ほど難易度が高く、採用やVC評価にも有効',
  
  // Corporate Page
  'corporate.title': '企業連携',
  'corporate.subtitle': '次世代のIT人材育成を共に',
  'corporate.benefits.title': '企業連携のメリット',
  'corporate.benefits.b1.title': '人材育成',
  'corporate.benefits.b1.desc': '既存社員のスキルアップで生産性向上',
  'corporate.benefits.b2.title': '採用支援',
  'corporate.benefits.b2.desc': '優秀な受講修了者を紹介',
  'corporate.benefits.b3.title': '技術相談',
  'corporate.benefits.b3.desc': 'AI開発に関する技術相談窓口の利用',
  'corporate.contact': '法人向けのお問い合わせはこちら',
  'corporate.sponsor.title': 'スポンサー制度の概要',
  'corporate.sponsor.subtitle': 'HyaQShixスポンサー制度とは？',
  'corporate.sponsor.desc': '生成AI時代に100倍の生産力を発揮する次世代開発人材を育成するHyaQShix百式では、企業からの実務プロジェクトを教育プログラムと融合し、学習と実践を同時に実現します。',
  'corporate.sponsor.item1': '貴社課題に取り組む実務型プロジェクト',
  'corporate.sponsor.item2': '学生の実力・成長を可視化できる評価レポート',
  'corporate.sponsor.item3': '採用候補人材への早期接点',
  'corporate.cta.title': '次世代の教育×社会実装を、共に。',
  'corporate.cta.desc': 'HyaQShix百式は、教育機関を超えた「実務学習フィールド」です。AIによるアプリ開発を軸にした100日カリキュラムの中で、企業の実課題を扱うことで学びと価値創造が両立します。',
  
  // Philosophy Page
  'philosophy.title': '私たちの理念',
  'philosophy.subtitle': 'テクノロジーで未来を創る',
  'philosophy.mission.title': 'ミッション',
  'philosophy.mission.desc': 'AIを「使いこなす武器」に変え、創造性を最大化する人材を育てる',
  'philosophy.vision.title': 'ビジョン',
  'philosophy.vision.desc': 'テクノロジーの民主化で、誰もがイノベーターになれる社会を実現',
  'philosophy.values.title': '価値観',
  'philosophy.values.v1': '実践主義：学びは行動から生まれる',
  'philosophy.values.v2': '共創精神：互いに教え、学び合う',
  'philosophy.values.v3': '未来志向：常に次の革新を追求する',
  
  // Contact Page
  'contact.title': 'お問い合わせ',
  'contact.subtitle': 'ご質問・ご相談はこちらから',
  'contact.form.name': 'お名前',
  'contact.form.email': 'メールアドレス',
  'contact.form.subject': '件名',
  'contact.form.message': 'メッセージ',
  'contact.form.submit': '送信する',
  'contact.info.title': '連絡先情報',
  'contact.info.address': '東京都渋谷区・・・',
  'contact.info.email': 'info@hyaqshix.com',
  'contact.info.phone': '03-XXXX-XXXX',
  'contact.info.address.label': '住所',
  'contact.info.email.label': 'メールアドレス',
  'contact.info.phone.label': '電話番号',
  'contact.info.hours': '営業時間',
  'contact.info.hours.weekdays': '平日',
  'contact.info.hours.saturday': '土曜日',
  'contact.info.hours.sunday': '日曜日',
  'contact.info.hours.closed': '定休日'
};

// English translations
const en: TranslationsType = {
  // Navigation
  'nav.home': 'Home',
  'nav.curriculum': 'Curriculum',
  'nav.pricing': 'Pricing',
  'nav.certification': 'Certification',
  'nav.corporate': 'Corporate',
  'nav.philosophy': 'Philosophy',
  'nav.contact': 'Contact',
  'nav.language': 'Language',

  // HomePage
  'home.title': '100 Days, 100 Templates, 100x Productivity.',
  'home.subtitle': 'Develop your future app development skills with AI, at lightning speed.',
  'home.reasons': 'Why Choose Us',
  'home.instant': 'Ready-to-Work Training',
  'home.instant.desc': 'We build job-ready talent through practical projects.',
  'home.ai': 'AI Implementation Skills',
  'home.ai.desc': 'Develop skills to leverage generative AI in development.',
  'home.certification': '4-Level Certification',
  'home.certification.desc': 'Prove your abilities with Silver to Black certifications.',
  'home.community': 'Learn with Peers',
  'home.community.desc': 'An environment where like-minded people learn and grow together.',
  'home.certifications': 'Certification System',
  'home.silver': 'Proof of basic development skills.',
  'home.gold': 'Skilled practitioners with daily development experience.',
  'home.platina': 'Advanced users capable of strategic design and AI integration.',
  'home.black': 'Highest level capable of independent value creation.',
  'home.guarantee': 'Satisfaction Guarantee',
  'home.guarantee.desc': 'Risk-free 30-day money-back guarantee for your peace of mind.',

  // Footer
  'footer.copyright': '© 2024 HyaQShix百式. All rights reserved.',
  
  // Curriculum Page
  'curriculum.title': 'Curriculum',
  'curriculum.subtitle': '100 Days x 100 Apps Program',
  'curriculum.explanation.title': 'Learning Process',
  'curriculum.explanation.p1': 'This learning flow is flexibly optimized according to each student\'s proficiency and progress.',
  'curriculum.explanation.p2': 'The content shown below is just an average curriculum model.',
  'curriculum.explanation.p3': 'Actual progress will be adjusted according to individual understanding, strengths, and goals, so please join with confidence.',
  'curriculum.timeline.title': 'Timeline (Example)',
  'curriculum.timeline.days1.title': 'Days 1-10: Building Foundations',
  'curriculum.timeline.days1.desc': 'HTML/CSS/JavaScript basics + Initial output experience with AI assistance',
  'curriculum.timeline.days2.title': 'Days 11-40: Daily App Creation',
  'curriculum.timeline.days2.desc': 'Develop and release one practical app daily using generative AI',
  'curriculum.timeline.days3.title': 'Days 41-70: Themed Deep Dives',
  'curriculum.timeline.days3.desc': 'Industry specialization, advanced design, UI/UX, security, API integration, etc.',
  'curriculum.timeline.days4.title': 'Days 71-100: Final Projects and Publication',
  'curriculum.timeline.days4.desc': 'Create multiple capstone apps, publish, share, review, and earn certification',
  
  // Pricing Page
  'pricing.title': 'Pricing Plans',
  'pricing.subtitle': 'Choose a plan that fits your goals',
  'pricing.plans.title': 'Available Plans',
  'pricing.description': 'We offer plans tailored to your learning style.',
  'pricing.standard.title': 'Standard',
  'pricing.standard.price': '¥49,800',
  'pricing.standard.desc': 'Plan with basic learning content and support',
  'pricing.premium.title': 'Premium',
  'pricing.premium.price': '¥89,800',
  'pricing.premium.desc': 'Includes personal mentoring and priority support',
  'pricing.enterprise.title': 'Enterprise',
  'pricing.enterprise.price': 'Contact Us',
  'pricing.enterprise.desc': 'Multiple accounts and customization options',
  'pricing.contact': 'Contact us for more information',
  'pricing.guarantee': '30-day money-back guarantee',
  
  // Certification Page
  'certification.title': 'Certification',
  'certification.subtitle': '4-level certification system to prove your abilities',
  'certification.desc': 'Our program offers a 4-level certification system that objectively verifies your learning achievements.',
  'certification.silver.title': 'Silver Certification',
  'certification.silver.desc': 'Certifies that you have basic development skills using AI',
  'certification.gold.title': 'Gold Certification',
  'certification.gold.desc': 'Certifies that you have reached a level where you can develop practical applications',
  'certification.platina.title': 'Platina Certification',
  'certification.platina.desc': 'Certifies advanced-level skills in AI integration and applied design',
  'certification.black.title': 'Black Certification',
  'certification.black.desc': 'Certifies the highest level capable of creating innovation independently',
  'certification.levels.title': 'Four Certification Levels',
  'certification.eval.item1': 'Comprehensive evaluation including app completion, design skills, AI utilization, and implementation capability',
  'certification.eval.item2': 'Qualified individuals receive PDF certificates and are listed in the certification directory (with shareable URL)',
  'certification.eval.item3': 'Higher certifications have increased difficulty and are valuable for employment and VC evaluations',
  
  // Corporate Page
  'corporate.title': 'Corporate Partnership',
  'corporate.subtitle': 'Developing next-generation IT talent together',
  'corporate.benefits.title': 'Benefits of Corporate Partnership',
  'corporate.benefits.b1.title': 'Talent Development',
  'corporate.benefits.b1.desc': 'Improve productivity by upgrading existing employee skills',
  'corporate.benefits.b2.title': 'Recruitment Support',
  'corporate.benefits.b2.desc': 'Introduction to excellent program graduates',
  'corporate.benefits.b3.title': 'Technical Consultation',
  'corporate.benefits.b3.desc': 'Access to technical consultation on AI development',
  'corporate.contact': 'Contact us for corporate inquiries',
  'corporate.sponsor.title': 'Sponsor Program Overview',
  'corporate.sponsor.subtitle': 'What is the HyaQShix Sponsorship Program?',
  'corporate.sponsor.desc': 'HyaQShix, which develops next-generation development talent with 100x productivity in the generative AI era, integrates practical projects from companies with our educational program, enabling learning and practice simultaneously.',
  'corporate.sponsor.item1': 'Practical projects working on your company\'s challenges',
  'corporate.sponsor.item2': 'Evaluation reports that visualize student abilities and growth',
  'corporate.sponsor.item3': 'Early access to potential recruitment candidates',
  'corporate.cta.title': 'Next-generation Education × Social Implementation, Together.',
  'corporate.cta.desc': 'HyaQShix is a "practical learning field" beyond educational institutions. In our 100-day curriculum centered on app development with AI, handling real company challenges creates both learning and value.',
  
  // Philosophy Page
  'philosophy.title': 'Our Philosophy',
  'philosophy.subtitle': 'Creating the future with technology',
  'philosophy.mission.title': 'Mission',
  'philosophy.mission.desc': 'Transform AI into a tool that maximizes creativity and develop talent that can master it',
  'philosophy.vision.title': 'Vision',
  'philosophy.vision.desc': 'Realize a society where anyone can be an innovator through the democratization of technology',
  'philosophy.values.title': 'Values',
  'philosophy.values.v1': 'Pragmatism: Learning comes from action',
  'philosophy.values.v2': 'Co-creation: Teaching and learning from each other',
  'philosophy.values.v3': 'Future-oriented: Always pursuing the next innovation',
  
  // Contact Page
  'contact.title': 'Contact Us',
  'contact.subtitle': 'Questions and inquiries',
  'contact.form.name': 'Name',
  'contact.form.email': 'Email',
  'contact.form.subject': 'Subject',
  'contact.form.message': 'Message',
  'contact.form.submit': 'Submit',
  'contact.info.title': 'Contact Information',
  'contact.info.address': 'Shibuya, Tokyo...',
  'contact.info.email': 'info@hyaqshix.com',
  'contact.info.phone': '03-XXXX-XXXX',
  'contact.info.address.label': 'Address',
  'contact.info.email.label': 'Email',
  'contact.info.phone.label': 'Phone',
  'contact.info.hours': 'Business Hours',
  'contact.info.hours.weekdays': 'Weekdays',
  'contact.info.hours.saturday': 'Saturday',
  'contact.info.hours.sunday': 'Sunday',
  'contact.info.hours.closed': 'Closed'
};

const translations: Record<Language, TranslationsType> = { ja, en };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ja');

  // Initialize language from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ja' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // Update the html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  // Translation function
  const t = (key: TranslationKeys | string): string => {
    if (key in translations[language]) {
      return translations[language][key as TranslationKeys];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 