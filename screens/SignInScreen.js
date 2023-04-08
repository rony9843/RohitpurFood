import React, { useContext, useState } from "react";
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
import { UserInfoContext } from "../App";
import setUserInfo from "../service/setUserInfoService";

const SignInScreen = ({ setSignState, setPageState }) => {
  // use context
  const [loggingUserInfo, setLoginUserInfo] = useContext(UserInfoContext);

  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ? error
  const [error, setError] = useState({
    state: false,
    message: "",
  });

  // ? post data from server
  const postData = async () => {
    if (userPhoneNumber !== "" && userPassword !== "") {
      setLoading(true);
      const dataFind = await fetch(
        `https://ruhitpurebackend-production.up.railway.app/logIn?phoneNumber=${userPhoneNumber}&password=${userPassword}`
      )
        .then((response) => response.json())
        .then((json) => {
          return json;
        })
        .catch((error) => {
          console.error(error);
        });

      setLoading(false);

      console.log(dataFind.status);
      console.log(dataFind);

      if (dataFind.status === 404) {
        setError({
          state: true,
          message: "Phone number not found",
        });
      } else if (dataFind.status === 403) {
        setError({
          state: true,
          message: "Password doesn't match!!!",
        });
      } else {
        setLoginUserInfo({
          name: dataFind.user.name,
          primaryPhoneNumber: dataFind.user.primaryPhoneNumber,
          SecondaryPhoneNumber: dataFind.user.SecondaryPhoneNumber,
          _id: dataFind.user._id,
          password: dataFind.user.password,
          thana: dataFind.user.thana,
          union: dataFind.user.union,
          userId: dataFind.user.userId,
          district: dataFind.user.district,
          createdTime: dataFind.user.createdTime,
        });

        setUserFunction({
          name: dataFind.user.name,
          primaryPhoneNumber: dataFind.user.primaryPhoneNumber,
          SecondaryPhoneNumber: dataFind.user.SecondaryPhoneNumber,
          _id: dataFind.user._id,
          password: dataFind.user.password,
          thana: dataFind.user.thana,
          union: dataFind.user.union,
          userId: dataFind.user.userId,
          district: dataFind.user.district,
          createdTime: dataFind.user.createdTime,
        });

        setPageState("Landing Page");
      }
    } else {
      setError({
        state: true,
        message: "Please, Fill up the input box",
      });
    }
  };

  const setUserFunction = async (props) => {
    await setUserInfo({
      name: props.name,
      primaryPhoneNumber: props.primaryPhoneNumber,
      SecondaryPhoneNumber: props.SecondaryPhoneNumber,
      _id: props.__id,
      password: props.password,
      thana: props.thana,
      union: props.union,
      userId: props.userId,
      district: props.district,
      createdTime: props.createdTime,
    });
  };

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
            value={userPhoneNumber}
            onChangeText={(e) => setUserPhoneNumber(e)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            placeholder="********"
            placeholderTextColor="#2ABB59"
            style={styles.inputBox}
            secureTextEntry={true}
            value={userPassword}
            onChangeText={(e) => setUserPassword(e)}
          />
        </View>

        {error.state && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorTitle}>{error.message}</Text>
          </View>
        )}

        <View
          style={{
            borderRadius: 12,
            overflow: "hidden",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => postData()}
            android_ripple={{ color: "#37EF73", borderless: false }}
            style={styles.signInBtnContainer}
          >
            <Text style={styles.signInBtnTitle}>
              {loading ? "Loading..." : "Log In"}
            </Text>
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

  errorContainer: {
    marginTop: 20,
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#FF4949",
  },
  errorTitle: {
    color: "#fff",
  },
});

export default SignInScreen;
