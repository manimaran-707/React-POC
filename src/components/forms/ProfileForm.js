import {
  Button, TextField, FormLabel, FormControl, Radio, RadioGroup, FormControlLabel,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ProfileStyles } from "./styles/materialStyles";
import ProfileImg from "./ProfileImg";
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from "react-router";
import {updateUsers} from "../../redux/actions";

const ProfileFrom = () => {
  const classes = ProfileStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const userData = useSelector(state => state.Logged.user)
  const isUpdated = useSelector(state => state.Logged.isUpdated)
  const [formData, setformData] = React.useState({
    email: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    address: ""
  });

  const handleSubmit = async () => {
    console.log(userData.data._id )
    console.log("userData", userData.token)
    await dispatch(updateUsers(userData.data._id ,formData, userData.token))
  };

  useEffect(()=>{
    if(userData.success === true){
      setformData({
        email: userData.data.email,
        firstName: userData.data.firstName,
        lastName: userData.data.lastName,
        dob: userData.data.dob,
        gender: userData.data.gender,
        address: userData.data.address,
      })
    }
  }, [userData])

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
          disabled
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
          required
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
            aria-required
            name="row-radio-buttons-group"
            onChange={(e) =>setformData({ ...formData, gender: e.target.value })}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <TextValidator
          variant="outlined"
          label="Address"
          fullWidth
          rows={4}
          multiLine
          onChange={(e) =>setformData({ ...formData, address: e.target.value })}
          name="address"
          value={formData.address}
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
  );
};

export default ProfileFrom;
