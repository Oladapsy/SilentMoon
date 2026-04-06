import { View, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { lightColors } from "@/src/theme/colors";
import Back from "@/assets/svg/back.svg";
import { router } from "expo-router";

interface HeadNavProps {
  icon1?: ReactNode;
  icon2?: React.ReactNode;
  icon3?: React.ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
}

export default function HeadNavigation({
  icon1 = <Back />,
  icon2,
  icon3,
  style,
  backgroundColor,
}: HeadNavProps) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.icon1} onPress={() => router.back()}>
        {icon1}
      </TouchableOpacity>
      {icon2 && icon3 && (
        <View style={styles.icon23}>
          <TouchableOpacity style={[styles.icon2, { backgroundColor }]}>
            {icon2}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.icon3, { backgroundColor }]}>
            {icon3}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 22,
    marginTop: 30,
  },
  icon1: {
    backgroundColor: "white",
    padding: 15,
    borderWidth: 1,
    borderColor: lightColors.navBorder,
    borderRadius: 100,
  },
  icon23: {
    flexDirection: "row",
    gap: 10,
  },
  icon2: {
    backgroundColor: lightColors.sleep,
    opacity: 0.7,
    padding: 15,
    borderWidth: 1,
    borderColor: lightColors.nav23Border,
    borderRadius: 100,
  },
  icon3: {
    backgroundColor: lightColors.sleep,
    opacity: 0.7,
    padding: 15,
    borderWidth: 1,
    borderColor: lightColors.nav23Border,
    borderRadius: 100,
  },
});
