import React from "react";
import { ListItemAvatar, ListItemText, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import UserAvatar from "./UserAvatar";
import { format } from 'date-fns';

const UserMessengerEntry = (props) => {
  const recipient = props.conversation.recipient;
  const username = recipient.username;
  const selected =
    props.conservant && props.conservant.username === recipient.username;

  const handleClick = () => {
    props.setConservant(recipient);
  };

  // Ensure props.conversation.lastMessageAt is a valid date object before using date-fns
  const lastMessageDate = new Date(props.conversation.lastMessageAt);
  const formattedDate = format(lastMessageDate, 'dd/MM/yyyy HH:mm'); // Adjust format as needed

  return (
    <MenuItem
      onClick={handleClick}
      sx={{ padding: 2 }}
      divider
      disableGutters
      selected={selected}
    >
      <ListItemAvatar>
        <UserAvatar height={45} width={45} username={username} />
      </ListItemAvatar>
      <ListItemText
        primary={username}
        secondary={formattedDate}
      />
    </MenuItem>
  );
};

export default UserMessengerEntry;
