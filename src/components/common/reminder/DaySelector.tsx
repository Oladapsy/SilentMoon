import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";

interface Day {
  day: string;
  isActive?: boolean;
  onPress?: () => void;
}
export const DaySelector = ({ day, isActive = false, onPress }: Day) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.main, isActive && styles.active]}
    >
      <Text style={[styles.text, isActive && styles.activeText]}>{day}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: colors.mainText,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.mainText,
    fontSize: 14,
    fontFamily: fontFamily.normal,
  },
  active: {
    backgroundColor: colors.primary,
  },
  activeText: {
    color: colors.activeText,
  },
});
