import React from 'react';
import {Typography} from "@mui/material";
import {connect} from "react-redux";
import {IChosenOptionLabelPropsType, IReduxState} from "../../../react-app-env";

const ChosenOptionLabel = ({name}: IChosenOptionLabelPropsType) => {
  return (
    <Typography
      sx={{fontSize: "16px", color: "white", fontWeight: "bold"}}
    >
      {`${name ? name : ""}`}
    </Typography>
  );
};

const mapStoreStateToProps = (state: IReduxState) => {
  return {
    name: state.chat.chosenChatDetails?.name
  };
};

export default connect(mapStoreStateToProps, null)(ChosenOptionLabel);