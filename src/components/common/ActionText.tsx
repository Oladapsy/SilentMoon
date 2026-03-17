import React from "react";
import { View, Text, StyleSheet, TextProps } from "react-native";
import { colors } from "@/src/theme/colors";
import { Href, Link } from "expo-router";

interface ActionTextProps extends TextProps {
  main: string;
  sub?: string;
  mainColor?: string;
  route?: Href;
}

export default function ActionText({
  main,
  sub,
  mainColor = colors.mainText,
  route,
}: ActionTextProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.mainText, { color: mainColor }]}>{main} </Text>

      {sub && route && (
        <Link href={route} asChild>
          <Text style={styles.subText}>{sub}</Text>
        </Link>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
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
