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
    await axios.post("http://e5260ad8c5c5.ngrok.io/login", user)
    .then(res => {dispatch(SignUp(res.data))})
    .catch(err => console.log("err",err))
  }
}

export const updateUser = (id, data, token) =>{
  return async (dispatch) => {
    console.log("user", data)
    console.log("id", id)
    console.log(`Bearer ${token}`)
    const header = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    await axios.put(`http://e5260ad8c5c5.ngrok.io/user/${id}` , data, {
      headers: header
    },
    )
    .then(res => {
      console.log(res)
      dispatch(updateUsers(res))})
    .catch(err => console.log("err",err.message))
  }
}