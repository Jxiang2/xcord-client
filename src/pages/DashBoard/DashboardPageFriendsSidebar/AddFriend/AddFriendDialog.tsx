import React, {useEffect, useState} from 'react';
import {validateMail} from "../../../../utils/validators";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
} from "@mui/material";
import InputLabel from "../../../../components/InputLabel";
import {IAddFriendDialog} from "../../../../react-app-env";
import CustomPrimaryButton from "../../../../components/CustomPrimaryButton";

const AddFriendDialog = (
  {
    isDialogOpen,
    closeDialog,
    sendFriendInvitation
  }: IAddFriendDialog
) => {
  const [mail, setMail] = useState("");
  const [isMailValid, setIsMailValid] = useState(false);
  const [addList, setAddList] = useState<string[]>([]);

  const handleSendInvitation = () => {
    // send friend request to server
    addList.forEach((mail) => console.log(mail));
    closeDialog();
    setMail("");
    setAddList([]);
  };

  const handleCloseDialog = () => {
    closeDialog();
    setMail("");
    setAddList([]);
  };

  const handleAddList = () => {
    (mail) && setAddList(prevState => [...prevState, mail]);
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
          <InputLabel
            value={mail}
            setValue={setMail}
            label="mail"
            type="text"
            promptText="Enter email address"
          />
        </DialogContentText>
      </DialogContent>

      <Typography>
        {addList.map(mail =>
          <Typography
            id={mail + Math.random()}
            style={{textAlign: "center"}}>
            {mail}
          </Typography>)}
      </Typography>

      <DialogActions>
        <CustomPrimaryButton
          label="Add"
          disabled={!isMailValid}
          clickButton={handleAddList}
          additionalStyles={{
            margin: "10px 15px"
          }}
        />

        <CustomPrimaryButton
          label="Send"
          disabled={addList.length <= 0}
          clickButton={handleSendInvitation}
          additionalStyles={{
            margin: "10px 15px"
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

export default AddFriendDialog;