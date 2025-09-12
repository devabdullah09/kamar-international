'use client';

import { motion } from 'framer-motion';

export default function Department() {
  const productPhotos = [
    {
      id: 1,
      src: '/product-1.jpg',
      alt: 'Product 1',
      title: 'Premium Quality'
    },
    {
      id: 2,
      src: '/product-2.jpg',
      alt: 'Product 2',
      title: 'Innovative Design'
    },
    {
      id: 3,
      src: '/product-3.jpg',
      alt: 'Product 3',
      title: 'Sustainable Solutions'
    },
    {
      id: 4,
      src: '/product-4.jpg',
      alt: 'Product 4',
      title: 'Advanced Technology'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 min-h-[85vh]">
          {/* Left Side - Products Section (2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-2 flex flex-col justify-center px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-block px-4 py-2 text-gray-600 rounded-full text-sm font-medium mb-4" style={{backgroundColor: '#FAE8E5'}}>
                Our Collection
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Products
              </h1>
              <div className="w-16 h-1 rounded-full mb-8" style={{background: 'linear-gradient(to right, #EFA59A, #E68B7D)'}}></div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg text-gray-600 leading-relaxed mb-8 max-w-md"
            >
              Discover our innovative product range designed to meet your needs and exceed your expectations with cutting-edge technology and premium quality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <button className="px-6 py-3 text-gray-800 rounded-lg font-medium transition-colors duration-300" style={{backgroundColor: '#EFA59A'}} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#E68B7D'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#EFA59A'}>
                View All Products
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:text-gray-600 transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Product Photos Row */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-3 flex items-center"
          >
            <div className="w-full">
              <div className="flex flex-col gap-4">
                {productPhotos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-24 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                      {/* Placeholder for actual image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/30">
                        {/* Background Pattern */}
                        <div className="absolute inset-0">
                          <div className="absolute top-2 right-2 w-8 h-8 bg-gray-200/40 rounded-full"></div>
                          <div className="absolute bottom-2 left-2 w-6 h-6 bg-gray-300/30 rounded-full"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full"></div>
                        </div>
                        
                        {/* Image placeholder - replace with actual images */}
                        <div className="absolute inset-0 flex items-center justify-start pl-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                              {photo.id}
                            </div>
                            <div className="text-left">
                              <div className="text-lg font-bold text-gray-800 mb-1">{photo.title}</div>
                              <div className="text-sm text-gray-600">Product {photo.id} • Premium Series</div>
                            </div>
                          </div>
                          <div className="ml-auto pr-6">
                            <div className="flex items-center text-gray-500 text-sm font-medium">
                              <span>View Details</span>
                              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Border animation on hover */}
                      <div className="absolute inset-0 border-2 border-gray-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
