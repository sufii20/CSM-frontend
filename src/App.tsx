import React from "react";
import "./App.css";
import Navbar from "./pages/navBar";
import Footer from "./pages/footer";
import Homepage from "./pages/homePage";
import { Newsletter } from "./pages/newsLetter";
import RiddaraShowcase from "./pages/riddara";
function App() {
  return (
    <div className="App">
      {/* Navbar at the top */}
      <Navbar />
      <Homepage />
      {/* <RiddaraShowcase /> */}
      <Newsletter />
      <Footer/>


    </div>
  );
}

export default App;
