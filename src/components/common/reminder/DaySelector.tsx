import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "@/src/theme/colors";

interface Day {
  day: string;
}
export const DaySelector = ({ day }: Day) => {
  return (
    <TouchableOpacity style={styles.main}>
      <Text>{day}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.mainText,
    borderRadius: 100,
  },
});
