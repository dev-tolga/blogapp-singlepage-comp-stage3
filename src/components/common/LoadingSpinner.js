import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";

const window = Dimensions.get("window");

const LoadingSpinner = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#357C3C" />
    </View>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
  loading: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
