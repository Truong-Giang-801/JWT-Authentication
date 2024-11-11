import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);  // Get user info and logout function
  const navigate = useNavigate();  // Navigate for redirection after logout

  const handleLogout = () => {
    logout();  // Call the logout function from context
    navigate("/login");  // Redirect to login page after logout
  };

  return (
    <div className="header">
      <Link to="/" className="logo">JWT Authentication</Link>
      <div className="header-right">
        <Link to="/" className="nav-link">Home</Link>
        {user && (
          <button onClick={handleLogout} className="nav-button">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
