import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Reactstrap from "reactstrap";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import WhatsOnSale from "./pages/WhatsOnSale";
import Users from "./tests/Users";
import UserDetail from "./tests/UserDetail";
import Items from "./tests/Items";
import ItemsGrid from "./tests/ItemsGrid";
import ItemDetail from "./tests/ItemDetail";
import Orders from "./tests/Orders";
import OrderDetail from "./tests/OrderDetail";
import SignInPage from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import withAuthentication from "./components/Auth/withAuthentication";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Navbar />
        <Switch>
          <Route path="/login" component={SignInPage} />
          <Route path="/register" component={SignUp} />
          <Route exact path="/" component={WhatsOnSale} />
          <Route exact path="/test/users" component={Users} />
          <Route exact path="/test/users/:id" component={UserDetail} />
          <Route exact path="/test/items" component={Items} />
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

export default withAuthentication(App);
