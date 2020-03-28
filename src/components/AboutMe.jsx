import React from "react";
import Iframe from "react-iframe";
import Paper from "@material-ui/core/Paper";

function AboutMe() {
  return <div className="container-fluid row justify-content-center m-2">
    <Paper className="row col-12 justify-content-center" elevation={2}>
      <Iframe className="m-2" width="100%" height="800px" url="https://samreality4.github.io/mySite/" />
    </Paper>
  </div>;
}

export default AboutMe;
