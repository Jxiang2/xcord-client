import React from 'react';
import {styled} from "@mui/material";
import FriendItem from "./FriendItem";
import {connect} from "react-redux";
import {IFriendsListPropsType} from "../../../../react-app-env";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%"
});

const FriendList = ({friends}: IFriendsListPropsType) => {
  return (
    <MainContainer>
      {friends?.map(f => (
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

const mapStoreStateToProps = ({friends}: { friends: any[] }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps, null)(FriendList);