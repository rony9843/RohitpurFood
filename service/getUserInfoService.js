import AsyncStorage from "@react-native-async-storage/async-storage";

const getUserInfoService = async () => {
  try {
    const value = await AsyncStorage.getItem("RuhitpurFoodStorage");

    return value === null ? false : JSON.parse(value);
  } catch (error) {
    // Error retrieving data
    console.log("this is get user info error => ", error);
  }
};

export default getUserInfoService;
