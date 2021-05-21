import React, { useState } from "react";
import { Avatar, Button, CssBaseline, Typography, Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoginStyle } from "./styles/materialStyles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {fetchUsers} from "../../redux/actions";

const LoginFrom = () => {
  const [logInFrom, setLogInFrom] = useState({
    email: "",
    password: "Admin",
    userPassword: ""
  });
  const classes = LoginStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  const FormHandler = async (e) => {
    e.preventDefault();
    console.log(logInFrom);
    await dispatch(fetchUsers(logInFrom));
    history.push("profile");
  };

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
        <ValidatorForm
          className={classes.form}
          onSubmit={(e) => FormHandler(e)}
        >
          <TextValidator
            variant="outlined"
            fullWidth
            label="Enter you mail id"
            name="email"
            autoComplete="email"
            value={logInFrom.email}
            onChange={(e) => setLogInFrom({ ...logInFrom, email: e.target.value })}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
          <br />
          <TextValidator
            variant="outlined"
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={logInFrom.userPassword}
            onChange={(e) => setLogInFrom({ ...logInFrom, userPassword: e.target.value })}
            autoComplete="current-password"
            validators={["required"]}
            errorMessages={["this field is required"]}
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
        </ValidatorForm>
      </div>
    </Container>
  );
};

export default LoginFrom;
