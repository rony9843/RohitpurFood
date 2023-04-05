import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import SignInScreen from "./SignInScreen";
import SingUpScreen from "./SingUpScreen";

const RegisterScreen = () => {
  const [signState, setSignState] = useState("Sign Up");

  return (
    <View style={styles.container}>
      {signState === "Sign In" ? (
        <SignInScreen setSignState={setSignState} />
      ) : (
        <SingUpScreen setSignState={setSignState} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1CAC4B",
    flex: 1,
    paddingTop: 40,
  },
});

export default RegisterScreen;
