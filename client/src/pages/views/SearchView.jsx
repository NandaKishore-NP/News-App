import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import GoBack from "../GoBack.jsx";
import GridLayout from "../GridLayout.jsx";
import Navbar from "../Navbar.jsx";
import PostBrowser from "../PostBrowser.jsx";
import Sidebar from "../Sidebar.jsx";

const SearchView = () => {
  return (
    <Container>
      <Navbar />
      <GridLayout
        left={
          <Stack spacing={2}>
            <PostBrowser createPost contentType="posts" />
          </Stack>
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default SearchView;
