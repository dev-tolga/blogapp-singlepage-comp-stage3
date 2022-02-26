import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import Button from "../components/common/Button";
import { updateBlog, getBlogById } from "../library/network/requests/blogs";
import LoadingSpinner from "../components/common/LoadingSpinner";

const UpdateBlog = ({ route, navigation }) => {
  const [title, setTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [blog, setBlog] = useState();

  const updateBlogData = async () => {
    if (
      blog.title !== title ||
      blog.blogContent !== blogContent ||
      blog.author !== author
    ) {
      setIsLoading(true);
      try {
        setIsLoading(true);
        const res = await updateBlog(route.params.blogId, {
          title,
          blogContent,
          author,
        });
        if (res && res.status === 200) {
          setIsLoading(false);
          getBlog();
          navigation.goBack();
        } else {
          Alert.alert("Error", "Something went wrong");
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  };

  const getBlog = async () => {
    setIsLoading(true);
    const res = await getBlogById(route.params.blogId);

    if (res && res.status === 200) {
      const { title, blogContent, author } = res.data;

      setBlog(res.data);

      setAuthor(author);
      setBlogContent(blogContent);
      setTitle(title);
      setIsLoading(false);
    } else {
      Alert.alert("Error", "Something went wrong");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    
    <View>
      <TextInput
        autoCorrect={false}
        onChangeText={(text) => setTitle(text)}
        value={title}
        placeholder="title..."
        style={styles.textInput}
      />
      <TextInput
        multiline
        onChangeText={(text) => setBlogContent(text)}
        value={blogContent}
        placeholder="blog content..."
        style={[styles.textInput, { height: 96, textAlignVertical: "top" }]}
        numberOfLines={4}
      />
      <TextInput
        onChangeText={(text) => setAuthor(text)}
        value={author}
        placeholder="author..."
        style={styles.textInput}
      />

      <Button onPress={() => updateBlogData()} buttonTitle={"Update Blog"} />
    </View>
  );
};

export default UpdateBlog;

const styles = StyleSheet.create({
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
    height: 40,
    marginTop: 5,
  },
});
