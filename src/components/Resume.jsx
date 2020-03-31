import React from "react";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";


function Resume() {
  return (
    <div className="container-fluid p-0 row m-0 justify-content-center">
      <Grow in={true}>
        <Paper
          className="row col-sm-6 justify-content-center m-4 shadow-lg"
          style={{ backgroundColor: "#eda1c1" }}
          elevation={2}
        >
      <a className="row justify-content-center" href="https://drive.google.com/file/d/1hTnCGPq6UmuCk0KAQTKLUQ7VtqcowSV3/view" rel="noopener noreferrer" target="_blank"><img
            alt="resume"
            className="col-12 m-3"
            src={process.env.PUBLIC_URL + "/images/resume.jpg"}
          /> </a>
        </Paper>
      </Grow>
    </div>
  );
}

export default Resume;
