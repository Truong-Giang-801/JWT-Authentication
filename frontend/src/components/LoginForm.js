import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();  // Initialize the navigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);  // Call the login function from context
      setSuccessMessage("Login successful!");  // Set success message
      setError("");  // Clear any previous error message
      navigate("/profile");  // Redirect to the profile page after successful login
    } catch (error) {
      setError("Invalid email or password");  // Set error message if login fails
      setSuccessMessage("");  // Clear any success message
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}  {/* Display success message */}
      {error && <p style={{ color: "red" }}>{error}</p>}  {/* Display error message */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
