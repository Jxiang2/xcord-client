import React from 'react';
import {Button} from "@mui/material";
import {ICustomButton} from "../react-app-env";

const CustomPrimaryButton = ({label, additionalStyles, disabled, clickButton}: ICustomButton) => {

  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#5865F2",
        color: "white",
        fontSize: "16px",
        fontWeight: "500",
        width: "100%",
        height: "40px"
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onClick={clickButton}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;