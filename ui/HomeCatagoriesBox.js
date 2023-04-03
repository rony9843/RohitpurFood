import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeCatagoriesBox = ({ item, setSelectCatagories, selectCatagories }) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectCatagories(item.id)}
      style={
        selectCatagories === item.id ? styles.ActiveContainer : styles.container
      }
    >
      <View style={{ marginRight: 5 }}>
        <Text
          style={
            selectCatagories === item.id ? styles.activeTitle : styles.title
          }
        >
          {item.name}
        </Text>
      </View>
      <View>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/ProjectImage/hamburger.png")}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ebebeb",
    borderRadius: 20,
    marginHorizontal: 2,
    marginTop: 10,
  },
  ActiveContainer: {
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1CAC4B",
    borderRadius: 20,
    marginHorizontal: 2,
    marginTop: 10,
  },
  title: {
    fontSize: 12,
    color: "black",
  },
  activeTitle: {
    fontSize: 12,
    color: "#fff",
  },
});

export default HomeCatagoriesBox;
