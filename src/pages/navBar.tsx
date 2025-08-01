import React, { useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';

const Navbar = () => {
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

  const brands = [
    'BMW',
    'Mercedes-Benz', 
    'Audi',
    'Toyota',
    'Honda',
    'Nissan',
    'Volkswagen',
    'Hyundai'
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold text-sm">CSM</span>
            </div>
            <div className="flex flex-col">
              <span className="text-black font-bold text-lg leading-tight tracking-wide">CAPITAL SMART</span>
              <span className="text-black font-bold text-lg leading-tight tracking-wide">MOTORS</span>
            </div>
          </div>

          {/* Center - Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <a 
              href="#" 
              className="text-gray-600 hover:text-black text-sm font-medium uppercase tracking-wide transition-colors"
            >
              HOME
            </a>
            
            <a 
              href="#" 
              className="text-gray-600 hover:text-black text-sm font-medium uppercase tracking-wide transition-colors"
            >
              ABOUT US
            </a>
            
            {/* Brands Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                className="flex items-center text-black text-sm font-medium uppercase tracking-wide border-b-2 border-black pb-1"
              >
                BRANDS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isBrandsOpen && (
                <>
                  {/* Overlay */}
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setIsBrandsOpen(false)}
                  />
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-1">
                      {brands.map((brand, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                          onClick={() => setIsBrandsOpen(false)}
                        >
                          {brand}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            
            <a 
              href="#" 
              className="text-gray-600 hover:text-black text-sm font-medium uppercase tracking-wide transition-colors"
            >
              NEWS & INSIGHTS
            </a>
            
            <a 
              href="#" 
              className="text-gray-600 hover:text-black text-sm font-medium uppercase tracking-wide transition-colors"
            >
              LOCATIONS
            </a>
            
            <a 
              href="#" 
              className="text-gray-600 hover:text-black text-sm font-medium uppercase tracking-wide transition-colors"
            >
              CONTACT US
            </a>
          </nav>

          {/* Right Side - Rating */}
          <div className="flex items-center">
            <div className="flex items-center bg-gray-50 px-3 py-2 rounded-md border border-gray-200">
              <Star className="w-4 h-4 text-gray-600 mr-2 fill-current" />
              <span className="text-black font-bold text-sm">789,967</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="text-gray-600 hover:text-black p-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;