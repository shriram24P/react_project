import React, { useState } from "react";
import "./styles.css";
import myrecord from "./myrecord";

const LandingPages = () => {
  const [reco, setReco] = useState(myrecord);

  return (
    <>
      <div className="xyz" id="section1">
        <h2 id="heading1">Landing Page</h2>
        <p id="heading2">
          Choose from pre-built layouts of our unique landing pages
        </p>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {reco.map(items => {
            const { id, ImageUrl, title } = items;
            return (
              <div className="col col-main">
                <div className="card">
                  <img src={ImageUrl} alt="" />
                </div>
                <div className="card-body">
                  <h5 className="card-t">{title}</h5>
                </div>
              </div>
            );
          })};
        </div>
      </div>
    </>
  );
};

export default LandingPages;