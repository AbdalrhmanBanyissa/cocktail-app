import axios from "axios";
import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import UpdateForm from "./UpdateForm";
class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteMenu: [],
      show: false,
      drinkName: "",
      drinkImg: "",
      drinkID: 0,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = (obj) => {
    this.setState({
      show: true,
      drinkName: obj.drink,
      drinkImg: obj.img,
      drinkID: obj._id,
    });
  };

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
                  <Button
                    onClick={() => this.handleDelete(item._id)}
                    variant="outline-danger"
                    className="m-2"
                  >
                    delete
                  </Button>
                  <Button
                    onClick={() => this.handleShow(item)}
                    variant="outline-secondary"
                  >
                    update
                  </Button>
                  <UpdateForm
                    show={this.state.show}
                    handleClose={this.handleClose}
                    handleSubmite={this.handleSubmite}
                    handleChangeDrinkName={this.handleChangeDrinkName}
                    handleChangeDrinkImg={this.handleChangeDrinkImg}
                  />
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
  handleDelete = (id) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/deleteFromDrinksMenu/${id}`;
    axios
      .delete(url)
      .then((results) => this.setState({ favoriteMenu: results.data }))
      .catch((error) => console.log(error));
  };
  handleSubmite = (event) => {
    event.preventDefault();
    const url = `${process.env.REACT_APP_SERVER_URL}/updateDrinksMenu`
    const obj = {
      drink:this.state.drinkName,
      img:this.state.drinkImg,
      id:this.state.drinkID
    }
    axios
    .put(url,obj)
    .then((drinksData)=>this.setState({favoriteMenu:drinksData.data}))
    .catch((error)=>console.log(error))
  };
  handleChangeDrinkName = (event) => {
    this.setState({ drinkName: event.target.value });
  };
  handleChangeDrinkImg = (event) => {
    this.setState({ drinkImg: event.target.value });
  };
}

export default Favorite;
