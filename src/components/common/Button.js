import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, buttonTitle}) => {
    return (
        <TouchableOpacity onPress={() => onPress()} style={styles.button}>
            <Text style={{ color: "#fff" }}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
};

Button.defaultProps = {
    onPress: () => console.log("Button pressed!"),
    buttonTitle: "Button Title"
}

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#357C3C",
    width: 100,
    height: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
