'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function Corporate() {
  const { language } = useLanguage();
  const isJapanese = language === 'ja';
  const [currentStep, setCurrentStep] = useState(1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null, null, null]);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionStartRef = useRef<HTMLDivElement | null>(null);
  const sectionEndRef = useRef<HTMLDivElement | null>(null);
  const [isInFlowSection, setIsInFlowSection] = useState(false);
  
  // Animation variants
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
  
  // Calculate the progress percentage
  const progressPercent = `${(currentStep - 1) * 20}%`;

  // Handler for progress steps
  const handleStepClick = (step: number) => {
    setCurrentStep(step);
    // Smooth scroll to the selected step
    stepRefs.current[step - 1]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Add intersection observer to detect section visibility
  useEffect(() => {
    const progressContainer = document.getElementById('flow-progress-container');
    const headerHeight = 80; // Approximate header height
    
    // Observer for the start of the Flow section
    const sectionStartObserver = new IntersectionObserver(
      ([entry]) => {
        // When we enter the section
        setIsInFlowSection(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setIsSticky(false);
        }
      },
      { 
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0.1
      }
    );
    
    // Observer for the end of the Flow section
    const sectionEndObserver = new IntersectionObserver(
      ([entry]) => {
        // When we reach the end of the section
        if (entry.isIntersecting) {
          setIsInFlowSection(false);
          setIsSticky(false);
        }
      },
      {
        rootMargin: `-${headerHeight}px 0px -100% 0px`,
        threshold: 0.1
      }
    );
    
    // Observer for making the progress bar sticky
    const stickyObserver = new IntersectionObserver(
      ([entry]) => {
        // Only make it sticky if we're within the Flow section
        if (isInFlowSection) {
          setIsSticky(!entry.isIntersecting);
        } else {
          setIsSticky(false);
        }
      },
      { 
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0.1
      }
    );
    
    // Observe the Flow section
    if (sectionRef.current) {
      sectionStartObserver.observe(sectionRef.current);
    }
    
    // Observe the end marker of the Flow section
    if (sectionEndRef.current) {
      sectionEndObserver.observe(sectionEndRef.current);
    }
    
    // Observe the progress container for sticky behavior
    if (progressContainer) {
      stickyObserver.observe(progressContainer);
    }
    
    // Create observers for each step section
    const stepObservers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setCurrentStep(index + 1);
          }
        },
        { 
          rootMargin: `-${headerHeight + 50}px 0px -50% 0px`,
          threshold: 0.1
        }
      );
      
      observer.observe(ref);
      return observer;
    });
    
    return () => {
      stickyObserver.disconnect();
      sectionStartObserver.disconnect();
      sectionEndObserver.disconnect();
      stepObservers.forEach(obs => obs?.disconnect());
    };
  }, [isInFlowSection]);
  
  return (
    <div className="font-['Poppins',sans-serif] bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-32" style={{ backgroundImage: 'url(/images/slide5.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200"
            variants={fadeInUp}
          >
            {isJapanese ? '企業連携' : 'Corporate Partnership'}
          </motion.h1>
          <motion.p 
            className="text-xl text-yellow-50"
            variants={fadeInUp}
          >
            {isJapanese 
              ? '次世代のAI人材と共に、新たな価値を創造する' 
              : 'Creating new value with the next generation of AI talent'}
          </motion.p>
        </motion.div>
      </section>

      {/* Sponsor Overview */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <motion.div 
          className="max-w-4xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            {isJapanese ? 'スポンサー制度の概要' : 'Sponsor Program Overview'}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-8"
            variants={fadeInUp}
          ></motion.div>
          
          <motion.div 
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8 shadow-xl"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400 text-center">
              {isJapanese ? 'HyaQShixスポンサー制度とは？' : 'What is the HyaQShix Sponsor Program?'}
            </h3>
            <div className="grid md:grid-cols-1 gap-6">
              <div>
                <p className="text-lg mb-6 text-gray-300 leading-relaxed font-medium text-center">
                  {isJapanese 
                    ? '生成AI時代の次世代開発人材を育成するHyaQShix百式では、企業からの実務プロジェクトを教育プログラムと融合することで、学習と実践を同時に実現します。' 
                    : 'HyaQShix Hyakushiki, which develops next-generation talent for the generative AI era, combines practical projects from companies with educational programs to achieve simultaneous learning and practical experience.'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <motion.div 
                    className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-400 transition-all"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <span className="text-yellow-400 font-bold text-xl inline-block mb-3">01</span>
                    <p className="text-gray-300">
                      {isJapanese 
                        ? 'スポンサー企業から提供された案件を学生が実行形式で担当し、成果に応じて「授業料免除」が適用されるモデルです。' 
                        : 'Students work on projects provided by sponsor companies, and depending on their performance, they can receive tuition exemptions.'}
                    </p>
                  </motion.div>
                  <motion.div 
                    className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-400 transition-all"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <span className="text-yellow-400 font-bold text-xl inline-block mb-3">02</span>
                    <p className="text-gray-300">
                      {isJapanese 
                        ? '若手人材の育成に貢献しながら、自社の課題解決にもつながる、Win-Winの関係構築を目指しています。' 
                        : 'We aim to build a win-win relationship that contributes to the development of young talent while helping companies solve their challenges.'}
                    </p>
                  </motion.div>
                </div>
              </div>
        </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-black text-white">
        <motion.div 
          className="max-w-5xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            {isJapanese ? 'スポンサー企業のメリット' : 'Sponsor Benefits'}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-10"
            variants={fadeInUp}
          ></motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">
                {isJapanese ? '実務に近いプロトタイプ制作' : 'Practical Prototype Development'}
              </h3>
              <p className="text-gray-300">
                {isJapanese 
                  ? '新規事業・業務改善・業務ツール等の試作を学生が担当します。1日1アプリ方式で、短期間に多様なアイデアを形にできます。' 
                  : 'Students create prototypes for new businesses, process improvements, and business tools. With our one-app-per-day method, diverse ideas can be realized in a short period.'}
              </p>
            </motion.div>
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">
                {isJapanese ? 'AIの実践的活用を体験' : 'Experience Practical AI Application'}
              </h3>
              <p className="text-gray-300">
                {isJapanese 
                  ? '最新の生成AIを活用した開発モデルに触れられます。自社でのAI活用の参考事例として活用できます。' 
                  : 'Experience development models using the latest generative AI. Use these as reference cases for AI implementation in your company.'}
              </p>
            </motion.div>
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">
                {isJapanese ? '採用候補の早期発掘' : 'Early Talent Discovery'}
              </h3>
              <p className="text-gray-300">
                {isJapanese 
                  ? '卒業生を採用候補として検討可能です。実際の課題に取り組む姿勢や成果物から、スキルと適性を正確に判断できます。' 
                  : 'Consider graduates as potential employees. Accurately assess their skills and aptitude through their approach to real challenges and the quality of their deliverables.'}
              </p>
            </motion.div>
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-3">
                {isJapanese ? 'ブランディング貢献' : 'Branding Contribution'}
              </h3>
              <p className="text-gray-300">
                {isJapanese 
                  ? '若年層への認知向上、社会貢献型企業イメージの構築に貢献します。AI教育支援企業としてのブランディングが可能です。' 
                  : 'Increase awareness among younger generations and build a socially responsible corporate image. Establish your brand as a company supporting AI education.'}
              </p>
            </motion.div>
            </div>
        </motion.div>
      </section>

      {/* Education Integration */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <motion.div 
          className="max-w-5xl mx-auto px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            {isJapanese ? '教育との統合：案件×学び' : 'Education Integration: Projects × Learning'}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-10"
            variants={fadeInUp}
          ></motion.div>
          
          <motion.div 
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8 shadow-xl"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400 text-center">
              {isJapanese ? '案件と教育の統合' : 'Integration of Projects and Education'}
            </h3>
            <p className="text-lg mb-10 text-gray-300 text-center max-w-3xl mx-auto">
              {isJapanese 
                ? '企業案件はHyaQShixの100日カリキュラムに統合され、実践的な学びの素材となります。' 
                : 'Corporate projects are integrated into HyaQShix\'s 100-day curriculum, becoming materials for practical learning.'}
            </p>
            
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 mb-8"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <h4 className="text-yellow-400 mb-4 text-xl">
                {isJapanese ? '案件テーマ例：' : 'Example Project Themes:'}
              </h4>
              <div className="flex flex-wrap gap-4">
                <span className="bg-yellow-400 bg-opacity-10 text-white px-4 py-2 rounded-full border border-yellow-400 border-opacity-30 hover:bg-opacity-20 transition-all transform hover:-translate-y-1">
                  {isJapanese ? '小売業向け業務アプリ' : 'Retail Business Applications'}
                </span>
                <span className="bg-yellow-400 bg-opacity-10 text-white px-4 py-2 rounded-full border border-yellow-400 border-opacity-30 hover:bg-opacity-20 transition-all transform hover:-translate-y-1">
                  {isJapanese ? '社内報自動生成ツール' : 'Internal Newsletter Auto-generation Tools'}
                </span>
                <span className="bg-yellow-400 bg-opacity-10 text-white px-4 py-2 rounded-full border border-yellow-400 border-opacity-30 hover:bg-opacity-20 transition-all transform hover:-translate-y-1">
                  {isJapanese ? '顧客対応用チャットAI' : 'Customer Support Chat AI'}
                </span>
                <span className="bg-yellow-400 bg-opacity-10 text-white px-4 py-2 rounded-full border border-yellow-400 border-opacity-30 hover:bg-opacity-20 transition-all transform hover:-translate-y-1">
                  {isJapanese ? 'データ可視化ダッシュボード' : 'Data Visualization Dashboards'}
                </span>
                <span className="bg-yellow-400 bg-opacity-10 text-white px-4 py-2 rounded-full border border-yellow-400 border-opacity-30 hover:bg-opacity-20 transition-all transform hover:-translate-y-1">
                  {isJapanese ? '営業支援ツール' : 'Sales Support Tools'}
                </span>
            </div>
            </motion.div>

            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <h4 className="text-yellow-400 mb-4 text-xl">
                {isJapanese ? '案件は「課題ブリーフ」形式で提供' : 'Projects are Provided as "Challenge Briefs"'}
              </h4>
              <p className="text-gray-300">
                {isJapanese 
                  ? '企業からの課題説明書をもとに、講師がメンターとして進行管理を行います。学生はAIを活用して課題解決に取り組み、実用的なプロトタイプを制作します。' 
                  : 'Based on challenge descriptions from companies, instructors manage progress as mentors. Students use AI to tackle the challenges and create practical prototypes.'}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Certified Partner */}
      <section className="py-20 bg-black text-white">
        <motion.div 
          className="max-w-5xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            {isJapanese ? '特別認定パートナー制度' : 'Special Certified Partner Program'}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-10"
            variants={fadeInUp}
          ></motion.div>
          
          <motion.div 
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8 shadow-xl"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400 text-center">
              {isJapanese ? '「HyaQShix Certified Partner」として企業を認定' : 'Companies Certified as "HyaQShix Certified Partners"'}
            </h3>
            <p className="text-lg mb-10 text-gray-300 text-center max-w-3xl mx-auto">
              {isJapanese 
                ? '継続的なパートナーシップを築くことで、さらに価値の高い連携が可能となります。認定パートナー企業には、以下の特典をご用意しています。' 
                : 'By building ongoing partnerships, even more valuable collaborations become possible. We offer the following benefits to certified partner companies.'}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h4 className="text-yellow-400 mb-3 text-xl">
                  {isJapanese ? 'ロゴ使用許可' : 'Logo Usage Rights'}
                </h4>
                <p className="text-gray-300">
                  {isJapanese 
                    ? 'Web・採用媒体にて「HyaQShix認定企業」として掲載可能です。AI教育支援企業としてのブランディングに活用できます。' 
                    : 'Companies can be listed as "HyaQShix Certified Companies" on websites and recruitment materials. Leverage this for branding as a company supporting AI education.'}
                </p>
              </motion.div>
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h4 className="text-yellow-400 mb-3 text-xl">
                  {isJapanese ? '年間優先プロジェクト参加枠' : 'Annual Priority Project Slots'}
                </h4>
                <p className="text-gray-300">
                  {isJapanese 
                    ? '希望するテーマを事前提出し、優先的に採択されます。計画的な案件実施が可能です。' 
                    : 'Submit desired themes in advance for priority adoption. This enables planned project implementation.'}
                </p>
              </motion.div>
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h4 className="text-yellow-400 mb-3 text-xl">
                  {isJapanese ? '成果物の商用化権利交渉' : 'Commercialization Rights Negotiation'}
                </h4>
                <p className="text-gray-300">
                  {isJapanese 
                    ? '優秀作品の独占利用など、成果へのアクセスを明文化します。ビジネス展開の可能性を広げます。' 
                    : 'Formalize access to results, such as exclusive use of outstanding work. Expand business development possibilities.'}
                </p>
              </motion.div>
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h4 className="text-yellow-400 mb-3 text-xl">
                  {isJapanese ? '人材紹介サービス' : 'Talent Referral Service'}
                </h4>
                <p className="text-gray-300">
                  {isJapanese 
                    ? '卒業生の中から、貴社に適した人材を優先的にご紹介します。採用活動の効率化が図れます。' 
                    : 'We prioritize introducing graduates who are suitable for your company. This streamlines your recruitment process.'}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Partner Testimonials */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <motion.div 
          className="max-w-5xl mx-auto px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            {isJapanese ? '連携企業の声' : 'Partner Company Testimonials'}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-10"
            variants={fadeInUp}
          ></motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-8"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                {isJapanese 
                  ? '「業務改善アプリのプロトタイプを短期間で複数提案してもらい、実際の開発方針決定に大いに役立ちました。若い視点での発想が新鮮で、社内の活性化にもつながりました。」' 
                  : '"Multiple prototypes for business improvement apps were proposed in a short period of time, which greatly helped with actual development direction decisions. The fresh ideas from young perspectives also helped revitalize our company."'}
              </p>
              <div className="border-t border-yellow-400 border-opacity-20 pt-4">
                <h4 className="text-yellow-400 font-bold">
                  {isJapanese ? '山田 健太郎' : 'Kentaro Yamada'}
                </h4>
                <p className="text-gray-400">
                  {isJapanese ? '株式会社テクノソリューション DX推進部長' : 'Director of DX Promotion, Techno Solutions Inc.'}
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-8"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                {isJapanese 
                  ? '「生成AIを活用した業務効率化の検討を進めていましたが、社内にノウハウがなく苦戦していました。HyaQShixの学生が作成したプロトタイプは実用性が高く、実際に一部機能を本番導入することになりました。」' 
                  : '"We were exploring business efficiency improvements using generative AI, but struggled due to lack of in-house expertise. The prototype created by HyaQShix students was highly practical, and we ended up implementing some functions in production."'}
              </p>
              <div className="border-t border-yellow-400 border-opacity-20 pt-4">
                <h4 className="text-yellow-400 font-bold">
                  {isJapanese ? '佐藤 美咲' : 'Misaki Sato'}
                </h4>
                <p className="text-gray-400">
                  {isJapanese ? 'グローバルリテール株式会社 マーケティング部' : 'Marketing Department, Global Retail Co., Ltd.'}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Project Flow */}
      <section ref={sectionRef} className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <motion.div 
          className="max-w-5xl mx-auto px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div ref={sectionStartRef} className="absolute top-0 w-full" aria-hidden="true"></div>
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            {isJapanese ? 'お問い合わせ・提携フロー' : 'Contact & Partnership Flow'}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-8"
            variants={fadeInUp}
          ></motion.div>
          
          {/* Original Progress Bar Container (for positioning) */}
          <div id="flow-progress-container" className="relative mb-16 hidden md:block">
            {/* Empty container that will be replaced by the sticky progress bar */}
          </div>
          
          {/* Sticky Progress Bar - only visible within the Flow section */}
          <div 
            className={`hidden md:block fixed top-17 left-0 right-0 z-50 bg-black shadow-md transition-all duration-300 transform ${isSticky && isInFlowSection ? 'translate-y-0' : '-translate-y-full'}`}
            style={{ 
              opacity: isInFlowSection ? 1 : 0,
              visibility: isInFlowSection ? 'visible' : 'hidden'
            }}
          >
            <div className="max-w-5xl mx-auto px-4 py-4 relative">
              <h3 className="text-lg font-semibold mb-2">
                {isJapanese ? 'お問い合わせ・提携フロー' : 'Contact & Partnership Flow'}
              </h3>
              
              {/* Horizontal line */}
              <div className="absolute top-16 left-4 right-4 h-1 bg-gray-700"></div>
              
              {/* Progress points */}
              <div className="flex justify-between relative z-10 px-4">
                {[1, 2, 3, 4, 5, 6].map((step) => (
                  <motion.div 
                    key={step} 
                    className="flex flex-col items-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handleStepClick(step)}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold transition-colors ${step <= currentStep ? 'bg-yellow-500' : 'bg-gray-600'}`}>
                      {step}
                    </div>
                    <span className={`mt-2 text-xs font-medium text-center max-w-[80px] truncate ${step === currentStep ? 'text-yellow-400' : 'text-gray-400'}`}>
                      {isJapanese ? [
                        '企業申込み',
                        'オンライン打ち合わせ',
                        '案件登録',
                        'メンタリング',
                        '成果提出',
                        'フィードバック'
                      ][step-1] : [
                        'Application',
                        'Meeting',
                        'Registration',
                        'Mentoring',
                        'Submission',
                        'Feedback'
                      ][step-1]}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Progress fill */}
              <div 
                className="absolute top-16 left-4 h-1 bg-yellow-500 transition-all duration-500"
                style={{ width: progressPercent, right: '1rem' }}
              ></div>
            </div>
          </div>
          
          {/* In-Page Progress Bar */}
          <motion.div 
            className="relative mb-16 hidden md:block"
            variants={fadeInUp}
          >
            {/* Horizontal line */}
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-700"></div>
            
            {/* Progress points */}
            <div className="flex justify-between relative z-10">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <motion.div 
                  key={step} 
                  className="flex flex-col items-center cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleStepClick(step)}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-colors ${step <= currentStep ? 'bg-yellow-500' : 'bg-gray-600'}`}>
                    {step}
                  </div>
                  <span className={`mt-2 text-sm font-medium text-center ${step === currentStep ? 'text-yellow-400' : 'text-gray-400'}`}>
                    {isJapanese ? [
                      '企業申込み',
                      'オンライン打ち合わせ',
                      '案件登録',
                      'メンタリング',
                      '成果提出',
                      'フィードバック'
                    ][step-1] : [
                      'Application',
                      'Meeting',
                      'Registration',
                      'Mentoring',
                      'Submission',
                      'Feedback'
                    ][step-1]}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Progress fill */}
            <div 
              className="absolute top-5 left-0 h-1 bg-yellow-500 transition-all duration-500"
              style={{ width: progressPercent }}
            ></div>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
              ref={el => stepRefs.current[0] = el}
              className={`flex items-start gap-6 ${currentStep === 1 ? 'border-l-4 border-yellow-500 pl-2' : ''}`}
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">1</div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {isJapanese ? '企業申込みフォーム' : 'Company Application Form'}
                </h3>
                <p className="text-gray-300">
                  {isJapanese 
                    ? '業種・課題内容・目的を簡易記入いただきます。まずは気軽にお問い合わせください。' 
                    : 'Fill in your industry, challenge details, and objectives. Feel free to contact us with any questions.'}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              ref={el => stepRefs.current[1] = el}
              className={`flex items-start gap-6 ${currentStep === 2 ? 'border-l-4 border-yellow-500 pl-2' : ''}`}
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">2</div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {isJapanese ? 'オンライン打ち合わせ' : 'Online Meeting'}
                </h3>
                <p className="text-gray-300">
                  {isJapanese 
                    ? '事務局よりご連絡し、具体的な案件内容や期待する成果について詳細をヒアリングします。' 
                    : 'Our office will contact you to gather detailed information about the specific project content and expected outcomes.'}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              ref={el => stepRefs.current[2] = el}
              className={`flex items-start gap-6 ${currentStep === 3 ? 'border-l-4 border-yellow-500 pl-2' : ''}`}
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">3</div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {isJapanese ? '案件登録' : 'Project Registration'}
                </h3>
                <p className="text-gray-300">
                  {isJapanese 
                    ? '合意に基づき案件を登録し、カリキュラムに組み込みます。適切な学生とのマッチングを行います。' 
                    : 'Based on the agreement, we register the project and incorporate it into the curriculum. We match appropriate students to the project.'}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              ref={el => stepRefs.current[3] = el}
              className={`flex items-start gap-6 ${currentStep === 4 ? 'border-l-4 border-yellow-500 pl-2' : ''}`}
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">4</div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {isJapanese ? 'メンタリングと進捗報告' : 'Mentoring and Progress Reports'}
                </h3>
                <p className="text-gray-300">
                  {isJapanese 
                    ? '案件進行中は定期的に進捗報告を行います。企業からのフィードバックも随時反映可能です。' 
                    : 'We provide regular progress reports during project execution. Corporate feedback can be incorporated at any time.'}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              ref={el => stepRefs.current[4] = el}
              className={`flex items-start gap-6 ${currentStep === 5 ? 'border-l-4 border-yellow-500 pl-2' : ''}`}
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">5</div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {isJapanese ? '成果提出' : 'Deliverable Submission'}
                </h3>
                <p className="text-gray-300">
                  {isJapanese 
                    ? '完成したプロトタイプとドキュメントを提出します。最終プレゼンテーションも実施します。' 
                    : 'We submit the completed prototype and documentation. A final presentation is also conducted.'}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              ref={el => stepRefs.current[5] = el}
              className={`flex items-start gap-6 ${currentStep === 6 ? 'border-l-4 border-yellow-500 pl-2' : ''}`}
              variants={fadeInUp}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">6</div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {isJapanese ? 'フィードバックと評価' : 'Feedback and Evaluation'}
                </h3>
                <p className="text-gray-300">
                  {isJapanese 
                    ? '企業からのフィードバックは学生の評価に反映され、修了証明書にも記載されます。' 
                    : 'Feedback from companies is reflected in student evaluations and included on completion certificates.'}
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Section end marker - invisible but used for intersection detection */}
          <div ref={sectionEndRef} className="h-1 w-full mt-24" aria-hidden="true"></div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-500"></div>
        
        <motion.div 
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-4">
            {isJapanese ? '若手AI開発人材 × あなたの課題解決' : 'Young AI Development Talent × Your Challenge Solution'}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {isJapanese 
              ? 'HyaQShix百式のスポンサー制度は、「実務体験」と「未来の仲間づくり」が同時に叶う次世代の教育投資です。' 
              : 'The HyaQShix Hyakushiki sponsor program is a next-generation educational investment that simultaneously fulfills "practical experience" and "building future connections."'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
            href="/contact"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg font-bold transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {isJapanese ? 'お問い合わせ' : 'Contact Us'}
            </motion.a>
            <motion.a 
              href="/corporate#partner" 
              className="bg-transparent hover:bg-gray-800 text-white border-2 border-white px-8 py-3 rounded-lg font-bold transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {isJapanese ? 'パートナー詳細' : 'Partner Details'}
            </motion.a>
        </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
