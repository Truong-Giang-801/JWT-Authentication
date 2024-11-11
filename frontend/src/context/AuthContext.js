import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Try to fetch user info with the stored token
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch(() => {
          localStorage.removeItem("token");
        });
    }
  }, []);

  const login = async (email, password) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { email, password });
    const token = response.data.token;
    localStorage.setItem("token", token);
    setUser(response.data.user);
  };

  const register = async (email, password) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, { email, password });
    return response.data.message;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
