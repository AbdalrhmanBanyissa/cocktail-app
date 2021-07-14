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
      drinksMenu: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/drinksMenu?a=Non_Alcoholic`)
      .then((drinksData) => this.setState({ drinksMenu: drinksData.data }))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route path="/Favorite">
              <Favorite />
            </Route>
            <Route path="/">
              <Home drinksMenu={this.state.drinksMenu} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
