import React from "react";
import "./style.css";

function ContactPanel(props) {
    return (
        
            <div className="col-sm-6 gy-3" style="padding-left: 30%">
                <div className="card" style="padding-bottom: 10px; width: 100px;">
                    <div className="card-body" style="text-align: center; padding-bottom: 10px;">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.message}</p>
                        <a href={props.link} className="btn btn-success contact-buttons"
                            id="phone-button" title={props.link}><img src={props.image}
                                alt={props.alt} />
                        </a>

                    </div>
                </div>
            </div>
        

    );
}

export default ContactPanel;