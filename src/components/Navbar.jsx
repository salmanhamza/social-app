import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import React from "react";

const ToolbarStyled = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <ToolbarStyled>
        <Typography variant="h6">Social</Typography>
      </ToolbarStyled>
    </AppBar>
  );
};

export default Navbar;
