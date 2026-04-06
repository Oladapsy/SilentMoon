import { View, StyleSheet } from "react-native";
import React from "react";
import ActionText from "../../common/ActionText";
import Elipse from "@/assets/svg/tabs/common/ellipse.svg";
import { lightColors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";

interface Props {
  icon: React.ReactNode;
  title: string;
}

export default function NightMusicCard({ icon, title }: Props) {
  return (
    <View style={styles.container}>

        <View>
            {icon}
        </View>
      <View style={styles.titleWrapper}>
        <ActionText
          main={title}
          mainColor={lightColors.nav23Border}
          fontFamily={fontFamily.bold}
          mainSize={18}
        />
      </View>

      {/* more info */}
      <View style={styles.textWrapper}>
        <ActionText
          main="45 MIN"
          mainColor={lightColors.sleepMusicCard1}
          fontFamily={fontFamily.normal}
          mainSize={11}
        />
        <Elipse color={lightColors.sleepMusicCard1} />
        <ActionText
          main="SLEEP MUSIC"
          mainSize={11}
          fontFamily={fontFamily.normal}
          mainColor={lightColors.sleepMusicCard1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  titleWrapper: {
    paddingTop: 7,
    paddingBottom: 5,
  },
  textWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
