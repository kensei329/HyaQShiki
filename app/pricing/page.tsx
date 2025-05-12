'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

export default function PricingPage() {
  const { t, language } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  
  // FAQ items (dual language)
  const faqItems = [
    {
      questionJa: 'パソコンは必要ですか？',
      answerJa: 'はい、必要です。ご要望に応じてパソコン取得のサポートも可能です。',
      questionEn: 'Is installment payment available?',
      answerEn: 'Yes, installment payments are available via credit card. Installment fees are free for up to 3 payments. Fees apply for 6 and 12 payment plans, but both options are available.'
    },
    {
      questionJa: '受講期間の延長は可能ですか？',
      answerJa: 'はい、追加料金（月額49,800円）で受講期間を延長することができます。延長は最大3ヶ月まで可能です。',
      questionEn: 'Can I extend the course period?',
      answerEn: 'Yes, you can extend the course period for an additional fee (¥49,800 per month). Extensions are available for up to 3 months.'
    },
    {
      questionJa: '受講後のサポートはありますか？',
      answerJa: '卒業後も、卒業生コミュニティに参加できます。また、追加のメンターサポートや、就職・起業支援プログラムもオプションでご用意しています。',
      questionEn: 'Is there support after the course?',
      answerEn: 'After graduation, you can join the alumni community. Additional mentor support and job/startup support programs are also available as options.'
    }
  ];
  
  // Plan features to display both languages
  const planFeatures = {
    basic: [
      { ja: '一括払い割引き', en: '3 months of full course access' },
      { ja: 'AIによる24時間サポート', en: '24-hour AI support' },
      { ja: '隔週1回のグループメンタリング', en: 'Weekly group mentoring' },
      { ja: 'コミュニティへのアクセス', en: 'Community access' },
      { ja: '3ヶ月受講契約', en: 'HyaQShix Silver certification upon graduation' },
      { ja: 'HyaQShix資格受験', en: 'Lump-sum payment discount available' }
    ],
    monthly: [
      { ja: '月々分割払い', en: 'Monthly tuition payment' },
      { ja: 'AIによる24時間サポート', en: '24-hour AI support' },
      { ja: '隔週1回のグループメンタリング', en: 'Weekly group mentoring' },
      { ja: 'コミュニティへのアクセス', en: 'Community access' },
      { ja: '3ヶ月受講契約', en: 'Minimum 3-month contract' },
      { ja: 'HyaQShix資格受験', en: 'HyaQShix Silver certification upon graduation' }
    ],
    sponsor: [
      { ja: '授業料割引き', en: 'Tuition-free' },
      { ja: '企業案件実務参加条件あり', en: 'Required participation in corporate projects' },
      { ja: '審査制の選考あり', en: 'Selective screening process' },
      { ja: '成果提出義務あり', en: 'Mandatory deliverables' },
      { ja: '毎週のレポート提出', en: 'Weekly report submission' },
      { ja: 'HyaQShix資格受験', en: 'HyaQShix Silver certification upon graduation' }
    ]
  };
  
  // Guarantee conditions
  const guaranteeConditions = [
    { ja: '受講開始から14日以内に申請すること', en: 'Apply within 14 days of starting the course' },
    { ja: '所定の課題提出や進捗率など、評価対象条件を満たしていること', en: 'Meet the evaluation criteria including assignment submissions and progress rates' },
    { ja: '受講生本人からの申請であること', en: 'Application must be submitted by the student themselves' }
  ];
  
  // Notes
  const guaranteeNotes = [
    { ja: '本制度の利用は、受講生一人につき一度限りとします', en: 'This program can be used only once per student' },
    { ja: '返金後、同一プログラムへの再受講はできません', en: 'After refund, re-enrollment in the same program is not permitted' },
    { ja: '不正行為や虚偽の申請が判明した場合、返金の対象外とします', en: 'If fraud or false applications are discovered, refunds will not be provided' }
  ];
  
  // Payment methods
  const paymentMethods = [
    {
      icon: '💳',
      titleJa: 'クレジットカード',
      titleEn: 'Credit Card',
      descJa: 'VISA, MasterCard, JCB, American Express, Diners Clubがご利用いただけます。',
      descEn: 'VISA, MasterCard, JCB, American Express, and Diners Club are accepted.'
    },
    {
      icon: '🏦',
      titleJa: '銀行振込',
      titleEn: 'Bank Transfer',
      descJa: 'お申し込み後、振込先情報をご案内いたします。振込手数料はお客様負担となります。',
      descEn: 'After application, we will provide bank transfer information. Transfer fees are the responsibility of the customer.'
    },
    {
      icon: '💸',
      titleJa: '分割払い',
      titleEn: 'Installment Payments',
      descJa: '提携のファイナンス会社による分割払いプランもご用意しています。審査が必要となります。',
      descEn: 'Installment payment plans are available through affiliated finance companies. Approval is required.'
    }
  ];
  
  // CTA content
  const ctaContent = {
    titleJa: 'まずは無料体験に申し込んでみませんか？',
    titleEn: 'Are you ready to invest in your future?',
    subtitleJa: 'あなたの生産性を10倍・100倍にする未来への第一歩をここから始めましょう。',
    subtitleEn: 'Apply now and in 100 days you will be able to master AI and create business opportunities.',
    buttonJa: '無料体験に申し込む',
    buttonEn: 'Apply for a Free Trial'
  };
  
  return (
    <div className="font-['Poppins',sans-serif] bg-black text-white">
      <Header />

      <main>
        {/* Hero */}
        <div className="relative w-full">
          <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage="/images/slide1.jpg"
            bgImageAlt="Pricing Background"
            strength={400}
            className="py-32 flex items-center justify-center"
            bgImageStyle={{opacity: 0.5}}
            renderLayer={percentage => (
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'black',
                  opacity: 0.6
                }}
              />
            )}
          >
            <motion.div 
              className="relative z-20 text-center max-w-4xl px-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200"
                variants={fadeInUp}
              >
                {t('pricing.title')}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl font-light text-yellow-50 mb-6"
                variants={fadeInUp}
              >
                {language === 'en' ? 'The perfect plan to accelerate your career in the AI era' : '未来への投資、あなたのキャリアを加速させる最適なプラン'}
              </motion.p>
            </motion.div>
          </Parallax>
        </div>

        {/* Pricing Plans */}
        <section className="py-24 relative overflow-hidden bg-black">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-bg.png')] opacity-5 bg-repeat"></div>
          <motion.div 
            className="max-w-6xl mx-auto px-6 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl font-bold text-center mb-4"
              variants={fadeInUp}
            >
              {t('pricing.plans.title')}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-6"
              variants={fadeInUp}
            ></motion.div>
            <motion.p
              className="text-center text-gray-300 max-w-2xl mx-auto mb-16"
              variants={fadeInUp}
            >
              {language === 'en' 
                ? 'HyaQShix offers multiple course plans tailored to your learning needs and budget. All plans provide the same curriculum and high-quality learning experience.' 
                : 'HyaQShix百式では、学習ニーズと予算に合わせた複数の受講プランをご用意しています。すべてのプランで同じカリキュラムと高品質の学習体験を提供します。'}
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-10">
              {/* Basic Plan - Featured */}
              <motion.div 
                className="backdrop-blur-md bg-white/5 border-2 border-yellow-500 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 rounded-bl-lg font-medium">
                  <span className="mr-1">{t('pricing.plans.basic.badge')}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  <span className="block">{t('pricing.plans.basic.title')}</span>
                  <span className="block text-sm mt-1 text-gray-400">
                    {language === 'en' ? 'Basic Plan' : 'ベーシックプラン'}
                  </span>
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-yellow-400">298,000</span>
                  <span className="text-lg text-yellow-400">{language === 'en' ? '¥' : '円'}</span>
                  <p className="text-gray-400">{language === 'en' ? '(Tax included)' : '（税込）'}</p>
                </div>
                <ul className="mb-8 space-y-4">
                  {planFeatures.basic.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <div>
                        <span className="block text-gray-200">{language === 'en' ? feature.en : feature.ja}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-3 px-4 rounded-lg text-center transition-all duration-300 hover:scale-105">
                  <span className="block">{t('pricing.plans.basic.cta')}</span>
                </Link>
              </motion.div>
              
              {/* Monthly Plan */}
              <motion.div 
                className="backdrop-blur-md bg-white/5 border border-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="text-xl font-bold mb-4">
                  <span className="block">{t('pricing.plans.monthly.title')}</span>
                  <span className="block text-sm mt-1 text-gray-400">
                    {language === 'en' ? 'Monthly Plan' : '月額プラン'}
                  </span>
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-yellow-400">110,000</span>
                  <span className="text-lg text-yellow-400">{language === 'en' ? '¥' : '円'}</span>
                  <p className="text-gray-400">{language === 'en' ? '(Tax included) / month' : '（税込）/ 月'}</p>
                </div>
                <ul className="mb-8 space-y-4">
                  {planFeatures.monthly.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <div>
                        <span className="block text-gray-200">{language === 'en' ? feature.en : feature.ja}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full bg-transparent hover:bg-white/10 text-yellow-400 font-bold py-3 px-4 rounded-lg border border-yellow-400 text-center transition-all duration-300 hover:scale-105">
                  <span className="block">{t('pricing.plans.monthly.cta')}</span>
                </Link>
              </motion.div>
              
              {/* Sponsor Plan */}
              <motion.div 
                className="backdrop-blur-md bg-white/5 border border-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="text-xl font-bold mb-4">
                  <span className="block">{t('pricing.plans.sponsor.title')}</span>
                  <span className="block text-sm mt-1 text-gray-400">
                    {language === 'en' ? 'Sponsored Plan' : 'スポンサー枠プラン'}
                  </span>
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-yellow-400">{language === 'en' ? 'Contact us' : 'お問い合わせ'}</span>
                  <p className="text-gray-400">{language === 'en' ? '(For pricing details)' : '（料金詳細）'}</p>
                </div>
                <ul className="mb-8 space-y-4">
                  {planFeatures.sponsor.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <div>
                        <span className="block text-gray-200">{language === 'en' ? feature.en : feature.ja}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full bg-transparent hover:bg-white/10 text-yellow-400 font-bold py-3 px-4 rounded-lg border border-yellow-400 text-center transition-all duration-300 hover:scale-105">
                  <span className="block">{t('pricing.plans.sponsor.cta')}</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Satisfaction Guarantee */}
        <section className="py-24 relative overflow-hidden bg-black">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-30 blur-3xl"></div>
          
          <motion.div 
            className="max-w-6xl mx-auto px-6 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >

            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-6"
              variants={fadeInUp}
            ></motion.div>
            <motion.h3
              className="text-center text-2xl font-bold text-white mb-14"
              variants={fadeInUp}
            >
              {language === 'en' ? 'Satisfaction Guarantee' : '満足保証制度'}
            </motion.h3>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div 
                className="md:w-1/3"
                variants={fadeInUp}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                  className="relative"
                >
                  <Image 
                    src="/images/satisfaction-guarantee.png" 
                    alt={language === 'en' ? "HyaQShix Satisfaction Guarantee" : "HyaQShix百式の満足保証"} 
                    width={300} 
                    height={300} 
                    className="mx-auto drop-shadow-xl" 
                  />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">✓</span>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="md:w-2/3 backdrop-blur-md bg-white/5 border border-gray-800 rounded-xl p-8 shadow-xl"
                variants={fadeInUp}
              >
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                  {language === 'en' ? '14-Day Full Refund Guarantee' : '14日間の全額返金保証'}
                </h3>
                <p className="mb-6 text-gray-300 leading-relaxed">
                  {language === 'en' 
                    ? 'HyaQShix is a program we confidently offer to our students. If you do not achieve the expected learning outcomes, we will provide a full refund.' 
                    : 'HyaQShix百式は、受講生の皆様に自信を持ってご提供するプログラムです。もし期待した学習効果が得られなかった場合は、全額返金いたします。'}
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center">
                      <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">1</span>
                      {language === 'en' ? 'Eligibility Conditions' : '適用条件'}
                    </h4>
                    <ul className="mb-4 space-y-2 pl-10">
                      {guaranteeConditions.map((condition, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="block text-gray-300">{language === 'en' ? condition.en : condition.ja}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center">
                      <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">2</span>
                      {language === 'en' ? 'Application Process' : '申請手続き'}
                    </h4>
                    <p className="mb-4 text-gray-300 pl-10">
                      {language === 'en' 
                        ? 'Applications must be submitted within 14 days of starting the course using the designated form. After application, a video conference interview will be conducted with the administrative office to confirm the content and provide feedback.' 
                        : '申請は、受講開始から14日以内に、所定のフォームで行ってください。申請後、事務局とのTV会議面談を実施し、申請内容の確認とフィードバックを行います。'}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center">
                      <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2 text-black">3</span>
                      {language === 'en' ? 'Refund Details' : '返金内容'}
                    </h4>
                    <p className="mb-4 text-gray-300 pl-10">
                      {language === 'en' 
                        ? 'The full course fee will be refunded. Refunds will be processed within 2 months of application approval.' 
                        : '受講料の全額を返金いたします。返金は、申請受理後、原則として2ヶ月以内に行います。'}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 bg-white/5 p-4 rounded-lg border border-yellow-500/20">
                  <h4 className="text-lg font-bold mb-3 text-yellow-400">
                    {language === 'en' ? 'Important Notes' : '注意事項'}
                  </h4>
                  <ul className="space-y-2">
                    {guaranteeNotes.map((note, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        <span className="block text-gray-300">{language === 'en' ? note.en : note.ja}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Payment Options */}
        <section className="py-24 relative overflow-hidden bg-black">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-bg.png')] opacity-5 bg-repeat"></div>
          <motion.div 
            className="max-w-6xl mx-auto px-6 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl font-bold text-center mb-4"
              variants={fadeInUp}
            >
              {t('pricing.payment.title')}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-14"
              variants={fadeInUp}
            ></motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {paymentMethods.map((method, idx) => (
                <motion.div 
                  key={idx} 
                  className="backdrop-blur-md bg-white/5 border border-gray-800 rounded-xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="text-5xl mb-6 text-yellow-400"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 2, 0, -2, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  >
                    {method.icon}
                  </motion.div>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent mb-6"></div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">
                    {language === 'en' ? method.titleEn : method.titleJa}
                  </h3>
                  <p className="text-gray-300">
                    {language === 'en' ? method.descEn : method.descJa}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              className="text-center mt-8 text-gray-400 backdrop-blur-md bg-white/5 border border-gray-800 rounded-lg p-4 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              {language === 'en' 
                ? '* Corporate applications are also accepted. If you require invoice payment, please contact us through the inquiry form.' 
                : '※法人でのお申し込みも受け付けております。請求書払いをご希望の場合は、お問い合わせフォームよりご連絡ください。'}
            </motion.p>
          </motion.div>
        </section>

        {/* FAQ Preview */}
        <section className="py-24 relative overflow-hidden bg-black">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-30 blur-3xl"></div>
          
          <motion.div 
            className="max-w-4xl mx-auto px-6 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl font-bold text-center mb-4"
              variants={fadeInUp}
            >
              {t('pricing.faq.title')}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-14"
              variants={fadeInUp}
            ></motion.div>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="backdrop-blur-md bg-white/5 border border-gray-800 rounded-xl overflow-hidden shadow-xl"
                  variants={fadeInUp}
                >
                  <motion.button 
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none group"
                    onClick={() => toggleFaq(index)}
                    whileHover={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors duration-300">
                      <span className="block">{language === 'en' ? item.questionEn : item.questionJa}</span>
                    </h3>
                    <motion.div 
                      className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 ml-4"
                      animate={{ 
                        rotate: openFaqIndex === index ? 180 : 0,
                        backgroundColor: openFaqIndex === index ? 'rgba(234, 179, 8, 0.4)' : 'rgba(234, 179, 8, 0.2)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg 
                        className="w-5 h-5 text-yellow-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </motion.div>
                  </motion.button>
                  <motion.div 
                    className="overflow-hidden"
                    animate={{ 
                      height: openFaqIndex === index ? 'auto' : 0,
                      opacity: openFaqIndex === index ? 1 : 0
                    }}
                    transition={{ 
                      duration: 0.3, 
                      ease: "easeInOut" 
                    }}
                  >
                    <div className="p-6 pt-0 text-gray-300 border-t border-gray-800">
                      <span className="block leading-relaxed">{language === 'en' ? item.answerEn : item.answerJa}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-yellow-500 to-yellow-600 text-black">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-400 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-400 rounded-full opacity-30 blur-3xl"></div>
          
          <motion.div 
            className="max-w-4xl mx-auto px-6 text-center relative z-10"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {language === 'en' ? ctaContent.titleEn : ctaContent.titleJa}
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 opacity-90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {language === 'en' ? ctaContent.subtitleEn : ctaContent.subtitleJa}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-black hover:bg-gray-800 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>{language === 'en' ? ctaContent.buttonEn : ctaContent.buttonJa}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
