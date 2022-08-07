import { Box, Fab, Tooltip } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import React from "react";

const Add = () => {
  return (
    <Box>
      <Tooltip
        title="delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%-25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default Add;
