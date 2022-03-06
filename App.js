import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import Header from "./src/components/shared/header/Header";
import HomeScreen from "./src/screens/HomeScreen";
import HomeStackNavigator from "./src/navigators/stack/HomeStackNavigator";
import { FavoriteProvider } from "./src/contexts/FavoriteContext";
import AuthProvider from "./src/contexts/AuthContext";

export default function App() {
  return (
    <>
      <AuthProvider>
        <FavoriteProvider>
          <SafeAreaView style={{ flex: 0 }} />
          <NavigationContainer>
            <SafeAreaView style={styles.safeAreaContainer}>
              <Header headerTitle={"BlogApp"} />
              <View style={styles.container}>
                <HomeStackNavigator />
              </View>
            </SafeAreaView>
          </NavigationContainer>
        </FavoriteProvider>
      </AuthProvider>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#357C3C",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
});
