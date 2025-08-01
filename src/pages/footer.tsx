import React from 'react';
import { Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white font-sans">
      {/* Main Footer Content */}
      <div className="w-full max-w-6xl mx-auto px-12 py-12">
        <div className="flex justify-between items-start">
          
          {/* Left Side - Logo and Social Icons */}
          <div className="flex flex-col items-start flex-shrink-0">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-sm">CSM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-black font-bold text-lg leading-tight tracking-wide">CAPITAL SMART</span>
                <span className="text-black font-bold text-lg leading-tight tracking-wide">MOTORS</span>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-400 hover:opacity-80 transition-opacity duration-300"
              >
                <Twitter size={20} color="white" fill="white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 hover:opacity-80 transition-opacity duration-300"
              >
                <Facebook size={20} color="white" fill="white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-700 hover:opacity-80 transition-opacity duration-300"
              >
                <Linkedin size={20} color="white" fill="white" />
              </a>
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="flex gap-20 items-start flex-grow justify-end">
            <div className="flex gap-20">
              {/* About Us */}
              <div className="flex flex-col min-w-30">
                <h3 className="text-black font-bold text-sm uppercase tracking-wide mb-4">About Us</h3>
                <div className="flex flex-col gap-3">
                  <a 
                    href="#" 
                    className="text-gray-500 text-sm hover:text-black transition-colors duration-300"
                  >
                    Mission Statement
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-500 text-sm hover:text-black transition-colors duration-300"
                  >
                    Vision Statement
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-500 text-sm hover:text-black transition-colors duration-300"
                  >
                    Store Locator
                  </a>
                </div>
              </div>

              {/* Contact Us */}
              <div className="flex flex-col min-w-30">
                <h3 className="text-black font-bold text-sm uppercase tracking-wide mb-4">Contact Us</h3>
                <div className="flex flex-col gap-3">
                  <a 
                    href="#" 
                    className="text-gray-500 text-sm hover:text-black transition-colors duration-300"
                  >
                    Customer Feedback
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-500 text-sm hover:text-black transition-colors duration-300"
                  >
                    Careers
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-500 text-sm hover:text-black transition-colors duration-300"
                  >
                    FAQs
                  </a>
                </div>
              </div>
            </div>

            {/* Brands */}
            <div className="flex flex-col gap-3 min-w-20">
              <a 
                href="#" 
                className="text-gray-500 text-sm font-medium hover:text-black transition-colors duration-300"
              >
                ZEEKR
              </a>
              <a 
                href="#" 
                className="text-gray-500 text-sm font-medium hover:text-black transition-colors duration-300"
              >
                RIDDARA
              </a>
              <a 
                href="#" 
                className="text-gray-500 text-sm font-medium hover:text-black transition-colors duration-300"
              >
                FORTHING
              </a>
              <a 
                href="#" 
                className="text-gray-500 text-sm font-medium hover:text-black transition-colors duration-300"
              >
                JMEV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="w-full bg-gray-200 border-t border-gray-300">
        <div className="w-full max-w-6xl mx-auto px-12 py-4 flex justify-between items-center flex-wrap gap-4">
          <span className="text-sm text-gray-500">© 2025 Capital Smart Motors</span>
          <div className="flex gap-6 flex-wrap">
            <a 
              href="#" 
              className="text-sm text-gray-500 hover:text-black transition-colors duration-300"
            >
              Terms Of Service
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-500 hover:text-black transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-500 hover:text-black transition-colors duration-300"
            >
              Trust & Safety
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-500 hover:text-black transition-colors duration-300"
            >
              Law Enforcement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;