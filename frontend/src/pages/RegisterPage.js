// src/pages/RegisterPage.js
import React from "react";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";

const RegisterPage = () => (
  <div className="register-page">
    <h2>Register</h2>
    <RegisterForm />
    <p>
      Already have an account? <Link to="/login">Login here</Link>.
    </p>
  </div>
);

export default RegisterPage;
