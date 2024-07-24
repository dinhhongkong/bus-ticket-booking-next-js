"use client"
import {createContext, useState, useContext, useEffect} from 'react';
import { jwtDecode } from "jwt-decode";
import {fetchData} from "@/api/apiClient";

const AuthenticationContext = createContext();

export function AuthenticationProvider({children}) {
  const [auth, setAuth] = useState({
    customerId: null,
    username: "",
    isAuthenticated: false
  });

  useEffect(() => {
    console.log("useEffect chạy"); // Thêm log để kiểm tra
    const token = localStorage.getItem('token');
    if (token) {
      const validateToken = async () => {
        try {
          const response = await fetchData(`/api/v1/auth/validate-token/${token}`);
          const  payload = jwtDecode(token)
          setAuth({
            customerId: payload["customerId"],
            username: payload["username"],
            isAuthenticated: true
          });
        } catch (error) {
          console.error('Error validating token:', error);
          localStorage.removeItem('token');
          setAuth({
            customerId: null,
            username: "",
            isAuthenticated: false
          });
        }
      };
      validateToken()
    }
  }, []);

  const login = (token) => {
    const payload = jwtDecode(token);
    localStorage.setItem('token', token);
    setAuth({
      customerId: payload["customerId"],
      username: payload["username"],
      isAuthenticated: true
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({
      customerId: null,
      username: "",
      isAuthenticated: false
    });
  };

  return (
    <AuthenticationContext.Provider value={{auth, login, logout}}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthenticationContext);
}