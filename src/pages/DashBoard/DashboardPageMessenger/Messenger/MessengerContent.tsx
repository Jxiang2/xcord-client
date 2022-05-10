import React, {useEffect} from 'react';
import {IMessengerPropsType} from "../../../../react-app-env";
import {styled} from "@mui/system";
import Messages from "./Messages";
import MessagesInput from "./MessagesInput";

const Wrapper = styled("div")({
  flexGrow: 1,
});

const MessengerContent = ({chosenChatDetails}: IMessengerPropsType) => {
  useEffect(() => {
    // TODO
  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages/>

      <MessagesInput/>
    </Wrapper>
  );
};

export default MessengerContent;