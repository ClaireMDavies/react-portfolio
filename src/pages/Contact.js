import React from "react";
import ContactPanel from "../components/ContactPanel";
import emailImage from "../img/email-icon.png";
import phoneImage from "../img/phone-icon.png";
import linkedinImage from "../img/linkedin.png";
import githubImage from "../img/github.png";
import twitterImage from "../img/twitter.png";
import facebookImage from "../img/facebook.png";

function Contact() {

    return (
        <div>
            <div className="container">

                <div className="row">
                    <div className="col-sm">
                        <div className="jumbotron">
                            <h1 className="display-4">Contact Me</h1>

                            <hr className="my-4"></hr>
                            <div className="row">

                                <ContactPanel title="Email" message="Email me" link="mailto:claire.davies@junitech.com?subject=Portfolio query" image={emailImage} alt="email icon" />
                                <ContactPanel title="Phone" message="Call me" link="tel:+44973884367" image={phoneImage} alt="phone icon" />
                                <ContactPanel title="LinkedIn" message="Find me on LinkedIn" link="https://www.linkedin.com/in/claire-m-davies/" image={linkedinImage} alt="linkedin icon" />
                                <ContactPanel title="GitHub" message="Find me on Github" link="https://github.com/ClaireMDavies" image={githubImage} alt="github icon" />
                                <ContactPanel title="Twitter" message="Find me on Twitter" link="https://twitter.com/C_M_Davies" image={twitterImage} alt="twitter icon" />
                                <ContactPanel title="Facebook" message="Find me on Facebook" link="https://www.facebook.com/claire.davies.7106" image={facebookImage} alt="facebook icon" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;