import React from "react";
import Paper from "@material-ui/core/Paper";
import {projectArray} from "../projectsData";
import Project from "./Project";
import Slide from '@material-ui/core/Slide';

function Portfolio() {
  return (<div className="container-fluid p-0 row m-0 justify-content-center text-center" >
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <Paper className="row justify-content-center m-2 shadow-lg" style={{backgroundColor: "#fab2ac"}} elevation={2}>
      {projectArray.map(item => {
        return (
          <Project name={item.name} id={item.id} image={item.image} url={item.url} github={item.github} />
        );
      })}
    </Paper>
    </Slide>
    </div>
  
  );
}

export default Portfolio;
