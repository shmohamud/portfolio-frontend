import React from "react";
import "./App.css";
import HomeContainer from "./HomeContainer";
import Demos from "./Demos";
import Navbar from './NavBar'
import {Row} from 'react-bootstrap'
import { Route, withRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Route
        exact
        path="/"
        render={props => (
          <div>
            <Row>
          <Navbar/>
          </Row>
         <HomeContainer/>
          </div>
        )}
      />
      <Route
        exact
        path="/home"
        render={props => (
          <div>
            <Navbar />
            <HomeContainer />
          </div>
        )}
      />
      <Route
        exact
        path="/demos"
        render={props => (
          <div>
           
            <Navbar />
            <Demos />
          </div>
        )}
      />
    </div>
  );
}

export default withRouter(App);
