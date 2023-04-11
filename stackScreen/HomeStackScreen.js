import React, { useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { FlatListSlider } from "react-native-flatlist-slider";
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";
import CatagoriesData from "../Data/CatagoriesData";
import HomeCatagoriesBox from "../ui/HomeCatagoriesBox";

const HomeStackScreen = ({ navigation }) => {
  // onPress={() => navigation.navigate("Product")}

  const [selectCatagories, setSelectCatagories] = useState(11);
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
      <View style={styles.carouselContainer}>
        <Text>This is carousel</Text>
      </View>

      <View>
        <FlatListSlider data={images} />
      </View>

      <View>
        <View>
          <View style={{ flex: 1 }}>
            <ProgressSteps activeStep={0} isComplete={true}>
              <ProgressStep
                removeBtnRow={true}
                nextBtnDisabled={true}
                label="First Step"
              >
                <View style={{ alignItems: "center" }}>
                  <Text>Pending</Text>
                </View>
              </ProgressStep>
              <ProgressStep label="Second Step">
                <View style={{ alignItems: "center" }}>
                  <Text>On The Way</Text>
                </View>
              </ProgressStep>
              <ProgressStep label="Third Step">
                <View style={{ alignItems: "center" }}>
                  <Text>Complete</Text>
                </View>
              </ProgressStep>
            </ProgressSteps>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  carouselContainer: {
    marginVertical: 20,
  },
});

export default HomeStackScreen;
