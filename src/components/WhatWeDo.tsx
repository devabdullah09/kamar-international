export default function WhatWeDo() {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
        </svg>
      ),
      title: "Kołdry i poduszki",
      description: "Projektowanie i produkcja kołder oraz poduszek – tworzonych z myślą o komforcie snu i wysokiej trwałości."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
        </svg>
      ),
      title: "Poduszki dekoracyjne",
      description: "Nadające wnętrzom elegancji i nowoczesnego charakteru, łączące styl z komfortem."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Tekstylia ogrodowe",
      description: "Odporne na warunki atmosferyczne, zapewniające wygodę i estetykę przestrzeni zewnętrznych."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Produkty dla zwierząt",
      description: "Bezpieczne, funkcjonalne i wytrzymałe produkty tekstylne, dostosowane do potrzeb pupili."
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            What We Do?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 mb-6">
            Od ponad 20 lat specjalizujemy się w produkcji i dostarczaniu gotowych wyrobów tekstylnych, które trafiają zarówno do polskich odbiorców, jak i do największych sieci handlowych w Europie Zachodniej.
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Nasze produkty wyróżnia precyzja wykonania, staranny dobór materiałów oraz zgodność z obowiązującymi normami jakościowymi. Naszą misją jest dostarczanie tekstyliów, które łączą funkcjonalność z designem, a jednocześnie spełniają wymagania klientów indywidualnych i biznesowych.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="text-logo-coral mb-4 sm:mb-6 group-hover:text-logo-coral-dark transition-colors duration-200">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
