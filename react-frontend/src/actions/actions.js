export const setAuthToken = (token) => ({
  type: "SET_AUTH_TOKEN",
  payload: token,
});

const intialState = {
  authToken: null,
};

export const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_AUTH_TOKEN":
      return { ...state, authToken: action.payload };
    default:
      return state;
  }
};
