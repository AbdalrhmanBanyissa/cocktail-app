import axios from "axios";
import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteMenu: [],
    };
  }

  componentDidMount = () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/getFromDrinksMenu`;
    axios
      .get(url)
      .then((drinksData) => this.setState({ favoriteMenu: drinksData.data }))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="home">
        {this.state.favoriteMenu.map((item, key) => {
          return (
            <div className="card" key={key}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.drink}</Card.Title>
                  <Button onClick={()=>this.handleDelete(item._id)} variant="outline-danger" className="m-2">delete</Button>
                <Button variant="outline-secondary">update</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
  handleDelete = (id) => {
    console.log(id);
    const url = `${process.env.REACT_APP_SERVER_URL}/deleteFromDrinksMenu/${id}`
    axios
    .delete(url)
    .then((results)=>this.setState({favoriteMenu:results.data}))
    .catch((error)=>console.log(error))
  }
}

export default Favorite;