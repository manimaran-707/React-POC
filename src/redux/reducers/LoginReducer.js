// First Reducer and it state
const initialState = {
  isLogin: false,
  user: {},
  errorMessage: "",
};
const isLogged = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        user: action.payload,
        isLogin: true,
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: {},
        isLogin: false,
      };
    default:
      return state;
  }
};
export default isLogged;
