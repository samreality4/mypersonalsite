import React from "react";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

function Project(props) {
  return (
    <div
      key={props.key}
      id={props.id}
      className="row col-lg-4 col-md-6 justify-content-center"
    >
      <Paper className="m-5 shadow" elevation={2} style={{ width: "20rem" }}>
        <h2>{props.name}</h2>
        <img
          className="d-block m-2"
          style={{ width: "302px", height: "206px" }}
          src={props.image}
          alt="project images"
        ></img>
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
        <h5>Description</h5>
        <p></p>
      </Paper>
    </div>
  );
}

export default Project;
