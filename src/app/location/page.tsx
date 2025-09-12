'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 py-16">
        {/* Header Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-block px-6 py-3 text-gray-600 rounded-full text-sm font-medium mb-6" style={{backgroundColor: '#FAE8E5'}}>
              Our Location
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Find Us
            </h1>
            <div className="w-20 h-1 rounded-full mx-auto mb-8" style={{background: 'linear-gradient(to right, #EFA59A, #E68B7D)'}}></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center"
          >
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed text-center">
              Visit our office and experience the magic of dream realization. We&apos;re conveniently located and easily accessible from anywhere in the city.
            </p>
          </motion.div>
        </motion.div>

        {/* Map Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
          >
            {/* Map Container */}
            <div className="relative h-80 lg:h-96 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 rounded-3xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute top-20 right-16 w-12 h-12 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-16 left-20 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
              </div>

              {/* Map Content */}
              <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-8 py-12">
                <div className="w-full max-w-lg mx-auto">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-6 flex justify-center"
                  >
                    <MapPin className="w-16 h-16 drop-shadow-lg" />
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-2xl lg:text-3xl font-bold mb-4 drop-shadow-lg leading-tight"
                  >
                    📍 Kamar International
                  </motion.h3>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mb-8"
                  >
                    <p className="text-base mb-2 opacity-90 leading-relaxed">Interactive Google Maps Integration</p>
                    <p className="text-sm opacity-75">Click to open in Google Maps</p>
                  </motion.div>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </motion.button>
                </div>
              </div>

              {/* Interactive Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Additional Info Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="px-8 py-6 bg-gray-50 border-t border-gray-100 rounded-b-3xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Office Hours</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Monday - Friday<br/>9:00 AM - 6:00 PM</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Available on request<br/>for security</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Parking</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Free parking<br/>available</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}