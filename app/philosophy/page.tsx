'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PhilosophyPage() {
  const { language } = useLanguage();
  const isJapanese = language === 'ja';

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
            {isJapanese ? '理念' : 'Philosophy'}
          </motion.h1>
          <motion.p 
            className="text-xl text-yellow-50"
            variants={fadeInUp}
          >
            {isJapanese 
              ? '世界で活躍する自走型人材の育成' 
              : 'Developing self-driven talent who can succeed globally'}
          </motion.p>
        </motion.div>
      </section>

      {/* Philosophy Overview */}
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
            {isJapanese ? '教育理念' : 'Educational Philosophy'}
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
              {isJapanese ? '「100日、100の型、100倍の生産力」' : '"100 Days, 100 Forms, 100x Productivity"'}
            </h3>
            <p className="text-lg mb-6 text-gray-300 leading-relaxed font-medium text-center">
              {isJapanese 
                ? 'HyaQShix百式は、生成AI時代の次世代開発人材を育成する教育プログラムです。実践的なカリキュラムと独自のメソッドで、短期間で即戦力となるスキルを身につけます。' 
                : 'HyaQShix Hyakushiki is an educational program that develops next-generation development talent for the generative AI era. Through practical curriculum and unique methods, you will acquire skills to become an immediate asset in a short period.'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-yellow-400 transition-all"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-semibold mb-3 text-yellow-400">
                  {isJapanese ? '実践重視' : 'Practice-Focused'}
                </h4>
                <p className="text-gray-300">
                  {isJapanese 
                    ? '理論だけでなく、実際の開発現場で通用する実践的なスキルを重視します。毎日の課題とプロジェクトを通じて、実践力を養います。' 
                    : 'We emphasize practical skills that work in actual development environments, not just theory. Through daily challenges and projects, you will develop practical abilities.'}
                </p>
              </motion.div>
              
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-yellow-400 transition-all"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-semibold mb-3 text-yellow-400">
                  {isJapanese ? '短期集中' : 'Intensive Short-Term'}
                </h4>
                <p className="text-gray-300">
                  {isJapanese 
                    ? '100日間の集中プログラムで、効率的にスキルを習得します。短期間で最大の成果を出すためのカリキュラムを提供します。' 
                    : 'Efficiently acquire skills through our 100-day intensive program. We provide a curriculum designed to achieve maximum results in a short period.'}
                </p>
              </motion.div>
              
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-yellow-400 transition-all"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl font-semibold mb-3 text-yellow-400">
                  {isJapanese ? 'コミュニティ' : 'Community'}
                </h4>
                <p className="text-gray-300">
                  {isJapanese 
                    ? '仲間と共に学び、成長する環境を提供します。活発なコミュニティ活動を通じて、ネットワークを構築します。' 
                    : 'We provide an environment to learn and grow together with peers. Build your network through active community activities.'}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Values */}
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
            {isJapanese ? 'コアバリュー' : 'Core Values'}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-10"
            variants={fadeInUp}
          ></motion.div>
          
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 font-bold text-xl mr-3">01</span>
                  <h3 className="text-yellow-400 text-xl font-bold">
                    {isJapanese ? '実践力' : 'Practical Skills'}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {isJapanese 
                    ? '実際の開発現場で通用する実践的なスキルを重視します。理論だけでなく、実践を通じて学びを深めます。' 
                    : 'We emphasize practical skills that work in actual development environments. Learning is deepened through practice, not just theory.'}
                </p>
              </motion.div>
              
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 font-bold text-xl mr-3">02</span>
                  <h3 className="text-yellow-400 text-xl font-bold">
                    {isJapanese ? '継続性' : 'Continuity'}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {isJapanese 
                    ? '短期間で集中的に学び、その後も継続的に成長できる環境を提供します。生涯学習の基盤を築きます。' 
                    : 'We provide an environment for intensive short-term learning and continued growth afterward. We build a foundation for lifelong learning.'}
                </p>
              </motion.div>
              
              <motion.div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 font-bold text-xl mr-3">03</span>
                  <h3 className="text-yellow-400 text-xl font-bold">
                    {isJapanese ? '革新性' : 'Innovation'}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {isJapanese 
                    ? '最新の技術トレンドを取り入れ、常に進化し続けるカリキュラムを提供します。時代の先端を走ります。' 
                    : 'We incorporate the latest technology trends and provide a continuously evolving curriculum. We stay at the forefront of the times.'}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Founder Message */}
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
            {isJapanese ? '代表メッセージ' : 'Message from the Founder'}
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
              {isJapanese ? '「次世代の開発者を育てる」' : '"Training the Next Generation of Developers"'}
            </h3>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                {isJapanese 
                  ? '生成AIの登場により、ソフトウェア開発の世界は大きく変わりつつあります。HyaQShix百式は、この変化の時代に即した次世代の開発者を育成することを目指しています。' 
                  : 'With the emergence of generative AI, the world of software development is changing dramatically. HyaQShix Hyakushiki aims to train the next generation of developers suited to this era of change.'}
              </p>
              <p className="text-lg mb-10 text-gray-300 leading-relaxed">
                {isJapanese 
                  ? '私たちは、単なる技術の習得だけでなく、問題解決力や創造性、チームワークといった、これからの時代に必要なスキルを総合的に育成します。' 
                  : 'We develop not only technical skills but also comprehensively foster problem-solving abilities, creativity, and teamwork—skills necessary for the coming era.'}
              </p>
              <div className="text-right mt-10">
                <p className="text-gray-300">
                  {isJapanese ? 'HyaQShix百式 代表' : 'HyaQShix Hyakushiki Representative'}
                </p>
                <p className="text-yellow-400 font-bold text-xl mt-1">
                  {isJapanese ? '白石 憲正' : 'Norimasa Shiraishi'}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Vision */}
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
            {isJapanese ? 'ビジョン' : 'Vision'}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-10"
            variants={fadeInUp}
          ></motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-yellow-400 transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                {isJapanese ? '短期目標' : 'Short-term Goals'}
              </h3>
              <p className="text-gray-300">
                {isJapanese 
                  ? '100日間のプログラムで、即戦力となるスキルを身につけます。実践的なプロジェクトを通じて、実務で通用する力を養います。' 
                  : 'In the 100-day program, you will acquire skills to become an immediate asset. Develop practical abilities through hands-on projects.'}
              </p>
            </motion.div>
            
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-yellow-400 transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                {isJapanese ? '中期目標' : 'Medium-term Goals'}
              </h3>
              <p className="text-gray-300">
                {isJapanese 
                  ? '卒業生の活躍を通じて、HyaQShix百式の教育効果を実証します。企業との連携を強化し、より実践的な学びの場を提供します。' 
                  : 'We demonstrate the educational effectiveness of HyaQShix Hyakushiki through the success of our graduates. We strengthen partnerships with companies to provide more practical learning opportunities.'}
              </p>
            </motion.div>
            
            <motion.div 
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-yellow-400 transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                {isJapanese ? '長期目標' : 'Long-term Goals'}
              </h3>
              <p className="text-gray-300">
                {isJapanese 
                  ? '日本のAI人材育成のリーディングカンパニーとして、次世代の開発者を育成します。グローバルに通用する人材を輩出します。' 
                  : 'As a leading company in AI talent development in Japan, we train the next generation of developers. We produce talent that can succeed globally.'}
              </p>
            </motion.div>
          </div>
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
            {isJapanese ? 'この新しい教育の旅に、あなたも参加しませんか？' : 'Will you join us on this new educational journey?'}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {isJapanese 
              ? '100日間で身につけるスキルと型が、あなたの未来を変えるきっかけになるかもしれません。' 
              : 'The skills and patterns you acquire in 100 days might be the catalyst that changes your future.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg font-bold inline-block transition-transform duration-300"
              >
                {isJapanese ? '無料相談に申し込む' : 'Sign up for a free consultation'}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}