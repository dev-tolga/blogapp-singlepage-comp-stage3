import { View, Text } from "react-native";
import React, { useState, useEffect ,createContext} from "react";
import {
  getUsers,
  getUsersById,
  registerUser,
} from ".././library/network/requests/users";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   handleLogin();
  // }, [])
  
  const handleLogin = async (email, password) => {
    try {
      const response = await getUsers();
      if (response && response.status === 200) {
        console.log("response: ", response);
        const user = response.data.find(
          (user) => user.email === email && user.password === password
        );
        setUser(user);
        setAuth(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //servise gidicek user var mı bakcak varsa isLogini tru
  return (
    <AuthContext.Provider value={{ isAuth, user, setUser,handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
