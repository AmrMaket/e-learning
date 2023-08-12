import React from "react";
import Input from "../../components/Input";
import "./styles.css";

function Login() {
  return (
    <div className="container">
      <div className="login-box">
        <h2 className="login-heading">Login</h2>
        <Input label="Email" placeholder="Enter your email" name="email" type="text" />
        <Input label="Password" placeholder="Enter your password" name="password" type="password" />
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default Login;
