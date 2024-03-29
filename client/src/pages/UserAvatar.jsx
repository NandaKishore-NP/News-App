import { Avatar } from "@mui/material";
import React from "react";

const UserAvatar = ({ username, height, width }) => {
  return (
    <Avatar
      sx={{
        height: height,
        width: width,
        backgroundColor: "lightgray",
      }}
      src={"https://robohash.org/" + username}
    />
  );
};

export default UserAvatar;

// import React from "react";
// import Avatar, { genConfig } from 'react-nice-avatar';

// const UserAvatar = ({ username, height, width, shape }) => {
//   const config = genConfig(username)
//   return (
//     <Avatar style={{ width: width, height: height }} shape={shape} {...config} />
//   );
// };

// export default UserAvatar;