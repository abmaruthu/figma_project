import React from "react";
import { Container } from "react-bootstrap";
import footer from "../assets/footer.svg";

export const Footer = () => {
  return (
    <Container className="pb-5 mb-5 mt-5 pt-5 vector1 ">
      <div className="footer mt-5 pt-5 mb-5 d-flex pb-5">
        <div className="footer1">
          <h2 className="pt-3 ms-4 fw-bold">Don't see any relevant opening?</h2>
          <h4 className="pt-5 ms-4">
            Mail us at <span className="text-primary">careers@xyz.ai</span> with
            the profile name as the subject. <br />( Example: Applying for
            Program Manager role. )
          </h4>
        </div>
        <div className="footer2">
                  <img src={footer} alt=""  />
                </div>
      </div>
    </Container>
  );
};
