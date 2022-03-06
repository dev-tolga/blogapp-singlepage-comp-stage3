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
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { useFavoriteContext } from "../contexts/FavoriteContext";

const BlogsScreen = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const [isFavoriteFilterOn, setIsFavoriteFilterOn] = useState(false);

   const { favoritedBlogList, handleFavorite } = useFavoriteContext();

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

  /// üçü de aynı işi yapıyor. ama en efective kullanılan sımdılık acık olan kod fakat context apiıle yapılır dogrusu

  // useEffect(() => {
  //   if(isFocused) {
  //     getBlogList();
  //   }
  // }, [isFocused]);

  useFocusEffect(
    useCallback(() => {
      getBlogList();
    }, [])
  );

  // useEffect(() => {
  //   navigation.addListener("focus", () => {
  //     getBlogList();
  //   });
  // }, []);

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

  const blogListData = () => {
    if (isFavoriteFilterOn) {
      if (searchResults.length > 0) {
        return searchResults.filter(
          (blog) => favoritedBlogList.includes(blog.id) && blog
        );
      } else {
        return blogList.filter(
          (blog) => favoritedBlogList.includes(blog.id) && blog
        );
      }
    } else {
      if (searchResults.length > 0) {
        return searchResults;
      } else {
        return blogList;
      }
    }
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
            <Button
              buttonTitle={"Favorites"}
              onPress={() => setIsFavoriteFilterOn((prevState) => !prevState)}
              buttonStyle={{
                backgroundColor: isFavoriteFilterOn ? "darkred" : "white",
              }}
            />
          </View>
          {blogList && (
            <BlogList
              data={blogListData()}
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
