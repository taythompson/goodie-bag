import React from "react";
import { getSingleCandyThunk } from "../reducers";
import { connect } from "react-redux";

class SingleCandyPage extends React.Component {
  componentDidMount() {
    this.props.getCandy(this.props.match.params.id);
  }
  render() {
    let candy = this.props.candy;
    return (
      <div>
        <h1>{candy.name}</h1>
        <img src={candy.imageUrl} />
      </div>
    );
  }
}

const mapState = state => ({
  candy: state.singleCandy
});

const mapDispatch = dispatch => ({
  getCandy: id => dispatch(getSingleCandyThunk(id))
});

const SingleCandy = connect(
  mapState,
  mapDispatch
)(SingleCandyPage);

export default SingleCandy;
