import React from "react";
import Paper from "@material-ui/core/Paper";


function Project(props) {

    return (
    <div key={props.key} id={props.id} className="row col-lg-4 col-md-6 justify-content-center">
      <Paper className="m-5 shadow" elevation={2} style={{width: "20rem"}}>
    <h1>{props.name}</h1>
        <img
          className="d-block m-2"
          style={{ width: "302px", height: "206px" }}
          src={props.image}
          alt="project images"
        ></img>
        <p><a href={props.url} rel="noopener noreferrer" target="_blank">
          Link
        </a></p>
        <p><a href={props.github} rel="noopener noreferrer" target="_blank">
          Github
        </a></p>
      </Paper>
      </div>
  );
}

export default Project;
