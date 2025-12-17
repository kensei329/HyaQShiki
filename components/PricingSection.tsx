export default function PricingSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-6">
          社員1人のランチ2回分で、劇的な改革を。
        </h2>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md mx-auto border-2 border-lightGray">
          <div className="text-center space-y-6">
            <div className="text-gray-600 text-sm font-medium">月額費用</div>
            
            <div className="space-y-2">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-red-600">
                1,980
              </div>
              <div className="text-xl md:text-2xl text-gray-700">円</div>
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

