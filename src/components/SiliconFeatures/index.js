
import "./styles.css";
import React from "react";


const SiliconFeatures = () => {
  return (
    <>
      <div className="flex-container">
        <div className="main-box">
          <img src="./images/1.svg" alt="1" />
          <br />
          <br />
          <h5 className="head-m">Light/Dark mode</h5>
        </div>
        <div className="main-box">
          <img src="./images/2.svg" alt="2" />
          <br />
          <br />
          <h5 className="head-m">Figma Files Included</h5>
        </div>
        <div className="main-box">
          <img src="./images/3.svg" alt="3" />
          <br />
          <br />
          <h5 className="head-m">100+ UI Flexible Section</h5>
        </div>
        <div className="main-box">
          <img src="./images/4.svg" alt="4" />
          <br />
          <br />
          <h5 className="head-m">Free Lifetime Updates</h5>
        </div>
      </div>
    </>
  );
};

export default SiliconFeatures;

