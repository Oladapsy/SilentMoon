import React from "react";
import { View, StyleSheet } from "react-native";
import PlayIcon from "@/assets/svg/tabs/common/play.svg";
import ActionText from "./ActionText";
import Elipse from "@/assets/svg/tabs/common/ellipse.svg";
import { lightColors } from "@/src/theme/colors";

interface Props {
  title: string;
  subTitle: string;
  minorTitle: string;
  backgroundColor: string;
  titleColor?: string;
  subTitleColor?: string;
  minorTitleColor?: string;
  PlayIconBgColor?: string;
  playBg?: string;
  icon?: React.ReactNode;
  playIconColor?: string;
}

export default function Daily({
  minorTitle,
  title,
  subTitle,
  backgroundColor,
  titleColor = "white",
  subTitleColor = lightColors.navBorder,
  minorTitleColor = lightColors.navBorder,
  playBg,
  icon,
  playIconColor,
}: Props) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* svg as bg */}
      <View style={styles.iconDecor}>{icon}</View>

      {/* Text and play button */}
      <View style={styles.textAndPlay}>
        {/* Text */}
        <View>
          <ActionText main={title} mainSize={18} mainColor={titleColor} />
          <View style={styles.subText}>
            <ActionText
              main={subTitle}
              mainSize={11}
              mainColor={subTitleColor}
            />

            <View style={styles.elipseTitle}>
              <Elipse color={minorTitleColor} />
              <ActionText
                main={minorTitle}
                mainSize={11}
                mainColor={titleColor}
              />
            </View>
          </View>
        </View>

        {/* Play button */}
        <View style={[styles.playbutton, { backgroundColor: playBg }]}>
          <PlayIcon color={playIconColor} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    height: 90,
    justifyContent: 'center',
  },
  textAndPlay: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  subText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 1,
    marginTop: 5,
  },
  elipseTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 6,
  },

  iconDecor: {
    position: "absolute",
    top: 0,
    right: 0,
    opacity: 0.2,
  },
  playbutton: {
    padding: 13,
    borderRadius: 100,
  },
});
