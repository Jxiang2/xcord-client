import {styled} from "@mui/material";
import DashboardPageSidebar from "./DashboardPageSidebar/DashboardPageSidebar";
import DashboardPageFriendsSidebar from "./DashboardPageFriendsSidebar/DashboardPageFriendsSidebar";
import DashboardPageMessenger from "./DashboardPageMessenger/DashboardPageMessenger";
import DashboardPageNavbar from "./DashboardPageNavbar/DashboardPageNavbar";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const DashboardPage = () => {
  return (
    <Wrapper>
      <DashboardPageSidebar/>

      <DashboardPageFriendsSidebar/>

      <DashboardPageMessenger/>

      <DashboardPageNavbar/>
    </Wrapper>
  );
};

export default DashboardPage;