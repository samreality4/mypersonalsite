import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grow from "@material-ui/core/Grow";

function Project(props) {
  const [elevation, setElevation] = useState(2);
  const [img, setImg] = useState(props.image);

  function onMouseEnter() {
    setElevation(15);
    setImg((preImg) =>
      preImg === props.imageOnHover ? preImg : props.imageOnHover
    );
  }

  function onMouseLeave() {
    setElevation(2);
    setImg((preImg) => (preImg === props.image ? preImg : props.image));
  }

  return (
    <div
      key={props.key}
      id={props.id}
      className="row p-0 col-lg-4 col-md-6 mt-4 mb-5 justify-content-center"
    >
      <Grow in={true} timeout={{ appear: 1000, enter: 1000, exit: 1000 }}>
        <Paper
          className="row p-3 justify-content-center"
          style={{ backgroundColor: "#fab2ac" }}
          elevation={elevation}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Paper className="shadow" elevation={2} style={{ width: "20rem" }}>
            <h2 className="project-text">{props.name}</h2>
            <img
              className="d-block m-2"
              style={{ width: "302px", height: "250px" }}
              src={img}
              alt="project images"
            ></img>
            <p>
              <a href={props.url} rel="noopener noreferrer" target="_blank">
                {props.projectType === "mobile"
                  ? "Google Play Store"
                  : props.projectType === "game"
                  ? false
                  : "Link"}
              </a>
            </p>
            {props.github ? (
              <p>
                <a
                  href={props.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </p>
            ) : null}
            {props.urltwo ? (
              <p>
                <a
                  href={props.urltwo}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {props.projectType === "mobile" ? "Apple App Store" : "Link"}
                </a>
              </p>
            ) : null}

            <Divider />
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
