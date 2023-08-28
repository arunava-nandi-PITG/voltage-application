import { Password } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

  const [user, setUser] = useState({
    username : "",
    email : "",
    phone : "",
    password : "",
    confirmPassword : "",
  });
  const{username, emial, Password, phonenumber, role} = user;

  const onSubmit = async (e)=>{
    setUser({...user , [e.target.name] : e.target.value});
  }

  return (
    <Stack alignItems="center">
      <Card sx={{ minWidth: 20, maxWidth: 500 }}>
        <CardHeader title="Register" />
        <Divider />
        <CardContent>
          <form autoComplete="off" onSubmit={(e) => onSubmit(e)}>
            <TextField
              label="username"
              variant="outlined"
              color="secondary"
              fullWidth
              value={"username"}
              name="username"
              required
            />
            <TextField
              label="email"
              variant="outlined"
              color="secondary"
              fullWidth
              value={"email"}
              name="email"
              required
            />
            <TextField
              label="password"
              variant="outlined"
              color="secondary"
              fullWidth
              value={"password"}
              name="password"
              required
            />
            <TextField
              label="confirmPassword"
              variant="outlined"
              color="secondary"
              fullWidth
              value={"confirmPassword"}
              name="confirmPassword"
              required
            />
            <Stack spacing={2} direction="row">
              <Button variant="outlined" color="secondary" type="submit">
                Register
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                type="button"
                component={Link}
                to=""
              >
                Cancel
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Register;
