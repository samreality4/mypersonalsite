import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import Grow from "@material-ui/core/Grow";

function Project(props) {
  return (
    <div
      key={props.key}
      id={props.id}
      className="row p-0 col-lg-4 col-md-6 mt-4 justify-content-center"
    >
       <Grow in={true} >
      <Paper className="row p-3 justify-content-center shadow-lg" style={{backgroundColor: "#fab2ac"}} elevation={2}>
      <Paper className="shadow" elevation={2} style={{ width: "20rem" }}>
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
      </Paper>
       </Grow>
    </div>
  );
}

export default Project;
