export default function WhoWeAre() {
  const stats = [
    { number: "2000", label: "Założenie" },
    { number: "20+", label: "Lat doświadczenia" },
    { number: "EU", label: "Zasięg rynku" },
    { number: "100%", label: "Skupienie na jakości" }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Who We Are?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Jesteśmy rodzinnym przedsiębiorstwem produkcyjnym, które od roku 2000 z pasją i zaangażowaniem tworzy wysokiej jakości wyroby tekstylne. Od ponad dwóch dekad dostarczamy produkty, które łączą w sobie komfort, trwałość oraz estetykę, stając się zaufanym partnerem zarówno dla klientów indywidualnych, jak i biznesowych.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Dzięki wieloletniemu doświadczeniu oraz nowoczesnemu parkowi maszynowemu, jesteśmy w stanie sprostać nawet najbardziej wymagającym oczekiwaniom rynku. Wybierając nasze wyroby tekstylne, otrzymują Państwo gwarancję solidności, polskiej jakości i niezmiennej troski o każdy detal.
            </p>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-logo-coral rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Rodzinne wartości</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Budujemy firmę na zaufaniu, uczciwości i dbałości o relacje z klientami oraz partnerami biznesowymi.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-logo-coral rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Europejska jakość</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Nasza jakość została doceniona przez największe sieci handlowe i megamarkety w Europie Zachodniej.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-logo-coral rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Nowoczesne technologie</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Każdy produkt to efekt połączenia tradycji, doświadczenia i nowoczesnych technologii.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder & Stats */}
          <div className="order-1 lg:order-2">
            <div className="rounded-xl h-64 sm:h-80 lg:h-96 mb-6 sm:mb-8 overflow-hidden shadow-lg">
              <img 
                src="/landing-group.jpg" 
                alt="Kamar International Professional Team" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-logo-coral mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
