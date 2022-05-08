import React from 'react';
import {styled} from "@mui/material";
import FriendItem from "./FriendItem";
import {connect} from "react-redux";
import {Friends, IFriendsListPropsType, OnlineUsers} from "../../../../react-app-env";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%"
});

const checkOnlineUsers = (friends: Friends = [], onlineUsers: OnlineUsers = []): Friends => {
  friends.forEach(f => f.isOnline = !!onlineUsers.find(user => user.userId === f.id));
  return friends;
};

const FriendList = ({friends, onlineUsers}: IFriendsListPropsType) => {
  return (
    <MainContainer>
      {checkOnlineUsers(friends, onlineUsers)?.map(f => (
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

const mapStoreStateToProps = ({friends}: IFriendsListPropsType) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps, null)(FriendList);