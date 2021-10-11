import React from "react";
import { Container } from "react-bootstrap";

export default function Landing() {
  return (
    <div className="d-flex flex-column justify-content-around flex-grow-1 min-vh-75">
      <Container className="d-flex flex-column flex-xl-row flex-lg-row h-50 w-100 align-items-center justify-content-center text-light">
        <div className="d-flex justify-content-center my-img-div">
          <img
            src="dp.jpg"
            alt="dp"
            className="my-img"
            style={{
              borderRadius: "50%",
              border: "1px solid white",
              padding: "0.8rem",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-around align-items-center align-items-xl-start align-items-lg-start my-info">
          <h1>My Name is Yug.</h1>
          <h1>Software Developer</h1>
          <h6 className="mt-4">SDE at Amazon Web Services</h6>
        </div>
      </Container>
      <Container className="d-flex flex-column flex-xl-row flex-lg-row w-100 align-items-center justify-content-around text-light">
        <div className="d-flex flex-column align-items-center my-info">
          <h6>Hobbies</h6>
          <p>Web Development, Tennis, Football</p>
        </div>
        <div className="w-30 d-flex flex-column align-items-center my-info">
          <h6>Email id</h6>
          <p>yugkansara@gmail.com</p>
        </div>
      </Container>
    </div>
  );
}
