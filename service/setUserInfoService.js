import AsyncStorage from "@react-native-async-storage/async-storage";

const setUserInfo = async (props) => {
  console.log("this is set local storage -> ", props);

  try {
    await AsyncStorage.setItem("RuhitpurFoodStorage", JSON.stringify(props));
  } catch (error) {
    // Error saving data
  }
};

export default setUserInfo;
