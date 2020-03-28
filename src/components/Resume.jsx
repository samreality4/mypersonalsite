import React from "react";
import Paper from "@material-ui/core/Paper";
import Img from 'react-image'


function Resume() {
  return (
    <div className="container-fluid row justify-content-center" style={{backgroundColor:"#eda1c1"}}>
      <Paper className="row col-sm-4 justify-content-center m-2" elevation={2}>
        <Img src="/images/resume.jpg" style={{width:"630px", height:"900px"}} />
      </Paper>
    </div>
  );
}

export default Resume;
