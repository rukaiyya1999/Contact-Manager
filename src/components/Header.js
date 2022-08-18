import React, { useRef } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Avatar,
  Button,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header(props) {
  const inputEl = useRef("");

  const getSearch = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar src={logo} />

          <Typography
            variant="h6"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 4, ml: 2, fontSize: 30 }}
          >
            Contact Manager
          </Typography>

          <Link to="/add" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary" sx={{ ml: "50px" }}>
              Add New Contact
            </Button>
          </Link>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              inputRef={inputEl}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={getSearch}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
