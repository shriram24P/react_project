import React from 'react'
import "./styles.css"
import {BsBootstrapFill} from "react-icons/bs"
import {AiFillFileText} from "react-icons/ai"
import {FaMobileAlt} from "react-icons/fa"
import {MdOutlineTouchApp} from "react-icons/md"
import {ImHtmlFive} from "react-icons/im"
import {FaNodeJs} from "react-icons/fa"
import {SiSass} from "react-icons/si"
import {SiJavascript} from "react-icons/si"


const MoreSiliconFeatures = () => {
  return (
    <>
    <h2 id="heading1">More Silocon Features</h2>
    <div className='card-name'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col col-main2">
            <div className="card2">
                <i className='logo'><BsBootstrapFill/></i>
             </div>
                <div className="card-body">
                <h5 className="card-t2">Built with Bootstrap 5</h5>
                <p>Silicon is the powerful front-end solution based on Bootstrap 5 — the world’s most popular responsive, mobile-first front-end component library.</p>
                 </div>
            </div>
            <div className="col col-main2">
            <div className="card2">
            <i className='logo'><AiFillFileText/></i>
            </div>
                <div className="card-body">
                <h5 className="card-t2">Detailed Documentation</h5>
                <p>Download package includes the documentation that covers all crucial information about how to get started, customize template and components usage.</p>
                
                </div>
            </div>
            <div className="col col-main2">
            <div className="card2">
            <i className='logo'><FaMobileAlt/></i>
                </div>
                <div className="card-body">
                <h5 className="card-t2">Mobile Freindly Interface</h5>
                <p>It's not a surprise that nowadays over 80% of users surf the inernet using their mobile devices. Silicon is 100% responsive and optimized for small touch screens.</p>
                
                
            </div>
            </div>
            <div className="col col-main2">
            <div className="card2">
            <i className='logo'><MdOutlineTouchApp/></i>
                </div>
                <div className="card-body">
                <h5 className="card-t2">Touch-Enabled Sliders</h5>
                <p>In the era of touch screens it's important to ensure great user experience on mobile, especially when it comes to such frequently used interface component as slider.</p>
                
                </div>
            
            </div>

            <div className="col col-main2">
            <div className="card2">
            <i className='logo'><ImHtmlFive/></i>
                </div>
                <div className="card-body">
                <h5 className="card-t2">W3C Valid HTML Code</h5>
                <p>All HTML files are checked via W3C validator to ensure 100% valid code. As you probably know invalid HTML limits innovation, but Silicon is innovative at its core.</p>
                </div>
            
            </div>
            <div className="col col-main2">
            <div className="card2">
            <i className='logo'><FaNodeJs/></i>
                </div>
                <div className="card-body">
                <h5 className="card-t2">Kick-Start Your Development</h5>
                <p>Start your development process fast and easy with Node.js and Gulp setup. Configuration files are included in download package. Full tasks automation.</p>
                
                </div>
            
            </div>
            <div className="col col-main2">
            <div className="card2">
            <i className='logo'><SiSass/></i>
                </div>
                <div className="card-body">
                <h5 className="card-t2">Easy to Customize with Sass</h5>
                <p>Silicon is built using Sass. Easily change colors, typography and much more. It is the most mature, stable, and powerful CSS extension language in the world.</p>
                
                </div>
            
            </div>
            <div className="col col-main2">
            <div className="card2">
            <i className='logo'><SiJavascript/></i>
                </div>
                
                <div className="card-body">
                <h5 className="card-t2">Future Proof Java-Script</h5>
                <p>Silicon core scripts as well as all dependencies are written in vanilla JS. And now with Bootstrap 5 we finally drop jQuery and use ES6 modules.</p>
                </div>
            
            </div>
        </div> 
    </div>
    <br /><br />
    <hr />
    </>
  )
}

export default MoreSiliconFeatures