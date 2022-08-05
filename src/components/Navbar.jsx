import { CatchingPokemon, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const ToolbarStyled = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
// * for big screen more than 600px
const Icon = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  // only show up if it is bigger than small
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

//* for small screen more than 600px
const SmallScreen = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <ToolbarStyled>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Social
        </Typography>
        <CatchingPokemon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icon>
          <Badge badgeContent={4} color="error">
            <Mail color="action" sx={{ color: "white" }} />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications color="action" sx={{ color: "white" }} />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Salamn"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
          />
          <SmallScreen>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Salamn"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            />
            <Typography variant="span">Salman</Typography>
          </SmallScreen>
        </Icon>
      </ToolbarStyled>
    </AppBar>
  );
};

export default Navbar;
