import axios from "axios";

// Action Type
const ALL_CANDIES = "ALL-CANDIES";
const SINGLE_CANDY = "SINGLE_CANDY";
//Action Creator

export const displayCandies = candies => {
  return {
    type: ALL_CANDIES,
    candies
  };
};

export const getSingleCandy = payload => {
  return {
    type: SINGLE_CANDY,
    payload
  };
};

export const initialState = {
  candies: [],
  singleCandy: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_CANDIES:
      return {
        ...state,
        candies: action.candies
      };
    case SINGLE_CANDY:
      return {
        ...state,
        singleCandy: action.payload
      };
    default:
      return state;
  }
};

export const getCandies = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get("/api/candies");
      dispatch(displayCandies(data));
    } catch (err) {
      console.log("Uh-oh there was an issue loading your candies", err);
    }
  };
};

export const getSingleCandyThunk = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/candies/${id}`);
      dispatch(getSingleCandy(data));
    } catch (error) {
      console.log("There was a problem getting your candy", error);
    }
  };
};

export default rootReducer;
