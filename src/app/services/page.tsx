import Layout from '@/components/Layout';

export default function Services() {
  // Hero Video Section Component
  const HeroVideoSection = () => (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="hero.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Pillows. Duvets.
            <span className="block text-logo-coral-light">Mattress covers.</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
            Quality textile manufacturing with over 20 years of experience
            serving customers across Europe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <button className="bg-logo-coral hover:bg-logo-coral-light text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 shadow-lg">
              View Our Products
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white animate-bounce">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );

  const services = [
    {
      category: "Duvets & Pillows",
      description: "High-quality duvets and pillows ensuring comfort and restful sleep.",
      services: [
        {
          title: "All-Season Duvets",
          description: "Comfortable duvets adapted to different seasons made from the highest quality materials.",
          features: ["Hypoallergenic", "Anti-dust mite", "Multiple sizes", "European quality"]
        },
        {
          title: "Orthopedic Pillows",
          description: "Ergonomic pillows supporting proper sleeping position.",
          features: ["Neck support", "Memory foam", "Breathable materials", "Various firmness"]
        },
        {
          title: "Down Pillows",
          description: "Luxurious pillows made from natural down providing maximum comfort.",
          features: ["Natural down", "Softness", "Temperature regulation", "Long-lasting"]
        }
      ]
    },
    {
      category: "Specialized Products",
      description: "Wide range of specialized textile products adapted to various needs.",
      services: [
        {
          title: "Decorative Pillows",
          description: "Stylish decorative pillows that give interiors an elegant character.",
          features: ["Various patterns", "High-quality fabrics", "Color options", "Durable finish"]
        },
        {
          title: "Garden Textiles",
          description: "Weather-resistant textiles for outdoor spaces.",
          features: ["UV resistance", "Waterproof", "Easy cleaning", "Fade-resistant colors"]
        },
        {
          title: "Pet Products",
          description: "Safe and comfortable textiles for your beloved pets.",
          features: ["Safe materials", "Easy washing", "Hypoallergenic", "Durable"]
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Video Section */}
      <HeroVideoSection />
    
      {/* Services Overview */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Products
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              High-quality textile products manufactured with passion and commitment
              for over 20 years.
            </p>
          </div>

          {/* Services List Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left Side - Services List */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              {services.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {category.category}
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="border-l-4 border-logo-coral pl-3 sm:pl-4">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <span 
                              key={featureIndex}
                              className="bg-logo-coral-50 text-logo-coral px-2 sm:px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Product Images */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Our Products</h3>
                <div className="space-y-3 sm:space-y-4">
                  {/* Service Image 1 */}
                  <div className="rounded-lg h-36 sm:h-48 overflow-hidden shadow-md">
                    <img 
                      src="/service1.jpg" 
                      alt="Duvets and Pillows" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Service Image 2 */}
                  <div className="rounded-lg h-36 sm:h-48 overflow-hidden shadow-md">
                    <img 
                      src="/service2.jpg" 
                      alt="Decorative Pillows" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Service Image 3 */}
                  <div className="rounded-lg h-36 sm:h-48 overflow-hidden shadow-md">
                    <img 
                      src="/service3.jpg" 
                      alt="Garden Textiles" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Info Box */}
              <div className="bg-logo-coral-50 rounded-xl p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-logo-coral-dark mb-2 sm:mb-3">
                  Why Choose Kamar International?
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-logo-coral">
                  <li className="flex items-center text-xs sm:text-sm">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-logo-coral flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Over 20 years of experience
                  </li>
                  <li className="flex items-center text-xs sm:text-sm">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-logo-coral flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    European quality standards
                  </li>
                  <li className="flex items-center text-xs sm:text-sm">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-logo-coral flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Family values and tradition
                  </li>
                  <li className="flex items-center text-xs sm:text-sm">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-logo-coral flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Modern production technologies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-logo-coral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-logo-coral-100 mb-8 max-w-2xl mx-auto">
            Contact us and experience the quality of our textile products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-logo-coral hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg">
              View Products
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-logo-coral px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
