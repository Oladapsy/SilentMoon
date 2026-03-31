import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import PlayIcon from "@/assets/svg/tabs/common/play.svg";
import ActionText from "@/src/components/common/ActionText";
import { colors } from "@/src/theme/colors";

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
        <PlayIcon color={isActive ? colors.buttonText : colors.secondary} />
      </View>

      <View>
        <ActionText main={title} mainColor={colors.primary} mainSize={16}/>
        <ActionText main={duration} mainColor={colors.secondary} mainSize={11}/>
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
    borderColor: colors.voiceBorder,
    paddingVertical: 20,
    marginHorizontal: 20
  },
  playButton: {
    padding: 13,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  activePlayButton: {
    backgroundColor: colors.tetiary,
    padding: 13,
  },
});
