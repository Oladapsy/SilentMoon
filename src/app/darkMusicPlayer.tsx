import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import DarkMusicPlayerBg from "@/assets/svg/music/darkMusicBg.svg";
import { useLocalSearchParams } from "expo-router";
import HeadNavigation from "@/src/components/common/HeadNavigation";
import HeadIcon from "@/assets/svg/tabs/common/courseDetails/headDownload.svg";
import HeartIcon from "@/assets/svg/tabs/common/courseDetails/heart.svg";
import X from "@/assets/svg/tabs/common/courseDetails/X.svg";
import { darkColors, lightColors } from "@/src/theme/colors";
import ActionText from "@/src/components/common/ActionText";
import { fontFamily } from "@/src/theme/fontFamily";
import PauseIcon from "@/assets/svg/music/pause.svg";
import RedoIcon from "@/assets/svg/music/redo15.svg";
import UndoIcon from "@/assets/svg/music/undo15.svg";
import Slider from "@react-native-community/slider";

export default function DarkMusicPlayer() {
  const { title } = useLocalSearchParams<{
    title: string;
  }>();
  const [progress, setProgress] = useState(1.5); // current time in minutes
  const totalDuration = 45;

  return (
    <View style={styles.container}>
      <View style={styles.bgImage}>
        <DarkMusicPlayerBg />
      </View>

      <View style={styles.topNav}>
        <HeadNavigation
          icon1={<X />}
          icon2={<HeartIcon />}
          icon3={<HeadIcon />}
          backgroundColor={lightColors.sleep}
        />
      </View>

      <View style={styles.titleWrapper}>
        <ActionText
          main={title}
          mainSize={34}
          mainColor={darkColors.primary}
          fontFamily={fontFamily.bold}
        />
        <View style={styles.subtitle}>
          <ActionText
            main="SLEEP MUSIC"
            mainColor={lightColors.iconInactive}
            mainSize={14}
            fontFamily={fontFamily.normal}
          />
        </View>
      </View>

      {/* Player */}
      <View style={styles.player}>
        {/* Undo icon */}
        <UndoIcon color="#E6E7F2"/>
        {/* pause icon */}
        <View style={styles.outPauseWrapper}>
          <View style={styles.pauseWrapper}>
            <PauseIcon color="#3F414E"/>
          </View>
        </View>
        {/* Redo icon */}
        <RedoIcon color="#E6E7F2"/>
      </View>

      {/* Line and duration */}
      <View style={styles.timeWrapper}>
        <View style={styles.line}>
          <Slider
            style={{ width: "100%", height: 20, marginBottom: 15 }}
            minimumValue={0}
            maximumValue={totalDuration}
            value={progress}
            onValueChange={(val) => setProgress(val)}
            minimumTrackTintColor="#E6E7F2"
            maximumTrackTintColor="#47557E"
            thumbTintColor={lightColors.primary}
          />
        </View>

        {/* Duration */}
        <View style={styles.durationTime}>
          <ActionText
            main={"01:36"}
            mainColor="#E6E7F2"
            mainSize={16}
            fontFamily={fontFamily.bold}
          />
          <ActionText
            main="45:00"
            mainColor="#E6E7F2"
            mainSize={16}
            fontFamily={fontFamily.bold}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  topNav: {
    marginTop: 60,
  },
  titleWrapper: {
    alignItems: "center",
    marginTop: 250,
  },
  subtitle: {
    marginTop: 13,
    marginBottom: 40,
  },
  player: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 35,
  },
  pauseWrapper: {
    backgroundColor: "#E6E7F2",
    // padding: 25,
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  outPauseWrapper: {
    backgroundColor: "#47557E",
    width: 94,
    height: 94,
    borderRadius: 47,
    alignItems: "center",
    justifyContent: "center",
  },
  timeWrapper: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  line: {
    marginHorizontal: 14,
  },
  durationTime: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
