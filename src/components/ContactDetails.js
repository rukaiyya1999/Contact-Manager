import { Avatar, Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import female from "../images/female.jpg";

const ContactDetails = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <Box sx={{ display: "flex", mt: 5 }}>
      <Grid sx={{ ml: 5 }}>
        <Avatar src={female} sx={{ width: 300, height: 300 }} />
      </Grid>

      <Grid sx={{ ml: 20 }}>
        <Typography variant="h5">Information About this Contact</Typography>
        <br />
        <Typography>{name}</Typography>
        <Typography>{email}</Typography>
        <br></br>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="success">
            Back To Contact List
          </Button>
        </Link>
      </Grid>
    </Box>
  );
};
export default ContactDetails;
