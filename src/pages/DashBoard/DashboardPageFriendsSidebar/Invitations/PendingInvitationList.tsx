import React from 'react';
import {styled} from "@mui/material";
import PendingInvitationItem from "./PendingInvitationItem";
import {connect} from "react-redux";
import {IPendingInvitationListPropsType} from "../../../../react-app-env";

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto"
});

const PendingInvitationList = ({pendingFriendsInvites}: IPendingInvitationListPropsType) => {
  return (
    <MainContainer>
      {pendingFriendsInvites?.map(inv => (
        <PendingInvitationItem
          key={inv._id}
          id={inv._id}
          username={inv.senderId.username}
          mail={inv.senderId.mail}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({friends}: any) => {
  return {
    ...friends
  };
};

export default connect(mapStoreStateToProps, null)(PendingInvitationList);