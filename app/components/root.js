import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import CandyList from "./CandiesList";
import SingleCandy from "./SingleCandyPage";

const Root = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/candies">All Candies</Link>
          <br />
          <Link to="/">Home Page</Link>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
        </main>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/candies" component={CandyList} />
          <Route exact path="/candies/:id" component={SingleCandy} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
