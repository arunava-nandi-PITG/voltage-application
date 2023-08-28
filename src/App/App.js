import { Route, Routes } from "react-router-dom";
import AddUser from "../component/User/AddUser";
import EditUser from "../component/User/EditUser";
import Navbar from "../component/layout/Navbar";
import Dashboard from "../component/pages/Dashboard";
import ActualSalary from "../component/User/ActualSalary";

import Login from "../component/authentication/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/addEmployee" element={<AddUser />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/editEmployee/:id" element={<EditUser />} />
        <Route exact path="/actualSalary/:id" element={<ActualSalary />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
