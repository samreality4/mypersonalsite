import React from "react";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import { Document } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
  return (
    <div className="container-fluid p-0 row m-0 justify-content-center">
      <Grow in={true}>
        <Paper
          className="row col-sm-6 justify-content-center m-4 shadow-lg"
          style={{ backgroundColor: "#eda1c1" }}
          elevation={2}
        >
          <Document file="resume.pdf"></Document>

          {/* <img
            alt="resume"
            className="col-12 m-3"
            src="/images/resume.jpg"
            style={{ width: "600px", height: "1000px" }}
          /> */}
        </Paper>
      </Grow>
    </div>
  );
}

export default Resume;
