import Layout from '@/components/Layout';

export default function Location() {
  const office = {
    name: "Kamar International sp. z o.o.",
    address: "Młynów 22",
    city: "57-300 Kłodzko",
    country: "Poland",
    phone: "+48 509 696 181",
    email: "kamar@data.pl",
    hours: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
    coordinates: "50.4352,16.6540", // Kłodzko coordinates
    description: "Our textile manufacturing facility located in the beautiful town of Kłodzko, Poland. Where we create high-quality textile products with passion and commitment."
  };

  return (
    <Layout>

      {/* Map and Office Details */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
            {/* Google Maps */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
              <div className="flex-1 min-h-96">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(office.address + ', ' + office.city + ', ' + office.country)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '384px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${office.name}`}
                >
                </iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {office.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {office.address}
                </p>
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(office.address + ', ' + office.city + ', ' + office.country)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-logo-coral hover:bg-logo-coral-light text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Office Details */}
            <div className="bg-white rounded-xl p-8 shadow-lg h-full flex flex-col">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {office.name}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {office.description}
              </p>

              <div className="flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-logo-coral rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">{office.address}</p>
                      <p className="text-gray-600">{office.city}</p>
                      <p className="text-gray-600">{office.country}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-logo-coral rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">{office.phone}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-logo-coral rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">{office.email}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-logo-coral rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <div className="space-y-1">
                        {office.hours.map((hour, index) => (
                          <p key={index} className="text-gray-600 text-sm">{hour}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button className="w-full bg-logo-coral hover:bg-logo-coral-light text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 mb-3">
                    Schedule a Visit
                  </button>
                  <button className="w-full border-2 border-logo-coral text-logo-coral hover:bg-logo-coral hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                    Contact This Office
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
