import React, {useState} from 'react';
import CustomPrimaryButton from "../../../../components/CustomPrimaryButton";
import AddFriendDialog from "./AddFriendDialog";

const additionalStyles = {
  margin: "10px 5px",
  width: "80%",
  height: "30px",
  backgroundColor: "#3ba55d"
};

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label={"ADD FRIEND"}
        clickButton={() => setIsDialogOpen(true)}
      />

      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialog={() => setIsDialogOpen(false)}
        sendFriendInvitation={() => console.log("hello")}
      />
    </>
  );
};

export default AddFriendButton;