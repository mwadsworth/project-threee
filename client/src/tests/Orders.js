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
    items: []
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
        return;
      })
      .catch(err => console.log(err));
  };

  showOrder = id => {
    API.getOrderItemsUsersView(id)
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

  deleteItem = (oid, iid) => {
    console.log("Delete item");
    console.log(oid + " " + iid);
    API.deleteOrderItem(oid, iid)
      .then(res => {
        console.log("Delete order item");
        console.log(res);
        this.showOrder();
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
                    <DeleteBtn onClick={() => this.deleteOrder(order.orderId)} />
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
            {this.state.items.length ? (
              <List>
                {this.state.items.map(item => (
                  <ListItem key={item._id}>
                    <strong>
                      {item.ownerName} - {item.category} - {item.itemName} - {item.price}
                    </strong>
                    <DeleteBtn onClick={() => this.deleteItem(item.orderId, item.itemId)} />
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

export default Orders;
