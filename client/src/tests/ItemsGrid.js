import React, { Component } from "react";
import ItemCard from "../components/ItemCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import items from "./items.json";
import API from "../utils/API";

class App extends Component {
  // Setting this.state.items to the items json array
  state = {
    items
  };

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    API.getUserItemsView()
      .then(res =>
        this.setState({ items: res.data, ownerName: "", itemName: "", itemImage: "", category: "", price: "" })
      )
      .catch(err => console.log(err));
  };

  removeItem = id => {
    // Filter this.state.items for items with an id not equal to the id being removed
    const items = this.state.items.filter(item => item.id !== id);
    // Set this.state.items equal to the new items array
    this.setState({ items });
  };

  // Map over this.state.items and render a ItemCard component for each item object
  render() {
    return (
      <Wrapper>
        <Title>Items List</Title>
        {this.state.items.map(item => (
          <ItemCard
            removeItem={this.removeItem}
            id={item.id}
            key={item.id}
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

export default App;
