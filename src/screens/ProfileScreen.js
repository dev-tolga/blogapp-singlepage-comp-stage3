import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <ScrollView>
      <View style={{ alignItems: "center", margin: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Profile Screen</Text>
      </View>
      <View
        style={{
          height: 80,
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff" }}>Profile Screen</Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "100%",

          marginTop: 20,
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 70,
              width: "100%",
              backgroundColor: "#357C3C",
            }}
          >
            <AntDesign name="edit" size={24} color="black" />
            <Text style={{ fontSize: 20, color: "white", paddingLeft: 20 }}>
              My Blogs
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
              height: 70,
              width: "100%",
              backgroundColor: "#357C3C",
            }}
          >
            <AntDesign name="edit" size={24} color="black" />
            <Text style={{ fontSize: 20, color: "white", paddingLeft: 20 }}>
              Autors
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 70,
              marginTop: 15,
              width: "100%",
              backgroundColor: "#357C3C",
            }}
          >
            <AntDesign name="edit" size={24} color="black" />
            <Text style={{ fontSize: 20, color: "white", paddingLeft: 20 }}>
              Favorites
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
