import React from "react";
import "./style.css";

function ContactPanel(props) {
    return (
        <div class="row">
            <div class="col-sm-6 gy-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.message}</p>
                        <a href={props.link} class="btn btn-success contact-buttons"
                            id="phone-button" title={props.link}><img src={props.image}
                                alt={props.alt} />
                        </a>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContactPanel;