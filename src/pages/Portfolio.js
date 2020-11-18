import React from "react";
import { projectArray } from "../projectsData";
import Project from "../components/Project";

function Portfolio() {
  return (
    <div className="container-fluid p-0 row m-0 mb-5 justify-content-center text-center">
      {projectArray.map(item => {
        return (
          <Project
            name={item.name}
            projectType={item.projectType}
            id={item.id}
            image={item.image}
            imageOnHover={item.imageOnHover}
            url={item.url}
            urltwo={item.url2}
            github={item.github}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default Portfolio;
