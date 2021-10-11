import React from "react";

export default function Connect() {
  return (
    <div>
      <div
        className="d-flex flex-column mt-4 p-4 align-items-center"
        style={{
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "rgba(255,255,255,0.25)",
        }}
      >
        <div>
          <h6>LET'S CONNECT</h6>
          <hr style={{ border: "1px solid white", width: "100%" }} />
        </div>
        <div>
          <a
            className="col-white"
            style={{
              textDecoration: "none",
            }}
            href="https://www.facebook.com/yug.kansara.31/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="d-flex">
              <i
                class="fab fa-facebook-f"
                style={{ fontSize: "1.5rem", marginRight: "1rem" }}
              ></i>
              <p>Facebook</p>
            </div>
          </a>

          <a
            className="col-white"
            style={{
              textDecoration: "none",
            }}
            href="https://www.instagram.com/yug_kansara/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="d-flex">
              <i
                class="fab fa-instagram"
                style={{ fontSize: "1.5rem", marginRight: "1rem" }}
              ></i>
              <p>Instagram</p>
            </div>
          </a>
          <a
            className="col-white"
            style={{
              textDecoration: "none",
            }}
            href="https://www.linkedin.com/in/yugkansara/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="d-flex">
              <i
                class="fab fa-linkedin-in"
                style={{ fontSize: "1.5rem", marginRight: "1rem" }}
              ></i>
              <p>LinkedIn</p>
            </div>
          </a>
          <a
            className="col-white"
            style={{
              textDecoration: "none",
            }}
            href="https://twitter.com/KansaraYug"
            target="_blank"
            rel="noreferrer"
          >
            <div className="d-flex">
              <i
                class="fab fa-twitter"
                style={{ fontSize: "1.5rem", marginRight: "1rem" }}
              ></i>
              <p>Twitter</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
