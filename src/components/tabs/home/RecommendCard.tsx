import { View, StyleSheet } from "react-native";
import React from "react";
import ActionText from "@/src/components/common/ActionText";
import Ellipse from "@/assets/svg/tabs/common/ellipse.svg";
import { colors } from "@/src/theme/colors";

interface Props {
  mainTitle: string;
  subTitle: string;
  time: string;
  backgroundColor: string;
  icon: React.ReactNode;
}
export default function RecommendCard({
  mainTitle,
  subTitle,
  time,
  backgroundColor,
  icon,
}: Props) {
  return (
    <View style={[styles.container]}>
      {/* image and background */}
      <View style={[styles.iconContainer, { backgroundColor }]}>{icon}</View>

      <View style={styles.allText}>
        <ActionText main={mainTitle} mainColor={colors.primary} mainSize={18} />
        {/* Text bottom */}
        <View style={styles.bottomText}>
          <ActionText
            main={subTitle}
            mainColor={colors.secondary}
            mainSize={11}
          />
          <Ellipse color={colors.secondary}/>
          <ActionText main={time} mainColor={colors.secondary} mainSize={11} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
  },
  iconContainer: {
    height: 120,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',

  },
  allText: {
    marginTop: 10,
  },
  bottomText: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: 'center',
    gap: 5,
  },
});
