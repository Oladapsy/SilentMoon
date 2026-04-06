import React from "react";
import MySafeAreaView from "@/src/components/common/MySafeAreaView";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { darkColors, lightColors } from "../../../theme/colors";
// import HeadNavigation from "@/src/components/common/HeadNavigation";
import ActionText from "@/src/components/common/ActionText";
import { router } from "expo-router";
import Back from "@/assets/svg/back.svg";
import NightMusicCard from "@/src/components/tabs/sleep/NightMusicCard";
import SleepMusic1 from "@/assets/svg/tabs/sleep/sleepMusic1.svg";
import SleepMusic2 from "@/assets/svg/tabs/sleep/sleepMusic2.svg";
import SleepMusic3 from "@/assets/svg/tabs/sleep/sleepMusic3.svg";
import SleepMusic4 from "@/assets/svg/tabs/sleep/sleepMusic4.svg";

const LEFT_data = [
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

const RIGHT_data = [
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
export default function SleepMusic() {
  return (
    <MySafeAreaView color={darkColors.musicNavBg}>
      <ScrollView>
        <View style={styles.headNav}>
          <TouchableOpacity style={styles.icon1} onPress={() => router.back()}>
            <Back />
          </TouchableOpacity>
          <ActionText
            main="Sleep Music"
            mainSize={24}
            mainColor={darkColors.primary}
            textAlign="center"
          />
        </View>

        {/* <View style={styles.container}>
        <SleepMusicList />
      </View> */}

        <View style={styles.card}>
          <View>
            {LEFT_data.map((item) => (
              <NightMusicCard
                key={item.id}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </View>
          <View>
            {RIGHT_data.map((item) => (
              <NightMusicCard
                key={item.id}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
  },
  headNav: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: "flex-start",
    marginBottom: 30,
    alignItems: "center",
    gap: 45,
  },
  icon1: {
    backgroundColor: "white",
    padding: 15,
    borderWidth: 0,
    borderColor: lightColors.navBorder,
    borderRadius: 100,
  },
  card: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
