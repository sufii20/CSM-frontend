import React from 'react';
// Import the JMEV Banner image
import JMEVBanner from '../assets/hero banners 1440x450/JMEV Banner.png';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with JMEV Banner */}
      <section className="relative w-full">
        <div className="w-full max-w-7xl mx-auto">
          <img 
            src={JMEVBanner} 
            alt="JMEV ELIGHT - Ahead of the Game" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Rest of your homepage content */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Capital Smart Motors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the future of electric mobility with our premium selection 
            of JMEV, ZEEKR, RIDDARA, and FORTHING vehicles.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;