import React from "react";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";

function Resume() {
  return (
    <div className="container-fluid p-0 row m-0 justify-content-center">
      <Grow in={true}>
        <Paper
          className="row p-0 col-lg-8 col-sm-10 col-11 justify-content-center m-4 shadow-lg"
          style={{ backgroundColor: "#eda1c1" }}
          elevation={2}
        >
          <a
            className="m-3"
            href="https://drive.google.com/open?id=1OsUaj0mA3fvK-_KgZ4k2Pmw9nrLOJkvr"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="resume"
              className="img-fluid w-100"
              src={process.env.PUBLIC_URL + "/images/resume.png"}
            />
          </a>
          
        </Paper>
      </Grow>
    </div>
  );
}

export default Resume;
