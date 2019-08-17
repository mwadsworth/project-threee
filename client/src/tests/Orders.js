import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Table from "../components/Table";

class Orders extends Component {
  state = {
    orders: [],
    buyerName: "",
    orderDate: "",
    items: [
      {
        id: 1,
        ownerName: "Jane doe",
        itemName: "Sofa",
        itemImage: "image1.png",
        price: "$10.00"
      },
      {
        id: 2,
        ownerName: "Jane doe",
        itemName: "Chair",
        itemImage: "image2.png",
        price: "$5.00"
      },
      {
        id: 3,
        ownerName: "Joe Dokes",
        itemName: "Lawn Mower",
        itemImage: "image3.png",
        price: "$20.00"
      },
      {
        id: 4,
        ownerName: "Joe Dokes",
        itemName: "Shovel",
        itemImage: "image4.png",
        price: "$2.00"
      }
    ]
  };

  componentDidMount() {
    this.loadOrders();
  }

  loadOrders = () => {
    API.getOrders()
      .then(res => {
        // console.log("Here1");
        // console.log(res);
        this.setState({
          orders: res.data
        });
        console.log("Here2");
        console.log(this.state.orders);
        // console.log(this.state.orders.items);
        this.state.orders.forEach(function(order) {
          console.log("Here3");
          console.log(order.buyerName);
          console.log(order.orderDate);
          console.log(order.items);
        });

        return;
        // this.setState({
        //   orders: res.data,
        //   buyerName: "",
        //   orderDate: "",
        //   items: []
        // });
      })
      .catch(err => console.log(err));
  };

  showOrder = id => {
    API.getOrderItems(id)
      .then(res => {
        console.log("Show order items");
        console.log(res);
        this.setState({
          items: res.data.items
        });
      })
      .catch(err => console.log(err));
  };

  deleteOrder = id => {
    API.deleteOrder(id)
      .then(res => this.loadOrders())
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
    if (this.state.buyerName && this.state.orderDate) {
      API.saveOrder({
        buyerName: this.state.buyerName,
        orderDate: this.state.orderDate
      })
        .then(res => this.loadOrders())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Create Order</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.buyerName}
                onChange={this.handleInputChange}
                name="buyerName"
                placeholder="Owner Name (required)"
              />
              <Input
                value={this.state.orderDate}
                onChange={this.handleInputChange}
                name="orderDate"
                placeholder="Order Date (required)"
              />
              <FormBtn
                disabled={!(this.state.orderDate && this.state.buyerName)}
                onClick={this.handleFormSubmit}
              >
                Submit Order
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Orders</h1>
            </Jumbotron>
            {this.state.orders.length ? (
              <List>
                {this.state.orders.map(order => (
                  <ListItem onClick={() => this.showOrder(order.id)} key={order._id}>
                    <Link to={"#" + order._id}>
                      <strong>
                        {order.buyerName} at {order.orderDate}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.showOrder(order.id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
            <div className="App">
              <p className="Table-header">Basic Table</p>
              <Table data={this.state.items} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Orders;
