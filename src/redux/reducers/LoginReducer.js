// First Reducer and it state
const initialState = {
  isLogin: false,
  user: {},
  errorMessage: "",
};
const isLogged = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        user: action.payload,
        isLogin: true,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default isLogged;
