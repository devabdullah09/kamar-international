import Layout from '@/components/Layout';

export default function Services() {
  const services = [
    {
      category: "Strategic Consulting",
      description: "Transform your business with our strategic insights and expert guidance.",
      services: [
        {
          title: "Business Strategy Development",
          description: "Comprehensive strategic planning to drive sustainable growth and competitive advantage.",
          features: ["Market Analysis", "Competitive Intelligence", "Strategic Roadmap", "Implementation Support"]
        },
        {
          title: "Organizational Transformation",
          description: "Navigate complex changes and optimize your organizational structure for success.",
          features: ["Change Management", "Process Optimization", "Cultural Transformation", "Performance Improvement"]
        },
        {
          title: "Digital Strategy",
          description: "Leverage technology to create new opportunities and enhance customer experiences.",
          features: ["Digital Roadmap", "Technology Assessment", "Innovation Strategy", "Digital Culture"]
        }
      ]
    },
    {
      category: "International Services",
      description: "Expand your global footprint with our comprehensive international solutions.",
      services: [
        {
          title: "Market Entry Strategy",
          description: "Successfully enter new markets with data-driven strategies and local insights.",
          features: ["Market Research", "Regulatory Compliance", "Local Partnerships", "Risk Assessment"]
        },
        {
          title: "Cross-border Operations",
          description: "Optimize your international operations for efficiency and growth.",
          features: ["Supply Chain Management", "Cultural Integration", "Regulatory Navigation", "Operational Excellence"]
        },
        {
          title: "Global Partnership Development",
          description: "Build strategic alliances that accelerate your international expansion.",
          features: ["Partner Identification", "Due Diligence", "Negotiation Support", "Relationship Management"]
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-logo-coral-100 to-logo-coral text-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-logo-coral-100 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive solutions designed to drive your success in today&apos;s 
            dynamic business environment
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Products & Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive solutions designed to drive your success in today&apos;s 
              dynamic business environment.
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
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Service Portfolio</h3>
                <div className="space-y-3 sm:space-y-4">
                  {/* Service Image 1 */}
                  <div className="rounded-lg h-36 sm:h-48 overflow-hidden shadow-md">
                    <img 
                      src="/service1.jpg" 
                      alt="Strategic Consulting Services" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Service Image 2 */}
                  <div className="rounded-lg h-36 sm:h-48 overflow-hidden shadow-md">
                    <img 
                      src="/service2.jpg" 
                      alt="Digital Solutions Services" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Service Image 3 */}
                  <div className="rounded-lg h-36 sm:h-48 overflow-hidden shadow-md">
                    <img 
                      src="/service3.jpg" 
                      alt="Global Services" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Info Box */}
              <div className="bg-logo-coral-50 rounded-xl p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-logo-coral-dark mb-2 sm:mb-3">
                  Why Choose Our Services?
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-logo-coral">
                  <li className="flex items-center text-xs sm:text-sm">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-logo-coral flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Proven track record of success
                  </li>
                  <li className="flex items-center text-xs sm:text-sm">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-logo-coral flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Customized solutions for every client
                  </li>
                  <li className="flex items-center text-xs sm:text-sm">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-logo-coral flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Global expertise, local presence
                  </li>
                  <li className="flex items-center text-xs sm:text-sm">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-logo-coral flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 support and consultation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-logo-coral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-logo-coral-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can help you achieve your goals and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-logo-coral hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg">
              Get Started
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-logo-coral px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
