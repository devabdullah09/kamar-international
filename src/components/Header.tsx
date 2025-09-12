'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'department', label: 'Department', href: '/department' },
    { id: 'contact', label: 'Contact', href: '/contact' },
    { id: 'location', label: 'Location', href: '/location' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0  w-full z-50 transition-all duration-300">
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm min-h-[80px] flex items-center">
        <div className="container mx-auto px-6 w-full">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(to right, #EFA59A, #E68B7D)'}}>
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-800 font-bold text-xl group-hover:text-gray-600 transition-colors duration-300">
                Kamar International
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex ml-8 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`font-semibold text-base transition-all duration-300 relative group px-6 py-3 rounded-xl min-h-[44px] flex items-center justify-center ${
                    isActive(item.href)
                      ? 'text-white'
                      : 'text-gray-700 hover:text-gray-600'
                  }`}
                  style={isActive(item.href) ? {backgroundColor: '#EFA59A'} : {}}
                  onMouseEnter={(e) => !isActive(item.href) && ((e.target as HTMLElement).style.backgroundColor = '#F5C4B9')}
                  onMouseLeave={(e) => !isActive(item.href) && ((e.target as HTMLElement).style.backgroundColor = 'transparent')}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 pt-4 border-t border-white/20"
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-semibold text-base transition-all duration-300 px-6 py-3 rounded-xl min-h-[44px] flex items-center justify-center ${
                      isActive(item.href)
                        ? 'text-white'
                        : 'text-gray-700 hover:text-gray-600'
                    }`}
                    style={isActive(item.href) ? {backgroundColor: '#EFA59A'} : {}}
                    onMouseEnter={(e) => !isActive(item.href) && ((e.target as HTMLElement).style.backgroundColor = '#F5C4B9')}
                    onMouseLeave={(e) => !isActive(item.href) && ((e.target as HTMLElement).style.backgroundColor = 'transparent')}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </div>
      </div>
    </header>
  );
}
