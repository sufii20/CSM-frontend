import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

// Corrected imports based on your file structure
import ZeekrBanner from '../assets/HeroBanner/ZeekrBanner.png';
import ForthingBanner from '../assets/HeroBanner/ForthingBanner.png';
import JMEVBanner from '../assets/HeroBanner/JMEVBanner.png';
import RiddaraBanner from '../assets/HeroBanner/RiddaraBanner.png';

// Card slider images
import image1 from '../assets/CardSliderImg/image1.png';
import image2 from '../assets/CardSliderImg/image2.png';
import image3 from '../assets/CardSliderImg/image3.png';
import image4 from '../assets/CardSliderImg/image4.png';

// Other assets
import RiddaraVideo from '../assets/RiddaraVideo.mp4';
import ServiceImage from '../assets/Home-v2.png';
import LogoMain from '../assets/Logo-main.svg';

const Homepage = () => {
  const [currentHeroBanner, setCurrentHeroBanner] = useState(0);
  const [currentCarSlide, setCurrentCarSlide] = useState(0);

  // Hero banners data - only images, no text or background
  const heroBanners = [
    {
      id: 1,
      image: ZeekrBanner
    },
    {
      id: 2,
      image: ForthingBanner
    },
    {
      id: 3,
      image: JMEVBanner
    },
    {
      id: 4,
      image: RiddaraBanner
    }
  ];

  // Car slider data - clean images only
  const cars = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
    {
      id: 4,
      image: image4,
    }
  ];

  // Services data - using corrected imported variables
  const services = [
    {
      id: 1,
      title: "Merchandise",
      description: "A Capital Selection Of Premium Branded Merchandise That Embodies The Spirit Of Innovation And Style.",
      image: ServiceImage,
      icon: "🛍️"
    },
    {
      id: 2,
      title: "Call Centre",
      description: "A Dedicated Customer Care Service, Offering Personalized Support And Seamless Communication For All Inquiries.",
      image: ServiceImage,
      icon: "📞"
    },
    {
      id: 3,
      title: "Parts/Accessories",
      description: "Authentic Parts And Refined Accessories, Engineered To Enhance Performance And Elevate Your Driving Experience.",
      image: ServiceImage,
      icon: "🔧"
    }
  ];

  // Customer feedback data
  const testimonials = [
    {
      id: 1,
      name: "Azuish Pandey",
      location: "Sindh, Pakistan",
      rating: 5,
      text: "The listing Was Very Nice Than I'll Make. Everything Worked Perfect Well. We Appreciated A Simple Decision Using Page That With A Video, Full Sections. Course Stamps – Everything Was Great And We Likes Good Analytics On It."
    },
    {
      id: 2,
      name: "Milano Nascimento",
      location: "Punjab, Pakistan",
      rating: 5,
      text: "The Listing Was Not Upto Than I Till Build. Everything Worked Well. We Appreciated A Simple Decision Using Page That With A Video, Full Sections. Course Stamps – Everything Was Great And We Didn't Need Analytics On That."
    },
    {
      id: 3,
      name: "Eve Aritt",
      location: "Islamabad, Pakistan",
      rating: 5,
      text: "The Listing Was Too Much Than I'll Make. Everything Worked Perfect Well. We Appreciated A Simple Decision Using Page That With A Video, Full Sections. Course Stamps – Everything Was Great And We Likes Good Analytics On It."
    }
  ];

  // Auto transition for hero banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroBanner((prev) => (prev + 1) % heroBanners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Car slider navigation
  const nextCarSlide = () => {
    setCurrentCarSlide((prev) => (prev + 1) % Math.ceil(cars.length / 3));
  };

  const prevCarSlide = () => {
    setCurrentCarSlide((prev) => (prev - 1 + Math.ceil(cars.length / 3)) % Math.ceil(cars.length / 3));
  };

  return (
    <div className="bg-white">
      {/* Hero Banner Section - Clean images only */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {heroBanners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={banner.image} 
              alt={`Banner ${banner.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Hero Banner Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroBanner(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentHeroBanner ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Car Slider Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {cars.map((car, index) => (
                <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-80 w-full">
                    <img 
                      src={car.image} 
                      alt={`Car ${car.id}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{service.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Feedback Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Customer Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior View Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <video 
              src={RiddaraVideo}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">RIDDAKA 009</h3>
                <p className="text-xl">Luxury Interior Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">News & Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={ServiceImage} alt="News 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">CSM & GEELY Signed MOU To Launch Zeekr In Pakistan</h4>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={ServiceImage} alt="News 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">Dealer Meetup Organized By Capital Smart City At Serena Hotel, Islamabad</h4>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={ServiceImage} alt="News 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">Zeging Excellence For Pakistan's Automotive Future</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
            <p className="text-gray-600 mb-8">Join Our Mailing List For News & Updates</p>
            <div className="max-w-md mx-auto flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;