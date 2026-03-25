import { View, StyleSheet } from "react-native";
import React from "react";
import ActionText from "@/src/components/common/ActionText";
import { colors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";

interface Props {
  mainText: string;
  minorText: string;
}
export default function ReminderText({ mainText, minorText }: Props) {
  return (
    <View>
      <View style={styles.text}>
        <View style={styles.mainText}>
          <ActionText
            main={mainText}
            mainSize={24}
            mainColor={colors.primary}
            fontFamily={fontFamily.bold}
          />
        </View>
        <View style={styles.minorText}>
          <ActionText
            main={minorText}
            mainSize={16}
            mainColor={colors.primary}
            fontFamily={fontFamily.light}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 35,
    marginBottom: 25,
  },
  mainText: {
    marginBottom: 7,
    maxWidth: "70%",
  },
  minorText: {
    maxWidth: "85%",
  },
});
