import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from "react-native";
import React from "react";
// import OceanCardIcon from "@/assets/svg/tabs/sleep/oceanCardBg.svg";
import ActionText from "../../common/ActionText";
import { fontFamily } from "@/src/theme/fontFamily";
import { lightColors } from "@/src/theme/colors";
// import images from assets

export default function OceanCard() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/sleep/sleepCard.png")}
        resizeMode="cover"
        style={styles.image}
      >
        {/* Text */}
        <View style={styles.text}>
          <ActionText
            main="The Ocean Moon"
            mainSize={36}
            textAlign="center"
            mainColor={lightColors.sleepText}
            fontFamily="AGaramondPro-Bold"
          />
          <View style={styles.secondText}>
            <ActionText
              main="Non-stop 8- hour mixes of our most popular sleep audio"
              mainSize={16}
              fontFamily={fontFamily.light}
              textAlign="center"
              mainColor={lightColors.sleepText2}
            />
          </View>

          <TouchableOpacity style={styles.startWrapper}>
            <Text style={styles.startText}>START</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 50,
  },
  secondText: {
    width: 230,
  },
  startWrapper: {
    backgroundColor: lightColors.navBorder,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 100,
    marginTop: 30,
  },
  startText: {},
});
