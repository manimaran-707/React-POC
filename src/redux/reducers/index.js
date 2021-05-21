import isLogged from "../reducers/LoginReducer";
import { combineReducers } from "redux";

const Reducers = combineReducers({
  Logged: isLogged,
});

export default Reducers;
