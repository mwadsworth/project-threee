import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Reactstrap from "reactstrap";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import WhatsOnSale from "./pages/WhatsOnSale";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={WhatsOnSale} />
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
