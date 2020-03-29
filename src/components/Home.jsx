import React from "react";
import Iframe from "react-iframe";
import Paper from "@material-ui/core/Paper";
import Slide from '@material-ui/core/Slide';

function Home() {
  return (
    <div className="container-fluid p-0 row m-0 justify-content-center">
       <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <Paper
        className="row col-11 justify-content-center m-2 shadow-lg"
        style={{ backgroundColor: "#dbe2ef" }}
        elevation={2}
      >
        <Iframe
          className="m-2"
          width="100%"
          height="800px"
          url="https://samreality4.github.io/mySite/"
        />
      </Paper>
      </Slide>
    </div>
    
  );
}

export default Home;
