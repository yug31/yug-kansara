import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { projectList } from "./ProjectList";

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
            {projectList.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  title={project.title}
                  link={project.link}
                  desc={project.desc}
                  skills={project.skills}
                />
              );
            })}
          </Row>
        </Container>
      </Container>
    </div>
  );
}
