import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Alert } from 'react-native';
import Button from '../common/Button';

const NewBlogForm = ({ handleAddNewBlog }) => {
    const [title, setTitle] = useState("");
    const [blogContent, setBlogContent] = useState("");
    const [author, setAuthor] = useState("");

    const onPressAddBlog = () => {
        if (title.trim().length > 0 && blogContent.trim().length > 0 && author.trim().length > 0) {
            handleAddNewBlog({ title, blogContent, author })
        }
        else{
            Alert.alert("Oops!", "Those fields cannot be empty: title, blog content, author...")
        }
        setTitle("");
        setBlogContent("");
        setAuthor("");
    }

    return (
        <View>
            <TextInput
                onChangeText={(text) => setTitle(text)}
                value={title}
                placeholder='title...'
                style={styles.textInput}
            />
            <TextInput
                multiline
                onChangeText={(text) => setBlogContent(text)}
                value={blogContent} placeholder='blog content...'
                style={[styles.textInput, { height: 96, textAlignVertical: "top" }]}
                numberOfLines={4}
            />
            <TextInput
                onChangeText={(text) => setAuthor(text)}
                value={author}
                placeholder='author...'
                style={styles.textInput}
            />

            <Button onPress={() => onPressAddBlog()} buttonTitle={"Add Blog"} />
        </View>
    );
};

export default NewBlogForm;

const styles = StyleSheet.create({
    textInput: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: "100%",
        height: 40,
        marginTop: 5
    },
});
