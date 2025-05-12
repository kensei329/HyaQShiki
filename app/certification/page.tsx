'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

export default function CertificationPage() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
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
  
  // Certification levels data
  const certificationLevels = [
    {
      title: { ja: 'HyaQShix Silver', en: 'HyaQShix Silver' },
      passRate: { ja: '合格率：50%', en: 'Pass Rate: 50%' },
      description: { 
        ja: 'AIを活用したアプリケーション開発の基礎スキルを証明するエントリーレベルの認定資格です。', 
        en: 'An entry-level certification that validates basic skills in AI-powered application development.' 
      },
      criteria: [
        { ja: '基本的なAIツールの活用力', en: 'Basic AI tool utilization skills' },
        { ja: 'プロンプトエンジニアリングの基礎', en: 'Fundamentals of prompt engineering' },
        { ja: 'シンプルなWebアプリケーションの開発能力', en: 'Ability to develop simple web applications' },
        { ja: '基本的なUI/UXデザイン理解', en: 'Basic understanding of UI/UX design' }
      ],
      bgClass: 'bg-gradient-to-br from-gray-600 to-gray-700',
      borderClass: 'border-gray-500'
    },
    {
      title: { ja: 'HyaQShix Gold', en: 'HyaQShix Gold' },
      passRate: { ja: '合格率：30%', en: 'Pass Rate: 30%' },
      description: { 
        ja: 'AIを活用した実用的なアプリケーション開発と基本的なマーケティング知識を兼ね備えた中級者向け認定資格です。', 
        en: 'An intermediate certification for those with practical AI application development skills and basic marketing knowledge.' 
      },
      criteria: [
        { ja: '高度なAIツールの活用と連携', en: 'Advanced AI tool utilization and integration' },
        { ja: '複雑なアプリケーション開発能力', en: 'Ability to develop complex applications' },
        { ja: '基本的なマーケティング戦略の策定', en: 'Development of basic marketing strategies' },
        { ja: 'ユーザー体験の最適化', en: 'User experience optimization' }
      ],
      bgClass: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
      borderClass: 'border-yellow-400'
    },
    {
      title: { ja: 'HyaQShix Platina', en: 'HyaQShix Platina' },
      passRate: { ja: '合格率：15%', en: 'Pass Rate: 15%' },
      description: { 
        ja: 'AIを活用した高度なアプリケーション開発とビジネスモデル構築の能力を証明する上級者向け認定資格です。', 
        en: 'An advanced certification that validates sophisticated AI application development skills and business model construction abilities.' 
      },
      criteria: [
        { ja: '複数のAIツールの統合と最適化', en: 'Integration and optimization of multiple AI tools' },
        { ja: '完成度の高いアプリケーション開発', en: 'Development of highly polished applications' },
        { ja: '収益モデルの設計と実装', en: 'Revenue model design and implementation' },
        { ja: 'データ分析とサービス改善', en: 'Data analysis and service improvement' }
      ],
      bgClass: 'bg-gradient-to-br from-gray-300 to-gray-400',
      borderClass: 'border-gray-300',
      textClass: 'text-gray-900'
    },
    {
      title: { ja: 'HyaQShix Black', en: 'HyaQShix Black' },
      passRate: { ja: '合格率：5%', en: 'Pass Rate: 5%' },
      description: { 
        ja: 'AIを活用した事業創造と拡大の能力を証明するエキスパートレベルの認定資格です。業界での最高峰として認知されています。', 
        en: 'An expert-level certification that validates business creation and growth capabilities using AI, recognized as the industry pinnacle.' 
      },
      criteria: [
        { ja: '革新的なAI活用方法の開発', en: 'Development of innovative AI utilization methods' },
        { ja: 'スケーラブルなサービス設計', en: 'Scalable service design' },
        { ja: '総合的な事業戦略の策定', en: 'Comprehensive business strategy development' },
        { ja: '投資家向けピッチの作成と実行', en: 'Creation and execution of investor pitches' }
      ],
      bgClass: 'bg-gradient-to-br from-gray-900 to-black',
      borderClass: 'border-gray-700'
    }
  ];

  // Evaluation process data
  const evaluationProcesses = [
    {
      icon: 'fa-hourglass-half',
      title: { 
        ja: '制限時間内のアプリ構築', 
        en: 'Application Building within Time Limit' 
      },
      description: { 
        ja: '各ランクに応じた難易度の課題に対し、制限時間内にアプリケーションを構築することが求められます。課題の難易度と制限時間はランクによって異なります。', 
        en: 'You will be required to build an application within a time limit for challenges with difficulty levels corresponding to each rank. The difficulty and time limit vary by rank.' 
      }
    },
    {
      icon: 'fa-robot',
      title: { 
        ja: 'AIによる自動評価', 
        en: 'Automated AI Evaluation' 
      },
      description: { 
        ja: '提出されたコードに対して、コード品質、機能達成率、UI整合性などの観点から、AIによる自動評価が行われます。', 
        en: 'Submitted code will be automatically evaluated by AI for code quality, functionality achievement rate, UI consistency, and other aspects.' 
      }
    },
    {
      icon: 'fa-user-check',
      title: { 
        ja: '人間によるレビュー', 
        en: 'Human Review' 
      },
      description: { 
        ja: '専門家によるレビューでは、独創性、ユーザー体験、構成力などの定性的な側面が評価されます。', 
        en: 'Expert reviewers will evaluate qualitative aspects such as originality, user experience, and structural capability.' 
      }
    }
  ];

  // Guarantee conditions
  const guaranteeConditions = [
    { 
      ja: '受講開始から14日以内に申請すること', 
      en: 'Apply within 14 days of starting the course' 
    },
    { 
      ja: '所定の課題提出や進捗率など、評価対象条件を満たしていること', 
      en: 'Meet the evaluation criteria including assignment submissions and progress rates' 
    },
    { 
      ja: '受講生本人からの申請であること', 
      en: 'Application must be submitted by the student themselves' 
    }
  ];

  // Certificate details
  const certificateDetails = [
    { ja: '保持者名', en: 'Holder Name' },
    { ja: '認定ランク', en: 'Certification Rank' },
    { ja: 'シリアルID', en: 'Serial ID' },
    { ja: '発行日', en: 'Issue Date' },
    { ja: '有効期限', en: 'Expiration Date' },
    { ja: '照合用QRコード', en: 'Verification QR Code' }
  ];
  
  // Certification fee table data
  const certificationFees = [
    {
      rank: 'HyaQShix Silver',
      fee: '49,800円',
      passRate: '50%',
      renewal: '3年ごと'
    },
    {
      rank: 'HyaQShix Gold',
      fee: '49,800円',
      passRate: '30%',
      renewal: '3年ごと'
    },
    {
      rank: 'HyaQShix Platina',
      fee: '49,800円',
      passRate: '15%',
      renewal: '3年ごと'
    },
    {
      rank: 'HyaQShix Black',
      fee: '49,800円',
      passRate: '5%',
      renewal: '3年ごと'
    },
    {
      rank: language === 'en' ? 'Certification Renewal' : '資格更新料',
      fee: '8,800円',
      passRate: '-',
      renewal: language === 'en' ? 'Common for all ranks' : 'すべてのランク共通'
    }
  ];
  
  return (
    <div className="font-['Poppins',sans-serif] bg-black text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <div className="relative w-full">
          <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage="/images/slide3.jpg"
            bgImageAlt="Certification Background"
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
                {t('certification.title')}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl font-light text-yellow-50 mb-6"
                variants={fadeInUp}
              >
                {language === 'en' ? 'HyaQShix Certification System' : 'HyaQShix 認定資格制度'}
              </motion.p>
            </motion.div>
          </Parallax>
        </div>

        {/* Certification Overview */}
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
              {t('About Certification')}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-6"
              variants={fadeInUp}
            ></motion.div>
            
            <motion.div 
              className="backdrop-blur-md bg-white/5 rounded-xl p-8 md:p-12 mt-10"
              variants={fadeInUp}
            >
              <p className="text-xl text-center mb-12 leading-relaxed">
                {language === 'en' 
                  ? "The HyaQShix certification is an industry-recognized credential system that validates skills in generative AI application development and business creation."
                  : "HyaQShix認定資格は、生成AI時代のアプリケーション開発と事業創造スキルを証明する業界認知の資格制度です。"}
                <span className="text-yellow-400 font-semibold"> 
                  {language === 'en' 
                    ? "Master the skills needed for the AI-driven future."
                    : "生成AI時代のアプリケーション開発と事業創造スキル"}
                </span>
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-yellow-500">
                  <div className="bg-yellow-500 text-black font-semibold w-8 h-8 rounded-full flex items-center justify-center mb-4">01</div>
                  <p className="text-gray-200 leading-relaxed">
                    {language === 'en' 
                      ? "The certification is divided into 4 ranks, comprehensively evaluating skills such as application development speed, quality, and business value creation."
                      : "4段階のランクに分かれ、アプリケーション開発の速度、品質、ビジネス価値創出の能力など、総合的なスキルを評価します。"}
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-yellow-500">
                  <div className="bg-yellow-500 text-black font-semibold w-8 h-8 rounded-full flex items-center justify-center mb-4">02</div>
                  <p className="text-gray-200 leading-relaxed">
                    {language === 'en' 
                      ? "By obtaining this certification, you can objectively prove your AI development skills and expand your career possibilities."
                      : "この資格を取得することで、AI開発のスキルを客観的に証明でき、キャリアの可能性を広げることができます。"}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Certification Levels */}
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
            <motion.h2 
              className="text-4xl font-bold text-center mb-4"
              variants={fadeInUp}
            >
              {language === 'en' ? 'Certification Ranks' : '認定ランク'}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-14"
              variants={fadeInUp}
            ></motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certificationLevels.map((level, index) => (
                <motion.div 
                  key={index} 
                  className={`rounded-xl border ${level.borderClass} overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${level.bgClass} ${level.textClass || 'text-white'}`}
                  variants={fadeInUp}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">
                      {language === 'en' ? level.title.en : level.title.ja}
                    </h3>
                    <p className="text-sm font-semibold mb-4">
                      {language === 'en' ? level.passRate.en : level.passRate.ja}
                    </p>
                    <p className="mb-4 text-sm">
                      {language === 'en' ? level.description.en : level.description.ja}
                    </p>
                    <h4 className="font-semibold text-left mb-2">
                      {language === 'en' ? 'Evaluation Criteria:' : '評価基準：'}
                    </h4>
                    <ul className="text-left text-sm space-y-1">
                      {level.criteria.map((criterion, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>
                            {language === 'en' ? criterion.en : criterion.ja}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Evaluation Process */}
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
              {language === 'en' ? 'Evaluation Method' : '評価方法'}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-14"
              variants={fadeInUp}
            ></motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {evaluationProcesses.map((process, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white/5 rounded-xl p-8 border border-yellow-400 shadow-lg hover:shadow-2xl transition-all duration-300 text-left"
                  variants={fadeInUp}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-yellow-400 text-black w-14 h-14 flex items-center justify-center rounded-full text-3xl">
                      <i className={`fas ${process.icon}`}></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-400 text-left">
                    {language === 'en' ? process.title.en : process.title.ja}
                  </h3>
                  <p className="text-gray-200 text-left leading-relaxed">
                    {language === 'en' ? process.description.en : process.description.ja}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Certificate Details */}
        <section className="py-24 relative overflow-hidden bg-black">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-30 blur-3xl"></div>
          
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
              {language === 'en' ? 'About the Certificate' : '証明書について'}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-14"
              variants={fadeInUp}
            ></motion.div>
            
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                className="md:w-1/2"
                variants={fadeInUp}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl shadow-xl border border-yellow-500/20"
                >
                  <Image 
                    src="/images/certificate-sample.png"
                    alt={language === 'en' ? "HyaQShix Certificate Sample" : "HyaQShix認定証明書サンプル"}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2 backdrop-blur-md bg-white/5 rounded-xl p-8 border border-gray-800"
                variants={fadeInUp}
              >
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                  {language === 'en' ? 'Certificate Distribution Format' : '証明書の配布形式'}
                </h3>
                <p className="mb-4 text-gray-200">
                  {language === 'en' 
                    ? 'Upon passing the certification exam, you will receive a PDF format electronic certificate that includes the following information:' 
                    : '認定試験に合格すると、以下の内容を含むPDF形式の電子証明書が発行されます：'}
                </p>
                <ul className="mb-8 space-y-2">
                  {certificateDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-200">
                        {language === 'en' ? detail.en : detail.ja}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {language === 'en' ? 'Certification Cycle' : '認定サイクル'}
                </h3>
                <p className="mb-4 text-gray-200">
                  {language === 'en' 
                    ? 'Certifications are valid for 3 years from the date of issue. After that, you can maintain your certification by applying for renewal.' 
                    : '認定資格は発行から3年間有効です。以降は更新申請により資格を維持することができます。'}
                </p>
                
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {language === 'en' ? 'Renewal Fee' : '更新費用'}
                </h3>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-200">
                      {language === 'en' ? 'Certification Renewal: ¥8,000 (tax included)' : '認定更新：8,000円（税込）'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-200">
                      {language === 'en' ? 'Re-certification after expiration: ¥15,000 (tax included)' : '失効からの再認定：15,000円（税込）'}
                    </span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {language === 'en' ? 'Renewal Deadline & Expiration Rules' : '更新期限・失効ルール'}
                </h3>
                <p className="text-gray-200">
                  {language === 'en' 
                    ? 'If you do not complete the renewal procedure within the renewal deadline, there is a 1-year grace period. If you cannot renew during the grace period, your certification will expire, and re-acquisition will require re-taking the course or passing a special exam.' 
                    : '更新期限内に更新手続きを完了しない場合、1年間の猶予期間があります。猶予期間中に更新できなかった場合、資格は失効し、再取得には再受講または特別試験の合格が必要となります。'}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Certification Fees */}
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
              {language === 'en' ? 'Certification Exam Fees' : '資格受験料'}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-6"
              variants={fadeInUp}
            ></motion.div>
            <motion.p 
              className="text-center mb-14 max-w-3xl mx-auto text-gray-300"
              variants={fadeInUp}
            >
              {language === 'en' 
                ? 'Please check the following exam fees if you are considering taking the HyaQShix certification exam. For course participants, the Silver certification is included in the tuition fee.' 
                : 'HyaQShix認定資格の受験をお考えの方は、以下の受験料をご確認ください。カリキュラム受講生は、Silver資格が受講料に含まれています。'}
            </motion.p>
            
            <motion.div 
              className="overflow-hidden rounded-xl shadow-xl"
              variants={fadeInUp}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-900 to-gray-800">
                      <th className="py-4 px-6 text-left text-yellow-400 font-bold">
                        {language === 'en' ? 'Certification Rank' : '資格ランク'}
                      </th>
                      <th className="py-4 px-6 text-left text-yellow-400 font-bold">
                        {language === 'en' ? 'Exam Fee (Tax Included)' : '受験料（税込）'}
                      </th>
                      <th className="py-4 px-6 text-left text-yellow-400 font-bold">
                        {language === 'en' ? 'Pass Rate' : '合格率'}
                      </th>
                      <th className="py-4 px-6 text-left text-yellow-400 font-bold">
                        {language === 'en' ? 'Renewal Cycle' : '更新周期'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {certificationFees.map((fee, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-gray-800 hover:bg-white/5 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                      >
                        <td className="py-4 px-6">{fee.rank}</td>
                        <td className="py-4 px-6">{fee.fee}</td>
                        <td className="py-4 px-6">{fee.passRate}</td>
                        <td className="py-4 px-6">{fee.renewal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
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
              {language === 'en' 
                ? 'Would you like to officially certify your AI skills and expand your career possibilities?' 
                : 'AIスキルを公式に証明し、キャリアの可能性を広げませんか？'}
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 opacity-90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {language === 'en' 
                ? 'HyaQShix certification is a powerful tool to validate your skills in the generative AI era.' 
                : 'HyaQShix認定資格は、生成AI時代のスキルを証明する強力なツールです。'}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/pricing" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-black hover:bg-gray-800 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>
                  {language === 'en' ? 'Apply for Certification Exam' : '資格受験に申し込む'}
                </span>
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