import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProgressBarSec = ({ step }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarOptionContainer}>
            <View>
              <View
                style={
                  step >= 1
                    ? styles.progressBarOptionStyleActive
                    : step === 0
                    ? styles.progressBarOptionStylePending
                    : styles.progressBarOptionStyle
                }
              >
                <Text>{step >= 1 ? "✔️" : 1}</Text>
              </View>
              <View>
                <Text>Payment</Text>
              </View>
            </View>
          </View>
          <View style={styles.progressBarOptionContainer}>
            <View
              style={
                step >= 1
                  ? styles.progressBarLineActive
                  : styles.progressBarLine
              }
            ></View>
            <View>
              <View
                style={
                  step >= 2
                    ? styles.progressBarOptionStyleActive
                    : step === 1
                    ? styles.progressBarOptionStylePending
                    : styles.progressBarOptionStyle
                }
              >
                <Text>{step >= 2 ? "✔️" : 2}</Text>
              </View>
              <View>
                <Text>Payment</Text>
              </View>
            </View>
            <View
              style={
                step >= 2
                  ? styles.progressBarLineActive
                  : styles.progressBarLine
              }
            ></View>
          </View>
          <View style={styles.progressBarOptionContainer}>
            <View>
              <View
                style={
                  step >= 3
                    ? styles.progressBarOptionStyleActive
                    : step === 2
                    ? styles.progressBarOptionStylePending
                    : styles.progressBarOptionStyle
                }
              >
                <Text>{step >= 3 ? "✔️" : 3}</Text>
              </View>
              <View>
                <Text>Payment</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 15,
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
    backgroundColor: "#777676",
    height: 10,
    // width: 10,
    //  flex: 1,
    width: 70,
    marginVertical: 15,
    borderRadius: 10,
  },
  progressBarOptionStyleActive: {
    backgroundColor: "#65BB56",
    height: 40,
    width: 40,
    borderRadius: 30,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    borderWidth: 5,
    borderColor: "#65BB56",
  },
  progressBarOptionStylePending: {
    height: 40,
    width: 40,
    borderRadius: 30,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    borderWidth: 5,
    borderColor: "#65BB56",
  },
  progressBarOptionStyle: {
    backgroundColor: "#777676",
    height: 40,
    width: 40,
    borderRadius: 30,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    borderWidth: 5,
    borderColor: "#777676",
  },
  progressBarLineActive: {
    backgroundColor: "#65BB56",
    height: 10,
    // width: 10,
    //  flex: 1,
    width: 70,
    marginVertical: 15,
    borderRadius: 10,
  },

  progressBarOptionContainer: {
    // flex: 1,
    flexDirection: "row",
    textAlign: "center",
    alignContent: "center",
    alignSelf: "center",
  },
});

export default ProgressBarSec;
