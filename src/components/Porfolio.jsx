import React from "react";
import Paper from "@material-ui/core/Paper";
import {projectArray} from "../projectsData";
import Project from "./Project";

function Porfolio() {
  return (<div className="container-fluid row justify-content-center text-center" style={{backgroundColor: "#fab2ac"}}>
    <Paper className="row justify-content-center m-2" elevation={2}>
      {projectArray.map(item => {
        return (
          <Project name={item.name} id={item.id} image={item.image} url={item.url} github={item.github} />
        );
      })}
    </Paper>
    </div>
  
  );
}

export default Porfolio;
