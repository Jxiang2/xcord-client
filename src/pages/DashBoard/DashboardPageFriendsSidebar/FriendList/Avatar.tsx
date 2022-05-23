import React from 'react';
import {styled} from "@mui/material";
import {IAvatarPropsType} from "../../../../react-app-env";

const AvatarPreview = styled("div")({
  height: "45px",
  width: "45px",
  backgroundColor: "#5865f2",
  display: "flex",
  borderRadius: "42px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "700px",
  marginLeft: "5px",
  color: "white"
});

const Avatar = ({username, large}: IAvatarPropsType) => {
  return (
    <AvatarPreview style={large ? {height: "80px", width: "80px"} : {}}>
      {username.substring(0, 1).toUpperCase() + username.substring(1, 3).toLowerCase()}
    </AvatarPreview>
  );
};

export default Avatar;