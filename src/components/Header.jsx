import React from "react";
import { Button, Container } from "react-bootstrap";
import section from '../assets/multiple_svg.svg'

const Header = () => {
  return (
    <div className="">
      <Container className="d-lg-flex">
        <div className="pt-5 mt-5 header1">
          <div className="pt-5 mt-5">
            <h3>Careers at</h3>
          </div>
          <div>
            <h1 className=" fw-bolder xyz" width={100} height={100}>
              XYZ
            </h1>
          </div>
          <div>
            <h6>Are you Passionate to join about emerging technology's?</h6>
          </div>
          <div>
            <Button className="botton">Join Now</Button>
          </div>
        </div>

        <div className="header2">
          <img src={section} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Header;
