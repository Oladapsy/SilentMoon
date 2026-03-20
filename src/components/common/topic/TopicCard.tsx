import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

interface TopicCardProps {
  title: string;
  color: string;
  image: React.ReactNode;
  height: number;
  textColor?: string;
  onPress?: () => void;
}

export default function TopicCard({
  title,
  color,
  image,
  height,
  textColor = "white",
  onPress,
}: TopicCardProps) {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: color, height }]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.imageWrapper}>{image}</View>
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    justifyContent: "flex-end",
    padding: 16,
  },
  imageWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 18,
    lineHeight: 24,
    zIndex: 1,
  },
});