import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import TimeSelector from "@/src/components/common/reminder/TimeSelector";
import ReminderText from "@/src/components/common/reminder/ReminderText";
import { DaySelector } from "@/src/components/common/reminder/DaySelector";
import MainButton from "@/src/components/common/MainButton";
import ActionText from "@/src/components/common/ActionText";
import { colors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";

const DAYS = ["SU", "M", "T", "W", "TH", "F", "S"];

export default function Reminders() {
  // selected days
  const [selectedDays, setSelectedDays] = useState<string[]>([
    "SU",
    "M",
    "T",
    "W",
    "S",
  ]);

  // add or remove day from selectedDays Array....
  const toggleDay = (key: string) => {
    //the function takes an argument key which is a string e.g "S", "SU"
    setSelectedDays(
      (prev) =>
        // prev is the current state of selected day array before the update. So if ["SU", "M", "W"] is currently selected, prev = ["SU", "M", "W"].
        prev.includes(key) ? prev.filter((d) => d !== key) : [...prev, key],
      // prev.include(key) checks if the day is already in the array
      // if yes: remove the day from the array
      // if no: add the day to the array
    );
  };

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
        <View style={styles.DaySelector}>
          {DAYS.map((day) => (
            <DaySelector
              key={day}
              day={day}
              isActive={selectedDays.includes(day)}
              onPress={() => toggleDay(day)}
            />
          ))}
        </View>

        {/* final action Button */}
        <View style={styles.finalText}>
          <MainButton text="SAVE" route="/home"/>
        </View>
        {/* final mini text */}
        <View style={styles.finalMiniText}>
          <ActionText
            main="NO THANKS"
            mainSize={14}
            mainColor={colors.primary}
            fontFamily={fontFamily.light}
          />
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
  DaySelector: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
    marginVertical: 10,
  },
  finalText: {
    marginTop: 35,
  },
  finalMiniText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  }
});
