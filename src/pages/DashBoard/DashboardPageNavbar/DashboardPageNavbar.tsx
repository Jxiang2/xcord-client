import React from 'react';
import {Button, styled} from "@mui/material";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import {logout} from "../../../utils/auth";
import ChosenOptionLabel from "./ChosenOptionLabel";

const MainContainer = styled("div")({
  position: "absolute",
  right: "0",
  top: "0",
  height: "48px",
  borderBottom: "1px solid black",
  backgroundColor: "#36393f",
  width: "calc(100% - 326px)",
  display: "flex",
  alignItems: "center",
  padding: "0 15px",
});

const DashboardPageNavbar = () => {

  return (
    <MainContainer>
      <Button
        style={{textDecoration: "none", marginRight: "15px", color: "#8e9297"}}
      >
        <EmojiPeopleIcon/>
      </Button>

      <ChosenOptionLabel/>

      <Button
        style={{marginLeft: "auto"}}
        onClick={logout}
      >
        Logout
      </Button>

    </MainContainer>
  );
};

export default DashboardPageNavbar;