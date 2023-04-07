import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";
import BottomTabs from "./bottomTabsNavi";
import RegisterScreen from "./screens/RegisterScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  const count = 2;
  const welcomeS = 1;

  const [pageState, setPageState] = useState("Welcome");

  return (
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
  );
}
