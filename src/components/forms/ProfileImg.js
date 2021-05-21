import { Avatar, Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import {
  CloudUpload as MuiCloudUpload,
  Delete as MuiDelete,
} from "@material-ui/icons";
import { spacing } from "@material-ui/system";
import React, { createRef, useState } from "react";
import styled from "styled-components";
import { ProfileStyles } from "./styles/materialStyles";

const Buttons = styled(Button)(spacing);
const UploadIcon = styled(MuiCloudUpload)(spacing);
const DeleteIcon = styled(MuiDelete)(spacing);

const BigAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
  margin: 0 auto 16px;
  border: 1px solid ${grey[500]};
  box-shadow: 0 0 1px 0 ${grey[500]} inset, 0 0 1px 0 ${grey[500]};
`;

const ProfileImg = ({ formData, setformData }) => {
  const classes = ProfileStyles();

  const [image, _setImage] = useState(null);
  const inputFileRef = createRef(null);

  const cleanup = () => {
    URL.revokeObjectURL(image);
    inputFileRef.current.value = null;
  };

  const setImage = (newImage) => {
    if (image) {
      cleanup();
    }
    _setImage(newImage);
  };

  const handleOnChange = (event) => {
    const newImage = event.target?.files?.[0];
    setformData({ ...formData, file: newImage });

    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
  };
  const handleClick = (event) => {
    if (image) {
      event.preventDefault();
      setImage(null);
    }
  };

  return (
    <div className="ProfileFromGroup">
      <BigAvatar
        className={classes.large}
        $withBorder
        alt="Avatar"
        src={image || "/static/img/avatars/default-profile.svg"}
      />
      <input
        ref={inputFileRef}
        accept="image/*"
        hidden
        id="avatar-image-upload"
        type="file"
        onChange={handleOnChange}
      />
      <label htmlFor="avatar-image-upload">
        <Buttons
          variant="contained"
          color="primary"
          component="span"
          mb={2}
          onClick={handleClick}
        >
          {image ? <DeleteIcon mr={2} /> : <UploadIcon mr={2} />}
          {image ? "Clear" : "Upload"}
        </Buttons>
      </label>
    </div>
  );
};

export default ProfileImg;
