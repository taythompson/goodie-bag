import { connect } from "react-redux";
import react from "react";

const candiesList = props => {
  const allCandies = props.candies;
  return (
    <div>
      {allCandies.map(candy => {
        return (
          <li key={candy.id}>
            {candy.name} {candy.description} {candy.quantity} {candy.imageUrl}
          </li>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    candies: state.candies
  };
};

export const AllCandies = connect(
  mapStateToProps,
  null
)(candiesList);
