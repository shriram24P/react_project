import records from "./records";
import "./styles.css";
import React, { useState } from "react";

const SiliconFeatures = () => {
  const [data, setData] = useState(records);
  return (
    <>
      <div className="flex-container">
        {data.map((items) => {
          const { id, ImageUrl, title } = items;
          return (
            <div className="main-box" key={id}>
              <img src={ImageUrl} alt="" />
              <br />
              <br />
              <h5 className="head-m">{title}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SiliconFeatures;
