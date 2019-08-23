import React from "react";
import SignOutButton from "./SignOut";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{display: "flex", justifyContent: "space-between"}}>
      <a className="navbar-brand" href="/">
        NASA (Not Average Selling App)
      </a>
      <SignOutButton />
    </nav>
  );
}

export default Nav;
