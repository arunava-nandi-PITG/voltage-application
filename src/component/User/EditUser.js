import React, { useEffect, useState } from "react";
import { TextField, Button, Stack, Card, CardHeader, CardContent, Divider } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    designation: "",
    salary: "",
  });

  const { id } = useParams();
  const { name, designation, salary } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://172.16.163.41:8080/api/v1/employee/updatesalary/${id}`,
      employee
    );
    navigate("/dashboard");
  };
  const loadUser = async () => {
    const result = await axios.get(
      `http://172.16.163.41:8080/api/v1/employee/salary/${id}`
    );
    setEmployee(result.data);
  };
  return (
    <Stack alignItems='center'>
      <Card sx={{minWidth: 20, maxWidth: 500}}>
        <CardHeader title="Edit Employee" />
        <Divider/>
        <CardContent>
          <form autoComplete="off" onSubmit={(e) => onSubmit(e)}>
            <TextField
              label="Name"
              required
              variant="outlined"
              color="secondary"
              type="text"
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
            <Stack direction="row" spacing={2} justifyContent='center'>
              <Button variant="outlined" color="secondary" type="submit" >
                submit
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

export default EditUser;
