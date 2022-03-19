import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import React, { useState, useContext } from "react";
import Button from "../components/common/Button";
import { AuthContext } from "../contexts/AuthContext";

// Create a component for the form Login Screen
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const { handleLogin } = useContext(AuthContext);

  const onPressLogin = async (email, password) => {
    const response = await handleLogin(email, password);
    if (!response) {
      Alert.alert("Login Filed", "Do you want register", [
        {
          text: "Cancel",
          onPress: () => navigation.navigate("LoginScreen"),
          style: "cancel",
        },
        { text: "OK", onPress: () => navigation.navigate("RegisterScreen") },
      ]);
    }
  };

  
  

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 100 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Welcome to Blog App
        </Text>
      </View>
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
        secureTextEntry={passwordVisibility}
        
      />
      <Button
        onPress={() => onPressLogin(email, password)}
        buttonTitle={"Login"}
      />
      <Button
        onPress={() => setPasswordVisibility((prevState) => !prevState)}
        buttonTitle={"Hide Text"}
      />
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
