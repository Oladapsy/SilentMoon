import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@/src/theme/colors";

interface HomeTextProps {
  title: string;
  description?: string;
}

export default function HomeText({ title, description }: HomeTextProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      {description && <Text style={styles.descriptionText}>{description}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: colors.primary,
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 13,
  },
  descriptionText: {
    color: colors.secondary,
    fontFamily: "HelveticaNeue-Light",
    fontSize: 13,
    textAlign: "center",
    letterSpacing: 1,
    lineHeight: 20,  
  },
});
