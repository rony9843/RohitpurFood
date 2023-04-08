import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createContext, useEffect, useState } from "react";
import { View } from "react-native";
import BottomTabs from "./bottomTabsNavi";
import RegisterScreen from "./screens/RegisterScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import getUserInfoService from "./service/getUserInfoService";

// user info create context
export const UserInfoContext = createContext();

export default function App() {
  const [loggingUserInfo, setLoginUserInfo] = useState({});
  const [pageState, setPageState] = useState("Welcome");

  useEffect(() => {
    getUser();
    // removeValue();
  }, []);

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("RuhitpurFoodStorage");
    } catch (e) {
      // remove error
    }

    console.log("Done.");
  };

  const getUser = async () => {
    const getUserFromStorage = await getUserInfoService();

    setLoginUserInfo(getUserFromStorage);

    setPageState(getUserFromStorage === false ? "Welcome" : "LandingPage");
  };

  return (
    <UserInfoContext.Provider value={[loggingUserInfo, setLoginUserInfo]}>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <StatusBar style="auto" />

          {pageState === "Welcome" ? (
            <WelcomeScreen setPageState={setPageState} />
          ) : pageState === "RegisterScreen" ? (
            <RegisterScreen setPageState={setPageState} />
          ) : (
            <BottomTabs />
          )}
        </NavigationContainer>
      </View>
    </UserInfoContext.Provider>
  );
}
