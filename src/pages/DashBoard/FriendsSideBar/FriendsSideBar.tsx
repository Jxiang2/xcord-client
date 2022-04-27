import React from 'react';
import {styled} from "@mui/material";
import AddFriendButton from "./AddFriendButton";
import FriendsSubtitles from "./FriendsSubtitles";
import FriendsList from "./FriendsList";
import PendingInvitationList from "./PendingInvitationList";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const FriendsSideBar = () => {
  return (
    <MainContainer>
      <AddFriendButton/>

      <FriendsSubtitles title={"Private Messages"}/>

      <FriendsList/>

      <FriendsSubtitles title={"Invitations"}/>

      <PendingInvitationList/>
    </MainContainer>
  );
};

export default FriendsSideBar;