import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const SingUpScreen = ({ setSignState }) => {
  return (
    <View>
      <View>
        <Text>Name</Text>
        <TextInput placeholder="Jubayth Hossen Roni" />
      </View>
      <View>
        <Text>Union</Text>
        <TextInput placeholder="Ruhitpur" />
      </View>
      <View>
        <Text>Thana</Text>
        <TextInput placeholder="Ruhitpur" />
      </View>
      <View>
        <Text>District</Text>
        <TextInput placeholder="Dhaka" />
      </View>
      <View>
        <Text>Primary Phone Number</Text>
        <TextInput placeholder="018********" />
      </View>
      <View>
        <Text>secondary Phone Number (Optional)</Text>
        <TextInput placeholder="018********" />
      </View>

      <TouchableOpacity>
        <Text>Sign In</Text>
      </TouchableOpacity>

      <Text>
        If you have an account please{" "}
        <Text
          onPress={() => setSignState("Sign In")}
          style={{ fontWeight: "bold" }}
        >
          SIGN IN
        </Text>
      </Text>
    </View>
  );
};

export default SingUpScreen;
