import { View, Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import MoonIcon from "@/assets/svg/logo.svg";
import { colors } from "@/src/theme/colors";

interface LogoProp {
  color?: string,
  icon?: ReactNode,
}
export const Logo = ({ color=colors.primary, icon=<MoonIcon/> }: LogoProp) => {
  return (
    <View style={styles.conatiner}>
      <Text style={[styles.text, {color}]}>S i l e n t</Text>
      {icon}
      <Text style={[styles.text, {color}]}>M o o n</Text>
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
    fontSize: 16,
    fontWeight: 700,
    fontFamily: "AirbnbCereal-Bold",
  },
  icon: {},
});
