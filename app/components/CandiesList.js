import { connect } from "react-redux";
import React from "react";
import { getCandies } from "../reducers/index";
import Link from "react-router-dom";

class AllCandies extends React.Component {
  componentDidMount() {
    this.props.getCandies();
  }
  render() {
    const { candies, id } = this.props.candies;

    return (
      <div>
        <ul>
          {candies.map(candy => {
            return (
              <li key={candy.id}>
                <h2> CANDY: {candy.name} </h2>
                <p>{candy.description}</p>
                <p>{candy.quantity}</p>
                <Link to={`/candies/${id}`}>
                  <img src={candy.imageUrl} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    candies: state.candies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCandies: () => dispatch(getCandies())
  };
};

const CandyList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCandies);

export default CandyList;
