import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import BottomTabs from "./bottomTabsNavi";
import RegisterScreen from "./screens/RegisterScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import getUserInfoService from "./service/getUserInfoService";

// user info create context
export const UserInfoContext = createContext();

export default function App() {
  const [loggingUserInfo, setLoginUserInfo] = useState({});
  const [pageState, setPageState] = useState("Welcome");

  const [randomNumber, setRandomNumber] = useState(1);

  let isConnected = false;

  useEffect(() => {
    unsubscribe();

    if (isConnected === false) {
      setTimeout(() => {
        setRandomNumber(Math.floor(100000000 + Math.random() * 900000000));
      }, 2000);
    }
  }, [randomNumber]);

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

  // Subscribe
  const unsubscribe = NetInfo.addEventListener((state) => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);

    isConnected = state.isConnected;
  });

  return (
    <UserInfoContext.Provider value={[loggingUserInfo, setLoginUserInfo]}>
      {isConnected ? (
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
      ) : (
        <View>
          <Text>Please connect internet</Text>
        </View>
      )}
    </UserInfoContext.Provider>
  );
}
