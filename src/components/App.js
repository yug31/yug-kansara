import React from "react";
import NavigationBar from "./NavigationBar";
import { Container } from "react-bootstrap";
import "../css/bg.scss";
import "../css/main.css";
import Landing from "./Home/Landing";
import Projects from "./Project/Projects";
import About from "./About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title" className="overflow-auto d-flex flex-column">
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
      </>
    </Router>
  );
}
