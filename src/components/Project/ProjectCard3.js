import React, { useState, useRef, useEffect } from "react";
import { Card, Button, Col } from "react-bootstrap";

export default function ProjectCard3() {
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
        <Card className="project-card " style={{ height: height }}>
          <Card.Body>
            <div className="card-front d-flex justify-content-center">
              <div
                ref={frontEl}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <h2>Title</h2>

                <Button variant="primary">Go somewhere</Button>
              </div>
            </div>

            <div className="card-back">
              <Card.Text
                ref={backEl}
                className="d-flex justify-content-center pt-3 pb-4 ps-3 pe-3"
              >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
