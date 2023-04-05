import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const WelcomeScreen = ({ setPageState }) => {
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={() => setPageState("RegisterScreen")}
        showSkip={false}
        //  showDone={false}
        //  bottomBarHighlight={false}
        // controlStatusBar={false}
        // allowFontScalingText={false}
        pages={[
          {
            backgroundColor: "#FFB934",
            image: (
              <Image
                style={{ width: "80%" }}
                source={require("../assets/ProjectImage/online-shopping-squatch.gif")}
              />
            ),
            title: "Order for Food",
            subtitle:
              "Place order for what you want from any restaurant of your choice.",
          },
          {
            backgroundColor: "#F52D57",
            image: (
              <Image
                style={{ width: "80%" }}
                source={require("../assets/ProjectImage/food-delivery-tricycle.gif")}
              />
            ),
            title: "Fast delivery",
            subtitle:
              "Receive your order in less than 1hour or pick specific delivery time.",
          },
          {
            backgroundColor: "#533A9E",
            image: (
              <Image
                style={{ width: "80%" }}
                source={require("../assets/ProjectImage/comissão.gif")}
              />
            ),
            title: "Cash On Delivery (COD)",
            subtitle:
              "Cash on delivery (COD) is when a recipient pays for a good or service at the time of delivery.",
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WelcomeScreen;
