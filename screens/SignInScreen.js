import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

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

  return (
    <View>
      <View>
        <Text>Name</Text>
        <TextInput
          name="name"
          onChangeText={(e) => inputHandler({ value: e, name: "name" })}
          placeholder="Jubayth Hossen Roni"
        />
      </View>
      <View>
        <Text>Union</Text>
        <TextInput
          onChangeText={(e) => inputHandler({ value: e, name: "Union" })}
          placeholder="Ruhitpur"
        />
      </View>
      <View>
        <Text>Thana</Text>
        <TextInput
          onChangeText={(e) => inputHandler({ value: e, name: "Thana" })}
          placeholder="Ruhitpur"
        />
      </View>
      <View>
        <Text>District</Text>
        <TextInput
          onChangeText={(e) => inputHandler({ value: e, name: "District" })}
          placeholder="Dhaka"
        />
      </View>
      <View>
        <Text>Primary Phone Number</Text>
        <TextInput
          onChangeText={(e) =>
            inputHandler({ value: e, name: "PrimaryPhoneNumber" })
          }
          placeholder="018********"
        />
      </View>
      <View>
        <Text>Secondary Phone Number (Optional)</Text>
        <TextInput
          onChangeText={(e) =>
            inputHandler({ value: e, name: "SecondaryPhoneNumber" })
          }
          placeholder="018********"
        />
      </View>

      <TouchableOpacity>
        <Text onPress={() => console.log(info)}>Sign Up</Text>
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
    </View>
  );
};

export default SignInScreen;
