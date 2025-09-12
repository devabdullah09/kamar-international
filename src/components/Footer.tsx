'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(to right, #EFA59A, #E68B7D)'}}>
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold">Kamar International</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              &quot;Because dreams matter&quot; - We help transform your dreams into reality through strategic planning and business development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-blushing-peach transition-colors duration-300 text-sm">Home</Link></li>
              <li><Link href="/department" className="text-gray-300 hover:text-blushing-peach transition-colors duration-300 text-sm">Department</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-blushing-peach transition-colors duration-300 text-sm">Contact</Link></li>
              <li><Link href="/location" className="text-gray-300 hover:text-blushing-peach transition-colors duration-300 text-sm">Location</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm">Strategic Planning</li>
              <li className="text-gray-300 text-sm">Business Development</li>
              <li className="text-gray-300 text-sm">Innovation Consulting</li>
              <li className="text-gray-300 text-sm">Dream Realization</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blushing-peach flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@kamarinternational.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blushing-peach flex-shrink-0" />
                <span className="text-gray-300 text-sm">+92 XXX XXXXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blushing-peach flex-shrink-0" />
                <span className="text-gray-300 text-sm">Business Development & Strategic Planning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Kamar International. All rights reserved. | Dream Realization Specialists
          </p>
        </div>
      </div>
    </footer>
  );
}
