import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import { lightColors } from "@/src/theme/colors";

interface TopicCardProps {
  title: string;
  color: string;
  imageMarginVertical?: number;
  textMarginTop?: number;
  image: ReactNode;
  height?: number;
  textColor?: string;
  onPress?: () => void;
}

export default function TopicCard({
  title,
  color,
  image,
  height = 210,
  textColor = lightColors.primary,
  imageMarginVertical,
  textMarginTop,
  onPress,
}: TopicCardProps) {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: color, height }]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View
        style={[styles.imageWrapper, { marginVertical: imageMarginVertical }]}
      >
        {image}
      </View>
      <Text
        style={[styles.text, { color: textColor, marginTop: textMarginTop }]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginBottom: 15,
    // justifyContent: "flex-end",
    // padding: 16,
  },
  imageWrapper: {
    alignItems: "center",
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    fontFamily: "HelveticaNeue-Bold",
    marginLeft: 15,
  },
});
