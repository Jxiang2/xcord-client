import React from 'react';
import {styled} from "@mui/material";
import {connect} from "react-redux";
import {IMessengerPropsType, IReduxState} from "../../../react-app-env";
import WelcomeMessage from "./WelcomeMessage";
import MessengerContent from "./Messenger/MessengerContent";

const MainContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "#36393f",
  marginTop: "48px",
  display: "flex"
});

const DashboardPageMessenger = ({chosenChatDetails}: IMessengerPropsType) => {
  return (
    <MainContainer>
      {!chosenChatDetails ? <WelcomeMessage/> :
        <MessengerContent chosenChatDetails={chosenChatDetails}/>}
    </MainContainer>
  );
};

const mapStoreStateToProps = (state: IReduxState) => {
  return {
    ...state.chat
  };
};

export default connect(mapStoreStateToProps, null)(DashboardPageMessenger);