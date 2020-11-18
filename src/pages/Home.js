import React from "react";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import { Button } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

function Home() {
  const animeTopCloud = useSpring({
    from: {
      display: "inline-block",
      position: "absolute",
      right: "50%",
      bottom: "50%",
      opacity: "0",
    },
    to: async (next) => {
      while (1) {
        await next({
          right: "60%",
          opacity: "1",
        });
        await next({
          right: "70%",
          opacity: "0",
        });
      }
    },
    config: { duration: 10000 },
  });

  const animeBottomCloud = useSpring({
    from: {
      display: "inline-block",
      position: "absolute",
      left: "50%",
      bottom: "30%",
      opacity: "0",
    },
    to: async (next) => {
      while (1) {
        await next({
          left: "60%",
          opacity: "1",
        });
        await next({
          left: "70%",
          opacity: "0",
        });
      }
    },
    config: { duration: 10000 },
  });

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div className="container-fluid p-0 row m-0 justify-content-center">
      <Grow in={true} timeout={{ appear: 1000, enter: 1000, exit: 1000 }}>
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
              paddingTop: "100px",
            }}
          >
            <h1>I am Sam.</h1>
            <h2>Software Developer</h2>
            <animated.div style={animeTopCloud}>
              <img
                className="d-inline top-cloud img-fluid"
                src={process.env.PUBLIC_URL + "/images/cloud.png"}
                alt="cloud-png"
              />
            </animated.div>
            <animated.div style={animeBottomCloud}>
              <img
                className="bottom-cloud img-fluid"
                src={process.env.PUBLIC_URL + "/images/cloud.png"}
                alt="cloud-png"
              />
            </animated.div>
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
              <div>
                <animated.div
                  onMouseMove={({ clientX: x, clientY: y }) =>
                    set({ xys: calc(x, y) })
                  }
                  onMouseLeave={() => set({ xys: [0, 0, 1] })}
                  style={{ transform: props.xys.interpolate(trans) }}
                >
                  <img
                    className="profile-image mt-2"
                    src={process.env.PUBLIC_URL + "/images/profile.jpg"}
                    alt="profile"
                    style={{
                      height: "200px",
                      width: "200px",
                      marginTop: "35px",
                      marginBottom: "50px",
                      borderRadius: "50%",
                      boxShadow: "10px 10px 30px #8dc6ff",
                    }}
                  />
                </animated.div>
              </div>
              <h2>Hello. 你好. こんにちわ. Bonjour.</h2>
              <p>I am a builder and a problem solver.</p>
            </div>
            <hr />
            {/* <div className="story  container-fluid row col-lg-8 col-md-12 mx-auto justify-content-center mt-4 mb-4">
              <h2>My Story.</h2>
              <p className="text-left">
                &ensp; I first started programming because I wanted to make
                "that" app. I started taking online Android Development courses
                and quickly fell in love with the possibilities and endless
                amount of education that programming can bring. However, I was
                not brave enough to quickly make the career switch as I have
                been an accountant for a while. That was 2017. However, I didn't
                stop learning. I continue to learn about Android and IOS
                Development in my free time. Fast forward to 2020, after moving
                to a new job in a tech company, my passion for programming
                became overwhelming. Seeing and listening to my software
                engineer co-workers in meetings and being excited about their
                projects was mental torturing. I want to be there too. I knew I had
                to make a decision. So here I am in this trying times, putting
                in my (effort > 110%) trying to transition in my 30s.
              </p>
            </div>
            <hr /> */}
            <div className="skills mt-5">
              <h2>My Skills.</h2>
              <div className="skill-one container-fluid row col-lg-8 col-md-12 mx-auto justify-content-center mt-4 mb-4">
                <img
                  src={process.env.PUBLIC_URL + "/images/coding.gif"}
                  alt="coding"
                  style={{
                    width: "250px",
                    height: "200px",
                    borderRadius: "15%",
                  }}
                />
                <div className="col-lg-8 col-md-7">
                  <h3>Software Development</h3>
                  <p className="text-left">
                    &ensp; I personally enjoy building helpful tools and fun games, squashing
                    annoying bugs, and fixing broken things. I have built a restaurant
                    randomizer android app, co-oped in building an NBA player
                    stats app with my software engineering buddy, started a
                    website for coders to record their solutions to bugs, and
                    deployed a mobile app that records and reminds the user of
                    expired and expiring items. Hoping to build my own
                    accounting software suite one day(with VR or AR)!
                  </p>
                </div>
              </div>

              <div className="skill-two container-fluid row col-lg-8 col-md-12 mx-auto justify-content-center mt-4 mb-4">
                <div className="col-lg-8 col-md-7">
                  <h3>Hook Shot</h3>
                  <p className="text-left">
                    &ensp; I am proficient in doing hook shots from either left
                    or right hand. I have been practicing this shot since I was
                    13 years old. I am known as Kareem by my peers. Though I am
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
                    borderRadius: "15%",
                  }}
                />
              </div>
            </div>
            <hr />
            <div className="contact-me mt-5">
              <h2>Get In Touch.</h2>

              <a
                href="mailto:samaudacity2@gmail.com"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#3f72af", color: "#FFFF" }}
                >
                  CONTACT ME
                </Button>
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
