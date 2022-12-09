import React from "react";
import Footer from "./components/Footer";
import LandingPages from "./components/LandingPages";
import MoreSiliconFeatures from "./components/MoreSiliconFeatures";
import Navbar1 from "./components/Navbar1";
import SiliconFeatures from "./components/SiliconFeatures";
import HomePage from "./components/HomePage";
import GoToTop from "./components/GoToTop";
import Navbar2 from "./components/Navbar2";
import "./App.css"


function App() {
  return (
    <div>
    <div className="both-navbars">
      <Navbar1 />
      <Navbar2 />
    </div>
      <HomePage />
      <SiliconFeatures />
      <LandingPages />
      <MoreSiliconFeatures />
      <GoToTop />
      <Footer />
    </div>
  );
}

export default App;
