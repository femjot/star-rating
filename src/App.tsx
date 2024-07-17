import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import StarRating from "./star-rating/star-rating.component";

function App() {
  const [productRating, setProductRating] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        productRating: {productRating}
        <StarRating maxRating={10} onChange={setProductRating} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
