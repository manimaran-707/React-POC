import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useSelector, useDispatch } from "react-redux";
import { SignUp } from "../../../redux/actions";
import { useHistory } from "react-router-dom";
import { LoginStyle } from "../styles/materialStyles";

const LoginFrom = () => {
  const [logInFrom, setLoIinFrom] = useState({
    UserMailId: "",
    UserPassword: "",
  });
  const classes = LoginStyle();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.Logged.isLogin);

  const FormHandler = (e) => {
    e.preventDefault();
    dispatch(SignUp(logInFrom.UserMailId, logInFrom.UserPassword));
  };
  const history = useHistory();
  useEffect(() => {
    if (isLogged === true) {
      history.push("/profile");
    } else {
      history.push("/");
    }
  }, [isLogged]);

  // Render Method
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={(e) => FormHandler(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Enter you mail id"
            name="email"
            autoComplete="email"
            value={logInFrom.UserMailId}
            onChange={(e) =>
              setLoIinFrom({ ...logInFrom, UserMailId: e.target.value })
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={logInFrom.UserPassword}
            onChange={(e) =>
              setLoIinFrom({ ...logInFrom, UserPassword: e.target.value })
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginFrom;
