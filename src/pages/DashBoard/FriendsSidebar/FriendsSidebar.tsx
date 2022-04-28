import React from 'react';
import {styled} from "@mui/material";
import AddFriendButton from "./AddFriend/AddFriendButton";
import FriendsSubtitles from "./FriendsSidebarElements/FriendsSubtitles";
import FriendList from "./FriendsSidebarElements/FriendList";
import PendingInvitationList from "./FriendsSidebarElements/PendingInvitationList";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const FriendsSidebar = () => {
  return (
    <MainContainer>
      <AddFriendButton/>

      <FriendsSubtitles title={"Private Messages"}/>

      <FriendList/>

      <FriendsSubtitles title={"Invitations"}/>

      <PendingInvitationList/>
    </MainContainer>
  );
};

export default FriendsSidebar;