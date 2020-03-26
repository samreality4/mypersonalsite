import React from "react";
import Paper from "@material-ui/core/Paper";
import Image from 'material-ui-image';

function Project(props) {
var elevation = 1;
function addElevation(){
  elevation = 2;
}
function decreaseElevation(){
  elevation = 1;
}

  return (
    <Paper elevation={elevation} className="col-sm-4 m-3" 
    onMouseEnter={addElevation}
        onMouseLeave={decreaseElevation}>>
     <img className="d-block m-2" style={{width:"302px", height:"206px"}} src={props.image} alt="project images"></img>
      <a href={props.url} rel="noopener noreferrer" target="_blank">
        Link
      </a>
      <a href={props.github} rel="noopener noreferrer" target="_blank">
        Github
      </a>
    </Paper>
  );
}

export default Project;

