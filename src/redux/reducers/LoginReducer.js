// First Reducer and it state
const initialState = {
  isLogin: false,
  user: {},
  updateUser: {},
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
        updateUser: action.payload,
      };
    default:
      return state;
  }
};
export default isLogged;
