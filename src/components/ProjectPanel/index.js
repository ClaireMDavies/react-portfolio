import React from "react";
import "./style.css";


function ProjectPanel(props) {
    return (
        <div className="col-sm-4 position gy-3">
        <div className="card" >
  <img src={props.image} className="card-img-top" alt={props.alt}/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
  </div>
    <div className="card-body">
    <a href={props.repository} class="card-link">Github Link</a>
    <a href={props.deployed} class="card-link">Deployed application</a>
  </div>
</div>
</div>








        
        
        
                    );
}

export default ProjectPanel;