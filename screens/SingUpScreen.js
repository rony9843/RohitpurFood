import React from "react";
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

const SingUpScreen = ({ setSignState }) => {
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
            style={styles.inputBox}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Primary Phone Number </Text>
          <TextInput
            placeholder="018*******"
            placeholderTextColor="#2ABB59"
            style={styles.inputBox}
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
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Confirm Password</Text>
          <TextInput
            placeholder="********"
            secureTextEntry={true}
            placeholderTextColor="#2ABB59"
            style={styles.inputBox}
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
            style={styles.inputBox}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Thana</Text>
          <TextInput
            placeholder="Ruhitpur"
            placeholderTextColor="#2ABB59"
            style={styles.inputBox}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>District</Text>
          <TextInput
            placeholder="Dhaka"
            placeholderTextColor="#2ABB59"
            style={styles.inputBox}
          />
        </View>

        <View
          style={{ borderRadius: 12, overflow: "hidden", alignItems: "center" }}
        >
          <Pressable
            android_ripple={{ color: "#37EF73", borderless: false }}
            style={styles.signInBtnContainer}
          >
            <Text style={styles.signInBtnTitle}>Sign Up</Text>
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

export default SingUpScreen;
