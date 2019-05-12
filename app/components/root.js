import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import CandyList from "./CandiesList";

const Root = () => {
  return (
    <Router>
      <div>
        <nav>Goodie Bag</nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
        </main>
        <Link to="/candies">All Candies</Link>

        <Link to="/">Home Page</Link>

        <Switch>
          <Route exact path="/" component={CandyList} />
          <Route exact path="/candies" component={CandyList} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
