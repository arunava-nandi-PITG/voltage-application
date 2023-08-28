import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import axios from "axios";
import React from "react";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ActualSalary = () => {
  const [employee, setEmployee] = useState({
    name: "",
    designation: "",
    salary: "",
  });

  const { id } = useParams();
  const { name, designation, salary } = employee;

  //   const onInputChange = (e) => {
  //     setEmployee({ ...employee, [e.target.name]: e.target.value });
  //   };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    const result = await axios.get(
      `http://172.16.163.41:8080/api/v1/employee/getsalary/${id}`
    );
    setEmployee(result.data);
  };

  return (
    <Stack alignItems="center">
      <Card sx={{ minWidth: 20, maxWidth: 500 }}>
        <CardHeader title="Employee Actual Salary" />
        <Divider/>
        <CardContent>
          <Stack spacing={2}>
            <Stack>
              <Typography variant="h4">UseName : {name}</Typography>
            </Stack>
            <Stack>
              <Typography variant="h4">Designation : {designation}</Typography>
            </Stack>
            <Stack>
              <Typography variant="h4">Salary : {salary}</Typography>
            </Stack>
          </Stack>
        </CardContent>
        <Stack alignItems='center'>
        <Button component={Link} to="/dashboard" variant="outlined" color="primary">Back</Button>
        </Stack>
      </Card>
    </Stack>
  );
};

export default ActualSalary;
