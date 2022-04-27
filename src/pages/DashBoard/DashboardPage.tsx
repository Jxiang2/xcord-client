import {styled} from "@mui/material";
import SideBar from "./SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger";
import NavBar from "./NavBar";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const DashboardPage = () => {
  return (
    <Wrapper>
      <SideBar/>

      <FriendsSideBar/>

      <Messenger/>

      <NavBar/>
    </Wrapper>
  );
};

export default DashboardPage;