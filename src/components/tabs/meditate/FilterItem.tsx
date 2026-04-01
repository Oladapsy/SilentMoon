import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";

interface Props {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onPress: () => void;
}

export default function FilterItem({ label, icon, isActive, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={[styles.iconBox, isActive && styles.activeIconBox]}>{icon}</View>
      <Text style={[styles.label, isActive && styles.activeLabel]}>{label}</Text>
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
    backgroundColor: colors.iconInactive,
  },
  activeIconBox: {
    backgroundColor: colors.tetiary,
  },
  label: {
    fontSize: 16,
    color: colors.iconInactive,
  },
  activeLabel: {
    color: colors.primary,
    fontFamily: fontFamily.bold,
  }
});
