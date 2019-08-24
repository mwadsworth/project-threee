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
    ownerId: "",
    itemName: "",
    itemImage: "",
    price: "",
    url: "",
    photo: null,
    photoName: "",
    userId: ""
  };

  componentDidMount() {
    this.loadItems();
    let id = localStorage.getItem("userId");
    console.log("Id = " + id);
    this.setState({ userId: id });
  }

  loadItems = () => {
    API.getUserItemsView()
      .then(res =>
        this.setState({
          items: res.data,
          itemId: "",
          ownerId: "",
          ownerName: "",
          itemName: "",
          itemImage: "",
          price: ""
        })
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
    console.log("Calling save1");
    if (this.state.itemName && this.state.itemImage && this.state.price) {
      console.log("Calling save2");
      console.log(parseInt(this.state.userId));
      API.saveItem({
        ownerId: parseInt(this.state.userId),
        category: "Other",
        itemName: this.state.itemName,
        itemImage: this.state.itemImage,
        price: this.state.price,
        sold: 0
      })
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };

  getFile = event => {
    this.setState({ photo: event.target.files[0] });
    this.setState({ photoName: event.target.files[0].name });
    this.setState({ itemImage: event.target.files[0].name });
    console.log(event.target.files[0]);
    console.log(this.state);
    console.log("Upload Photo");
    let payload = new FormData();
    payload.append("file", event.target.files[0]);
    payload.append("photoName", event.target.files[0].name);
    console.log(this.state);
    fetch("http://localhost:3001/api/scribble", {
      method: "POST",
      body: payload,
      credentials: "include",
      mode: "cors"
    })
      .then(res => res.json())
      .then(response => {
        console.log("Got picture");
        console.log(response);
        this.setState({
          url: response,
          itemImage: response
        });
      })
      .catch(err => console.log(err));
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
              <label>Select an image </label>
              <input
                type="file"
                required
                name="photo"
                onChange={this.getFile}
              />
              <Input
                value={this.state.price}
                onChange={this.handleInputChange}
                name="price"
                placeholder="Price (required)"
              />

              {this.state.url ? (
                <img src={this.state.url} style={{ height: 200, width: 200 }} />
              ) : (
                ""
              )}

              <FormBtn
                disabled={
                  !(
                    this.state.itemName &&
                    this.state.itemImage &&
                    this.state.price
                  )
                }
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
                    <Link to={"/test/items/" + item.itemId}>
                      <strong>
                        {item.ownerId} - {item.ownerName} - {item.itemId} -{" "}
                        {item.itemName} - {item.price}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteItem(item.itemId)} />
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
