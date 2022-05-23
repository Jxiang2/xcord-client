import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {IMessagesPropType, IReduxState} from "../../../../react-app-env";
import {styled} from "@mui/system";
import MessagesHeader from "./MessagesHeader";
import SingleMessage from "./SingleMessage";

const MainContainer = styled("div")({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const DateSeparatorContainer = styled("div")({
  width: "95%",
  backgroundColor: "#b9bbbe",
  height: "1px",
  position: "relative",
  marginTop: "20px",
  marginBottom: "10px"
});

const DateLabel = styled("span")({
  backgroundColor: "#36393f",
  position: "absolute",
  left: "45%",
  top: "-10px",
  color: "#b9bbbe",
  padding: "0 5px",
  fontSize: "14px"
});

const Messages = ({messages}: IMessagesPropType) => {
  return (
    <MainContainer>
      <MessagesHeader/>

      {messages?.map((message, index) => {
        let sameAuthor: boolean = false;
        let sameDay: boolean = false;
        if (messages) {
          sameAuthor =
            index > 0 &&
            messages[index].author._id === messages[index - 1].author._id;

          sameDay =
            index > 0 &&
            new Date(message.date).toDateString() === new Date(messages[index - 1].date).toDateString();
        }

        return (
          <Fragment key={message._id}>
            {(!sameDay || index === 0) &&
              <DateSeparatorContainer>
                <DateLabel>{message.date.substring(0, 10)}</DateLabel>
              </DateSeparatorContainer>}

            <SingleMessage
              content={message.content}
              username={message.author.username}
              sameAuthor={sameAuthor}
              date={message.date}
              sameDay={sameDay}
            />
          </Fragment>
        );
      })}
    </MainContainer>
  );
};

const mapStoreStateToProps = (state: IReduxState) => {
  return {
    ...state.chat,
  };
};

export default connect(mapStoreStateToProps, null)(Messages);