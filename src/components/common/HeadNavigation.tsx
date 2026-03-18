import { View, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { colors } from "@/src/theme/colors";
import Back from "@/assets/svg/back.svg";
import { router } from "expo-router";

interface HeadNavProps {
  icon1?: ReactNode;
  icon2?: ReactNode;
  icon3?: ReactNode;
  style?: ViewStyle;
}

export default function HeadNavigation({
  icon1 = <Back />,
  icon2,
  icon3,
  style
}: HeadNavProps) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.icon1} onPress={() => router.back()}>{icon1}</TouchableOpacity>
      {icon2 && icon3 && (
        <View style={styles.icon23}>
          <TouchableOpacity style={styles.icon2}>{icon2}</TouchableOpacity>
          <TouchableOpacity style={styles.icon3}>{icon3}</TouchableOpacity>
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
    padding: 20,
    borderWidth: 1,
    borderColor: colors.navBorder,
    borderRadius: 100,
   
  },
  icon23: {
    flexDirection: "row",
    gap: 10,
  },
  icon2: {
    backgroundColor: colors.sleep,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.nav23Border,
    borderRadius: 100,
  },
  icon3: {
    backgroundColor: colors.sleep,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.nav23Border,
    borderRadius: 100,
  },
});
