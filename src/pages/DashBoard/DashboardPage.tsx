import {styled} from "@mui/material";
import DashboardPageSidebar from "./DashboardPageSidebar/DashboardPageSidebar";
import DashboardPageFriendsSidebar from "./DashboardPageFriendsSidebar/DashboardPageFriendsSidebar";
import DashboardPageMessenger from "./DashboardPageMessenger/DashboardPageMessenger";
import DashboardPageNavbar from "./DashboardPageNavbar/DashboardPageNavbar";
import {useEffect} from "react";
import {logout} from "../../utils/auth";
import {Dispatch} from "@reduxjs/toolkit";
import {getActions} from "../../store/actions/authActions";
import {connect} from "react-redux";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const DashboardPage = ({setUserDetailsAction}: { setUserDetailsAction: (userDetails: object) => void }) => {

  useEffect(() => {
    const userDetails = localStorage.getItem("user");

    if (!userDetails) {
      logout();
    } else {
      // keep login state
      setUserDetailsAction((JSON.parse(userDetails)));
    }
  }, [setUserDetailsAction]);

  return (
    <Wrapper>
      <DashboardPageSidebar/>

      <DashboardPageFriendsSidebar/>

      <DashboardPageMessenger/>

      <DashboardPageNavbar/>
    </Wrapper>
  );
};

const mapActionsToProps = (dispatch: Dispatch) => {
  return {...getActions(dispatch)};
};
export default connect(null, mapActionsToProps)(DashboardPage);