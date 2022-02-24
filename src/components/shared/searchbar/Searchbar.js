import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Searchbar = ({ handleSearch, searchTerm, style }) => {
    return (
        <TextInput
            onChangeText={(text) => handleSearch(text)}
            value={searchTerm}
            placeholder='search...'
            style={[styles.textInput, style]}
        />
    );
};

export default Searchbar;

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#357C3C",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
    height: 40,
    marginTop: 5,
  },
});
