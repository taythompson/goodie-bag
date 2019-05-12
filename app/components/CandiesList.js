import { connect } from "react-redux";
import React from "react";
import { getCandies } from "../store";

class AllCandies extends React.Component {
  componentDidMount() {
    this.props.getCandies();
  }
  render() {
    const candies = this.props.candies;
    return (
      <div>
        <ul>
          {candies.map(candy => {
            return (
              <li key={candy.id}>
                <h2> CANDY: {candy.name} </h2>
                <p>{candy.description}</p>
                <p>{candy.quantity}</p>
                <img src={candy.imageUrl} />
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
    getCandies: () => dispatch(getCandies)
  };
};

const CandyList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCandies);

export default CandyList;
