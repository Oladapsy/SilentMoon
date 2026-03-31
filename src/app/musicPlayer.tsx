import { View, StyleSheet } from "react-native";
import React from "react";
import MusicPlayerBg from "@/assets/svg/music/musicBg.svg";
import { useLocalSearchParams } from "expo-router";
import HeadNavigation from "@/src/components/common/HeadNavigation";
import HeadIcon from "@/assets/svg/tabs/common/courseDetails/headDownload.svg";
import HeartIcon from "@/assets/svg/tabs/common/courseDetails/heart.svg";
import { colors } from "@/src/theme/colors";
import ActionText from "@/src/components/common/ActionText";
import { fontFamily } from "@/src/theme/fontFamily";
import PauseIcon from "@/assets/svg/music/pause.svg";
import RedoIcon from "@/assets/svg/music/redo15.svg";
import UndoIcon from "@/assets/svg/music/undo15.svg";

export default function MusicPlayer() {
  const { title, subtitle, newDuration } = useLocalSearchParams<{
    title: string;
    subtitle: string;
    newDuration: string;
  }>();

  return (
    <View style={styles.container}>
      <View style={styles.bgImage}>
        <MusicPlayerBg />
      </View>

      <View style={styles.topNav}>
        <HeadNavigation
          icon2={<HeartIcon />}
          icon3={<HeadIcon />}
          backgroundColor={colors.navBg}
        />
      </View>

      <View style={styles.titleWrapper}>
        <ActionText
          main={title}
          mainSize={34}
          mainColor={colors.primary}
          fontFamily={fontFamily.bold}
        />
        <View style={styles.subtitle}>
          <ActionText
            main={subtitle}
            mainColor={colors.iconInactive}
            mainSize={14}
            fontFamily={fontFamily.normal}
          />
        </View>
      </View>

      {/* Player */}
      <View style={styles.player}>
        {/* Undo icon */}
        <UndoIcon />
        {/* pause icon */}
        <View style={styles.outPauseWrapper}>
          <View style={styles.pauseWrapper}>
            <PauseIcon />
          </View>
        </View>
        {/* Redo icon */}
        <RedoIcon />
      </View>

      {/* Line and duration */}
      <View style={styles.timeWrapper}>
        {/* line */}
        <View style={styles.line} />
        {/* Duration */}
        <View style={styles.durationTime}>
          <ActionText
            main={"01:30"}
            mainColor={colors.primary}
            mainSize={16}
            fontFamily={fontFamily.bold}
          />
          <ActionText
            main={newDuration}
            mainColor={colors.primary}
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
    backgroundColor: colors.primary,
    // padding: 25,
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outPauseWrapper: {
    backgroundColor: colors.musicPlayerBg,
    width: 94,
    height: 94,
    borderRadius: 47,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeWrapper: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  line: {
    borderBottomWidth: 3,
    borderColor: colors.iconInactive,
    marginBottom: 15,
    marginHorizontal: 14,
    borderRadius: 10,
  },
  durationTime: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
