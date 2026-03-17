import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "@/src/theme/colors";

interface DashLineProps {
  color?: string; // optional, defaults to secondary
}

export default function DashLine({ color = colors.line }: DashLineProps) {
  return <View style={[styles.line, { borderBottomColor: color }]} />;
}

const styles = StyleSheet.create({
  line: {
    width: "36%",
    borderBottomWidth: 5,
    margin: 20,
    borderRadius: 10,    
  },
});
