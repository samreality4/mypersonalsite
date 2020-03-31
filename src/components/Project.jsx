import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';

function Project(props) {
  return (
    <div
      key={props.key}
      id={props.id}
      className="row col-lg-4 col-md-6 justify-content-center"
    >
      <Paper className="m-5 shadow" elevation={2} style={{ width: "20rem" }}>
        <h2 className="project-text">{props.name}</h2>
        <img
          className="d-block m-2"
          style={{ width: "302px", height: "206px" }}
          src={props.image}
          alt="project images"
        ></img>
        {/* <div className="link-text">  */}
        <p>
          <a href={props.url} rel="noopener noreferrer" target="_blank">
            Link
          </a>
        </p>
        <p>
          <a href={props.github} rel="noopener noreferrer" target="_blank">
            Github
          </a>
        </p>
        {/* </div>  */}
        <Divider/>
        <div className="project-text text-left p-4">
          <h5>Description:</h5>
          <p> {props.description}</p>
        </div>
      </Paper>
    </div>
  );
}

export default Project;
