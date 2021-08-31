import React from "react";
import NavigationBar from "./NavigationBar";
import { Container } from "react-bootstrap";
import "../css/main.scss";
import Landing from "./Landing";

export default function App() {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title" className="overflow-auto d-flex flex-column">
        <NavigationBar />
        <Landing />
      </div>
    </>
  );
}
