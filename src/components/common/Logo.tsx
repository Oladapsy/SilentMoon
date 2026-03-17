import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MoonIcon from "@/assets/svg/logo.svg";
import { colors } from "@/src/theme/colors";

export const Logo = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>S i l e n t</Text>
      <MoonIcon />
      <Text style={styles.text}>M o o n</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "row",
    gap: 9,
    alignItems: 'center',
    marginTop: 30,
    
  },
  text: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 700,
    fontFamily: "AirbnbCereal-Bold",
  },
  icon: {},
});
