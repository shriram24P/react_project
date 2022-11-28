import React from "react";
import {useRef} from 'react';
import "./styles.css";
import { IoIosArrowDown } from "react-icons/io";


const HomePage = () => {

  

  return (
    <div className="content-main">
      <div className="sub-div1">
        <h1 className="main-heading">Silicon</h1>
        <br />
        <h6 className="sub-heading">
          Multipurpose buisness/ Technology templates
        </h6>
        <br />
        <br />
        <img src="./images/switcher.svg" className="main-image" />
        <br />
        <br />
       
     
        <button className="my-button" >
          <i className="my-logo">
            <IoIosArrowDown />
          </i>
          View Landings
        </button>
       
      </div>
      <div>
        <img src=".\images\screens01.png" className="main-img1"></img>
      </div>
      <div>
        <img src=".\images\screens02.png" className="main-img2"></img>
      </div>
    </div>
  );
};

export default HomePage;
