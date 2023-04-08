import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { UserInfoContext } from "../App";
import HomeScreen from "../screens/HomeScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ShoppingCardScreen from "../screens/ShoppingCardScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  // use context
  const [loggingUserInfo, setLoginUserInfo] = useContext(UserInfoContext);

  console.log("this is user context : ", loggingUserInfo);

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen name="ShoppingCard" component={ShoppingCardScreen} />
      <Tab.Screen name="OrderDetails" component={OrderDetailsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BottomTabs;
