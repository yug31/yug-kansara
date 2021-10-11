import React from "react";
import { Container, Row } from "react-bootstrap";
import Connect from "./Connect";

export default function About() {
  return (
    <div className="d-flex flex-column justify-content-around flex-grow-1 min-vh-75">
      <Container className="d-flex flex-column align-items-center justify-content-center col-white">
        <h2 className="col-white">About</h2>
        <div>
          <h2 className="col-white">Yug Kansara</h2>
          <hr style={{ border: "1px solid white", width: "100%" }} />
        </div>
        <div className="hideOnComp d-flex justify-content-center">
          <img
            alt="Yug Kansara"
            style={{ borderRadius: "50%", width: "50%" }}
            src="https://pbs.twimg.com/profile_images/1231466424092090368/HuYsJjJl_400x400.jpg"
            className="mb-4 hideOnComp"
          />
        </div>

        <div className="d-flex aboutMe w-100 justify-content-center mt-4">
          <div
            className="d-flex flex-column aboutMeText "
            style={{ width: "55%" }}
          >
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.ontrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32.
            </p>
            <br />
            <p>
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?"
            </p>
          </div>
          <div className="d-flex flex-column ps-4 " style={{ width: "25%" }}>
            <img
              alt="Yug Kansara"
              style={{ borderRadius: "50%" }}
              src="https://pbs.twimg.com/profile_images/1231466424092090368/HuYsJjJl_400x400.jpg"
              className="mb-4 hideOnMob"
            />
            <div className="hideOnMob">
              <Connect />
            </div>
          </div>
        </div>
        <div
          className="hideOnComp"
          style={{ width: "50%", marginBottom: "1.5rem" }}
        >
          <Connect />
        </div>
      </Container>
    </div>
  );
}
