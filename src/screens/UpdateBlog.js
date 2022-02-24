import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "../components/common/Button";
import { updateBlog } from "../library/network/requests/blogs";

const UpdateBlog = ({ route,navigation }) => {
  const { blog } = route.params;
  const [title, setTitle] = useState(blog.title);
  const [blogContent, setBlogContent] = useState(blog.blogContent);
  const [author, setAuthor] = useState(blog.author);


  const updateBlogData = async () => {

    const id = blog.id;
    const data = { id, title, blogContent, author };
    const response = await updateBlog(id,data);
    if(response.status === 200){
      navigation.navigate("BlogsScreen");
    }

  };

  return (
    <View>
      <TextInput
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
