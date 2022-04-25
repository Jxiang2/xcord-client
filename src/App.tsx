import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import DashboardPage from "./pages/DashBoard/DashboardPage";
import AlertNotification from "./components/AlertNotification";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<LoginPage/>}/>
          <Route path={"/register"} element={<RegisterPage/>}/>
          <Route path={"/dashboard"} element={<DashboardPage/>}/>
          <Route path={"/"} element={<DashboardPage/>}/>
        </Routes>
      </BrowserRouter>

      <AlertNotification/>
    </>
  );
}

export default App;
