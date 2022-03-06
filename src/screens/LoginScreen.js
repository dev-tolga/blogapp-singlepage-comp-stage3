import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import React, { useState,useContext } from "react";
import Button from "../components/common/Button";
import { AuthContext } from "../contexts/AuthContext";

// Create a component for the form Login Screen
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useContext(AuthContext);

  const onPressLogin = (email,password) => {
   
    handleLogin(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="email..."
        keyboardType="email-address"
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="password..."
        textContentType="password"
      />
      <Button onPress={() => onPressLogin(email,password)} buttonTitle={"Login"} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "80%",
    height: 40,
    marginTop: 5,
  },
});

export default LoginScreen;
