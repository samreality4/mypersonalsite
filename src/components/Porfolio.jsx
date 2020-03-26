import React from "react";
import Paper from "@material-ui/core/Paper";
import {projectArray} from "../projectsData";
import Project from "./Project";

function Porfolio() {
  return (
    <Paper className="row col-12 text-center m-2" elevation={2}>
      {projectArray.map(item => {
        return (
          <Project image={item.image} url={item.url} github={item.github} />
        );
      })}
    </Paper>
  );
}

export default Porfolio;
