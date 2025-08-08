import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import your assets
import AboutBanner1 from '../assets/AboutUs/Hero.png';
import AboutBanner2 from '../assets/AboutUs/Mission.png';
import AboutBanner3 from '../assets/AboutUs/Vision.png';
import Leader1 from '../assets/AboutUs/Management/CEO.png';
import Leader2 from '../assets/AboutUs/Management/CM.png';
import Leader3 from '../assets/AboutUs/Management/COO.png';
import Leader4 from '../assets/AboutUs/Management/VCM.png';
import Review1 from '../assets/AboutUs/sustain/imageA.jpg';
import Review2 from '../assets/AboutUs/sustain/imageB.png';
import Review3 from '../assets/AboutUs/sustain/imageC.png';

// Slider images
import slide1 from '../assets/AboutUs/Values/valueA.png';
import slide2 from '../assets/AboutUs/Values/valueB.png';
import slide3 from '../assets/AboutUs/Values/valueC.png';
import slide4 from '../assets/AboutUs/Values/valueD.png';

// Reusable heading with lines
const SectionHeading: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-center mb-12">
    <div className="flex items-center justify-center space-x-4 md:space-x-6">
      <div className="h-px bg-gray-400 w-16 md:w-32"></div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide whitespace-nowrap">
        {title}
      </h2>
      <div className="h-px bg-gray-400 w-16 md:w-32"></div>
    </div>
  </div>
);

export const AboutUs: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const slides = [
    { image: slide1, title: 'Innovation', text: 'We embrace creativity and innovation in all we do.' },
    { image: slide2, title: 'Teamwork', text: 'Collaboration is at the heart of our culture.' },
    { image: slide3, title: 'Customer First', text: 'Our clients are our top priority.' },
    { image: slide4, title: 'Quality', text: 'We deliver with uncompromising quality.' },
  ];

  // Handle screen size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getMaxIndex = (len: number) => Math.max(0, len - (isDesktop ? 2 : 1));

  const nextSlide = () => {
    const maxIndex = getMaxIndex(slides.length);
    setCurrentSlide(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = getMaxIndex(slides.length);
    setCurrentSlide(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="w-full">

      {/* Top Banner */}
      <div>
        <img src={AboutBanner1} alt="About Us Banner" className="w-full h-auto object-cover" />
      </div>

      {/* Intro Text */}
      <div className="max-w-5xl mx-auto py-12 px-4 text-center">
        <SectionHeading title="About Our Company" />
        <p className="text-gray-600 leading-relaxed">
          We are a forward-thinking organization committed to delivering outstanding solutions and building long-lasting relationships with our clients. 
          Our journey has been defined by innovation, dedication, and a passion for excellence.
        </p>
      </div>

      {/* Second Banner */}
      <div className="mb-8">
        <img src={AboutBanner2} alt="Our Vision" className="w-full h-auto object-cover" />
      </div>

      {/* Third Banner */}
      <div>
        <img src={AboutBanner3} alt="Our Mission" className="w-full h-auto object-cover" />
      </div>

      {/* Mission / Vision Text */}
      <div className="max-w-5xl mx-auto py-12 px-4 text-center">
        <SectionHeading title="Our Mission & Vision" />
        <p className="text-gray-600 leading-relaxed">
          Our mission is to drive positive change through technology, creating meaningful impact for communities and industries. 
          Our vision is to be a global leader in innovation and quality, shaping a better future together.
        </p>
      </div>

      {/* Slider Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Values" />
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 gap-6"
                style={{ transform: `translateX(-${currentSlide * (isDesktop ? 50 : 100)}%)` }}
              >
                {slides.map((s, idx) => (
                  <div key={idx} className="w-full md:w-1/2 flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                      <img src={s.image} alt={s.title} className="w-full h-auto object-cover" />
                      <div className="p-4 bg-gray-100 text-left">
                        <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                        <p className="text-sm text-gray-600">{s.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:shadow-lg"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:shadow-lg"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <SectionHeading title="Leadership" />
        <div className="space-y-8">
          {[Leader1, Leader2, Leader3, Leader4].map((img, idx) => (
            <div 
              key={idx} 
              className="flex flex-col md:flex-row items-center md:items-start bg-white p-4 rounded-lg shadow"
            >
              {/* Image on the left */}
              <img 
                src={img} 
                alt={`Leader ${idx + 1}`} 
                className="w-32 h-32 rounded-lg object-cover mb-4 md:mb-0 md:mr-6" 
              />

              {/* Text on the right */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold">Leader Name {idx + 1}</h3>
                <p className="text-sm text-gray-500">Position</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What People Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: Review1, text: 'Amazing experience working with this team. Highly recommended!' },
              { img: Review2, text: 'Professional, efficient, and innovative solutions every time.' },
              { img: Review3, text: 'They truly care about their clients and deliver beyond expectations.' }
            ].map((r, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={r.img}
                  alt={`Reviewer ${idx + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-gray-600 text-center">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
