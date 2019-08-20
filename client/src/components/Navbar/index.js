import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/test/users">
        Users API
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/test/items"
              className={
                window.location.pathname === "/test/items" || window.location.pathname === "/test/orders"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Items API
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/test/orders"
              className={window.location.pathname === "/test/orders" ? "nav-link active" : "nav-link"}
            >
              Orders API
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/test/itemsGrid"
              className={window.location.pathname === "/test/itemsGrid" ? "nav-link active" : "nav-link"}
            >
              Items Grid API
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
