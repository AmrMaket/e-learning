import React, { useState } from "react";
import axios from "axios";
import Input from "../../components/Input";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function Login() {
  // const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleDataChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", credentials);    
      if (response.status === 200) {
        const responseData = response?.data;
        if (responseData) {
          localStorage.setItem("token", responseData.authorization.token);
          // navigate("/landing");
          console.log("logged");
        }
      }
    } catch (error) {
      console.log("Can't log in: " + error);
    }
  };
  

  return (
    <div className="container">
      <div className="login-box">
        <h2 className="login-heading">Login</h2>
        <Input
          label="Email"
          placeholder="Enter your email"
          value={credentials.email}
          onChange={handleDataChange}
          name="email"
          type="text"
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          value={credentials.password}
          onChange={handleDataChange}
          name="password"
          type="password"
        />
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
