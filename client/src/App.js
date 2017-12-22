import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Container from "./components/Container";
class App extends Component {
  render() {
    return (
      <Router>
          <Container />
      </Router>
    );
  }
}

export default App;
