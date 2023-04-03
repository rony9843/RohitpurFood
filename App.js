import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import BottomTabs from "./bottomTabsNavi";
import RegisterScreen from "./screens/RegisterScreen";

export default function App() {
  const count = 1;

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        {count === 1 ? <RegisterScreen /> : <BottomTabs />}
      </NavigationContainer>
    </View>
  );
}
