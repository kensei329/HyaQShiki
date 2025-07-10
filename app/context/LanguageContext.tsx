'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ja' | 'en';

// Certification data types
type BilingualText = {
  ja: string;
  en: string;
};

type CertificationLevel = {
  title: BilingualText;
  passRate: BilingualText;
  description: BilingualText;
  criteria: BilingualText[];
  bgClass: string;
  borderClass: string;
  textClass?: string;
};

type EvaluationProcess = {
  icon: string;
  title: BilingualText;
  description: BilingualText;
};

type GuaranteeCondition = BilingualText;

type CertificateDetail = BilingualText;

type CertificationFee = {
  rank: string;
  fee: string;
  passRate: string;
  renewal: string;
};

type CertificationFeeSection = {
  title: BilingualText;
  description: BilingualText;
  tableHeaders: {
    rank: BilingualText;
    fee: BilingualText;
    passRate: BilingualText;
    renewal: BilingualText;
  };
};

type TranslationKeys = 
  // Navigation
  | 'nav.home' | 'nav.curriculum' | 'nav.pricing' | 'nav.certification' 
  | 'nav.corporate' | 'nav.philosophy' | 'nav.contact' | 'nav.language'
  
  // Footer
  | 'footer.copyright' | 'footer.privacy' | 'footer.terms'
  
  // HomePage
  | 'home.title' | 'home.subtitle' | 'home.reasons' | 'home.communication' 
  | 'home.communication.desc' | 'home.code' | 'home.code.desc' | 'home.certification' 
  | 'home.certification.desc' | 'home.outline' | 'home.outline.desc' 
  | 'home.certifications' | 'home.certifications.subtitle' | 'passRate' | 'learnMore'
  | 'home.silver' | 'home.gold' | 'home.platina' 
  | 'home.black' | 'home.guarantee' | 'home.guarantee.desc' 
  | 'home.methodology.title' | 'home.methodology.subtitle' | 'home.methodology.card1' 
  | 'home.methodology.card2' | 'home.methodology.card3' | 'home.methodology.viewCurriculum'
  | 'home.slideshow.title2' | 'home.slideshow.subtitle2' | 'home.slideshow.title3' | 'home.slideshow.subtitle3'
  
  // Promotional Text
  | 'promo.title1' | 'promo.title2' | 'promo.title3'
  | 'promo.line1' | 'promo.line2' | 'promo.line3'
  | 'promo.section.title' | 'promo.section.subtitle'
  | 'promo.conversational.title' | 'promo.conversational.subtitle'
  | 'promo.contact.subtitle'
  | 'promo.cards.convo' | 'promo.cards.natural' | 'promo.cards.zero' | 'promo.cards.speak'
  
  // Curriculum Page
  | 'curriculum.title' | 'curriculum.subtitle' | 'curriculum.explanation.title'
  | 'curriculum.explanation.p1' | 'curriculum.explanation.p2' | 'curriculum.explanation.p3'
  | 'curriculum.timeline.title' | 'curriculum.timeline.days1.title' | 'curriculum.timeline.days1.desc'
  | 'curriculum.timeline.days2.title' | 'curriculum.timeline.days2.desc'
  | 'curriculum.timeline.days3.title' | 'curriculum.timeline.days3.desc'
  | 'curriculum.timeline.days4.title' | 'curriculum.timeline.days4.desc'
  | 'curriculum.flow.title'
  | 'curriculum.flow.phase1.title' | 'curriculum.flow.phase1.period' | 'curriculum.flow.phase1.desc'
  | 'curriculum.flow.phase1.point1' | 'curriculum.flow.phase1.point2' | 'curriculum.flow.phase1.point3' | 'curriculum.flow.phase1.point4'
  | 'curriculum.flow.phase2.title' | 'curriculum.flow.phase2.period' | 'curriculum.flow.phase2.desc'
  | 'curriculum.flow.phase2.point1' | 'curriculum.flow.phase2.point2' | 'curriculum.flow.phase2.point3' | 'curriculum.flow.phase2.point4'
  | 'curriculum.flow.phase3.title' | 'curriculum.flow.phase3.period' | 'curriculum.flow.phase3.desc'
  | 'curriculum.flow.phase3.point1' | 'curriculum.flow.phase3.point2' | 'curriculum.flow.phase3.point3' | 'curriculum.flow.phase3.point4'
  | 'curriculum.flow.phase4.title' | 'curriculum.flow.phase4.period' | 'curriculum.flow.phase4.desc'
  | 'curriculum.flow.phase4.point1' | 'curriculum.flow.phase4.point2' | 'curriculum.flow.phase4.point3' | 'curriculum.flow.phase4.point4'
  | 'curriculum.flow.phase5.title' | 'curriculum.flow.phase5.period' | 'curriculum.flow.phase5.desc'
  | 'curriculum.flow.phase5.point1' | 'curriculum.flow.phase5.point2' | 'curriculum.flow.phase5.point3' | 'curriculum.flow.phase5.point4'
  | 'curriculum.approach.title'
  | 'curriculum.approach.output.title' | 'curriculum.approach.output.desc'
  | 'curriculum.approach.iteration.title' | 'curriculum.approach.iteration.desc'
  | 'curriculum.approach.community.title' | 'curriculum.approach.community.desc'
  | 'curriculum.approach.mentoring.title' | 'curriculum.approach.mentoring.desc'
  | 'curriculum.tools.title'
  | 'curriculum.tools.ai.title' | 'curriculum.tools.ai.tool1' | 'curriculum.tools.ai.tool2' | 'curriculum.tools.ai.tool3'
  | 'curriculum.tools.ai.tool4' | 'curriculum.tools.ai.tool5'
  | 'curriculum.tools.dev.title' | 'curriculum.tools.dev.tool1' | 'curriculum.tools.dev.tool2' | 'curriculum.tools.dev.tool3'
  | 'curriculum.tools.dev.tool4' | 'curriculum.tools.dev.tool5'
  | 'curriculum.tools.marketing.title' | 'curriculum.tools.marketing.tool1' | 'curriculum.tools.marketing.tool2' | 'curriculum.tools.marketing.tool3'
  | 'curriculum.tools.marketing.tool4' | 'curriculum.tools.marketing.tool5'
  | 'curriculum.tools.business.title' | 'curriculum.tools.business.tool1' | 'curriculum.tools.business.tool2' | 'curriculum.tools.business.tool3'
  | 'curriculum.tools.business.tool4' | 'curriculum.tools.business.tool5'
  | 'curriculum.metrics.title' | 'curriculum.metrics.apps.title' | 'curriculum.metrics.apps.desc'
  | 'curriculum.metrics.monetize.title' | 'curriculum.metrics.monetize.desc'
  | 'curriculum.metrics.main.title' | 'curriculum.metrics.main.desc'
  | 'curriculum.cta.title' | 'curriculum.cta.subtitle' | 'curriculum.cta.free_trial' | 'curriculum.cta.pricing'
  
  // Pricing Page
  | 'pricing.title' | 'pricing.subtitle' | 'pricing.plans.title' | 'pricing.plans.desc'
  | 'pricing.plans.basic.title' | 'pricing.plans.basic.badge' | 'pricing.plans.basic.feature1'
  | 'pricing.plans.basic.feature2' | 'pricing.plans.basic.feature3' | 'pricing.plans.basic.feature4'
  | 'pricing.plans.basic.feature5' | 'pricing.plans.basic.feature6' | 'pricing.plans.basic.cta'
  | 'pricing.plans.monthly.title' | 'pricing.plans.monthly.feature1' | 'pricing.plans.monthly.feature2'
  | 'pricing.plans.monthly.feature3' | 'pricing.plans.monthly.feature4' | 'pricing.plans.monthly.feature5'
  | 'pricing.plans.monthly.feature6' | 'pricing.plans.monthly.cta'
  | 'pricing.plans.sponsor.title' | 'pricing.plans.sponsor.feature1' | 'pricing.plans.sponsor.feature2'
  | 'pricing.plans.sponsor.feature3' | 'pricing.plans.sponsor.feature4' | 'pricing.plans.sponsor.feature5'
  | 'pricing.plans.sponsor.feature6' | 'pricing.plans.sponsor.cta'
  | 'pricing.guarantee.title' | 'pricing.guarantee.subtitle' | 'pricing.guarantee.desc'
  | 'pricing.guarantee.conditions.title' | 'pricing.guarantee.conditions.condition1'
  | 'pricing.guarantee.conditions.condition2' | 'pricing.guarantee.conditions.condition3'
  | 'pricing.guarantee.procedure.title' | 'pricing.guarantee.procedure.desc'
  | 'pricing.guarantee.refund.title' | 'pricing.guarantee.refund.desc'
  | 'pricing.guarantee.notes.title' | 'pricing.guarantee.notes.note1'
  | 'pricing.guarantee.notes.note2' | 'pricing.guarantee.notes.note3'
  | 'pricing.payment.title' | 'pricing.payment.credit.title' | 'pricing.payment.credit.desc'
  | 'pricing.payment.bank.title' | 'pricing.payment.bank.desc'
  | 'pricing.payment.installment.title' | 'pricing.payment.installment.desc'
  | 'pricing.payment.note' | 'pricing.faq.title'
  | 'pricing.contact' | 'pricing.plans.basic.label' | 'pricing.plans.basic.price'
  | 'pricing.plans.basic.currency' | 'pricing.plans.basic.tax'
  | 'pricing.plans.monthly.label' | 'pricing.plans.monthly.price'
  | 'pricing.plans.monthly.currency' | 'pricing.plans.monthly.tax'
  | 'pricing.plans.sponsor.label' | 'pricing.plans.sponsor.price' | 'pricing.plans.sponsor.tax'
  | 'pricing.satisfaction.title' | 'pricing.satisfaction.alt' | 'pricing.satisfaction.guarantee'
  | 'pricing.satisfaction.desc' | 'pricing.satisfaction.eligibility' | 'pricing.satisfaction.application'
  | 'pricing.satisfaction.application.desc' | 'pricing.satisfaction.refund'
  | 'pricing.satisfaction.refund.desc' | 'pricing.satisfaction.notes'
  | 'pricing.cta.title' | 'pricing.cta.subtitle' | 'pricing.cta.button'
  | 'pricing.faq.q1' | 'pricing.faq.a1' | 'pricing.faq.q2' | 'pricing.faq.a2' | 'pricing.faq.q3' | 'pricing.faq.a3'
  | 'pricing.payment.method1.title' | 'pricing.payment.method1.desc'
  | 'pricing.payment.method2.title' | 'pricing.payment.method2.desc'
  | 'pricing.payment.method3.title' | 'pricing.payment.method3.desc'
  | 'home.satisfaction.badge'  // Add this new key
  
  // Certification Page
  | 'certification.title' | 'certification.subtitle' | 'certification.desc'
  | 'certification.about' | 'certification.overview.point1.title' | 'certification.overview.point1.desc'
  | 'certification.overview.point2.title' | 'certification.overview.point2.desc'
  | 'certification.silver.title' | 'certification.silver.desc'
  | 'certification.gold.title' | 'certification.gold.desc'
  | 'certification.platina.title' | 'certification.platina.desc'
  | 'certification.black.title' | 'certification.black.desc'
  | 'certification.levels.title' | 'certification.eval.item1' | 'certification.eval.item2'
  | 'certification.eval.item3'
  
  // Corporate Page
  | 'corporate.title' | 'corporate.subtitle' | 'corporate.description' | 'corporate.benefits.title'
  | 'corporate.benefits.b1.title' | 'corporate.benefits.b1.desc'
  | 'corporate.benefits.b2.title' | 'corporate.benefits.b2.desc'
  | 'corporate.benefits.b3.title' | 'corporate.benefits.b3.desc'
  | 'corporate.benefits.b4.title' | 'corporate.benefits.b4.desc'
  | 'corporate.contact' | 'corporate.sponsor.title' | 'corporate.sponsor.subtitle'
  | 'corporate.sponsor.desc' | 'corporate.sponsor.item1' | 'corporate.sponsor.item2'
  | 'corporate.sponsor.item3' | 'corporate.cta.title' | 'corporate.cta.desc'
  | 'corporate.cta.contact' | 'corporate.cta.partner'
  | 'sponsor.overview.title' | 'sponsor.overview.question' | 'sponsor.overview.description' 
  | 'sponsor.overview.benefit1' | 'sponsor.overview.benefit2'
  | 'sponsor.benefits.title' | 'sponsor.benefits.benefit1' | 'sponsor.benefits.benefit1.description'
  | 'sponsor.benefits.benefit2' | 'sponsor.benefits.benefit2.description'
  | 'sponsor.benefits.benefit3' | 'sponsor.benefits.benefit3.description'
  | 'sponsor.benefits.benefit4' | 'sponsor.benefits.benefit4.description'
  | 'education.integration.title' | 'education.integration.integration' | 'education.integration.description'
  | 'education.integration.example' | 'education.integration.example1' | 'education.integration.example2'
  | 'education.integration.example3' | 'education.integration.example4' | 'education.integration.example5'
  | 'education.integration.brief' | 'education.integration.brief.description'
  | 'special.certified.partner.title' | 'special.certified.partner.certified' | 'special.certified.partner.description'
  | 'special.certified.partner.logo' | 'special.certified.partner.logo.description'
  | 'special.certified.partner.project' | 'special.certified.partner.project.description'
  | 'special.certified.partner.commercialization' | 'special.certified.partner.commercialization.description'
  | 'special.certified.partner.talent' | 'special.certified.partner.talent.description'
  | 'partner.testimonials.title' | 'partner.testimonials.testimonial1' | 'partner.testimonials.name1'
  | 'partner.testimonials.position1' | 'partner.testimonials.testimonial2' | 'partner.testimonials.name2' 
  | 'partner.testimonials.position2'
  | 'contact.partnership.flow.title' | 'contact.partnership.flow.step1' | 'contact.partnership.flow.step2'
  | 'contact.partnership.flow.step3' | 'contact.partnership.flow.step4' | 'contact.partnership.flow.step5'
  | 'contact.partnership.flow.step6' | 'contact.partnership.flow.company.form'
  | 'contact.partnership.flow.company.form.desc' | 'contact.partnership.flow.online.meeting'
  | 'contact.partnership.flow.online.meeting.desc' | 'contact.partnership.flow.project.registration'
  | 'contact.partnership.flow.project.registration.desc' | 'contact.partnership.flow.mentoring'
  | 'contact.partnership.flow.mentoring.desc' | 'contact.partnership.flow.deliverable'
  | 'contact.partnership.flow.deliverable.desc' | 'contact.partnership.flow.feedback'
  | 'contact.partnership.flow.feedback.desc'
  
  // Philosophy Page
  | 'philosophy.title' | 'philosophy.subtitle' | 'philosophy.mission.title' | 'philosophy.mission.desc'
  | 'philosophy.vision.title' | 'philosophy.vision.desc'
  | 'philosophy.values.title' | 'philosophy.values.v1' | 'philosophy.values.v2'
  | 'philosophy.values.v3'
  | 'philosophy.educational.title' | 'philosophy.educational.slogan' | 'philosophy.educational.desc'
  | 'philosophy.practice.title' | 'philosophy.practice.desc'
  | 'philosophy.intensive.title' | 'philosophy.intensive.desc'
  | 'philosophy.community.title' | 'philosophy.community.desc'
  | 'philosophy.values.practical.title' | 'philosophy.values.practical.desc'
  | 'philosophy.values.continuity.title' | 'philosophy.values.continuity.desc'
  | 'philosophy.values.innovation.title' | 'philosophy.values.innovation.desc'
  | 'philosophy.founder.title' | 'philosophy.founder.slogan' | 'philosophy.founder.p1'
  | 'philosophy.founder.p2' | 'philosophy.founder.role' | 'philosophy.founder.name'
  | 'philosophy.vision.short.title' | 'philosophy.vision.short.desc'
  | 'philosophy.vision.medium.title' | 'philosophy.vision.medium.desc'
  | 'philosophy.vision.long.title' | 'philosophy.vision.long.desc'
  | 'philosophy.cta.title' | 'philosophy.cta.desc' | 'philosophy.cta.button'
  
  // Contact Page
  | 'contact.title' | 'contact.subtitle' | 'contact.form.name'
  | 'contact.form.email' | 'contact.form.subject' | 'contact.form.message'
  | 'contact.form.submit' | 'contact.info.title' | 'contact.info.address'
  | 'contact.info.email' | 'contact.info.phone' | 'contact.info.address.label'
  | 'contact.info.email.label' | 'contact.info.phone.label' | 'contact.info.hours'
  | 'contact.info.hours.weekdays' | 'contact.info.hours.saturday' | 'contact.info.hours.sunday'
  | 'contact.info.hours.closed'
  
  // Testimonials Page
  | 'testimonials.title' | 'testimonials.subtitle' | 'testimonials.student1.name'
  | 'testimonials.student1.feedback' | 'testimonials.student1.achievements.title'
  | 'testimonials.student1.achievements.item1' | 'testimonials.student1.achievements.item2'
  | 'testimonials.student1.achievements.item3' | 'testimonials.student1.achievements.item4'
  | 'nav.testimonials'
  | 'curriculum.stack.title' | 'curriculum.stack.requirements.title' | 'curriculum.stack.requirements.head'
  | 'curriculum.stack.requirements.list1' | 'curriculum.stack.requirements.list2'
  | 'curriculum.stack.env.title' | 'curriculum.stack.env.head1' | 'curriculum.stack.env.env1'
  | 'curriculum.stack.env.env2' | 'curriculum.stack.env.head2' | 'curriculum.stack.env.env3'
  | 'curriculum.stack.env.env4' | 'curriculum.stack.frontend.title' | 'curriculum.stack.frontend.head'
  | 'curriculum.stack.frontend.list1' | 'curriculum.stack.frontend.list2' | 'curriculum.stack.frontend.list3'
  | 'curriculum.stack.backend.title' | 'curriculum.stack.backend.head' | 'curriculum.stack.backend.list1'
  | 'curriculum.stack.backend.list2'
  
  // Add these keys for certification evaluation text
  | 'certification.evaluation.criteria.title'
  
  // Certification page section titles
  | 'certification.about' | 'certification.ranks' | 'certification.evaluation.method'
  | 'certification.certificate.about' | 'certification.certificate.format'
  | 'certification.certificate.cycle' | 'certification.certificate.renewal'
  | 'certification.certificate.expiration' | 'certification.exam.fees'
  | 'certification.evaluation.criteria'
  | 'certification.cta.title' | 'certification.cta.subtitle' | 'certification.cta.apply'
  
  // Corporate Testimonials
  | 'corporate.testimonials.person1.name'
  | 'corporate.testimonials.person1.position'
  | 'corporate.testimonials.person1.content'
  | 'corporate.testimonials.person2.name'
  | 'corporate.testimonials.person2.position'
  | 'corporate.testimonials.person2.content'
  | 'testimonials.badge'
  | 'testimonials.more.title' 
  | 'testimonials.more.desc' 
  | 'testimonials.comingsoon'
  | 'testimonials.cta.title'
  | 'testimonials.cta.desc'
  | 'testimonials.cta.free_trial'
  | 'testimonials.cta.pricing';

type TranslationsType = {
  [key in TranslationKeys]: string;
};

// Add new types for certification page
type CertificationHero = {
  title: BilingualText;
  subtitle: BilingualText;
  backgroundImage: string;
};

type CertificationOverview = {
  title: BilingualText;
  description: BilingualText;
  points: {
    title: BilingualText;
    description: BilingualText;
  }[];
};

type CertificationEvaluation = {
  title: BilingualText;
  description: BilingualText;
  processes: {
    icon: string;
    title: BilingualText;
    description: BilingualText;
  }[];
};

type CertificationCertificate = {
  title: BilingualText;
  description: BilingualText;
  details: BilingualText[];
  validityPeriod: BilingualText;
  renewalInfo: BilingualText[];
  expirationInfo: BilingualText;
  sampleImage: {
    src: string;
    alt: BilingualText;
    width: number;
    height: number;
  };
};

type CertificationCTA = {
  title: BilingualText;
  subtitle: BilingualText;
  buttonText: BilingualText;
};

type CorporateTestimonial = {
  name: BilingualText;
  position: BilingualText;
  content: BilingualText;
};

type CorporateTestimonials = {
  testimonials: CorporateTestimonial[];
};

type SiteMetadata = {
  title: BilingualText;
  description: BilingualText;
  openGraph: {
    title: BilingualText;
    description: BilingualText;
    images: string[];
    url: string;
    type: string;
  };
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys | string) => string;
  metadata: SiteMetadata;
  certificationLevels: CertificationLevel[];
  evaluationProcesses: EvaluationProcess[];
  guaranteeConditions: GuaranteeCondition[];
  certificateDetails: CertificateDetail[];
  getCertificationFees: (language: Language) => CertificationFee[];
  certificationHero: CertificationHero;
  certificationOverview: CertificationOverview;
  certificationEvaluation: CertificationEvaluation;
  certificationCertificate: CertificationCertificate;
  certificationCTA: CertificationCTA;
  certificationFeeSection: CertificationFeeSection;
  corporateTestimonials: CorporateTestimonials;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Japanese translations
const ja: TranslationsType = {
  // Navigation
  'nav.home': 'ホーム',
  'nav.curriculum': 'カリキュラム',
  'nav.pricing': '料金',
  'nav.certification': '資格認定',
  'nav.corporate': '法人',
  'nav.philosophy': '理念',
  'nav.contact': 'お問い合わせ',
  'nav.language': '言語',
  'nav.testimonials': '受講生の声',

  // HomePage
  'home.title': '日常会話のみで\nアプリ開発',
  'home.subtitle': '難しいプログラミング言語を覚える必要はありません。\n普通の会話のような感覚で、誰でも簡単にWebアプリを開発できます。\n企画から要件定義・設計を含め、すべて会話形式で構築を行います。',
  'home.slideshow.title2': ' アプリ完成品から\n逆算で学ぶ ',
  'home.slideshow.subtitle2': '完成したアプリのプログラムを見ながら、仕組みを直感的に学べます。\n徐々に難易度を上げながら理解を深めていくので、無理なくプログラミングを身につけられます。',
  'home.slideshow.title3': ' 資格認定制度で\nスキル可視化 ',
  'home.slideshow.subtitle3': 'シルバー・ゴールド・プラチナ・ブラックの4段階の認定制度により、自分の習熟度や実力を客観的に証明できます。\n就職や案件獲得にも活用できる信頼性の高い評価制度です。',
  'home.reasons': 'HyaQShikiの特徴',
  'home.communication': '日常会話のみでアプリ開発',
  'home.communication.desc': '難しいプログラミング言語を覚える必要はありません。\n普通の会話のような感覚で、誰でも簡単にWebアプリを開発できます。\n企画から要件定義・設計を含め、すべて会話形式で構築を行います。',
  'home.code': 'アプリ完成品から逆算で学ぶ',
  'home.code.desc': '完成したアプリのプログラムを見ながら、仕組みを直感的に学べます。\n徐々に難易度を上げながら理解を深めていくので、無理なくプログラミングを身につけられます。',
  'home.certification': '資格認定制度でスキル可視化',
  'home.certification.desc': 'シルバー・ゴールド・プラチナ・ブラックの4段階の認定制度により、自分の習熟度や実力を客観的に証明できます。\n就職や案件獲得にも活用できる信頼性の高い評価制度です。',
  'home.certifications': '認定制度',
  'home.certifications.subtitle': 'スキルを客観的に証明する4段階の認定レベル',
  'passRate': '合格率',
  'learnMore': '詳細を見る',
  'home.silver': '基本的な開発力を有する証明。',
  'home.gold': '毎日の開発実践を積んだ実力者。',
  'home.platina': '企画設計の上流と開発が可能な上級者。',
  'home.black': '自立して価値創造できる最高レベル。',
  'home.guarantee': '満足保証制度',
  'home.guarantee.desc': '開始後14日間は全額返金保証',
  'home.methodology.viewCurriculum': 'カリキュラムの詳細を見る',
  'home.outline': 'カリキュラム概要',
  'home.outline.desc': '包括的な学習プログラム',
  'home.methodology.title': '独自メソドロジー',
  'home.methodology.subtitle': '効果的な学習方法',
  'home.methodology.card1': '実践型学習',
  'home.methodology.card2': '反復練習',
  'home.methodology.card3': 'フィードバック',
  
  // Promotional Text
  'promo.title1': '会話中心',
  'promo.title2': '超高速開発',
  'promo.title3': '企画重視',
  'promo.line1': '「こうしたい」「こんな見た目がいい」などの話し言葉で開発を進めます。',
  'promo.line2': 'コードを書く時間をほぼゼロにし、数分〜数時間でアプリが形になります。',
  'promo.line3': '色・動き・構成などを「雰囲気（vibe）」でAIに伝えることで、直感的にデザインできます。',
  'promo.section.title': '日常会話でアプリ開発するVIBEコーディングとは？',
  'promo.section.subtitle': 'VIBEコーディングは、会話形式のアプローチでWebアプリを作れる新しい開発スタイルです。',
  'promo.conversational.title': '会話形式の',
  'promo.conversational.subtitle': '私たちの革新的なアプローチは、会話をアプリ開発の中心に据えています',
  'promo.contact.subtitle': '会話形式の開発アプローチについて質問がありますか？今すぐお問い合わせください！',
  'promo.cards.convo': '会話 vs コード',
  'promo.cards.natural': '自然言語プロンプト',
  'promo.cards.zero': 'プログラミング不要',
  'promo.cards.speak': '話すだけで機能追加',
  
  // Footer
  'footer.copyright': '©2025',
  'footer.privacy': 'プライバシーポリシー',
  'footer.terms': '利用規約',
  
  // Curriculum Page
  'curriculum.title': 'カリキュラム',
  'curriculum.subtitle': '手を動かしながら\n自然にスキルが身につく3ヶ月',
  'curriculum.explanation.title': 'どう学んでいくのか？',
  'curriculum.explanation.p1': '"日常会話でアプリを開発する体験"を通じて、自然とプログラミングの本質を学べる設計になっています。',
  'curriculum.explanation.p2': 'プログラミングの代わりにAIと対話しながら、Webアプリや機能を形にしていく実践的な内容です。',
  'curriculum.explanation.p3': '※本カリキュラムの内容は受講生の進捗状況に応じて柔軟に変更される場合があります。',
  'curriculum.timeline.title': 'タイムライン（例）',
  'curriculum.timeline.days1.title': 'Day1-10：基礎固め',
  'curriculum.timeline.days1.desc': 'HTML/CSS/JavaScriptの基礎 + AIアシストによる初期アウトプット体験',
  'curriculum.timeline.days2.title': 'Day11-40：毎日アプリ制作',
  'curriculum.timeline.days2.desc': '毎日1つの実用的アプリを生成AIで開発・リリース',
  'curriculum.timeline.days3.title': 'Day41-70：テーマ別深堀',
  'curriculum.timeline.days3.desc': '業界特化・応用設計・UI/UX・セキュリティ・API連携など',
  'curriculum.timeline.days4.title': 'Day71-100：最終制作と公開',
  'curriculum.timeline.days4.desc': '集大成アプリを複数制作し、公開・共有・審査・資格認定へ',
  'curriculum.flow.title': '学習の流れ',
  'curriculum.flow.phase1.title': '基礎固め',
  'curriculum.flow.phase1.period': 'Day1',
  'curriculum.flow.phase1.desc': '開発の基本作法とVIBEコーディングの基礎を習得。開発環境のセットアップと基本的なアプリケーション構造の理解。',
  'curriculum.flow.phase1.point1': '開発環境のセットアップを行う',
  'curriculum.flow.phase1.point2': '生成AIツールの操作基礎を身につける',
  'curriculum.flow.phase1.point3': 'プロンプトの書き方と最適化を学ぶ',
  'curriculum.flow.phase1.point4': '基本的なWebアプリの構築を行う',
  'curriculum.flow.phase2.title': '入門Webアプリケーション開発',
  'curriculum.flow.phase2.period': 'Day2',
  'curriculum.flow.phase2.desc': '実用的なWebアプリケーション開発を行う。徐々に複雑度を上げていき、実践的なスキルを身につける。',
  'curriculum.flow.phase2.point1': 'フロントエンド開発の基礎を身につける',
  'curriculum.flow.phase2.point2': '要件定義および仕様書を作成のやり方を学ぶ',
  'curriculum.flow.phase2.point3': 'トライアンドエラーを繰り返しながら開発経験を積む', 
  'curriculum.flow.phase2.point4': 'ソースコードから逆算しAIに解説してもらいながら学ぶ',
  'curriculum.flow.phase3.title': '基礎Webアプリケーション開発',
  'curriculum.flow.phase3.period': 'Day3',
  'curriculum.flow.phase3.desc': 'Next.jsを使いWebアプリケーション開発のUI/UX表現力を高める。',
  'curriculum.flow.phase3.point1': 'Next.jsを使うことのメリットを学ぶ',
  'curriculum.flow.phase3.point2': 'ローカルホストを活用した開発を実践する',
  'curriculum.flow.phase3.point3': 'npmコマンドの概念理解を身につける',
  'curriculum.flow.phase3.point4': 'UI/UXデザインの表現力を高める',
  'curriculum.flow.phase4.title': '入門バックエンド開発',
  'curriculum.flow.phase4.period': 'Day4',
  'curriculum.flow.phase4.desc': 'DBを使ったバックエンド開発を活用することでデータを中央で制御・管理するメリットを体験する。',
  'curriculum.flow.phase4.point1': '簡易なバックエンドを実装する',
  'curriculum.flow.phase4.point2': '簡易なデータベースを活用する',
  'curriculum.flow.phase4.point3': 'ユーザー間でのデータ共有を体験する',
  'curriculum.flow.phase4.point4': 'APIを活用したデータ連携を実装する',
  'curriculum.flow.phase5.title': '卒業プロジェクト',
  'curriculum.flow.phase5.period': 'Day5&Day6',
  'curriculum.flow.phase5.desc': '学んだ全てを統合した最終プロジェクトに取り組み、実際に現場/市場に投入可能なレベルの製品を作り上げる。',
  'curriculum.flow.phase5.point1': 'ビジネスプランの完成させる',
  'curriculum.flow.phase5.point2': '製品の完成とテストを行う',
  'curriculum.flow.phase5.point3': '関係者各位との要件調整を行う',
  'curriculum.flow.phase5.point4': '卒業プレゼンテーションを行う',
  'curriculum.approach.title': '学習アプローチ',
  'curriculum.approach.output.title': 'アウトプット中心',
  'curriculum.approach.output.desc': '生成AIから効率的に学びながら、毎日アプリケーションを実際に開発することで、実践的なスキルを身につけていきます。',
  'curriculum.approach.iteration.title': '反復と改善',
  'curriculum.approach.iteration.desc': '同じパターンを繰り返し実践し、フィードバックを基に継続的に改善することで、確実にスキルを定着させます。',
  'curriculum.approach.community.title': 'コミュニティ学習',
  'curriculum.approach.community.desc': '受講生同士の相互フィードバックやコラボレーションを通じて、多角的な視点を養います。',
  'curriculum.approach.mentoring.title': 'コーチング',
  'curriculum.approach.mentoring.desc': '担当メンターが、学習の計画づくりや、つまずいたときの乗り越え方まで、しっかりサポートします。',
  'curriculum.tools.title': '使用ツールと技術',
  'curriculum.tools.ai.title': 'AIツール',
  'curriculum.tools.ai.tool1': 'ChatGPT (OpenAI)',
  'curriculum.tools.ai.tool2': 'Claude (Anthropic)',
  'curriculum.tools.ai.tool3': 'Midjourney',
  'curriculum.tools.ai.tool4': 'DALL-E',
  'curriculum.tools.ai.tool5': 'AutoGPT',
  'curriculum.tools.dev.title': '開発ツール',
  'curriculum.tools.dev.tool1': 'GitHub Copilot',
  'curriculum.tools.dev.tool2': 'Replit',
  'curriculum.tools.dev.tool3': 'VS Code',
  'curriculum.tools.dev.tool4': 'Cursor',
  'curriculum.tools.dev.tool5': 'Firebase',
  'curriculum.tools.marketing.title': 'マーケティングツール',
  'curriculum.tools.marketing.tool1': 'Google Analytics',
  'curriculum.tools.marketing.tool2': 'Meta Business Suite',
  'curriculum.tools.marketing.tool3': 'Mailchimp',
  'curriculum.tools.marketing.tool4': 'Hotjar',
  'curriculum.tools.marketing.tool5': 'SEO最適化ツール',
  'curriculum.tools.business.title': 'ビジネスツール',
  'curriculum.tools.business.tool1': 'Stripe',
  'curriculum.tools.business.tool2': 'QuickBooks',
  'curriculum.tools.business.tool3': 'Pitch',
  'curriculum.tools.business.tool4': 'Notion',
  'curriculum.tools.business.tool5': 'Airtable',
  'curriculum.metrics.title': '成功の指標',
  'curriculum.metrics.apps.title': '機能',
  'curriculum.metrics.apps.desc': '100機能を開発し、実践的なポートフォリオを構築します。',
  'curriculum.metrics.monetize.title': 'マネタイズ可能プロジェクト',
  'curriculum.metrics.monetize.desc': '開発したアプリを収益できるレベルのクオリティを目指すことをサポートします。',
  'curriculum.metrics.main.title': 'メインプロジェクト',
  'curriculum.metrics.main.desc': '最終的に1つの主力プロジェクトを完成させ、実際のビジネスとして展開できる準備を整えます。',
  'curriculum.cta.title': 'あなたのキャリアを加速させませんか？',
  'curriculum.cta.subtitle': 'HyaQShiki-百式-プログラムで、AI時代を生き抜くスキルと実績を同時に手に入れましょう。',
  'curriculum.cta.free_trial': '無料体験に申し込む',
  'curriculum.cta.pricing': '料金プランを見る',
  
  // Pricing Page
  'pricing.title': '価格&保証',
  'pricing.subtitle': '未来への投資、あなたのキャリアを加速させる最適なプラン',
  'pricing.plans.title': '受講料金プラン',
  'pricing.plans.desc': 'HyaQShiki-百式-では、学習ニーズと予算に合わせた複数の受講プランをご用意しています。すべてのプランで同じカリキュラムと高品質の学習体験を提供します。',
  'pricing.plans.basic.title': 'ベーシックプラン',
  'pricing.plans.basic.badge': '人気',
  'pricing.plans.basic.feature1': '一括払い割引き',
  'pricing.plans.basic.feature2': 'AIによる24時間サポート',
  'pricing.plans.basic.feature3': '隔週1回のグループメンタリング',
  'pricing.plans.basic.feature4': 'コミュニティへのアクセス',
  'pricing.plans.basic.feature5': '3ヶ月受講契約',
  'pricing.plans.basic.feature6': 'HyaQShiki資格受験',
  'pricing.plans.basic.cta': '今すぐ申し込む',
  'pricing.plans.basic.label': 'ベーシックプラン',
  'pricing.plans.basic.price': '298,000',
  'pricing.plans.basic.currency': '円',
  'pricing.plans.basic.tax': '（税込）/　一括払い',
  'pricing.plans.monthly.title': '月額プラン',
  'pricing.plans.monthly.feature1': '月々分割払い',
  'pricing.plans.monthly.feature2': 'AIによる24時間サポート',
  'pricing.plans.monthly.feature3': '隔週1回のグループメンタリング',
  'pricing.plans.monthly.feature4': 'コミュニティへのアクセス',
  'pricing.plans.monthly.feature5': '3ヶ月受講契約',
  'pricing.plans.monthly.feature6': 'HyaQShiki資格受験',
  'pricing.plans.monthly.cta': '今すぐ申し込む',
  'pricing.plans.monthly.label': '月額プラン',
  'pricing.plans.monthly.price': '110,000',
  'pricing.plans.monthly.currency': '円',
  'pricing.plans.monthly.tax': '（税込）/ 月',
  'pricing.plans.sponsor.title': 'スポンサー枠プラン',
  'pricing.plans.sponsor.feature1': '授業料無料',
  'pricing.plans.sponsor.feature2': '企業案件実務参加条件あり',
  'pricing.plans.sponsor.feature3': '審査制の選考あり',
  'pricing.plans.sponsor.feature4': '成果提出義務あり',
  'pricing.plans.sponsor.feature5': '毎週のレポート提出',
  'pricing.plans.sponsor.feature6': 'HyaQShiki資格受験',
  'pricing.plans.sponsor.cta': '問合わせする',
  'pricing.plans.sponsor.label': 'スポンサー枠プラン',
  'pricing.plans.sponsor.price': 'お問い合わせ',
  'pricing.plans.sponsor.tax': '（料金詳細）',
  'pricing.guarantee.title': '満足保証制度',
  'pricing.guarantee.subtitle': '14日間の全額返金保証',
  'pricing.guarantee.desc': '授業の品質に自信があるからこそ、HyaQShiki-百式-は「全額返金保証」をご用意。開始から14日以内なら、理由を問わず全額返金いたします。',
  'pricing.guarantee.conditions.title': '適用条件',
  'pricing.guarantee.conditions.condition1': '受講開始から14日以内に申請すること',
  'pricing.guarantee.conditions.condition2': '所定の課題提出や進捗率など、評価対象条件を満たしていること',
  'pricing.guarantee.conditions.condition3': '受講生本人からの申請であること',
  'pricing.guarantee.procedure.title': '申請手順',
  'pricing.guarantee.procedure.desc': '担当メンターまたはカスタマーサポートに返金希望の旨をお伝えください。専用フォームをご案内し、必要な情報をご提出いただきます。',
  'pricing.guarantee.refund.title': '返金処理',
  'pricing.guarantee.refund.desc': '申請受理から14営業日以内に、お支払い時と同じ方法で返金処理を行います。分割払いの場合は、お支払い済みの金額のみが返金対象となります。',
  'pricing.guarantee.notes.title': '注意事項',
  'pricing.guarantee.notes.note1': '本制度の利用は、受講生一人につき一度限りとします',
  'pricing.guarantee.notes.note2': '返金後、同一プログラムへの再受講はできません',
  'pricing.guarantee.notes.note3': '不正行為や虚偽の申請が判明した場合、返金の対象外とします',
  'pricing.payment.title': 'お支払い方法',
  'pricing.payment.credit.title': 'クレジットカード',
  'pricing.payment.credit.desc': 'VISA, MasterCard, JCB, American Express, Diners Clubがご利用いただけます。',
  'pricing.payment.bank.title': '銀行振込',
  'pricing.payment.bank.desc': 'お申し込み後、振込先情報をご案内いたします。振込手数料はお客様負担となります。',
  'pricing.payment.installment.title': '分割払い',
  'pricing.payment.installment.desc': '提携ファイナンス会社による分割払いプランもご利用いただけます。審査が必要です。',
  'pricing.payment.note': '※法人でのお申し込みも受け付けております。請求書払いをご希望の場合は、お問い合わせフォームよりご連絡ください。',
  'pricing.faq.title': 'よくある質問',
  'pricing.contact': 'その他の質問はお問い合わせください',
  'pricing.satisfaction.title': '満足保証制度',
  'pricing.satisfaction.alt': 'HyaQShiki-百式-の満足保証',
  'pricing.satisfaction.guarantee': '14日間の全額返金保証',
  'pricing.satisfaction.desc': '授業の品質に自信があるからこそ、HyaQShiki-百式-は「全額返金保証」をご用意。開始から14日以内なら、理由を問わず全額返金いたします。',
  'pricing.satisfaction.eligibility': '適用条件',
  'pricing.satisfaction.application': '申請手順',
  'pricing.satisfaction.application.desc': '担当メンターまたはカスタマーサポートに返金希望の旨をお伝えください。専用フォームをご案内し、必要な情報をご提出いただきます。',
  'pricing.satisfaction.refund': '返金処理',
  'pricing.satisfaction.refund.desc': '申請受理から14営業日以内に、お支払い時と同じ方法で返金処理を行います。分割払いの場合は、お支払い済みの金額のみが返金対象となります。',
  'pricing.satisfaction.notes': '注意事項',
  'pricing.cta.title': 'まずは無料体験に申込んでみませんか？',
  'pricing.cta.subtitle': '生産性を100倍に引き上げる学びを、今ここから始めましょう。',
  'pricing.cta.button': '無料体験に申し込む',
  
  // FAQs
  'pricing.faq.q1': 'パソコンは必要ですか？',
  'pricing.faq.a1': 'はい、必要です。ご要望に応じてパソコン取得のサポートも可能です。',
  'pricing.faq.q2': '受講期間の延長は可能ですか？',
  'pricing.faq.a2': 'はい、追加料金（月額49,800円）で受講期間を延長することができます。延長は最大3ヶ月まで可能です。',
  'pricing.faq.q3': '受講後のサポートはありますか？',
  'pricing.faq.a3': '卒業後も、卒業生コミュニティに参加できます。また、追加のメンターサポートや、就職・起業支援プログラムもオプションでご用意しています。',
  
  // Payment methods
  'pricing.payment.method1.title': 'クレジットカード',
  'pricing.payment.method1.desc': 'VISA, MasterCard, JCB, American Express, Diners Clubがご利用いただけます。',
  'pricing.payment.method2.title': '銀行振込',
  'pricing.payment.method2.desc': 'お申し込み後、振込先情報をご案内いたします。振込手数料はお客様負担となります。',
  'pricing.payment.method3.title': '仮想通貨払い',
  'pricing.payment.method3.desc': 'Bitcoin、Ethereum、USDTがご利用いただけます。',
  
  // Certification Page
  'certification.title': '資格認定',
  'certification.subtitle': '能力を証明する4段階の認定制度',
  'certification.desc': '当プログラムでは、学習の成果を客観的に証明できる4段階の資格制度を設けています。',
  'certification.about': '認定制度について',
  'certification.overview.point1.title': '実践的なスキル評価',
  'certification.overview.point1.desc': '理論だけでなく、実際のアプリケーション開発能力を評価します。',
  'certification.overview.point2.title': '国際的な認知',
  'certification.overview.point2.desc': 'グローバルに通用する技術者としてのスキルを証明します。',
  'certification.silver.title': 'Silver認定',
  'certification.silver.desc': 'AIを活用した基本的な開発スキルを有することを証明',
  'certification.gold.title': 'Gold認定',
  'certification.gold.desc': '実践的なアプリ開発ができるレベルに到達したことを証明',
  'certification.platina.title': 'Platinum認定',
  'certification.platina.desc': '高度なAI統合と応用設計ができる上級者の証明',
  'certification.black.title': 'Black認定',
  'certification.black.desc': '自立してイノベーションを起こせる最高レベルの証明',
  'certification.levels.title': '4つの認定ランク',
  'certification.evaluation.method': '評価方法',
  'certification.eval.item1': 'アプリ完成度、設計力、AI活用度、実装力などで総合評価',
  'certification.eval.item1.desc': '提出された書類とポートフォリオの審査',
  'certification.eval.item2': '合格者はPDF証明書発行 + 認定者リストに掲載（URL共有可）',
  'certification.eval.item2.desc': 'AI活用技術とコーディングスキルの実技試験',
  'certification.eval.item3': '上位資格ほど難易度が高く、採用やVC評価にも有効',
  'certification.eval.item3.desc': '技術力とコミュニケーション能力の確認',
  'certification.certificate.about': '認定証について',
  'certification.certificate.format': '証明書形式',
  'certification.certificate.desc': 'デジタル技術を活用した最新の認定証システム',
  'certification.certificate.detail1': 'デジタル証明書',
  'certification.certificate.detail2': 'ブロックチェーン認証',
  'certification.certificate.detail3': '国際的に認められた資格',
  'certification.certificate.cycle': '認定サイクル',
  'certification.certificate.validity': '3年間有効',
  'certification.certificate.renewal': '更新要件',
  'certification.certificate.renewal1': '継続教育要件',
  'certification.certificate.renewal2': '技術更新の確認',
  'certification.certificate.expiration': '有効期限・更新',
  'certification.certificate.expirationInfo': '3年後に更新が必要',
  'certification.exam.fees': '受験料金',
  'certification.cta.title': '公式にAI技術者としてのスキルを証明し、キャリアの可能性を広げましょう。',
  'certification.cta.subtitle': 'HyaQShiki認定は、生成AI時代におけるスキルを証明する強力なツールです。',
  'certification.cta.apply': '認定試験に申し込む',
  'certification.evaluation.criteria.title': '認定基準',
  'certification.about': '認定資格について',
  'certification.ranks': '認定ランク',
  'certification.certificate.about': '証明書について',
  'certification.certificate.format': '証明書の配布形式',
  'certification.certificate.cycle': '認定サイクル',
  'certification.certificate.renewal': '更新費用',
  'certification.certificate.expiration': '更新期限・失効ルール',
  'certification.exam.fees': '資格受験料',
  'certification.evaluation.criteria': '評価基準：',
  'certification.cta.title': 'AIスキルを公式に証明し、キャリアの可能性を広げませんか？',
  'certification.cta.subtitle': 'HyaQShiki認定資格は、生成AI時代のスキルを証明する強力なツールです。',
  'certification.cta.apply': '資格受験に申し込む',
  'home.satisfaction.badge': 'サービス品質保証',
  
  // Corporate Page
  'corporate.title': '企業連携',
  'corporate.subtitle': '次世代のIT人材育成を共に',
  'corporate.description': '次世代IT人材を共に育てる企業連携プログラム',
  'corporate.benefits.title': '企業連携のメリット',
  'corporate.benefits.b1.title': '人材育成',
  'corporate.benefits.b1.desc': '既存社員のスキルアップで生産性向上',
  'corporate.benefits.b2.title': '採用支援',
  'corporate.benefits.b2.desc': '優秀な受講修了者を紹介',
  'corporate.benefits.b3.title': '技術相談',
  'corporate.benefits.b3.desc': 'AI開発に関する技術相談窓口の利用',
  'corporate.benefits.b4.title': 'イノベーション創出',
  'corporate.benefits.b4.desc': '学生との連携による新たなソリューション創出',
  'corporate.contact': '法人向けのお問い合わせはこちら',
  'corporate.sponsor.title': 'スポンサー制度の概要',
  'corporate.sponsor.subtitle': 'HyaQShikiスポンサー制度とは？',
  'corporate.sponsor.desc': '生成AI時代に100倍の生産力を発揮する次世代開発人材を育成するHyaQShiki-百式-では、企業からの実務プロジェクトを教育プログラムと融合し、学習と実践を同時に実現します。',
  'corporate.sponsor.item1': '貴社課題に取り組む実務型プロジェクト',
  'corporate.sponsor.item2': '受講生の実力・成長を可視化できる評価レポート',
  'corporate.sponsor.item3': '採用候補人材への早期接点',
  'corporate.cta.title': '次世代の教育×社会実装を、共に。',
  'corporate.cta.desc': 'HyaQShiki-百式-は、教育機関を超えた「実務学習フィールド」です。AIによるアプリ開発を軸にした100日カリキュラムの中で、企業の実課題を扱うことで学びと価値創造が両立します。',
  'corporate.cta.contact': 'お問い合わせ',
  'corporate.cta.partner': 'パートナー詳細',
  
  // Philosophy Page
  'philosophy.title': '私たちの理念',
  'philosophy.subtitle': 'テクノロジーで未来を創る',
  'philosophy.educational.title': '教育理念',
  'philosophy.educational.slogan': 'AIで10倍の創造力を',
  'philosophy.educational.desc': '私たちは、AIを活用して人間の創造性を最大限に引き出すための教育を提供します。テクノロジーは「使いこなせるもの」になってこそ価値があり、それを実現するのが私たちの使命です。',
  'philosophy.practice.title': '実践主義',
  'philosophy.practice.desc': '実際に手を動かし、アプリケーションを作りながら学ぶことで、本当の力を身につけます。',
  'philosophy.intensive.title': '集中的学習',
  'philosophy.intensive.desc': '短期間で集中的に学ぶことで、効率的にスキルを身につけ、すぐに実務で活かせる実力を養います。',
  'philosophy.community.title': 'コミュニティ',
  'philosophy.community.desc': '同じ志を持つ仲間との交流を通じて、互いに学び合い、高め合う環境を大切にします。',
  'philosophy.values.practical.title': '実践力重視',
  'philosophy.values.practical.desc': '知識よりも実践力を重視し、実際に使えるスキルを身につけることを最優先します。',
  'philosophy.values.continuity.title': '継続的な成長',
  'philosophy.values.continuity.desc': '一時的な学びではなく、継続的に成長し続けるためのマインドセットと環境を提供します。',
  'philosophy.values.innovation.title': '革新性',
  'philosophy.values.innovation.desc': '常に最新のテクノロジーとトレンドを取り入れ、革新的な教育方法を追求します。',
  'philosophy.founder.title': '創設者メッセージ',
  'philosophy.founder.slogan': 'テクノロジーの民主化を目指して',
  'philosophy.founder.p1': 'HyaQShiki-百式-は、テクノロジーの恩恵をより多くの人々に届けるという思いから始まりました。AIの力を活用することで、専門的な知識がなくても、誰もが自分のアイデアを形にできる世界を作りたいと考えています。',
  'philosophy.founder.p2': '私たちは、単なるプログラミングスクールではなく、次世代のクリエイターを育てる場所でありたいと思います。技術だけでなく、問題解決能力や創造力を育み、AIと共に新しい価値を生み出せる人材を世に送り出すことが、私たちの使命です。',
  'philosophy.founder.role': '創設者・CEO',
  'philosophy.founder.name': '白石 憲正',
  'philosophy.vision.short.title': '短期ビジョン',
  'philosophy.vision.short.desc': '全国3000人の次世代開発者を育成し、デジタルイノベーションの担い手を増やします。',
  'philosophy.vision.medium.title': '中期ビジョン',
  'philosophy.vision.medium.desc': 'アジア全域に教育プログラムを展開し、国境を越えたイノベーターのネットワークを構築します。',
  'philosophy.vision.long.title': '長期ビジョン',
  'philosophy.vision.long.desc': 'AI活用スキルの世界標準を確立し、誰もが自分のアイデアを形にできる社会を実現します。',
  'philosophy.cta.title': '私たちと一緒に未来を創りませんか？',
  'philosophy.cta.desc': 'HyaQShiki-百式-で、AI時代のクリエイターとしての第一歩を踏み出しましょう。',
  'philosophy.cta.button': 'お問い合わせ',
  
  'sponsor.overview.title': 'スポンサープログラム概要',
  'sponsor.overview.question': 'HyaQShikiスポンサープログラムとは？',
  'sponsor.overview.description': '生成AI時代に100倍の生産力を発揮する次世代開発人材を育成するHyaQShiki-百式-では、企業からの実務プロジェクトを教育プログラムと融合し、学習と実践を同時に実現します。',
  'sponsor.overview.benefit1': '実務経験を積みながら学ぶ学生に、実際の企業課題に取り組んでもらうことができます',
  'sponsor.overview.benefit2': '将来の採用候補となる優秀な人材との早期接点を得ることができます',
  'sponsor.benefits.title': 'スポンサー企業のメリット',
  'sponsor.benefits.benefit1': 'イノベーション創出',
  'sponsor.benefits.benefit1.description': '最新のAI技術と若い発想力による、新たな視点でのソリューション開発',
  'sponsor.benefits.benefit2': '人材育成支援',
  'sponsor.benefits.benefit2.description': '自社社員のAIリテラシー向上と、学生との交流による刺激',
  'sponsor.benefits.benefit3': '採用パイプライン',
  'sponsor.benefits.benefit3.description': '優秀な学生の早期発掘と、採用に向けた関係構築',
  'sponsor.benefits.benefit4': 'ブランディング',
  'sponsor.benefits.benefit4.description': '次世代育成に取り組む先進企業としてのブランド価値向上',
  'education.integration.title': '企業課題と教育の融合',
  'education.integration.integration': 'リアルな課題で実践的なスキルを',
  'education.integration.description': 'HyaQShiki-百式-では、企業の実際の課題やプロジェクトを教育カリキュラムに取り入れることで、学生に実践的な経験を提供するとともに、企業にとっても価値のある成果物の創出を目指します。',
  'education.integration.example': '連携可能な課題例',
  'education.integration.example1': 'Webアプリケーション開発',
  'education.integration.example2': 'データ分析・可視化',
  'education.integration.example3': 'AI機能統合',
  'education.integration.example4': 'UI/UXデザイン改善',
  'education.integration.example5': '業務効率化ツール',
  'education.integration.brief': 'プロジェクト概要',
  'education.integration.brief.description': '企業から提供された課題は、学生のレベルやカリキュラムの進行状況に合わせて適切な形に調整され、教育的価値と実務的価値の両方を兼ね備えたプロジェクトとして実施されます。',
  'special.certified.partner.title': '認定パートナー制度',
  'special.certified.partner.certified': 'HyaQShiki認定パートナーになる',
  'special.certified.partner.description': '継続的な協力関係を結ぶ企業には、HyaQShiki認定パートナーとしての特別なステータスと特典をご用意しています。',
  'special.certified.partner.logo': '認定ロゴの使用',
  'special.certified.partner.logo.description': '自社のウェブサイトやマーケティング資料で、HyaQShiki認定パートナーとしてのロゴを使用できます。',
  'special.certified.partner.project': '優先プロジェクト参加',
  'special.certified.partner.project.description': '学生の研究プロジェクトや卒業制作に、優先的に企業課題を提供できます。',
  'special.certified.partner.commercialization': '商用化支援',
  'special.certified.partner.commercialization.description': '学生が開発した優れたソリューションの商用化や実装について、優先的にサポートを受けられます。',
  'special.certified.partner.talent': '人材紹介',
  'special.certified.partner.talent.description': '卒業生の中から、企業のニーズに合った人材を優先的に紹介します。',
  'partner.testimonials.title': 'パートナー企業の声',
  'partner.testimonials.testimonial1': 'HyaQShiki-百式-との連携を通じて、私たちは社内で眠っていた課題に新しい視点からのソリューションを得ることができました。学生たちの柔軟な発想と最新技術への理解は、私たちの期待を大きく上回るものでした。',
  'partner.testimonials.name1': '山田 健太郎',
  'partner.testimonials.position1': '株式会社テクノフューチャー CTO',
  'partner.testimonials.testimonial2': '当初は人材育成の一環として始めたプログラムでしたが、結果的に新規事業のアイデア創出にもつながり、大きな価値を得ることができました。真剣に取り組む学生の姿勢に、社員も刺激を受けています。',
  'partner.testimonials.name2': '佐藤 美咲',
  'partner.testimonials.position2': 'グローバルイノベーション株式会社 人事部長',
  'contact.partnership.flow.title': 'パートナーシップの流れ',
  'contact.partnership.flow.step1': '企業情報登録',
  'contact.partnership.flow.step2': 'オンライン面談',
  'contact.partnership.flow.step3': 'プロジェクト登録',
  'contact.partnership.flow.step4': 'メンタリング',
  'contact.partnership.flow.step5': '成果物納品',
  'contact.partnership.flow.step6': 'フィードバック',
  'contact.partnership.flow.company.form': '企業情報登録',
  'contact.partnership.flow.company.form.desc': '専用フォームから企業情報をご登録いただきます。連携に関する基本的な要望や課題の概要もこの段階でお知らせください。',
  'contact.partnership.flow.online.meeting': 'オンライン面談',
  'contact.partnership.flow.online.meeting.desc': '担当者との初回ミーティングを行い、企業のニーズや課題の詳細、連携の具体的な方向性について話し合います。',
  'contact.partnership.flow.project.registration': 'プロジェクト登録',
  'contact.partnership.flow.project.registration.desc': '具体的なプロジェクト内容を決定し、学生への課題として適切な形に調整します。必要に応じて機密保持契約などを締結します。',
  'contact.partnership.flow.mentoring': 'メンタリング',
  'contact.partnership.flow.mentoring.desc': 'プロジェクト期間中、必要に応じて企業担当者から学生へのアドバイスや方向性の確認を行います。',
  'contact.partnership.flow.deliverable': '成果物納品',
  'contact.partnership.flow.deliverable.desc': 'プロジェクト完了後、成果物の納品と報告会を実施します。学生からの発表と質疑応答を通じて、成果を確認します。',
  'contact.partnership.flow.feedback': 'フィードバック',
  'contact.partnership.flow.feedback.desc': 'After project completion, feedback will be collected from both company and students and used for future improvements. We will also consider ongoing partnerships.',
  'philosophy.mission.title': 'ミッション',
  'philosophy.mission.desc': 'AIを「使いこなす武器」に変え、創造性を最大化する人材を育てる',
  'philosophy.vision.title': 'ビジョン',
  'philosophy.vision.desc': 'テクノロジーの民主化で、誰もがイノベーターになれる社会を実現',
  'philosophy.values.title': '価値観',
  'philosophy.values.v1': '実践主義：学びは行動から生まれる',
  'philosophy.values.v2': '共創精神：互いに教え、学び合う',
  'philosophy.values.v3': '未来志向：常に次の革新を追求する',
  
  // Contact Page
  'contact.title': 'メディア関係の皆様',
  'contact.subtitle': '取材依頼はこちらからお願いします。',
  'contact.form.name': 'お名前',
  'contact.form.email': 'メールアドレス',
  'contact.form.subject': '件名',
  'contact.form.message': 'メッセージ',
  'contact.form.submit': 'お問い合わせ',
  'contact.info.title': '連絡先情報',
  'contact.info.address': '福岡県福岡市',
  'contact.info.email': 'info@hyaqshiki.com',
  'contact.info.phone': '03-XXXX-XXXX',
  'contact.info.address.label': '住所',
  'contact.info.email.label': 'メール',
  'contact.info.phone.label': '電話',
  'contact.info.hours': '営業時間',
  'contact.info.hours.weekdays': '平日',
  'contact.info.hours.saturday': '土曜日',
  'contact.info.hours.sunday': '日曜日',
  'contact.info.hours.closed': '休業',
  
  // Curriculum Stack
  'curriculum.stack.title': '使用する技術ツール例',
  'curriculum.stack.requirements.title': '要件定義・設計支援ツール',
  'curriculum.stack.requirements.head': 'ChatGPT (OpenAI)',
  'curriculum.stack.requirements.list1': '要件定義、仕様書作成、プロンプト設計、技術サポート',
  'curriculum.stack.requirements.list2': 'インタラクティブな仕様ブレインストーミング、構造設計、要件整理支援',
  'curriculum.stack.env.title': '開発環境・コードエディタ',
  'curriculum.stack.env.head1': 'Cursor（AI搭載開発エディタ）',
  'curriculum.stack.env.env1': 'AI支援のコード生成、デバッグ、最適化サポート',
  'curriculum.stack.env.env2': 'ChatGPT APIと統合した高度な開発支援環境',
  'curriculum.stack.env.head2': 'GitHub',
  'curriculum.stack.env.env3': 'バージョン管理、チーム開発（Gitフローの理解）、ポートフォリオ構築',
  'curriculum.stack.env.env4': 'GitHub Copilotの活用（必要に応じて）',
  'curriculum.stack.frontend.title': 'フロントエンド開発',
  'curriculum.stack.frontend.head': '基本技術スタック',
  'curriculum.stack.frontend.list1': 'HTML / CSS / JavaScript（基本3技術）',
  'curriculum.stack.frontend.list2': 'Next.js（Reactベースのフレームワーク）',
  'curriculum.stack.frontend.list3': 'Tailwind CSS（効率的なスタイリング）',
  'curriculum.stack.backend.title': 'バックエンド・API開発',
  'curriculum.stack.backend.head': 'サーバーサイド技術',
  'curriculum.stack.backend.list1': 'Node.js（サーバーサイドJavaScript）',
  'curriculum.stack.backend.list2': 'Googleスプレッドシート',
  
  // Add these keys for certification evaluation text
  'certification.evaluation.criteria.title': '認定基準',
  
  // Certification page section titles
  'certification.about': '認定資格について',
  'certification.ranks': '認定ランク',
  'certification.evaluation.method': '評価方法',
  'certification.certificate.about': '証明書について',
  'certification.certificate.format': '証明書の配布形式',
  'certification.certificate.cycle': '認定サイクル',
  'certification.certificate.renewal': '更新費用',
  'certification.certificate.expiration': '更新期限・失効ルール',
  'certification.exam.fees': '資格受験料',
  'certification.evaluation.criteria': '評価基準：',
  'certification.cta.title': 'AIスキルを公式に証明し、キャリアの可能性を広げませんか？',
  'certification.cta.subtitle': 'HyaQShiki認定資格は、生成AI時代のスキルを証明する強力なツールです。',
  'certification.cta.apply': '資格受験に申し込む',
  'home.satisfaction.badge': 'サービス品質保証',
  
  // Corporate Testimonials
  'corporate.testimonials.person1.name': '田中 太郎',
  'corporate.testimonials.person1.position': '株式会社テクノロジー 代表取締役',
  'corporate.testimonials.person1.content': 'HyaQShikiの理念に共感し、次世代のIT人材育成に貢献できることを誇りに思います。',
  'corporate.testimonials.person2.name': '山田 健太郎',
  'corporate.testimonials.person2.position': 'イノベーション株式会社 CTO',
  'corporate.testimonials.person2.content': 'HyaQShikiのプログラムは、実際の業務に即した教育を提供してくれます。',
  
  // Testimonials Page
  'testimonials.title': '受講生の声',
  'testimonials.subtitle': '実際にHyaQShiki-百式-を受講された方々の生の声をお聞きください',
  'testimonials.student1.name': '小田 携',
  'testimonials.student1.feedback': 'AIがプログラミングを支援してくれることは知っていましたが、実際に体験してみると、想像以上に簡単にコーディングが進むだけでなく、GitHubでの管理やVercelを使った公開までスムーズに行えることに驚きました。\n\nまた、複数のAIツールを組み合わせることで、自分の意図したものに近づけるだけでなく、時にはそれ以上の成果を生み出せるという可能性も感じました。\n\nこれからは、コーディングにとどまらず、AIが人間の創造性や意思決定を支えるパートナーとして、企画、デザインを始め、新しい価値の創出にまで活用されていく未来が広がっていくと感じます。私自身も、AIの力を取り入れながら、より自由にアイデアを形にし、新しい発想や挑戦を後押ししてくれる存在として積極的に活用していきたいと思います。',
  'testimonials.student1.achievements.title': 'この講座で得られたこと',
  'testimonials.student1.achievements.item1': 'Webアプリ作成への抵抗がなくなった',
  'testimonials.student1.achievements.item2': 'Webアプリ開発が楽しくなった',
  'testimonials.student1.achievements.item3': '企画/要件定義のノウハウが身についた',
  'testimonials.student1.achievements.item4': 'Cursorを使いこなせるようになった',
  'testimonials.badge': '受講生',
  'testimonials.more.title': 'さらなる受講生の声',
  'testimonials.more.desc': '続々と届く受講生の体験談を順次公開していきます。お楽しみに！',
  'testimonials.comingsoon': 'Coming Soon...',
  'testimonials.cta.title': 'あなたも次の成功体験者になりませんか？',
  'testimonials.cta.desc': 'HyaQShiki-百式-で、AI時代のクリエイターとしての第一歩を踏み出しましょう。',
  'testimonials.cta.free_trial': '無料体験に申し込む',
  'testimonials.cta.pricing': '料金プランを見る'
};

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
  'nav.testimonials': 'Student Voices',

  // HomePage
  'home.title': 'Develop Apps\nThrough Everyday Conversation',
  'home.subtitle': 'There is no need to learn complex programming languages.\nAnyone can develop web apps easily, just like having a normal conversation.\nFrom planning and requirement definition to design, everything is built through dialogue.',
  'home.slideshow.title2': 'Learn by Reverse-Engineering\nCompleted Apps',
  'home.slideshow.subtitle2': 'You can intuitively learn how apps work by looking at completed programs.\nGradually deepen your understanding while increasing the level of difficulty, allowing you to acquire programming skills naturally.',
  'home.slideshow.title3': 'Visualize Your Skills\nwith Our Certification System',
  'home.slideshow.subtitle3': 'Our four-level certification system (Silver, Gold, Platinum, Black) enables you to objectively prove your skills and proficiency.\nThis reliable evaluation can be used for job hunting and winning new projects.',
  'home.reasons': 'Features of HyaQShiki',
  'home.communication': 'App Development Through Daily Conversation',
  'home.communication.desc': 'There is no need to learn complex programming languages.\nAnyone can develop web apps easily, just like having a normal conversation.\nFrom planning and requirement definition to design, everything is built through dialogue.',
  'home.code': 'Learn by Reverse-Engineering Completed Apps',
  'home.code.desc': 'You can intuitively learn how apps work by looking at completed programs.\nGradually deepen your understanding while increasing the level of difficulty, allowing you to acquire programming skills naturally.',
  'home.certification': 'Visualize Your Skills with Our Certification System',
  'home.certification.desc': 'Our four-level certification system (Silver, Gold, Platinum, Black) enables you to objectively prove your skills and proficiency.\nThis reliable evaluation can be used for job hunting and winning new projects.',
  'home.certifications': 'Certification System',
  'home.certifications.subtitle': 'Four Levels of Certification to Objectively Demonstrate Your Skills',
  'passRate': 'Pass Rate',
  'learnMore': 'Learn More',
  'home.silver': 'Certification of Basic Development Skills.',
  'home.gold': 'Certification for Consistent Daily Practice.',
  'home.platina': 'Certification for Advanced Planning and Design.',
  'home.black': 'Highest Level—Able to Create Value Independently.',
  'home.guarantee': 'Satisfaction Guarantee',
  'home.guarantee.desc': 'Full refund within 14 days of starting',
  'home.methodology.viewCurriculum': 'See Curriculum Details',
  'home.outline': 'Curriculum Overview',
  'home.outline.desc': 'A Comprehensive Learning Program',
  'home.methodology.title': 'Proprietary Methodology',
  'home.methodology.subtitle': 'Effective Learning Methods',
  'home.methodology.card1': 'Hands-on Learning',
  'home.methodology.card2': 'Repetitive Practice',
  'home.methodology.card3': 'Feedback',

  // Promotional Text
  'promo.title1': 'Conversation-Based',
  'promo.title2': 'Super Fast Development',
  'promo.title3': 'Planning-Oriented',
  'promo.line1': 'Development progresses through natural language like "I want this" or "I prefer this look."',
  'promo.line2': 'Reduce coding time to almost zero—your app takes shape in just a few minutes to a few hours.',
  'promo.line3': 'You can intuitively design by communicating color, motion, and structure as "vibes" to AI.',
  'promo.section.title': 'What is VIBE Coding—App Development by Conversation?',
  'promo.section.subtitle': 'VIBE Coding is a new development style where you can build web apps through conversational interaction.',
  'promo.conversational.title': 'Conversational',
  'promo.conversational.subtitle': 'Our innovative approach puts conversation at the heart of app development.',
  'promo.contact.subtitle': 'Questions about our conversation-based development approach? Contact us now!',
  'promo.cards.convo': 'Conversation vs Code',
  'promo.cards.natural': 'Natural Language Prompts',
  'promo.cards.zero': 'No Programming Needed',
  'promo.cards.speak': 'Add Features by Speaking',

  // Footer
  'footer.copyright': '©2025',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Use',

  // Curriculum Page
  'curriculum.title': 'Curriculum',
  'curriculum.subtitle': 'Acquire skills naturally over three months by learning hands-on',
  'curriculum.explanation.title': 'How will you learn?',
  'curriculum.explanation.p1': 'Through the experience of "developing apps in everyday conversation," you will naturally grasp the essence of programming.',
  'curriculum.explanation.p2': 'Rather than conventional programming, you will shape web apps and features by interacting with AI in a hands-on, practical way.',
  'curriculum.explanation.p3': '*Curriculum contents may be flexibly adjusted based on participant progress.',
  'curriculum.timeline.title': 'Timeline (Example)',
  'curriculum.timeline.days1.title': 'Day 1-10: Foundations',
  'curriculum.timeline.days1.desc': 'Basics of HTML/CSS/JavaScript + Initial AI-assisted output experience',
  'curriculum.timeline.days2.title': 'Day 11-40: Daily App Creation',
  'curriculum.timeline.days2.desc': 'Develop and release one practical app per day using generative AI',
  'curriculum.timeline.days3.title': 'Day 41-70: Thematic Deep Dive',
  'curriculum.timeline.days3.desc': 'Industry specialization, advanced design, UI/UX, security, API integration, and more',
  'curriculum.timeline.days4.title': 'Day 71-100: Final Production & Release',
  'curriculum.timeline.days4.desc': 'Develop multiple capstone apps, publish, share, review, and obtain certification',
  'curriculum.flow.title': 'Learning Flow',
  'curriculum.flow.phase1.title': 'Foundations',
  'curriculum.flow.phase1.period': 'Day 1',
  'curriculum.flow.phase1.desc': 'Acquire the basics of development and VIBE coding. Set up your development environment and understand the basic structure of applications.',
  'curriculum.flow.phase1.point1': 'Set up the development environment',
  'curriculum.flow.phase1.point2': 'Master the basics of using generative AI tools',
  'curriculum.flow.phase1.point3': 'Learn how to write and optimize prompts',
  'curriculum.flow.phase1.point4': 'Build a basic web application',
  'curriculum.flow.phase2.title': 'Introductory Web Application Development',
  'curriculum.flow.phase2.period': 'Day 2',
  'curriculum.flow.phase2.desc': 'Develop practical web applications, gradually increasing complexity to build real-world skills.',
  'curriculum.flow.phase2.point1': 'Learn the basics of frontend development',
  'curriculum.flow.phase2.point2': 'Learn how to create requirements definitions and specifications',
  'curriculum.flow.phase2.point3': 'Gain experience through trial and error',
  'curriculum.flow.phase2.point4': 'Learn by having AI explain source code in reverse',
  'curriculum.flow.phase3.title': 'Basic Web Application Development',
  'curriculum.flow.phase3.period': 'Day 3',
  'curriculum.flow.phase3.desc': 'Enhance your UI/UX skills in web app development using Next.js.',
  'curriculum.flow.phase3.point1': 'Learn the benefits of using Next.js',
  'curriculum.flow.phase3.point2': 'Practice development using localhost',
  'curriculum.flow.phase3.point3': 'Understand npm commands',
  'curriculum.flow.phase3.point4': 'Improve your UI/UX design expression',
  'curriculum.flow.phase4.title': 'Introductory Backend Development',
  'curriculum.flow.phase4.period': 'Day 4',
  'curriculum.flow.phase4.desc': 'Experience the benefits of centralized data control/management by using databases in backend development.',
  'curriculum.flow.phase4.point1': 'Implement a simple backend',
  'curriculum.flow.phase4.point2': 'Use a simple database',
  'curriculum.flow.phase4.point3': 'Experience data sharing between users',
  'curriculum.flow.phase4.point4': 'Implement data integration using APIs',
  'curriculum.flow.phase5.title': 'Graduation Project',
  'curriculum.flow.phase5.period': 'Day 5 & 6',
  'curriculum.flow.phase5.desc': 'Work on a final project that integrates everything you have learned, producing a product ready for the real world or market.',
  'curriculum.flow.phase5.point1': 'Complete a business plan',
  'curriculum.flow.phase5.point2': 'Finish and test your product',
  'curriculum.flow.phase5.point3': 'Coordinate requirements with stakeholders',
  'curriculum.flow.phase5.point4': 'Give a graduation presentation',
  'curriculum.approach.title': 'Learning Approach',
  'curriculum.approach.output.title': 'Output-Focused',
  'curriculum.approach.output.desc': 'By learning efficiently from generative AI and actually developing applications daily, you will acquire real-world practical skills.',
  'curriculum.approach.iteration.title': 'Iteration & Improvement',
  'curriculum.approach.iteration.desc': 'Skills are solidified by repeating the same patterns and continually improving through feedback.',
  'curriculum.approach.community.title': 'Community Learning',
  'curriculum.approach.community.desc': 'Broaden your perspective through mutual feedback and collaboration among learners.',
  'curriculum.approach.mentoring.title': 'Coaching',
  'curriculum.approach.mentoring.desc': 'Your dedicated mentor will thoroughly support you—from creating your learning plan to overcoming obstacles.',

  // Tools and Technologies
  'curriculum.tools.title': 'Tools and Technologies Used',
  'curriculum.tools.ai.title': 'AI Tools',
  'curriculum.tools.ai.tool1': 'ChatGPT (OpenAI)',
  'curriculum.tools.ai.tool2': 'Claude (Anthropic)',
  'curriculum.tools.ai.tool3': 'Midjourney',
  'curriculum.tools.ai.tool4': 'DALL-E',
  'curriculum.tools.ai.tool5': 'AutoGPT',
  'curriculum.tools.dev.title': 'Development Tools',
  'curriculum.tools.dev.tool1': 'GitHub Copilot',
  'curriculum.tools.dev.tool2': 'Replit',
  'curriculum.tools.dev.tool3': 'VS Code',
  'curriculum.tools.dev.tool4': 'Cursor',
  'curriculum.tools.dev.tool5': 'Firebase',
  'curriculum.tools.marketing.title': 'Marketing Tools',
  'curriculum.tools.marketing.tool1': 'Google Analytics',
  'curriculum.tools.marketing.tool2': 'Meta Business Suite',
  'curriculum.tools.marketing.tool3': 'Mailchimp',
  'curriculum.tools.marketing.tool4': 'Hotjar',
  'curriculum.tools.marketing.tool5': 'SEO Optimization Tools',
  'curriculum.tools.business.title': 'Business Tools',
  'curriculum.tools.business.tool1': 'Stripe',
  'curriculum.tools.business.tool2': 'QuickBooks',
  'curriculum.tools.business.tool3': 'Pitch',
  'curriculum.tools.business.tool4': 'Notion',
  'curriculum.tools.business.tool5': 'Airtable',

  // Success Metrics
  'curriculum.metrics.title': 'Success Metrics',
  'curriculum.metrics.apps.title': 'Features',
  'curriculum.metrics.apps.desc': 'Develop 100 features and build a practical portfolio.',
  'curriculum.metrics.monetize.title': 'Monetizable Projects',
  'curriculum.metrics.monetize.desc': 'We support you in achieving a level of quality where developed apps can be monetized.',
  'curriculum.metrics.main.title': 'Main Project',
  'curriculum.metrics.main.desc': 'Ultimately, complete one flagship project and prepare it for real-world business deployment.',

  // Curriculum Call to Action
  'curriculum.cta.title': 'Accelerate your career with us!',
  'curriculum.cta.subtitle': 'Gain both the skills and achievements to thrive in the AI era with the HyaQShiki Program.',
  'curriculum.cta.free_trial': 'Apply for Free Trial',
  'curriculum.cta.pricing': 'See Pricing Plans',

    // Pricing Page
  'pricing.title': 'Pricing & Guarantee',
  'pricing.subtitle': 'An investment in your future — the best plan to accelerate your career',
  'pricing.plans.title': 'Course Plans',
  'pricing.plans.desc': 'HyaQShiki offers multiple plans tailored to your learning needs and budget. Every plan provides access to the same high-quality curriculum and learning experience.',
  'pricing.plans.basic.title': 'Basic Plan',
  'pricing.plans.basic.badge': 'Popular',
  'pricing.plans.basic.feature1': 'One-time payment discount',
  'pricing.plans.basic.feature2': '24/7 AI Support',
  'pricing.plans.basic.feature3': 'Bi-weekly group mentoring',
  'pricing.plans.basic.feature4': 'Access to our community',
  'pricing.plans.basic.feature5': '3-month enrollment contract',
  'pricing.plans.basic.feature6': 'HyaQShiki Certification Exam',
  'pricing.plans.basic.cta': 'Enroll Now',
  'pricing.plans.basic.label': 'Basic Plan',
  'pricing.plans.basic.price': '298,000',
  'pricing.plans.basic.currency': 'JPY',
  'pricing.plans.basic.tax': '(incl. tax) / one-time payment',

  'pricing.plans.monthly.title': 'Monthly Plan',
  'pricing.plans.monthly.feature1': 'Pay in monthly installments',
  'pricing.plans.monthly.feature2': '24/7 AI Support',
  'pricing.plans.monthly.feature3': 'Bi-weekly group mentoring',
  'pricing.plans.monthly.feature4': 'Access to our community',
  'pricing.plans.monthly.feature5': '3-month enrollment contract',
  'pricing.plans.monthly.feature6': 'HyaQShiki Certification Exam',
  'pricing.plans.monthly.cta': 'Enroll Now',
  'pricing.plans.monthly.label': 'Monthly Plan',
  'pricing.plans.monthly.price': '110,000',
  'pricing.plans.monthly.currency': 'JPY',
  'pricing.plans.monthly.tax': '(incl. tax) / per month',

  'pricing.plans.sponsor.title': 'Sponsored Plan',
  'pricing.plans.sponsor.feature1': 'No tuition fee',
  'pricing.plans.sponsor.feature2': 'Participation in real corporate projects required',
  'pricing.plans.sponsor.feature3': 'Selective screening process',
  'pricing.plans.sponsor.feature4': 'Submission of deliverables required',
  'pricing.plans.sponsor.feature5': 'Weekly progress reports',
  'pricing.plans.sponsor.feature6': 'HyaQShiki Certification Exam',
  'pricing.plans.sponsor.cta': 'Contact Us',
  'pricing.plans.sponsor.label': 'Sponsored Plan',
  'pricing.plans.sponsor.price': 'Upon Request',
  'pricing.plans.sponsor.tax': '(Details Available)',

  // Satisfaction Guarantee
  'pricing.guarantee.title': 'Satisfaction Guarantee',
  'pricing.guarantee.subtitle': '14-Day Full Refund Policy',
  'pricing.guarantee.desc': 'We are confident in the quality of our program. That's why HyaQShiki offers a 14-day full refund — no questions asked.',
  'pricing.guarantee.conditions.title': 'Eligibility Conditions',
  'pricing.guarantee.conditions.condition1': 'Request must be submitted within 14 days of enrollment',
  'pricing.guarantee.conditions.condition2': 'Must meet assignment submission and progress criteria',
  'pricing.guarantee.conditions.condition3': 'The request must be submitted by the enrolled student',

  'pricing.guarantee.procedure.title': 'Application Procedure',
  'pricing.guarantee.procedure.desc': 'Please inform your mentor or customer support if you wish to request a refund. We will provide a dedicated form and collect the necessary information.',

  'pricing.guarantee.refund.title': 'Refund Process',
  'pricing.guarantee.refund.desc': 'We will process the refund within 14 business days of approval via the same method used for payment. If you opted for an installment plan, only the paid portion will be refunded.',

  'pricing.guarantee.notes.title': 'Important Notes',
  'pricing.guarantee.notes.note1': 'This guarantee is available once per student only',
  'pricing.guarantee.notes.note2': 'Re-enrollment in the same program after a refund is not permitted',
  'pricing.guarantee.notes.note3': 'Fraudulent or false claims will result in denial of refund',

  // Payment
  'pricing.payment.title': 'Payment Methods',
  'pricing.payment.credit.title': 'Credit Card',
  'pricing.payment.credit.desc': 'We accept VISA, MasterCard, JCB, American Express, Diners Club.',
  'pricing.payment.bank.title': 'Bank Transfer',
  'pricing.payment.bank.desc': 'Bank transfer details will be provided after registration. Bank fees are the responsibility of the applicant.',
  'pricing.payment.installment.title': 'Installment Plan',
  'pricing.payment.installment.desc': 'Installment plans via our partner financing companies are available. Screening required.',
  'pricing.payment.note': '※ We also accept corporate applications. For invoice-based billing, please contact us through the inquiry form.',

  // FAQ
  'pricing.faq.title': 'Frequently Asked Questions',
  'pricing.contact': 'For further questions, feel free to contact us.',
  'pricing.faq.q1': 'Do I need a personal computer?',
  'pricing.faq.a1': 'Yes. If needed, we can assist you in acquiring one.',
  'pricing.faq.q2': 'Can I extend the enrollment period?',
  'pricing.faq.a2': 'Yes. You may extend it up to 3 additional months for ¥49,800/month.',
  'pricing.faq.q3': 'Is there support after graduation?',
  'pricing.faq.a3': 'Yes. Graduates can join our alumni community, and optional mentorship and job/startup support programs are also available.',

  // Guarantee Section (duplicate keys for another layout)
  'pricing.satisfaction.title': 'Satisfaction Guarantee',
  'pricing.satisfaction.alt': 'HyaQShiki Satisfaction Guarantee',
  'pricing.satisfaction.guarantee': '14-Day Full Refund Policy',
  'pricing.satisfaction.desc': 'We are confident in the quality of our program. That's why HyaQShiki offers a 14-day full refund — no questions asked.',
  'pricing.satisfaction.eligibility': 'Eligibility Conditions',
  'pricing.satisfaction.application': 'How to Apply',
  'pricing.satisfaction.application.desc': 'Please inform your mentor or customer support if you wish to request a refund. A dedicated form will be provided for submission.',
  'pricing.satisfaction.refund': 'Refund Process',
  'pricing.satisfaction.refund.desc': 'Refunds are processed within 14 business days via the original payment method. Only paid installments are refundable.',
  'pricing.satisfaction.notes': 'Important Notes',

  // CTA
  'pricing.cta.title': 'Why not start with a free trial?',
  'pricing.cta.subtitle': 'Begin your journey toward 100x productivity — starting now.',
  'pricing.cta.button': 'Try for Free',

  // Payment methods (relisted)
  'pricing.payment.method1.title': 'Credit Card',
  'pricing.payment.method1.desc': 'VISA, MasterCard, JCB, American Express, and Diners Club accepted.',
  'pricing.payment.method2.title': 'Bank Transfer',
  'pricing.payment.method2.desc': 'Bank details will be provided after registration. Transfer fees apply.',
  'pricing.payment.method3.title': 'Cryptocurrency',
  'pricing.payment.method3.desc': 'We accept Bitcoin, Ethereum, and USDT.',

  // Certification Page
  'certification.title': 'Certification',
  'certification.subtitle': 'Four-Level Certification System to Prove Your Skills',
  'certification.desc': 'Our program offers a four-level certification system to objectively prove your learning achievements.',
  'certification.about': 'About Certification',
  'certification.overview.point1.title': 'Practical Skill Assessment',
  'certification.overview.point1.desc': 'Evaluates not only theory but also actual application development capabilities.',
  'certification.overview.point2.title': 'International Recognition',
  'certification.overview.point2.desc': 'Proves skills as a globally recognized engineer.',
  'certification.silver.title': 'Silver Certification',
  'certification.silver.desc': 'Proves basic development skills using AI',
  'certification.gold.title': 'Gold Certification',
  'certification.gold.desc': 'Proves practical app development capabilities',
  'certification.platina.title': 'Platinum Certification',
  'certification.platina.desc': 'Proves advanced AI integration and application design skills',
  'certification.black.title': 'Black Certification',
  'certification.black.desc': 'Proves the highest level of independent innovation capability',
  'certification.levels.title': 'Four Certification Levels',
  'certification.evaluation.method': 'Evaluation Method',
  'certification.eval.item1': 'Comprehensive evaluation based on app completion, design skills, AI utilization, and implementation ability',
  'certification.eval.item1.desc': 'Review of submitted documents and portfolio',
  'certification.eval.item2': 'PDF certificate issued to passers + listed on certified list (URL sharing available)',
  'certification.eval.item2.desc': 'Practical exam of AI utilization and coding skills',
  'certification.eval.item3': 'Higher certifications are more difficult and effective for hiring and VC evaluation',
  'certification.eval.item3.desc': 'Verification of technical skills and communication ability',
  'certification.certificate.about': 'About the Certificate',
  'certification.certificate.format': 'Certificate Format',
  'certification.certificate.desc': 'Latest certificate system utilizing digital technology',
  'certification.certificate.detail1': 'Digital certificate',
  'certification.certificate.detail2': 'Blockchain verification',
  'certification.certificate.detail3': 'Internationally recognized qualification',
  'certification.certificate.cycle': 'Certification Cycle',
  'certification.certificate.validity': 'Valid for 3 years',
  'certification.certificate.renewal': 'Renewal Requirements',
  'certification.certificate.renewal1': 'Continuing education requirements',
  'certification.certificate.renewal2': 'Technology update verification',
  'certification.certificate.expiration': 'Renewal & Expiry Rules',
  'certification.certificate.expirationInfo': 'Renewal required after 3 years',
  'certification.exam.fees': 'Exam Fee',
  'certification.cta.title': 'Officially prove your AI skills and expand your career opportunities.',
  'certification.cta.subtitle': 'HyaQShiki Certification is a powerful tool to prove your skills in the era of generative AI.',
  'certification.cta.apply': 'Apply for Certification Exam',
  'certification.evaluation.criteria.title': 'Certification Criteria',

  // Corporate Page
  'corporate.title': 'Corporate Partnership',
  'corporate.subtitle': 'Together for Next-Generation IT Talent Development',
  'corporate.description': 'Corporate partnership program to develop next-generation IT talent together',
  'corporate.benefits.title': 'Benefits of Corporate Partnership',
  'corporate.benefits.b1.title': 'Talent Development',
  'corporate.benefits.b1.desc': 'Improve productivity through skill development of existing employees',
  'corporate.benefits.b2.title': 'Recruitment Support',
  'corporate.benefits.b2.desc': 'Introduce excellent program graduates',
  'corporate.benefits.b3.title': 'Technical Consultation',
  'corporate.benefits.b3.desc': 'Use technical consultation services for AI development',
  'corporate.benefits.b4.title': 'Innovation Creation',
  'corporate.benefits.b4.desc': 'Create new solutions through collaboration with students',
  'corporate.contact': 'Corporate inquiries here',
  'corporate.sponsor.title': 'Sponsor Program Overview',
  'corporate.sponsor.subtitle': 'What is the HyaQShiki Sponsor Program?',
  'corporate.sponsor.desc': 'At HyaQShiki, which develops next-generation development talent with 100x productivity in the generative AI era, we integrate practical projects from companies with our educational program to achieve learning and practice simultaneously.',
  'corporate.sponsor.item1': 'Practical projects tackling your company\'s challenges',
  'corporate.sponsor.item2': 'Evaluation reports that visualize student capabilities and growth',
  'corporate.sponsor.item3': 'Early contact with potential recruitment candidates',
  'corporate.cta.title': 'Next-generation education × social implementation, together.',
  'corporate.cta.desc': 'HyaQShiki is a "practical learning field" beyond educational institutions. By handling real corporate challenges within our 100-day curriculum centered on AI-powered app development, we achieve both learning and value creation.',
  'corporate.cta.contact': 'Contact Us',
  'corporate.cta.partner': 'Partner Details',
  
  // Philosophy Page
  'philosophy.title': 'Our Philosophy',
  'philosophy.subtitle': 'Creating the Future with Technology',
  'philosophy.mission.title': 'Mission',
  'philosophy.mission.desc': 'Transform AI into a powerful tool and nurture talent that maximizes creativity.',
  'philosophy.vision.title': 'Vision',
  'philosophy.vision.desc': 'Realize a society where anyone can become an innovator through the democratization of technology.',
  'philosophy.values.title': 'Values',
  'philosophy.values.v1': 'Practice First: Learning comes from action.',
  'philosophy.values.v2': 'Co-Creation: Teach and learn together.',
  'philosophy.values.v3': 'Future-Oriented: Always pursue the next innovation.',
  'philosophy.educational.title': 'Educational Philosophy',
  'philosophy.educational.slogan': '10x Creativity with AI',
  'philosophy.educational.desc': 'We provide education to maximize human creativity by utilizing AI. Technology has value only when it becomes "something you can master," and it is our mission to achieve this.',
  'philosophy.practice.title': 'Practical Approach',
  'philosophy.practice.desc': 'Learn by actually moving your hands and creating applications to acquire real skills.',
  'philosophy.intensive.title': 'Intensive Learning',
  'philosophy.intensive.desc': 'Learn intensively in a short period to efficiently acquire skills and develop practical abilities that can be immediately applied in the workplace.',
  'philosophy.community.title': 'Community',
  'philosophy.community.desc': 'We value an environment where we learn from and inspire each other through interaction with like-minded peers.',
  'philosophy.values.practical.title': 'Practical Skills Focus',
  'philosophy.values.practical.desc': 'We prioritize practical skills over knowledge and focus on acquiring skills that can actually be used.',
  'philosophy.values.continuity.title': 'Continuous Growth',
  'philosophy.values.continuity.desc': 'We provide mindset and environment for continuous growth rather than temporary learning.',
  'philosophy.values.innovation.title': 'Innovation',
  'philosophy.values.innovation.desc': 'We always incorporate the latest technology and trends, pursuing innovative educational methods.',
  'philosophy.founder.title': 'Founder\'s Message',
  'philosophy.founder.slogan': 'Towards Technology Democratization',
  'philosophy.founder.p1': 'HyaQShiki began with the desire to deliver the benefits of technology to more people. We want to create a world where anyone can shape their ideas, even without specialized knowledge, by utilizing the power of AI.',
  'philosophy.founder.p2': 'We want to be a place that nurtures next-generation creators, not just a programming school. Our mission is to develop not only technical skills but also problem-solving abilities and creativity, and to send out talent that can create new value with AI.',
  'philosophy.founder.role': 'Founder & CEO',
  'philosophy.founder.name': 'Kenzo Shiraishi',
  'philosophy.vision.short.title': 'Short-term Vision',
  'philosophy.vision.short.desc': 'Develop 3,000 next-generation developers nationwide and increase digital innovation leaders.',
  'philosophy.vision.medium.title': 'Medium-term Vision',
  'philosophy.vision.medium.desc': 'Expand educational programs across Asia and build a network of innovators beyond borders.',
  'philosophy.vision.long.title': 'Long-term Vision',
  'philosophy.vision.long.desc': 'Establish world standards for AI utilization skills and realize a society where anyone can shape their ideas.',
  'philosophy.cta.title': 'Would you like to create the future with us?',
  'philosophy.cta.desc': 'Take the first step as a creator in the AI era with HyaQShiki.',
  'philosophy.cta.button': 'Contact Us',
  
  // Contact Page
  'contact.title': 'Contact',
  'contact.subtitle': 'Feel free to contact us for any inquiries.',
  'contact.form.name': 'Name',
  'contact.form.email': 'Email',
  'contact.form.subject': 'Subject',
  'contact.form.message': 'Message',
  'contact.form.submit': 'Send',
  'contact.info.title': 'Contact Information',
  'contact.info.address': 'Fukuoka, Japan',
  'contact.info.email': 'info@hyaqshiki.com',
  'contact.info.phone': '+81-3-XXXX-XXXX',
  'contact.info.address.label': 'Address',
  'contact.info.email.label': 'Email',
  'contact.info.phone.label': 'Phone',
  'contact.info.hours': 'Business Hours',
  'contact.info.hours.weekdays': 'Weekdays',
  'contact.info.hours.saturday': 'Saturday',
  'contact.info.hours.sunday': 'Sunday',
  'contact.info.hours.closed': 'Closed',

  // Curriculum Stack
  'curriculum.stack.title': 'Tech Stack',
  'curriculum.stack.requirements.title': 'Requirements',
  'curriculum.stack.requirements.head': 'Required Items',
  'curriculum.stack.requirements.list1': 'PC or Mac',
  'curriculum.stack.requirements.list2': 'Internet Connection',
  'curriculum.stack.env.title': 'Development Environment',
  'curriculum.stack.env.head1': 'Frontend',
  'curriculum.stack.env.env1': 'Next.js',
  'curriculum.stack.env.env2': 'React',
  'curriculum.stack.env.head2': 'Backend',
  'curriculum.stack.env.env3': 'Node.js',
  'curriculum.stack.env.env4': 'Firebase',
  'curriculum.stack.frontend.title': 'Frontend',
  'curriculum.stack.frontend.head': 'Frontend Tools',
  'curriculum.stack.frontend.list1': 'Next.js',
  'curriculum.stack.frontend.list2': 'React',
  'curriculum.stack.frontend.list3': 'Tailwind CSS',
  'curriculum.stack.backend.title': 'Backend',
  'curriculum.stack.backend.head': 'Backend Tools',
  'curriculum.stack.backend.list1': 'Node.js',
  'curriculum.stack.backend.list2': 'Firebase',

  // Corporate Testimonials
  'corporate.testimonials.person1.name': 'Taro Tanaka',
  'corporate.testimonials.person1.position': 'CEO, Technology Inc.',
  'corporate.testimonials.person1.content': 'I resonate deeply with HyaQShiki\'s philosophy and am proud to contribute to nurturing next-generation IT talent.',
  'corporate.testimonials.person2.name': 'Kentaro Yamada',
  'corporate.testimonials.person2.position': 'CTO, Innovation Inc.',
  'corporate.testimonials.person2.content': 'HyaQShiki\'s program provides education closely linked to real-world business practices.',

  // Testimonials Page
  'testimonials.title': 'Student Voices',
  'testimonials.subtitle': 'Hear the real voices of those who have actually taken the HyaQShiki course',
  'testimonials.student1.name': 'Tazusa Oda',
  'testimonials.student1.feedback': 'I knew that AI could assist with programming, but when I actually experienced it, I was surprised not only by how much easier coding became than I imagined, but also by how smoothly I could manage GitHub and publish with Vercel.\n\nI also felt the possibility that by combining multiple AI tools, I could not only get closer to what I intended, but sometimes produce even better results.\n\nFrom now on, I feel that AI will not only be limited to coding, but will expand into a future where AI serves as a partner that supports human creativity and decision-making, being utilized for planning, design, and even creating new value. I want to actively use AI as a presence that supports me in freely shaping ideas and encouraging new thoughts and challenges while incorporating the power of AI.',
  'testimonials.student1.achievements.title': 'What I gained from this course',
  'testimonials.student1.achievements.item1': 'Eliminated resistance to web app creation',
  'testimonials.student1.achievements.item2': 'Web app development became enjoyable',
  'testimonials.student1.achievements.item3': 'Acquired planning/requirement definition know-how',
  'testimonials.student1.achievements.item4': 'Became proficient in using Cursor',
  'testimonials.badge': 'Student',
  'testimonials.more.title': 'More Student Voices',
  'testimonials.more.desc': 'We will be publishing more student testimonials as they come in. Stay tuned!',
  'testimonials.comingsoon': 'Coming Soon...',
  'testimonials.cta.title': 'Will you be our next success story?',
  'testimonials.cta.desc': 'Take the first step as a creator in the AI era with HyaQShiki.',
  'testimonials.cta.free_trial': 'Apply for Free Trial',
  'testimonials.cta.pricing': 'View Pricing Plans'
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

  // --- metadata定義を追加 ---
  const metadata = {
    title: {
        ja: "HyaQShiki-百式-",
        en: "HyaQShiki-百式-"
    },
    description: {
        ja: "日常会話だけでアプリ開発 | 3ヶ月集中アカデミースクール",
        en: "Build Apps Through Everyday Conversation | 3-Month Intensive Academy Program"
    },
    openGraph: {
      title: {
        ja: "HyaQShiki-百式-",
        en: "HyaQShiki-百式-"
      },
      description: {
        ja: "日常会話だけでアプリ開発 | 3ヶ月集中アカデミースクール",
        en: "Build Apps Through Everyday Conversation | 3-Month Intensive Academy Program"
      },
      images: ['/images/ogp.png'],
      url: 'https://hyaqshiki.com',
      type: 'website'
    }
  };

  // Certification data
  const certificationLevels: CertificationLevel[] = [
    {
      title: { ja: 'Silver', en: 'Silver' },
      passRate: { ja: '72%', en: '72%' },
      description: { ja: '基礎的なAI活用スキルを証明', en: 'Proves basic AI utilization skills' },
      criteria: [
        { ja: '基本的なAIツールの使用', en: 'Basic AI tool usage' },
        { ja: '簡単なアプリケーション開発', en: 'Simple application development' }
      ],
      bgClass: 'bg-gradient-to-br from-gray-400 to-gray-600',
      borderClass: 'border-gray-400'
    },
    {
      title: { ja: 'Gold', en: 'Gold' },
      passRate: { ja: '48%', en: '48%' },
      description: { ja: '実践的なAI開発スキルを証明', en: 'Proves practical AI development skills' },
      criteria: [
        { ja: '複雑なAI統合', en: 'Complex AI integration' },
        { ja: 'プロダクションレベルの開発', en: 'Production-level development' }
      ],
      bgClass: 'bg-gradient-to-br from-yellow-500 to-amber-600',
      borderClass: 'border-yellow-500'
    },
    {
      title: { ja: 'Platina', en: 'Platina' },
      passRate: { ja: '26%', en: '26%' },
      description: { ja: '高度なAI技術者としてのスキルを証明', en: 'Proves advanced AI engineer skills' },
      criteria: [
        { ja: 'AI技術の革新', en: 'AI technology innovation' },
        { ja: 'リーダーシップ', en: 'Leadership' }
      ],
      bgClass: 'bg-gradient-to-br from-gray-100 to-gray-300',
      borderClass: 'border-gray-300',
      textClass: 'text-gray-900'
    },
    {
      title: { ja: 'Black', en: 'Black' },
      passRate: { ja: '9%', en: '9%' },
      description: { ja: 'AI技術の最高峰を証明', en: 'Proves the pinnacle of AI technology' },
      criteria: [
        { ja: 'AI技術の開拓', en: 'AI technology pioneering' },
        { ja: '業界への影響', en: 'Industry impact' }
      ],
      bgClass: 'bg-gradient-to-br from-gray-900 to-black',
      borderClass: 'border-yellow-500'
    }
  ];

  const evaluationProcesses: EvaluationProcess[] = [
    {
      icon: 'fa-file-alt',
      title: { ja: '書類審査', en: 'Document Review' },
      description: { ja: '提出された書類とポートフォリオの審査', en: 'Review of submitted documents and portfolio' }
    },
    {
      icon: 'fa-code',
      title: { ja: '技術試験', en: 'Technical Exam' },
      description: { ja: 'AI活用技術とコーディングスキルの実技試験', en: 'Practical exam of AI utilization and coding skills' }
    },
    {
      icon: 'fa-users',
      title: { ja: '面接', en: 'Interview' },
      description: { ja: '技術力とコミュニケーション能力の確認', en: 'Verification of technical skills and communication ability' }
    }
  ];

  const guaranteeConditions: GuaranteeCondition[] = [
    { ja: '100日間の学習完了', en: 'Completion of 100 days of learning' },
    { ja: '50以上のアプリケーション開発', en: 'Development of 50+ applications' },
    { ja: '技術試験の受験', en: 'Taking the technical exam' }
  ];

  const certificateDetails: CertificateDetail[] = [
    { ja: 'デジタル証明書', en: 'Digital certificate' },
    { ja: 'ブロックチェーン認証', en: 'Blockchain verification' },
    { ja: '国際的に認められた資格', en: 'Internationally recognized qualification' }
  ];

  const getCertificationFees = (language: Language): CertificationFee[] => {
    return [
      {
        rank: language === 'ja' ? 'Silver' : 'Silver',
        fee: language === 'ja' ? '19,800円' : '¥19,800',
        passRate: language === 'ja' ? '72%' : '72%',
        renewal: language === 'ja' ? '3年ごと' : 'Every 3 years'
      },
      {
        rank: language === 'ja' ? 'Gold' : 'Gold',
        fee: language === 'ja' ? '29,800円' : '¥29,800',
        passRate: language === 'ja' ? '48%' : '48%',
        renewal: language === 'ja' ? '3年ごと' : 'Every 3 years'
      },
      {
        rank: language === 'ja' ? 'Platina' : 'Platina',
        fee: language === 'ja' ? '39,800円' : '¥39,800',
        passRate: language === 'ja' ? '26%' : '26%',
        renewal: language === 'ja' ? '3年ごと' : 'Every 3 years'
      },
      {
        rank: language === 'ja' ? 'Black' : 'Black',
        fee: language === 'ja' ? '49,800円' : '¥49,800',
        passRate: language === 'ja' ? '9%' : '9%',
        renewal: language === 'ja' ? '3年ごと' : 'Every 3 years'
      }
    ];
  };

  const certificationHero: CertificationHero = {
    title: { ja: 'HyaQShiki認定', en: 'HyaQShiki Certification' },
    subtitle: { ja: 'AI技術者としてのスキルを公式に証明', en: 'Officially prove your skills as an AI engineer' },
    backgroundImage: '/images/slide3.jpg'
  };

  const certificationOverview: CertificationOverview = {
    title: { ja: '認定について', en: 'About Certification' },
    description: { 
      ja: 'HyaQShiki認定は、生成AI時代における実践的なスキルを証明する国際的に認められた資格です。100日間の学習と実践を通じて身につけた技術力を、公式に評価・認定します。', 
      en: 'HyaQShiki certification is an internationally recognized qualification that proves practical skills in the generative AI era. It officially evaluates and certifies the technical skills acquired through 100 days of learning and practice.' 
    },
    points: [
      { 
        title: { ja: '実践的なスキル評価', en: 'Practical Skill Assessment' },
        description: { ja: '理論だけでなく、実際のアプリケーション開発能力を評価します。', en: 'Evaluates not only theory but also actual application development capabilities.' }
      },
      {
        title: { ja: '国際的な認知', en: 'International Recognition' },
        description: { ja: 'グローバルに通用する技術者としてのスキルを証明します。', en: 'Proves skills as a globally recognized engineer.' }
      }
    ]
  };

  const certificationEvaluation: CertificationEvaluation = {
    title: { ja: '評価プロセス', en: 'Evaluation Process' },
    description: { ja: '3段階の包括的な評価により、技術力と実践力を公正に判定します。', en: 'Fair assessment of technical skills and practical abilities through a comprehensive 3-stage evaluation.' },
    processes: [
      {
        icon: 'fa-file-alt',
        title: { ja: '書類審査', en: 'Document Review' },
        description: { ja: '提出された書類とポートフォリオの審査', en: 'Review of submitted documents and portfolio' }
      },
      {
        icon: 'fa-code',
        title: { ja: '技術試験', en: 'Technical Exam' },
        description: { ja: 'AI活用技術とコーディングスキルの実技試験', en: 'Practical exam of AI utilization and coding skills' }
      },
      {
        icon: 'fa-users',
        title: { ja: '面接', en: 'Interview' },
        description: { ja: '技術力とコミュニケーション能力の確認', en: 'Verification of technical skills and communication ability' }
      }
    ]
  };

  const certificationCertificate: CertificationCertificate = {
    title: { ja: '認定証について', en: 'About the Certificate' },
    description: { ja: 'デジタル技術を活用した最新の認定証システム', en: 'Latest certificate system utilizing digital technology' },
    details: [
      { ja: 'デジタル証明書', en: 'Digital certificate' },
      { ja: 'ブロックチェーン認証', en: 'Blockchain verification' },
      { ja: '国際的に認められた資格', en: 'Internationally recognized qualification' }
    ],
    validityPeriod: { ja: '3年間有効', en: 'Valid for 3 years' },
    renewalInfo: [
      { ja: '継続教育要件', en: 'Continuing education requirements' },
      { ja: '技術更新の確認', en: 'Technology update verification' }
    ],
    expirationInfo: { ja: '3年後に更新が必要', en: 'Renewal required after 3 years' },
    sampleImage: {
      src: '/images/certificate-sample.png',
      alt: { ja: '認定証サンプル', en: 'Certificate Sample' },
      width: 400,
      height: 300
    }
  };

  const certificationCTA: CertificationCTA = {
    title: { ja: '公式にAI技術者としてのスキルを証明し、キャリアの可能性を広げましょう。', en: 'Officially prove your AI skills and expand your career opportunities.' },
    subtitle: { ja: 'HyaQShiki認定は、生成AI時代におけるスキルを証明する強力なツールです。', en: 'HyaQShiki Certification is a powerful tool to prove your skills in the era of generative AI.' },
    buttonText: { ja: '認定試験に申し込む', en: 'Apply for Certification Exam' }
  };

  const certificationFeeSection: CertificationFeeSection = {
    title: { ja: '受験料金', en: 'Exam Fees' },
    description: { ja: '各認定レベルに応じた受験料金', en: 'Exam fees for each certification level' },
    tableHeaders: {
      rank: { ja: 'ランク', en: 'Rank' },
      fee: { ja: '受験料', en: 'Exam Fee' },
      passRate: { ja: '合格率', en: 'Pass Rate' },
      renewal: { ja: '更新周期', en: 'Renewal Cycle' }
    }
  };

  const corporateTestimonials: CorporateTestimonials = {
    testimonials: [
      {
        name: { ja: '田中太郎', en: 'Taro Tanaka' },
        position: { ja: 'CEO, テクノロジー株式会社', en: 'CEO, Technology Inc.' },
        content: { ja: 'HyaQShikiの理念に深く共感し、次世代のIT人材育成に貢献できることを誇りに思います。', en: 'I resonate deeply with HyaQShiki\'s philosophy and am proud to contribute to nurturing next-generation IT talent.' }
      },
      {
        name: { ja: '山田健太郎', en: 'Kentaro Yamada' },
        position: { ja: 'CTO, イノベーション株式会社', en: 'CTO, Innovation Inc.' },
        content: { ja: 'HyaQShikiのプログラムは、実際の業務に即した教育を提供してくれます。', en: 'HyaQShiki\'s program provides education closely linked to real-world business practices.' }
      }
    ]
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t,
      metadata,
      certificationLevels,
      evaluationProcesses,
      guaranteeConditions,
      certificateDetails,
      getCertificationFees,
      certificationHero,
      certificationOverview,
      certificationEvaluation,
      certificationCertificate,
      certificationCTA,
      certificationFeeSection,
      corporateTestimonials
    }}>
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