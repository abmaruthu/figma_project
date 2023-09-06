import React from "react";
import { Container } from "react-bootstrap";
import exit from "../assets/exit.svg";
import collabrat from "../assets/collabrat.png";
import career from "../assets/career.svg";
import compet from "../assets/compet.png";

export const Hero = () => {
  return (
    <Container className="">
      <div className="hero">
        <h1 className="fw-bolder pb-5 mb-5">Why Choose XYZ?</h1>
      </div>

      <div className="d-flex">
        <div className="hero1 d-flex ">
          <img src={exit} alt="" width={100} height={100} className="img" />
          <p className="exit">Exciting Projects</p>
        </div>
        <div className="hero1 bg1 d-flex ms-3">
          <img
            src={collabrat}
            alt=""
            width={100}
            height={100}
            className="img"
          />
          <p className="exit1">Collaborative Work Environment</p>
        </div>
        <div className="hero1 bg2 d-flex ms-3">
          <img src={career} alt="" width={100} height={100} className="img" />
          <p className="exit2">Career Growth Opportunities</p>
        </div>
        <div className="hero1 bg3 d-flex ms-3">
          <img src={compet} alt="" width={100} height={100} className="img" />
          <p className="exit3">Competitive Compensation</p>
        </div>
      </div>
    </Container>
  );
};
