import React from "react";
import { Button, Box, Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";
class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.contact;
    this.state = {
      id,
      name,
      email,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are mandetory...");
      return;
    }
    this.props.updateHandeler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <Box className="editClass">
        <Typography sx={{ fontSize: 25 }}>Edit Contact</Typography>
        <form className="formclass">
          <label>Name </label>
          <br />
          <TextField
            type="text"
            id="outlined-basic"
            label={this.state.name}
            variant="outlined"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <br />
          <br />

          <label>Phone </label>
          <br />
          <TextField
            type="number"
            id="outlined-basic"
            color="secondary"
            label={this.state.email}
            variant="outlined"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <br />
          <br />

          <Button variant="contained" color="primary" onClick={this.update}>
            Edit
          </Button>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="success" sx={{ ml: 2 }}>
              Back To Contact List
            </Button>
          </Link>
        </form>
      </Box>
    );
  }
}
export default EditContact;
