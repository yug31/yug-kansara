import React from "react";
import { Container } from "react-bootstrap";
import Iframe from "react-iframe";

export default function CV() {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <Iframe
          url="https://drive.google.com/file/d/1y7fV3dNIYt69IG7GzdQnsiEC76ECtGlG/preview"
          height="100%"
          width="100%"
          display="block"
        />
      </div>
    </Container>
  );
}
