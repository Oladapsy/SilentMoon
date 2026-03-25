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
      <Text style={[styles.text, {color}]}>Silent</Text>
      {icon}
      <Text style={[styles.text, {color}]}>Moon</Text>
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
    letterSpacing: 3,
  },
  icon: {},
});
