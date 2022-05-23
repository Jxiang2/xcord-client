import React, {useEffect} from 'react';
import {IMessengerPropsType} from "../../../../react-app-env";
import {styled} from "@mui/system";
import Messages from "./Messages";
import MessagesInput from "./MessagesInput";
import {getDirectChatHistory} from "../../../../utils/socketConnection";

const Wrapper = styled("div")({
  flexGrow: 1,
});

const MessengerContent = ({chosenChatDetails}: IMessengerPropsType) => {
  useEffect(() => {
    (chosenChatDetails?.id) && getDirectChatHistory({receiverUserId: chosenChatDetails?.id,});
  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages/>

      <MessagesInput/>
    </Wrapper>
  );
};

export default MessengerContent;