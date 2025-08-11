import ForthingBanner from "../assets/Forthing/HeroBanner/ForthingBanner.png";
import Newsletter from "./newsLetter";
export const Forthing = () => {

  return (
    <div className="w-full">
      {/* Hero Banner Section */}
      <div className="relative w-full">
        <img
          src={ForthingBanner}
          alt="Forthing Hero Banner"
          className="w-full h-auto object-cover"
        />

        {/* Buttons positioned at bottom right */}
        <div className="absolute bottom-8 right-8 flex space-x-4">
          <button
            className="px-8 py-4 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ borderRadius: "8px" }}
          >
            BOOK NOW
          </button>
          <button
            className="px-8 py-4 border-2 border-black text-white bg-black hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ borderRadius: "8px" }}
          >
            BROCHURE
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
      <div className="border-t border-gray-300" />
      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
};

export default Forthing;
