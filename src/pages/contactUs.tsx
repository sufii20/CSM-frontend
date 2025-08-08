import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="w-full bg-white text-black">
      {/* Main container */}
      <div className="flex flex-col md:flex-row gap-12 p-8">
        {/* Left Contact Info */}
        <div className="flex-1 space-y-8">
          <div>
            <h3 className="uppercase font-bold mb-1">Email</h3>
            <p className="text-sm">hello@csm.com</p>
          </div>

          <div>
            <h3 className="uppercase font-bold mb-1">Phone</h3>
            <p className="text-sm">+(@) xxx-xxxxxxxx</p>
          </div>

          <div>
            <h3 className="uppercase font-bold mb-1">Address</h3>
            <p className="text-sm">abc 123 somewhere, lahore pakistan</p>
          </div>

          <div>
            <h3 className="uppercase font-bold mb-2">We Are Social</h3>
            <div className="flex items-center gap-4 text-gray-700 text-lg">
              {/* Twitter */}
              <a href="#" aria-label="Twitter" className="hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 
                    4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 
                    1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 
                    13.944 0 0 1 1.671 3.15a4.916 4.916 0 0 0 
                    1.523 6.574 4.897 4.897 0 0 1-2.229-.616v.06a4.918 
                    4.918 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.085 
                    4.923 4.923 0 0 0 4.6 3.417A9.867 9.867 0 0 1 
                    0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 
                    0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.636A9.935 
                    9.935 0 0 0 24 4.557z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 
                    1.325v21.351C0 23.4.6 24 1.325 
                    24h11.495v-9.294H9.691V11.41h3.129V8.413c0-3.1 
                    1.894-4.788 4.659-4.788 1.325 0 2.463.099 
                    2.795.143v3.24h-1.918c-1.504 
                    0-1.796.715-1.796 1.763v2.313h3.587l-.467 
                    3.296h-3.12V24h6.116C23.4 24 24 23.4 24 
                    22.675V1.325C24 .6 23.4 0 22.675 0z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 
                    0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.41v1.561h.049c.476-.9 
                    1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 
                    5.455v6.288zM5.337 7.433a1.986 1.986 0 1 
                    1 0-3.972 1.986 1.986 0 0 1 
                    0 3.972zM6.93 20.452H3.743V9h3.187v11.452zM22.225 
                    0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 
                    24 1.771 24h20.451C23.2 24 24 23.227 24 
                    22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 bg-gray-100">
          {/* Marquee */}
          <div className="bg-black text-white overflow-hidden w-full">
            <div className="whitespace-nowrap py-3 pl-4 pr-0 text-sm font-medium tracking-widest">
              <div className="inline-block animate-marquee">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} className="mx-3">
                    GET IN TOUCH WITH US
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-xl font-bold uppercase mb-6">
              We’d Love To Hear From You.
            </h2>

            {/* Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Name</label>
              <p className="text-sm">Sadia Ali</p>
            </div>

            {/* Email / Phone */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">
                Email / Phone No.
              </label>
              <input
                type="text"
                className="w-full border-b border-black bg-transparent outline-none py-1 text-sm"
              />
            </div>

            {/* Invoice */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Invoice No.</label>
              <input
                type="text"
                className="w-full border-b border-black bg-transparent outline-none py-1 text-sm"
              />
            </div>

            {/* City */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                className="w-full border-b border-black bg-transparent outline-none py-1 text-sm"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                className="w-full border-b border-black bg-transparent outline-none py-1 text-sm"
                rows={3}
              ></textarea>
            </div>

            {/* Submit */}
            <button className="flex items-center gap-2 border border-black px-4 py-2 text-sm uppercase font-medium hover:bg-black hover:text-white transition-colors">
              Submit →
            </button>
          </div>
        </div>
      </div>

      {/* Marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-block;
          min-width: 200%;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
