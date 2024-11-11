// src/pages/LoginPage.js
import React from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => (
  <div className="login-page">
    <h2>Login</h2>
    <LoginForm />
    <p>
      Don’t have an account? <Link to="/register">Register here</Link>.
    </p>
  </div>
);

export default LoginPage;
