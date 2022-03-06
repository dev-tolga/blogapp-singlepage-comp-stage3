import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {
    console.log(`AsyncStorage/storeData():\n ${err}`);
  }
};

export const setUser = async (user) => {
  try {
    await storeData("user", user);
  } catch (err) {
    console.log(`AsyncStorage/setUser():\n ${err}`);
  }
};
export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    console.log(`AsyncStorage/getData():\n ${err}`);
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(`AsyncStorage/removeData():\n ${err}`);
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
    console.log("All storage cleared!.");
  } catch (e) {
    console.log("asyncStorage/clearAll()", e);
  }
};

export const getAllKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (e) {
    console.log("asyncStorage/getAllKeys()", e);
  }
};
