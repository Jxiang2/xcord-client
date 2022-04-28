import React from 'react';
import {styled, Typography} from "@mui/material";
import AddFriendButton from "./AddFriend/AddFriendButton";
import FriendList from "./FriendList/FriendList";
import PendingInvitationList from "./Invitations/PendingInvitationList";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const DashboardPageFriendsSidebar = () => {
  return (
    <MainContainer>
      <AddFriendButton/>

      <Typography sx={{
        textTransform: "uppercase",
        color: "#8e9297",
        fontSize: "14px",
        marginTop: "10px"
      }}>
        Private messages
      </Typography>

      <FriendList/>

      <Typography sx={{
        textTransform: "uppercase",
        color: "#8e9297",
        fontSize: "14px",
        marginTop: "10px"
      }}>
        Invitations
      </Typography>

      <PendingInvitationList/>
    </MainContainer>
  );
};

export default DashboardPageFriendsSidebar;