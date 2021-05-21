// This is Action of the Reducer
import axios from "axios";
export const SignUp = (user) => {
  return {
    type: "LOG_IN",
    payload: user,
  };
};
export const SignOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const fetchUsers = (user) =>{
  return (dispatch) => {
    axios.post("https://cdec7c609e99.ngrok.io/login", user)
    .then(res => dispatch(SignUp(res.data)))
    .catch(err => console.log("err",err))
  }
}