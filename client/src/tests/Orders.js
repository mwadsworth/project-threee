import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import withAuthorization from "../components/Auth/withAuthorization";
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
    API.getOrderBuyersView()
      .then(res => {
        this.setState({
          orders: res.data
        });
        console.log("Here2");
        console.log(this.state.orders);
        // console.log(this.state.orders.items);
        this.state.orders.forEach(function(order) {
          console.log("Here3");
          console.log(order.orderId);
          console.log(order.buyerId);
          console.log(order.buyerName);
          console.log(order.orderDate);
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
          items: res.data
        });
        console.log(this.state.items);
      })
      .catch(err => console.log(err));
  };

  deleteOrder = id => {
    API.deleteOrder(id)
      .then(res => {
        console.log("Delete order");
        console.log(res);
        this.loadOrders();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Orders</h1>
            </Jumbotron>
            {this.state.orders.length ? (
              <List>
                {this.state.orders.map(order => (
                  <ListItem
                    onClick={() => this.showOrder(order.orderId)}
                    key={order.orderId}
                  >
                    <strong
                      onClick={() => this.showOrder(order.orderId)}
                      key={order.orderId}
                    >
                      {order.buyerName} - {order.orderDate}
                    </strong>
                    <DeleteBtn onClick={() => this.deleteOrder(order.id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Order Items</h1>
            </Jumbotron>
            {this.state.orders.length ? (
              <Col size="md-6 sm-12">
                <div className="App">
                  <p className="Table-header">Basic Table</p>
                  <Table data={this.state.items} />
                </div>
              </Col>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

const authCondition = authUser => !!authUser;
export default withAuthorization(authCondition)(Orders);


