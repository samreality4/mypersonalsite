import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";

function BottomBar() {
  return (
    <div className="container fixed-bottom">
      <div className="row align-content-center">
        <AppBar
          position="relative"
          className="col-md-7 col-10 mx-auto align-content-center"
          style={{ backgroundColor: "#beebe9" ,bottom:"20px", alignItems: "center"}}
        >
          <Toolbar>
            <Button className="mr-2" variant="outlined">Porfolio</Button>
            <Button className="mr-2" variant="outlined">Resume</Button>
            <Button variant="outlined">About Me</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default BottomBar;
