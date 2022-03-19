import { View, Text, Aler } from "react-native";
import React, { useState, useEffect, createContext ,useReducer} from "react";
import {
  getUsers,
  getUsersById,
  registerUser,
} from ".././library/network/requests/users";
import { Alert } from "react-native-web";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userList, setUserList] = useState([]);

  // useEffect(() => {
  //   getAllUser();
  // }, []);

  const handleRegister = async (email, password) => {
    const _userList = await getUsers();
    const _user = { id: _userList.data.length + 1, email, password };
    const response = await registerUser(_user);
    console.log(response);
    if (response) {
      return true;
    } else {
      return false;
    }
  };

  const handleLogin = async (email, password) => {
    try {
      setIsLoading(true);
      const response = await getUsers();
      if (response && response.status === 200) {
        const user = response.data.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          console.log("user: ", user);
          setUser(user);
          setAuth(true);
          setIsLoading(false);
          return true;
        } else {
          setAuth(false);
          return false;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  //servise gidicek user var mı bakcak varsa isLogini tru
  return (
    <AuthContext.Provider
      value={{ isAuth, user, setUser, handleLogin, handleRegister,isLoading ,setAuth}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
