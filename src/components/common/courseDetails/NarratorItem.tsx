import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import PlayIcon from "@/assets/svg/tabs/common/play.svg";
import ActionText from "@/src/components/common/ActionText";
import { lightColors } from "@/src/theme/colors";

interface Props {
  title: string;
  duration: string;
  isActive?: boolean;
  onPress?: () => void;
}
export default function NarratorItem({
  title,
  duration,
  isActive,
  onPress,
}: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.playButton, isActive && styles.activePlayButton]}>
        <PlayIcon color={isActive ? lightColors.buttonText : lightColors.secondary} />
      </View>

      <View>
        <ActionText main={title} mainColor={lightColors.primary} mainSize={16}/>
        <ActionText main={duration} mainColor={lightColors.secondary} mainSize={11}/>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: lightColors.voiceBorder,
    paddingVertical: 20,
    marginHorizontal: 20
  },
  playButton: {
    padding: 13,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: lightColors.secondary,
  },
  activePlayButton: {
    backgroundColor: lightColors.tetiary,
    padding: 13,
  },
});
