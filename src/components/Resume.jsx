import React from "react";
import Paper from "@material-ui/core/Paper";
import Img from "react-image";
import Slide from '@material-ui/core/Slide';

function Resume() {
  return (
    <div className="container-fluid p-0 row m-0 justify-content-center">
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <Paper
        className="row col-sm-6 justify-content-center m-2 shadow-lg"
        style={{ backgroundColor: "#eda1c1" }}
        elevation={2}
      >
        <Img
          className="col-12 m-3"
          src="/images/resume.jpg"
          style={{ width: "600px", height: "1000px" }}
        />
      </Paper>
      </Slide>
    </div>
  );
}

export default Resume;
