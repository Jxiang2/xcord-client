import React, {useEffect, useState} from 'react';
import {validateMail} from "../../../utils/validators";
import {Dialog, DialogContent, DialogContentText, DialogTitle, Typography} from "@mui/material";
import InputLabel from "../../../components/InputLabel";
import {IAddFriendDialog} from "../../../react-app-env";

const AddFriendDialog = (
  {
    isDialogOpen,
    closeDialog,
    sendFriendInvitation
  }: IAddFriendDialog
) => {
  const [mail, setMail] = useState("");
  const [isMailValid, setIsMailValid] = useState(false);

  const handleSendInvitation = () => {
    // send friend request to server
    console.log("send friend request...");
  };

  const handleCloseDialog = () => {
    closeDialog();
    setMail("");
  };

  useEffect(() => {
    setIsMailValid(validateMail(mail));
  }, [mail]);

  return (
    <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
      <DialogTitle>
        <Typography>Invite a friend</Typography>
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          <Typography>Enter email address of friend which you would like to invite</Typography>
          <InputLabel value={mail} setValue={setMail} label="mail" type="text"
                      promptText="Enter email address"/>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default AddFriendDialog;