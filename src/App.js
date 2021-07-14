import axios from "axios";
import React, { Component } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Favorite from "./components/Favorite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    this.state = {
      home: "",
    };
  }

  componentDidMount = () => {
    const url = process.env.REACT_APP_SERVER_URL;
    axios.get(url).then((homeRec) => this.setState({ home: homeRec.data }));
  };

  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/Favorite">
              <Favorite />
            </Route>
          </Switch>
        </Router>

        <h1>{this.state.home}</h1>
      </div>
    );
  }
}

export default App;
