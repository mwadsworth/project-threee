import React, { Component } from "react";
import ItemCard from "../components/ItemCard";
import Wrapper from "../components/Wrapper";
import withAuthorization from "../components/Auth/withAuthorization";
import Title from "../components/Title";
import API from "../utils/API";

class App extends Component {
  // Setting this.state.items to the items json array
  state = {
    items: [],
    isFirst: true,
    userId: "",
    orderId: ""
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
          ownerName: "",
          itemName: "",
          itemImage: "",
          category: "",
          price: "",
          orderId: ""
        })
      )
      .catch(err => console.log(err));
  };

  addItem = id => {
    console.log("Add item to order");
    console.log(id);
    console.log(parseInt(this.state.userId));
    // Filter this.state.items for items with an id not equal to the id being removed
    const items = this.state.items.filter(item => item.itemId !== id);
    // Set this.state.items equal to the new items array
    this.setState({ items });
    if (this.state.isFirst) {
      this.setState({"isFirst": false});
      API.saveOrder({
        buyerId: parseInt(this.state.userId),
        orderPlaced: false
      })
        .then(res => {
          console.log(res);
          this.setState({"orderId": res.data.id});
          API.saveOrderItem({
            orderId: res.data.id,
            itemId: id
          })
            .then( response => {
              console.log(response);
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    } else {
      console.log(this.state.orderId);
      API.saveOrderItem({
        orderId: parseInt(this.state.orderId),
        itemId: id
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(err => console.log(err));
    }
  };

  // Map over this.state.items and render a ItemCard component for each item object
  render() {
    return (
      <Wrapper>
        <Title>Items List</Title>
        {this.state.items.map(item => (
          <ItemCard
            addItem={this.addItem}
            id={item.itemId}
            key={item.itemId}
            ownerName={item.ownerName}
            itemName={item.itemName}
            itemImage={item.itemImage}
            category={item.category}
            price={item.price}
          />
        ))}
      </Wrapper>
    );
  }
}

const authCondition = authUser => !!authUser;
export default withAuthorization(authCondition)(App);

