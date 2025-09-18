import Layout from '@/components/Layout';

export default function Contact() {

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Paulina Łęczyńska",
      subtitle: "Logistics & Operation Manager",
      details: ["+48 571 601 609", "p.leczynska@kamarint.com"]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Kacper Wołosz",
      subtitle: "HR Manager",
      details: ["+48 502 667 920", "kacper.wolosz@kamarint.com"]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Ruść Michał",
      subtitle: "Sales Manager",
      details: ["+48 730 95 11 05", "michal.rusc@kamarint.com"]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Central Office",
      subtitle: "Main Contact",
      details: ["+48 509 696 181", "kamar@data.pl"]
    }
  ];


  return (
    <Layout>

      {/* Contact Information */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Reach out to us through any of the channels below. Our team will respond promptly to discuss your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-logo-coral rounded-lg flex items-center justify-center text-white">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    {info.subtitle && (
                      <p className="text-sm text-logo-coral font-medium mb-2">
                        {info.subtitle}
                      </p>
                    )}
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
