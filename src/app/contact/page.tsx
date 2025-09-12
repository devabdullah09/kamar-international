'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Addresses',
      details: [
        'info@kamarinternational.com',
        'support@kamarinternational.com',
        'business@kamarinternational.com'
      ],
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Numbers',
      details: [
        '+92 300 123 4567',
        '+92 321 987 6543',
        '+92 333 555 7777'
      ],
      description: 'Speak directly with our team during business hours'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Department & Position',
      details: [
        'Strategic Planning Department - Director',
        'Business Development - Manager',
        'Dream Realization - Specialist',
        'Client Relations - Coordinator'
      ],
      description: 'Connect with the right department for your needs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 py-20">
        {/* Header Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-block px-6 py-3 text-gray-600 rounded-full text-sm font-medium mb-6" style={{backgroundColor: '#FAE8E5'}}>
              Contact Information
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Get In Touch
            </h1>
            <div className="w-20 h-1 rounded-full mx-auto mb-10" style={{background: 'linear-gradient(to right, #EFA59A, #E68B7D)'}}></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center"
          >
            <p className="text-lg text-gray-600 text-center max-w-3xl leading-relaxed">
              Connect with our team through various channels. We're here to help you realize your dreams and transform your vision into reality.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Information - Enhanced Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-100/50 rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-12 shadow-lg" style={{background: 'linear-gradient(to bottom right, #EFA59A, #E68B7D)'}}
                    >
                      {info.icon}
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-12 group-hover:text-gray-600 transition-colors duration-300 text-center">
                      {info.title}
                    </h3>
                    
                    {/* Contact Details */}
                    <div className="space-y-8 mb-16">
                      {info.details.map((detail, detailIndex) => (
                        <motion.p 
                          key={detailIndex} 
                          className="text-gray-600 font-medium text-base hover:text-gray-700 transition-colors duration-300 cursor-pointer text-center py-2"
                          whileHover={{ scale: 1.02 }}
                        >
                          {detail}
                        </motion.p>
                      ))}
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-500 text-base leading-relaxed text-center px-6 mt-6">
                      {info.description}
                    </p>
                    
                    {/* Hover indicator */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="inline-flex items-center text-gray-500 text-sm font-medium">
                        <span>Contact Us</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
