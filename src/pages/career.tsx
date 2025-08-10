import React, { useState } from "react";
import career from "../assets/career.png";
import careerBanner from "../assets/CarrerBanner.png";

const CareerPage = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    phone: "",
    city: "",
  });

  const bannerImage = careerBanner;
  const carImage = career;

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    console.log("Uploaded File:", uploadedFile);
    alert("Form submitted successfully!");
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Banner */}
      <div className="relative">
        <img
          src={bannerImage}
          alt="Career Banner"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-start bg-black bg-opacity-30 p-6">
          <h1 className="text-white text-lg md:text-xl font-semibold">
            WE ARE HIRING
          </h1>
        </div>
      </div>

      {/* Job Section */}
      <div className="container mx-auto px-4 py-6">
        <p className="text-sm mb-2">23-06-2025</p>
        <h2 className="text-2xl font-bold mb-6">Executive - Parts</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Job Image */}
          <div className="flex-1">
            <img
              src={carImage}
              alt="Hiring"
              className="w-full object-cover border border-gray-200 h-full"
            />
          </div>

          {/* Form */}
          <div className="flex-1 bg-gray-120 border border-gray-200 max-w-md flex flex-col h-full">
            <h3 className="font-bold text-lg mb-6 px-6 mt-6">
              WE'D LOVE TO HEAR ABOUT YOU.
            </h3>
            <div className="space-y-5 px-6 pb-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 focus:outline-none py-2 px-3 bg-transparent"
              />
              <input
                type="text"
                name="fatherName"
                placeholder="Father Name"
                value={formData.fatherName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 focus:outline-none py-2 px-3 bg-transparent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone No."
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 focus:outline-none py-2 px-3 bg-transparent"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full border border-gray-300 focus:outline-none py-2 px-3 bg-transparent"
              />

              {/* File Upload */}
              <div className="w-full border border-gray-300 p-4 text-center text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors relative">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept=".pdf,.doc,.docx,.txt"
                />
                <div className="pointer-events-none">
                  {uploadedFile ? (
                    <span className="text-green-600">✓ {uploadedFile.name}</span>
                  ) : (
                    <>📎 Click To Upload Document</>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-black text-white py-2 hover:bg-gray-800 transition mt-6"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        {/* Show More */}
        <div className="text-center mt-4">
          <button className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
