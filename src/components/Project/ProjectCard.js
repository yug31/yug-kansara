import React, { useState, useRef, useEffect } from "react";
import { Card, Button, Col } from "react-bootstrap";

export default function ProjectCard(props) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");
  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    console.log("Front Height:" + frontHeight);
    console.log("Back Height:" + backHeight);
    setHeight(Math.max(frontHeight, backHeight, 100));
  }

  useEffect(() => {
    window.addEventListener("load", setMaxHeight);
    return () => window.removeEventListener("load", setMaxHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => window.removeEventListener("resize", setMaxHeight);
  }, []);
  return (
    <div
      className={`${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
      style={{ height: height, marginBottom: "1rem", marginTop: "1rem" }}
    >
      <Col style={{ paddingLeft: "0", paddingRight: "0" }}>
        <Card
          className="project-card"
          style={{ height: height, backgroundColor: "#c0e9effd" }}
        >
          <Card.Body>
            <div className="card-front d-flex justify-content-center ">
              <div
                ref={frontEl}
                className="d-flex flex-column justify-content-center align-items-center  pt-3 pb-4 ps-3 pe-3"
              >
                <div className="d-flex align-items-center">
                  <h2>{props.title}</h2>{" "}
                  <a
                    className="mb-2 ms-2"
                    style={{
                      color: "#1c3f7e",
                      textDecoration: "none",
                    }}
                    href={props.link}
                  >
                    <i class="fas fa-link" style={{ fontSize: "1.5rem" }}></i>
                  </a>
                </div>

                <div className="d-flex">
                  {props.skills.map((skill, index) => {
                    return (
                      <h6
                        key={index}
                        style={{ border: "0.15rem solid black" }}
                        className="ms-1 me-1 p-2"
                      >
                        {skill}
                      </h6>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="card-back">
              <Card.Text
                ref={backEl}
                className="d-flex justify-content-center  pt-3 pb-4 ps-3 pe-3"
              >
                {props.desc}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
