import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Button from "../components/common/Button";

//Register Screen Component with props from navigation object and state from context object
const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleRegister } = useContext(AuthContext);

  const onPressRegister = async (email, password) => {
    if (email === "" || password === "") {
      Alert.alert("Register Filed", "Please fill all fields");
    } else {
      const res = await handleRegister(email, password);
      if (!res) {
        Alert.alert("Register Failed", "Do you want login", [
          {
            text: "Cancel",
            onPress: () => navigation.navigate("LoginScreen"),
            style: "cancel",
          },
          { text: "OK", onPress: () => navigation.navigate("RegisterScreen") },
        ]);
      } else {
        navigation.navigate("LoginScreen");
      }
    }
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
        secureTextEntry={true}
      />
      <Button
        onPress={() => onPressRegister(email, password)}
        buttonTitle={"Register"}
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

//make this component available to the app
export default RegisterScreen;
