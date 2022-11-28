import React from "react";
import "./styles.css";
import {FiMail} from "react-icons/fi"
import {BiHeart} from "react-icons/bi"


const Footer = () => {
  return(
  <>
  <div className="main-div">
  <h1 className="heading">Subscribe to Our Newsletter</h1>
  <form className="myform">
  <div class="input-container">
    <i class="icon"><FiMail/></i>
    <input class="input-field" type="text" placeholder="Username" name="usrnm"/>
  </div>

 
  <button type="submit" class="s-btn">Subscribe</button>
</form>
    </div>

    <div className="last-div">
      <p className="comment">© All rights reserved. Made with  by <i className="icon"><BiHeart/></i>  MadrasThemes</p>
    </div>
  </>
  )
};

export default Footer;
