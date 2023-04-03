import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeStackScreen from "../stackScreen/HomeStackScreen";
import ProductStackScreen from "../stackScreen/ProductStackScreen";

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HomeStack"
        component={HomeStackScreen}
      />
      <Stack.Screen name="Product" component={ProductStackScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
