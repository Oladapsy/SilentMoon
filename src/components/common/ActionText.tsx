import React from "react";
import { View, Text, StyleSheet, TextProps } from "react-native";
import { colors } from "@/src/theme/colors";

interface ActionTextProps extends TextProps {
  main: string;
  sub?: string;
  mainColor?: string;
}

export default function ActionText({
  main,
  sub,
  mainColor = colors.mainText,
}: ActionTextProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.mainText, { color: mainColor }]}>
        {main} {sub && <Text style={styles.subText}>{sub}</Text>}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  mainText: {
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 14,
  },
  subText: {
    fontFamily: "HelveticaNeue-Bold",
    color: colors.tetiary,
    fontSize: 14,
  },
});
