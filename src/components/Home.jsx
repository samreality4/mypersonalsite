import React from "react";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import { Button } from "@material-ui/core";

function Home() {
  return (
    <div className="container-fluid p-0 row m-0 justify-content-center">
      <Grow in={true}>
        <Paper
          className="home row col-11 justify-content-center m-4 shadow-lg"
          style={{ backgroundColor: "#dbe2ef" }}
          elevation={2}
        >
          <div
            className="top-container container-fluid text-center"
            style={{
              backgroundColor: "#dbe2ef",
              position: "relative",
              paddingTop: "100px"
            }}
          >
            <h1>I am Sam.</h1>
            <h2>Web App Developer</h2>
            <img
              className="d-inline top-cloud img-fluid"
              src={process.env.PUBLIC_URL + "/images/cloud.png"}
              alt="cloud-png"
              style={{ position: "relative", right: "-15%", bottom: "35%" }}
            />
            <div>
              <img
                className="bottom-cloud img-fluid"
                src={process.env.PUBLIC_URL + "/images/cloud.png"}
                alt="cloud-png"
                style={{ position: "relative", left: "-15%", bottom: "20%" }}
              />
            </div>
            <img
              className="mountain img-fluid mx-auto"
              src={process.env.PUBLIC_URL + "/images/mountain.png"}
              alt="mountain"
            />
          </div>

          <div
            className="middle-container text-center mt-2 mb-5"
            style={{ backgroundColor: "#FFFF", padding: "50px" }}
          >
            <div className="profile mb-5">
              <img
                className="profile-image mt-2"
                src={process.env.PUBLIC_URL + "/images/profile.jpg"}
                alt="profile"
                style={{
                  height: "200px",
                  width: "200px",
                  marginTop: "35px",
                  borderRadius: "50%"
                }}
              />
              <h2>Hello. 你好. こにちわ. Bonjour.</h2>
              <p>
                I am a Web App Developer I was an accountant. I ❤️ playing
                basketball.
              </p>
            </div>
            <hr />
            <div className="skills mt-5">
              <h2>My Skills.</h2>
              <div className="skill-one container-fluid row col-lg-8 col-md-12 mx-auto justify-content-center mt-4 mb-4">
                <img
                  src={process.env.PUBLIC_URL + "/images/coding.gif"}
                  alt="coding"
                  style={{
                    width: "250px",
                    height: "200px",
                    borderRadius: "15%"
                  }}
                />
                <div className="col-lg-8 col-md-7">
                  <h3>App Development</h3>
                  <p>
                    I have been coding since 2017 while I was working as an
                    accountant. My first intro to the coding world was through
                    the Udacity Android Developer Nanodegree and I deployed a
                    restaurant randomizer Android App called ChoosU in the
                    Google Play Store. From then on, I have expanded my
                    curiousity to IOS development and Full Stack Web
                    development.
                  </p>
                </div>
              </div>
              <div className="skill-two container-fluid row col-lg-8 col-md-12 mx-auto justify-content-center mt-4 mb-4">
                <div className="col-lg-8 col-md-7">
                  <h3>Hook Shot</h3>
                  <p>
                    I am proficient in doing hook shots from either left or
                    right hand. I have been practicing this shot since I was 13
                    years old. I am known as Kareem by my peers. Though I am
                    also working on my stepback threes and other range games,
                    but my hoopshot has proven to be my go to move.{" "}
                  </p>
                </div>
                <img
                  src={process.env.PUBLIC_URL + "/images/hookshot.gif"}
                  alt="hookshot"
                  style={{
                    width: "250px",
                    height: "200px",
                    borderRadius: "15%"
                  }}
                />
              </div>
            </div>
            <hr />
            <div className="contact-me mt-5">
              <h2>Get In Touch</h2>
              <p>I am always ready to learn and take on different projects.</p>

              <a
                href="mailto:samaudacity2@gmail.com"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#3f72af", color: "#FFFF" }}
                >CONTACT ME</Button>
              </a>

              <br />
            </div>
          </div>
        </Paper>
      </Grow>
    </div>
  );
}

export default Home;
