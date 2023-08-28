import React, { useState } from "react";
import Auth from "./Auth";

const Login = () => {
  const { http,setToken} = Auth();
  const [username, setUsername] = useState();
  const [ password, setPassword ] = useState();


  const save = async () => {
    http.post("/signin", {username : username  ,password : password})
    .then((res) => {
        setToken(res.data.accessToken)
    });
  };
  return (
    <div>
      <label htmlFor="username">Email</label>
      <input
        type="text"
        name="username"
        className="username"
        placeholder="Enter your email address"
        onChange={e => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        className="password"
        placeholder="Enter your password"
        onChange={e=>setPassword(e.target.value)}
      />
      <br />
      <button type="button" onClick={save}>
        Login
      </button>
    </div>
  );
};

export default Login;
