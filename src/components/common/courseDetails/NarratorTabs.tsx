import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";
import { lightColors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";

interface Props {
  selected: "male" | "female";
  onSelect: (voice: "male" | "female") => void;
}
export default function NarratorTabs({selected, onSelect}: Props) {

  return (
    <View style={styles.container}>
      {/* The male tab */}
      <TouchableOpacity onPress={() => onSelect("male")}>
        <Text style={[styles.tab, selected === "male" && styles.activeTab]}>
          MALE VOICE
        </Text>
         {selected === "male" && <View style={styles.underline} />}
      </TouchableOpacity>

      {/* The female Tab */}
      <TouchableOpacity onPress={() => onSelect("female")}>
        <Text style={[styles.tab, selected === "female" && styles.activeTab]}>
          FEMALE VOICE
        </Text>
         {selected === "female" && <View style={styles.underline} />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 50,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: lightColors.courseBorder,
  },
  tab: {
    color: lightColors.secondary,
    fontFamily: fontFamily.normal,
    fontSize: 15,
    paddingBottom: 10,
  },
  activeTab: {
    color: lightColors.tetiary,
    fontFamily: fontFamily.normal,
  },
  underline: {
    height: 2,
    backgroundColor: lightColors.tetiary,
    borderRadius: 2,
    width: 40,
    marginHorizontal: 28,
  }
});
