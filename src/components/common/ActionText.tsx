import React from "react";
import { View, Text, StyleSheet, TextProps } from "react-native";
import { lightColors } from "@/src/theme/colors";
import { Href, Link } from "expo-router";

interface ActionTextProps extends TextProps {
  main: string;
  sub?: string;
  subColor?: string;
  mainColor?: string;
  route?: Href;
  mainSize?: number;
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  fontFamily?: string;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  lineHeight?: number;
}

export default function ActionText({
  main,
  sub,
  mainColor = lightColors.mainText,
  route,
  mainSize = 14,
  fontWeight = "400",
  fontFamily = "HelveticaNeue-Bold",
  textAlign,
  lineHeight,
  subColor = lightColors.tetiary,
}: ActionTextProps) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.mainText,
          {
            color: mainColor,
            fontSize: mainSize,
            fontFamily,
            fontWeight,
            textAlign,
            lineHeight,
          },
        ]}
      >
        {main}{" "}
      </Text>

      {sub && route && (
        <Link href={route} style={[styles.subText, { color: subColor }]}>
          {sub}
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
    // color: lightColors.tetiary,
    fontSize: 14,
  },
});
