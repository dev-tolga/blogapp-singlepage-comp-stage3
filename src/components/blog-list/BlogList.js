import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useContext } from "react";
import { AntDesign } from '@expo/vector-icons';
import { useFavoriteContext } from "../../contexts/FavoriteContext";

const BlogList = ({ data, handleDelete,handleUpdate, navigation }) => {
  
    const { favoritedBlogList, handleFavorite } = useFavoriteContext();


    const renderItem = ({ item }) => (
      <TouchableOpacity
        onPress={() =>
          console.log(
            navigation.navigate("BlogDetailScreen", { blogId: item.id })
          )
        }
      >
        <View style={styles.blog}>
          <View style={{ flexDirection: "row" }}>
            <AntDesign
              name="edit"
              size={24}
              color="black"
              onPress={() => handleUpdate(item.id)}
            />
            <AntDesign
              name={favoritedBlogList.includes(item.id) ? "heart" : "hearto"}
              size={16}
              style={{ marginLeft: 8 }}
              color="darkred"
              onPress={() => handleFavorite(item.id)}
            />
            <Text style={styles.blogTitle}>{item.title}</Text>
            <AntDesign
              name="delete"
              size={16}
              color="darkred"
              onPress={() => handleDelete(item.id)}
              style={{ flex: 1 }}
            />
           
          </View>
          <Text>{item.blogContent}</Text>
          <Text>{item.author}</Text>
        </View>
      </TouchableOpacity>
    );

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 10, }}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default BlogList;

const styles = StyleSheet.create({
  blog: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    borderColor: "#357C3C",
    justifyContent: "space-around",
    alignItems: "center",
    height: 100,
  },
  blogTitle: {
    flex: 24,
    textAlign: "center",
  },
});
