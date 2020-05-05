import React from "react";
import { projectArray } from "../projectsData";
import Project from "./Project";

function Portfolio() {
  return (
    <div className="container-fluid p-0 row m-0 mb-5 justify-content-center text-center">
      {projectArray.map(item => {
        return (
          <Project
            name={item.name}
            id={item.id}
            image={item.image}
            url={item.url}
            github={item.github}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default Portfolio;
