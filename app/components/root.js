import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import { AllCandies } from "./CandiesList";

const Root = () => {
  return (
    <HashRouter>
      <div>
        <nav>
          Goodie Bag
          <ul>
            <li>
              <Link to="/candies">All Candies</Link>
            </li>
            <li>
              <Link to="/">Home Page</Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
        </main>
        <Route path="/candies" componet={AllCandies} />
        <Route exact path="/" component={Root} />
      </div>
    </HashRouter>
  );
};

export default Root;
