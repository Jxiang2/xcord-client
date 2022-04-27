import React from 'react';
import {Button, styled} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const MainContainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
});


const SideBar = () => {
  return (
    <MainContainer>
      <Button
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "16px",
          margin: 0,
          padding: 0,
          minWidth: 0,
          marginTop: "15px",
          color: "white",
          backgroundColor: "#5865F2"
        }}
      >
        <GroupIcon/>
      </Button>

      <Button
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "16px",
          margin: 0,
          padding: 0,
          minWidth: 0,
          marginTop: "15px",
          color: "white",
          backgroundColor: "#5865F2"
        }}
      >
        <SportsEsportsIcon/>
      </Button>
    </MainContainer>
  );
};

export default SideBar;