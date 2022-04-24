import Box from "@mui/material/Box";
import {styled} from "@mui/material";
import {ReactChildrenPropsType} from "../react-app-env";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#837ae6"
});

const AuthBox = ({children}: ReactChildrenPropsType) => {
  return (
    <BoxWrapper>
      <Box sx={{
        width: 700,
        height: 400,
        bgcolor: "#484754",
        borderRadius: "7.5px",
        boxShadow: "0 2px 10px rgb(0 0 0 / 20%)",
        flexDirection: "column",
        padding: "25px"
      }}>
        {children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;