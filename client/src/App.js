import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Reactstrap from "reactstrap";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import WhatsOnSale from "./pages/WhatsOnSale";
import Users from "./tests/Users";
import Items from "./tests/Items";
import ItemsGrid from "./tests/ItemsGrid";
import Orders from "./tests/Orders";
import { Link } from "react-router-dom";

// <Route path="/test" render={(props) => <Test {...props} test="hi"/>} /> and access that by this.props.test

class App extends Component {
  constructor() {
    super();
    this.state = {
      navMessage: "Click an to add to cart!",
      cartSize: 0,
      footerTitle: "Copyright \u00A9 2019 DBC"
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Navbar />
          <Link
            to={{
              pathname: "/test/itemsGrid",
              state: { message: "hello, im a passed message!" }
            }}
          />
          <Switch>
            <Route exact path="/" component={WhatsOnSale} />
            <Route exact path="/test/users" component={Users} />
            <Route exact path="/test/items" component={Items} />
            {/* <Route exact path="/test/itemsGrid" component={ItemsGrid} /> */}
            <Route
              path="/test/itemsGrid"
              render={props => <ItemsGrid test="hi" {...props} state={this.state} />}
            />
            <Route exact path="/test/orders" component={Orders} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} />

            {/* how do I add the WhatsOnSale page? */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
