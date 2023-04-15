import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { FlatListSlider } from "react-native-flatlist-slider";
import CatagoriesData from "../Data/CatagoriesData";
import socket from "../socket";
import HomeCatagoriesBox from "../ui/HomeCatagoriesBox";
import ProgressBarSec from "../ui/ProgressBarSec";

const HomeStackScreen = ({ navigation }) => {
  // onPress={() => navigation.navigate("Product")}

  const [selectCatagories, setSelectCatagories] = useState(11);
  const [status, setStatus] = useState(3);
  const width = Dimensions.get("window").width;

  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      desc: "Silent Waters in the mountains in midst of Himilayas",
    },
    {
      image:
        "https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80",
      desc: "Red fort in India New Delhi is a magnificient masterpeiece of humans",
    },
  ];

  const buttonTextStyle = {
    color: "#393939",
  };

  useEffect(() => {
    socket.on("broadcast", (arg) => {
      console.log("this is socket message broadcast -> ", arg); // world
      setStatus(parseInt(arg));
    });
  }, [socket]);

  return (
    <View style={styles.container}>
      <View style={styles.CatagoriesContainer}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Catagories</Text>
        </View>
        <View>
          <FlatList
            horizontal
            pagingEnabled={false}
            showsHorizontalScrollIndicator={false}
            data={CatagoriesData}
            renderItem={({ item }) => (
              <HomeCatagoriesBox
                setSelectCatagories={setSelectCatagories}
                selectCatagories={selectCatagories}
                item={item}
              ></HomeCatagoriesBox>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View>
        <ProgressBarSec step={status}></ProgressBarSec>
      </View>

      <View style={styles.carouselContainer}>
        <Text>This is carousel</Text>
      </View>

      <View>
        <FlatListSlider loop={false} data={images} />
      </View>
    </View>
  );
};

/**
 *   <View style={{ flex: 1 }}>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarOptionContainer}>
            <View>
              <View style={styles.progressBarOptionStyle}>
                <Text>1</Text>
              </View>
              <View>
                <Text>Payment</Text>
              </View>
            </View>
          </View>
          <View style={styles.progressBarOptionContainer}>
            <View style={styles.progressBarLine}></View>
            <View>
              <View style={styles.progressBarOptionStyle}>
                <Text>1</Text>
              </View>
              <View>
                <Text>Payment</Text>
              </View>
            </View>
            <View style={styles.progressBarLine}></View>
          </View>
          <View style={styles.progressBarOptionContainer}>
            <View>
              <View style={styles.progressBarOptionStyle}>
                <Text>1</Text>
              </View>
              <View>
                <Text>Payment</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  carouselContainer: {
    marginVertical: 20,
  },

  progressBarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",

    // paddingHorizontal: 8,
    // flexDirection: "row",
    // alignItems: "center",
    // backgroundColor: "#ebebeb",
    // borderRadius: 20,
    // marginHorizontal: 2,
    // marginTop: 10,
  },
  progressBarLine: {
    backgroundColor: "#65BB56",
    height: 10,
    // width: 10,
    //  flex: 1,
    width: 70,
    marginVertical: 10,
    borderRadius: 10,
  },

  progressBarOptionStyle: {
    backgroundColor: "#65BB56",
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    borderWidth: 5,
    borderColor: "#65BB56",
  },

  progressBarOptionContainer: {
    // flex: 1,
    flexDirection: "row",
    textAlign: "center",
    alignContent: "center",
    alignSelf: "center",
  },
});

export default HomeStackScreen;
