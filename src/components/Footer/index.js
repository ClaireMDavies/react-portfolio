import React from "react";
import "./style.css";
import twitter from "../../img/twitter.png";
import facebook from "../../img/facebook.png";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";


function Footer() {
    return (


        <footer className="footer">

            <div className="container-fluid">
                <nav className="navbar  navbar-dark bg-success">
                    <a href="https://twitter.com/C_M_Davies" className="navbar-brand"> <img src={twitter}
                        alt="twitter icon" /></a>
                    <a href="https://www.facebook.com/claire.davies.7106" className="navbar-brand"> <img src={facebook}
                        alt="facebook icon" /></a>
                    <a href="https://www.linkedin.com/in/claire-davies-53835182/" className="navbar-brand" ><img
                        src={linkedin} alt="linkedin icon" /></a>
                    <a href="https://github.com/ClaireMDavies" className="navbar-brand" ><img src={github}
                        alt="github icon" /></a>
                </nav>
            </div>

            <span className="copyright">© 2021 All Rights Reserved</span>
        </footer>
    );
}

export default Footer;
