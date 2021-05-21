// This is Action of the Reducer
export const SignUp = (UserMailId, UserPassword) => {
  return {
    type: "SIGN_UP",
    payload: {
      mailid: UserMailId,
      password: UserPassword,
    },
  };
};
export const SignOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
