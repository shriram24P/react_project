import { useState } from "react";
import "./styles.css";
import { BiCart } from "react-icons/bi";
import { useEffect } from "react";
import "./darkMode.css";

function Navbar2() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`Navbar2 ${theme}`}>
      <nav className="navbar navbar-expand-lg navbar-main-css">
        <div className="container-fluid main-div2">
          <img
            src="./images/logo.svg"
            // width="35"
            // height="37"
            className="img-logo"
          />
          <h2 className="silicon">Silicon</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-hover">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle nav-li"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Landings
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    <img src=".\images\dropdown.png" id="dropdownimg1"></img>
                  </a>
                  <div>
                    <a className="dropdown-item" href="#">
                      Template intro page
                    </a>
                    <a className="dropdown-item" href="#">
                      Mobile App Showcase
                    </a>
                    <a className="dropdown-item" href="#">
                      Mobile App Showcase v.2
                    </a>
                    <a className="dropdown-item" href="#">
                      StartUp <span class="badge bg-success mynew">New</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      SaaS v.1
                    </a>
                    <a className="dropdown-item" href="#">
                      SaaS v.2
                    </a>
                    <a className="dropdown-item" href="#">
                      SaaS v.3
                    </a>
                    <a className="dropdown-item" href="#">
                      Finantial Consulting
                    </a>
                  </div>
                  <div>
                    <a className="dropdown-item" href="#">
                      Medical
                    </a>
                    <a className="dropdown-item" href="#">
                      IT(Software) Company
                    </a>
                    <a className="dropdown-item" href="#">
                      Conferance
                    </a>
                    <a className="dropdown-item" href="#">
                      Digital Currency
                    </a>
                    <a className="dropdown-item" href="#">
                      Blog Homapage
                    </a>
                  </div>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle nav-li"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <div>
                    <h6 className="imp-h">About</h6>
                    <a className="dropdown-item" href="#">
                      About v.1
                    </a>
                    <a className="dropdown-item" href="#">
                      About v.2
                    </a>
                    <h6 className="imp-h">Services</h6>
                    <a className="dropdown-item" href="#">
                      Services v.1
                    </a>
                    <a className="dropdown-item" href="#">
                      Services v.2S
                    </a>
                    <a className="dropdown-item" href="#">
                      Service Details v.1
                    </a>
                    <a className="dropdown-item" href="#">
                      Service Details v.2
                    </a>
                  </div>
                  <div>
                    <h6 className="imp-h">Blog</h6>
                    <a className="dropdown-item" href="#">
                      List View With Sidebar
                    </a>
                    <a className="dropdown-item" href="#">
                      Grid View With Sidebar
                    </a>
                    <a className="dropdown-item" href="#">
                      List view no Sidebar
                    </a>
                    <a className="dropdown-item" href="#">
                      Grid View no Sidebar
                    </a>
                    <a className="dropdown-item" href="#">
                      Simple Feed
                    </a>
                    <a className="dropdown-item" href="#">
                      Single post
                    </a>
                    <a className="dropdown-item" href="#">
                      Podcast
                    </a>
                  </div>
                  <div>
                    <h6 className="imp-h">Pricing</h6>
                    <a className="dropdown-item" href="#">
                      Pricing Page
                    </a>
                    <h6 className="imp-h">Contacts</h6>
                    <a className="dropdown-item" href="#">
                      Contacts v.1
                    </a>
                    <a className="dropdown-item" href="#">
                      Contacts v.2
                    </a>
                    <a className="dropdown-item" href="#">
                      Contacts v.3
                    </a>
                    <h6 className="imp-h">Speciality</h6>
                    <a className="dropdown-item" href="#">
                      Speciality v.1
                    </a>
                    <a className="dropdown-item" href="#">
                      Speciality v.2
                    </a>
                  </div>
                </div>
              </div>
              <div className="dropdown ">
                <button
                  className="btn dropdown-toggle nav-li"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Portfolio
                </button>
                <div
                  className="dropdown-menu ddm1"
                  aria-labelledby="dropdownMenuButton"
                >
                  <div>
                    <a className="dropdown-item item-d" href="#">
                      Grid View
                    </a>
                    <a className="dropdown-item item-d" href="#">
                      List View
                    </a>
                    <a className="dropdown-item item-d" href="#">
                      Slider View
                    </a>
                    <a className="dropdown-item item-d" href="#">
                      Single Project
                    </a>
                  </div>
                </div>
              </div>
              <li className="nav-item">
                <a
                  className="nav-link active nav-li"
                  aria-current="page"
                  href="#"
                >
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active nav-li"
                  aria-current="page"
                  href="#"
                >
                  Docs
                </a>
              </li>
            </ul>
            <label class="t-label">Light</label>
            <div className="toggle-switch">
              <label>
                <input type="checkbox" />
                <span className="slider" onClick={toggleTheme}></span>
              </label>
            </div>

            <label class="t-label">Dark</label>
            <button className="cart-btn">
              <i className="cart-logo">
                <BiCart />
              </i>
              Buy now
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
