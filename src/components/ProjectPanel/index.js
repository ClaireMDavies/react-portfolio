import React from "react";



function ProjectPanel(props) {
    return (
        <div className="col-sm-4 position gy-3">
            <div className="card" style={{width: "100%", position: "relative", margin: 1,  padding: 10}} >
                <img src={props.image} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-body">
                    <a href={props.repository} className="card-link" style={{ color: "green"}}>Github Link</a>
                    <a href={props.deployed} className="card-link" style={{ color: "green"}}>Deployed application</a>
                </div>
            </div>
        </div>

    );
}

export default ProjectPanel;