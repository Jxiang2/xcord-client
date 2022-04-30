import React, {useState} from 'react';
import {IconButton, Tooltip, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "../FriendList/Avatar";
import {IPendingInvitationItemPropsType} from "../../../../react-app-env";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const PendingInvitationItem = (
  {
    id, username, mail,
    acceptInvite, rejectInvite
  }: IPendingInvitationItemPropsType) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    acceptInvite({id});
    setButtonDisabled(true);
  };

  const handleRejectInvitation = () => {
    rejectInvite({id});
    setButtonDisabled(true);
  };

  return (
    <Tooltip title={mail}>
      <div style={{width: "100%"}}>
        <Box sx={{
          width: "100%",
          height: "42px",
          marginTop: "10px",
          display: "flex",
          alignItem: "center",
          justifyContent: "space-between"
        }}>
          <Avatar username={username}/>

          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>

          {/*accept/decline invitation button*/}
          <Box sx={{display: "flex"}}>
            <IconButton
              style={{color: "white"}}
              disabled={buttonDisabled}
              onClick={handleAcceptInvitation}
            >
              <CheckIcon/>
            </IconButton>

            <IconButton
              style={{color: "white"}}
              disabled={buttonDisabled}
              onClick={handleRejectInvitation}
            >
              <ClearIcon/>
            </IconButton>
          </Box>
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationItem;