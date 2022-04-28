import React from 'react';
import {styled} from "@mui/material";
import PendingInvitationItem from "./PendingInvitationItem";

const invitations = [
  {
    _id: "1",
    senderId: {
      username: "Tim",
      mail: "dummy1@ad.com"
    }
  },
  {
    _id: "2",
    senderId: {
      username: "Jack",
      mail: "dummy2@ad.com"
    }
  }
];

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto"
});

const PendingInvitationList = () => {
  const acceptInvite = () => {
    console.log("accepted");
  }

  const rejectInvite = () => {
    console.log("rejected");
  }

  return (
    <MainContainer>
      {invitations.map(inv => (
        <PendingInvitationItem
          key={inv._id}
          id={inv._id}
          username={inv.senderId.username}
          mail={inv.senderId.mail}
          acceptInvite={acceptInvite}
          rejectInvite={rejectInvite}
        />
      ))}
    </MainContainer>
  );
};

export default PendingInvitationList;