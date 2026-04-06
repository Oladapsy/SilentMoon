import { FlatList, StyleSheet } from "react-native";
import React from "react";
import NightMusicCard from "./NightMusicCard";
import SleepMusic1 from "@/assets/svg/tabs/sleep/sleepMusic1.svg";
import SleepMusic2 from "@/assets/svg/tabs/sleep/sleepMusic2.svg";
import SleepMusic3 from "@/assets/svg/tabs/sleep/sleepMusic3.svg";
import SleepMusic4 from "@/assets/svg/tabs/sleep/sleepMusic4.svg";

const data = [
  {
    id: "1",
    title: "Night Island",
    icon: <SleepMusic1 />,
  },
  {
    id: "2",
    title: "Sweet Sleep",
    icon: <SleepMusic2 />,
  },
  {
    id: "3",
    title: "Good Night",
    icon: <SleepMusic3 />,
  },
  {
    id: "4",
    title: "Moon Clouds",
    icon: <SleepMusic4 />,
  },
  {
    id: "5",
    title: "Sweet Sleep",
    icon: <SleepMusic2 />,
  },
  {
    id: "6",
    title: "Good Night",
    icon: <SleepMusic1 />,
  },
  {
    id: "7",
    title: "Night Island",
    icon: <SleepMusic3 />,
  },
  {
    id: "8",
    title: "Moon Clouds",
    icon: <SleepMusic4 />,
  },
];

export default function SleepMusicList() {
  return (
    <FlatList
      data={data}
      numColumns={2}
      horizontal={false}
      columnWrapperStyle={styles.columnWrapper}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.flastListContent}
      renderItem={({ item }) => (
        <NightMusicCard title={item.title} icon={item.icon} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  flastListContent: {
    flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap",
    gap: 20,
    paddingHorizontal: 15,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});
