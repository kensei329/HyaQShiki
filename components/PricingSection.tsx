export default function PricingSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-6">
          社員1人のランチ2回分で、劇的な改革を。
        </h2>

        <div className="bg-gradient-to-br from-white to-lightGray rounded-3xl shadow-2xl p-8 md:p-12 max-w-md mx-auto border border-gray-200 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
          {/* 装飾的な背景要素 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-navy/5 rounded-full -ml-12 -mb-12"></div>
          
          <div className="text-center space-y-6 relative z-10">
            <div className="text-gray-600 text-sm font-medium uppercase tracking-wider">月額費用</div>
            
            <div className="space-y-2">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                1,980
              </div>
              <div className="text-xl md:text-2xl text-gray-700 font-medium">円</div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="text-gray-600 text-xs sm:text-sm">
                初期費用：お問い合わせください
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-gray-700 text-lg">
            通常、数十万円かかるDXシステムを、誰でも導入しやすい価格に抑えました。
          </p>
          <p className="text-gray-600">
            もう、コストを理由に自動化を諦める必要はありません。
          </p>
        </div>
      </div>
    </section>
  );
}

