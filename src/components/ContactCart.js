import React from "react";
import profile from "../images/profile.jpg";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
  Box,
} from "@mui/material";

const ContactCart = (props) => {
  const { id, email, name } = props.contacts;

  return (
    <Box className=" backclass ">
      <div className="tabledata">
        <Link
          to={{
            pathname: `/contact/${id}`,
            state: { contact: props.contacts },
          }}
          style={{ textDecoration: "none" }}
        >
          <List sx={{ width: "100%", maxWidth: 360 }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={profile} />
              </ListItemAvatar>
              <ListItemText primary={name} secondary={email} />
            </ListItem>
          </List>
        </Link>
      </div>
      <Button
        variant="contained"
        color="error"
        sx={{ mt: 3 }}
        onClick={() => props.clickHandeler(id)}
      >
        Delete
      </Button>
      &nbsp;&nbsp;
      <Link to={{ pathname: `/edit`, state: { contact: props.contacts } }}>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Edit
        </Button>
        <br />
        <br />
      </Link>
    </Box>
  );
};
export default ContactCart;
