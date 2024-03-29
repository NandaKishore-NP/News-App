import { Avatar, Typography } from "@mui/material";
import React from "react";
import HorizontalStack from "../components/util/HorizontalStack";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns'; // Importing formatDistanceToNow from date-fns
import UserAvatar from "./UserAvatar";

const ContentDetails = ({ username, createdAt, edited, preview }) => {
  // Formatting createdAt using formatDistanceToNow
  const formattedCreatedAt = formatDistanceToNow(new Date(createdAt));

  return (
    <HorizontalStack sx={{}}>
      <UserAvatar width={30} height={30} username={username} />
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        <Link
          color="inherit"
          underline="hover"
          onClick={(e) => {
            e.stopPropagation();
          }}
          to={"/users/" + username}
        >
          {username}
        </Link>
        {!preview && (
          <>
            {" "}
            · {formattedCreatedAt} {edited && <>(Edited)</>}
          </>
        )}
      </Typography>
    </HorizontalStack>
  );
};

export default ContentDetails;
