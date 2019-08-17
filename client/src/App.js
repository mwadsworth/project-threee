import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Reactstrap from "reactstrap";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import WhatsOnSale from "./pages/WhatsOnSale";
import Users from "./tests/Users";
import UserDetail from "./tests/UserDetail";
import TestItems from "./tests/Items";
import ItemsGrid from "./tests/ItemsGrid";
import ItemDetail from "./tests/ItemDetail";
import Orders from "./tests/Orders";
import OrderDetail from "./tests/OrderDetail";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={WhatsOnSale} />
          <Route exact path="/test/users" component={Users} />
          <Route exact path="/test/users/:id" component={UserDetail} />
          <Route exact path="/test/items" component={TestItems} />
          <Route exact path="/test/itemsGrid" component={ItemsGrid} />
          <Route exact path="/test/items/:id" component={ItemDetail} />
          <Route exact path="/test/orders" component={Orders} />
          <Route exact path="/test/orders/:id" component={OrderDetail} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />

          {/* how do I add the WhatsOnSale page? */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
