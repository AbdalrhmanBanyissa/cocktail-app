import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state = {
      home : "",
    }
  }

  componentDidMount = () => {
    const url = process.env.REACT_APP_SERVER_URL
    axios.get(url).then((homeRec)=>this.setState({home:homeRec.data}))
  }

  render() {
    return (
      <div>
        <h1>{this.state.home}</h1>
      </div>
    );
  }
}

export default App;