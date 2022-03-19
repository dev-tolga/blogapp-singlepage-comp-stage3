import { StyleSheet, Text, View } from "react-native";
import React, { useReducer } from "react";
import Button from "../components/common/Button";

const initialState = 10;
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 2 <= 20 ? state + 2 : state;
    case "subtract":
      return state - 2 >= 0 ? state - 2 : state;
    case "reset":
      return 10;
    default:
      return state;
  }
};

const FavoritesScreen = ({ navigation }) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Text>{count}</Text>
      <Button buttonTitle={"add"} onPress={() => dispatch("add")} />

      <Button buttonTitle={"subtract"} onPress={() => dispatch("subtract")} />

      <Button buttonTitle={"reset"} onPress={() => dispatch("reset")} />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
