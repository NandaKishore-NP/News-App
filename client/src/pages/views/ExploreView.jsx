import { Button, Card, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getPosts } from "../../api/posts";
import { isLoggedIn } from "../../helpers/authHelper";
import CreatePost from "../CreatePost";
import GridLayout from "../GridLayout";
import Loading from "../Loading";
import Navbar from "../Navbar";
import SortBySelect from "../SortBySelect";
import PostCard from "../PostCard";
import Sidebar from "../Sidebar";
// import HorizontalStack from "../../components/util/HorizontalStack";
import PostBrowser from "../PostBrowser";

const ExploreView = () => {
  return (
    <Container sx={{p : 2}} >
      <Navbar />
      <div  style={{backgroundColor:"#9AECDB"}}>
      <GridLayout
        left={<PostBrowser createPost contentType="posts" />}
        right={<Sidebar />}
      /></div>
    </Container>
  );
};

export default ExploreView;


