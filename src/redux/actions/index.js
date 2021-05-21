// This is Action of the Reducer
import axios from "axios";
export const SignUp = (user) => {
  return {
    type: "LOG_IN",
    payload: user,
  };
};
export const updateUsers = (data) => {
  return {
    type: "UPDATE_USER",
    payload: data,
  };
};

export const fetchUsers = (user) =>{
  return async (dispatch) => {
    await axios.post("https://cdec7c609e99.ngrok.io/login", user)
    .then(res => {dispatch(SignUp(res.data))})
    .catch(err => console.log("err",err))
  }
}

export const updateUser = (id, user, token) =>{
  return async (dispatch) => {
    await axios.put(`https://cdec7c609e99.ngrok.io/user/${id}`, user,{
      headers: {
        "Content-Type": "application/json",
        "token": token
      },
    })
    .then(res => {
      console.log(res)
      dispatch(updateUsers(res))})
    .catch(err => console.log("err",err))
  }
}