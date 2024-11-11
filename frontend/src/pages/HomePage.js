// src/pages/HomePage.js
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { user } = useContext(AuthContext); // Access the user context to check auth status

  return (
    <div className="container homepage">
      <h1>Welcome to Our App!</h1>
      {user ? (
        // Content for authenticated users
        <div>
          <h2>Hello, {user.username || "User"}!</h2>
          <p>Thank you for being a part of our community.</p>
          <Link to="/profile">
            <button>Go to Profile</button>
          </Link>
        </div>
      ) : (
        // Content for unauthenticated users
        <div>
          <p>Please log in or register to access all features.</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button style={{ marginLeft: "10px" }}>Register</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
