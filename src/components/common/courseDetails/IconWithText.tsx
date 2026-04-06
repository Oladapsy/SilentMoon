import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { lightColors } from "@/src/theme/colors";

interface Props {
  icon: React.ReactNode;
  text: string;
}

export default function IconWithText({ icon, text }: Props) {
  return (
    <View style={styles.container}>
      <View>{icon}</View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center',
    }
    ,
    text: {
        color: lightColors.secondary,
    }
})
