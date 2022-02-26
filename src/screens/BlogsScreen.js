import React, { useState, useEffect, useCallback } from "react";
import { Alert, StyleSheet, View, TouchableOpacity } from "react-native";
import Button from "../components/common/Button";
import useFetch from "../hooks/useFetch";
import { blogs } from "./../../assets/data/blogs";
import BlogList from "./../components/blog-list/BlogList";
import Searchbar from "./../components/shared/searchbar/Searchbar";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { env } from ".././library/network/env/env";
import { getBlogs } from "../library/network/requests/blogs";
import { deleteBlogById } from "../library/network/requests/blogs";

const BlogsScreen = ({ navigation, route }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [blogList, setBlogList] = useState([]);

  // const { data: blogList, isloading, error } = useFetch();

  const getBlogList = async () => {
    setIsLoading(true);
    try {
      const response = await getBlogs();

      setBlogList(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Error", "Something went wrong");
    }
  };

  useEffect(() => {
    console.log("useEffect");
    getBlogList();
  }, []);

  const handleSearch = (search) => {
    setSearchTerm(search);
    if (search.trim()) {
      setSearchResults(() =>
        blogList.filter(
          (blog) =>
            blog.title
              .toLowerCase()
              .trim()
              .includes(search.toLowerCase().trim()) && blog
        )
      );
    } else {
      setSearchResults([]);
    }
  };
  const handleDelete = (id) => {
    Alert.alert("O-oh", "Are you sure to delete this blog?", [
      {
        text: "Yes!",
        onPress: async () => {
          setIsLoading(true);
          const res = await deleteBlogById(id);
          console.log(res.status);
          if (res && res.status === 200) {
            getBlogList();
          } else {
            setIsLoading(false);
            Alert.alert("Error", "Something went wrong");
          }
        }, //setBlogList(prevState => prevState.filter(blog => blog.id !== item.id)),
        style: "danger",
      },
      {
        text: "Oh no!",
        style: "cancel",
      },
    ]);
  };

  const handleUpdate = (blogId) => {
    //alert(item.title);
    // console.log("update blog", blogId);
    navigation.navigate("UpdateBlog", { blogId });
  };

  return (
    <View>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Searchbar
              handleSearch={handleSearch}
              searchTerm={searchTerm}
              style={{ flex: 1, marginRight: 10, marginTop: 10 }}
            />
          </View>
          {blogList && (
            <BlogList
              data={searchResults.length > 0 ? searchResults : blogList}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              navigation={navigation}
            />
          )}
        </>
      )}
    </View>
  );
};

export default BlogsScreen;

const styles = StyleSheet.create({});
