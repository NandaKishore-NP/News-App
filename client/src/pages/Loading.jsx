import { CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";

const Loading = ({ label }) => {
  return (
    <Stack alignItems="center">
      <CircularProgress size={30} sx={{ my: 2 }} />
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        {label || "Loading"}
      </Typography>
    </Stack>
  );
};

export default Loading;
