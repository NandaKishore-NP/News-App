import { Card, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Copyright from "../components/Copyright";


const Footer = () => {
  
  return (
    <Box pb={3}>
      <Card>
        <Typography variant="subtitle1">
          Our RockStar Team! <br></br>
          
          TeamLead - Nandakishore⭐ <br></br>

          Team Members <br></br>
          Vignesh <br></br>
          Nilanchana <br></br>
          Akshan <br></br>
          Ratheesh <br></br>
          Tamilmani<br></br>
        </Typography>
      </Card>
    </Box>
  );
};


export default Footer;
