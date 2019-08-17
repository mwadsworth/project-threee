import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Items extends Component {
  state = {
    items: [],
    ownerName: "",
    itemName: "",
    itemImage: "",
    price: ""
  };

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ items: res.data, ownerName: "", itemName: "", itemImage: "", price: "" })
      )
      .catch(err => console.log(err));
  };

  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.ownerName && this.state.itemName && this.state.itemImage && this.state.price) {
      API.saveItem({
        ownerName: this.state.ownerName,
        itemName: this.state.itemName,
        itemImage: this.state.itemImage,
        price: this.state.price
      })
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Create Item</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.ownerName}
                onChange={this.handleInputChange}
                name="ownerName"
                placeholder="Owner Name (required)"
              />
              <Input
                value={this.state.itemName}
                onChange={this.handleInputChange}
                name="itemName"
                placeholder="Item Name (required)"
              />
              <Input
                value={this.state.itemImage}
                onChange={this.handleInputChange}
                name="itemImage"
                placeholder="Item Image (required)"
              />
              <Input
                value={this.state.price}
                onChange={this.handleInputChange}
                name="price"
                placeholder="Price (required)"
              />
              <FormBtn
                disabled={!(this.state.itemName && this.state.ownerName)}
                onClick={this.handleFormSubmit}
              >
                Submit Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Items</h1>
            </Jumbotron>
            {this.state.items.length ? (
              <List>
                {this.state.items.map(item => (
                  <ListItem key={item._id}>
                    <Link to={"/test/items/" + item._id}>
                      <strong>
                        {item.ownerName} at {item.itemName}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteItem(item._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Items;
