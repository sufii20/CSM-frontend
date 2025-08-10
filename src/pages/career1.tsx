import React, { useState } from "react";
import { Share2 } from "lucide-react";
import bannerImg from "../assets/CarrerBanner.png";

const JobPosting = () => {
  const [showHiddenLines, setShowHiddenLines] = useState(false);
  
  const handleNavigateToCareer = () => {
    // Navigate to career page - replace with your routing logic
    // For React Router: navigate('/career');
    // For Next.js: router.push('/career');
    // For basic navigation:
    window.location.href = '/career';
  };

  const toggleHiddenLines = () => {
    setShowHiddenLines(!showHiddenLines);
  };

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Banner */}
      <div className="relative">
        <img
          src={bannerImg}
          alt="We are hiring"
          className="w-full h-60 object-cover"
        />
        <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
          WE ARE HIRING
        </div>
      </div>

      {/* More spacing between banner and content */}
      <div className="h-20"></div>

      {/* Job Details Section - More left aligned */}
      <div className="relative pl-4 pr-6 max-w-full">
        {/* Share Icon on Top Right */}
        <button className="absolute -top-1 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Share2 size={30} className="text-gray-600" />
        </button>

        {/* All text aligned to the left */}
        <div className="text-left">
          {/* Date */}
          <p className="text-sm text-gray-500 mb-2">23-06-2025</p>
          
          {/* Job Title */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-3">Executive - Parts</h1>
          
          {/* Job Info */}
          <p className="text-sm text-gray-600 mb-6">
            Lhr &nbsp;&nbsp;&nbsp;&nbsp; 3-5 Years Experience &nbsp;&nbsp;&nbsp;&nbsp; Deadline: Aug 1,2025
          </p>

          {/* Job Description */}
          <div className="space-y-1 text-sm text-gray-800 leading-relaxed">
            <p className="mb-4 break-words text-left">
              Manage Daily Issuance And Return Of Parts And Consumables ,Ensure Accurate EPIP 
              Entries, Bin Maintenance, And <br />Labeling Of EV Parts ,Monitor Stock Levels Of High-Demand 
              Items Like Battery Packs And Connectors.
            </p>
            
            {/* Touch area for hidden content */}
            <div 
              onClick={toggleHiddenLines}
              className="cursor-pointer py-4 select-none text-left"
            >
              <div className="text-xs text-gray-400">
                {showHiddenLines ? "Tap to hide" : "Tap to view more details"}
              </div>
            </div>
            
            {/* Hidden clickable navigation items */}
            <div className={`transition-all duration-300 overflow-hidden ${
              showHiddenLines ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div 
                onClick={handleNavigateToCareer}
                className="cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:shadow-sm rounded-lg p-2 break-words text-left"
              >
                <p className="hover:text-blue-600 transition-colors">
                  - Coordinate With Service Advisors For Part Reservations And Availability
                </p>
              </div>
              
              <div 
                onClick={handleNavigateToCareer}
                className="cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:shadow-sm rounded-lg p-2 break-words text-left"
              >
                <p className="hover:text-blue-600 transition-colors">
                  - Conduct Regular Stock Reconciliations And Maintain Safety Compliance
                </p>
              </div>
              
              <div 
                onClick={handleNavigateToCareer}
                className="cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:shadow-sm rounded-lg p-2 break-words text-left"
              >
                <p className="hover:text-blue-600 transition-colors">
                  - Support HQ In Stock Forecasting And Part Usage Reporting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPosting;