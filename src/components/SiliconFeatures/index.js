import React from "react";
import "./styles.css";

const SiliconFeatures = () => {
  return (
    <>
      <div className="flex-container">
        <div className="main-box">
          <img src="./images/1.svg" alt="1" />
          <br />
          <br />
          <h4 className="light-dark">Light/Dark mode</h4>
        </div>
        <div className="main-box">
          <img src="./images/2.svg" alt="2" />
          <br />
          <br />
          <h4>Figma Files Included</h4>
        </div>
        <div className="main-box">
          <img src="./images/3.svg" alt="3" />
          <br />
          <br />
          <h4>100+ UI Flexible Section</h4>
        </div>
        <div className="main-box">
          <img src="./images/4.svg" alt="4" />
          <br />
          <br />
          <h4>Free Lifetime Updates</h4>
        </div>
      </div>
    </>
  );
};

export default SiliconFeatures;
