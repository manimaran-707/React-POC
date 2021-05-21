import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
} from "@material-ui/core";

const ProfileForm = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Profile
      </Typography>
      <div>
        <form>
          <input type="file" />
        </form>
      </div>
    </Container>
  );
};

export default ProfileForm;
