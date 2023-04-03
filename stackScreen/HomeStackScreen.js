import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CatagoriesData from "../Data/CatagoriesData";
import HomeCatagoriesBox from "../ui/HomeCatagoriesBox";

const HomeStackScreen = ({ navigation }) => {
  // onPress={() => navigation.navigate("Product")}

  const [selectCatagories, setSelectCatagories] = useState(11);

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
