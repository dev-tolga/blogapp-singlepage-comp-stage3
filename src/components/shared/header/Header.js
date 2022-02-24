import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ headerTitle }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.header}>{headerTitle}</Text>
        </View>
    );
};

Header.defaultProps = {
    headerTitle: 'HEADER TITLE'
}

export default Header;

const styles = StyleSheet.create({
  header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  headerContainer: {
    width: "100%",
    height: 30,
    backgroundColor: "#357C3C",
    alignItems: "center",
    justifyContent: "center",
  },
});
