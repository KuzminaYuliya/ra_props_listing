import React from "react";
import "./App.css";

import Listing from "./components/Listing";

function App() {
  return (
    <div className="container">
      <div className="background-element"> </div>{" "}
      <div className="highlight-window">
        <div className="highlight-overlay"> </div>{" "}
      </div>{" "}
      <div className="window">
        <Listing />
      </div>{" "}
    </div>
  );
}

export default App;
