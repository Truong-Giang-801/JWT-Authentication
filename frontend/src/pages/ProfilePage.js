// src/pages/ProfilePage.js
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Profile from "../components/Profile";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [user, navigate]);

  return user ? (
    <div className="profile-page">
      <h2>Your Profile</h2>
      <Profile />
    </div>
  ) : (
    <p>Redirecting to login...</p>
  );
};

export default ProfilePage;
