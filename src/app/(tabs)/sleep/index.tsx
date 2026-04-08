import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import WelcomeSleepBgIcon from "@/assets/svg/tabs/sleep/sleep.svg";
import ActionText from "@/src/components/common/ActionText";
import { lightColors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";
import MediateFilter from "@/src/components/tabs/meditate/MediateFilter";
import OceanCard from "@/src/components/tabs/sleep/oceanCard";
import SleepMusicList from "@/src/components/tabs/sleep/sleepMusicList";

// routing
import { useRouter } from "expo-router";
let sleepWelcomeSeen = false;

export default function Sleep() {
  const router = useRouter();

  useEffect(() => {
    if (!sleepWelcomeSeen) {
      sleepWelcomeSeen = true;
      router.replace("/sleepWelcome");
    }
  }, []);

  return (
    <MySafeAreaView>
      <View style={styles.container}>
        {/* Sleep Bg */}
        <View style={styles.bgIcon}>
          <WelcomeSleepBgIcon />
        </View>

        {/* content */}
        <View>
          {/* Top Text */}
          <View style={styles.topText}>
            <ActionText
              main="Sleep Stories"
              mainColor={lightColors.nav23Border}
              mainSize={28}
              fontFamily={fontFamily.bold}
            />

            <View style={styles.smallText}>
              <ActionText
                main="Soothing bedtime stories to help you fall into a deep and natural sleep"
                mainColor={lightColors.nav23Border}
                mainSize={16}
                fontFamily={fontFamily.light}
                textAlign="center"
              />
            </View>
          </View>

          {/* Meditate filter */}
          <View>
            <MediateFilter
              activeLabelColor={lightColors.nav23Border}
              inactiveIconBg={lightColors.inactiveColorCard}
            />
          </View>

          {/* Ocean Moon // will come back and style this according to the design */}
          <View style={styles.oceanCard}>
            <OceanCard />
          </View>

          {/* Sleep music list in two rows */}

          <View style={styles.seeAll}>
            <ActionText
              main=""
              sub="See All"
              subColor={lightColors.mainText}
              route="/(tabs)/sleep/sleepMusic"
            />
          </View>

          {/* make on click of this go to a route */}
          <View style={styles.musicList}>
            <SleepMusicList />
          </View>
        </View>
      </View>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgIcon: {
    position: "absolute",
    zIndex: -1,
  },
  topText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 65,
    marginBottom: 30,
  },
  smallText: {
    marginTop: 8,
    width: 300,
  },
  oceanCard: {
    height: 220, // 👈 fixed height
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 16,
    overflow: "hidden",
  },
  musicList: {
    height: "100%",
  },
  seeAll: {
    marginRight: 20,
    marginBottom: 5,
    alignSelf: "flex-end",
  },
});
