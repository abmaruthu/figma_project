import React from "react";
import { Button, Container } from "react-bootstrap";
import hr from "../assets/hr.svg";
import data from "../assets/data.png";
import product from "../assets/product.svg";
import frontend from "../assets/frontend.svg";
// import Product_manager from '../components/Product_manager'

export const Content = () => {
  return (
    <div className="mt-5 pt-5">
      <Container className="">
        <div className="content">
          <h1 className="fw-bolder">
            Join hands with the global brand <br />
            and make a difference in your career
          </h1>
        </div>
        <div className="mt-5 pt-5">
          <div className="content1">
            <div>
              <Button className="cbotton">
                <h4>ALL</h4>
              </Button>
            </div>
            <div>
              <h4>EXPRIENCED</h4>
            </div>
            <div>
              <h4>ENTRY LEVEL</h4>
            </div>
            <div>
              <h4>FRESHERS</h4>
            </div>
            <div>
              <h4>INTERNSHIP</h4>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex mt-5 pt-5">
            <div className="content2 d-flex">
              <img
                src={product}
                alt="product"
                width={70}
                height={70}
                className="img2"
              />
              <h4 className="fw-semibold ms-2 pt-4 ps-4 me-2">
                <a href="/product">Product Manager</a>
              </h4>
            </div>
            <div className="content2 ms-4 d-flex">
              <img
                src={frontend}
                alt="frontend"
                width={70}
                height={70}
                className="img2"
              />
              <h4 className="fw-semibold ms-2 pt-4 ps-4 me-2">
                Frontend developer
              </h4>
            </div>
            <div className="content2 ms-4 d-flex">
              <img
                src={data}
                alt="data"
                width={70}
                height={70}
                className="img2"
              />
              <h4 className="fw-semibold ms-2 pt-4 ps-4 me-2">Data Analyst</h4>
            </div>
          </div>
          <div className="d-flex mt-4 ">
            <div className="content2  d-flex">
              <img src={hr} alt="hr" width={70} height={70} className="img2" />
              <h4 className="fw-semibold ms-2 pt-4 ps-4 me-2">HR Executives</h4>
            </div>
            <div className="content2  ms-4 d-flex">
              <svg
                className="img2"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 60 59"
                fill="none"
              >
                <ellipse
                  cx="29.8319"
                  cy="29.3063"
                  rx="29.4247"
                  ry="28.8993"
                  fill="#E5F5EB"
                />
              </svg>
              <h4 className="fw-semibold ms-2 pt-4 ps-4 me-2">
                Full Stack Intern
              </h4>
            </div>
            <div className="content2 ms-4 d-flex">
              <svg
                className="img2"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 60 59"
                fill="none"
              >
                <ellipse
                  cx="29.8319"
                  cy="29.3063"
                  rx="29.4247"
                  ry="28.8993"
                  fill="#FFE4E4"
                />
              </svg>
              <h4 className="fw-semibold ms-2 pt-4 ps-4 me-2">Data Science</h4>
            </div>
          </div>
          <div className="d-flex mt-4">
            <div className="content2 d-flex">
              <svg
                className="img2"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 60 59"
                fill="none"
              >
                <ellipse
                  cx="29.8319"
                  cy="29.3063"
                  rx="29.4247"
                  ry="28.8993"
                  fill="#E4F4E6"
                />
              </svg>
              <h4 className="fw-semibold ms-2 pt-2 ps-4 me-2">
                Python Developer Intern
              </h4>
            </div>
            <div className="content2 ms-4 d-flex">
              <svg
                className="img2"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 60 59"
                fill="none"
              >
                <ellipse
                  cx="29.8319"
                  cy="29.3063"
                  rx="29.4247"
                  ry="28.8993"
                  fill="#EDEDFF"
                />
              </svg>
              <h4 className="fw-semibold ms-2 pt-4 ps-4 me-2">
                UI / UX Designer
              </h4>
            </div>
            <div className="content2 ms-4 d-flex">
              <svg
                className="img2"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 60 59"
                fill="none"
              >
                <ellipse
                  cx="29.8319"
                  cy="29.3063"
                  rx="29.4247"
                  ry="28.8993"
                  fill="#FFFADC"
                />
              </svg>
              <h4 className="fw-semibold ms-3 pt-2 ps-4 me-2">
                Digital Marketing Executive
              </h4>
            </div>
          </div>
          <div className="d-flex mt-4 ">
            <div className="content2 d-flex">
              <svg
                className="img2"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 60 59"
                fill="none"
              >
                <ellipse
                  cx="29.8319"
                  cy="29.3063"
                  rx="29.4247"
                  ry="28.8993"
                  fill="#EDEDFF"
                />
              </svg>
              <h4 className="fw-semibold ms-2 pt-4 ps-4 me-2">QA Testing</h4>
            </div>
            <div className="content2 ms-4 d-flex">
              <svg
                className="img2"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 60 59"
                fill="none"
              >
                <ellipse
                  cx="29.8319"
                  cy="29.3063"
                  rx="29.4247"
                  ry="28.8993"
                  fill="#CBFFF8"
                />
              </svg>
              <h4 className="fw-semibold ms-2 pt-4 ps-4 me-2">
                Business Development{" "}
              </h4>
            </div>
            <div className="content2 ms-4 d-flex">
              <svg
                className="img2"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 60 59"
                fill="none"
              >
                <ellipse
                  cx="29.8319"
                  cy="29.3063"
                  rx="29.4247"
                  ry="28.8993"
                  fill="#FFE7DF"
                />
              </svg>
              <h4 className="fw-semibold ms-2 pt-4 ps-4 me-2">
                Sales Executive
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
