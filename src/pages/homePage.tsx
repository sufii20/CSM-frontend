import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

// Hero banners
import ZeekrBanner from '../assets/HeroBanner/ZeekrBanner.png';
import ForthingBanner from '../assets/HeroBanner/ForthingBanner.png';
import JMEVBanner from '../assets/HeroBanner/JMEVBanner.png';
import RiddaraBanner from '../assets/HeroBanner/RiddaraBanner.png';

// Car slider images
import image1 from '../assets/CardSliderImg/image1.png';
import image2 from '../assets/CardSliderImg/image2.png';
import image3 from '../assets/CardSliderImg/image3.png';
import image4 from '../assets/CardSliderImg/image4.png';

// Other assets
import RiddaraVideo from '../assets/RiddaraVideo.mp4';
import ServiceImage from '../assets/Home-v2.png';
import LogoMain from '../assets/Logo-main.svg';
import CSMGeely from '../assets/insights/CSM-GEELY-MOU.png';
import autoMob from '../assets/insights/auto-mob-future.png';
import sareena from '../assets/insights/SERENA-hotel-isb.png';
import accessories from '../assets/services/accesories.png';
import call from '../assets/services/callCenter.png';
import merchandise from '../assets/services/MErchandise.png';

const Homepage = () => {
  const [currentHeroBanner, setCurrentHeroBanner] = useState(0);
  const [currentCarSlide, setCurrentCarSlide] = useState(0);

  const heroBanners = [
    { id: 1, image: ZeekrBanner },
    { id: 2, image: ForthingBanner },
    { id: 3, image: JMEVBanner },
    { id: 4, image: RiddaraBanner }
  ];

  const cars = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 }
  ];

  const services = [
    {
      id: 1,
      title: "Merchandise",
      description: "A Capital Selection Of Premium Branded Merchandise That Embodies The Spirit Of Innovation And Style.",
      image: merchandise,
    },
    {
      id: 2,
      title: "Call Centre",
      description: "A Dedicated Customer Care Service, Offering Personalized Support And Seamless Communication For All Inquiries.",
      image: call,
    },
    {
      id: 3,
      title: "Parts/Accessories",
      description: "Authentic Parts And Refined Accessories, Engineered To Enhance Performance And Elevate Your Driving Experience.",
      image: accessories,
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroBanner((prev) => (prev + 1) % heroBanners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Banner Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {heroBanners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentHeroBanner ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={banner.image} alt={`Banner ${banner.id}`} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroBanner(index)}
              className={`w-3 h-3 rounded-full ${index === currentHeroBanner ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Car Slider */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-80 w-full">
                  <img src={car.image} alt={`Car ${car.id}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Feedback */}
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

      {/* Interior View */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <video src={RiddaraVideo} className="w-full h-full object-cover" autoPlay loop muted playsInline />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">RIDDAKA 009</h3>
                <p className="text-xl">Luxury Interior Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Insights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">News & Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={CSMGeely} alt="News 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">CSM & GEELY Signed MOU To Launch Zeekr In Pakistan</h4>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={sareena} alt="News 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">Dealer Meetup Organized By Capital Smart City At Serena Hotel, Islamabad</h4>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={autoMob} alt="News 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">Zeging Excellence For Pakistan's Automotive Future</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section (Updated) */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-4">
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            {/* Text Block */}
            <div className="mb-6 md:mb-0 text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Stay Connected</h2>
              <p className="text-gray-600">Join Our Mailing List For News &amp; Updates</p>
            </div>

            {/* Input + Button */}
            <div className="relative w-full max-w-md">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="w-full px-5 py-3 border border-gray-400 focus:outline-none focus:border-black"
              />
              <button 
                type="submit" 
                className="absolute top-0 right-0 h-full px-5 bg-black text-white flex items-center justify-left"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Watermark Background Logo */}
        <div className="absolute inset-0 opacity-5 flex justify-end items-center pr-20 pointer-events-none">
          <img src={LogoMain} alt="Watermark" className="w-48 md:w-64 lg:w-72" />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
