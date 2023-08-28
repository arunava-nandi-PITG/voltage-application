import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const saveToken = (token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    setToken(token);
    navigate("/dashboard");
  };
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };
  const [token, setToken] = useState(getToken());

  const http = axios.create({
    baseURL: "http://192.168.0.106:8084/api/auth",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const logout = ()=>{
    sessionStorage.clear();
    navigate("/login")
  }
  return {
    setToken: saveToken,
    token,
    getToken,
    http,
    logout
  };
};

export default Auth;
