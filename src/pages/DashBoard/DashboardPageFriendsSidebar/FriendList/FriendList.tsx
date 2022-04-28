import React from 'react';
import {styled} from "@mui/material";
import FriendItem from "./FriendItem";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%"
});

const friendList = [
  {
    id: "1",
    username: "John",
    isOnline: true
  },
  {
    id: "2",
    username: "Marc",
    isOnline: false
  },

];

const FriendList = () => {
  return (
    <MainContainer>
      {friendList.map(f => (
        <FriendItem
          key={f.id}
          username={f.username}
          id={f.id}
          isOnline={f.isOnline}
        />
      ))}
    </MainContainer>
  );
};

export default FriendList;