import React from "react";
import "./styles.css";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";



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
        <a href="#section1">
          <button className="my-button">
            <i className="my-logo">
              <IoIosArrowDown />
            </i>
            View Landings
          </button>
        </a>
      </div>
      <div>
        <motion.img
          className="main-img1"
          src=".\images\screens01.png"
          initial={{ y: 0 }}
          animate={{ y: 40 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 0.8,
            repeat: 3,
          }}
        />
      </div>
      <div>
        <motion.img
          className="main-img2"
          src=".\images\screens02.png"
          initial={{ y: 0 }}
          animate={{ y: -40 }}
          transition={{
            type: "smooth",
            repeatType: "scroll",
            duration: 0.8,
            repeat: 3,
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
