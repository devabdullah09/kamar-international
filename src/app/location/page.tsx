'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';

export default function Location() {
  const [selectedOffice, setSelectedOffice] = useState(0);

  const offices = [
    {
      name: "Headquarters",
      address: "123 Business Street, Downtown District",
      city: "New York, NY 10001",
      country: "United States",
      phone: "+1 (555) 123-4567",
      email: "ny@kamarinternational.com",
      hours: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
      coordinates: "40.7128,-74.0060", // New York coordinates
      description: "Our global headquarters and main operations center, housing our executive team and core departments."
    },
    {
      name: "European Office",
      address: "456 Europa Plaza, Business District",
      city: "London, SW1A 1AA",
      country: "United Kingdom",
      phone: "+44 20 7123 4567",
      email: "london@kamarinternational.com",
      hours: ["Monday - Friday: 8:30 AM - 5:30 PM", "Weekend: By Appointment"],
      coordinates: "51.5074,-0.1278", // London coordinates
      description: "Strategic hub for European operations, serving clients across the continent with localized expertise."
    },
    {
      name: "Asia-Pacific Office",
      address: "789 Business Tower, Central District",
      city: "Singapore 018989",
      country: "Singapore",
      phone: "+65 6123 4567",
      email: "singapore@kamarinternational.com",
      hours: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
      coordinates: "1.3521,103.8198", // Singapore coordinates
      description: "Gateway to Asia-Pacific markets, providing comprehensive services to clients in the dynamic Asian business environment."
    }
  ];

  const currentOffice = offices[selectedOffice];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-200 to-orange-300 text-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our Locations
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed px-4">
            Connect with us at any of our global offices for personalized service and local expertise.
          </p>
        </div>
      </section>

      {/* Office Selection */}
      <section className="py-8 sm:py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {offices.map((office, index) => (
              <button
                key={index}
                onClick={() => setSelectedOffice(index)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 ${
                  selectedOffice === index
                    ? 'bg-orange-300 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {office.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Office Details */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
            {/* Google Maps */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
              <div className="flex-1 min-h-96">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(currentOffice.address + ', ' + currentOffice.city + ', ' + currentOffice.country)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '384px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${currentOffice.name}`}
                >
                </iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {currentOffice.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {currentOffice.address}
                </p>
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(currentOffice.address + ', ' + currentOffice.city + ', ' + currentOffice.country)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-orange-300 hover:bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Office Details */}
            <div className="bg-white rounded-xl p-8 shadow-lg h-full flex flex-col">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {currentOffice.name}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {currentOffice.description}
              </p>

              <div className="flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-300 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">{currentOffice.address}</p>
                      <p className="text-gray-600">{currentOffice.city}</p>
                      <p className="text-gray-600">{currentOffice.country}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-300 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">{currentOffice.phone}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-300 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">{currentOffice.email}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-300 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <div className="space-y-1">
                        {currentOffice.hours.map((hour, index) => (
                          <p key={index} className="text-gray-600 text-sm">{hour}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button className="w-full bg-orange-300 hover:bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 mb-3">
                    Schedule a Visit
                  </button>
                  <button className="w-full border-2 border-orange-300 text-orange-400 hover:bg-orange-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                    Contact This Office
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Offices Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Global Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With strategically located offices around the world, we&apos;re always close 
              to our clients and ready to provide localized support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {office.name}
                </h3>
                <p className="text-gray-600 mb-2">{office.city}</p>
                <p className="text-gray-600 mb-4">{office.country}</p>
                <button 
                  onClick={() => setSelectedOffice(index)}
                  className="text-orange-400 hover:text-orange-500 font-semibold transition-colors duration-200"
                >
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
