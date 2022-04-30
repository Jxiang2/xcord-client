import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import Avatar from "./Avatar";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {IFriendItemPropsType} from "../../../../react-app-env";

const FriendItem = (
  {
    id,
    username,
    isOnline
  }: IFriendItemPropsType) => {
  return (
    <Button
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        color: "black",
        position: "relative"
      }}
    >
      <Avatar username={username}/>

      <Typography
        style={{marginLeft: "10px", fontWeight: 700, color: "#839297"}}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>

      {isOnline && <Box
        sx={{
          color: "#3ba55d",
          display: "flex",
          alignItems: "center",
          position: "absolute",
          right: "5px"
        }}
      >
        <FiberManualRecordIcon/>
      </Box>}
    </Button>
  );
};

export default FriendItem;