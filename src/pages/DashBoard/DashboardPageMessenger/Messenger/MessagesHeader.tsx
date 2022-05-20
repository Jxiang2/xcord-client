import React from 'react';
import {styled} from "@mui/system";
import {Typography} from "@mui/material";

const MainContainer = styled("div")({
  width: "95%",
  display: "column",
  marginTop: "10px"
});

const MessagesHeader = () => {
  return (
    <MainContainer>
      <Typography
        sx={{
          color: "#b9bbbe",
          alignSelf: "center",
          borderBottom: "1.5px solid #b9bbbe",
          marginBottom: "15px"
        }}>
        This is the beginning of your conversation
      </Typography>
    </MainContainer>
  );
};

export default MessagesHeader;