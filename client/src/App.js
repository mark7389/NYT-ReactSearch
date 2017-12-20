import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Nav />
            {/*
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/saved" component={Saved} />
                  <Route exact path="/Article/:id" component={Article} />
                  <Route component={NoMatch} />
            </Switch>*/}
            </div>
      </Router>
    );
  }
}

export default App;
