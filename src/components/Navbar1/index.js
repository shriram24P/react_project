import React from "react";
import "./styles.css";

const Navbar1 = () => {
  return (
    <>
      <nav className="navbar nav-bg">
  <div className="container-fluid">
    <a className="navbar-brand " href="#">
      <img src="./images/envo_market.svg" alt="Logo" className="d-inline-block align-text-top main-img"/>
     
    </a>
    <button type="button" className=" btn-color">Buy now</button>
  </div>
</nav>
    </>
  );
};

export default Navbar1;
