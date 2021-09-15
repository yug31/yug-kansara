import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import ProjectCard2 from "./ProjectCard2";
import ProjectCard3 from "./ProjectCard3";

export default function Projects() {
  return (
    <div className="d-flex flex-column justify-content-around flex-grow-1 min-vh-75">
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="col-white">Projects</h1>
        <Container>
          <Row
            xs={1}
            md={2}
            xl={3}
            style={{
              marginLeft: "0",
              marginRight: "0",
            }}
            className="justify-content-center align-items-center"
          >
            <ProjectCard />
            <ProjectCard2 />
            <ProjectCard3 />
            <ProjectCard />
            <ProjectCard />
          </Row>
        </Container>
      </Container>
    </div>
  );
}
