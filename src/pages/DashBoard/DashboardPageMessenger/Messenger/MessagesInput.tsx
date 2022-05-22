import React, {useState} from 'react';
import {styled} from "@mui/system";
import {connect} from "react-redux";
import {IMessagesInputPropsType, IReduxState} from "../../../../react-app-env";
import {sendDirectMessage} from "../../../../utils/socketConnection";

const MainContainer = styled("div")({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const Input = styled("input")({
  backgroundColor: "#2f3136",
  width: "80%",
  height: "40px",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  padding: "0 10px",
  marginLeft: "10px"
});

const AdditionalArea = styled("div")({
  backgroundColor: "#2f3136",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "8px",
  width: "15%",
  height: "40px",

});

const MessagesInput = ({chosenChatDetails}: IMessagesInputPropsType) => {
  const [message, setMessage] = useState("");

  const handleMessageValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handSendMessage();
    }
  };

  const handSendMessage = () => {
    if (message.length > 0) {
      sendDirectMessage({
        receiverUserId: chosenChatDetails,
        content: message,
      });
    }

    setMessage("");
  };

  return (
    <MainContainer>
      <Input
        placeholder={`Write message to ${chosenChatDetails?.name}`}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
      />

      <AdditionalArea>
        Additional Area
      </AdditionalArea>
    </MainContainer>
  );
};

const mapStoreStateToProps = (state: IReduxState) => {
  return {
    ...state.chat
  };
};

export default connect(mapStoreStateToProps, null)(MessagesInput);