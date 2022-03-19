import { useState,useContext } from "react";
import {
  Alert,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { blogs } from "../../assets/data/blogs";
import NewBlogForm from "../components/blog-form/NewBlogForm";
import Button from "../components/common/Button";
import { createBlog } from "../library/network/requests/blogs";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { AuthContext } from "../contexts/AuthContext";

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { isAuth, setAuth } = useContext(AuthContext);

  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleAddNewBlog = async ({ title, blogContent, author }) => {
    try {
      const data = { id: Date.now(), title, blogContent, author };
      setIsLoading(true);
      const response = await createBlog({ title, blogContent, author });
      console.log("response: ", response);
      if (response && response.status === 201) {
      
       setIsLoading(false);
       
      }
     
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            setAuth(false);
            console.log("OK Pressed");
            navigation.navigate("LoginScreen");
            

          },
        },
      ],
      { cancelable: false }
    );
  };


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Button
              onPress={()=>logout()}
              buttonTitle={"Go to Blogs"}
            />
            <Button
              onPress={() => setIsFormVisible((prevState) => !prevState)}
              buttonTitle={"Toggle Form"}
            />
          </View>
        )}
        {isFormVisible && <NewBlogForm handleAddNewBlog={handleAddNewBlog} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
