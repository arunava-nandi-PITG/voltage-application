import axios from "axios";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    designation: "",
    salary: "",
  });
  const { name, designation, salary } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://172.16.163.41:8080/api/v1/employee/savesalary", employee);
    navigate("/dashboard");
  };

  

  return (
    <Stack alignItems="center">
      <Card sx={{minWidth: 20, maxWidth: 500}}>
        <CardHeader title='Add Employee'/>
        <Divider/>
        <CardContent >
          <form autoComplete="off" onSubmit={(e) => onSubmit(e)}>
            <TextField
              label="Name"
              required
              variant="outlined"
              color="secondary"
              // type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={name}
              onChange={(e) => onInputChange(e)}
              name="name"
            />
            <TextField
              label="Designation"
              required
              variant="outlined"
              color="secondary"
              type="text"
              value={designation}
              fullWidth
              sx={{ mb: 3 }}
              onChange={(e) => onInputChange(e)}
              name="designation"
            />
            <TextField
              label="Salary"
              required
              variant="outlined"
              color="secondary"
              type="number"
              value={salary}
              fullWidth
              sx={{ mb: 3 }}
              onChange={(e) => onInputChange(e)}
              name="salary"
            />
            <Stack spacing={2} direction="row" justifyContent="center">          
              <Button variant="outlined" color="secondary" type="submit">
                Add
              </Button>
              <Button
                variant="outlined"
                color="error"
                type="button"
                component={Link}
                to="/dashboard"
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

export default AddUser;
