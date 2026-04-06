import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { lightColors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";

interface Props {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onPress: () => void;
  // just added
  activeLabelColor?: string;
  inactiveIconBg?: string;
}

export default function FilterItem({
  label,
  icon,
  isActive,
  onPress,
  activeLabelColor = lightColors.primary,
  inactiveIconBg = lightColors.iconInactive,
}: Props) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={[styles.iconBox, {backgroundColor: inactiveIconBg}, isActive && styles.activeIconBox]}>
        {icon}
      </View>
      <Text
        style={[
          styles.label,
          isActive && styles.activeLabel,
          isActive && { color: activeLabelColor },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    gap: 8,
  },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: lightColors.iconInactive,
  },
  activeIconBox: {
    backgroundColor: lightColors.tetiary,
  },
  label: {
    fontSize: 16,
    color: lightColors.iconInactive,
  },
  activeLabel: {
    color: lightColors.primary,
    fontFamily: fontFamily.bold,
  },
});
