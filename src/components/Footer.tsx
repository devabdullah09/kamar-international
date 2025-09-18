import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Kamar International</h3>
            <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              Quality textile manufacturing with passion and commitment since 2000.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.989.016 6.756.072 5.526.127 4.75.329 4.072.628a5.852 5.852 0 00-2.117 1.378A5.85 5.85 0 00.628 4.123C.329 4.801.127 5.577.072 6.807.016 8.04 0 8.447 0 12.068s.016 4.028.072 5.261c.055 1.23.257 2.006.556 2.684a5.85 5.85 0 001.378 2.117 5.852 5.852 0 002.117 1.378c.678.299 1.454.501 2.684.556 1.233.056 1.64.072 5.261.072s4.028-.016 5.261-.072c1.23-.055 2.006-.257 2.684-.556a5.85 5.85 0 002.117-1.378 5.85 5.85 0 001.378-2.117c.299-.678.501-1.454.556-2.684.056-1.233.072-1.64.072-5.261s-.016-4.028-.072-5.261c-.055-1.23-.257-2.006-.556-2.684a5.85 5.85 0 00-1.378-2.117A5.85 5.85 0 0019.331.628c-.678-.299-1.454-.501-2.684-.556C15.414.016 15.007 0 11.386 0h.631zm-.081 2.17c3.441 0 3.85.016 5.206.072 1.257.057 1.94.27 2.395.447.603.234 1.033.515 1.485.967.452.452.733.882.967 1.485.177.455.39 1.138.447 2.395.056 1.356.072 1.765.072 5.206s-.016 3.85-.072 5.206c-.057 1.257-.27 1.94-.447 2.395a3.68 3.68 0 01-.967 1.485c-.452.452-.882.733-1.485.967-.455.177-1.138.39-2.395.447-1.356.056-1.765.072-5.206.072s-3.85-.016-5.206-.072c-1.257-.057-1.94-.27-2.395-.447a3.68 3.68 0 01-1.485-.967 3.68 3.68 0 01-.967-1.485c-.177-.455-.39-1.138-.447-2.395-.056-1.356-.072-1.765-.072-5.206s.016-3.85.072-5.206c.057-1.257.27-1.94.447-2.395.234-.603.515-1.033.967-1.485.452-.452.882-.733 1.485-.967.455-.177 1.138-.39 2.395-.447 1.356-.056 1.765-.072 5.206-.072z"/>
                  <path d="M12.017 5.838a6.23 6.23 0 100 12.46 6.23 6.23 0 000-12.46zm0 10.27a4.04 4.04 0 110-8.08 4.04 4.04 0 010 8.08zm7.846-10.405a1.454 1.454 0 11-2.908 0 1.454 1.454 0 012.908 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300">
              <li className="flex items-start">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs sm:text-sm">Młynów 22<br />57-300 Kłodzko, Poland</span>
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xs sm:text-sm">+48 509 696 181</span>
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs sm:text-sm break-all">kamar@data.pl</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} Kamar International. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
