import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignInScreen = ({ setSignState }) => {
  const [info, setInfo] = useState([]);

  const inputHandler = (props) => {
    console.log(` Name : ${props.name} , value : ${props.value} `);

    setInfo([
      ...info,
      {
        name: props.name,
        value: props.value,
      },
    ]);
  };

  // ? post data from server
  const postData = async (props) => {
    fetch("https://ruhitpurebackend-production.up.railway.app/signUp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    console.table(info);
  };

  /**
   *   <View>
        <Text>Name</Text>
        <TextInput
          name="name"
          onChangeText={(e) => inputHandler({ value: e, name: "name" })}
          placeholder="Jubayth Hossen Roni"
        />
      </View>

      <TouchableOpacity>
        <Button onPress={() => postData()} title="click meeee" />
      </TouchableOpacity>

      <Text>
        If you don't have an account please{" "}
        <Text
          onPress={() => setSignState("Sign Up")}
          style={{ fontWeight: "bold" }}
        >
          SIGN UP
        </Text>
      </Text>


   */

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            marginTop: 60,
            marginBottom: 20,
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 90, width: 90 }}
            source={require("../assets/ProjectImage/Logo.png")}
          />
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
            Log In Now
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#fff",
              opacity: 0.5,
              marginTop: 10,
            }}
          >
            Please login to continue using our app
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Phone Number </Text>
          <TextInput
            placeholder="018********"
            placeholderTextColor="#2ABB59"
            style={styles.inputBox}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            placeholder="********"
            placeholderTextColor="#2ABB59"
            style={styles.inputBox}
            secureTextEntry={true}
          />
        </View>

        <View
          style={{
            borderRadius: 12,
            overflow: "hidden",
            alignItems: "center",
          }}
        >
          <Pressable
            android_ripple={{ color: "#37EF73", borderless: false }}
            style={styles.signInBtnContainer}
          >
            <Text style={styles.signInBtnTitle}>Log In</Text>
          </Pressable>
        </View>

        <TouchableOpacity
          onPress={() => setSignState("Sign Up")}
          style={{ alignItems: "center", marginBottom: 50 }}
        >
          <Text style={{ color: "#FFFFFF" }}>
            Don't have an account ?{" "}
            <Text style={{ fontWeight: "bold", color: "#5AFF31" }}>
              SIGN IN
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    flex: 1,
  },

  inputContainer: {
    marginTop: 8,
  },
  inputTitle: {
    color: "#fff",
    fontSize: 16,
  },
  inputBox: {
    backgroundColor: "#37EF73",
    padding: 8,
    marginTop: 10,
    borderRadius: 12,
  },
  signInBtnContainer: {
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "#BFFFD4",
    borderRadius: 12,
    padding: 10,
    width: "80%",
  },
  signInBtnTitle: {
    color: "#1CAC4B",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SignInScreen;
