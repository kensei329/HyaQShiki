'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ja' | 'en';

type TranslationKeys = 
  // Navigation
  | 'nav.home' | 'nav.curriculum' | 'nav.pricing' | 'nav.certification' 
  | 'nav.corporate' | 'nav.philosophy' | 'nav.contact' | 'nav.language'
  
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
  | 'promo.line1' | 'promo.line2' | 'promo.line3'
  | 'promo.section.title' | 'promo.section.subtitle'
  | 'promo.conversational.title' | 'promo.conversational.subtitle'
  | 'promo.contact.subtitle'
  | 'promo.cards.convo' | 'promo.cards.natural' | 'promo.cards.zero' | 'promo.cards.speak'
  
  // Footer
  | 'footer.copyright'
  
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
  | 'contact.info.hours.closed'
  | 'curriculum.stack.title' | 'curriculum.stack.requirements.title' | 'curriculum.stack.requirements.head'
  | 'curriculum.stack.requirements.list1' | 'curriculum.stack.requirements.list2'
  | 'curriculum.stack.env.title' | 'curriculum.stack.env.head1' | 'curriculum.stack.env.env1'
  | 'curriculum.stack.env.env2' | 'curriculum.stack.env.head2' | 'curriculum.stack.env.env3'
  | 'curriculum.stack.env.env4' | 'curriculum.stack.frontend.title' | 'curriculum.stack.frontend.head'
  | 'curriculum.stack.frontend.list1' | 'curriculum.stack.frontend.list2' | 'curriculum.stack.frontend.list3'
  | 'curriculum.stack.backend.title' | 'curriculum.stack.backend.head' | 'curriculum.stack.backend.list1'
  | 'curriculum.stack.backend.list2';

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
  'nav.contact': 'お問合せ',
  'nav.language': '言語',

  // HomePage
  'home.title': '日常会話のみでアプリ開発',
  'home.subtitle': '難しいプログラミング言語を覚える必要はありません。\n普通の会話のような感覚で、誰でも簡単にWebアプリを開発できます。\n企画から要件定義・設計を含め、すべて会話形式で構築を行います。',
  'home.slideshow.title2': ' アプリ完成品から逆算で学ぶ ',
  'home.slideshow.subtitle2': 'AIが日常会話を元に作ったソースコードを見ながら、仕組みを自然に学習できます。\n徐々に難易度を上げながら理解を深めていくので、無理なくプログラミングを身につけられます。',
  'home.slideshow.title3': ' 資格認定制度でスキル可視化 ',
  'home.slideshow.subtitle3': 'シルバー・ゴールド・プラチナ・ブラックの4段階の認定制度により、自分の習熟度や実力を客観的に証明できます。\n就職や案件獲得にも活用できる信頼性の高い評価制度です。',
  'home.reasons': 'HyaQShixの特徴',
  'home.communication': '日常会話のみでアプリ開発',
  'home.communication.desc': '難しいプログラミング言語を覚える必要はありません。\n普通の会話のような感覚で、誰でも簡単にWebアプリを開発できます。\n企画から要件定義・設計を含め、すべて会話形式で構築を行います。',
  'home.code': 'アプリ完成品から逆算で学ぶ',
  'home.code.desc': 'AIが日常会話を元に作ったソースコードを見ながら、仕組みを自然に学習できます。\n徐々に難易度を上げながら理解を深めていくので、無理なくプログラミングを身につけられます。',
  'home.certification': '資格認定制度でスキル可視化',
  'home.certification.desc': 'シルバー・ゴールド・プラチナ・ブラックの4段階の認定制度により、自分の習熟度や実力を客観的に証明できます。\n就職や案件獲得にも活用できる信頼性の高い評価制度です。',
  'home.certifications': '認定制度',
  'home.certifications.subtitle': 'スキルを客観的に証明する4段階の認定レベル',
  'passRate': '合格率',
  'learnMore': '詳細を見る',
  'home.silver': '基本的な開発力を有する証明。',
  'home.gold': '毎日の開発実践を積んだ実力者。',
  'home.platina': '戦略設計とAI統合が可能な上級者。',
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
  'promo.line1': '🎙会話中心\n「こうしたい」「こんな見た目がいい」などの話し言葉で開発を進めます。',
  'promo.line2': '⚡ 超高速開発\nコードを書く時間をほぼゼロにし、数分〜数時間でアプリが形になります。',
  'promo.line3': '🎨感覚で伝える\n色・動き・構成などを「雰囲気（vibe）」でAIに伝えることで、直感的にデザインできます。',
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
  'footer.copyright': '© 2024 HyaQShix百式. All rights reserved.',
  
  // Curriculum Page
  'curriculum.title': 'カリキュラム',
  'curriculum.subtitle': '手を動かしながら、自然に身につく3ヶ月',
  'curriculum.explanation.title': 'どう学んでいくのか？',
  'curriculum.explanation.p1': 'HyaQShixの「VIBEコーディング」カリキュラムは、"日常会話でアプリを開発する体験"を通じて、自然とプログラミングの本質を学べる設計になっています。',
  'curriculum.explanation.p2': 'プログラミングの代わりにAIと対話しながら、毎日ひとつずつアプリや機能を形にしていく実践的な内容です。',
  'curriculum.explanation.p3': '生成AIを動かす"指示力"を、知識と経験で手に入れましょう。',
  'curriculum.timeline.title': 'タイムライン（例）',
  'curriculum.timeline.days1.title': 'Day1〜Day10：基礎固め',
  'curriculum.timeline.days1.desc': 'HTML/CSS/JavaScriptの基礎 + AIアシストによる初期アウトプット体験',
  'curriculum.timeline.days2.title': 'Day11〜Day40：毎日アプリ制作',
  'curriculum.timeline.days2.desc': '毎日1つの実用的アプリを生成AIで開発・リリース',
  'curriculum.timeline.days3.title': 'Day41〜Day70：テーマ別深堀',
  'curriculum.timeline.days3.desc': '業界特化・応用設計・UI/UX・セキュリティ・API連携など',
  'curriculum.timeline.days4.title': 'Day71〜Day100：最終制作と公開',
  'curriculum.timeline.days4.desc': '集大成アプリを複数制作し、公開・共有・審査・資格認定へ',
  'curriculum.flow.title': '学習の流れ',
  'curriculum.flow.phase1.title': '基礎固め',
  'curriculum.flow.phase1.period': 'Day1～Day14',
  'curriculum.flow.phase1.desc': 'AIツールの基本操作とプロンプトエンジニアリングの基礎を習得。開発環境のセットアップと基本的なアプリケーション構造の理解。',
  'curriculum.flow.phase1.point1': '生成AIツールの操作基礎',
  'curriculum.flow.phase1.point2': 'プロンプトの書き方と最適化',
  'curriculum.flow.phase1.point3': '開発環境のセットアップ',
  'curriculum.flow.phase1.point4': '基本的なWebアプリの構築',
  'curriculum.flow.phase2.title': 'AIアプリケーション開発',
  'curriculum.flow.phase2.period': 'Day15～Day28',
  'curriculum.flow.phase2.desc': 'AIを活用した実用的なアプリケーションを毎日1つ開発。徐々に複雑度を上げていき、実践的なスキルを身につける。',
  'curriculum.flow.phase2.point1': 'AIを使ったUI/UXデザイン',
  'curriculum.flow.phase2.point2': 'バックエンド開発の効率化',
  'curriculum.flow.phase2.point3': 'APIの活用とデータ連携',
  'curriculum.flow.phase2.point4': 'AIと連携したサービス構築',
  'curriculum.flow.phase3.title': 'マーケティングとビジネスモデル',
  'curriculum.flow.phase3.period': 'Day29～Day42',
  'curriculum.flow.phase3.desc': '開発したアプリの市場投入方法、マーケティング戦略、収益化モデルの構築を学ぶ。',
  'curriculum.flow.phase3.point1': '製品のポジショニングと差別化',
  'curriculum.flow.phase3.point2': 'ユーザー獲得戦略',
  'curriculum.flow.phase3.point3': '収益モデルの設計',
  'curriculum.flow.phase3.point4': 'データ分析とサービス改善',
  'curriculum.flow.phase4.title': 'スケールとファイナンス',
  'curriculum.flow.phase4.period': 'Day43～Day56',
  'curriculum.flow.phase4.desc': '事業の拡大方法、投資獲得、財務管理の基礎を習得し、持続可能なビジネスの構築方法を学ぶ。',
  'curriculum.flow.phase4.point1': 'スケーラビリティの設計',
  'curriculum.flow.phase4.point2': '投資ピッチの作成方法',
  'curriculum.flow.phase4.point3': '財務計画と管理',
  'curriculum.flow.phase4.point4': 'チーム構築と組織設計',
  'curriculum.flow.phase5.title': '卒業プロジェクト',
  'curriculum.flow.phase5.period': 'Day57～Day70',
  'curriculum.flow.phase5.desc': '学んだ全てを統合した最終プロジェクトに取り組み、実際に市場に投入可能なレベルの製品を作り上げる。',
  'curriculum.flow.phase5.point1': 'ビジネスプランの完成',
  'curriculum.flow.phase5.point2': '製品の完成とテスト',
  'curriculum.flow.phase5.point3': 'ローンチ戦略の策定',
  'curriculum.flow.phase5.point4': '投資家へのピッチ',
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
  'curriculum.metrics.apps.desc': '100個のアプリ機能を開発し、実践的なポートフォリオを構築します。',
  'curriculum.metrics.monetize.title': 'マネタイズ可能プロジェクト',
  'curriculum.metrics.monetize.desc': '開発したアプリのうち、最低10個は実際に収益化できるレベルのクオリティを目指します。',
  'curriculum.metrics.main.title': 'メインプロジェクト',
  'curriculum.metrics.main.desc': '最終的に1つの主力プロジェクトを完成させ、実際のビジネスとして展開できる準備を整えます。',
  'curriculum.cta.title': 'あなたのキャリアを加速させませんか？',
  'curriculum.cta.subtitle': 'HyaQShix百式プログラムで、AI時代を生き抜くスキルと実績を同時に手に入れましょう。',
  'curriculum.cta.free_trial': '無料体験に申し込む',
  'curriculum.cta.pricing': '料金プランを見る',
  
  // Pricing Page
  'pricing.title': '価格&保証',
  'pricing.subtitle': '未来への投資、あなたのキャリアを加速させる最適なプラン',
  'pricing.plans.title': '受講料金プラン',
  'pricing.plans.desc': 'HyaQShix百式では、学習ニーズと予算に合わせた複数の受講プランをご用意しています。すべてのプランで同じカリキュラムと高品質の学習体験を提供します。',
  'pricing.plans.basic.title': 'ベーシックプラン',
  'pricing.plans.basic.badge': '人気',
  'pricing.plans.basic.feature1': '一括払い割引き',
  'pricing.plans.basic.feature2': 'AIによる24時間サポート',
  'pricing.plans.basic.feature3': '隔週1回のグループメンタリング',
  'pricing.plans.basic.feature4': 'コミュニティへのアクセス',
  'pricing.plans.basic.feature5': '3ヶ月受講契約',
  'pricing.plans.basic.feature6': 'HyaQShix資格受験',
  'pricing.plans.basic.cta': '今すぐ申し込む',
  'pricing.plans.basic.label': 'ベーシックプラン',
  'pricing.plans.basic.price': '298,000',
  'pricing.plans.basic.currency': '円',
  'pricing.plans.basic.tax': '（税込）',
  'pricing.plans.monthly.title': '月額プラン',
  'pricing.plans.monthly.feature1': '月々分割払い',
  'pricing.plans.monthly.feature2': 'AIによる24時間サポート',
  'pricing.plans.monthly.feature3': '隔週1回のグループメンタリング',
  'pricing.plans.monthly.feature4': 'コミュニティへのアクセス',
  'pricing.plans.monthly.feature5': '3ヶ月受講契約',
  'pricing.plans.monthly.feature6': 'HyaQShix資格受験',
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
  'pricing.plans.sponsor.feature6': 'HyaQShix資格受験',
  'pricing.plans.sponsor.cta': '問合わせする',
  'pricing.plans.sponsor.label': 'スポンサー枠プラン',
  'pricing.plans.sponsor.price': 'お問い合わせ',
  'pricing.plans.sponsor.tax': '（料金詳細）',
  'pricing.guarantee.title': '満足保証制度',
  'pricing.guarantee.subtitle': '14日間の全額返金保証',
  'pricing.guarantee.desc': '授業の品質に自信があるからこそ、HyaQShix百式は「全額返金保証」をご用意。開始から14日以内なら、理由を問わず全額返金いたします。',
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
  'pricing.payment.installment.desc': '提携のファイナンス会社による分割払いプランもご用意しています。審査が必要となります。',
  'pricing.payment.note': '※法人でのお申し込みも受け付けております。請求書払いをご希望の場合は、お問い合わせフォームよりご連絡ください。',
  'pricing.faq.title': 'よくある質問',
  'pricing.contact': 'その他の質問はお問い合わせください',
  'pricing.satisfaction.title': '満足保証制度',
  'pricing.satisfaction.alt': 'HyaQShix百式の満足保証',
  'pricing.satisfaction.guarantee': '14日間の全額返金保証',
  'pricing.satisfaction.desc': '授業の品質に自信があるからこそ、HyaQShix百式は「全額返金保証」をご用意。開始から14日以内なら、理由を問わず全額返金いたします。',
  'pricing.satisfaction.eligibility': '適用条件',
  'pricing.satisfaction.application': '申請手順',
  'pricing.satisfaction.application.desc': '担当メンターまたはカスタマーサポートに返金希望の旨をお伝えください。専用フォームをご案内し、必要な情報をご提出いただきます。',
  'pricing.satisfaction.refund': '返金処理',
  'pricing.satisfaction.refund.desc': '申請受理から14営業日以内に、お支払い時と同じ方法で返金処理を行います。分割払いの場合は、お支払い済みの金額のみが返金対象となります。',
  'pricing.satisfaction.notes': '注意事項',
  'pricing.cta.title': 'まずは無料体験に申し込んでみませんか？',
  'pricing.cta.subtitle': 'あなたの生産性を10倍・100倍にする未来への第一歩をここから始めましょう。',
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
  'pricing.payment.method3.title': '分割払い',
  'pricing.payment.method3.desc': '提携のファイナンス会社による分割払いプランもご用意しています。審査が必要となります。',
  
  // Certification Page
  'certification.title': '資格認定',
  'certification.subtitle': '能力を証明する4段階の認定制度',
  'certification.desc': '当プログラムでは、学習の成果を客観的に証明できる4段階の資格制度を設けています。',
  'certification.silver.title': 'Silver認定',
  'certification.silver.desc': 'AIを活用した基本的な開発スキルを有することを証明',
  'certification.gold.title': 'Gold認定',
  'certification.gold.desc': '実践的なアプリ開発ができるレベルに到達したことを証明',
  'certification.platina.title': 'Platinum認定',
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
  'contact.info.hours.closed': '定休日',
  'curriculum.stack.title': '開発ツールと技術スタック',
  'curriculum.stack.requirements.title': '要件定義・設計支援ツール',
  'curriculum.stack.requirements.head': 'ChatGPT（OpenAI）',
  'curriculum.stack.requirements.list1': '要件定義、仕様作成、プロンプト設計、テクニカルサポート',
  'curriculum.stack.requirements.list2': '対話型で仕様ブレスト・構造設計・要件整理を支援',
  'curriculum.stack.env.title': '開発環境・コードエディタ',
  'curriculum.stack.env.head1': 'Cursor（AI搭載開発エディタ）',
  'curriculum.stack.env.env1': 'AIアシストによるコード生成、デバッグ、最適化支援',
  'curriculum.stack.env.env2': 'ChatGPT API連携型の高度な開発補助環境',
  'curriculum.stack.env.head2': 'GitHub',
  'curriculum.stack.env.env3': 'バージョン管理、チーム開発（Gitフロー理解）、ポートフォリオ構築',
  'curriculum.stack.env.env4': 'GitHub Copilot活用（状況に応じて）',
  'curriculum.stack.frontend.title': 'フロントエンド開発',
  'curriculum.stack.frontend.head': '基本技術スタック',
  'curriculum.stack.frontend.list1': 'HTML / CSS / JavaScript（基本3技術）',
  'curriculum.stack.frontend.list2': 'Next.js（Reactベースフレームワーク）※発展課程で採用予定',
  'curriculum.stack.frontend.list3': 'Tailwind CSS（効率的なスタイリング）※発展課程で採用予定',
  'curriculum.stack.backend.title': 'バックエンド・API開発',
  'curriculum.stack.backend.head': 'サーバーサイド技術',
  'curriculum.stack.backend.list1': 'Node.js（サーバーサイドJavaScript）',
  'curriculum.stack.backend.list2': 'Express.js（軽量バックエンドフレームワーク）',
};

// English translations
const en: TranslationsType = {
  // Navigation
  'nav.home': 'Home',
  'nav.curriculum': 'Curriculum',
  'nav.pricing': 'Pricing',
  'nav.certification': 'Certification',
  'nav.corporate': 'Partnerships',
  'nav.philosophy': 'Philosophy',
  'nav.contact': 'Contact',
  'nav.language': 'Language',

  // HomePage
  'home.title': 'Lightning-Fast App Development with VIBE Coding',
  'home.subtitle': 'Master 100 coding patterns and boost your productivity 100x.',
  'home.reasons': 'Why Choose HyaQShix',
  'home.communication': 'Build Apps Using Only Everyday Conversations',
  'home.communication.desc': 'No need to learn complex programming languages.\nAnyone can develop web apps with ease, using natural conversation.\nFrom planning and requirements to design, everything is built through dialogue.',
  'home.code': 'Learn by Reverse-Engineering Completed Apps',
  'home.code.desc': 'AI generates source code based on your conversations, helping you understand how apps work naturally.\nDifficulty increases gradually, allowing you to learn programming without feeling overwhelmed.',
  'home.certification': 'Visualize Your Skills Through Certification',
  'home.certification.desc': "Our four-level certification system—Silver, Gold, Platinum, and Black—objectively proves your skills and progress.\nIt's a trusted evaluation method, ideal for job hunting or securing freelance work.",
  'home.certifications': 'Certification Levels',
  'home.certifications.subtitle': 'Four Levels to Objectively Demonstrate Your Abilities',
  'passRate': 'Pass Rate',
  'learnMore': 'Learn More',
  'home.silver': 'Proof of foundational development skills.',
  'home.gold': 'Demonstrates strong daily development practice.',
  'home.platina': 'Advanced level with strategic design and AI integration capabilities.',
  'home.black': 'Top-level autonomy and value creation skills.',
  'home.guarantee': 'Satisfaction Guarantee',
  'home.guarantee.desc': '100% money-back guarantee within the first 14 days.',
  'home.methodology.viewCurriculum': 'View Full Curriculum',
  'home.slideshow.title2': 'DAILY KATA PRACTICE',
  'home.slideshow.subtitle2': 'Perfect your communication skills through our structured program with 100 specialized exercises - Practice makes perfect with the HyaQShix百式 method!',
  'home.slideshow.title3': 'BECOME CERTIFIED',
  'home.slideshow.subtitle3': 'Join the elite 9% who achieve BLACK certification status - Our graduates are recognized by leading companies worldwide for their exceptional communication skills',
  'home.outline': 'Curriculum Overview',
  'home.outline.desc': 'Comprehensive Learning Program',
  'home.methodology.title': 'Unique Methodology',
  'home.methodology.subtitle': 'Effective Learning Methods',
  'home.methodology.card1': 'Practical Learning',
  'home.methodology.card2': 'Repeated Practice',
  'home.methodology.card3': 'Continuous Feedback',

  // Promotional Text
  'promo.line1': 'Build with conversation, not code—finish your app at 10× the speed, even as a beginner!',
  'promo.line2': 'No heavy typing—just talk, and AI turns your words into a working web app in no time!',
  'promo.line3': 'Zero programming required: prototype instantly with natural conversation.',
  'promo.section.title': 'AI-Powered Development',
  'promo.section.subtitle': 'Experience the future of web development with our conversational approach.',
  'promo.conversational.title': 'Conversational',
  'promo.conversational.subtitle': 'Our revolutionary approach puts conversation at the center of app development',
  'promo.contact.subtitle': 'Have questions about our conversational development approach? Reach out to us today!',
  'promo.cards.convo': 'Conversation vs Code',
  'promo.cards.natural': 'Natural Language Prompting',
  'promo.cards.zero': 'Zero Programming',
  'promo.cards.speak': 'Speak Your Features',

  // Footer
  'footer.copyright': '© 2024 HyaQShix百式. All rights reserved.',

  // Pricing Page
  'pricing.title': 'Pricing & Guarantee',
  'pricing.subtitle': 'The perfect plan to accelerate your career in the AI era',
  'pricing.plans.title': 'Course Fee Plans',
  'pricing.plans.desc': 'HyaQShix offers multiple course plans tailored to your learning needs and budget. All plans provide the same curriculum and high-quality learning experience.',
  'pricing.plans.basic.title': 'Basic Plan',
  'pricing.plans.basic.badge': 'Popular',
  'pricing.plans.basic.feature1': '3 months of full course access',
  'pricing.plans.basic.feature2': '24-hour AI support',
  'pricing.plans.basic.feature3': 'Weekly group mentoring',
  'pricing.plans.basic.feature4': 'Community access',
  'pricing.plans.basic.feature5': 'HyaQShix Silver certification upon graduation',
  'pricing.plans.basic.feature6': 'Lump-sum payment discount available',
  'pricing.plans.basic.cta': 'Apply Now',
  'pricing.plans.basic.label': 'Basic Plan',
  'pricing.plans.basic.price': '298,000',
  'pricing.plans.basic.currency': '¥',
  'pricing.plans.basic.tax': '(Tax included)',
  'pricing.plans.monthly.title': 'Monthly Plan',
  'pricing.plans.monthly.feature1': 'Monthly tuition payment',
  'pricing.plans.monthly.feature2': '24-hour AI support',
  'pricing.plans.monthly.feature3': 'Weekly group mentoring',
  'pricing.plans.monthly.feature4': 'Community access',
  'pricing.plans.monthly.feature5': 'Minimum 3-month contract',
  'pricing.plans.monthly.feature6': 'HyaQShix Silver certification upon graduation',
  'pricing.plans.monthly.cta': 'Apply Now',
  'pricing.plans.monthly.label': 'Monthly Plan',
  'pricing.plans.monthly.price': '110,000',
  'pricing.plans.monthly.currency': '¥',
  'pricing.plans.monthly.tax': '(Tax included) / month',
  'pricing.plans.sponsor.title': 'Sponsored Plan',
  'pricing.plans.sponsor.feature1': 'Tuition-free',
  'pricing.plans.sponsor.feature2': 'Required participation in corporate projects',
  'pricing.plans.sponsor.feature3': 'Selective screening process',
  'pricing.plans.sponsor.feature4': 'Mandatory deliverables',
  'pricing.plans.sponsor.feature5': 'Weekly report submission',
  'pricing.plans.sponsor.feature6': 'HyaQShix Silver certification upon graduation',
  'pricing.plans.sponsor.cta': 'Inquire',
  'pricing.plans.sponsor.label': 'Sponsored Plan',
  'pricing.plans.sponsor.price': 'Contact us',
  'pricing.plans.sponsor.tax': '(For pricing details)',
  'pricing.guarantee.title': 'Satisfaction Guarantee',
  'pricing.guarantee.subtitle': '14-Day Full Refund Guarantee',
  'pricing.guarantee.desc': 'Because we are confident in the quality of our program, HyaQShix offers a "Full Refund Guarantee". We will refund the full amount within 14 days of starting, no questions asked.',
  'pricing.guarantee.conditions.title': 'Eligibility Criteria',
  'pricing.guarantee.conditions.condition1': 'Apply within 14 days of starting the course',
  'pricing.guarantee.conditions.condition2': 'Meet the evaluation criteria including assignment submissions and progress rates',
  'pricing.guarantee.conditions.condition3': 'Application must be submitted by the student themselves',
  'pricing.guarantee.procedure.title': 'Application Process',
  'pricing.guarantee.procedure.desc': 'Contact your mentor or customer support to express your desire for a refund. We will provide you with a specialized form for submitting the necessary information.',
  'pricing.guarantee.refund.title': 'Refund Process',
  'pricing.guarantee.refund.desc': 'Refunds will be processed within 14 business days of accepting your application, using the same payment method. For installment plans, only the amount already paid will be refunded.',
  'pricing.guarantee.notes.title': 'Notes',
  'pricing.guarantee.notes.note1': 'This program can be used only once per student',
  'pricing.guarantee.notes.note2': 'After refund, re-enrollment in the same program is not permitted',
  'pricing.guarantee.notes.note3': 'If fraud or false applications are discovered, refunds will not be provided',
  'pricing.payment.title': 'Payment Methods',
  'pricing.payment.credit.title': 'Credit Card',
  'pricing.payment.credit.desc': 'VISA, MasterCard, JCB, American Express, and Diners Club are accepted.',
  'pricing.payment.bank.title': 'Bank Transfer',
  'pricing.payment.bank.desc': 'After application, we will provide bank transfer information. Transfer fees are the responsibility of the customer.',
  'pricing.payment.installment.title': 'Installment Payments',
  'pricing.payment.installment.desc': 'Installment payment plans are available through affiliated finance companies. Approval is required.',
  'pricing.payment.note': '※ If you are applying as a corporation, invoice payment is also available.',
  'pricing.faq.title': 'Frequently Asked Questions',
  'pricing.contact': 'For other questions, please contact us',
  'pricing.satisfaction.title': 'Satisfaction Guarantee',
  'pricing.satisfaction.alt': 'HyaQShix Satisfaction Guarantee',
  'pricing.satisfaction.guarantee': '14-Day Full Refund Guarantee',
  'pricing.satisfaction.desc': 'Because we are confident in the quality of our program, HyaQShix offers a "Full Refund Guarantee". We will refund the full amount within 14 days of starting, no questions asked.',
  'pricing.satisfaction.eligibility': 'Eligibility Criteria',
  'pricing.satisfaction.application': 'Application Process',
  'pricing.satisfaction.application.desc': 'Contact your mentor or customer support to express your desire for a refund. We will provide you with a specialized form for submitting the necessary information.',
  'pricing.satisfaction.refund': 'Refund Process',
  'pricing.satisfaction.refund.desc': 'Refunds will be processed within 14 business days of accepting your application, using the same payment method. For installment plans, only the amount already paid will be refunded.',
  'pricing.satisfaction.notes': 'Notes',
  'pricing.cta.title': 'Are you ready to invest in your future?',
  'pricing.cta.subtitle': 'Apply now and in 100 days you will be able to master AI and create business opportunities.',
  'pricing.cta.button': 'Apply for a Free Trial',

  // FAQs
  'pricing.faq.q1': 'Is installment payment available?',
  'pricing.faq.a1': 'Yes, installment payments are available via credit card. Installment fees are free for up to 3 payments. Fees apply for 6 and 12 payment plans, but both options are available.',
  'pricing.faq.q2': 'Can I extend the course period?',
  'pricing.faq.a2': 'Yes, you can extend the course period for an additional fee (¥49,800 per month). Extensions are available for up to 3 months.',
  'pricing.faq.q3': 'Is there support after the course?',
  'pricing.faq.a3': 'After graduation, you can join the alumni community. Additional mentor support and job/startup support programs are also available as options.',

  // Payment methods
  'pricing.payment.method1.title': 'Credit Card',
  'pricing.payment.method1.desc': 'VISA, MasterCard, JCB, American Express, and Diners Club are accepted.',
  'pricing.payment.method2.title': 'Bank Transfer',
  'pricing.payment.method2.desc': 'After application, we will provide bank transfer information. Transfer fees are the responsibility of the customer.',
  'pricing.payment.method3.title': 'Installment Payments',
  'pricing.payment.method3.desc': 'Installment payment plans are available through affiliated finance companies. Approval is required.',

  // Certification Page
  'certification.title': 'Certification',
  'certification.subtitle': '4-level certification system to prove your abilities',
  'certification.desc': 'Our program offers a 4-level certification system that objectively verifies your learning achievements.',
  'certification.silver.title': 'Silver Certification',
  'certification.silver.desc': 'Certifies that you have basic development skills using AI',
  'certification.gold.title': 'Gold Certification',
  'certification.gold.desc': 'Certifies that you have reached a level where you can develop practical applications',
  'certification.platina.title': 'Platinum Certification',
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
  'contact.info.hours.closed': 'Closed',
  'curriculum.stack.title': 'Development Tools and Tech Stack',
  'curriculum.stack.requirements.title': 'Requirements Definition and Design Support Tools',
  'curriculum.stack.requirements.head': 'ChatGPT (OpenAI)',
  'curriculum.stack.requirements.list1': 'Requirements definition, specification creation, prompt design, technical support',
  'curriculum.stack.requirements.list2': 'Interactive specification brainstorming, structure design, and requirements organization support',
  'curriculum.stack.env.title': 'Development Environment & Code Editor',
  'curriculum.stack.env.head1': 'Cursor (AI-powered development editor)',
  'curriculum.stack.env.env1': 'AI-assisted code generation, debugging, and optimization support',
  'curriculum.stack.env.env2': 'Advanced development assistance environment integrated with ChatGPT API',
  'curriculum.stack.env.head2': 'GitHub',
  'curriculum.stack.env.env3': 'Version control, team development (Git flow understanding), portfolio building',
  'curriculum.stack.env.env4': 'GitHub Copilot utilization (as appropriate)',
  'curriculum.stack.frontend.title': 'Frontend Development',
  'curriculum.stack.frontend.head': 'Basic Technology Stack',
  'curriculum.stack.frontend.list1': 'HTML / CSS / JavaScript (basic 3 technologies)',
  'curriculum.stack.frontend.list2': 'Next.js (React-based framework) *Planned for advanced courses',
  'curriculum.stack.frontend.list3': 'Tailwind CSS (efficient styling) *Planned for advanced courses',
  'curriculum.stack.backend.title': 'Backend & API Development',
  'curriculum.stack.backend.head': 'Server-side Technology',
  'curriculum.stack.backend.list1': 'Node.js (server-side JavaScript)',
  'curriculum.stack.backend.list2': 'Express.js (lightweight backend framework)',
  'curriculum.title': '',
  'curriculum.subtitle': '',
  'curriculum.explanation.title': '',
  'curriculum.explanation.p1': '',
  'curriculum.explanation.p2': '',
  'curriculum.explanation.p3': '',
  'curriculum.timeline.title': '',
  'curriculum.timeline.days1.title': '',
  'curriculum.timeline.days1.desc': '',
  'curriculum.timeline.days2.title': '',
  'curriculum.timeline.days2.desc': '',
  'curriculum.timeline.days3.title': '',
  'curriculum.timeline.days3.desc': '',
  'curriculum.timeline.days4.title': '',
  'curriculum.timeline.days4.desc': '',
  'curriculum.flow.title': '',
  'curriculum.flow.phase1.title': '',
  'curriculum.flow.phase1.period': '',
  'curriculum.flow.phase1.desc': '',
  'curriculum.flow.phase1.point1': '',
  'curriculum.flow.phase1.point2': '',
  'curriculum.flow.phase1.point3': '',
  'curriculum.flow.phase1.point4': '',
  'curriculum.flow.phase2.title': '',
  'curriculum.flow.phase2.period': '',
  'curriculum.flow.phase2.desc': '',
  'curriculum.flow.phase2.point1': '',
  'curriculum.flow.phase2.point2': '',
  'curriculum.flow.phase2.point3': '',
  'curriculum.flow.phase2.point4': '',
  'curriculum.flow.phase3.title': '',
  'curriculum.flow.phase3.period': '',
  'curriculum.flow.phase3.desc': '',
  'curriculum.flow.phase3.point1': '',
  'curriculum.flow.phase3.point2': '',
  'curriculum.flow.phase3.point3': '',
  'curriculum.flow.phase3.point4': '',
  'curriculum.flow.phase4.title': '',
  'curriculum.flow.phase4.period': '',
  'curriculum.flow.phase4.desc': '',
  'curriculum.flow.phase4.point1': '',
  'curriculum.flow.phase4.point2': '',
  'curriculum.flow.phase4.point3': '',
  'curriculum.flow.phase4.point4': '',
  'curriculum.flow.phase5.title': '',
  'curriculum.flow.phase5.period': '',
  'curriculum.flow.phase5.desc': '',
  'curriculum.flow.phase5.point1': '',
  'curriculum.flow.phase5.point2': '',
  'curriculum.flow.phase5.point3': '',
  'curriculum.flow.phase5.point4': '',
  'curriculum.approach.title': '',
  'curriculum.approach.output.title': '',
  'curriculum.approach.output.desc': '',
  'curriculum.approach.iteration.title': '',
  'curriculum.approach.iteration.desc': '',
  'curriculum.approach.community.title': '',
  'curriculum.approach.community.desc': '',
  'curriculum.approach.mentoring.title': '',
  'curriculum.approach.mentoring.desc': '',
  'curriculum.tools.title': '',
  'curriculum.tools.ai.title': '',
  'curriculum.tools.ai.tool1': '',
  'curriculum.tools.ai.tool2': '',
  'curriculum.tools.ai.tool3': '',
  'curriculum.tools.ai.tool4': '',
  'curriculum.tools.ai.tool5': '',
  'curriculum.tools.dev.title': '',
  'curriculum.tools.dev.tool1': '',
  'curriculum.tools.dev.tool2': '',
  'curriculum.tools.dev.tool3': '',
  'curriculum.tools.dev.tool4': '',
  'curriculum.tools.dev.tool5': '',
  'curriculum.tools.marketing.title': '',
  'curriculum.tools.marketing.tool1': '',
  'curriculum.tools.marketing.tool2': '',
  'curriculum.tools.marketing.tool3': '',
  'curriculum.tools.marketing.tool4': '',
  'curriculum.tools.marketing.tool5': '',
  'curriculum.tools.business.title': '',
  'curriculum.tools.business.tool1': '',
  'curriculum.tools.business.tool2': '',
  'curriculum.tools.business.tool3': '',
  'curriculum.tools.business.tool4': '',
  'curriculum.tools.business.tool5': '',
  'curriculum.metrics.title': '',
  'curriculum.metrics.apps.title': '',
  'curriculum.metrics.apps.desc': '',
  'curriculum.metrics.monetize.title': '',
  'curriculum.metrics.monetize.desc': '',
  'curriculum.metrics.main.title': '',
  'curriculum.metrics.main.desc': '',
  'curriculum.cta.title': '',
  'curriculum.cta.subtitle': '',
  'curriculum.cta.free_trial': '',
  'curriculum.cta.pricing': ''
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