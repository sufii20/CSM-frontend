import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Import and use the Navbar component */}
     
      
      {/* Main content area */}
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Welcome to Capital Smart Motors
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Your trusted partner in finding the perfect vehicle
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Browse Our Inventory
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;