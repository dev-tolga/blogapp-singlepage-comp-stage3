import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./../../screens/HomeScreen";
import BlogsScreen from "./../../screens/BlogsScreen";
import BlogDetailScreen from "./../../screens/BlogDetailScreen";
import UpdateBlog from "../../screens/UpdateBlog";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BlogsScreen" component={BlogsScreen} />
      <Stack.Screen
        name="BlogDetailScreen"
        component={BlogDetailScreen}
      
      />
      <Stack.Screen name="UpdateBlog" component={UpdateBlog}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
