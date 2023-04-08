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

const SingUpScreen = ({ setSignState, setPageState }) => {
  // use context
  const [loggingUserInfo, setLoginUserInfo] = useContext(UserInfoContext);

  const [userName, setUserName] = useState("");
  const [userPrimaryPhoneNumber, setPrimaryPhoneNumber] = useState("");
  const [userSecondaryPhoneNumber, setSecondaryPhoneNumber] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userConfirmPass, setConfirmPass] = useState("");
  const [userUnion, setUnion] = useState("");
  const [userThana, setThana] = useState("");
  const [userDistrict, setDistrict] = useState("");

  const userIdGen = Math.floor(100000000 + Math.random() * 900000000);

  const [userCreateATime, setUserCreateATime] = useState(new Date());

  // ? error state
  const [error, setError] = useState({
    state: false,
    message: "",
    issue: "",
  });

  // ? loading State
  const [loading, setLoading] = useState(false);

  // ? post data from server
  const postData = () => {
    // validation
    if (userName === "") {
      return setError({
        state: true,
        message: "Please, Enter your name",
        issue: "name",
      });
    }

    if (userPrimaryPhoneNumber === "") {
      return setError({
        state: true,
        message: "Please, Enter Your Primary Phone Number",
        issue: "Phone",
      });
    }
    if (userPassword === "") {
      return setError({
        state: true,
        message: "Please, Enter your password",
        issue: "password",
      });
    }
    if (userPassword !== userConfirmPass) {
      return setError({
        state: true,
        message: "Password does not match!!!",
        issue: "password",
      });
    }

    if (userUnion === "") {
      return setError({
        state: true,
        message: "Please, Enter Your Union Name",
        issue: "Union",
      });
    }
    if (userThana === "") {
      return setError({
        state: true,
        message: "Please, Enter Your Thana Name",
        issue: "Thana",
      });
    }
    if (userDistrict === "") {
      return setError({
        state: true,
        message: "Please, Enter Your District",
        issue: "District",
      });
    }

    setLoading(true);

    const payloadData = {
      name: userName,
      primaryPhoneNumber: userPrimaryPhoneNumber,
      SecondaryPhoneNumber:
        userSecondaryPhoneNumber === "" ? null : userSecondaryPhoneNumber,
      password: userPassword,
      union: userUnion,
      thana: userThana,
      district: userDistrict,
      userId: userIdGen,
      createdTime: userCreateATime,
    };

    fetch("https://ruhitpurebackend-production.up.railway.app/signUp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloadData),
    }).then((json) => {
      if (json.status === 403) {
        setLoading(false);
        setError({
          state: true,
          message: "Phone number already exist!!!",
          issue: "Phone",
        });
      } else {
        setLoginUserInfo({
          name: userName,
          primaryPhoneNumber: userPrimaryPhoneNumber,
          SecondaryPhoneNumber: userSecondaryPhoneNumber,
          _id: "",
          password: userPassword,
          thana: userThana,
          union: userUnion,
          userId: userIdGen,
          district: userDistrict,
          createdTime: userCreateATime,
        });

        setUserFunction({
          name: userName,
          primaryPhoneNumber: userPrimaryPhoneNumber,
          SecondaryPhoneNumber: userSecondaryPhoneNumber,
          _id: "",
          password: userPassword,
          thana: userThana,
          union: userUnion,
          userId: userIdGen,
          district: userDistrict,
          createdTime: userCreateATime,
        });

        setPageState("landingPage");
        setLoading(false);
      }
    });
  };

  const setUserFunction = async (props) => {
    await setUserInfo({
      name: props.name,
      primaryPhoneNumber: props.primaryPhoneNumber,
      SecondaryPhoneNumber: props.SecondaryPhoneNumber,
      _id: "",
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
            Sign Up Now
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: 14, color: "#fff", opacity: 0.5, marginTop: 10 }}
          >
            Please fill the details and create account
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput
            placeholder="Jubayth Hossen Roni"
            placeholderTextColor="#2ABB59"
            style={error.issue === "name" ? styles.issueBox : styles.inputBox}
            value={userName}
            onChangeText={(e) => setUserName(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Primary Phone Number </Text>
          <TextInput
            placeholder="018*******"
            placeholderTextColor="#2ABB59"
            style={error.issue === "Phone" ? styles.issueBox : styles.inputBox}
            value={userPrimaryPhoneNumber}
            onChangeText={(e) => setPrimaryPhoneNumber(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>
            Secondary Phone Number{" "}
            <Text style={{ fontWeight: "bold" }}>(Optional) </Text>
          </Text>
          <TextInput
            placeholder="018*******"
            placeholderTextColor="#2ABB59"
            style={styles.inputBox}
            value={userSecondaryPhoneNumber}
            onChangeText={(e) => setSecondaryPhoneNumber(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            placeholder="********"
            placeholderTextColor="#2ABB59"
            style={
              error.issue === "password" ? styles.issueBox : styles.inputBox
            }
            secureTextEntry={true}
            value={userPassword}
            onChangeText={(e) => setPassword(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Confirm Password</Text>
          <TextInput
            placeholder="********"
            secureTextEntry={true}
            placeholderTextColor="#2ABB59"
            style={
              error.issue === "password" ? styles.issueBox : styles.inputBox
            }
            value={userConfirmPass}
            onChangeText={(e) => setConfirmPass(e)}
          />
        </View>
        <View
          style={{
            padding: 15,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
            ADDRESS
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Union</Text>
          <TextInput
            placeholder="Ruhitpur"
            placeholderTextColor="#2ABB59"
            style={error.issue === "Union" ? styles.issueBox : styles.inputBox}
            value={userUnion}
            onChangeText={(e) => setUnion(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Thana</Text>
          <TextInput
            placeholder="Ruhitpur"
            placeholderTextColor="#2ABB59"
            style={error.issue === "Thana" ? styles.issueBox : styles.inputBox}
            value={userThana}
            onChangeText={(e) => setThana(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>District</Text>
          <TextInput
            placeholder="Dhaka"
            placeholderTextColor="#2ABB59"
            style={
              error.issue === "District" ? styles.issueBox : styles.inputBox
            }
            value={userDistrict}
            onChangeText={(e) => setDistrict(e)}
          />
        </View>

        {error.state && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorTitle}>{error.message}</Text>
          </View>
        )}

        <View
          style={{ borderRadius: 12, overflow: "hidden", alignItems: "center" }}
        >
          <Pressable
            android_ripple={{ color: "#37EF73", borderless: false }}
            style={styles.signInBtnContainer}
            onPress={() => postData()}
          >
            <Text style={styles.signInBtnTitle}>
              {loading ? "Loading..." : "Sign Up"}
            </Text>
          </Pressable>
        </View>

        <TouchableOpacity
          onPress={() => setSignState("Sign In")}
          style={{ alignItems: "center", marginBottom: 50 }}
        >
          <Text style={{ color: "#FFFFFF" }}>
            Already have an account ?{" "}
            <Text style={{ fontWeight: "bold", color: "#5AFF31" }}>Log In</Text>
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

  issueBox: {
    backgroundColor: "#37EF73",
    padding: 8,
    marginTop: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "red",
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

export default SingUpScreen;
