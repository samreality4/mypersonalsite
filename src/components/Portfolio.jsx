import React from "react";
import Paper from "@material-ui/core/Paper";
import {projectArray} from "../projectsData";
import Project from "./Project";
import Grow from '@material-ui/core/Grow';

function Portfolio() {
  return (<div className="container-fluid p-0 row m-0 justify-content-center text-center" >
    <Grow in={true} >
    <Paper className="row justify-content-center m-4 shadow-lg" style={{backgroundColor: "#fab2ac"}} elevation={2}>
      {projectArray.map(item => {
        return (
          <Project name={item.name} id={item.id} image={item.image} url={item.url} github={item.github} />
        );
      })}
    </Paper>
    </Grow>
    </div>
  
  );
}

export default Portfolio;
