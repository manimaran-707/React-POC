import {
  Button, TextField, FormLabel, FormControl, Radio, RadioGroup, FormControlLabel,
} from "@material-ui/core";
import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ProfileStyles } from "./styles/materialStyles";
import ProfileImg from "./ProfileImg";

const ProfileFrom = () => {
  const classes = ProfileStyles();
  const [formData, setformData] = React.useState({
    email: "",
    firstName: "",
    lastName: "",
    dob: "",
    file: "",
    gender: "",
  });

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="ProfileSection">
      <ValidatorForm onSubmit={handleSubmit}>
        <ProfileImg formData={formData} setformData={setformData} />
        <TextValidator
          variant="outlined"
          label="Email"
          fullWidth
          onChange={(e) => setformData({ ...formData, email: e.target.value })}
          name="email"
          value={formData.email}
          validators={["required", "isEmail"]}
          errorMessages={["this field is required", "email is not valid"]}
        />
        <br />
        <TextValidator
          variant="outlined"
          label="First Name"
          fullWidth
          onChange={(e) =>setformData({ ...formData, firstName: e.target.value })}
          name="firstname"
          value={formData.firstName}
          validators={["required"]}
          errorMessages={["this field is required"]}
        />
        <br />
        <TextValidator
          variant="outlined"
          label="Last Name"
          fullWidth
          onChange={(e) =>setformData({ ...formData, lastName: e.target.value })}
          name="lastname"
          value={formData.lastName}
          validators={["required"]}
          errorMessages={["this field is required"]}
        />
        <br />
        <FormLabel component="legend">DOB</FormLabel>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          type="date"
          name="dob"
          onChange={(e) => setformData({ ...formData, dob: e.target.value })}
          value={formData.dob}
          autoComplete="dob"
          validators={["required"]}
          errorMessages={["this field is required"]}
        />
        <br />
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            aria-label="gender"
            name="row-radio-buttons-group"
            onChange={(e) =>setformData({ ...formData, gender: e.target.value })}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
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
  );
};

export default ProfileFrom;
