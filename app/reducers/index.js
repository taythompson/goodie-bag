// Action Type
const ALL_CANDIES = "ALL-CANDIES";
//Action Creator

export const displayCandies = candies => {
  return {
    type: ALL_CANDIES,
    candies
  };
};

export const initialState = {
  candies: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_CANDIES:
      return { ...state, candies: action.candies };
    default:
      return state;
  }
};

export default rootReducer;
