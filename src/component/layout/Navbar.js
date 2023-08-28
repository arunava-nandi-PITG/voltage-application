import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Auth from "../authentication/Auth";

import { useState } from "react";
import { Stack } from "@mui/material";

const Navbar = () => {
  const { token, logout } = Auth();
  const [user, setUser] = useState(false);

  // const logoutUser = () => {
  //   if (token  !== undefined) {
  //     logout();
  //   }
  // };

  const showAdd = () => {
    if (user) {
      return (
        <button className="btn btn-outline-light" type="logout">
          Logout
        </button>
      );
      // return <Link className="btn btn-outline-light" to='/addEmployee' type="Add">Add Employee</Link>
    }
  };
  const showLogin = () => {
    if (!user) {
      return (
        <button className="btn btn-outline-light" type="Login">
          Login
        </button>
      );
    }
  };

  return (
    <Stack>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ mx: 2 }}>
            Client Imitation
          </Typography>  
            <Button component={Link} to="/addEmployee" variant="outline" endIcon={<AddIcon/>} sx={{ px:2}}>
              Add User
            </Button>  
        </Toolbar>
      </AppBar>
    </Stack>
  );
};

export default Navbar;
