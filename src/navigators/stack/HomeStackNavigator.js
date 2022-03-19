import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./../../screens/HomeScreen";
import BlogsScreen from "./../../screens/BlogsScreen";
import BlogDetailScreen from "./../../screens/BlogDetailScreen";
import UpdateBlog from "../../screens/UpdateBlog";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../../screens/ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import LoginScreen from "../../screens/LoginScreen";
import { AuthContext } from "../../contexts/AuthContext";
import RegisterScreen from "../../screens/RegisterScreen";
import ProfileStackNavigator from "../profile/ProfileStackNavigator";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarOptions: {
          activeTintColor: "#fff",
          inactiveTintColor: "#fff",
          headerShown: false,
          labelStyle: {
            fontSize: 12,
          },
        },
      }}
      sceneContainerStyle={{ paddingHorizontal: 5 }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Blogs"
        component={BlogsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="form" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStackNavigator = () => {
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuth ? (
        <>
          <Stack.Screen name="Home" component={HomeTabNavigator} />
          <Stack.Screen name="UpdateBlog" component={UpdateBlog} />

          <Stack.Screen name="BlogDetailScreen" component={BlogDetailScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
