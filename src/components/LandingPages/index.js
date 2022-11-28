import React from "react";
import "./styles.css";

const LandingPages = () => {
  return (
    <>
    <div className="xyz">
    
    <h2 id="heading1">Landing Page</h2>
    <p id="heading2">Choose from pre-built layouts of our unique landing pages</p>
    
   
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col col-main">
            <div className="card">
                <img src="./images/app-showcase.jpg" className="card-img-top" alt="..." />
             </div>
                <div className="card-body">
                <h5 className="card-t">App Showcase</h5>
                
                 </div>
            </div>
            <div className="col col-main">
            <div className="card">
                <img src="./images/saas-v1.jpg" className="card-img-top" alt="..." />
            </div>
                <div className="card-body">
                <h5 className="card-t">SaaS v.1</h5>
                
                </div>
            </div>
            <div className="col col-main">
            <div className="card">
                <img src="./images/saas-v2.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                <h5 className="card-t">SaaS v.2</h5>
                
                
            </div>
            </div>
            <div className="col col-main">
            <div className="card">
                <img src="./images/financial.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                <h5 className="card-t">Financial Consulting</h5>
                
                </div>
            
            </div>
            <div className="col col-main">
            <div className="card">
                <img src="./images/medical.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                <h5 className="card-t">Medical</h5>
                
                </div>
            
            </div>
            <div className="col col-main">
            <div className="card">
                <img src="./images/digital-agency.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                <h5 className="card-t">Digital Agency</h5>
                
                </div>
            
            </div>
            <div className="col col-main">
            <div className="card">
                <img src="./images/conference.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                <h5 className="card-t">Conference</h5>
                
                </div>
            
            </div>
            <div className="col col-main">
            <div className="card">
                <img src="./images/software-company.jpg" className="card-img-top" alt="..." />
                </div>
                
                <div className="card-body">
                <h5 className="card-t">IT (Software) Company</h5>
                
                </div>
            
            </div>
            <div className="col col-main">
            <div className="card">
                <img src="./images/blog-homepage.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                <h5 className="card-t">Blog Homepage</h5>
                
                </div>
            
            </div>
        </div>
    </div>
    </>
  );
};

export default LandingPages;
