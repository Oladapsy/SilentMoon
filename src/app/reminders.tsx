import { StyleSheet, View } from "react-native";
import React from "react";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import TimeSelector from "@/src/components/common/reminder/TimeSelector";
import ReminderText from "@/src/components/common/reminder/ReminderText";
import { DaySelector } from "@/src/components/common/reminder/DaySelector";

export default function reminders() {
  return (
    <MySafeAreaView>
      <View style={styles.maincontent}>
        {/* Top Text */}
        <ReminderText
          mainText="What time would you like to meditate?"
          minorText="Any time you can choose but We recommend first thing in th morning."
        />

        {/* Next!!! the Time selectr */}
        <View>
          <TimeSelector />
        </View>

        {/* the second text */}
        <ReminderText
          mainText="Which day would you like to meditate?"
          minorText="Everyday is best, but we recommend picking at least five."
        />

        {/* Days Selector */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "red",
            gap: 12,
            justifyContent: "space-between",
          }}
        >
          <DaySelector day="SU" />
          <DaySelector day="M" />
          <DaySelector day="T" />
          <DaySelector day="W" />
          <DaySelector day="TH" />
          <DaySelector day="F" />
          <DaySelector day="S" />
        </View>
      </View>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  maincontent: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
});
