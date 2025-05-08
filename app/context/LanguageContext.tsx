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
  | 'home.certifications' | 'home.certifications.subtitle' | 'passRate' | 'learnMore'
  | 'home.silver' | 'home.gold' | 'home.platina' 
  | 'home.black' | 'home.guarantee' | 'home.guarantee.desc' 
  | 'home.methodology.title' | 'home.methodology.subtitle' | 'home.methodology.card1' 
  | 'home.methodology.card2' | 'home.methodology.card3' | 'home.methodology.viewCurriculum'
  
  // Promotional Text
  | 'promo.line1' | 'promo.line2' | 'promo.line3' | 'promo.line4'
  | 'promo.line5' | 'promo.line6' | 'promo.line7'
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
  | 'pricing.contact'
  
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
  'home.title': '100日、100テンプレート、100倍の生産性。',
  'home.subtitle': 'AIで未来のアプリ開発スキルを爆速で身につける。',
  'home.reasons': '選ばれる理由',
  'home.instant': '即戦力育成',
  'home.instant.desc': '実践的なプロジェクトで就業可能な人材を育成します。',
  'home.ai': 'AI活用スキル',
  'home.ai.desc': '生成AIを開発に活用するスキルを身につけます。',
  'home.certification': '4段階の認定制度',
  'home.certification.desc': 'シルバーからブラックまでの認定で能力を証明します。',
  'home.community': '仲間と学ぶ',
  'home.community.desc': '同じ志を持つ仲間と共に学び、成長できる環境。',
  'home.certifications': '認定制度',
  'home.certifications.subtitle': '貴方のスキルを客観的に証明する4段階の認定レベル',
  'passRate': '合格率',
  'learnMore': '詳細を見る',
  'home.silver': '基本的な開発力を有する証明。',
  'home.gold': '毎日の開発実践を積んだ実力者。',
  'home.platina': '戦略設計とAI統合が可能な上級者。',
  'home.black': '自立して価値創造できる最高レベル。',
  'home.guarantee': '満足保証制度',
  'home.guarantee.desc': '30日以内の返金対応で安心してご参加いただけます。',
  'home.methodology.title': 'HyaQShix メソドロジー',
  'home.methodology.subtitle': '制御、作成、販売、成長。すべて自分自身で。',
  'home.methodology.card1': 'AIを「使用するツール」から「習得すべき武器」へと変革する学び',
  'home.methodology.card2': '単なる技術ではなく、作成したものをどう提示し、配信し、収益化するかを学ぶ',
  'home.methodology.card3': 'あなたの内なる「起業家」「技術者」「マーケター」「マネージャー」を活性化する未来の教育道場',
  'home.methodology.viewCurriculum': 'カリキュラムの詳細を見る',

  // Promotional Text
  'promo.line1': 'コードではなく会話で構築—初心者でも10倍の速さでアプリを完成させましょう！',
  'promo.line2': '複雑なコーディング不要—会話するだけで、AIがあなたの言葉を瞬時に実用的なウェブアプリに変換します！',
  'promo.line3': 'プログラミング知識不要：自然な会話で即座にプロトタイプを作成できます。',
  'promo.line4': '話すだけで機能追加—初心者でも簡単な開発が可能です！',
  'promo.line5': 'キーボードを休ませましょう—会話式の超高速アプリ開発が可能です。',
  'promo.line6': '話す方がコーディングより速い—あなたの言葉がコードになります！',
  'promo.line7': '初心者大歓迎：アイデアをツイートするだけで、ウェブアプリが形になるのを見てください。',
  'promo.section.title': 'AIを活用した開発',
  'promo.section.subtitle': '会話形式のアプローチで、ウェブ開発の未来を体験してください。',
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
  'curriculum.subtitle': '「100日x100アプリ」プログラム',
  'curriculum.explanation.title': 'カリキュラム詳細',
  'curriculum.explanation.p1': 'HyaQShix百式の「100日x100アプリ」プログラムは、生成AIを活用したアプリケーション開発スキルを短期間で身につけるための実践的なカリキュラムです。毎日1つのアプリを開発することで、実践的なスキルとポートフォリオを同時に構築します。',
  'curriculum.explanation.p2': 'このプログラムは、単なる技術習得に留まらず、開発したアプリの市場投入、マーケティング戦略、収益化モデルの構築まで、ビジネスとしての成功に必要な要素を総合的に学ぶことができます。',
  'curriculum.explanation.p3': '100日間の集中的な学習と実践を通じて、AI時代のアプリケーション開発者として、また起業家として活躍するための確かな基盤を築きます。',
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
  'curriculum.flow.phase1.period': 'Day1～Day10',
  'curriculum.flow.phase1.desc': 'AIツールの基本操作とプロンプトエンジニアリングの基礎を習得。開発環境のセットアップと基本的なアプリケーション構造の理解。',
  'curriculum.flow.phase1.point1': '生成AIツールの操作基礎',
  'curriculum.flow.phase1.point2': 'プロンプトの書き方と最適化',
  'curriculum.flow.phase1.point3': '開発環境のセットアップ',
  'curriculum.flow.phase1.point4': '基本的なWebアプリの構築',
  'curriculum.flow.phase2.title': 'AIアプリケーション開発',
  'curriculum.flow.phase2.period': 'Day11～Day40',
  'curriculum.flow.phase2.desc': 'AIを活用した実用的なアプリケーションを毎日1つ開発。徐々に複雑度を上げていき、実践的なスキルを身につける。',
  'curriculum.flow.phase2.point1': 'AIを使ったUI/UXデザイン',
  'curriculum.flow.phase2.point2': 'バックエンド開発の効率化',
  'curriculum.flow.phase2.point3': 'APIの活用とデータ連携',
  'curriculum.flow.phase2.point4': 'AIと連携したサービス構築',
  'curriculum.flow.phase3.title': 'マーケティングとビジネスモデル',
  'curriculum.flow.phase3.period': 'Day41～Day70',
  'curriculum.flow.phase3.desc': '開発したアプリの市場投入方法、マーケティング戦略、収益化モデルの構築を学ぶ。',
  'curriculum.flow.phase3.point1': '製品のポジショニングと差別化',
  'curriculum.flow.phase3.point2': 'ユーザー獲得戦略',
  'curriculum.flow.phase3.point3': '収益モデルの設計',
  'curriculum.flow.phase3.point4': 'データ分析とサービス改善',
  'curriculum.flow.phase4.title': 'スケールとファイナンス',
  'curriculum.flow.phase4.period': 'Day71～Day90',
  'curriculum.flow.phase4.desc': '事業の拡大方法、投資獲得、財務管理の基礎を習得し、持続可能なビジネスの構築方法を学ぶ。',
  'curriculum.flow.phase4.point1': 'スケーラビリティの設計',
  'curriculum.flow.phase4.point2': '投資ピッチの作成方法',
  'curriculum.flow.phase4.point3': '財務計画と管理',
  'curriculum.flow.phase4.point4': 'チーム構築と組織設計',
  'curriculum.flow.phase5.title': '卒業プロジェクト',
  'curriculum.flow.phase5.period': 'Day91～Day100',
  'curriculum.flow.phase5.desc': '学んだ全てを統合した最終プロジェクトに取り組み、実際に市場に投入可能なレベルの製品を作り上げる。',
  'curriculum.flow.phase5.point1': 'ビジネスプランの完成',
  'curriculum.flow.phase5.point2': '製品の完成とテスト',
  'curriculum.flow.phase5.point3': 'ローンチ戦略の策定',
  'curriculum.flow.phase5.point4': '投資家へのピッチ',
  'curriculum.approach.title': '学習アプローチ',
  'curriculum.approach.output.title': 'アウトプット中心',
  'curriculum.approach.output.desc': '講義を聞くだけでなく、毎日実際にアプリケーションを開発することで実践的なスキルを身につけます。',
  'curriculum.approach.iteration.title': '反復と改善',
  'curriculum.approach.iteration.desc': '同じパターンを繰り返し実践し、フィードバックを基に継続的に改善することで、確実にスキルを定着させます。',
  'curriculum.approach.community.title': 'コミュニティ学習',
  'curriculum.approach.community.desc': '受講生同士の相互フィードバックやコラボレーションを通じて、多角的な視点を養います。',
  'curriculum.approach.mentoring.title': 'メンタリング',
  'curriculum.approach.mentoring.desc': '経験豊富なメンターからの直接指導により、効率的にスキルを向上させ、業界の最新トレンドを学びます。',
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
  'curriculum.metrics.apps.title': '制作アプリ数',
  'curriculum.metrics.apps.desc': '100日間で100個のアプリケーションを開発し、実践的なポートフォリオを構築します。',
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
  'pricing.plans.basic.feature1': '3ヶ月間の完全受講権',
  'pricing.plans.basic.feature2': 'AIによる24時間サポート',
  'pricing.plans.basic.feature3': '週1回のグループメンタリング',
  'pricing.plans.basic.feature4': 'コミュニティへのアクセス',
  'pricing.plans.basic.feature5': '卒業時、HyaQShix Silver資格取得',
  'pricing.plans.basic.feature6': '一括支払い割引あり',
  'pricing.plans.basic.cta': '今すぐ申し込む',
  'pricing.plans.monthly.title': '月額プラン',
  'pricing.plans.monthly.feature1': '月単位の分割受講',
  'pricing.plans.monthly.feature2': 'AIによる24時間サポート',
  'pricing.plans.monthly.feature3': '週1回のグループメンタリング',
  'pricing.plans.monthly.feature4': 'コミュニティへのアクセス',
  'pricing.plans.monthly.feature5': '最低3ヶ月受講契約',
  'pricing.plans.monthly.feature6': '卒業時、HyaQShix Silver資格取得',
  'pricing.plans.monthly.cta': '今すぐ申し込む',
  'pricing.plans.sponsor.title': 'スポンサー枠プラン',
  'pricing.plans.sponsor.feature1': '授業料無料',
  'pricing.plans.sponsor.feature2': '企業案件実務参加条件あり',
  'pricing.plans.sponsor.feature3': '審査制の選考あり',
  'pricing.plans.sponsor.feature4': '成果提出義務あり',
  'pricing.plans.sponsor.feature5': '毎週のレポート提出',
  'pricing.plans.sponsor.feature6': '卒業時、HyaQShix Silver資格取得',
  'pricing.plans.sponsor.cta': '問合わせする',
  'pricing.guarantee.title': '満足保証制度',
  'pricing.guarantee.subtitle': '14日間の全額返金保証',
  'pricing.guarantee.desc': 'HyaQShixは、受講生の皆様に自信を持ってご提供するプログラムです。もし期待した学習効果が得られなかった場合は、全額返金いたします。',
  'pricing.guarantee.conditions.title': '適用条件',
  'pricing.guarantee.conditions.condition1': '受講開始から14日以内に申請すること',
  'pricing.guarantee.conditions.condition2': '所定の課題提出や進捗率など、評価対象条件を満たしていること',
  'pricing.guarantee.conditions.condition3': '受講生本人からの申請であること',
  'pricing.guarantee.procedure.title': '申請手続き',
  'pricing.guarantee.procedure.desc': '申請は、受講開始から14日以内に、所定のフォームで行ってください。申請後、事務局とのTV会議面談を実施し、申請内容の確認とフィードバックを行います。',
  'pricing.guarantee.refund.title': '返金内容',
  'pricing.guarantee.refund.desc': '受講料の全額を返金いたします。返金は、申請受理後、原則として2ヶ月以内に行います。',
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
  'pricing.contact': 'お問い合わせ',
  
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
  'home.certifications.subtitle': 'Four-level certification that objectively validates your skills',
  'passRate': 'Pass Rate',
  'learnMore': 'Learn More',
  'home.silver': 'Proof of basic development skills.',
  'home.gold': 'Skilled practitioners with daily development experience.',
  'home.platina': 'Advanced users capable of strategic design and AI integration.',
  'home.black': 'Highest level capable of independent value creation.',
  'home.guarantee': 'Satisfaction Guarantee',
  'home.guarantee.desc': 'Risk-free 30-day money-back guarantee for your peace of mind.',
  'home.methodology.title': 'HyaQShix Methodology',
  'home.methodology.subtitle': 'Control, Create, Sell, Grow. All by Yourself.',
  'home.methodology.card1': 'Learning to transform AI from a "tool to be used" into a "weapon to master"',
  'home.methodology.card2': 'Not just technology. How to present, deliver, and monetize what you create',
  'home.methodology.card3': 'A future education dojo that activates the "entrepreneur," "technologist," "marketer," and "manager" within you',
  'home.methodology.viewCurriculum': 'View Curriculum Details',

  // Promotional Text
  'promo.line1': 'Build with conversation, not code—finish your app at 10× the speed, even as a beginner!',
  'promo.line2': 'No heavy typing—just talk, and AI turns your words into a working web app in no time!',
  'promo.line3': 'Zero programming required: prototype instantly with natural conversation.',
  'promo.line4': 'Add features by speaking—effortless development for first‑timers!',
  'promo.line5': 'Let your keyboard rest—conversational, lightning‑fast app creation.',
  'promo.line6': 'Talking is faster than coding—your words become code!',
  'promo.line7': 'Beginners welcome: tweet your idea and watch your web app come to life.',
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
  
  // Curriculum Page
  'curriculum.title': 'Curriculum',
  'curriculum.subtitle': '100 Days x 100 Apps Program',
  'curriculum.explanation.title': 'Curriculum Details',
  'curriculum.explanation.p1': 'The HyaQShix "100 Days x 100 Apps" program is a practical curriculum designed to rapidly develop application development skills using generative AI. By creating one app daily, you simultaneously build practical skills and a portfolio.',
  'curriculum.explanation.p2': 'This program goes beyond technical skills acquisition, covering market launch, marketing strategies, and revenue model creation for your developed applications, providing comprehensive knowledge for business success.',
  'curriculum.explanation.p3': 'Through 100 days of intensive learning and practice, you will build a solid foundation to thrive as an application developer and entrepreneur in the AI era.',
  'curriculum.timeline.title': 'Timeline (Example)',
  'curriculum.timeline.days1.title': 'Days 1-10: Building Foundations',
  'curriculum.timeline.days1.desc': 'HTML/CSS/JavaScript basics + Initial output experience with AI assistance',
  'curriculum.timeline.days2.title': 'Days 11-40: Daily App Creation',
  'curriculum.timeline.days2.desc': 'Develop and release one practical app daily using generative AI',
  'curriculum.timeline.days3.title': 'Days 41-70: Themed Deep Dives',
  'curriculum.timeline.days3.desc': 'Industry specialization, advanced design, UI/UX, security, API integration, etc.',
  'curriculum.timeline.days4.title': 'Days 71-100: Final Projects and Publication',
  'curriculum.timeline.days4.desc': 'Create multiple capstone apps, publish, share, review, and earn certification',
  'curriculum.flow.title': 'Learning Flow',
  'curriculum.flow.phase1.title': 'Foundation Building',
  'curriculum.flow.phase1.period': 'Day 1-10',
  'curriculum.flow.phase1.desc': 'Master basic AI tool operations and prompt engineering fundamentals. Set up development environments and understand basic application structures.',
  'curriculum.flow.phase1.point1': 'Basic generative AI tool operations',
  'curriculum.flow.phase1.point2': 'Prompt writing and optimization',
  'curriculum.flow.phase1.point3': 'Development environment setup',
  'curriculum.flow.phase1.point4': 'Basic web application construction',
  'curriculum.flow.phase2.title': 'AI Application Development',
  'curriculum.flow.phase2.period': 'Day 11-40',
  'curriculum.flow.phase2.desc': 'Develop one practical AI-powered application daily. Gradually increase complexity to build practical skills.',
  'curriculum.flow.phase2.point1': 'AI-powered UI/UX design',
  'curriculum.flow.phase2.point2': 'Backend development efficiency',
  'curriculum.flow.phase2.point3': 'API utilization and data integration',
  'curriculum.flow.phase2.point4': 'AI-integrated service construction',
  'curriculum.flow.phase3.title': 'Marketing and Business Models',
  'curriculum.flow.phase3.period': 'Day 41-70',
  'curriculum.flow.phase3.desc': 'Learn market launch strategies, marketing strategies, and revenue model creation for developed applications.',
  'curriculum.flow.phase3.point1': 'Product positioning and differentiation',
  'curriculum.flow.phase3.point2': 'User acquisition strategies',
  'curriculum.flow.phase3.point3': 'Revenue model design',
  'curriculum.flow.phase3.point4': 'Data analysis and service improvement',
  'curriculum.flow.phase4.title': 'Scaling and Finance',
  'curriculum.flow.phase4.period': 'Day 71-90',
  'curriculum.flow.phase4.desc': 'Master business expansion methods, investment acquisition, and financial management basics to build sustainable businesses.',
  'curriculum.flow.phase4.point1': 'Scalability design',
  'curriculum.flow.phase4.point2': 'Creating investment pitches',
  'curriculum.flow.phase4.point3': 'Financial planning and management',
  'curriculum.flow.phase4.point4': 'Team building and organizational design',
  'curriculum.flow.phase5.title': 'Graduation Project',
  'curriculum.flow.phase5.period': 'Day 91-100',
  'curriculum.flow.phase5.desc': 'Apply everything learned in a final project to create a market-ready product.',
  'curriculum.flow.phase5.point1': 'Business plan completion',
  'curriculum.flow.phase5.point2': 'Product completion and testing',
  'curriculum.flow.phase5.point3': 'Launch strategy development',
  'curriculum.flow.phase5.point4': 'Investor pitching',
  'curriculum.approach.title': 'Learning Approach',
  'curriculum.approach.output.title': 'Output-Focused',
  'curriculum.approach.output.desc': 'Develop practical skills by building applications daily, not just listening to lectures.',
  'curriculum.approach.iteration.title': 'Iteration and Improvement',
  'curriculum.approach.iteration.desc': 'Repeatedly practice patterns and continuously improve based on feedback to solidify skills.',
  'curriculum.approach.community.title': 'Community Learning',
  'curriculum.approach.community.desc': 'Develop multifaceted perspectives through peer feedback and collaboration.',
  'curriculum.approach.mentoring.title': 'Mentoring',
  'curriculum.approach.mentoring.desc': 'Efficiently improve skills and learn industry trends through direct guidance from experienced mentors.',
  'curriculum.tools.title': 'Tools and Technologies',
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
  'curriculum.metrics.title': 'Success Metrics',
  'curriculum.metrics.apps.title': 'Applications Created',
  'curriculum.metrics.apps.desc': 'Develop 100 applications in 100 days to build a practical portfolio.',
  'curriculum.metrics.monetize.title': 'Monetizable Projects',
  'curriculum.metrics.monetize.desc': 'Aim for at least 10 applications to reach a quality level that can be monetized.',
  'curriculum.metrics.main.title': 'Main Project',
  'curriculum.metrics.main.desc': 'Complete one flagship project that can be launched as an actual business.',
  'curriculum.cta.title': 'Ready to Accelerate Your Career?',
  'curriculum.cta.subtitle': 'Gain both skills and achievements for the AI era with the HyaQShix program.',
  'curriculum.cta.free_trial': 'Apply for Free Trial',
  'curriculum.cta.pricing': 'View Pricing Plans',
  
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
  'pricing.plans.monthly.title': 'Monthly Plan',
  'pricing.plans.monthly.feature1': 'Monthly tuition payment',
  'pricing.plans.monthly.feature2': '24-hour AI support',
  'pricing.plans.monthly.feature3': 'Weekly group mentoring',
  'pricing.plans.monthly.feature4': 'Community access',
  'pricing.plans.monthly.feature5': 'Minimum 3-month contract',
  'pricing.plans.monthly.feature6': 'HyaQShix Silver certification upon graduation',
  'pricing.plans.monthly.cta': 'Apply Now',
  'pricing.plans.sponsor.title': 'Sponsored Plan',
  'pricing.plans.sponsor.feature1': 'Tuition-free',
  'pricing.plans.sponsor.feature2': 'Required participation in corporate projects',
  'pricing.plans.sponsor.feature3': 'Selective screening process',
  'pricing.plans.sponsor.feature4': 'Mandatory deliverables',
  'pricing.plans.sponsor.feature5': 'Weekly report submission',
  'pricing.plans.sponsor.feature6': 'HyaQShix Silver certification upon graduation',
  'pricing.plans.sponsor.cta': 'Inquire',
  'pricing.guarantee.title': 'Satisfaction Guarantee',
  'pricing.guarantee.subtitle': '14-Day Full Refund Guarantee',
  'pricing.guarantee.desc': 'HyaQShix is a program we confidently offer to our students. If you do not achieve the expected learning outcomes, we will provide a full refund.',
  'pricing.guarantee.conditions.title': 'Eligibility Conditions',
  'pricing.guarantee.conditions.condition1': 'Apply within 14 days of starting the course',
  'pricing.guarantee.conditions.condition2': 'Meet the evaluation criteria including assignment submissions and progress rates',
  'pricing.guarantee.conditions.condition3': 'Application must be submitted by the student themselves',
  'pricing.guarantee.procedure.title': 'Application Process',
  'pricing.guarantee.procedure.desc': 'Applications must be submitted within 14 days of starting the course using the designated form. After application, a video conference interview will be conducted with the administrative office to confirm the content and provide feedback.',
  'pricing.guarantee.refund.title': 'Refund Details',
  'pricing.guarantee.refund.desc': 'The full course fee will be refunded. Refunds will be processed within 2 months of application approval.',
  'pricing.guarantee.notes.title': 'Important Notes',
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
  'pricing.payment.note': '* Corporate applications are also accepted. If you require invoice payment, please contact us through the inquiry form.',
  'pricing.faq.title': 'Frequently Asked Questions',
  'pricing.contact': 'Contact Us',
  
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