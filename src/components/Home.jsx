import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class Home extends Component {
  render() {
    const { drinksMenu } = this.props;
    return (
      <div className="home">
        {drinksMenu.map((item, key) => {
          return (
            <div className="card" key={key}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.drink}</Card.Title>
                  <Button variant="primary">Add to Favorite</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
