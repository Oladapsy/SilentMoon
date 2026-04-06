import { View, StyleSheet } from "react-native";
import React from "react";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import WelcomeSleepBgIcon from "@/assets/svg/tabs/sleep/welcomeSleep.svg";
import ActionText from "@/src/components/common/ActionText";
import { lightColors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";
import LoveBird from "@/assets/svg/tabs/sleep/loveBird.svg";
import MainButton from "@/src/components/common/MainButton";

export default function SleepWelcome() {
  return (
    <MySafeAreaView>
      <View>
        {/* sleep welcome bg */}
        <View style={styles.bgIcon}>
          <WelcomeSleepBgIcon />
        </View>

        {/* content */}
        <View style={styles.contentWrapper}>
          {/* Text */}
          <View style={styles.topText}>
            <ActionText
              main="Wecome to Sleep"
              mainColor={lightColors.nav23Border}
              mainSize={30}
              fontFamily={fontFamily.bold}
            />

            <View style={styles.smallText}>
              <ActionText
                main="Explore the new king of sleep. It uses sound and vesualization to create perfect conditions for refreshing sleep."
                mainColor={lightColors.nav23Border}
                mainSize={16}
                fontFamily={fontFamily.light}
                textAlign="center"
              />
            </View>
          </View>

          {/* icon */}
          <View style={styles.birdIcon}>
            <LoveBird />
          </View>

          {/* Final Text */}
          <View style={styles.finalText}>
            <MainButton
              text="GET STARTED"
              color={lightColors.tetiary}
              textStyle={{ color: lightColors.buttonText }}
              paddingVertical={23}
              route="/(tabs)/sleep"
            />
          </View>
        </View>
      </View>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    // justifyContent: 'center',
  },

  bgIcon: {
    position: "absolute",
  },

  topText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 160,
    marginBottom: 30,
  },

  smallText: {
    marginTop: 12,
  },

  birdIcon: {
    alignItems: "flex-end",
  },

  finalText: {
    marginTop: 60,
  },
});
