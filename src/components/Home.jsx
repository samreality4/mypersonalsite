import React from "react";
import Iframe from "react-iframe";
import Paper from "@material-ui/core/Paper";
import Grow from '@material-ui/core/Grow';

function Home() {
  return (
    <div className="container-fluid p-0 row m-0 justify-content-center">
       <Grow in={true}>
      <Paper
        className="row col-11 justify-content-center m-4 shadow-lg"
        style={{ backgroundColor: "#dbe2ef" }}
        elevation={2}
      >
        <Iframe
          className="m-4"
          width="100%"
          height="800px"
          url="https://samreality4.github.io/mySite/"
        />
      </Paper>
      </Grow>
    </div>
    
  );
}

export default Home;
