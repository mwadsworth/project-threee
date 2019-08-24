import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 200, clear: "both", paddingTop: 60, paddingBottom: 60, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
