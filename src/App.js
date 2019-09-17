import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Demos from "./Demos";
import { Route, withRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Route
        exact
        path="/"
        render={props => (
          <div>
            <NavBar />
            <Home />
          </div>
        )}
      />
      <Route
        exact
        path="/home"
        render={props => (
          <div>
            <NavBar />
            <Home />
          </div>
        )}
      />
      <Route
        exact
        path="/demos"
        render={props => (
          <div>
            <NavBar />
            <Demos />
          </div>
        )}
      />
    </div>
  );
}

export default withRouter(App);
